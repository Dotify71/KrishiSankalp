# A simple backend dictionary mapping for dynamic API responses

TRANSLATIONS = {
    "hi": {
        "Healthy": "स्वस्थ",
        "Disease Detected": "बीमारी पाई गई",
        "Contact local KVK for treatment.": "उपचार के लिए स्थानीय केवीके (KVK) से संपर्क करें।",
        "Moderate": "मध्यम",
        "High": "उच्च",
        "Low": "कम",
        "Clear skies with moderate humidity": "मध्यम आर्द्रता के साथ साफ आसमान",
        "Use drip irrigation for higher yield.": "अधिक पैदावार के लिए ड्रिप सिंचाई का उपयोग करें।",
        "No plant detected. Please upload a clear photo of a crop leaf or stem.": "कोई पौधा नहीं मिला। कृपया फसल के पत्ते या तने की स्पष्ट तस्वीर अपलोड करें।",
        "AI could not process this image clearly. Please try a closer photo.": "एआई इस छवि को स्पष्ट रूप से प्रोसेस नहीं कर सका। कृपया करीब से फोटो लें।",
        "Tomato Early Blight": "टमाटर अगेती झुलसा",
        "Late Blight": "पछेती झुलसा",
        "Requires well-drained soil": "अच्छी जल निकासी वाली मिट्टी की आवश्यकता है",
    },
    "pa": {
        "Healthy": "ਸਿਹਤਮੰਦ",
        "Disease Detected": "ਬਿਮਾਰੀ ਦਾ ਪਤਾ ਲੱਗਿਆ",
        "Contact local KVK for treatment.": "ਇਲਾਜ ਲਈ ਸਥਾਨਕ ਕੇਵੀਕੇ (KVK) ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",
        "Moderate": "ਦਰਮਿਆਨਾ",
        "High": "ਉੱਚ",
        "Low": "ਘੱਟ",
        "Clear skies with moderate humidity": "ਦਰਮਿਆਨੀ ਨਮੀ ਦੇ ਨਾਲ ਸਾਫ਼ ਅਸਮਾਨ",
        "Use drip irrigation for higher yield.": "ਵੱਧ ਝਾੜ ਲਈ ਤੁਪਕਾ ਸਿੰਚਾਈ ਦੀ ਵਰਤੋਂ ਕਰੋ।",
        "No plant detected. Please upload a clear photo of a crop leaf or stem.": "ਕੋਈ ਪੌਦਾ ਨਹੀਂ ਮਿਲਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਫਸਲ ਦੇ ਪੱਤੇ ਜਾਂ ਤਣੇ ਦੀ ਸਾਫ ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ।",
        "AI could not process this image clearly. Please try a closer photo.": "ਏਆਈ ਇਸ ਚਿੱਤਰ ਨੂੰ ਸਪਸ਼ਟ ਤੌਰ ਤੇ ਪ੍ਰੋਸੈਸ ਨਹੀਂ ਕਰ ਸਕਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਨੇੜਿਓਂ ਫੋਟੋ ਲਓ।",
        "Tomato Early Blight": "ਟਮਾਟਰ ਅਰਲੀ ਬਲਾਈਟ",
        "Late Blight": "ਲੇਟ ਬਲਾਈਟ",
        "Requires well-drained soil": "ਚੰਗੀ ਨਿਕਾਸੀ ਵਾਲੀ ਮਿੱਟੀ ਦੀ ਲੋੜ ਹੈ",
    },
    "mr": {
        "Healthy": "निरोगी",
        "Disease Detected": "रोग आढळला",
        "Contact local KVK for treatment.": "उपचारासाठी स्थानिक केव्हीकेशी संपर्क साधा.",
        "Moderate": "मध्यम",
        "High": "उच्च",
        "Low": "कमी",
        "Clear skies with moderate humidity": "मध्यम आर्द्रतेसह निरभ्र आकाश",
        "Use drip irrigation for higher yield.": "अधिक उत्पादनासाठी ठिबक सिंचनाचा वापर करा.",
        "No plant detected. Please upload a clear photo of a crop leaf or stem.": "कोणतीही वनस्पती आढळली नाही. कृपया पिकाच्या पानाचा किंवा खोडाचा स्पष्ट फोटो अपलोड करा.",
        "AI could not process this image clearly. Please try a closer photo.": "एआय या प्रतिमेवर स्पष्टपणे प्रक्रिया करू शकले नाही. कृपया जवळून फोटो घ्या.",
        "Tomato Early Blight": "टोमॅटोचा लवकर येणारा करपा",
        "Late Blight": "उशिरा येणारा करपा",
        "Requires well-drained soil": "चांगला निचरा होणारी माती आवश्यक आहे",
    },
    "gu": {
        "Healthy": "સ્વસ્થ",
        "Disease Detected": "રોગ જણાયો",
        "Contact local KVK for treatment.": "સારવાર માટે સ્થાનિક કેવીકે (KVK) નો સંપર્ક કરો.",
        "Moderate": "મધ્યમ",
        "High": "ઉચ્ચ",
        "Low": "ઓછું",
        "Clear skies with moderate humidity": "મધ્યમ ભેજ સાથે સ્વચ્છ આકાશ",
        "Use drip irrigation for higher yield.": "વધુ ઉપજ માટે ટપક સિંચાઈ પદ્ધતિનો ઉપયોગ કરો.",
        "No plant detected. Please upload a clear photo of a crop leaf or stem.": "કોઈ છોડ મળ્યો નથી. કૃપા કરીને પાકના પાંદડા અથવા દાંડીનો સ્પષ્ટ ફોટો અપલોડ કરો.",
        "AI could not process this image clearly. Please try a closer photo.": "AI આ ફોટોને સ્પષ્ટ રીતે પ્રોસેસ કરી શક્યું નથી. કૃપા કરીને નજીકથી ફોટો લો.",
        "Tomato Early Blight": "ટામેટાનો આગોતરો સુકારો",
        "Late Blight": "પાછોતરો સુકારો",
        "Requires well-drained soil": "સારી નિતારવાળી જમીનની જરૂર છે",
    },
    "bn": {
        "Healthy": "সুস্থ",
        "Disease Detected": "রোগ শনাক্ত হয়েছে",
        "Contact local KVK for treatment.": "চিকিৎসার জন্য স্থানীয় কেভিকে (KVK)-এর সাথে যোগাযোগ করুন।",
        "Moderate": "মাঝারি",
        "High": "উচ্চ",
        "Low": "কম",
        "Clear skies with moderate humidity": "মাঝারি আর্দ্রতার সাথে পরিষ্কার আকাশ",
        "Use drip irrigation for higher yield.": "অধিক ফলনের জন্য ড্রিপ সেচ ব্যবহার করুন।",
        "No plant detected. Please upload a clear photo of a crop leaf or stem.": "কোনো গাছ সনাক্ত করা যায়নি। অনুগ্রহ করে ফসলের পাতা বা কাণ্ডের একটি পরিষ্কার ছবি আপলোড করুন।",
        "AI could not process this image clearly. Please try a closer photo.": "এআই এই ছবিটি স্পষ্টভাবে বিশ্লেষণ করতে পারেনি। অনুগ্রহ করে কাছ থেকে ছবি তুলুন।",
        "Tomato Early Blight": "টমেটোর আগাম ধসা",
        "Late Blight": "নাবী ধসা",
        "Requires well-drained soil": "উত্তম নিষ্কাশনযুক্ত মাটির প্রয়োজন",
    }
}

def translate_text(text: str, lang: str) -> str:
    if not isinstance(text, str):
        return text
    if lang not in TRANSLATIONS:
        return text
    # Direct match
    if text in TRANSLATIONS[lang]:
        return TRANSLATIONS[lang][text]
    # Simple replacement for common phrases
    translated = text
    for k, v in TRANSLATIONS[lang].items():
        if k in translated:
            translated = translated.replace(k, v)
    return translated

def translate_dict(data, lang: str):
    if lang == "en" or not lang:
        return data
    if isinstance(data, dict):
        return {k: translate_dict(v, lang) for k, v in data.items()}
    elif isinstance(data, list):
        return [translate_dict(i, lang) for i in data]
    elif isinstance(data, str):
        return translate_text(data, lang)
    else:
        return data
