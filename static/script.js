const translations = {
    en: {
        title: "🌾 AI KrishiSahyogi", subtitle: "Smart Farming Crop Recommendation System", btn: "Get AI Recommendation",
        farmDetails: "Farm Details",
        labelLocation: "Location", labelSoil: "Soil Type", labelSeason: "Season",
        labelWater: "Water Source", labelFarmSize: "Farm Size (acres)", labelBudget: "Budget (Rs)",
        phFarmSize: "Enter farm size", phBudget: "Enter budget",
        soilPlaceholder: "Select Soil Type",
        soil1:"Alluvial Soil", soil2:"Black Soil (Regur)", soil3:"Red and Yellow Soil",
        soil4:"Laterite Soil", soil5:"Arid/Desert Soil", soil6:"Saline and Alkaline Soil",
        soil7:"Peaty and Marshy Soil", soil8:"Forest and Mountain Soil",
        soil9:"Sandy (Basic)", soil10:"Clay (Basic)", soil11:"Loamy (Basic)",
        seasonPlaceholder: "Select Season",
        groupAgri: "Agricultural Seasons (Main)", groupRitu: "Traditional Indian Seasons (Ritu)", groupGeneral: "General Seasons",
        season1:"Kharif (Monsoon)", season2:"Rabi (Winter)", season3:"Zaid (Summer)",
        season4:"Vasant (Spring)", season5:"Grishma (Summer)", season6:"Varsha (Monsoon)",
        season7:"Sharad (Autumn)", season8:"Hemant (Pre-Winter)", season9:"Shishir (Winter)",
        season10:"Spring", season11:"Summer", season12:"Monsoon", season13:"Autumn", season14:"Winter",
        waterPlaceholder: "Select Water Source",
        water1:"Rainfed (Monsoon)", water2:"Tube Well / Borewell", water3:"Canal Irrigation",
        water4:"River / Stream", water5:"Pond / Tank Irrigation",
        water6:"Drip / Sprinkler System", water7:"Open Well",
        btnListen:"🔊 Listen", btnPrint:"🖨️ Print",
        tabCrops:"Crop Suggestions", tabMarket:"Market Prices", tabWeather:"Weather Insights", tabYield: "Satellite Yield 🛰️", tabCommunity: "Community 🤝", tabSchemes:"Govt Schemes 🏛️",
        headCrops:"Recommended Crops", headMarket:"Market Analysis", headWeather:"Weather Insights", headYield: "Satellite Crop Monitoring (NDVI)", headCommunity: "Krishi Community Success Stories", headSchemes:"Eligible Government Subsidies",
        loadingCommunity: "Loading regional stories...", shareTitle: "Did KrishiSankalp help you?", shareDesc: "Share your story to help other farmers in your district.", btnShare: "Share My Success",
        yieldDesc: "Analyzing satellite imagery for your farm coordinates...",
        resYieldValue: "Vegetation Index (NDVI)", resYieldStatus: "Crop Health Status",
        modalTitle:"Location Permission Required",
        modalBody:"You have to give permission to use this website. We need your precise location to provide accurate agricultural recommendations.",
        btnTryAgain:"Try Again", btnCancel:"Cancel",
        profile:"[Profile]", logout:"[Logout]",
        resYield: "Expected Yield", resInvestment: "Investment", resPrice: "Current Price",
        resQuintal: "quintal", resKg: "kg", resTrend: "Trend", resStable: "Stable",
        resDemand: "Demand", resHigh: "High", resAlerts: "Farming Alerts",
        resAlert1: "• Monitor soil moisture levels", resAlert2: "• Prepare for seasonal changes", resAlert3: "• Consider efficient irrigation methods",
        resEligibility: "Eligibility", resLoc: "Location", resTemp: "Temperature", resRain: "Rainfall", resHum: "Humidity",
        resProcessing: "Processing Request...", resAnalyzing: "Analyzing your farm data securely...",
        resErrComm: "We're having a little trouble connecting to our advisory system. Please check your internet or try again in a moment.", 
        resErrTime: "The system is taking a bit longer than usual. Please wait a moment or try again.",
        speechIntro: "Here is your Krishi Sankalp recommendation for {location}. ",
        speechWeather: "The current temperature is {temp} with {rain} rainfall. ",
        speechCrops: "We recommend the following crops: ",
        speechCropDetail: "{name}. Expected yield is {yield}, with a current market price of {price} rupees per quintal. "
    },
    hi: {
        title: "🌾 एआई कृषि सहयोगी", subtitle: "स्मार्ट खेती फसल सिफारिश प्रणाली", btn: "एआई सिफारिश प्राप्त करें",
        farmDetails: "खेत की जानकारी",
        labelLocation: "स्थान", labelSoil: "मिट्टी का प्रकार", labelSeason: "मौसम",
        labelWater: "जल स्रोत", labelFarmSize: "खेत का आकार (एकड़)", labelBudget: "बजट (₹)",
        phFarmSize: "खेत का आकार दर्ज करें", phBudget: "बजट दर्ज करें",
        soilPlaceholder: "मिट्टी का प्रकार चुनें",
        soil1:"जलोढ़ मिट्टी", soil2:"काली मिट्टी (रेगुर)", soil3:"लाल और पीली मिट्टी",
        soil4:"लैटेराइट मिट्टी", soil5:"शुष्क/रेगिस्तानी मिट्टी", soil6:"लवणीय और क्षराय मिट्टी",
        soil7:"पीट और दलदली मिट्टी", soil8:"वन और पर्वतीय मिट्टी",
        soil9:"रेतीली (सामान्य)", soil10:"चिकनी (सामान्य)", soil11:"दोमट (सामान्य)",
        seasonPlaceholder: "मौसम चुनें",
        groupAgri: "कृषि मौसम (मुख्य)", groupRitu: "पारंपरिक भारतीय ऋतुएँ", groupGeneral: "सामान्य मौसम",
        season1:"खरीफ (मानसून)", season2:"रबी (सर्दी)", season3:"ज़ायद (गर्मी)",
        season4:"वसंत (बसंत)", season5:"ग्रीष्म (गर्मी)", season6:"वर्षा (बरसात)",
        season7:"शरद (पतझड़)", season8:"हेमंत (पूर्व-शीत)", season9:"शिशिर (शीत)",
        season10:"वसंत", season11:"ग्रीष्म", season12:"मानसून", season13:"शरद", season14:"शीतकाल",
        waterPlaceholder: "जल स्रोत चुनें",
        water1:"वर्षा आधारित (मानसून)", water2:"नलकूप / बोरवेल", water3:"नहर सिंचाई",
        water4:"नदी / नाला", water5:"तालाब / टंकी सिंचाई",
        water6:"ड्रिप / स्प्रिंकलर प्रणाली", water7:"खुला कुआँ",
        btnListen:"🔊 सुनें", btnPrint:"🖨️ प्रिंट",
        tabCrops:"फसल सुझाव", tabMarket:"बाज़ार भाव", tabWeather:"मौसम जानकारी", tabYield: "सैटेलाइट पैदावार 🛰️", tabCommunity: "समुदाय 🤝", tabSchemes:"सरकारी योजनाएँ 🏛️",
        headCrops:"अनुशंसित फसलें", headMarket:"बाज़ार विश्लेषण", headWeather:"मौसम जानकारी", headYield: "सैटेलाइट फसल निगरानी (NDVI)", headCommunity: "कृषि समुदाय सफलता की कहानियाँ", headSchemes:"पात्र सरकारी सब्सिडी",
        loadingCommunity: "क्षेत्रीय कहानियाँ लोड हो रही हैं...", shareTitle: "क्या कृषि संकल्प ने आपकी मदद की?", shareDesc: "अपने जिले के अन्य किसानों की मदद करने के लिए अपनी कहानी साझा करें।", btnShare: "मेरी सफलता साझा करें",
        yieldDesc: "आपके खेत के निर्देशांकों के लिए सैटेलाइट इमेजरी का विश्लेषण किया जा रहा है...",
        resYieldValue: "वनस्पति सूचकांक (NDVI)", resYieldStatus: "फसल स्वास्थ्य स्थिति",
        modalTitle:"स्थान अनुमति आवश्यक",
        modalBody:"इस वेबसाइट का उपयोग करने के लिए आपको अनुमति देनी होगी। सटीक कृषि सुझावों के लिए हमें आपके सटीक स्थान की आवश्यकता है।",
        btnTryAgain:"पुनः प्रयास करें", btnCancel:"रद्द करें",
        profile:"[प्रोफ़ाइल]", logout:"[लॉगआउट]",
        resYield: "अनुमानित पैदावार", resInvestment: "निवेश", resPrice: "वर्तमान मूल्य",
        resQuintal: "कुंतल", resKg: "किग्रा", resTrend: "रुझान", resStable: "स्थिर",
        resDemand: "मांग", resHigh: "उच्च", resAlerts: "खेती अलर्ट",
        resAlert1: "• मिट्टी की नमी के स्तर की निगरानी करें", resAlert2: "• मौसमी बदलावों के लिए तैयार रहें", resAlert3: "• कुशल सिंचाई विधियों पर विचार करें",
        resEligibility: "पात्रता", resLoc: "स्थान", resTemp: "तापमान", resRain: "वर्षा", resHum: "नमी",
        resProcessing: "अनुरोध संसाधित किया जा रहा है...", resAnalyzing: "आपके खेत के डेटा का सुरक्षित विश्लेषण किया जा रहा है...",
        resErrComm: "क्षमा करें, हमारे सिस्टम से जुड़ने में कुछ समस्या आ रही है। कृपया अपना इंटरनेट जांचें या कुछ देर बाद पुनः प्रयास करें।", 
        resErrTime: "सिस्टम सामान्य से थोड़ा अधिक समय ले रहा है। कृपया कुछ देर प्रतीक्षा करें या पुनः प्रयास करें।",
        speechIntro: "{location} के लिए आपकी कृषि संकल्प सिफारिश यहाँ है। ",
        speechWeather: "वर्तमान तापमान {temp} है और {rain} वर्षा हो रही है। ",
        speechCrops: "हम इन फसलों की सलाह देते हैं: ",
        speechCropDetail: "{name}। इसकी संभावित पैदावार {yield} है, और बाज़ार में इसकी कीमत {price} रुपये प्रति कुंतल है। ",
        headDiagnosis: "एआई रोग निदान", subDiagnosis: "एआई का उपयोग करके तुरंत फसल रोगों की पहचान करें", btnUpload: "📸 फोटो लें या अपलोड करें",
        uploadHint: "पत्तियों या तनों की स्पष्ट तस्वीरों के साथ सबसे अच्छा काम करता है", analyzing: "एआई आपकी फसल का विश्लेषण कर रहा है...",
        headTreatment: "जैविक उपचार योजना:", healthy: "स्वस्थ", sick: "रोग का पता चला", confidence: "आत्मविश्वास"
    },
    pa: { // Punjabi
        title: "🌾 ਏਆਈ ਕ੍ਰਿਸ਼ੀ ਸਹਿਯੋਗੀ", subtitle: "ਸਮਾਰਟ ਖੇਤੀ ਫਸਲ ਸਿਫਾਰਸ਼ ਪ੍ਰਣਾਲੀ", btn: "ਏਆਈ ਸਿਫਾਰਸ਼ ਪ੍ਰਾਪਤ ਕਰੋ",
        farmDetails: "ਖੇਤ ਦੇ ਵੇਰਵੇ", labelLocation: "ਸਥਾਨ", labelSoil: "ਮਿੱਟੀ ਦੀ ਕਿਸਮ", labelSeason: "ਸੀਜ਼ਨ",
        btnListen: "🔊 ਸੁਣੋ", btnPrint: "🖨️ ਪ੍ਰਿੰਟ", headDiagnosis: "ਏਆਈ ਬਿਮਾਰੀ ਦੀ ਜਾਂਚ",
        btnUpload: "📸 ਫੋਟੋ ਲਓ ਜਾਂ ਅਪਲੋਡ ਕਰੋ", analyzing: "ਏਆਈ ਤੁਹਾਡੀ ਫਸਲ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰ ਰਿਹਾ ਹੈ...", healthy: "ਸਿਹਤਮੰਦ", sick: "ਬਿਮਾਰੀ ਦਾ ਪਤਾ ਲੱਗਿਆ",
        speechIntro: "{location} ਲਈ ਤੁਹਾਡੀ ਕ੍ਰਿਸ਼ੀ ਸੰਕਲਪ ਸਿਫਾਰਸ਼ ਇੱਥੇ ਹੈ। ",
        speechWeather: "ਮੌਜੂਦਾ ਤਾਪਮਾਨ {temp} ਹੈ ਅਤੇ {rain} ਵਰਖਾ ਹੋ ਰਹੀ ਹੈ। ",
        speechCrops: "ਅਸੀਂ ਹੇਠ ਲਿਖੀਆਂ ਫਸਲਾਂ ਦੀ ਸਿਫਾਰਸ਼ ਕਰਦੇ ਹਾਂ: ",
        speechCropDetail: "{name}। ਸੰਭਾਵਿਤ ਝਾੜ {yield} ਹੈ, ਅਤੇ ਮਾਰਕੀਟ ਕੀਮਤ {price} ਰੁਪਏ ਪ੍ਰਤੀ ਕੁਇੰਟਲ ਹੈ। "
    },
    mr: { // Marathi
        title: "🌾 एआय कृषी सहयोगी", subtitle: "स्मार्ट शेती पीक शिफारस प्रणाली", btn: "एआय शिफारस मिळवा",
        farmDetails: "शेत तपशील", labelLocation: "स्थान", labelSoil: "मातीचा प्रकार", labelSeason: "हंगाम",
        btnListen: "🔊 ऐका", btnPrint: "🖨️ प्रिंट", headDiagnosis: "एआय रोग निदान",
        btnUpload: "📸 फोटो घ्या किंवा अपलोड करा", analyzing: "एआय आपल्या पिकाचे विश्लेषण करत आहे...", healthy: "निरोगी", sick: "रोग आढळला",
        speechIntro: "{location} साठी तुमची कृषी संकल्प शिफारस येथे आहे। ",
        speechWeather: "सध्याचे तापमान {temp} आहे आणि {rain} पाऊस पडत आहे। ",
        speechCrops: "आम्ही खालील पिकांची शिफारस करतो: ",
        speechCropDetail: "{name}। अपेक्षित उत्पन्न {yield} आहे, आणि बाजार भाव {price} रुपये प्रति क्विंटल आहे। "
    },
    gu: { // Gujarati
        title: "🌾 AI કૃષિ સહયોગી", subtitle: "સ્માર્ટ ખેતી પાક ભલામણ પ્રણાલી", btn: "AI ભલામણ મેળવો",
        farmDetails: "ખેતરની વિગતો", labelLocation: "સ્થળ", labelSoil: "જમીનનો પ્રકાર", labelSeason: "ઋતુ / મોસમ",
        btnListen: "🔊 સાંભળો", btnPrint: "🖨️ પ્રિન્ટ", headDiagnosis: "AI રોગ નિદાન",
        btnUpload: "📸 ફોટો લો અથવા અપલોડ કરો", analyzing: "AI તમારા પાકનું વિશ્લેષણ કરી રહ્યું છે...", healthy: "સ્વસ્થ", sick: "રોગ જણાયો",
        speechIntro: "{location} માટે તમારી કૃષિ સંકલ્પ ભલામણ અહીં છે. ",
        speechWeather: "હાલનું તાપમાન {temp} છે અને {rain} વરસાદ થઈ રહ્યો છે. ",
        speechCrops: "અમે નીચેના પાકોની ભલામણ કરીએ છીએ: ",
        speechCropDetail: "{name}. અપેક્ષિત ઉત્પાદન {yield} છે, અને વર્તમાન બજાર ભાવ {price} રૂપિયા પ્રતિ ક્વિન્ટલ છે. "
    },
    bn: { // Bengali
        title: "🌾 এআই কৃষি সহযোগী", subtitle: "স্মার্ট কৃষি ফসল সুপারিশ ব্যবস্থা", btn: "এআই সুপারিশ পান",
        farmDetails: "খামারের বিবরণ", labelLocation: "অবস্থান", labelSoil: "মাটির ধরন", labelSeason: "মৌসুম",
        btnListen: "🔊 শুনুন", btnPrint: "🖨️ প্রিন্ট", headDiagnosis: "এআই রোগ নির্ণয়",
        btnUpload: "📸 ছবি তুলুন বা আপলোড করুন", analyzing: "এআই আপনার ফসল বিশ্লেষণ করছে...", healthy: "সুস্থ", sick: "রোগ সনাক্ত হয়েছে",
        speechIntro: "{location}-এর জন্য আপনার কৃষি সংকল্প সুপারিশ এখানে রয়েছে। ",
        speechWeather: "বর্তমান তাপমাত্রা {temp} এবং {rain} বৃষ্টিপাত হচ্ছে। ",
        speechCrops: "আমরা নিম্নলিখিত ফসলের সুপারিশ করছি: ",
        speechCropDetail: "{name}। প্রত্যাশিত ফলন {yield}, এবং বর্তমান বাজার মূল্য কুইন্টাল প্রতি {price} টাকা। "
    }
};

// --- OAuth 2.0 Auth Guard ---
const user = JSON.parse(localStorage.getItem('krishiUser'));
if (!user) {
    window.location.href = '/login.html';
}

window.logout = function() {
    localStorage.removeItem('krishiUser');
    window.location.href = '/login.html';
};

// State translations for the location dropdown
const stateTranslations = {
    hi: {
        "Andhra Pradesh": "आंध्र प्रदेश", "Arunachal Pradesh": "अरुणाचल प्रदेश", "Assam": "असम", "Bihar": "बिहार",
        "Chhattisgarh": "छत्तीसगढ़", "Goa": "गोवा", "Gujarat": "गुजरात", "Haryana": "हरियाणा",
        "Himachal Pradesh": "हिमाचल प्रदेश", "Jammu and Kashmir": "जम्मू और कश्मीर", "Jharkhand": "झारखंड",
        "Karnataka": "कर्नाटक", "Kerala": "केरल", "Madhya Pradesh": "मध्य प्रदेश", "Maharashtra": "महाराष्ट्र",
        "Manipur": "मणिपुर", "Meghalaya": "मेघालय", "Mizoram": "मिजोरम", "Nagaland": "नागालैंड",
        "Odisha": "ओडिशा", "Punjab": "पंजाब", "Rajasthan": "राजस्थान", "Sikkim": "सिक्किम",
        "Tamil Nadu": "तमिलनाडु", "Telangana": "तेलंगाना", "Tripura": "त्रिपुरा", "Uttar Pradesh": "उत्तर प्रदेश",
        "Uttarakhand": "उत्तराखंड", "West Bengal": "पश्चिम बंगाल", "Andaman and Nicobar Islands (UT)": "अंडमान और निकोबार",
        "Chandigarh (UT)": "चंडीगढ़", "Dadra and Nagar Haveli (UT)": "दादरा और नगर हवेली",
        "Daman and Diu (UT)": "दमन और दीव", "Delhi (NCT)": "दिल्ली", "Lakshadweep (UT)": "लक्षद्वीप",
        "Puducherry (UT)": "पुदुचेरी"
    }
};

let tomInstances = {};
let currentLat = null;
let currentLon = null;

// --- 10-Year Persistence: Server-side Sync ---
async function syncUserToServer(overrides = {}) {
    if (!user || !user.email) return;
    
    const farmData = JSON.parse(localStorage.getItem('krishiFarmData')) || {};
    const syncPayload = {
        email: user.email,
        name: user.name,
        picture: user.picture,
        location: farmData.location || null,
        soil: farmData.soil || null,
        season: farmData.season || null,
        water: farmData.water || null,
        farmSize: farmData.farmSize ? parseFloat(farmData.farmSize) : null,
        budget: farmData.budget ? parseFloat(farmData.budget) : null,
        ...overrides
    };

    try {
        const res = await fetch('/api/user/sync', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(syncPayload)
        });
        if (res.ok) {
            const serverData = await res.json();
            const updatedUser = { ...user, name: serverData.name, picture: serverData.picture };
            localStorage.setItem('krishiUser', JSON.stringify(updatedUser));
            
            const updatedFarm = {
                location: serverData.location,
                soil: serverData.soil,
                season: serverData.season,
                water: serverData.water,
                farmSize: serverData.farmSize,
                budget: serverData.budget
            };
            localStorage.setItem('krishiFarmData', JSON.stringify(updatedFarm));
            return serverData;
        }
    } catch (err) {
        console.warn("Failed to sync with server, using local data.", err);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    if (user && user.email) {
        await syncUserToServer();
    }

    // Auto-request location for precision
    async function reverseGeocode(lat, lon) {
        try {
            console.log("Attempting reverse geocoding for:", lat, lon);
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
            const data = await res.json();
            
            if (data && data.address) {
                const addr = data.address;
                // Indian districts are often in 'state_district', 'district', or 'city'
                const district = addr.state_district || addr.district || addr.city || addr.suburb;
                const state = addr.state;
                
                if (district && state) {
                    const locationStr = `${district}, ${state}`;
                    console.log("Detected Location:", locationStr);
                    
                    // Try to find and set in TomSelect
                    const ts = tomInstances['location'];
                    if (ts) {
                        // Check if option exists, if not add it (TomSelect with create:true handles this but we want to be sure)
                        ts.addOption({value: locationStr, text: locationStr});
                        ts.setValue(locationStr);
                    }
                }
            }
        } catch (err) {
            console.error("Reverse geocoding failed:", err);
        }
    }

    function requestLocation(isRetry = false) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    currentLat = pos.coords.latitude;
                    currentLon = pos.coords.longitude;
                    console.log("GPS Precision Active:", currentLat, currentLon);
                    document.getElementById('locationModal').style.display = 'none';
                    
                    // NEW: Automatically fill the location field
                    reverseGeocode(currentLat, currentLon);
                },
                (err) => {
                    console.warn("GPS Permission Denied or Unavailable.", err.message);
                    document.getElementById('locationModal').style.display = 'flex';
                    if (isRetry) {
                        alert("Location access is permanently blocked! Please check your browser settings (click the icon in the URL bar, or check Safari Preferences > Websites > Location) to 'Allow' access, then refresh the page.");
                    }
                }
            );
        }
    }
    requestLocation();

    document.getElementById('btnTryAgain').addEventListener('click', () => {
        requestLocation(true);
    });
    document.getElementById('btnCancel').addEventListener('click', () => {
        document.getElementById('locationModal').style.display = 'none';
    });

    const langToggle = document.getElementById('langToggle');
    const savedLang = localStorage.getItem('krishiLang') || 'en';
    langToggle.value = savedLang;

    if (user) {
        const userProfile = document.getElementById('userProfile');
        if (userProfile) {
            userProfile.style.display = 'flex';
            if (!user.picture) {
                user.picture = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80';
            }
            const picEl = document.getElementById('userPic');
            picEl.src = user.picture;
            document.getElementById('userName').innerText = user.name;
        }
    }

const FALLBACK_LOCATIONS = {
    states: [
        {
            state: "Andhra Pradesh",
            districts: ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"]
        },
        {
            state: "Assam",
            districts: ["Baksa", "Barpeta", "Cachar", "Darrang", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Jorhat", "Kamrup", "Nagaon", "Sonitpur", "Tinsukia"]
        },
        {
            state: "Bihar",
            districts: ["Araria", "Aurangabad", "Begusarai", "Bhagalpur", "Bhojpur", "Darbhanga", "Gaya", "Katihar", "Madhubani", "Muzaffarpur", "Nalanda", "Patna", "Purnia", "Rohtas", "Samastipur", "Saran", "Vaishali"]
        },
        {
            state: "Chhattisgarh",
            districts: ["Bilaspur", "Dhamtari", "Durg", "Janjgir-Champa", "Kanker", "Kawardha", "Korba", "Mahasamund", "Raigarh", "Raipur", "Rajnandgaon"]
        },
        {
            state: "Gujarat",
            districts: ["Ahmedabad", "Amreli", "Anand", "Banaskantha", "Bharuch", "Bhavnagar", "Gandhinagar", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mehsana", "Navsari", "Patan", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Vadodara", "Valsad"]
        },
        {
            state: "Haryana",
            districts: ["Ambala", "Bhiwani", "Fatehabad", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"]
        },
        {
            state: "Himachal Pradesh",
            districts: ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"]
        },
        {
            state: "Jharkhand",
            districts: ["Bokaro", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Giridih", "Hazaribagh", "Palamu", "Ranchi", "West Singhbhum"]
        },
        {
            state: "Karnataka",
            districts: ["Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"]
        },
        {
            state: "Kerala",
            districts: ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"]
        },
        {
            state: "Madhya Pradesh",
            districts: ["Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Chhatarpur", "Chhindwara", "Damoh", "Dewas", "Dhar", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Khandwa", "Khargone", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shivpuri", "Ujjain", "Vidisha"]
        },
        {
            state: "Maharashtra",
            districts: ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"]
        },
        {
            state: "Odisha",
            districts: ["Balangir", "Balasore", "Bargarh", "Bhadrak", "Cuttack", "Dhenkanal", "Ganjam", "Jajpur", "Jharsuguda", "Kalahandi", "Kendrapara", "Kendujhar", "Koraput", "Mayurbhanj", "Nayagarh", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"]
        },
        {
            state: "Punjab",
            districts: ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Sri Muktsar Sahib", "Tarn Taran"]
        },
        {
            state: "Rajasthan",
            districts: ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"]
        },
        {
            state: "Tamil Nadu",
            districts: ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"]
        },
        {
            state: "Telangana",
            districts: ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Kumuram Bheem", "Mahabubabad", "Mahbubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal", "Yadadri Bhuvanagiri"]
        },
        {
            state: "Uttar Pradesh",
            districts: ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"]
        },
        {
            state: "Uttarakhand",
            districts: ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"]
        },
        {
            state: "West Bengal",
            districts: ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"]
        }
    ]
};

async function loadLocations() {
    try {
        const locRes = await fetch('/locations.json');
        if (!locRes.ok) {
            throw new Error(`HTTP ${locRes.status}: Failed to load locations`);
        }
        const locData = await locRes.json();
        if (!locData || !Array.isArray(locData.states) || locData.states.length === 0) {
            throw new Error('Invalid locations format received');
        }
        return locData;
    } catch (err) {
        console.warn('Failed to load locations.json, falling back to agricultural districts list:', err);
        return FALLBACK_LOCATIONS;
    }
}

    async function initSelects() {
        try {
            const locData = await loadLocations();
            window._rawLocationData = locData;
            if (!tomInstances['location']) {
                tomInstances['location'] = new TomSelect("#location", { create: true, sortField: { field: "text", direction: "asc" }, plugins: ['clear_button'] });
            }
            renderLocationDropdown(savedLang);
            if (!tomInstances['soil']) tomInstances['soil'] = new TomSelect("#soil", { create: false, plugins: ['clear_button'] });
            if (!tomInstances['season']) tomInstances['season'] = new TomSelect("#season", { create: false, plugins: ['clear_button'] });
            if (!tomInstances['water']) tomInstances['water'] = new TomSelect("#water", { create: false, plugins: ['clear_button'] });
            Object.values(tomInstances).forEach(ts => ts.setValue('', true));
            applyLang(savedLang);
        } catch (e) { console.error("Initialization failed", e); }
    }

    function renderLocationDropdown(lang) {
        const data = window._rawLocationData || FALLBACK_LOCATIONS;
        if (!data || !Array.isArray(data.states)) return;
        const ts = tomInstances['location'];
        const placeholder = lang === 'hi' ? 'स्थान खोजें या चुनें...' : 'Search or choose a location...';
        if (ts) {
            ts.settings.placeholder = placeholder;
            ts.control_input.placeholder = placeholder;
            const newOptions = [];
            data.states.forEach(s => {
                const stateName = (lang === 'hi' && stateTranslations.hi[s.state]) ? stateTranslations.hi[s.state] : s.state;
                s.districts.forEach(d => { newOptions.push({ value: `${d}, ${s.state}`, text: `${d}, ${stateName}` }); });
            });
            const currentVal = ts.getValue();
            ts.clearOptions();
            ts.addOptions(newOptions);
            if (currentVal) ts.setValue(currentVal, true);
            ts.refreshOptions(false);
        }
    }

    function applyLang(lang) {
        const t = translations[lang];
        localStorage.setItem('krishiLang', lang);
        document.getElementById('titleText').innerText = t.title;
        document.getElementById('subtitleText').innerText = t.subtitle;
        document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.getAttribute('data-i18n'); if (t[key]) el.innerText = t[key]; });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { const key = el.getAttribute('data-i18n-placeholder'); if (t[key]) el.placeholder = t[key]; });
        renderLocationDropdown(lang);
        ['soil', 'season', 'water'].forEach(id => {
            const ts = tomInstances[id];
            const select = document.getElementById(id);
            if (!ts || !select) return;
            const currentValue = ts.getValue();
            const phKey = select.querySelector('option[value=""]')?.getAttribute('data-i18n');
            if (phKey && t[phKey]) { ts.settings.placeholder = t[phKey]; ts.control_input.placeholder = t[phKey]; }
            const options = Array.from(select.options).filter(o => o.value).map(o => { const key = o.getAttribute('data-i18n'); return { value: o.value, text: (key && t[key]) ? t[key] : o.textContent }; });
            ts.clearOptions();
            ts.addOptions(options);
            if (currentValue) ts.setValue(currentValue, true);
            ts.refreshOptions(false);
        });
    }

    langToggle.addEventListener('change', (e) => applyLang(e.target.value));
    await initSelects();
});

let recommendationCount = parseInt(localStorage.getItem('krishiRecCount') || '0');
document.getElementById('farmForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
        location: document.getElementById('location').value,
        soil: document.getElementById('soil').value,
        season: document.getElementById('season').value,
        water: document.getElementById('water').value,
        farmSize: Number(document.getElementById('farmSize').value),
        budget: Number(document.getElementById('budget').value),
        lat: currentLat,
        lon: currentLon
    };
    const submitBtn = document.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerText = "Processing Request...";
    localStorage.setItem('krishiFarmData', JSON.stringify(formData));
    syncUserToServer(formData);
    document.getElementById('results').style.display = 'block';
    document.getElementById('cropsList').innerHTML = '<div class="loading"><div class="spinner"></div><p>Analyzing your farm data securely...</p></div>';
    try {
        const response = await fetch('/recommend?lang=' + document.getElementById('langToggle').value, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('API Error');
        const data = await response.json();
        displayResults(data);

        // Trigger donation popup every 4 recommendations
        recommendationCount++;
        localStorage.setItem('krishiRecCount', recommendationCount.toString());
        if (recommendationCount % 4 === 0) {
            setTimeout(() => {
                const qrModal = document.getElementById('qrModal');
                if (qrModal) qrModal.style.display = 'flex';
            }, 1500);
        }
    } catch (error) {
        document.getElementById('cropsList').innerHTML = `<div class="loading" style="color: red;">Error communicating with server.</div>`;
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = translations[document.getElementById('langToggle').value].btn;
    }
});

function displayResults(data) {
    const lang = document.getElementById('langToggle').value;
    const t = translations[lang];
    currentReportData = data;
    let cropsHtml = '';
    data.crops.forEach((crop, index) => {
        const priceDisplay = (crop.price === "Self Consumption") ? `${crop.price}` : `₹${crop.price}/${t.resQuintal}`;
        cropsHtml += `<div class="crop-item"><div class="crop-name">${index + 1}. ${crop.name}</div><div class="crop-details">✓ ${t.resYield}: ${crop.yield}<br>✓ ${t.resInvestment}: ${crop.investment}<br>✓ ${t.resPrice}: ${priceDisplay}<br><div style="margin-top:10px; padding:8px; background:#f0f7f4; border-left:3px solid #107c41;"><strong>💡 Tip:</strong> ${crop.tip}</div><button onclick="planToSell(\'${crop.name}\')" style="margin-top:10px; background:#ff9800; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; font-weight:bold; font-size:0.85em;" data-i18n="btnSellHarvest">🛒 Sell Harvest</button></div></div>`;
    });
    document.getElementById('cropsList').innerHTML = cropsHtml;
    const weatherBadge = data.weather.desc.includes("Live") ? ' <span style="background:#2e7d32; color:white; padding:2px 6px; border-radius:4px; font-size:0.7em;">LIVE</span>' : '';
    document.getElementById('weatherInfo').innerHTML = `<div class="weather-info"><h4>${t.resLoc}: ${data.weather.location}${weatherBadge}</h4><p>${t.resTemp}: ${data.weather.temp}</p><p>${t.resRain}: ${data.weather.rainfall}</p><p>${t.resHum}: ${data.weather.humidity}</p><p><strong>Status:</strong> ${data.weather.desc}</p></div>`;
    
    // Display Satellite Yield Data
    if (data.yield && data.yield.status !== "No data") {
        const status = data.yield.status;
        let statusMsg = status;
        let hint = "Showing NDVI analysis for your coordinates";
        
        if (status === "API Key Missing") {
            statusMsg = "API Key Missing";
            hint = "Please set AGRO_API_KEY in Render environment variables.";
        } else if (status === "Waiting for Satellite Pass") {
            statusMsg = "Satellite Pass Pending";
            hint = "Wait 2-3 days for the satellite to pass over your farm.";
        } else if (status === "Polygon Limit Reached") {
            statusMsg = "Area Limit Reached";
            hint = "Free tier limit for new polygons reached.";
        }

        let mapHtml = `<div id="mapContainer" style="width:100%; height:400px; border-radius:12px; touch-action: none; z-index: 10;"></div>
                       <div id="mapControls" style="margin-top: 10px; display: flex; gap: 10px;">
                           <button onclick="toggleNDVI()" id="ndviBtn" style="flex:1; padding: 8px; background: #2e7d32; color: white; border: none; border-radius: 5px; font-size: 0.8em; font-weight: bold;">Show Crop Health Overlay</button>
                       </div>`;
        document.getElementById('ndviMap').innerHTML = mapHtml;
        document.getElementById('ndviMap').style.height = 'auto';
        document.getElementById('ndviMap').style.display = 'block';

        setTimeout(() => {
            if (window.leafMap) { window.leafMap.remove(); }
            
            // Use Google Satellite (Sharper in India)
            const map = L.map('mapContainer', {
                tap: false, // Fixes mobile touch issues
                zoomControl: true
            }).setView([currentLat, currentLon], 16);
            window.leafMap = map;

            L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
                maxZoom: 20,
                subdomains:['mt0','mt1','mt2','mt3'],
                attribution: 'Google Satellite'
            }).addTo(map);

            L.marker([currentLat, currentLon]).addTo(map).bindPopup("<b>Your Farm</b>").openPopup();

            // Prepare NDVI overlay but don't show it yet to avoid blur
            if (data.yield.map_url) {
                const offset = 0.007;
                const imageBounds = [[currentLat - offset, currentLon - offset], [currentLat + offset, currentLon + offset]];
                window.ndviOverlay = L.imageOverlay(data.yield.map_url, imageBounds, { opacity: 0.7 });
            }
            
            map.invalidateSize();
        }, 200);

        window.toggleNDVI = function() {
            const btn = document.getElementById('ndviBtn');
            if (window.leafMap.hasLayer(window.ndviOverlay)) {
                window.leafMap.removeLayer(window.ndviOverlay);
                btn.innerText = "Show Crop Health Overlay";
                btn.style.background = "#2e7d32";
            } else if (window.ndviOverlay) {
                window.ndviOverlay.addTo(window.leafMap);
                btn.innerText = "Hide Crop Health Overlay";
                btn.style.background = "#c62828";
            }
        };

        if (data.yield.value > 0) {
            document.getElementById('ndviData').innerHTML = `
                <div style="background:#f1f8e9; padding:15px; border-radius:8px; border-left:4px solid #2e7d32;">
                    <p style="margin:0; font-size:0.8em; color:#2e7d32; font-weight:bold;">${t.resYieldValue}</p>
                    <p style="margin:5px 0 0 0; font-size:1.5em; font-weight:bold;">${data.yield.value}</p>
                </div>
                <div style="background:#f1f8e9; padding:15px; border-radius:8px; border-left:4px solid #2e7d32;">
                    <p style="margin:0; font-size:0.8em; color:#2e7d32; font-weight:bold;">${t.resYieldStatus}</p>
                    <p style="margin:5px 0 0 0; font-size:1.5em; font-weight:bold;">${data.yield.status}</p>
                </div>
            `;
        } else {
            document.getElementById('ndviData').innerHTML = '';
        }
    } else {
        document.getElementById('ndviMap').innerHTML = `<div style="text-align:center; color:#999;"><p>Satellite Data Pending Verification</p><p style="font-size:0.8em;">(Requires Active AgroMonitoring Subscription)</p></div>`;
        document.getElementById('ndviData').innerHTML = '';
    }
    
    // Display Market Data
    if (data.market && data.market.length > 0) {
        let marketHtml = `
        <div style="overflow-x: auto; margin-top: 15px; border-radius: 8px;">
            <table style="width: 100%; min-width: 350px; border-collapse: collapse; background: white; border: 1px solid #e0e0e0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <thead>
                    <tr style="background-color: #f1f8e9; text-align: left; color: #1b5e20;">
                        <th style="padding: 10px 8px; border-bottom: 2px solid #2e7d32; font-weight: bold; font-size: 0.9em;">Commodity</th>
                        <th style="padding: 10px 8px; border-bottom: 2px solid #2e7d32; font-weight: bold; font-size: 0.9em;">Live Price</th>
                        <th style="padding: 10px 8px; border-bottom: 2px solid #2e7d32; font-weight: bold; font-size: 0.9em;">Market Trend</th>
                    </tr>
                </thead>
                <tbody>`;
        
        data.market.forEach((item, idx) => {
            let badgeColor = "#757575"; 
            let badgeBg = "#f5f5f5";
            let icon = "➖";
            if (item.trend && item.trend.includes("Rising")) {
                badgeColor = "#2e7d32";
                badgeBg = "#e8f5e9";
                icon = "📈";
            } else if (item.trend && item.trend.includes("Falling")) {
                badgeColor = "#c62828";
                badgeBg = "#ffebee";
                icon = "📉";
            }
            
            const rowStyle = idx % 2 === 0 ? "background-color: #ffffff;" : "background-color: #fafafa;";
            marketHtml += `
                <tr style="${rowStyle} border-bottom: 1px solid #eeeeee;">
                    <td style="padding: 10px 8px; font-weight: bold; color: #333; font-size: 0.9em;">${item.crop}</td>
                    <td style="padding: 10px 8px; font-weight: bold; color: #2e7d32; font-size: 1em;">₹${item.price}<span style="font-size: 0.7em; color: #666; font-weight: normal;">/${t.resQuintal}</span></td>
                    <td style="padding: 10px 8px;">
                        <span style="background-color: ${badgeBg}; color: ${badgeColor}; padding: 4px 8px; border-radius: 20px; font-size: 0.75em; font-weight: bold; display: inline-block; white-space: nowrap;">
                            ${icon} ${item.trend || "Stable"}
                        </span>
                    </td>
                </tr>`;
        });
        marketHtml += `</tbody></table></div>
        <p style="text-align: right; font-size: 0.8em; color: #999; margin-top: 10px;">*Source: Agmarknet (Govt. of India)</p>`;
        document.getElementById('marketInfo').innerHTML = marketHtml;
    } else {
        document.getElementById('marketInfo').innerHTML = `<p>No live mandi data available for this region currently.</p>`;
    }

    // Display Schemes
    if (data.schemes && data.schemes.length > 0) {
        let schemesHtml = ``;
        data.schemes.forEach(scheme => {
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(scheme.name + ' government scheme india official portal')}`;
            schemesHtml += `
            <div class="crop-item" style="cursor: pointer; transition: 0.2s;" onmouseover="this.style.boxShadow='0 4px 8px rgba(0,0,0,0.1)'" onmouseout="this.style.boxShadow='none'" onclick="window.open('${searchUrl}', '_blank')">
                <div class="crop-name" style="color: #0055a4; text-decoration: underline;">${scheme.name} ↗</div>
                <div class="crop-details">${scheme.desc}</div>
                <div style="font-size: 0.8em; color: #666; margin-top: 5px;">Click to visit official portal</div>
            </div>`;
        });
        document.getElementById('schemesInfo').innerHTML = schemesHtml;
    } else {
        document.getElementById('schemesInfo').innerHTML = `<p>No matching schemes found for your profile.</p>`;
    }

    loadCommunity();
}

function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

async function loadCommunity() {
    const list = document.getElementById('postsList');
    try {
        const res = await fetch('/api/community');
        const posts = await res.json();
        
        if (posts.length === 0) {
            // Seed some data for the user
            list.innerHTML = `
                <div class="crop-item" style="border-left-color: #0055a4;">
                    <div style="font-weight: bold; color: #0055a4;">Rajesh Kumar • Ludhiana, Punjab</div>
                    <p style="margin: 5px 0; font-size: 0.9em;">"The AI correctly identified Wheat Rust on my farm. I followed the organic treatment and saved 2 acres of crop!"</p>
                    <span style="font-size: 0.75em; background: #e3f2fd; padding: 2px 8px; border-radius: 10px;">✅ Saved Crop</span>
                </div>
                <div class="crop-item" style="border-left-color: #0055a4;">
                    <div style="font-weight: bold; color: #0055a4;">Amit Patil • Nashik, Maharashtra</div>
                    <p style="margin: 5px 0; font-size: 0.9em;">"Checking market prices here helped me sell my onions at ₹400/quintal more than the local mandi price."</p>
                    <span style="font-size: 0.75em; background: #e3f2fd; padding: 2px 8px; border-radius: 10px;">📈 Higher Profit</span>
                </div>
            `;
            return;
        }

        list.innerHTML = posts.map(p => `
            <div class="crop-item" style="border-left-color: #0055a4;">
                <div style="font-weight: bold; color: #0055a4;">${escapeHtml(p.author)} • ${escapeHtml(p.location)}</div>
                <p style="margin: 5px 0; font-size: 0.9em;">"${escapeHtml(p.content)}"</p>
                ${p.image_data && p.image_data.startsWith('data:image/') ? `<img src="${p.image_data}" style="max-width: 100%; max-height: 200px; border-radius: 8px; margin-top: 10px; display: block;">` : ''}
                <div style="margin-top: 8px;">
                    <span style="font-size: 0.75em; background: #e3f2fd; padding: 2px 8px; border-radius: 10px;">✅ ${escapeHtml(p.tag)}</span>
                </div>
            </div>
        `).join('');
    } catch (e) {
        list.innerHTML = '<p>Community currently offline.</p>';
    }
}

window.submitShareForm = async function() {
    const content = document.getElementById('shareContent').value;
    if (!content) { alert('Please enter your story.'); return; }
    const tag = document.getElementById('shareTag').value || "Success";
    const imageInput = document.getElementById('shareImage');
    
    let base64Image = null;
    if (imageInput.files && imageInput.files[0]) {
        base64Image = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.readAsDataURL(imageInput.files[0]);
        });
    }

    try {
        const btn = event.target;
        btn.disabled = true;
        btn.innerText = "Posting...";
        await fetch('/api/community', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                author: user ? user.name : "Anonymous Farmer",
                location: document.getElementById('location').value.split(',')[0] || "Unknown Location",
                content: content,
                tag: tag,
                image: base64Image
            })
        });
        document.getElementById('shareContent').value = '';
        document.getElementById('shareTag').value = '';
        imageInput.value = '';
        document.getElementById('shareFormContainer').style.display = 'none';
        document.getElementById('showShareBtn').style.display = 'block';
        btn.disabled = false;
        btn.innerText = "Post to Community";
        loadCommunity();
    } catch (e) { 
        alert("Failed to post."); 
        event.target.disabled = false;
        event.target.innerText = "Post to Community";
    }
}

function showTab(event, tabName) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}
// --- AI Disease Diagnosis Logic ---
async function compressImage(file, maxWidth = 1024, quality = 0.7) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxWidth) {
                        width *= maxWidth / height;
                        height = maxWidth;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob((blob) => {
                    if (blob) {
                        const compressedFile = new File([blob], file.name, {
                            type: 'image/jpeg',
                            lastModified: Date.now()
                        });
                        resolve(compressedFile);
                    } else {
                        reject(new Error('Canvas toBlob failed'));
                    }
                }, 'image/jpeg', quality);
            };
            img.onerror = (err) => reject(err);
        };
        reader.onerror = (err) => reject(err);
    });
}

document.getElementById('imageInput').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const uploadArea = document.getElementById('diagnosisUpload');
    const loadingArea = document.getElementById('diagnosisLoading');
    const resultArea = document.getElementById('diagnosisResult');

    uploadArea.style.display = 'none';
    loadingArea.style.display = 'block';
    resultArea.style.display = 'none';

    async function attemptDiagnosis(formDataPayload) {
        return await fetch('/api/diagnose', {
            method: 'POST',
            body: formDataPayload
        });
    }

    try {
        const compressedFile = await compressImage(file);
        const formData = new FormData();
        formData.append('file', compressedFile);
        formData.append('lang', document.getElementById('langToggle').value);

        let res;
        try {
            res = await attemptDiagnosis(formData);
        } catch (firstErr) {
            // Server may be waking up from sleep (Render free tier cold start)
            // Wait 6 seconds and retry once
            loadingArea.querySelector('p').innerText = "Server is waking up, retrying...";
            await new Promise(resolve => setTimeout(resolve, 6000));
            res = await attemptDiagnosis(formData);
        }

        // Handle HTTP errors (e.g. FastAPI raises HTTPException with {"detail": "..."})
        if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            const msg = errData.detail || errData.error || `Server error (${res.status})`;
            loadingArea.style.display = 'none';
            uploadArea.style.display = 'block';
            alert(`Diagnosis failed: ${msg}`);
            return;
        }

        const data = await res.json();

        loadingArea.style.display = 'none';
        
        // Handle soft errors returned with 200 status
        if (data.error) {
            uploadArea.style.display = 'block';
            alert(data.error);
            return;
        }

        resultArea.style.display = 'block';
        const badge = document.getElementById('diagBadge');
        badge.innerText = data.diagnosis;
        badge.className = data.is_healthy ? 'healthy' : 'sick';
        
        document.getElementById('diagName').innerText = data.is_healthy ? "Your crop looks healthy!" : data.suggestions[0].name;
        document.getElementById('diagConf').innerText = `Confidence: ${data.confidence}%`;

        const treatmentList = document.getElementById('treatmentList');
        treatmentList.innerHTML = '';
        
        if (data.is_healthy) {
            treatmentList.innerHTML = "• Continue regular watering<br>• Monitor for seasonal pests<br>• Apply organic compost once a month";
        } else {
            const suggestions = data.suggestions[0].treatment;
            suggestions.forEach(s => {
                treatmentList.innerHTML += `• ${s}<br>`;
            });
        }

        // Add "Try Another" button
        const resetBtn = document.createElement('button');
        resetBtn.innerText = "Try Another Photo";
        resetBtn.className = "btn secondary";
        resetBtn.style.marginTop = "20px";
        resetBtn.onclick = () => {
            resultArea.style.display = 'none';
            uploadArea.style.display = 'block';
        };
        treatmentList.appendChild(resetBtn);

    } catch (err) {
        loadingArea.style.display = 'none';
        uploadArea.style.display = 'block';
        alert("Failed to connect to diagnosis AI. The server may be starting up — please wait 30 seconds and try again.");
    }
});
// --- Voice Assistance (TTS) ---
let currentReportData = null;

function speak(text, lang) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel(); // Stop any current speech
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Try to find a voice for the selected language
    const voices = window.speechSynthesis.getVoices();
    const voiceMap = {
        'hi': 'hi-IN',
        'pa': 'pa-IN',
        'mr': 'mr-IN',
        'gu': 'gu-IN',
        'bn': 'bn-IN',
        'en': 'en-IN'
    };
    
    const targetLang = voiceMap[lang] || 'en-IN';
    const voice = voices.find(v => v.lang.startsWith(targetLang));
    if (voice) utterance.voice = voice;
    utterance.lang = targetLang;
    utterance.rate = 0.9; // Slightly slower for clarity
    
    window.speechSynthesis.speak(utterance);
}

document.getElementById('btnListen').addEventListener('click', () => {
    if (!currentReportData) return;
    
    const lang = document.getElementById('langToggle').value;
    const t = translations[lang];
    if (!t || !t.speechIntro) return;

    let text = t.speechIntro.replace('{location}', currentReportData.weather.location);
    text += t.speechWeather.replace('{temp}', currentReportData.weather.temp).replace('{rain}', currentReportData.weather.rainfall);
    text += t.speechCrops;
    
    currentReportData.crops.forEach(crop => {
        text += t.speechCropDetail
            .replace('{name}', crop.name)
            .replace('{yield}', crop.yield)
            .replace('{price}', crop.price);
    });

    speak(text, lang);
});

// Ensure voices are loaded (some browsers load them asynchronously)
if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => {
        console.log("Voices loaded:", window.speechSynthesis.getVoices().length);
    };
}


// --- MARKETPLACE LOGIC ---

function switchAppView(view) {
    if(view === 'advisory') {
        document.getElementById('advisoryView').style.display = 'block';
        document.getElementById('marketplaceView').style.display = 'none';
        document.getElementById('btnAdvisory').style.background = '#107c41';
        document.getElementById('btnAdvisory').style.border = 'none';
        document.getElementById('btnMarketplace').style.background = 'transparent';
        document.getElementById('btnMarketplace').style.border = '1px solid white';
    } else {
        document.getElementById('advisoryView').style.display = 'none';
        document.getElementById('marketplaceView').style.display = 'block';
        document.getElementById('btnMarketplace').style.background = '#107c41';
        document.getElementById('btnMarketplace').style.border = 'none';
        document.getElementById('btnAdvisory').style.background = 'transparent';
        document.getElementById('btnAdvisory').style.border = '1px solid white';
    }
}

function showMktTab(evt, tabName) {
    let tabs = document.getElementById('marketplaceDashboard').getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) tabs[i].classList.remove("active");
    
    let contents = document.getElementById('marketplaceDashboard').getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) contents[i].classList.remove("active");
    
    evt.currentTarget.classList.add("active");
    document.getElementById(tabName).classList.add("active");
}

function planToSell(cropName) {
    let cleanName = cropName.split(' (')[0];
    switchAppView('marketplace');
    document.getElementById('mktCropName').value = cleanName;
    document.getElementById('mktQuantity').focus();
    // smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}




// --- BUYER DEMANDS & OFFERS LOGIC ---
async function submitBuyerDemand() {
    let buyerName = (document.getElementById('demBuyerName').value || '').trim();
    let buyerType = (document.getElementById('demBuyerType').value || '').trim();
    let cropName = (document.getElementById('demProduct').value || '').trim();
    let qtyVal = document.getElementById('demQty').value;
    let priceVal = document.getElementById('demPrice').value;
    let quality = (document.getElementById('demQuality').value || '').trim();
    let location = (document.getElementById('demLocation').value || '').trim();
    let requiredBy = (document.getElementById('demDate').value || '').trim();
    let notes = (document.getElementById('demNotes').value || '').trim();

    let qty = parseFloat(qtyVal);
    let maxPrice = parseFloat(priceVal);

    if (!buyerName || !buyerType || !cropName || !requiredBy) {
        alert("Please fill in all required fields (Buyer Name, Buyer Type, Crop, and Required Date).");
        return;
    }

    if (isNaN(qty) || qty <= 0) {
        alert("Please enter a valid positive quantity (kg).");
        return;
    }

    if (isNaN(maxPrice) || maxPrice <= 0) {
        alert("Please enter a valid positive maximum price (₹/kg).");
        return;
    }

    let payload = {
        id: "DEMAND-" + Math.floor(Math.random() * 10000),
        buyer_name: buyerName,
        buyer_type: buyerType,
        crop_name: cropName,
        quantity: qty,
        max_price: maxPrice,
        quality: quality,
        location: location,
        required_by: requiredBy,
        status: "Open",
        notes: notes
    };
    
    try {
        let res = await fetch('/api/marketplace/demands', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        });
        if(res.ok) {
            alert("Buyer Demand Created!");
            document.getElementById('demandForm').reset();
            loadBuyerDemands();
        } else {
            alert("Failed to create buyer demand. Please try again.");
        }
    } catch(e) {
        console.error("Error creating buyer demand:", e);
        alert("Network error while creating buyer demand.");
    }
}

async function loadBuyerDemands() {
    try {
        let res = await fetch('/api/marketplace/demands');
        let data = await res.json();
        if(data.data && data.data.length > 0) {
            let list = document.getElementById('buyerDemandsList');
            list.innerHTML = '';
            data.data.forEach(d => {
                list.innerHTML += `
                    <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <div style="display:flex; justify-content: space-between; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:10px;">
                            <strong style="color: #2e7d32; font-size: 1.1em;">${d.crop_name}</strong>
                            <span style="background:#e8f5e9; color:#2e7d32; font-size:0.8em; padding:2px 8px; border-radius:12px;">${d.status}</span>
                        </div>
                        <p style="margin:5px 0; font-size:0.9em;"><strong>Buyer:</strong> ${d.buyer_name} (${d.buyer_type})</p>
                        <p style="margin:5px 0; font-size:0.9em;"><strong>Quantity Required:</strong> ${d.quantity} kg</p>
                        <p style="margin:5px 0; font-size:0.9em;"><strong>Max Price:</strong> ₹${d.max_price}/kg</p>
                        <p style="margin:5px 0; font-size:0.9em;"><strong>Quality:</strong> ${d.quality}</p>
                        <p style="margin:5px 0; font-size:0.9em;"><strong>Location:</strong> ${d.location}</p>
                        <p style="margin:5px 0; font-size:0.9em;"><strong>Required By:</strong> ${d.required_by}</p>
                        <p style="margin:5px 0; font-size:0.9em; color:#666;"><em>${d.notes}</em></p>
                        <div style="margin-top: 15px; display: flex; gap: 10px;">
                            <button class="btn" style="flex:1;" onclick="openOfferModal('${d.id}')">Send Offer</button>
                        </div>
                    </div>
                `;
            });
        }
    } catch(e) {}
}

function openOfferModal(demandId) {
    document.getElementById('offerDemandId').value = demandId;
    document.getElementById('offerModal').style.display = 'flex';
}

async function submitOffer() {
    let demandId = (document.getElementById('offerDemandId').value || '').trim();
    let qtyVal = document.getElementById('offQty').value;
    let priceVal = document.getElementById('offPrice').value;
    let quality = (document.getElementById('offQuality').value || '').trim();
    let availableDate = (document.getElementById('offDate').value || '').trim();
    let message = (document.getElementById('offMessage').value || '').trim();

    let qty = parseFloat(qtyVal);
    let offeredPrice = parseFloat(priceVal);

    if (!demandId) {
        alert("Invalid demand reference for this offer.");
        return;
    }

    if (!quality || !availableDate) {
        alert("Please provide quality/grade and available date.");
        return;
    }

    if (isNaN(qty) || qty <= 0) {
        alert("Please enter a valid positive quantity (kg).");
        return;
    }

    if (isNaN(offeredPrice) || offeredPrice <= 0) {
        alert("Please enter a valid positive offered price (₹/kg).");
        return;
    }

    let payload = {
        id: "OFFER-" + Math.floor(Math.random() * 10000),
        demand_id: demandId,
        farmer_name: (JSON.parse(localStorage.getItem('krishiUser')) || {}).name || "Farmer",
        quantity: qty,
        offered_price: offeredPrice,
        quality: quality,
        available_date: availableDate,
        message: message
    };
    
    try {
        let res = await fetch('/api/marketplace/offers', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        });
        if(res.ok) {
            alert("Offer sent successfully!");
            document.getElementById('offerForm').reset();
            document.getElementById('offerModal').style.display = 'none';
            loadMyOffers();
        } else {
            alert("Failed to submit offer. Please try again.");
        }
    } catch(e) {
        console.error("Error submitting offer:", e);
        alert("Network error while submitting offer.");
    }
}

async function loadMyOffers() {
    try {
        let res = await fetch('/api/marketplace/offers');
        let data = await res.json();
        if(data.data && data.data.length > 0) {
            let list = document.getElementById('myOffersList');
            list.innerHTML = '';
            data.data.forEach(o => {
                list.innerHTML += `
                    <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; background: #fff;">
                        <div style="display:flex; justify-content: space-between; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:10px;">
                            <strong>Offer ID: ${o.id}</strong>
                            <span style="background:#e3f2fd; color:#1565c0; font-size:0.8em; padding:2px 8px; border-radius:12px;">${o.status}</span>
                        </div>
                        <p style="margin:5px 0; font-size:0.9em;"><strong>Demand ID:</strong> ${o.demand_id}</p>
                        <p style="margin:5px 0; font-size:0.9em;"><strong>Offered Quantity:</strong> ${o.quantity} kg @ ₹${o.offered_price}/kg</p>
                        <p style="margin:5px 0; font-size:0.9em;"><strong>Quality:</strong> ${o.quality}</p>
                        <p style="margin:5px 0; font-size:0.9em;"><strong>Available:</strong> ${o.available_date}</p>
                    </div>
                `;
            });
        }
    } catch(e) {}
}

async function findMatchesForFarmer(cropName, qty, expectedPrice) {
    let payload = {
        farmer_name: (JSON.parse(localStorage.getItem('krishiUser')) || {}).name || "Farmer",
        crop_name: cropName,
        quantity: parseFloat(qty),
        expected_price: parseFloat(expectedPrice),
        location: (JSON.parse(localStorage.getItem('krishiFarmData')) || {}).location || "Unknown"
    };
    
    try {
        let res = await fetch('/api/marketplace/match', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        });
        let data = await res.json();
        if(data.data && data.data.length > 0) {
            let html = `<h4 style="margin-top:20px; color:#1565c0;">🎯 AI Buyer Matches Found!</h4>`;
            data.data.forEach(match => {
                let d = match.demand;
                html += `
                    <div style="border: 2px solid #1565c0; padding: 15px; border-radius: 8px; background: #f8fbff; margin-bottom: 10px;">
                        <div style="display:flex; justify-content: space-between; align-items:center;">
                            <strong>${d.buyer_name}</strong>
                            <span style="background:#4caf50; color:white; padding:4px 8px; border-radius:12px; font-weight:bold; font-size:0.85em;">${match.score}% Match</span>
                        </div>
                        <p style="margin:8px 0; font-size:0.9em;">Wants ${d.quantity} kg ${d.crop_name} @ ₹${d.max_price}/kg</p>
                        <p style="margin:5px 0; font-size:0.85em; color:#666;">📍 ${d.location} | 📅 By ${d.required_by}</p>
                        <button class="btn" style="width:100%; margin-top:10px;" onclick="openOfferModal('${d.id}')">Send Offer</button>
                    </div>
                `;
            });
            // We append this to the "buyersList" div where the old simulated buyers used to be, or demandInfo
            document.getElementById('buyersList').innerHTML = html + document.getElementById('buyersList').innerHTML;
        }
    } catch(e) {}
}

async function loadMarketplaceData() {
    try {
        loadBuyerDemands();
        loadMyOffers();
        let res = await fetch('/api/marketplace/orders');
        let data = await res.json();
        if(data.data && data.data.length > 0) {
            let ordersList = document.getElementById('ordersList');
            ordersList.innerHTML = '';
            data.data.forEach(o => {
                let total = (o.quantity * o.price) - o.transport_cost;
                ordersList.innerHTML += `
                    <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; margin-bottom: 15px; background: #fff;">
                        <div style="display:flex; justify-content: space-between; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:10px;">
                            <strong>${o.order_id} <span style="background:#fff3e0; color:#e65100; font-size:0.8em; padding:2px 6px; border-radius:10px; margin-left:10px;">Pending Pickup</span></strong>
                            <strong style="color:#2e7d32;">Net: ₹${total.toFixed(0)}</strong>
                        </div>
                        <p style="margin:5px 0; font-size:0.9em;"><strong>Buyer:</strong> ${o.buyer_name} (for ${o.crop_name})</p>
                        <p style="margin:5px 0; font-size:0.9em;"><strong>Quantity:</strong> ${o.quantity} kg @ ₹${o.price}/kg</p>
                        <p style="margin:5px 0; font-size:0.9em; color:#666;">🚚 Logistics partner assigned. Estimated transport cost deducted: ₹${o.transport_cost.toFixed(0)}</p>
                    </div>
                `;
            });
        }
    } catch(e) { console.log(e); }
}

document.addEventListener('DOMContentLoaded', () => {
    loadMarketplaceData();
});

async function acceptOrder(buyerName, qty, price, transportCost, cropName) {
    let orderId = "ORD-" + Math.floor(Math.random() * 100000);
    let orderData = {
        buyer_name: buyerName,
        quantity: qty,
        price: price,
        transport_cost: transportCost,
        order_id: orderId,
        crop_name: cropName || "Crop"
    };
    
    try {
        await fetch('/api/marketplace/order', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderData)
        });
        alert("Order accepted successfully! Logistics partner has been notified.");
        loadMarketplaceData();
        showMktTab({currentTarget: document.querySelectorAll('#marketplaceDashboard .tab')[1]}, 'mktOrders');
    } catch(e) { alert("Error saving order"); }
}

async function runMarketplaceAI(cropName, qty, expectedPrice) {
    findMatchesForFarmer(cropName, qty, expectedPrice);
    try {
        await fetch('/api/marketplace/list', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({crop_name: cropName, quantity: qty, expected_price: expectedPrice})
        });
    } catch(e) {}
    
    // Simulated AI Demand Forecasting
    let demandLevels = ["High", "Medium", "Low"];
    let demand = demandLevels[Math.floor(Math.random() * 2)];
    
    let demandColor = demand === "High" ? "#2e7d32" : demand === "Medium" ? "#ff9800" : "#d32f2f";
    let demandHtml = `
        <h4 style="margin:0 0 10px 0; color: ${demandColor}">Current Demand: ${demand}</h4>
        <p style="margin:0; font-size:0.9em; color:#555;">Based on recent market trends and seasonal data, the demand for <strong>${cropName}</strong> is currently ${demand}. Buyers are actively looking for fresh supplies.</p>
        <p style="margin:5px 0 0 0; font-size:0.9em; color:#555;"><strong>AI Suggestion:</strong> List ${demand === 'High' ? 'your full harvest' : 'in smaller batches'} to maximize profit.</p>
    `;
    document.getElementById('demandInfo').innerHTML = demandHtml;
    
    let buyers = [
        { name: "FreshMart Retailers", type: "Retail Chain", price: expectedPrice + 2, distance: 15 },
        { name: "AgroBulk Traders", type: "Wholesaler", price: expectedPrice - 1, distance: 5 },
        { name: "Green Leaf Restaurants", type: "Restaurant", price: expectedPrice + 5, distance: 45 }
    ];
    
    let transportRatePerKmPerKg = 0.05;
    let buyersHtml = "";
    let bestNetEarning = -999999;
    let bestBuyer = null;
    
    buyers.forEach((b) => {
        let revenue = b.price * qty;
        let transportCost = b.distance * transportRatePerKmPerKg * qty;
        let netEarning = revenue - transportCost;
        
        if (netEarning > bestNetEarning) {
            bestNetEarning = netEarning;
            bestBuyer = { ...b, netEarning, transportCost };
        }
        
        buyersHtml += `
            <div style="border: 1px solid #eee; padding: 15px; border-radius: 8px; background: #fafafa;">
                <div style="display:flex; justify-content: space-between; margin-bottom:10px;">
                    <strong style="color:#002244;">${b.name} <span style="font-size:0.8em; color:#777; font-weight:normal;">(${b.type})</span></strong>
                    <strong style="color:#2e7d32;">₹${b.price}/kg</strong>
                </div>
                <div style="font-size:0.9em; color:#555; margin-bottom:10px;">
                    📍 ${b.distance} km away | 🚚 Est. Transport: ₹${transportCost.toFixed(0)}
                </div>
                <button onclick="acceptOrder('${b.name}', ${qty}, ${b.price}, ${transportCost}, '${cropName}')" style="background: #0055a4; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size:0.85em;">Accept Offer</button>
            </div>
        `;
    });
    
    document.getElementById('buyersList').innerHTML = buyersHtml;
    
    let bestHtml = `
        <h4 style="margin:0 0 10px 0; color: #2e7d32;">AI Recommendation: Sell to ${bestBuyer.name}</h4>
        <p style="margin:0; font-size:0.9em; color:#333;">
            Although prices vary, selling to <strong>${bestBuyer.name}</strong> yields the best estimated net return of <strong>₹${bestBuyer.netEarning.toFixed(0)}</strong> after accounting for ₹${bestBuyer.transportCost.toFixed(0)} in logistics costs.
        </p>
    `;
    document.getElementById('bestBuyerInfo').innerHTML = bestHtml;
}

async function submitFarmerListing() {
    let cropName = (document.getElementById('sellCrop').value || '').trim();
    let qtyVal = document.getElementById('sellQty').value;
    let expectedPriceVal = document.getElementById('sellPrice').value;

    let qty = parseFloat(qtyVal);
    let expectedPrice = parseFloat(expectedPriceVal);

    if (!cropName) {
        alert("Please enter a valid crop / product name.");
        return;
    }

    if (isNaN(qty) || qty <= 0) {
        alert("Please enter a valid positive quantity (kg).");
        return;
    }

    if (isNaN(expectedPrice) || expectedPrice <= 0) {
        alert("Please enter a valid positive expected price (₹/kg).");
        return;
    }
    
    // Clear previous matches
    document.getElementById('buyersList').innerHTML = "";
    
    // Create Farmer Listing object and trigger matching
    let listing = {
        crop_name: cropName,
        quantity: qty,
        expected_price: expectedPrice,
        location: (JSON.parse(localStorage.getItem('krishiFarmData')) || {}).location || "Unknown",
        farmer_name: (JSON.parse(localStorage.getItem('krishiUser')) || {}).name || "Farmer"
    };
    
    try {
        // Save listing to backend
        let res = await fetch('/api/marketplace/list', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(listing)
        });

        if (!res.ok) {
            alert("Failed to list crop. Please try again.");
            return;
        }
        
        // Also save listing logic
        let html = `
            <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; background: #fff; margin-bottom: 15px;">
                <div style="display:flex; justify-content: space-between; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:10px;">
                    <strong style="color: #2e7d32;">${listing.crop_name}</strong>
                    <span style="background:#e8f5e9; color:#2e7d32; font-size:0.8em; padding:2px 8px; border-radius:12px;">Active</span>
                </div>
                <p style="margin:5px 0; font-size:0.9em;"><strong>Quantity:</strong> ${listing.quantity} kg</p>
                <p style="margin:5px 0; font-size:0.9em;"><strong>Expected Price:</strong> ₹${listing.expected_price}/kg</p>
                <p style="margin:5px 0; font-size:0.9em;"><strong>Location:</strong> ${listing.location}</p>
            </div>
        `;
        document.getElementById('myListingsList').innerHTML = html + document.getElementById('myListingsList').innerHTML;
        
        alert("Crop listed successfully!");
        document.getElementById('sellForm').reset();
        
        // Trigger AI match search
        findMatchesForFarmer(cropName, qty, expectedPrice);
    } catch(e) {
        console.error("Error submitting listing:", e);
        alert("Network error while listing crop.");
    }
}
// --- SPEECH-TO-TEXT VOICE SEARCH (Web Speech API) ---
let activeSpeechRecognition = null;

function initVoiceInput() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        console.log("Web Speech API not supported in this browser.");
        document.querySelectorAll('.voice-btn').forEach(btn => btn.style.display = 'none');
    }
}

window.startVoiceSearch = function(targetInputId, micBtnEl) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Voice recognition is not supported in your browser. Please try Chrome, Edge, or Safari.");
        return;
    }

    if (activeSpeechRecognition) {
        try { activeSpeechRecognition.stop(); } catch(e) {}
        activeSpeechRecognition = null;
        if (micBtnEl) micBtnEl.classList.remove('listening');
        return;
    }

    try {
        const recognition = new SpeechRecognition();
        activeSpeechRecognition = recognition;

        const langToggle = document.getElementById('langToggle');
        const currentLang = langToggle ? langToggle.value : 'en';
        const langMap = {
            'en': 'en-IN',
            'hi': 'hi-IN',
            'pa': 'pa-IN',
            'mr': 'mr-IN',
            'gu': 'gu-IN',
            'bn': 'bn-IN'
        };
        recognition.lang = langMap[currentLang] || 'en-IN';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        if (micBtnEl) {
            micBtnEl.classList.add('listening');
            micBtnEl.title = "Listening... Speak now";
        }

        recognition.onresult = (event) => {
            if (!event.results || !event.results[0] || !event.results[0][0]) return;
            const transcript = event.results[0][0].transcript.trim();
            if (!transcript) return;

            const inputEl = document.getElementById(targetInputId);
            if (!inputEl) return;

            if (typeof tomInstances !== 'undefined' && tomInstances[targetInputId]) {
                const ts = tomInstances[targetInputId];
                let matchedValue = null;
                Object.keys(ts.options).forEach(optKey => {
                    const optText = ts.options[optKey].text.toLowerCase();
                    if (optText.includes(transcript.toLowerCase()) || transcript.toLowerCase().includes(optText)) {
                        matchedValue = optKey;
                    }
                });
                if (matchedValue) {
                    ts.setValue(matchedValue);
                } else {
                    ts.setTextboxValue(transcript);
                    ts.refreshOptions();
                }
            } else {
                inputEl.value = transcript;
                inputEl.dispatchEvent(new Event('input', { bubbles: true }));
            }
        };

        recognition.onerror = (event) => {
            console.warn("Speech recognition error:", event.error);
            if (micBtnEl) {
                micBtnEl.classList.remove('listening');
                micBtnEl.title = "Click to speak";
            }
            activeSpeechRecognition = null;
            if (event.error === 'not-allowed') {
                alert("Microphone permission denied. Please allow microphone access in browser settings.");
            }
        };

        recognition.onend = () => {
            if (micBtnEl) {
                micBtnEl.classList.remove('listening');
                micBtnEl.title = "Click to speak";
            }
            activeSpeechRecognition = null;
        };

        recognition.start();
    } catch (e) {
        console.error("Speech recognition start failed:", e);
        if (micBtnEl) micBtnEl.classList.remove('listening');
        activeSpeechRecognition = null;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initVoiceInput();
});
