const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://arinya-shree-store.vercel.app", 
    "https://your-site.vercel.app" // Placeholder for their actual vercel domain
  ],
  credentials: true
})); // Allows your React app to talk to this server
app.use(express.json()); // Allows server to read JSON data

// API Routes
app.use('/api/products', productRoutes);

// Basic Health Check
app.get('/', (req, res) => {
  res.send('Arinya Shree API is running beautifully...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Atelier Server active on port ${PORT}`));
