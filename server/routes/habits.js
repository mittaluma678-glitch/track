import express from 'express';

const router = express.Router();

let habitsData = [
  { id: 1, title: '🏃 Campus Movement', desc: '25 min Campus Walk / Gym', completed: true },
  { id: 2, title: '💤 Sleep Duration', desc: '7.5 hrs logged (Good recovery)', completed: true },
  { id: 3, title: '🥦 Fruits & Greens Intake', desc: '3 portions eaten today', completed: true },
  { id: 4, title: '📵 Screen-time Awareness', desc: '30m screen-free before bed', completed: false },
  { id: 5, title: '⚡ Energy & Mood Check-in', desc: 'Feeling Focused & Energized 😊', completed: true },
];

// GET /api/habits
router.get('/', (req, res) => {
  res.json({ success: true, habits: habitsData });
});

// POST /api/habits/toggle
router.post('/toggle', (req, res) => {
  const { id } = req.body;
  habitsData = habitsData.map(h => h.id === Number(id) ? { ...h, completed: !h.completed } : h);
  res.json({ success: true, habits: habitsData });
});

export default router;
