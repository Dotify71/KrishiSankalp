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
