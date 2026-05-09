const translations = {
    en: {
        title: "🌾 AI KrishiSahyogi",
        subtitle: "Smart Farming Crop Recommendation System",
        btn: "Get AI Recommendation"
    },
    hi: {
        title: "🌾 एआई कृषि सहयोगी",
        subtitle: "स्मार्ट खेती फसल सिफारिश प्रणाली",
        btn: "एआई सिफारिश प्राप्त करें"
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    // Location services are temporarily disabled as requested
    // requestLocation();
    
    const savedData = localStorage.getItem('krishiFarmData');
    if (savedData) {
        const data = JSON.parse(savedData);
        ['location', 'soil', 'season', 'water', 'farmSize', 'budget'].forEach(id => {
            if (data[id] && document.getElementById(id)) {
                
                // For location dropdown, add option if missing (from geolocator)
                if (id === 'location') {
                    let select = document.getElementById('location');
                    if (!Array.from(select.options).some(opt => opt.value === data[id])) {
                        select.add(new Option(data[id], data[id]));
                    }
                }
                document.getElementById(id).value = data[id];
            }
        });
    }

    document.getElementById('langToggle')?.addEventListener('change', (e) => {
        const lang = e.target.value;
        document.getElementById('titleText').innerText = translations[lang].title;
        document.getElementById('subtitleText').innerText = translations[lang].subtitle;
        document.querySelector('.btn[type="submit"]').innerText = translations[lang].btn;
    });
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
    const originalBtnText = submitBtn.innerText;
    submitBtn.disabled = true;
    submitBtn.innerText = "Processing Request...";

    localStorage.setItem('krishiFarmData', JSON.stringify(formData));

    document.getElementById('results').style.display = 'block';
    document.getElementById('cropsList').innerHTML = '<div class="loading"><div class="spinner"></div><p>Analyzing your farm data securely...</p></div>';

    // Call the real Python Backend API with a timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
        const response = await fetch('http://127.0.0.1:8000/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);

        if (!response.ok) throw new Error('API Error');
        
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        let errorMsg = 'Error communicating with the server. Is the Python API running?';
        if (error.name === 'AbortError') {
            errorMsg = 'Request timed out. The server took too long to respond.';
        }
        document.getElementById('cropsList').innerHTML = `<div class="loading" style="color: red;">${errorMsg}</div>`;
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;
    }
});

function requestLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            document.getElementById('locationModal').style.display = 'none';
            try {
                const { latitude, longitude } = position.coords;
                const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
                const data = await res.json();
                const state = data.address.state || data.address.region || data.address.state_district;
                
                if (state) {
                    let currentOpt = document.getElementById('currentLocationOption');
                    if (currentOpt) {
                        currentOpt.value = state;
                        currentOpt.text = `Current Location (${state})`;
                    } else {
                        let select = document.getElementById('location');
                        let optionExists = Array.from(select.options).some(opt => opt.value === state);
                        if (!optionExists) {
                            select.add(new Option(state, state));
                        }
                    }
                    document.getElementById('location').value = state;
                }
            } catch (err) {
                console.error("Network Error during geocoding");
            }
        }, () => {
            // Permission denied
            document.getElementById('locationModal').style.display = 'flex';
        });
    } else {
        alert("Geolocation is not supported by your browser");
    }
}

document.getElementById('btnTryAgain')?.addEventListener('click', () => {
    document.getElementById('locationModal').style.display = 'none';
    requestLocation();
});

document.getElementById('btnCancel')?.addEventListener('click', () => {
    document.body.innerHTML = '<div style="display:flex; justify-content:center; align-items:center; height:100vh; background:#f4f6f9; color:#002244; font-family:sans-serif; text-align:center; padding:20px;"><div><h1 style="margin-bottom:10px;">Access Denied</h1><p>Location permission is strictly required to use this application.</p></div></div>';
});

function displayResults(data) {
    let cropsHtml = '';
    data.crops.forEach((crop, index) => {
        cropsHtml += `
            <div class="crop-item">
                <div class="crop-name">${index + 1}. ${crop.name}</div>
                <div class="crop-details">
                    ✓ Expected Yield: ${crop.yield}<br>
                    ✓ Investment: ${crop.investment}<br>
                    ✓ Current Price: ₹${crop.price}/quintal (₹${crop.price_kg}/kg)
                </div>
            </div>
        `;
    });
    document.getElementById('cropsList').innerHTML = cropsHtml;
    let marketHtml = '';
    data.crops.forEach(crop => {
        marketHtml += `
            <div class="crop-item">
                <div class="crop-name">${crop.name}</div>
                <div class="crop-details">
                    Current Rate: ₹${crop.price}/quintal (₹${crop.price_kg}/kg)<br>
                    Trend: ${crop.trend || 'Stable'}<br>
                    Demand: High
                </div>
            </div>
        `;
    });
    document.getElementById('marketInfo').innerHTML = marketHtml;

    document.getElementById('weatherInfo').innerHTML = `
        <div class="weather-info">
            <h4>Location: ${data.weather.location}</h4>
            <p>Temperature: ${data.weather.temp}</p>
            <p>Rainfall: ${data.weather.rainfall}</p>
            <p>Humidity: ${data.weather.humidity}</p>
        </div>
        <div class="crop-item">
            <div class="crop-name">Farming Alerts</div>
            <div class="crop-details">
                • Monitor soil moisture levels<br>
                • Prepare for seasonal changes<br>
                • Consider efficient irrigation methods
            </div>
        </div>
    `;
}

function showTab(event, tabName) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    if (event) {
        event.target.classList.add('active');
    }
    document.getElementById(tabName).classList.add('active');
}