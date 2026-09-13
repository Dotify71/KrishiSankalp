# 🌱 KrishiSankalp

> **A Smart Farming Assistant & Crop Recommendation System** designed to empower farmers with AI-driven insights, live weather updates, market prices, and plant health diagnostics.

🌐 **Live Demo:** [https://krishisankalp.onrender.com/](https://krishisankalp.onrender.com/)

---

## 📖 Table of Contents
- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Getting Started (Local Development)](#getting-started-local-development)
- [Deployment](#deployment)

---

## 🚜 About the Project

**KrishiSankalp** has evolved into a fully-fledged full-stack web application designed to be a comprehensive digital companion for farmers. By analyzing inputs like location, soil type, and season, it provides personalized crop recommendations. It also integrates multiple external APIs to offer real-time weather forecasts, market prices, and advanced plant diagnostics (like disease identification).

The application is built as a **Progressive Web App (PWA)**, allowing users to install it on their devices for a native-app-like experience.

---

## ✨ Key Features

- **Personalized Crop Suggestions:** AI-based recommendations tailored to specific farm conditions.
- **Plant Diagnostics:** Identify plant health and diseases using advanced API integrations (Kindwise / Trefle).
- **Live Weather & Market Data:** Real-time access to weather conditions and government agricultural data.
- **User Authentication:** Secure login (`login.html`) and personalized user profiles (`profile.html`).
- **Progressive Web App (PWA):** Installable on mobile devices with offline caching capabilities (`service-worker.js`).
- **Responsive & Modern UI:** Beautifully crafted interface using vanilla HTML/CSS/JS.

---

## 🛠️ Technologies Used

### Backend
- **Python 3**
- **FastAPI:** High-performance web framework for the backend API.
- **Uvicorn:** ASGI web server.
- **Pydantic & SQLAlchemy:** For data validation and database ORM.

### Frontend
- **HTML5 & CSS3**
- **Vanilla JavaScript** (with Service Workers for PWA)

### DevOps & Hosting
- **Render:** Automated deployment configured via `render.yaml`.

---

## 📂 Project Structure

```text
KrishiSankalp/
├── main.py                # FastAPI backend application & API routes
├── krishi_data.json       # Local database/mock data for crops
├── requirements.txt       # Python dependencies
├── render.yaml            # Render deployment configuration
├── .env.example           # Example environment variables
└── static/                # Frontend assets
    ├── index.html         # Main dashboard
    ├── login.html         # User authentication
    ├── profile.html       # User profile management
    ├── style.css          # Global stylesheet
    ├── script.js          # Core frontend logic
    ├── manifest.json      # PWA manifest
    └── service-worker.js  # PWA service worker for caching
```

---

## 🔐 Environment Variables

To run the application locally with all features (like plant ID and weather), you need to set up the following environment variables (create a `.env` file based on `.env.example`):

- `WEATHER_API_KEY`
- `KINDWISE_TOKEN`
- `AGRO_API_KEY`
- `GOVT_DATA_API_KEY`
- `TREFLE_TOKEN`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`

---

## 🚀 Getting Started (Local Development)

Follow these steps to run KrishiSankalp on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pranavchoudhary-tech/KrishiSankalp-1.git
   cd KrishiSankalp
   ```

2. **Create a virtual environment (recommended):**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install the dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up your environment variables:**
   Copy `.env.example` to `.env` and fill in your API keys.

5. **Run the FastAPI server:**
   ```bash
   uvicorn main:app --reload
   ```

6. **Open the application:**
   Visit `http://localhost:8000` in your web browser.

---

## ☁️ Deployment

This project is configured for seamless deployment on **Render**. The `render.yaml` file defines the Web Service configuration, automatically installing dependencies and running the `uvicorn` server.

---

&copy; 2026 AI KrishiSahyogi. All rights reserved.
