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
        btnUpload: "📸 ਫੋਟੋ ਲਓ ਜਾਂ ਅਪਲੋਡ ਕਰੋ", analyzing: "ਏਆਈ ਤੁਹਾਡੀ ਫਸਲ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰ ਰਿਹਾ ਹੈ...", healthy: "ਸਿਹਤਮੰਦ", sick: "ਬਿਮਾਰੀ ਦਾ ਪਤਾ ਲੱਗਿਆ"
    },
    mr: { // Marathi
        title: "🌾 एआय कृषी सहयोगी", subtitle: "स्मार्ट शेती पीक शिफारस प्रणाली", btn: "एआय शिफारस मिळवा",
        farmDetails: "शेत तपशील", labelLocation: "स्थान", labelSoil: "मातीचा प्रकार", labelSeason: "हंगाम",
        btnListen: "🔊 ऐका", btnPrint: "🖨️ प्रिंट", headDiagnosis: "एआय रोग निदान",
        btnUpload: "📸 फोटो घ्या किंवा अपलोड करा", analyzing: "एआय आपल्या पिकाचे विश्लेषण करत आहे...", healthy: "निरोगी", sick: "रोग आढळला"
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
            headers: { 'Content-Type': 'application/json' },
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

    async function initSelects() {
        try {
            const locRes = await fetch('/locations.json');
            const locData = await locRes.json();
            window._rawLocationData = locData;
            renderLocationDropdown(savedLang);
            tomInstances['location'] = new TomSelect("#location", { create: true, sortField: { field: "text", direction: "asc" }, plugins: ['clear_button'] });
            tomInstances['soil']   = new TomSelect("#soil",   { create: false, plugins: ['clear_button'] });
            tomInstances['season'] = new TomSelect("#season", { create: false, plugins: ['clear_button'] });
            tomInstances['water']  = new TomSelect("#water",  { create: false, plugins: ['clear_button'] });
            Object.values(tomInstances).forEach(ts => ts.setValue('', true));
            applyLang(savedLang);
        } catch (e) { console.error("Initialization failed", e); }
    }

    function renderLocationDropdown(lang) {
        const data = window._rawLocationData;
        if (!data) return;
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
        const response = await fetch('/recommend', {
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
        cropsHtml += `<div class="crop-item"><div class="crop-name">${index + 1}. ${crop.name}</div><div class="crop-details">✓ ${t.resYield}: ${crop.yield}<br>✓ ${t.resInvestment}: ${crop.investment}<br>✓ ${t.resPrice}: ${priceDisplay}<br><div style="margin-top:10px; padding:8px; background:#f0f7f4; border-left:3px solid #107c41;"><strong>💡 Tip:</strong> ${crop.tip}</div></div></div>`;
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

        document.getElementById('ndviMap').innerHTML = `<div style="text-align:center;"><span style="color:#2e7d32; font-weight:bold;">🛰️ Satellite Data: ${statusMsg}</span><p style="font-size:0.8em; color:#666;">${hint}</p></div>`;
        
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
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px; background: white; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <thead>
                <tr style="background-color: #f1f8e9; text-align: left; color: #1b5e20;">
                    <th style="padding: 15px; border-bottom: 2px solid #2e7d32; font-weight: bold;">Commodity</th>
                    <th style="padding: 15px; border-bottom: 2px solid #2e7d32; font-weight: bold;">Live Price</th>
                    <th style="padding: 15px; border-bottom: 2px solid #2e7d32; font-weight: bold;">Market Trend</th>
                </tr>
            </thead>
            <tbody>`;
        
        data.market.forEach((item, idx) => {
            let badgeColor = "#757575"; // Stable grey
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
                    <td style="padding: 15px; font-weight: bold; color: #333;">${item.crop}</td>
                    <td style="padding: 15px; font-weight: bold; color: #2e7d32; font-size: 1.1em;">₹${item.price}<span style="font-size: 0.7em; color: #666; font-weight: normal;">/${t.resQuintal}</span></td>
                    <td style="padding: 15px;">
                        <span style="background-color: ${badgeBg}; color: ${badgeColor}; padding: 5px 10px; border-radius: 20px; font-size: 0.85em; font-weight: bold; display: inline-block;">
                            ${icon} ${item.trend || "Stable"}
                        </span>
                    </td>
                </tr>`;
        });
        marketHtml += `</tbody></table>
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
                <div style="font-weight: bold; color: #0055a4;">${p.author} • ${p.location}</div>
                <p style="margin: 5px 0; font-size: 0.9em;">"${p.content}"</p>
                <span style="font-size: 0.75em; background: #e3f2fd; padding: 2px 8px; border-radius: 10px;">✅ ${p.tag}</span>
            </div>
        `).join('');
    } catch (e) {
        list.innerHTML = '<p>Community currently offline.</p>';
    }
}

window.showShareForm = async function() {
    const content = prompt("Share your success story (e.g., 'The AI saved my cotton crop!'):");
    if (!content) return;
    
    const tag = prompt("Add a tag (e.g., 'Saved Crop', 'Higher Profit'):") || "Success";
    
    try {
        await fetch('/api/community', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                author: user.name,
                location: document.getElementById('location').value.split(',')[0],
                content: content,
                tag: tag
            })
        });
        loadCommunity();
    } catch (e) { alert("Failed to post."); }
}

function showTab(event, tabName) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}
// --- AI Disease Diagnosis Logic ---
document.getElementById('imageInput').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const uploadArea = document.getElementById('diagnosisUpload');
    const loadingArea = document.getElementById('diagnosisLoading');
    const resultArea = document.getElementById('diagnosisResult');

    uploadArea.style.display = 'none';
    loadingArea.style.display = 'block';
    resultArea.style.display = 'none';

    const formData = new FormData();
    formData.append('file', file);

    try {
        const res = await fetch('/api/diagnose', {
            method: 'POST',
            body: formData
        });
        const data = await res.json();

        loadingArea.style.display = 'none';
        
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
        alert("Failed to connect to diagnosis AI.");
    }
});
