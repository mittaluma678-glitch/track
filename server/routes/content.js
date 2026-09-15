import express from 'express';

const router = express.Router();

const contentData = {
  budgetMeals: [
    { id: 1, title: 'Peanut Butter Banana Oats', badge: 'Kettle / Microwave', price: '~$1.20 / ₹90', time: '5m Prep', protein: '18g Protein', tag: 'Hostel Kettle' },
    { id: 2, title: 'Sprouted Moong Chaat', badge: 'Zero Cooking', price: '~$0.80 / ₹60', time: '8m Prep', protein: '15g Protein', tag: 'No-Cook' },
    { id: 3, title: 'Veggie Paneer/Egg Scramble', badge: 'Induction Friendly', price: '~$1.50 / ₹110', time: '10m Prep', protein: '22g Protein', tag: '15-Min Prep' },
  ],
  myths: [
    { id: 1, myth: "Skipping breakfast helps students lose weight faster.", fact: "Skipping breakfast lowers morning blood sugar, causing severe over-eating by lunch.", category: "Metabolism" },
    { id: 2, myth: "Drinking coffee replaces hydration needs during study sessions.", fact: "Caffeine is a diuretic; plain water maintains brain cognitive speed.", category: "Hydration" },
  ],
  quiz: {
    title: "Daily Nutrition Challenge (+50 XP)",
    text: "Which macronutrient combination provides stable focus during a 3-hour exam without sugar crashes?",
    options: [
      { id: 'A', text: "Instant sugary energy drinks & chocolate", correct: false },
      { id: 'B', text: "Complex carbs + healthy fats + protein (e.g., almonds + whole grains)", correct: true },
      { id: 'C', text: "Pure black coffee with 4 spoons of sugar", correct: false },
      { id: 'D', text: "Skipping eating completely", correct: false },
    ],
  },
};

// GET /api/content/all
router.get('/all', (req, res) => {
  res.json({ success: true, ...contentData });
});

export default router;
