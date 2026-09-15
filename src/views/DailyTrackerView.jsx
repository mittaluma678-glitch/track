import React, { useState } from 'react';

export default function DailyTrackerView({ hydrationMl, setHydrationMl, habits, setHabits, meals, setMeals }) {
  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const dates = ["Today, Oct 24", "Yesterday, Oct 23", "Tue, Oct 22"];
  const hydrationTarget = 2500;

  // Add water in mL
  const addWater = (amount) => {
    setHydrationMl(prev => Math.min(hydrationTarget, prev + amount));
  };

  // Toggle habit checkbox
  const toggleHabit = (id) => {
    setHabits(prev => prev.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  // Toggle meal status
  const logMealNow = (id) => {
    setMeals(prev => prev.map(m => m.id === id ? { ...m, status: 'Logged' } : m));
  };

  const filledGlasses = Math.min(8, Math.floor((hydrationMl / hydrationTarget) * 8));

  return (
    <div className="flex flex-col w-full space-y-space-md max-w-3xl mx-auto">
      {/* Date Navigation & Quick Pill Controls */}
      <section className="flex flex-col space-y-space-sm">
        <div className="flex items-center justify-between bg-surface-container-low px-space-md py-space-sm rounded-xl shadow-sm border border-surface-container-high/40">
          <button
            aria-label="Previous day"
            onClick={() => setCurrentDateIndex(prev => (prev + 1) % dates.length)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container text-on-surface hover:text-primary transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>
          
          <div className="flex items-center gap-space-xs cursor-pointer group">
            <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
            <span className="font-title-sm text-title-sm text-on-surface font-bold tracking-tight">
              {dates[currentDateIndex]}
            </span>
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary transition-colors">
              expand_more
            </span>
          </div>

          <button
            aria-label="Next day"
            onClick={() => setCurrentDateIndex(prev => Math.max(0, prev - 1))}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container text-on-surface hover:text-primary transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>

        {/* Quick Action Pills */}
        <div className="flex items-center gap-space-xs overflow-x-auto pb-1">
          <button
            onClick={() => alert("Add custom meal form opened")}
            className="flex items-center gap-space-xs bg-primary-container text-on-primary-container px-space-md py-space-xs rounded-full font-label-md text-label-md font-bold shrink-0 hover:scale-105 transition-transform shadow-[0_0_12px_rgba(163,230,53,0.25)]"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">restaurant</span>
            + Add Meal
          </button>

          <button
            onClick={() => addWater(250)}
            className="flex items-center gap-space-xs bg-surface-container text-secondary px-space-md py-space-xs rounded-full font-label-md text-label-md font-bold shrink-0 hover:bg-surface-container-high transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">water_drop</span>
            + Log Water (+250ml)
          </button>

          <button
            onClick={() => toggleHabit(1)}
            className="flex items-center gap-space-xs bg-surface-container text-on-surface-variant px-space-md py-space-xs rounded-full font-label-md text-label-md font-bold shrink-0 hover:text-primary transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">task_alt</span>
            + Check Habit
          </button>
        </div>
      </section>

      {/* Overall Today Summary Card */}
      <section className="bg-surface-container-low rounded-xl p-space-md shadow-md relative overflow-hidden border border-surface-container-high/50">
        <div className="absolute -right-8 -top-8 w-36 h-36 bg-primary-container/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex items-center justify-between gap-space-md relative z-10">
          {/* Circular Metric Ring */}
          <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" fill="none" r="40" stroke="#1c201f" strokeWidth="9" />
              <circle
                className="transition-all duration-1000"
                cx="50"
                cy="50"
                fill="none"
                r="40"
                stroke="#a3e635"
                strokeDasharray="251.2"
                strokeDashoffset="45.2"
                strokeLinecap="round"
                strokeWidth="9"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="font-headline-md text-headline-md font-extrabold text-on-surface leading-none">82%</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-0.5">Score</span>
            </div>
          </div>

          {/* Overview Statistics */}
          <div className="flex-1 flex flex-col min-w-0 space-y-space-xs">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 bg-surface-container-high px-space-sm py-0.5 rounded-full text-tertiary-fixed-dim font-label-sm text-label-sm font-bold">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">local_fire_department</span>
                6 Days Active
              </span>
              <span className="font-label-sm text-label-sm text-secondary font-bold">Optimal</span>
            </div>
            <div className="font-title-sm text-title-sm text-on-surface font-bold truncate">Strong Campus Routine</div>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
              7 target habits logged. Macro ratios are spot on for your evening study block!
            </p>
          </div>
        </div>
      </section>

      {/* 1. Hydration Tracker Section */}
      <section className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-space-md border border-surface-container-high/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[22px]">water_drop</span>
            </div>
            <div>
              <h2 className="font-title-sm text-title-sm font-bold text-on-surface">Hydration Level</h2>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Daily Goal: {hydrationTarget.toLocaleString()} mL
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="font-headline-md text-headline-md font-bold text-secondary">
              {hydrationMl.toLocaleString()}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant"> / {hydrationTarget.toLocaleString()} mL</span>
          </div>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="space-y-space-xs">
          <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
            <div
              className="h-full bg-secondary rounded-full shadow-[0_0_10px_rgba(69,223,164,0.4)] transition-all duration-500"
              style={{ width: `${Math.min(100, Math.round((hydrationMl / hydrationTarget) * 100))}%` }}
            ></div>
          </div>
          <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
            <span>{Math.round((hydrationMl / hydrationTarget) * 100)}% Achieved</span>
            <span className="text-secondary font-bold">
              {Math.max(0, hydrationTarget - hydrationMl)} mL remaining
            </span>
          </div>
        </div>

        {/* Visual Water Glass Counter (Interactive) */}
        <div className="bg-surface-container rounded-xl p-space-sm flex justify-between items-center px-space-md">
          {Array.from({ length: 8 }).map((_, i) => {
            const isFilled = i < filledGlasses;
            return (
              <button
                key={i}
                aria-label={`Glass ${i + 1}`}
                onClick={() => setHydrationMl((i + 1) * 312.5)}
                className={`transition-transform hover:scale-110 ${
                  isFilled ? 'text-secondary' : 'text-outline-variant hover:text-secondary'
                }`}
                type="button"
              >
                <span className="material-symbols-outlined text-[24px]">local_drink</span>
              </button>
            );
          })}
        </div>

        {/* Quick Add Micro Buttons */}
        <div className="grid grid-cols-3 gap-space-xs">
          <button
            onClick={() => addWater(250)}
            className="flex items-center justify-center gap-1 bg-surface-container-high py-space-xs px-space-xs rounded-lg text-on-surface hover:bg-surface-bright font-label-md text-label-md transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px] text-secondary">add</span>
            +250 mL Glass
          </button>
          <button
            onClick={() => addWater(500)}
            className="flex items-center justify-center gap-1 bg-surface-container-high py-space-xs px-space-xs rounded-lg text-on-surface hover:bg-surface-bright font-label-md text-label-md transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px] text-secondary">add</span>
            +500 mL Bottle
          </button>
          <button
            onClick={() => addWater(100)}
            className="flex items-center justify-center gap-1 bg-surface-container-high py-space-xs px-space-xs rounded-lg text-on-surface hover:bg-surface-bright font-label-md text-label-md transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px] text-secondary">add</span>
            +100 mL Sip
          </button>
        </div>

        {/* Next Reminder Badge */}
        <div className="flex items-center gap-space-sm bg-surface-container px-space-sm py-space-xs rounded-lg text-on-surface-variant font-label-sm text-label-sm">
          <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">schedule</span>
          <span className="truncate">Next sip recommended at <strong className="text-on-surface">2:30 PM</strong> (Pre-lecture hydration)</span>
        </div>
      </section>

      {/* 2. Meals Tracker Section */}
      <section className="space-y-space-sm">
        <div className="flex items-center justify-between px-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[20px] text-primary">restaurant_menu</span>
            <h2 class="font-title-sm text-title-sm font-bold text-on-surface">Daily Meals</h2>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {meals.filter(m => m.status === 'Logged').length} of {meals.length} Logged
          </span>
        </div>

        {meals.map((meal) => (
          <div key={meal.id} className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-space-xs relative overflow-hidden border border-surface-container-high/40">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-space-sm">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  meal.status === 'Logged' ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-high text-outline'
                }`}>
                  <span className="material-symbols-outlined text-[16px]">
                    {meal.status === 'Logged' ? 'check' : 'hourglass_empty'}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-sm text-label-sm uppercase font-bold text-primary tracking-wider">
                      {meal.type}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">• {meal.time}</span>
                  </div>
                  <h3 className="font-body-lg text-body-lg font-bold text-on-surface">{meal.name}</h3>
                </div>
              </div>
              <span className="font-label-md text-label-md font-bold text-on-surface bg-surface-container px-space-sm py-0.5 rounded">
                {meal.calories} kcal
              </span>
            </div>

            {/* Macro Capsule Pills */}
            <div className="flex flex-wrap items-center justify-between pt-1">
              <div className="flex flex-wrap items-center gap-space-xs">
                <div className="flex items-center gap-1 bg-surface-container px-space-xs py-0.5 rounded font-label-sm text-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  <span className="text-on-surface font-semibold">{meal.protein}g</span>
                  <span className="text-on-surface-variant">Protein</span>
                </div>
                <div className="flex items-center gap-1 bg-surface-container px-space-xs py-0.5 rounded font-label-sm text-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
                  <span className="text-on-surface font-semibold">{meal.carbs}g</span>
                  <span className="text-on-surface-variant">Carbs</span>
                </div>
                <div className="flex items-center gap-1 bg-surface-container px-space-xs py-0.5 rounded font-label-sm text-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="text-on-surface font-semibold">{meal.fat}g</span>
                  <span className="text-on-surface-variant">Fat</span>
                </div>
              </div>

              {meal.status === 'Pending' && (
                <button
                  onClick={() => logMealNow(meal.id)}
                  className="bg-primary-container text-on-primary-container px-space-sm py-1 rounded font-label-sm text-label-sm font-bold flex items-center gap-1 hover:scale-105 transition-transform"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[14px]">add_circle</span>
                  + Log Now
                </button>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* 3. Student Healthy Habits Checklist */}
      <section className="space-y-space-sm">
        <div className="flex items-center justify-between px-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[20px] text-secondary">checklist</span>
            <h2 className="font-title-sm text-title-sm font-bold text-on-surface">Student Wellness Habits</h2>
          </div>
          <span className="font-label-sm text-label-sm text-primary font-bold">
            {habits.filter(h => h.completed).length} of {habits.length} Complete
          </span>
        </div>

        <div className="space-y-space-xs">
          {habits.map((habit) => (
            <div
              key={habit.id}
              onClick={() => toggleHabit(habit.id)}
              className="flex items-center justify-between p-space-md bg-surface-container-low rounded-xl shadow-sm transition-all hover:bg-surface-container cursor-pointer border border-surface-container-high/40"
            >
              <div className="flex items-center gap-space-md min-w-0">
                <button
                  aria-label={`Toggle ${habit.title}`}
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    habit.completed ? 'bg-secondary text-on-secondary' : 'bg-surface-container-high text-outline'
                  }`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {habit.completed ? 'check' : 'crop_square'}
                  </span>
                </button>
                <div className="min-w-0">
                  <div className={`font-body-md text-body-md font-semibold text-on-surface truncate ${
                    habit.completed ? 'line-through text-on-surface-variant' : ''
                  }`}>
                    {habit.title}
                  </div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant truncate">
                    {habit.desc}
                  </div>
                </div>
              </div>
              <span className={`font-label-sm text-label-sm font-bold shrink-0 ml-2 ${
                habit.completed ? 'text-secondary' : 'text-tertiary-fixed-dim'
              }`}>
                {habit.completed ? 'Completed ✓' : 'In Progress'}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Adherence Chart */}
      <section className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-space-md border border-surface-container-high/40">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-title-sm text-title-sm font-bold text-on-surface">Weekly Consistency</h2>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Past 7 Days Tracking</span>
          </div>
          <span className="font-label-sm text-label-sm text-primary font-bold bg-surface-container px-space-sm py-0.5 rounded">
            Avg. 84%
          </span>
        </div>
        <div className="h-32 flex items-end justify-between gap-space-xs pt-4 px-space-xs">
          {[
            { label: 'F', pct: '70%', fill: '85%', color: 'bg-secondary/80' },
            { label: 'S', pct: '60%', fill: '65%', color: 'bg-secondary/80' },
            { label: 'S', pct: '85%', fill: '90%', color: 'bg-secondary/80' },
            { label: 'M', pct: '95%', fill: '100%', color: 'bg-primary-container' },
            { label: 'T', pct: '78%', fill: '80%', color: 'bg-secondary/80' },
            { label: 'W', pct: '50%', fill: '50%', color: 'bg-tertiary-fixed-dim/80' },
            { label: 'Today', pct: '82%', fill: '100%', color: 'bg-primary-container shadow-[0_0_10px_rgba(163,230,53,0.4)]' },
          ].map((item, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
              <div className="w-full max-w-[28px] bg-surface-container-high rounded-t-md relative flex items-end" style={{ height: item.pct }}>
                <div className={`w-full ${item.color} rounded-t-md`} style={{ height: item.fill }}></div>
              </div>
              <span className={`font-label-sm text-label-sm ${idx === 6 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
