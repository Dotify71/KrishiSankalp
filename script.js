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

    document.getElementById('results').style.display = 'block';
    document.getElementById('cropsList').innerHTML = '<div class="loading">🤖 AI is analyzing your farm data...</div>';

    try {
        const response = await fetch('/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        displayResults(data);
    } catch (error) {
        document.getElementById('cropsList').innerHTML = '<div class="loading">❌ Error getting recommendations</div>';
    }
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
                    ✓ Current Price: ₹${crop.price}/quintal
                </div>
            </div>
        `;
    });
    document.getElementById('cropsList').innerHTML = cropsHtml;
    let marketHtml = '';
    data.crops.forEach(crop => {
        marketHtml += `
            <div class="crop-item">
                <div class="crop-name">📈 ${crop.name}</div>
                <div class="crop-details">
                    Current Rate: ₹${crop.price}/quintal<br>
                    Trend: Stable ↗️<br>
                    Demand: High
                </div>
            </div>
        `;
    });
    document.getElementById('marketInfo').innerHTML = marketHtml;

    document.getElementById('weatherInfo').innerHTML = `
        <div class="weather-info">
            <h4>📍 ${data.weather.location}</h4>
            <p>🌡️ Temperature: ${data.weather.temp}</p>
            <p>🌧️ Rainfall: ${data.weather.rainfall}</p>
            <p>💨 Humidity: ${data.weather.humidity}</p>
        </div>
        <div class="crop-item">
            <div class="crop-name">⚠️ Farming Alerts</div>
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