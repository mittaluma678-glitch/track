import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import mealsRouter from './routes/meals.js';
import hydrationRouter from './routes/hydration.js';
import habitsRouter from './routes/habits.js';
import contentRouter from './routes/content.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

// MongoDB Database Connection
if (MONGODB_URI) {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log('🍃 Successfully connected to MongoDB Atlas Database!');
    })
    .catch((err) => {
      console.error('⚠️ MongoDB connection error:', err.message);
    });
}

// API Routes
app.use('/api/meals', mealsRouter);
app.use('/api/hydration', hydrationRouter);
app.use('/api/habits', habitsRouter);
app.use('/api/content', contentRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'NutriTrack Express Backend',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date(),
  });
});

app.listen(PORT, () => {
  console.log(`🚀 NutriTrack Node.js Backend running on http://localhost:${PORT}`);
});
