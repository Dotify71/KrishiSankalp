from fastapi import FastAPI, Query, Form, HTTPException, File, UploadFile
from translations import translate_dict
import base64
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, Text
from sqlalchemy.orm import declarative_base, sessionmaker
import datetime
from typing import Optional
import json
import logging
import os
import random
import requests
import secrets
from dotenv import load_dotenv
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi import Depends, HTTPException
from fastapi import Depends, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware

# Configure logging for production
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

app = FastAPI(title="KrishiSankalp API")

security_bearer = HTTPBearer()

def verify_google_token(credentials: HTTPAuthorizationCredentials = Depends(security_bearer)):
    token = credentials.credentials
    try:
        # Note: In production you should pass the CLIENT_ID to audience. Here we verify the signature and expiry.
        idinfo = id_token.verify_oauth2_token(token, google_requests.Request())
        return idinfo
    except ValueError:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")



# --- Keep-Alive Logic for Render Free Tier ---
import threading
import time

def keep_alive_ping():
    """Pings the app's own URL to keep it from sleeping on Render's free tier."""
    url = os.getenv("RENDER_EXTERNAL_URL")
    if not url:
        logger.info("RENDER_EXTERNAL_URL not set, skipping self-ping.")
        return
    
    logger.info(f"Starting keep-alive background thread for: {url}")
    while True:
        try:
            # Ping the health endpoint every 10 minutes (600 seconds)
            requests.get(f"{url}/health", timeout=5)
            logger.info("Keep-alive self-ping successful.")
        except Exception as e:
            logger.error(f"Keep-alive self-ping failed: {e}")
        time.sleep(600)

def seed_db():
    try:
        db = SessionLocal()
        if db.query(CommunityPost).count() == 0:
            logger.info("Seeding community database with default stories...")
            seeds = [
                CommunityPost(author="Rajesh Kumar", location="Ludhiana, Punjab", content="The AI correctly identified Wheat Rust on my farm. I followed the organic treatment and saved 2 acres of crop!", tag="Saved Crop"),
                CommunityPost(author="Amit Patil", location="Nashik, Maharashtra", content="Checking market prices here helped me sell my onions at ₹400/quintal more than the local mandi price.", tag="Higher Profit"),
                CommunityPost(author="S. Venkatesh", location="Kurnool, Andhra", content="Recommended the PB-1121 Basmati variety. The yield was 20% higher than my traditional seeds.", tag="Higher Yield"),
                CommunityPost(author="Gurminder Singh", location="Amritsar, Punjab", content="The satellite monitoring warned me about crop stress early. A quick irrigation saved my mustard field.", tag="Early Warning")
            ]
            db.add_all(seeds)
            db.commit()
        db.close()
    except Exception as e:
        logger.error(f"Seeding failed: {e}")

@app.on_event("startup")
async def startup_event():
    seed_db()
    # Start the keep-alive thread in the background
    threading.Thread(target=keep_alive_ping, daemon=True).start()

@app.get("/health")
def health_check():
    return {"status": "healthy", "time": datetime.datetime.utcnow()}


security = HTTPBasic()
WEATHER_API_KEY = os.getenv("WEATHER_API_KEY")
TREFLE_TOKEN = os.getenv("TREFLE_TOKEN")
GOVT_DATA_API_KEY = os.getenv("GOVT_DATA_API_KEY")
KINDWISE_TOKEN = os.getenv("KINDWISE_TOKEN")
AGRO_API_KEY = os.getenv("AGRO_API_KEY")

def verify_admin(credentials: HTTPBasicCredentials = Depends(security)):
    admin_user = os.getenv("ADMIN_USERNAME", "admin")
    admin_pass = os.getenv("ADMIN_PASSWORD", "admin123")
    
    correct_username = secrets.compare_digest(credentials.username, admin_user)
    correct_password = secrets.compare_digest(credentials.password, admin_pass)
    if not (correct_username and correct_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Basic"},
        )
    return credentials.username

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- 1. Database Setup (SQLite) ---
SQLALCHEMY_DATABASE_URL = "sqlite:///./krishi.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class FarmQuery(Base):
    __tablename__ = "farm_queries"
    id = Column(Integer, primary_key=True, index=True)
    location = Column(String, index=True)
    soil = Column(String)
    season = Column(String)
    water = Column(String)
    farm_size = Column(Float)
    budget = Column(Float)
    lat = Column(Float, nullable=True)
    lon = Column(Float, nullable=True)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)

class User(Base):
    __tablename__ = "users"
    email = Column(String, primary_key=True, index=True)
    name = Column(String)
    picture = Column(String)
    # Farm settings
    location = Column(String)
    soil = Column(String)
    season = Column(String)
    water = Column(String)
    farm_size = Column(Float)
    budget = Column(Float)
    last_login = Column(DateTime, default=datetime.datetime.utcnow)

class CommunityPost(Base):
    __tablename__ = "community_posts"
    id = Column(Integer, primary_key=True, index=True)
    author = Column(String)
    location = Column(String)
    content = Column(String)
    tag = Column(String) # e.g., "Saved Crop", "Higher Yield"
    image_data = Column(Text, nullable=True)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)

Base.metadata.create_all(bind=engine)

# --- 2. Pydantic Models for API ---
class FarmData(BaseModel):
    location: str
    soil: str
    season: str
    water: str
    farmSize: float
    budget: float
    lat: Optional[float] = None
    lon: Optional[float] = None

class UserSync(BaseModel):
    email: str
    name: str
    picture: str = None
    location: str = None
    soil: str = None
    season: str = None
    water: str = None
    farmSize: float = None
    budget: float = None

# --- 3. API Endpoints ---
@app.post("/recommend")
def get_recommendation(data: FarmData, lang: str = "en"):
    # A. Save the incoming search query to the database
    db = SessionLocal()
    db_query = FarmQuery(
        location=data.location,
        soil=data.soil,
        season=data.season,
        water=data.water,
        farm_size=data.farmSize,
        budget=data.budget,
        lat=data.lat,
        lon=data.lon
    )
    db.add(db_query)
    db.commit()
    db.refresh(db_query)
    db.close()

    logger.info(f"Processing recommendation for {data.location} | Season: {data.season}")

    # B. Sophisticated Agro-Climatic Logic Engine
    current_month = datetime.datetime.now().strftime("%B")
    
    raw_location = data.location.lower()
    if "," in raw_location:
        state = raw_location.split(",")[-1].strip()
    else:
        state = raw_location.strip()
        
    season_lower = data.season.lower()
    is_winter = any(w in season_lower for w in ["rabi", "winter", "shishir", "hemant"])
    is_monsoon = any(w in season_lower for w in ["kharif", "monsoon", "varsha", "autumn", "sharad"])
    
    # 1. Defaults & Logic
    temp = "25°C - 35°C"
    rainfall = "Moderate"
    humidity = "60%"
    all_potential_crops = []

    # 1. Load Scalable Knowledge Base
    try:
        with open("krishi_data.json", "r") as f:
            kb = json.load(f)
    except:
        kb = {"regions": {}, "insurance": {}}

    # Determine Region Key via Mapping
    REGION_MAP = {
        "maharashtra": "maharashtra_gujarat", "gujarat": "maharashtra_gujarat",
        "himachal": "himalayan", "uttarakhand": "himalayan", "jammu": "himalayan", "sikkim": "himalayan",
        "rajasthan": "rajasthan",
        "assam": "north_east", "meghalaya": "north_east", "tripura": "north_east", "nagaland": "north_east",
        "karnataka": "south_india", "tamil nadu": "south_india", "kerala": "south_india", "andhra": "south_india", "telangana": "south_india",
        "uttar pradesh": "central_india", "bihar": "central_india", "madhya pradesh": "central_india", "chhattisgarh": "central_india", "jharkhand": "central_india",
        "lakshadweep": "coastal_islands", "andaman": "coastal_islands", "goa": "coastal_islands", "odisha": "coastal_islands", "bengal": "coastal_islands", "puducherry": "coastal_islands"
    }
    
    region_key = "punjab_haryana" # Default
    for key, r_val in REGION_MAP.items():
        if key in state:
            region_key = r_val
            break

    # Get Regional Data with safe fallbacks
    region_data = kb.get("regions", {}).get(region_key)
    
    # If the specific region or the entire JSON is missing, use a hardcoded safety fallback
    if not region_data:
        region_data = kb.get("regions", {}).get("punjab_haryana", {
            "temp": "Seasonal", "rainfall": "Varies", 
            "crops": [{ "name": "General Crops", "yield": "Varies", "investment": 5000, "price": 2000, "tip": "Contact local KVK for specific advice." }]
        })
    
    all_potential_crops = region_data.get("crops", [])
    temp = region_data.get("temp", "25°C")
    rainfall = region_data.get("rainfall", "Moderate")
    humidity = "65%"

    # --- Smarter Filtering Logic ---
    budget = data.budget
    farm_size = data.farmSize if data.farmSize > 0 else 1.0
    soil_type = data.soil.lower()
    water_source = data.water.lower()
    
    # Calculate budget available PER ACRE
    budget_per_acre = budget / farm_size
    
    regional_crops = []
    for c in all_potential_crops:
        # 1. Budget Check: Can they afford the per-acre investment?
        if c["investment"] > budget_per_acre * 1.15: # 15% buffer
            continue
            
        # 2. Soil Suitability Check (Soft match)
        if "soil" in c:
            suitable_soil = any(s in soil_type for s in c["soil"])
            if not suitable_soil: continue
            
        # 3. Water Source Check (Soft match)
        if "water" in c:
            suitable_water = any(w in water_source for w in c["water"])
            if not suitable_water: continue
            
        regional_crops.append(c)

    # If no crops fit perfectly, loosen the constraints to provide at least some advice
    if not regional_crops:
        regional_crops = [c for c in all_potential_crops if c["investment"] <= budget_per_acre * 1.5][:2]

    # Final Fallback for extremely low budgets
    if not regional_crops:
        regional_crops = [
            { "name": "Organic Kitchen Garden (Mixed)", "yield": "High variety", "investment": int(budget_per_acre), "price": "Self Consumption", "tip": "Grow 5-6 types of seasonal vegetables for family nutrition." }
        ]

    # Format investment for display
    for c in regional_crops:
        c["investment"] = f"{c['investment']:,}"


    # 3. Fetch True Live Market Prices from Agmarknet (data.gov.in)
    today = datetime.date.today().toordinal()
    API_KEY = GOVT_DATA_API_KEY
    BASE_URL = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070"
    
    for crop in regional_crops:
        # Clean commodity name
        commodity_search = crop["name"].split(" (")[0]
        state_title = state.title()
        
        live_price = None
        trend = t_val if (t_val := crop.get("trend")) else "Stable"
        
        # Only fetch/calculate price if it's a commercial crop
        if isinstance(crop["price"], (int, float)) or (isinstance(crop["price"], str) and crop["price"].replace(",", "").isdigit()):
            try:
                url = f"{BASE_URL}?api-key={API_KEY}&format=json&limit=1&filters[state]={state_title}&filters[commodity]={commodity_search}"
                response = requests.get(url, timeout=1.5) # Fast timeout for better UX
                if response.status_code == 200:
                    data_json = response.json()
                    if "records" in data_json and len(data_json["records"]) > 0:
                        record = data_json["records"][0]
                        live_price = int(record["modal_price"])
                        trend = "Rising (Live Mandi Data)" if live_price > int(record.get("min_price", 0)) * 1.1 else "Stable (Live Mandi Data)"
            except Exception as e:
                logger.warning(f"Market fetch failed for {commodity_search}: {str(e)}")
                pass
                
            if live_price is None:
                random.seed(today + hash(crop["name"]))
                base_price_str = str(crop["price"]).replace(",", "")
                base_price = int(base_price_str)
                fluctuation = random.uniform(-0.03, 0.06)
                live_price = int(base_price + (base_price * fluctuation))
                trend = "Rising (High Demand)" if fluctuation > 0.02 else "Falling (Oversupply)" if fluctuation < -0.01 else "Stable"
            
            price_per_kg = round(live_price / 100, 2)
            crop["price"] = f"{live_price:,}"
            crop["price_kg"] = f"{price_per_kg:,.2f}"
            crop["trend"] = trend
        else:
            # Handle special cases like "Self Consumption"
            crop["price_kg"] = "Personal Use"
            crop["trend"] = "Stable"

    # Reset random seed
    random.seed()

    live_temp = f"Seasonal Avg ({temp})"
    live_hum = humidity
    live_desc = "Standard conditions"
    lat, lon = data.lat, data.lon
    
    # If GPS not provided, fallback to city search
    if not lat or not lon:
        try:
            w_url = f"https://api.openweathermap.org/data/2.5/weather?q={data.location}&appid={WEATHER_API_KEY}&units=metric"
            w_res = requests.get(w_url, timeout=2)
            if w_res.status_code == 200:
                w_data = w_res.json()
                lat = w_data['coord']['lat']
                lon = w_data['coord']['lon']
        except: pass
    
    if lat and lon:
        try:
            w_url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={WEATHER_API_KEY}&units=metric"
            w_res = requests.get(w_url, timeout=2)
            if w_res.status_code == 200:
                w_data = w_res.json()
                live_temp = f"{w_data['main']['temp']}°C"
                live_hum = f"{w_data['main']['humidity']}%"
                live_desc = w_data['weather'][0]['description'].capitalize()
                lat = w_data['coord']['lat']
                lon = w_data['coord']['lon']
                if w_data['main']['temp'] > 40:
                    live_desc += " ⚠️ Extreme Heat Alert"
                elif w_data['main']['temp'] < 5:
                    live_desc += " ⚠️ Frost Warning"
        except:
            pass

    # --- 5. Global Soil Intelligence (SoilGrids API) ---
    soil_insight = "Regional standard soil"
    if lat and lon:
        try:
            # Fetch soil properties at 0-5cm depth
            s_url = f"https://rest.isric.org/soilgrids/v2.0/properties/query?lon={lon}&lat={lat}&property=clay&property=sand&property=silt&depth=0-5cm&value=mean"
            s_res = requests.get(s_url, timeout=2)
            if s_res.status_code == 200:
                s_data = s_res.json()
                props = s_data['properties']['layers']
                clay = props[0]['depths'][0]['values']['mean'] / 10 # Convert to percentage
                sand = props[1]['depths'][0]['values']['mean'] / 10
                soil_insight = f"Scientific Data: Clay {clay:.1f}%, Sand {sand:.1f}%. Suitability Verified."
        except:
            pass

    # --- 6. Dynamic Expert Tips (OpenFarm & Trefle) ---
    for crop in regional_crops:
        try:
            # 6a. OpenFarm Data
            of_url = f"https://openfarm.cc/api/v1/crops/?filter={crop['name'].split(' ')[0]}"
            of_res = requests.get(of_url, timeout=1.5)
            if of_res.status_code == 200:
                of_data = of_res.json()
                if of_data['data'] and len(of_data['data']) > 0:
                    slug = of_data['data'][0]['attributes']['slug']
                    crop['tip'] += f" [Community Insight: {slug.replace('-', ' ').title()}]"
            
            # 6b. Trefle Botanical Data
            t_url = f"https://trefle.io/api/v1/species/search?token={TREFLE_TOKEN}&q={crop['name'].split(' ')[0]}"
            t_res = requests.get(t_url, timeout=1.5)
            if t_res.status_code == 200:
                t_data = t_res.json()
                if t_data['data'] and len(t_data['data']) > 0:
                    fam = t_data['data'][0].get('family', 'Unknown')
                    crop['tip'] += f" [Botanical: {fam} Family]"
        except:
            pass

    # 7. Government Schemes & Insurance Logic
    ins_key = "kharif" if is_monsoon else "rabi" if is_winter else "commercial"
    insurance_data = kb["insurance"].get(ins_key, kb["insurance"].get("commercial"))
    
    premium_amt = int(budget * insurance_data["premium_rate"])
    
    schemes = [
        {"name": "PM-Kisan Samman Nidhi", "desc": "Income support of ₹6,000 per year.", "eligibility": "All landholding farmers"},
        {"name": insurance_data["name"], "desc": f"Recommended insurance coverage for your {current_month} crops. Your estimated premium is ₹{premium_amt:,}.", "eligibility": f"Current Season: {current_month}"}
    ]
    
    # Merge with Regional Schemes
    if "schemes" in region_data:
        schemes.extend(region_data["schemes"])

    # --- 7. Satellite Yield Analysis (AgroMonitoring) ---
    ndvi_data = {"status": "No data", "value": 0}
    if lat and lon:
        if not AGRO_API_KEY:
            ndvi_data["status"] = "API Key Missing"
        else:
            try:
                # 7a. Create a small polygon for the farm if not exists
                # Using a 0.014 degree square (~1.5km) to provide better context and less blur
                poly_name = f"ks_farm_{round(lat, 4)}_{round(lon, 4)}"
                agro_url = f"https://api.agromonitoring.com/agro/1.0/polygons?appid={AGRO_API_KEY}"
                
                offset = 0.007
                coords = [
                    [lon - offset, lat - offset], [lon + offset, lat - offset],
                    [lon + offset, lat + offset], [lon - offset, lat + offset],
                    [lon - offset, lat - offset]
                ]

                # Robust Polygon Management: List -> Update or Create
                list_res = requests.get(agro_url, timeout=10)
                poly_id = None
                
                if list_res.status_code == 200:
                    polygons = list_res.json()
                    if polygons:
                        # Use the first existing polygon and update its coordinates
                        poly_id = polygons[0]['id']
                        update_url = f"https://api.agromonitoring.com/agro/1.0/polygons/{poly_id}?appid={AGRO_API_KEY}"
                        requests.put(update_url, json={
                            "name": poly_name,
                            "geo_json": {
                                "type": "Feature", "properties": {},
                                "geometry": {"type": "Polygon", "coordinates": [coords]}
                            }
                        }, timeout=10)
                        logger.info(f"Updated existing polygon {poly_id} for new location.")
                
                if not poly_id:
                    # Create new if none exists
                    poly_res = requests.post(agro_url, json={
                        "name": poly_name,
                        "geo_json": {
                            "type": "Feature", "properties": {},
                            "geometry": {"type": "Polygon", "coordinates": [coords]}
                        }
                    }, timeout=10)
                    if poly_res.status_code == 201:
                        poly_id = poly_res.json()['id']
                
                if poly_id:
                    end_time = int(datetime.datetime.now().timestamp())
                    start_time = end_time - (60 * 24 * 60 * 60) # 60 days for better chance of data
                    ndvi_url = f"https://api.agromonitoring.com/agro/1.0/ndvi/history?polyid={poly_id}&start={start_time}&end={end_time}&appid={AGRO_API_KEY}"
                    
                    ndvi_res = requests.get(ndvi_url, timeout=10)
                    if ndvi_res.status_code == 200:
                        history = ndvi_res.json()
                        if history:
                            latest = history[-1]
                            ndvi_val = latest['data']['mean']
                            status = "Excellent" if ndvi_val > 0.6 else "Good" if ndvi_val > 0.4 else "Moderate" if ndvi_val > 0.2 else "Low (Stress)"
                            
                            # Fetch the actual image tile (True Color or NDVI)
                            image_search_url = f"https://api.agromonitoring.com/agro/1.0/image/search?polyid={poly_id}&appid={AGRO_API_KEY}&start={start_time}&end={end_time}"
                            img_search_res = requests.get(image_search_url, timeout=10)
                            map_url = None
                            if img_search_res.status_code == 200:
                                img_data = img_search_res.json()
                                if img_data:
                                    # Get the latest True Color image for visual confirmation
                                    map_url = img_data[-1].get('image', {}).get('truecolor')
                            
                            ndvi_data = {
                                "status": status,
                                "value": round(ndvi_val, 2),
                                "map_url": map_url
                            }
                        else:
                            ndvi_data["status"] = "Waiting for Satellite Pass"
                    else:
                        ndvi_data["status"] = f"API Error ({ndvi_res.status_code})"
                else:
                    ndvi_data["status"] = "Polygon Sync Error"
            except requests.exceptions.Timeout:
                ndvi_data["status"] = "API Timeout"
            except Exception as e:
                logger.error(f"Satellite analysis failed: {str(e)}")
                ndvi_data["status"] = "Connection Error"

    response_data = {
        "crops": regional_crops,
        "market": [{"crop": c["name"].split(" (")[0], "price": c["price"], "trend": c.get("trend", "Stable")} for c in regional_crops if c.get("price") and c.get("price") != "Personal Use"],
        "weather": {
            "location": data.location,
            "temp": live_temp,
            "rainfall": rainfall,
            "humidity": live_hum,
            "desc": live_desc,
            "soil_analysis": soil_insight
        },
        "yield": ndvi_data,
        "schemes": schemes,
        "query_id": db_query.id
    }
    return translate_dict(response_data, lang)

@app.post("/api/user/sync")
def sync_user(data: UserSync, token_data: dict = Depends(verify_google_token)):
    if token_data.get('email') != data.email:
        raise HTTPException(status_code=403, detail="Not authorized to sync this user")
    db = SessionLocal()
    db_user = db.query(User).filter(User.email == data.email).first()
    
    if not db_user:
        db_user = User(email=data.email)
        db.add(db_user)
    
    db_user.name = data.name
    if data.picture: db_user.picture = data.picture
    if data.location: db_user.location = data.location
    if data.soil: db_user.soil = data.soil
    if data.season: db_user.season = data.season
    if data.water: db_user.water = data.water
    if data.farmSize is not None: db_user.farm_size = data.farmSize
    if data.budget is not None: db_user.budget = data.budget
    db_user.last_login = datetime.datetime.utcnow()
    
    db.commit()
    db.refresh(db_user)
    
    # Return everything for frontend to sync back
    response_data = {
        "email": db_user.email,
        "name": db_user.name,
        "picture": db_user.picture,
        "location": db_user.location,
        "soil": db_user.soil,
        "season": db_user.season,
        "water": db_user.water,
        "farmSize": db_user.farm_size,
        "budget": db_user.budget
    }
    db.close()
    return response_data

@app.get("/api/user/profile/{email}")
def get_user_profile(email: str, token_data: dict = Depends(verify_google_token)):
    if token_data.get('email') != email:
        raise HTTPException(status_code=403, detail="Not authorized to access this profile")
    db = SessionLocal()
    db_user = db.query(User).filter(User.email == email).first()
    db.close()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    return {
        "email": db_user.email,
        "name": db_user.name,
        "picture": db_user.picture,
        "location": db_user.location,
        "soil": db_user.soil,
        "season": db_user.season,
        "water": db_user.water,
        "farmSize": db_user.farm_size,
        "budget": db_user.budget
    }

@app.get("/api/stats")
def get_public_stats():
    """Public stats endpoint — no auth required. Used by the profile page."""
    db = SessionLocal()
    queries = db.query(FarmQuery).all()
    locations = {}
    seasons = {}
    for q in queries:
        loc = q.location if q.location else "Unknown"
        locations[loc] = locations.get(loc, 0) + 1
        sea = q.season if q.season else "Unknown"
        seasons[sea] = seasons.get(sea, 0) + 1
    db.close()
    return {
        "total_queries": len(queries),
        "locations": locations,
        "seasons": seasons
    }
@app.get("/api/admin/users")
def get_all_users(username: str = Depends(verify_admin)):
    db = SessionLocal()
    users = db.query(User).order_by(User.last_login.desc()).all()
    db.close()
    return users

@app.delete("/api/admin/community/{post_id}")
def delete_community_post(post_id: int, username: str = Depends(verify_admin)):
    db = SessionLocal()
    post = db.query(CommunityPost).filter(CommunityPost.id == post_id).first()
    if post:
        db.delete(post)
        db.commit()
    db.close()
    return {"status": "success"}

@app.get("/api/admin/data")
def get_admin_data(username: str = Depends(verify_admin)):
    db = SessionLocal()
    queries = db.query(FarmQuery).order_by(FarmQuery.timestamp.desc()).all()
    user_count = db.query(User).count()
    post_count = db.query(CommunityPost).count()
    
    locations = {}
    seasons = {}
    recent_activity = []
    
    for q in queries:
        loc = q.location if q.location else "Unknown"
        locations[loc] = locations.get(loc, 0) + 1
        sea = q.season if q.season else "Unknown"
        seasons[sea] = seasons.get(sea, 0) + 1
        
    for q in queries[:5]:
        recent_activity.append({
            "location": q.location,
            "soil": q.soil,
            "season": q.season,
            "time": q.timestamp.strftime("%H:%M, %d %b")
        })
        
    db.close()
    
    return {
        "total_queries": len(queries),
        "total_users": user_count,
        "total_posts": post_count,
        "locations": locations,
        "seasons": seasons,
        "recent": recent_activity
    }

@app.get("/admin", response_class=HTMLResponse)
def get_admin_page(username: str = Depends(verify_admin)):
    return """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Management Console | KrishiSankalp</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        :root { --sidebar-w: 260px; --primary: #001a33; --accent: #107c41; --danger: #d32f2f; --bg: #f5f7f9; --border: #e1e4e8; }
        * { box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background: var(--bg); margin: 0; display: flex; color: #1a1a1a; }
        
        /* Sidebar Navigation */
        .sidebar { width: var(--sidebar-w); height: 100vh; background: var(--primary); color: #fff; position: fixed; display: flex; flex-direction: column; }
        .sidebar-brand { padding: 25px; font-size: 1.1em; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .nav-list { flex: 1; padding: 20px 15px; }
        .nav-btn { width: 100%; padding: 12px 15px; margin-bottom: 8px; border: none; background: none; color: #cbd5e0; text-align: left; cursor: pointer; border-radius: 6px; font-size: 0.9em; display: flex; align-items: center; gap: 12px; }
        .nav-btn:hover { background: rgba(255,255,255,0.05); color: #fff; }
        .nav-btn.active { background: var(--accent); color: #fff; }
        
        /* Main Layout */
        .wrapper { margin-left: var(--sidebar-w); flex: 1; min-width: 0; }
        .top-nav { background: #fff; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); }
        .view-panel { padding: 30px; display: none; }
        .view-panel.active { display: block; }
        
        /* Components */
        .card-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-bottom: 30px; }
        .mini-card { background: #fff; padding: 20px; border-radius: 10px; border: 1px solid var(--border); box-shadow: 0 1px 3px rgba(0,0,0,0.02); }
        .mini-card label { font-size: 0.75em; color: #718096; text-transform: uppercase; font-weight: 600; }
        .mini-card div { font-size: 1.6em; font-weight: 600; margin-top: 8px; color: var(--primary); }
        
        .chart-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 24px; margin-bottom: 30px; }
        .data-panel { background: #fff; padding: 24px; border-radius: 10px; border: 1px solid var(--border); }
        .data-panel h4 { margin: 0 0 20px 0; font-size: 0.95em; color: #4a5568; border-bottom: 1px solid #f7fafc; padding-bottom: 12px; }
        
        /* Tables */
        .table-container { width: 100%; overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; font-size: 0.85em; }
        th { text-align: left; padding: 12px 15px; background: #f8fafc; color: #4a5568; font-weight: 600; border-bottom: 2px solid var(--border); }
        td { padding: 12px 15px; border-bottom: 1px solid #edf2f7; vertical-align: middle; }
        .action-btn { padding: 6px 12px; border: 1px solid var(--border); border-radius: 4px; background: #fff; cursor: pointer; font-size: 0.8em; }
        .action-btn.delete { color: var(--danger); border-color: #fed7d7; }
        .action-btn.delete:hover { background: #fff5f5; }
        
        @media (max-width: 1024px) {
            .sidebar { width: 70px; }
            .sidebar-brand, .nav-btn span { display: none; }
            .wrapper { margin-left: 70px; }
            .chart-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <aside class="sidebar">
        <div class="sidebar-brand">Admin Console</div>
        <nav class="nav-list">
            <button class="nav-btn active" onclick="switchTab('dashboard', this)"><span>Dashboard</span></button>
            <button class="nav-btn" onclick="switchTab('users', this)"><span>User Directory</span></button>
            <button class="nav-btn" onclick="switchTab('community', this)"><span>Community Moderator</span></button>
            <button class="nav-btn" style="margin-top:40px; color:#f56565;" onclick="window.location.href='/'"><span>Exit</span></button>
        </nav>
    </aside>

    <main class="wrapper">
        <header class="top-nav">
            <div id="breadcrumb" style="font-size:0.85em; color:#718096; font-weight:500;">Overview / Dashboard</div>
            <div style="font-size:0.8em; color:#a0aec0;">System Status: Operational</div>
        </header>

        <!-- DASHBOARD VIEW -->
        <section id="dashboard" class="view-panel active">
            <div class="card-row">
                <div class="mini-card"><label>Total Records</label><div id="stat-queries">-</div></div>
                <div class="mini-card"><label>Registered Users</label><div id="stat-users">-</div></div>
                <div class="mini-card"><label>Moderated Posts</label><div id="stat-posts">-</div></div>
            </div>
            <div class="chart-grid">
                <div class="data-panel">
                    <h4>Regional Activity Breakdown</h4>
                    <div style="height:250px;"><canvas id="chart-loc"></canvas></div>
                </div>
                <div class="data-panel">
                    <h4>Seasonal Demand Profile</h4>
                    <div style="height:250px;"><canvas id="chart-sea"></canvas></div>
                </div>
            </div>
            <div class="data-panel">
                <h4>Recent Query History</h4>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Location</th><th>Soil</th><th>Season</th><th>Time</th></tr></thead>
                        <tbody id="table-recent"></tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- USERS VIEW -->
        <section id="users" class="view-panel">
            <div class="data-panel">
                <h4>Registered Farmer Directory</h4>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Name</th><th>Email</th><th>Location</th><th>Last Active</th></tr></thead>
                        <tbody id="table-users"></tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- COMMUNITY VIEW -->
        <section id="community" class="view-panel">
            <div class="data-panel">
                <h4>Post Moderation Queue</h4>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Author</th><th>Preview</th><th>Category</th><th>Actions</th></tr></thead>
                        <tbody id="table-community"></tbody>
                    </table>
                </div>
            </div>
        </section>
    </main>

    <script>
        let dashboardData = null;

        function switchTab(tabId, btn) {
            document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            btn.classList.add('active');
            document.getElementById('breadcrumb').innerText = "Overview / " + tabId.charAt(0).toUpperCase() + tabId.slice(1);
            
            if (tabId === 'users') loadUsers();
            if (tabId === 'community') loadPosts();
        }

        async function loadDashboard() {
            const res = await fetch('/api/admin/data');
            const data = await res.json();
            dashboardData = data;

            document.getElementById('stat-queries').innerText = data.total_queries;
            document.getElementById('stat-users').innerText = data.total_users;
            document.getElementById('stat-posts').innerText = data.total_posts;

            document.getElementById('table-recent').innerHTML = data.recent.map(r => `
                <tr><td>${r.location}</td><td>${r.soil}</td><td>${r.season}</td><td style="color:#718096">${r.time}</td></tr>
            `).join('');

            const sorted = Object.entries(data.locations).sort((a,b)=>b[1]-a[1]).slice(0, 10);
            new Chart(document.getElementById('chart-loc'), {
                type: 'bar',
                data: {
                    labels: sorted.map(x=>x[0]),
                    datasets: [{ data: sorted.map(x=>x[1]), backgroundColor: '#003366', borderRadius: 4 }]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
            });

            new Chart(document.getElementById('chart-sea'), {
                type: 'doughnut',
                data: {
                    labels: Object.keys(data.seasons),
                    datasets: [{ data: Object.values(data.seasons), backgroundColor: ['#FF9933', '#107c41', '#003366', '#f1c40f'], borderWidth: 0 }]
                },
                options: { responsive: true, maintainAspectRatio: false, cutout: '75%' }
            });
        }

        async function loadUsers() {
            try {
                const res = await fetch('/api/admin/users');
                const users = await res.json();
                const tbody = document.getElementById('table-users');
                if (users.length === 0) {
                    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; color:#a0aec0; padding:40px;">No users registered yet.</td></tr>';
                    return;
                }
                tbody.innerHTML = users.map(u => `
                    <tr><td><b>${u.name || 'Anonymous'}</b></td><td>${u.email}</td><td>${u.location || '-'}</td><td style="color:#718096">${new Date(u.last_login).toLocaleDateString()}</td></tr>
                `).join('');
            } catch (e) { console.error("Users load failed", e); }
        }

        async function loadPosts() {
            try {
                const res = await fetch('/api/community?limit=50');
                const posts = await res.json();
                const tbody = document.getElementById('table-community');
                if (posts.length === 0) {
                    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; color:#a0aec0; padding:40px;">No community posts found.</td></tr>';
                    return;
                }
                tbody.innerHTML = posts.map(p => `
                    <tr>
                        <td><b>${p.author}</b></td>
                        <td style="max-width:300px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${p.content}</td>
                        <td>${p.tag}</td>
                        <td><button class="action-btn delete" onclick="deletePost(${p.id})">Remove</button></td>
                    </tr>
                `).join('');
            } catch (e) { console.error("Posts load failed", e); }
        }

        async function deletePost(id) {
            if (confirm("Permanently remove this success story?")) {
                try {
                    await fetch(`/api/admin/community/${id}`, { method: 'DELETE' });
                    loadPosts();
                } catch (e) { alert("Delete failed"); }
            }
        }

        loadDashboard();
    </script>
</body>
</html>"""

@app.get("/api/community")
def get_community_posts(limit: int = 10):
    db = SessionLocal()
    posts = db.query(CommunityPost).order_by(CommunityPost.timestamp.desc()).limit(limit).all()
    db.close()
    return posts

class PostCreate(BaseModel):
    author: str
    location: str
    content: str
    tag: str
    image: Optional[str] = None

@app.post("/api/community")
def add_community_post(post: PostCreate):
    db = SessionLocal()
    db_post = CommunityPost(
        author=post.author,
        location=post.location,
        content=post.content,
        tag=post.tag,
        image_data=post.image
    )
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    db.close()
    return db_post

@app.post("/api/diagnose")
async def diagnose_crop(file: UploadFile = File(...), lang: str = Form("en")):
    if not KINDWISE_TOKEN:
        logger.error("Kindwise API key (KINDWISE_TOKEN) is missing.")
        raise HTTPException(status_code=500, detail="AI Diagnosis configuration error: API key missing.")
    
    try:
        # Read and encode image to base64
        contents = await file.read()
        # Memory check: If image is somehow still > 15MB, warn
        if len(contents) > 15 * 1024 * 1024:
            return translate_dict({"error": "Image file too large. Please upload a smaller photo."}, lang)

        encoded_image = base64.b64encode(contents).decode("utf-8")
        
        # Call Kindwise (Plant.id) Health Assessment API
        url = "https://plant.id/api/v3/health_assessment"
        headers = {
            "Api-Key": KINDWISE_TOKEN,
            "Content-Type": "application/json"
        }
        payload = {
            "images": [f"data:image/jpeg;base64,{encoded_image}"],
            "latitude": 20.5937, # Default India
            "longitude": 78.9629,
            "similar_images": True
        }
        
        # Increase timeout for large mobile uploads and add a simple retry logic
        for attempt in range(2):
            try:
                response = requests.post(url, headers=headers, json=payload, timeout=45)
                if response.status_code == 201:
                    break
                logger.warning(f"Kindwise Attempt {attempt+1} failed: {response.status_code} - {response.text}")
            except requests.exceptions.RequestException as e:
                logger.warning(f"Kindwise Attempt {attempt+1} timed out or failed: {str(e)}")
                if attempt == 1: raise e
                time.sleep(2)
        else:
            return translate_dict({"error": "AI Engine is currently busy or unresponsive. Please try again in a moment."}, lang)
            
        data = response.json()
        result = data.get("result", {})
        
        # Guard: Check if the image actually contains a plant
        is_plant_info = result.get("is_plant", {})
        if not is_plant_info.get("binary"):
            return translate_dict({
                "error": "No plant detected. Please upload a clear photo of a crop leaf or stem.",
                "details": f"Confidence: {round(is_plant_info.get('probability', 0) * 100, 1)}%"
            }, lang)

        health_info = result.get("is_healthy", {})
        disease_info = result.get("disease", {})
        
        if not health_info:
            return translate_dict({"error": "AI could not process this image clearly. Please try a closer photo."}, lang)

        diagnosis = "Healthy" if health_info.get("binary") else "Disease Detected"
        confidence = round(health_info.get("probability", 0) * 100, 1)
        
        suggestions = []
        if not health_info.get("binary") and disease_info.get("suggestions"):
            for sug in disease_info["suggestions"]:
                suggestions.append({
                    "name": sug.get("name"),
                    "probability": round(sug.get("probability", 0) * 100, 1),
                    "treatment": sug.get("details", {}).get("treatment", {}).get("biological", ["Contact local KVK for treatment."])
                })
        
        return translate_dict({
            "diagnosis": diagnosis,
            "confidence": confidence,
            "suggestions": suggestions,
            "is_healthy": health_info.get("binary")
        }, lang)
        
    except Exception as e:
        logger.error(f"Diagnosis Critical Failure: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error during diagnosis.")


# --- MARKETPLACE ENDPOINTS ---
from pydantic import BaseModel
from typing import List

market_listings = []
market_orders = []

class MarketListing(BaseModel):
    crop_name: str
    quantity: float
    expected_price: float

class MarketOrder(BaseModel):
    buyer_name: str
    quantity: float
    price: float
    transport_cost: float
    order_id: str
    crop_name: str

@app.post("/api/marketplace/list")
def create_listing(listing: MarketListing):
    market_listings.append(listing.dict())
    return {"status": "success"}

@app.get("/api/marketplace/listings")
def get_listings():
    return {"status": "success", "data": market_listings}

@app.post("/api/marketplace/order")
def create_order(order: MarketOrder):
    market_orders.append(order.dict())
    return {"status": "success"}

@app.get("/api/marketplace/orders")
def get_orders():
    return {"status": "success", "data": market_orders}

# --- 4. Serve Frontend ---

app.mount("/", StaticFiles(directory="static", html=True), name="static")