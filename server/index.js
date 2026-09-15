import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import mealsRouter from './routes/meals.js';
import hydrationRouter from './routes/hydration.js';
import habitsRouter from './routes/habits.js';
import contentRouter from './routes/content.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/meals', mealsRouter);
app.use('/api/hydration', hydrationRouter);
app.use('/api/habits', habitsRouter);
app.use('/api/content', contentRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'NutriTrack Express Backend', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`🚀 NutriTrack Node.js Backend running on http://localhost:${PORT}`);
});
