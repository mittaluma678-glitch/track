import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Drawer from './components/Drawer.jsx';
import Navbar from './components/Navbar.jsx';

import HomeView from './views/HomeView.jsx';
import DailyTrackerView from './views/DailyTrackerView.jsx';
import BalancedPlateView from './views/BalancedPlateView.jsx';
import StudentCornerView from './views/StudentCornerView.jsx';
import QuizView from './views/QuizView.jsx';
import MythVsFactView from './views/MythVsFactView.jsx';
import NutritionLibraryView from './views/NutritionLibraryView.jsx';
import AchievementsView from './views/AchievementsView.jsx';
import SettingsView from './views/SettingsView.jsx';

export default function App() {
  const [activePath, setActivePath] = useState('home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [snackToastVisible, setSnackToastVisible] = useState(false);

  // App-wide state
  const [hydrationMl, setHydrationMl] = useState(1900);
  const [xp, setXp] = useState(450);

  const [meals, setMeals] = useState([
    { id: 1, type: 'Breakfast', name: 'Masala Oats with Boiled Egg & Chia', calories: 380, protein: 18, carbs: 45, fat: 12, time: '8:30 AM', status: 'Logged', icon: '🥣' },
    { id: 2, type: 'Lunch', name: 'Lentil Curry, Quinoa Bowl & Greens', calories: 540, protein: 24, carbs: 68, fat: 14, time: '1:15 PM', status: 'Logged', icon: '🥗' },
    { id: 3, type: 'Snack', name: 'Roasted Chickpeas & Green Tea', calories: 160, protein: 7, carbs: 22, fat: 4, time: '4:00 PM', status: 'Logged', icon: '🍵' },
    { id: 4, type: 'Planned Dinner', name: 'Paneer / Tofu Tikka Wrap with Mint Yoghurt', calories: 480, protein: 22, carbs: 52, fat: 16, time: '7:30 PM', status: 'Pending', icon: '🌯' },
  ]);

  const [habits, setHabits] = useState([
    { id: 1, title: '🏃 Campus Movement', desc: '25 min Campus Walk / Gym', completed: true },
    { id: 2, title: '💤 Sleep Duration', desc: '7.5 hrs logged (Good recovery)', completed: true },
    { id: 3, title: '🥦 Fruits & Greens Intake', desc: '3 portions eaten today', completed: true },
    { id: 4, title: '📵 Screen-time Awareness', desc: '30m screen-free before bed', completed: false },
    { id: 5, title: '⚡ Energy & Mood Check-in', desc: 'Feeling Focused & Energized 😊', completed: true },
  ]);

  const handleLogQuickSnack = () => {
    const newSnack = {
      id: Date.now(),
      type: 'Quick Snack',
      name: 'Handful of Almonds & Apple',
      calories: 190,
      protein: 5,
      carbs: 24,
      fat: 9,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Logged',
      icon: '🍎',
    };
    setMeals(prev => [newSnack, ...prev]);
    setSnackToastVisible(true);
    setTimeout(() => {
      setSnackToastVisible(false);
    }, 4000);
  };

  const handleEarnXp = (amount) => {
    setXp(prev => prev + amount);
  };

  const renderActiveView = () => {
    switch (activePath) {
      case 'home':
        return (
          <HomeView
            setActivePath={setActivePath}
            meals={meals}
            onLogQuickSnack={handleLogQuickSnack}
            snackToastVisible={snackToastVisible}
            setSnackToastVisible={setSnackToastVisible}
          />
        );
      case 'tracker':
        return (
          <DailyTrackerView
            hydrationMl={hydrationMl}
            setHydrationMl={setHydrationMl}
            habits={habits}
            setHabits={setHabits}
            meals={meals}
            setMeals={setMeals}
          />
        );
      case 'plate':
        return <BalancedPlateView />;
      case 'student':
        return <StudentCornerView setActivePath={setActivePath} />;
      case 'quiz':
        return <QuizView onEarnXp={handleEarnXp} />;
      case 'myth-vs-fact':
        return <MythVsFactView />;
      case 'nutrition-library':
        return <NutritionLibraryView />;
      case 'achievements':
        return <AchievementsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return (
          <HomeView
            setActivePath={setActivePath}
            meals={meals}
            onLogQuickSnack={handleLogQuickSnack}
            snackToastVisible={snackToastVisible}
            setSnackToastVisible={setSnackToastVisible}
          />
        );
    }
  };

  return (
    <div className="bg-surface font-sans text-on-surface flex flex-col min-h-screen relative">
      <Header
        onOpenDrawer={() => setDrawerOpen(true)}
        activePath={activePath}
        setActivePath={setActivePath}
      />

      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activePath={activePath}
        setActivePath={setActivePath}
      />

      <main className="flex-1 w-full bg-surface pt-20 pb-24 px-space-margin">
        {renderActiveView()}
      </main>

      <Navbar activePath={activePath} setActivePath={setActivePath} />
    </div>
  );
}
