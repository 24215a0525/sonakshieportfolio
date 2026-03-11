const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/projects', require('./routes/projects'));
app.use('/api/contact', require('./routes/contact'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio API is running' });
});

// Connect to MongoDB and start server
mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('✅ MongoDB connected');
    // Seed default projects if none exist
    const Project = require('./models/Project');
    const count = await Project.countDocuments();
    if (count === 0) {
      await seedProjects();
    }
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    console.log('💡 Starting server without DB (projects will be empty)');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  });

async function seedProjects() {
  const Project = require('./models/Project');
  const projects = [
    {
      title: 'Hostel Finding and Booking System',
      description: 'A comprehensive platform for students to discover, compare, and book hostel accommodations. Features real-time availability, location-based search, reviews, and secure payment integration.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Google Maps API'],
      githubLink: 'https://github.com/sonakshi/hostel-booking',
      liveLink: 'https://hostel-booking-demo.vercel.app',
      image: '/uploads/hostel.jpg'
    },
    {
      title: 'Smart Sound AI Music Recommendation',
      description: 'An intelligent music recommendation engine powered by machine learning that analyses listening patterns, mood, and preferences to curate personalised playlists in real time.',
      techStack: ['Python', 'Flask', 'React', 'TensorFlow', 'Spotify API'],
      githubLink: 'https://github.com/sonakshi/smart-sound',
      liveLink: 'https://smart-sound-demo.netlify.app',
      image: '/uploads/music.jpg'
    },
    {
      title: 'Digital FIR System',
      description: 'A digital platform to modernise the FIR filing process, enabling citizens to lodge complaints online, track case status, and receive notifications — reducing paperwork and improving transparency.',
      techStack: ['React', 'Node.js', 'MongoDB', 'JWT', 'Nodemailer'],
      githubLink: 'https://github.com/sonakshi/digital-fir',
      liveLink: 'https://digital-fir-demo.vercel.app',
      image: '/uploads/fir.jpg'
    }
  ];
  await Project.insertMany(projects);
  console.log('🌱 Projects seeded successfully');
}
