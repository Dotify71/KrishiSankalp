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
        tabCrops:"Crop Suggestions", tabMarket:"Market Prices", tabWeather:"Weather Insights", tabSchemes:"Govt Schemes 🏛️",
        headCrops:"Recommended Crops", headMarket:"Market Analysis", headWeather:"Weather Insights", headSchemes:"Eligible Government Subsidies",
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
        tabCrops:"फसल सुझाव", tabMarket:"बाज़ार भाव", tabWeather:"मौसम जानकारी", tabSchemes:"सरकारी योजनाएँ 🏛️",
        headCrops:"अनुशंसित फसलें", headMarket:"बाज़ार विश्लेषण", headWeather:"मौसम जानकारी", headSchemes:"पात्र सरकारी सब्सिडी",
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
            picEl.style.filter = 'blur(1.5px)'; 
            picEl.style.transition = 'filter 0.3s';
            picEl.onmouseover = () => picEl.style.filter = 'blur(0px)';
            picEl.onmouseout = () => picEl.style.filter = 'blur(1.5px)';
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

document.getElementById('farmForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
        location: document.getElementById('location').value,
        soil: document.getElementById('soil').value,
        season: document.getElementById('season').value,
        water: document.getElementById('water').value,
        farmSize: document.getElementById('farmSize').value,
        budget: document.getElementById('budget').value
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
