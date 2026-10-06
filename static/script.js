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
        speechCropDetail: "{name}. Expected yield is {yield}, with a current market price of {price} rupees per quintal. ",
        headDiagnosis: "AI Disease Diagnosis", subDiagnosis: "Identify crop diseases instantly using AI", btnUpload: "📸 Take Photo or Upload",
        uploadHint: "Works best with clear close-ups of leaves or stems", analyzing: "AI is analyzing your crop...",
        headTreatment: "Organic Treatment Plan:", healthy: "Healthy", sick: "Disease Detected", confidence: "Confidence"
    },
    hi: {
        title: "🌾 एआई कृषि सहयोगी", subtitle: "स्मार्ट खेती फसल सिफारिश प्रणाली", btn: "एआई सिफारिश प्राप्त करें",
        farmDetails: "खेत की जानकारी",
        labelLocation: "स्थान", labelSoil: "मिट्टी का प्रकार", labelSeason: "मौसम",
        labelWater: "जल स्रोत", labelFarmSize: "खेत का आकार (एकड़)", labelBudget: "बजट (₹)",
        phFarmSize: "खेत का आकार दर्ज करें", phBudget: "बजट दर्ज करें",
        soilPlaceholder: "मिट्टी का प्रकार चुनें",
        soil1:"जलोढ़ मिट्टी", soil2:"काली मिट्टी (रेगुर)", soil3:"लाल और पीली मिट्टी",
        soil4:"लैटेराइट मिट्टी", soil5:"शुष्क/रेगिस्तानी मिट्टी", soil6:"लवणीय और क्षारीय मिट्टी",
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
        farmDetails: "ਖੇਤ ਦੇ ਵੇਰਵੇ",
        labelLocation: "ਸਥਾਨ", labelSoil: "ਮਿੱਟੀ ਦੀ ਕਿਸਮ", labelSeason: "ਸੀਜ਼ਨ",
        labelWater: "ਪਾਣੀ ਦਾ ਸਰੋਤ", labelFarmSize: "ਖੇਤ ਦਾ ਆਕਾਰ (ਏਕੜ)", labelBudget: "ਬਜਟ (₹)",
        phFarmSize: "ਖੇਤ ਦਾ ਆਕਾਰ ਦਰਜ ਕਰੋ", phBudget: "ਬਜਟ ਦਰਜ ਕਰੋ",
        soilPlaceholder: "ਮਿੱਟੀ ਦੀ ਕਿਸਮ ਚੁਣੋ",
        soil1:"ਜਲੋੜ ਮਿੱਟੀ", soil2:"ਕਾਲੀ ਮਿੱਟੀ (ਰੇਗੁਰ)", soil3:"ਲਾਲ ਅਤੇ ਪੀਲੀ ਮਿੱਟੀ",
        soil4:"ਲੈਟਰਾਈਟ ਮਿੱਟੀ", soil5:"ਖੁਸ਼ਕ/ਮਾਰੂਥਲ ਮਿੱਟੀ", soil6:"ਖਾਰੀ ਅਤੇ ਖਾਰੀ ਮਿੱਟੀ",
        soil7:"ਪੀਟੀ ਅਤੇ ਦਲਦਲੀ ਮਿੱਟੀ", soil8:"ਜੰਗਲ ਅਤੇ ਪਹਾੜੀ ਮਿੱਟੀ",
        soil9:"ਰੇਤਲੀ (ਸਧਾਰਨ)", soil10:"ਚੀਕਣੀ (ਸਧਾਰਨ)", soil11:"ਦੋਮਟ (ਸਧਾਰਨ)",
        seasonPlaceholder: "ਸੀਜ਼ਨ ਚੁਣੋ",
        groupAgri: "ਖੇਤੀਬਾੜੀ ਸੀਜ਼ਨ (ਮੁੱਖ)", groupRitu: "ਰਵਾਇਤੀ ਭਾਰਤੀ ਰੁੱਤਾਂ", groupGeneral: "ਆਮ ਸੀਜ਼ਨ",
        season1:"ਖਰੀਫ (ਮਾਨਸੂਨ)", season2:"ਹਾੜੀ / ਰਬੀ (ਸਰਦੀ)", season3:"ਜ਼ਾਇਦ (ਗਰਮੀ)",
        season4:"ਬਸੰਤ", season5:"ਗ੍ਰੀਸ਼ਮ (ਗਰਮੀ)", season6:"ਵਰਖਾ (ਬਰਸਾਤ)",
        season7:"ਸ਼ਰਦ (ਪਤਝੜ)", season8:"ਹੇਮੰਤ (ਸਰਦੀ ਤੋਂ ਪਹਿਲਾਂ)", season9:"ਸ਼ਿਸ਼ਿਰ (ਸਰਦੀ)",
        season10:"ਬਸੰਤ", season11:"ਗਰਮੀਆਂ", season12:"ਮਾਨਸੂਨ", season13:"ਪਤਝੜ", season14:"ਸਰਦੀਆਂ",
        waterPlaceholder: "ਪਾਣੀ ਦਾ ਸਰੋਤ ਚੁਣੋ",
        water1:"ਮੀਂਹ 'ਤੇ ਨਿਰਭਰ (ਮਾਨਸੂਨ)", water2:"ਟਿਊਬਵੈੱਲ / ਬੋਰਵੈੱਲ", water3:"ਨਹਿਰੀ ਸਿੰਚਾਈ",
        water4:"ਦਰਿਆ / ਨਦੀ", water5:"ਤਲਾਬ / ਟੈਂਕੀ ਸਿੰਚਾਈ",
        water6:"ਡ੍ਰਿਪ / ਸਪ੍ਰਿੰਕਲਰ ਸਿਸਟਮ", water7:"ਖੁੱਲ੍ਹਾ ਖੂਹ",
        btnListen: "🔊 ਸੁਣੋ", btnPrint: "🖨️ ਪ੍ਰਿੰਟ",
        tabCrops:"ਫਸਲ ਦੇ ਸੁਝਾਅ", tabMarket:"ਮਾਰਕੀਟ ਭਾਅ", tabWeather:"ਮੌਸਮ ਜਾਣਕਾਰੀ", tabYield: "ਸੈਟੇਲਾਈਟ ਝਾੜ 🛰️", tabCommunity: "ਕਮਿਊਨਿਟੀ 🤝", tabSchemes:"ਸਰਕਾਰੀ ਸਕੀਮਾਂ 🏛️",
        headCrops:"ਸਿਫ਼ਾਰਸ਼ ਕੀਤੀਆਂ ਫਸਲਾਂ", headMarket:"ਮਾਰਕੀਟ ਵਿਸ਼ਲੇਸ਼ਣ", headWeather:"ਮੌਸਮ ਜਾਣਕਾਰੀ", headYield: "ਸੈਟੇਲਾਈਟ ਫਸਲ ਨਿਗਰਾਨੀ (NDVI)", headCommunity: "ਕ੍ਰਿਸ਼ੀ ਕਮਿਊਨਿਟੀ ਦੀਆਂ ਸਫਲਤਾ ਦੀਆਂ ਕਹਾਣੀਆਂ", headSchemes:"ਯੋਗ ਸਰਕਾਰੀ ਸਬਸਿਡੀਆਂ",
        loadingCommunity: "ਖੇਤਰੀ ਕਹਾਣੀਆਂ ਲੋਡ ਹੋ ਰਹੀਆਂ ਹਨ...", shareTitle: "ਕੀ ਕ੍ਰਿਸ਼ੀ ਸੰਕਲਪ ਨੇ ਤੁਹਾਡੀ ਮਦਦ ਕੀਤੀ?", shareDesc: "ਆਪਣੇ ਜ਼ਿਲ੍ਹੇ ਦੇ ਦੂਜੇ ਕਿਸਾਨਾਂ ਦੀ ਮਦਦ ਕਰਨ ਲਈ ਆਪਣੀ ਕਹਾਣੀ ਸਾਂਝੀ ਕਰੋ।", btnShare: "ਮੇਰੀ ਸਫਲਤਾ ਸਾਂਝੀ ਕਰੋ",
        yieldDesc: "ਤੁਹਾਡੇ ਖੇਤ ਦੇ ਨਿਰਦੇਸ਼ਾਂਕਾਂ ਲਈ ਸੈਟੇਲਾਈਟ ਚਿੱਤਰਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...",
        resYieldValue: "ਬਨਸਪਤੀ ਸੂਚਕਾਂਕ (NDVI)", resYieldStatus: "ਫਸਲ ਦੀ ਸਿਹਤ ਸਥਿਤੀ",
        modalTitle:"ਸਥਾਨ ਦੀ ਇਜਾਜ਼ਤ ਲੋੜੀਂਦੀ ਹੈ",
        modalBody:"ਇਸ ਵੈੱਬਸਾਈਟ ਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ ਤੁਹਾਨੂੰ ਇਜਾਜ਼ਤ ਦੇਣੀ ਪਵੇਗੀ। ਸਹੀ ਖੇਤੀਬਾੜੀ ਸਿਫ਼ਾਰਸ਼ਾਂ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਸਾਨੂੰ ਤੁਹਾਡੇ ਸਹੀ ਸਥਾਨ ਦੀ ਲੋੜ ਹੈ।",
        btnTryAgain:"ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ", btnCancel:"ਰੱਦ ਕਰੋ",
        profile:"[ਪ੍ਰੋਫਾਈਲ]", logout:"[ਲਾਗਆਊਟ]",
        resYield: "ਅਨੁਮਾਨਿਤ ਝਾੜ", resInvestment: "ਨਿਵੇਸ਼", resPrice: "ਮੌਜੂਦਾ ਕੀਮਤ",
        resQuintal: "ਕੁਇੰਟਲ", resKg: "ਕਿਲੋਗ੍ਰਾਮ", resTrend: "ਰੁਝਾਨ", resStable: "ਸਥਿਰ",
        resDemand: "ਮੰਗ", resHigh: "ਉੱਚ", resAlerts: "ਖੇਤੀਬਾੜੀ ਅਲਰਟ",
        resAlert1: "• ਮਿੱਟੀ ਵਿੱਚ ਨਮੀ ਦੇ ਪੱਧਰ ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ", resAlert2: "• ਮੌਸਮੀ ਤਬਦੀਲੀਆਂ ਲਈ ਤਿਆਰ ਰਹੋ", resAlert3: "• ਕੁਸ਼ਲ ਸਿੰਚਾਈ ਤਰੀਕਿਆਂ 'ਤੇ ਵਿਚਾਰ ਕਰੋ",
        resEligibility: "ਯੋਗਤਾ", resLoc: "ਸਥਾਨ", resTemp: "ਤਾਪਮਾਨ", resRain: "ਮੀਂਹ", resHum: "ਨਮੀ",
        resProcessing: "ਬੇਨਤੀ 'ਤੇ ਕਾਰਵਾਈ ਹੋ ਰਹੀ ਹੈ...", resAnalyzing: "ਤੁਹਾਡੇ ਖੇਤ ਦੇ ਡੇਟਾ ਦਾ ਸੁਰੱਖਿਅਤ ਵਿਸ਼ਲੇਸ਼ਣ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...",
        resErrComm: "ਮਾਫ਼ ਕਰਨਾ, ਸਾਡੇ ਸਿਸਟਮ ਨਾਲ ਜੁੜਨ ਵਿੱਚ ਕੁਝ ਸਮੱਸਿਆ ਆ ਰਹੀ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਇੰਟਰਨੈੱਟ ਚੈੱਕ ਕਰੋ ਜਾਂ ਥੋੜ੍ਹੀ ਦੇਰ ਬਾਅਦ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।", 
        resErrTime: "ਸਿਸਟਮ ਆਮ ਨਾਲੋਂ ਥੋੜ੍ਹਾ ਵੱਧ ਸਮਾਂ ਲੈ ਰਿਹਾ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਕੁਝ ਸਮਾਂ ਉਡੀਕ ਕਰੋ ਜਾਂ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        speechIntro: "{location} ਲਈ ਤੁਹਾਡੀ ਕ੍ਰਿਸ਼ੀ ਸੰਕਲਪ ਸਿਫਾਰਸ਼ ਇੱਥੇ ਹੈ। ",
        speechWeather: "ਮੌਜੂਦਾ ਤਾਪਮਾਨ {temp} ਹੈ ਅਤੇ {rain} ਵਰਖਾ ਹੋ ਰਹੀ ਹੈ। ",
        speechCrops: "ਅਸੀਂ ਹੇਠ ਲਿਖੀਆਂ ਫਸਲਾਂ ਦੀ ਸਿਫਾਰਸ਼ ਕਰਦੇ ਹਾਂ: ",
        speechCropDetail: "{name}। ਸੰਭਾਵਿਤ ਝਾੜ {yield} ਹੈ, ਅਤੇ ਮਾਰਕੀਟ ਕੀਮਤ {price} ਰੁਪਏ ਪ੍ਰਤੀ ਕੁਇੰਟਲ ਹੈ। ",
        headDiagnosis: "ਏਆਈ ਬਿਮਾਰੀ ਦੀ ਜਾਂਚ", subDiagnosis: "ਏਆਈ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਤੁਰੰਤ ਫਸਲਾਂ ਦੀਆਂ ਬਿਮਾਰੀਆਂ ਦੀ ਪਛਾਣ ਕਰੋ", btnUpload: "📸 ਫੋਟੋ ਲਓ ਜਾਂ ਅਪਲੋਡ ਕਰੋ",
        uploadHint: "ਪੱਤਿਆਂ ਜਾਂ ਤਣਿਆਂ ਦੀਆਂ ਸਾਫ਼ ਤਸਵੀਰਾਂ ਨਾਲ ਵਧੀਆ ਕੰਮ ਕਰਦਾ ਹੈ", analyzing: "ਏਆਈ ਤੁਹਾਡੀ ਫਸਲ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰ ਰਿਹਾ ਹੈ...",
        headTreatment: "ਜੈਵਿਕ ਇਲਾਜ ਯੋਜਨਾ:", healthy: "ਸਿਹਤਮੰਦ", sick: "ਬਿਮਾਰੀ ਦਾ ਪਤਾ ਲੱਗਿਆ", confidence: "ਭਰੋਸਾ"
    },
    mr: { // Marathi
        title: "🌾 एआय कृषी सहयोगी", subtitle: "स्मार्ट शेती पीक शिफारस प्रणाली", btn: "एआय शिफारस मिळवा",
        farmDetails: "शेताचा तपशील",
        labelLocation: "स्थान", labelSoil: "मातीचा प्रकार", labelSeason: "हंगाम",
        labelWater: "पाण्याचा स्त्रोत", labelFarmSize: "शेताचा आकार (एकर)", labelBudget: "बजेट (₹)",
        phFarmSize: "शेताचा आकार टाका", phBudget: "बजेट टाका",
        soilPlaceholder: "मातीचा प्रकार निवडा",
        soil1:"गाळाची माती", soil2:"काळी माती (रेगूर)", soil3:"तांबडी आणि पिवळी माती",
        soil4:"जांभी माती (लॅटेराइट)", soil5:"वाळवंटी / कोरडी माती", soil6:"खारवट आणि क्षारयुक्त माती",
        soil7:"दलदलीची माती (पीट)", soil8:"पर्वतीय व वन माती",
        soil9:"रेताड (सामान्य)", soil10:"चिकण माती (सामान्य)", soil11:"गाळाची/दुमट माती (सामान्य)",
        seasonPlaceholder: "हंगाम निवडा",
        groupAgri: "कृषी हंगाम (मुख्य)", groupRitu: "पारंपारिक भारतीय ऋतू", groupGeneral: "सामान्य ऋतू/हंगाम",
        season1:"खरीप (पावसाळा)", season2:"रब्बी (हिवाळा)", season3:"उन्हाळी / झायद",
        season4:"वसंत", season5:"ग्रीष्म (उन्हाळा)", season6:"वर्षा (पावसाळा)",
        season7:"शरद", season8:"हेमंत (पूर्व-हिवाळा)", season9:"शिशिर (थंडी)",
        season10:"वसंत ऋतू", season11:"उन्हाळा", season12:"पावसाळा", season13:"पानगळ / शरद", season14:"हिवाळा",
        waterPlaceholder: "पाण्याचा स्त्रोत निवडा",
        water1:"पावसावर अवलंबून (पावसाळा)", water2:"बोअरवेल / कूपनलिका", water3:"कालवा सिंचन",
        water4:"नदी / नाला", water5:"तलाव / पाझर तलाव",
        water6:"ठिबक / तुषार सिंचन", water7:"उघडी विहीर",
        btnListen: "🔊 ऐका", btnPrint: "🖨️ प्रिंट",
        tabCrops:"पीक शिफारशी", tabMarket:"बाजार भाव", tabWeather:"हवामान अंदाज", tabYield: "उपग्रह पीक पाहणी 🛰️", tabCommunity: "शेतकरी समुदाय 🤝", tabSchemes:"शासकीय योजना 🏛️",
        headCrops:"शिफारस केलेली पिके", headMarket:"बाजार विश्लेषण", headWeather:"हवामान माहिती", headYield: "उपग्रह पीक निरीक्षण (NDVI)", headCommunity: "कृषी समुदाय यशोगाथा", headSchemes:"पात्र शासकीय सबसिडी व योजना",
        loadingCommunity: "प्रादेशिक यशोगाथा लोड होत आहेत...", shareTitle: "कृषी संकल्पने तुम्हाला मदत केली का?", shareDesc: "आपल्या जिल्ह्यातील इतर शेतकऱ्यांना मदत करण्यासाठी आपली गोष्ट शेअर करा.", btnShare: "माझी यशोगाथा शेअर करा",
        yieldDesc: "आपल्या शेताच्या निर्देशांकांसाठी उपग्रह छायाचित्रांचे विश्लेषण केले जात आहे...",
        resYieldValue: "वनस्पती निर्देशांक (NDVI)", resYieldStatus: "पीक आरोग्य स्थिती",
        modalTitle:"स्थानाची परवानगी आवश्यक",
        modalBody:"ही वेबसाइट वापरण्यासाठी तुम्हाला परवानगी द्यावी लागेल. अचूक कृषी शिफारसी देण्यासाठी आम्हाला तुमच्या अचूक स्थानाची आवश्यकता आहे.",
        btnTryAgain:"पुन्हा प्रयत्न करा", btnCancel:"रद्द करा",
        profile:"[प्रोफाइल]", logout:"[लॉगआउट]",
        resYield: "अपेक्षित उत्पन्न", resInvestment: "गुंतवणूक", resPrice: "सध्याचा दर",
        resQuintal: "क्विंटल", resKg: "किलो", resTrend: "कल", resStable: "स्थिर",
        resDemand: "मागणी", resHigh: "जास्त", resAlerts: "शेती सूचना",
        resAlert1: "• मातीतील ओलाव्याच्या प्रमाणावर लक्ष ठेवा", resAlert2: "• हंगामी बदलांसाठी तयार रहा", resAlert3: "• कार्यक्षम सिंचन पद्धतींचा वापर करा",
        resEligibility: "पात्रता", resLoc: "स्थान", resTemp: "तापमान", resRain: "पाऊस", resHum: "आर्द्रता",
        resProcessing: "विनंतीवर प्रक्रिया करत आहे...", resAnalyzing: "आपल्या शेताच्या डेटाचे सुरक्षितपणे विश्लेषण केले जात आहे...",
        resErrComm: "क्षमस्व, आमच्या सिस्टमशी जोडण्यात अडचण येत आहे. कृपया आपले इंटरनेट तपासा किंवा थोड्या वेळाने पुन्हा प्रयत्न करा.", 
        resErrTime: "सिस्टमला नेहमीपेक्षा थोडा जास्त वेळ लागत आहे. कृपया थोडी प्रतीक्षा करा किंवा पुन्हा प्रयत्न करा.",
        speechIntro: "{location} साठी तुमची कृषी संकल्प शिफारस येथे आहे। ",
        speechWeather: "सध्याचे तापमान {temp} आहे आणि {rain} पाऊस पडत आहे। ",
        speechCrops: "आम्ही खालील पिकांची शिफारस करतो: ",
        speechCropDetail: "{name}। अपेक्षित उत्पन्न {yield} आहे, आणि बाजार भाव {price} रुपये प्रति क्विंटल आहे। ",
        headDiagnosis: "एआय रोग निदान", subDiagnosis: "एआय वापरून पिकांवरील रोगांचे त्वरित निदान करा", btnUpload: "📸 फोटो घ्या किंवा अपलोड करा",
        uploadHint: "पाने किंवा खोडांच्या स्पष्ट फोटोसह उत्तम कार्य करते", analyzing: "एआय आपल्या पिकाचे विश्लेषण करत आहे...",
        headTreatment: "सेंद्रिय उपचार योजना:", healthy: "निरोगी", sick: "रोग आढळला", confidence: "अचूकता"
    },
    gu: { // Gujarati
        title: "🌾 AI કૃષિ સહયોગી", subtitle: "સ્માર્ટ ખેતી પાક ભલામણ પ્રણાલી", btn: "AI ભલામણ મેળવો",
        farmDetails: "ખેતરની વિગતો",
        labelLocation: "સ્થળ", labelSoil: "જમીનનો પ્રકાર", labelSeason: "ઋતુ / મોસમ",
        labelWater: "પાણીનો સ્ત્રોત", labelFarmSize: "ખેતરનું કદ (એકર)", labelBudget: "બજેટ (₹)",
        phFarmSize: "ખેતરનું કદ દાખલ કરો", phBudget: "બજેટ દાખલ કરો",
        soilPlaceholder: "જમીનનો પ્રકાર પસંદ કરો",
        soil1:"કાંપની જમીન (કાંપવાળી)", soil2:"કાળી જમીન (રેગુર)", soil3:"રાતી અને પીળી જમીન",
        soil4:"લેટેરાઇટ જમીન (પડખાઉ)", soil5:"રણ / સૂકી જમીન", soil6:"ક્ષારીય અને આલ્કલાઇન જમીન",
        soil7:"પીટ અને દલદલવાળી જમીન", soil8:"જંગલ અને પર્વતીય જમીન",
        soil9:"રેતાળ (સામાન્ય)", soil10:"ચીકણી જમીન (સામાન્ય)", soil11:"ગોરાડુ / ગોરાટ જમીન (સામાન્ય)",
        seasonPlaceholder: "ઋતુ પસંદ કરો",
        groupAgri: "ખેતીની ઋતુઓ (મુખ્ય)", groupRitu: "પરંપરાગત ભારતીય ઋતુઓ", groupGeneral: "સામાન્ય ઋતુઓ",
        season1:"ખરીફ (ચોમાસુ)", season2:"રવિ (શિયાળો)", season3:"જાયદ (ઉનાળો)",
        season4:"વસંત", season5:"ગ્રીષ્મ (ઉનાળો)", season6:"વર્ષા (ચોમાસું)",
        season7:"શરદ", season8:"હેમંત (પૂર્વ-શિયાળો)", season9:"શિશિર (શિયાળો)",
        season10:"વસંત ઋતુ", season11:"ઉનાળો", season12:"ચોમાસું", season13:"પાનખર / શરદ", season14:"શિયાળો",
        waterPlaceholder: "પાણીનો સ્ત્રોત પસંદ કરો",
        water1:"વરસાદ આધારિત (ચોમાસુ)", water2:"બોરવેલ / ટ્યુબવેલ", water3:"નહેર સિંચાઈ",
        water4:"નદી / ઝરણું", water5:"તળાવ / ટાંકી સિંચાઈ",
        water6:"ટપક / ફુવારા પદ્ધતિ", water7:"ખુલ્લો કૂવો",
        btnListen: "🔊 સાંભળો", btnPrint: "🖨️ પ્રિન્ટ",
        tabCrops:"પાક સૂચનો", tabMarket:"બજાર ભાવ", tabWeather:"હવામાન માહિતી", tabYield: "સેટેલાઇટ ઉત્પાદન 🛰️", tabCommunity: "સમુદાય 🤝", tabSchemes:"સરકારી યોજનાઓ 🏛️",
        headCrops:"ભલામણ કરેલ પાક", headMarket:"બજાર વિશ્લેષણ", headWeather:"હવામાન માહિતી", headYield: "સેટેલાઇટ પાક મોનિટરિંગ (NDVI)", headCommunity: "કૃષિ સમુદાય સફળતા વાર્તાઓ", headSchemes:"પાત્ર સરકારી સબસિડી",
        loadingCommunity: "પ્રાદેશિક સફળતા વાર્તાઓ લોડ થઈ રહી છે...", shareTitle: "શું કૃષિ સંકલ્પે તમને મદદ કરી?", shareDesc: "તમારા જિલ્લાના અન્ય ખેડૂતોને મદદ કરવા માટે તમારી વાર્તા શેર કરો.", btnShare: "મારી સફળતા શેર કરો",
        yieldDesc: "તમારા ખેતરના કોઓર્ડિનેટ્સ માટે સેટેલાઇટ ઇમેજરીનું વિશ્લેષણ થઈ રહ્યું છે...",
        resYieldValue: "વનસ્પતિ સૂચકાંક (NDVI)", resYieldStatus: "પાક આરોગ્ય સ્થિતિ",
        modalTitle:"સ્થળ પરવાનગી જરૂરી છે",
        modalBody:"આ વેબસાઇટનો ઉપયોગ કરવા માટે તમારે પરવાનગી આપવી પડશે. સચોટ કૃષિ ભલામણો આપવા માટે અમને તમારા ચોક્કસ સ્થાનની જરૂર છે.",
        btnTryAgain:"ફરી પ્રયાસ કરો", btnCancel:"રદ કરો",
        profile:"[પ્રોફાઇલ]", logout:"[લૉગઆઉટ]",
        resYield: "અપેક્ષિત ઉત્પાદન", resInvestment: "રોકાણ", resPrice: "વર્તમાન ભાવ",
        resQuintal: "ક્વિન્ટલ", resKg: "કિલો", resTrend: "વલણ", resStable: "સ્થિર",
        resDemand: "માંગ", resHigh: "વધુ", resAlerts: "ખેતી ચેતવણીઓ",
        resAlert1: "• જમીનમાં ભેજનું સ્તર ચકાસતા રહો", resAlert2: "• મોસમી ફેરફારો માટે તૈયાર રહો", resAlert3: "• કાર્યક્ષમ સિંચાઈ પદ્ધતિઓ અપનાવો",
        resEligibility: "પાત્રતા", resLoc: "સ્થળ", resTemp: "તાપમાન", resRain: "વરસાદ", resHum: "ભેજ",
        resProcessing: "વિનંતી પર પ્રક્રિયા થઈ રહી છે...", resAnalyzing: "તમારા ખેતરના ડેટાનું સુરક્ષિત વિશ્લેષણ કરવામાં આવી રહ્યું છે...",
        resErrComm: "દિલગીર છીએ, અમારી સિસ્ટમ સાથે જોડાવામાં સમસ્યા આવી રહી છે. કૃપા કરીને તમારું ઇન્ટરનેટ તપાસો અથવા થોડીવાર પછી ફરી પ્રયાસ કરો.", 
        resErrTime: "સિસ્ટમ સામાન્ય કરતાં થોડો વધુ સમય લઈ રહી છે. કૃપા કરીને થોડી રાહ જુઓ અથવા ફરી પ્રયાસ કરો.",
        speechIntro: "{location} માટે તમારી કૃષિ સંકલ્પ ભલામણ અહીં છે. ",
        speechWeather: "હાલનું તાપમાન {temp} છે અને {rain} વરસાદ થઈ રહ્યો છે. ",
        speechCrops: "અમે નીચેના પાકોની ભલામણ કરીએ છીએ: ",
        speechCropDetail: "{name}. અપેક્ષિત ઉત્પાદન {yield} છે, અને વર્તમાન બજાર ભાવ {price} રૂપિયા પ્રતિ ક્વિન્ટલ છે. ",
        headDiagnosis: "AI રોગ નિદાન", subDiagnosis: "AI નો ઉપયોગ કરીને પાકના રોગોને તરત જ ઓળખો", btnUpload: "📸 ફોટો લો અથવા અપલોડ કરો",
        uploadHint: "પાંદડા અથવા દાંડીના સ્પષ્ટ ફોટા સાથે શ્રેષ્ઠ કામ કરે છે", analyzing: "AI તમારા પાકનું વિશ્લેષણ કરી રહ્યું છે...",
        headTreatment: "જૈવિક સારવાર યોજના:", healthy: "સ્વસ્થ", sick: "રોગ જણાયો", confidence: "ચોકસાઈ"
    },
    bn: { // Bengali
        title: "🌾 এআই কৃষি সহযোগী", subtitle: "স্মার্ট কৃষি ফসল সুপারিশ ব্যবস্থা", btn: "এআই সুপারিশ পান",
        farmDetails: "খামারের বিবরণ",
        labelLocation: "অবস্থান", labelSoil: "মাটির ধরন", labelSeason: "মৌসুম",
        labelWater: "পানির উৎস", labelFarmSize: "খামারের আকার (একর)", labelBudget: "বাজেট (₹)",
        phFarmSize: "খামারের আকার লিখুন", phBudget: "বাজেট লিখুন",
        soilPlaceholder: "মাটির ধরন নির্বাচন করুন",
        soil1:"পলি মাটি", soil2:"কালো মাটি (রেগুর)", soil3:"লাল ও হলুদ মাটি",
        soil4:"ল্যাটেরাইট মাটি", soil5:"মরুভূমি / শুষ্ক মাটি", soil6:"লবণাক্ত ও ক্ষারীয় মাটি",
        soil7:"পিট ও জলাভূমি মাটি", soil8:"পাহাড়ি ও বনজ মাটি",
        soil9:"বেলে মাটি (সাধারণ)", soil10:"এঁটেল মাটি (সাধারণ)", soil11:"দোআঁশ মাটি (সাধারণ)",
        seasonPlaceholder: "মৌসুম নির্বাচন করুন",
        groupAgri: "কৃষি মৌসুম (প্রধান)", groupRitu: "ঐতিহ্যবাহী ভারতীয় ঋতু", groupGeneral: "সাধারণ ঋতু",
        season1:"খরিফ (বর্ষাকাল)", season2:"রবি (শীতকাল)", season3:"জায়েদ (গ্রীষ্মকাল)",
        season4:"বসন্ত", season5:"গ্রীষ্ম", season6:"বর্ষা",
        season7:"শরৎ", season8:"হেমন্ত", season9:"শীত / শিশির",
        season10:"বসন্তকাল", season11:"গ্রীষ্মকাল", season12:"বর্ষাকাল", season13:"শরৎকাল", season14:"শীতকাল",
        waterPlaceholder: "পানির উৎস নির্বাচন করুন",
        water1:"বৃষ্টি নির্ভর (বর্ষা)", water2:"নলকূপ / বোরওয়েল", water3:"খাল সেচ",
        water4:"নদী / নালা", water5:"পুকুর / জলাশয় সেচ",
        water6:"ড্রিপ / স্প্রিংকলার পদ্ধতি", water7:"খোলা কূপ",
        btnListen: "🔊 শুনুন", btnPrint: "🖨️ প্রিন্ট",
        tabCrops:"ফসলের পরামর্শ", tabMarket:"বাজার দর", tabWeather:"আবহাওয়া পূর্বাভাস", tabYield: "স্যাটেলাইট ফলন 🛰️", tabCommunity: "কমিউনিটি 🤝", tabSchemes:"সরকারি প্রকল্প 🏛️",
        headCrops:"সুপারিশকৃত ফসল", headMarket:"বাজার বিশ্লেষণ", headWeather:"আবহাওয়ার তথ্য", headYield: "স্যাটেলাইট ফসল পর্যবেক্ষণ (NDVI)", headCommunity: "কৃষি সম্প্রদায়ের সফলতার গল্প", headSchemes:"যোগ্য সরকারি ভর্তুকি",
        loadingCommunity: "আঞ্চলিক সফলতার গল্প লোড হচ্ছে...", shareTitle: "কৃষি সংকল্প কি আপনাকে সাহায্য করেছে?", shareDesc: "আপনার জেলার অন্য কৃষকদের সাহায্য করতে আপনার গল্প শেয়ার করুন।", btnShare: "আমার সাফল্য শেয়ার করুন",
        yieldDesc: "আপনার খামারের স্থানাঙ্কের জন্য স্যাটেলাইট চিত্র বিশ্লেষণ করা হচ্ছে...",
        resYieldValue: "উদ্ভিজ্জ সূচক (NDVI)", resYieldStatus: "ফসলের স্বাস্থ্য অবস্থা",
        modalTitle:"অবস্থানের অনুমতি প্রয়োজন",
        modalBody:"এই ওয়েবসাইটটি ব্যবহার করার জন্য আপনাকে অনুমতি দিতে হবে। সঠিক কৃষি পরামর্শ প্রদানের জন্য আমাদের আপনার সঠিক অবস্থান প্রয়োজন।",
        btnTryAgain:"আবার চেষ্টা করুন", btnCancel:"বাতিল করুন",
        profile:"[প্রোফাইল]", logout:"[লগআউট]",
        resYield: "প্রত্যাশিত ফলন", resInvestment: "বিনিয়োগ", resPrice: "বর্তমান মূল্য",
        resQuintal: "কুইন্টাল", resKg: "কেজি", resTrend: "প্রবণতা", resStable: "স্থিতিশীল",
        resDemand: "চাহিদা", resHigh: "উচ্চ", resAlerts: "কৃষি সতর্কতা",
        resAlert1: "• মাটির আর্দ্রতার মাত্রা পর্যবেক্ষণ করুন", resAlert2: "• ঋতু পরিবর্তনের জন্য প্রস্তুত থাকুন", resAlert3: "• দক্ষ সেচ পদ্ধতির কথা বিবেচনা করুন",
        resEligibility: "যোগ্যতা", resLoc: "অবস্থান", resTemp: "তাপমাত্রা", resRain: "বৃষ্টিপাত", resHum: "আর্দ্রতা",
        resProcessing: "অনুরোধ প্রক্রিয়া করা হচ্ছে...", resAnalyzing: "আপনার খামারের ডেটা নিরাপদে বিশ্লেষণ করা হচ্ছে...",
        resErrComm: "দুঃখিত, আমাদের সিস্টেমের সাথে সংযোগ স্থাপনে সমস্যা হচ্ছে। অনুগ্রহ করে আপনার ইন্টারনেট পরীক্ষা করুন বা কিছুক্ষণ পরে আবার চেষ্টা করুন।", 
        resErrTime: "সিস্টেম স্বাভাবিকের চেয়ে কিছুটা বেশি সময় নিচ্ছে। অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন অথবা আবার চেষ্টা করুন।",
        speechIntro: "{location}-এর জন্য আপনার কৃষি সংকল্প সুপারিশ এখানে রয়েছে। ",
        speechWeather: "বর্তমান তাপমাত্রা {temp} এবং {rain} বৃষ্টিপাত হচ্ছে। ",
        speechCrops: "আমরা নিম্নলিখিত ফসলের সুপারিশ করছি: ",
        speechCropDetail: "{name}। প্রত্যাশিত ফলন {yield}, এবং বর্তমান বাজার মূল্য কুইন্টাল প্রতি {price} টাকা। ",
        headDiagnosis: "এআই রোগ নির্ণয়", subDiagnosis: "এআই ব্যবহার করে তাত্ক্ষণিকভাবে ফসলের রোগ সনাক্ত করুন", btnUpload: "📸 ছবি তুলুন বা আপলোড করুন",
        uploadHint: "পাতা বা কাণ্ডের স্পষ্ট ছবির সাথে সবচেয়ে ভালো কাজ করে", analyzing: "এআই আপনার ফসল বিশ্লেষণ করছে...",
        headTreatment: "জৈব প্রতিকার পরিকল্পনা:", healthy: "সুস্থ", sick: "রোগ সনাক্ত হয়েছে", confidence: "নির্ভুলতা"
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

    async function initSelects() {
        try {
            const locRes = await fetch('/locations.json');
            const locData = await locRes.json();
            window._rawLocationData = locData;
            tomInstances['location'] = new TomSelect("#location", { create: true, sortField: { field: "text", direction: "asc" }, plugins: ['clear_button'] });
            renderLocationDropdown(savedLang);
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
