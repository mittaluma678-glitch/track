import express from 'express';

const router = express.Router();

// Initial mock data derived from stitch subfolders
let mealsData = [
  { id: 1, type: 'Breakfast', name: 'Masala Oats with Boiled Egg & Chia', calories: 380, protein: 18, carbs: 45, fat: 12, time: '8:30 AM', status: 'Logged', icon: '🥣' },
  { id: 2, type: 'Lunch', name: 'Lentil Curry, Quinoa Bowl & Greens', calories: 540, protein: 24, carbs: 68, fat: 14, time: '1:15 PM', status: 'Logged', icon: '🥗' },
  { id: 3, type: 'Snack', name: 'Roasted Chickpeas & Green Tea', calories: 160, protein: 7, carbs: 22, fat: 4, time: '4:00 PM', status: 'Logged', icon: '🍵' },
  { id: 4, type: 'Planned Dinner', name: 'Paneer / Tofu Tikka Wrap with Mint Yoghurt', calories: 480, protein: 22, carbs: 52, fat: 16, time: '7:30 PM', status: 'Pending', icon: '🌯' },
];

// GET /api/meals
router.get('/', (req, res) => {
  res.json({ success: true, meals: mealsData });
});

// POST /api/meals
router.post('/', (req, res) => {
  const { type, name, calories, protein, carbs, fat, time, icon } = req.body;
  const newMeal = {
    id: Date.now(),
    type: type || 'Quick Snack',
    name: name || 'Handful of Almonds & Apple',
    calories: calories || 190,
    protein: protein || 5,
    carbs: carbs || 24,
    fat: fat || 9,
    time: time || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    status: 'Logged',
    icon: icon || '🍎',
  };
  mealsData.unshift(newMeal);
  res.status(201).json({ success: true, meal: newMeal });
});

// PATCH /api/meals/:id
router.patch('/:id', (req, res) => {
  const mealId = Number(req.params.id);
  const { status } = req.body;
  mealsData = mealsData.map(m => m.id === mealId ? { ...m, status: status || 'Logged' } : m);
  res.json({ success: true, meals: mealsData });
});

export default router;
