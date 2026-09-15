import React from 'react';

export default function Navbar({ activePath, setActivePath }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'tracker', label: 'Tracker', icon: 'bar_chart' },
    { id: 'plate', label: 'Plate', icon: 'restaurant' },
    { id: 'nutrition-library', label: 'Nutrition', icon: 'nutrition' },
    { id: 'student', label: 'Student', icon: 'school' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.4)] border-t border-surface-container-high/40">
      <div className="flex items-center justify-around h-16 px-space-xs max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = activePath === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActivePath(tab.id)}
              className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-all ${
                isActive
                  ? 'text-primary font-bold scale-105'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
              type="button"
            >
              <span className={`material-symbols-outlined text-[24px] ${isActive ? 'text-primary' : ''}`}>
                {tab.icon}
              </span>
              <span className="font-label-sm text-label-sm leading-tight mt-0.5">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
