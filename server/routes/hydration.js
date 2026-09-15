import express from 'express';

const router = express.Router();

let hydrationState = {
  currentMl: 1900,
  targetMl: 2500,
  history: [
    { day: 'Mon', ml: 2500 },
    { day: 'Tue', ml: 2200 },
    { day: 'Wed', ml: 1800 },
    { day: 'Thu', ml: 2500 },
    { day: 'Fri', ml: 2400 },
    { day: 'Sat', ml: 1900 },
    { day: 'Sun', ml: 1900 },
  ],
};

// GET /api/hydration
router.get('/', (req, res) => {
  res.json({ success: true, ...hydrationState });
});

// POST /api/hydration/log
router.post('/log', (req, res) => {
  const { amountMl } = req.body;
  if (amountMl) {
    hydrationState.currentMl = Math.min(hydrationState.targetMl, hydrationState.currentMl + Number(amountMl));
  }
  res.json({ success: true, currentMl: hydrationState.currentMl, targetMl: hydrationState.targetMl });
});

export default router;
