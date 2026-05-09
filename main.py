from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime
from sqlalchemy.orm import declarative_base, sessionmaker
import datetime
import logging
from fastapi.middleware.cors import CORSMiddleware

# Configure logging for production
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

app = FastAPI(title="KrishiSankalp API")

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

# --- 3. API Endpoints ---
@app.post("/recommend")
def get_recommendation(data: FarmData):
    # A. Save the incoming search query to the database
    db = SessionLocal()
    db_query = FarmQuery(
        location=data.location,
        soil=data.soil,
        season=data.season,
        water=data.water,
        farm_size=data.farmSize,
        budget=data.budget
    )
    db.add(db_query)
    db.commit()
    db.refresh(db_query)
    db.close()

    logger.info(f"Processing recommendation for {data.location} | Season: {data.season}")

    # B. Sophisticated Agro-Climatic Logic Engine
    current_month = datetime.datetime.now().strftime("%B")
    state = data.location.lower()
    
    # 1. Defaults
    temp = "25°C - 35°C"
    rainfall = "Moderate"
    humidity = "60%"
    regional_crops = []

    # 2. Location & Season based Crop Suitability Mapping
    if "punjab" in state or "haryana" in state:
        temp = "10°C - 22°C" if data.season == "Rabi (Winter)" else "30°C - 40°C"
        rainfall = "Low to Moderate (Highly Irrigated)"
        humidity = "45%"
        if data.season == "Rabi (Winter)":
            regional_crops = [
                { "name": "Wheat (HD 2967)", "yield": "20-24 quintals/acre", "investment": "12,000", "price": "2,275" },
                { "name": "Mustard", "yield": "8-10 quintals/acre", "investment": "8,500", "price": "5,450" }
            ]
        else:
            regional_crops = [
                { "name": "Basmati Rice", "yield": "18-22 quintals/acre", "investment": "16,000", "price": "3,200" },
                { "name": "Cotton", "yield": "10-12 quintals/acre", "investment": "18,000", "price": "6,620" }
            ]
            
    elif "maharashtra" in state:
        temp = "20°C - 30°C" if data.season == "Rabi (Winter)" else "25°C - 35°C"
        rainfall = "Moderate to High"
        humidity = "70%"
        if data.season == "Kharif (Monsoon)":
            regional_crops = [
                { "name": "Soybean", "yield": "10-12 quintals/acre", "investment": "11,000", "price": "4,600" },
                { "name": "Cotton (Bt)", "yield": "12-15 quintals/acre", "investment": "22,000", "price": "6,620" }
            ]
        else:
            regional_crops = [
                { "name": "Jowar (Sorghum)", "yield": "15-18 quintals/acre", "investment": "9,000", "price": "3,180" },
                { "name": "Onion", "yield": "100-120 quintals/acre", "investment": "35,000", "price": "1,500" }
            ]
            
    elif "karnataka" in state or "tamil nadu" in state:
        temp = "22°C - 32°C"
        rainfall = "High (Monsoon dependent)"
        humidity = "75%"
        if data.season == "Kharif (Monsoon)":
            regional_crops = [
                { "name": "Ragi (Finger Millet)", "yield": "12-15 quintals/acre", "investment": "8,000", "price": "3,846" },
                { "name": "Paddy (Rice)", "yield": "22-26 quintals/acre", "investment": "15,000", "price": "2,183" }
            ]
        else:
            regional_crops = [
                { "name": "Groundnut", "yield": "8-10 quintals/acre", "investment": "14,000", "price": "6,377" },
                { "name": "Maize", "yield": "20-25 quintals/acre", "investment": "12,000", "price": "2,090" }
            ]
            
    elif "uttar pradesh" in state:
        temp = "12°C - 25°C" if data.season == "Rabi (Winter)" else "28°C - 38°C"
        rainfall = "Moderate"
        humidity = "55%"
        if data.season == "Rabi (Winter)":
            regional_crops = [
                { "name": "Wheat", "yield": "18-20 quintals/acre", "investment": "11,500", "price": "2,275" },
                { "name": "Potato", "yield": "120-150 quintals/acre", "investment": "30,000", "price": "800" }
            ]
        else:
            regional_crops = [
                { "name": "Sugarcane", "yield": "300-350 quintals/acre", "investment": "40,000", "price": "315" },
                { "name": "Rice", "yield": "15-20 quintals/acre", "investment": "14,000", "price": "2,183" }
            ]
    else:
        # Generic fallback for unmapped locations
        regional_crops = [
            { "name": "Local Cereals/Pulses", "yield": "10-15 quintals/acre", "investment": "10,000", "price": "3000" }
        ]

    # 3. Dynamic Live Market Price Simulator (Daily Stable)
    import random
    import datetime
    
    today = datetime.date.today().toordinal()
    
    for crop in regional_crops:
        # Seed random with today's date + crop name so it stays stable for 24 hours
        random.seed(today + hash(crop["name"]))
        
        # Remove commas if any, then calculate fluctuation
        base_price_str = str(crop["price"]).replace(",", "")
        base_price = int(base_price_str)
        # Simulate real-time market fluctuation (-3% to +6%)
        fluctuation = random.uniform(-0.03, 0.06)
        live_price = int(base_price + (base_price * fluctuation))
        price_per_kg = round(live_price / 100, 2)
        
        crop["price"] = f"{live_price:,}"
        crop["price_kg"] = f"{price_per_kg:,.2f}"
        if fluctuation > 0.02:
            crop["trend"] = "Rising (High Demand)"
        elif fluctuation < -0.01:
            crop["trend"] = "Falling (Oversupply)"
        else:
            crop["trend"] = "Stable"

    # Reset random seed for other operations
    random.seed()

    weather = {
        "location": data.location,
        "temp": f"Current ({current_month}): {temp}",
        "rainfall": rainfall,
        "humidity": humidity
    }

    return {
        "crops": regional_crops,
        "weather": weather,
        "query_id": db_query.id
    }

# --- 4. Serve Frontend ---
app.mount("/", StaticFiles(directory=".", html=True), name="static")