# 🚀 Sonakshi — Full Stack Developer Portfolio

A modern dark-themed portfolio with purple/pink gradient accents, smooth animations, and a full Node.js/MongoDB backend.

---

## 📁 Folder Structure

```
portfolio/
├── backend/
│   ├── models/
│   │   ├── Project.js
│   │   └── Message.js
│   ├── routes/
│   │   ├── projects.js
│   │   └── messages.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── LoadingScreen.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── Skills.jsx
    │   │   ├── Projects.jsx
    │   │   ├── Education.jsx
    │   │   ├── Achievements.jsx
    │   │   ├── Contact.jsx
    │   │   └── Footer.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

---

## 🖥️ Running Locally in VS Code

### Prerequisites
- Node.js v18+ installed
- MongoDB installed locally OR MongoDB Atlas account
- VS Code with the integrated terminal

---

### Step 1 — Clone / Open the project

Open the `portfolio` folder in VS Code.

---

### Step 2 — Start the Backend

Open a **new terminal** in VS Code (`Ctrl + `` ` ``):

```bash
cd backend
npm install
```

Edit the `.env` file if needed:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
```

> For MongoDB Atlas, replace MONGO_URI with your connection string:
> `mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/portfolio`

Start the backend:
```bash
npm run dev
```

You should see:
```
✅ MongoDB connected
✅ Default projects seeded
🚀 Server running on http://localhost:5000
```

---

### Step 3 — Start the Frontend

Open a **second terminal** in VS Code:

```bash
cd frontend
npm install
npm run dev
```

Open your browser at: **http://localhost:5173**

---

## 🔌 Backend API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Fetch all projects |
| POST | `/api/projects` | Add a new project |
| DELETE | `/api/projects/:id` | Delete a project |
| POST | `/api/messages` | Send a contact message |

### Example: Add a project via curl
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My App",
    "description": "A cool app",
    "techStack": ["React", "Node.js"],
    "githubLink": "https://github.com/me/myapp"
  }'
```

---

## 🌐 Deployment Guide

### Frontend — Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Set **root directory** to `frontend`
4. Vercel auto-detects Vite — click **Deploy**
5. Add environment variable if needed: `VITE_API_URL=https://your-backend.railway.app`

Update `vite.config.js` proxy target to your production backend URL.

### Backend — Railway (Recommended)

1. Go to [railway.app](https://railway.app)
2. Create a new project → Deploy from GitHub → select the `backend` folder
3. Add environment variable: `MONGO_URI=<your-atlas-uri>`
4. Railway will auto-assign a public URL

### Backend — Render

1. Go to [render.com](https://render.com)
2. Create a **Web Service** from your GitHub repo
3. Set **Root Directory** to `backend`
4. Start command: `npm start`
5. Add env var `MONGO_URI`

### MongoDB Atlas (for production DB)

1. Create free cluster at [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a database user
3. Whitelist `0.0.0.0/0` in Network Access
4. Copy connection string and use as `MONGO_URI`

---

## ✨ Features

- **Animated loading screen** with progress bar
- **Typing text animation** in Hero section
- **Custom SVG female developer avatar** with floating tech icons
- **Animated skill cards** with hover glow effects
- **Dynamic projects** fetched from MongoDB API
- **Project detail modal** with tech stack tags
- **Vertical timeline** for education
- **Achievement cards** with gradient accents
- **Contact form** that saves to MongoDB
- **Smooth scroll** navigation
- **Fully responsive** mobile design
- **Dark theme** with purple/pink gradients
