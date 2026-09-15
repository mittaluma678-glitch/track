import React, { useState } from 'react';

export default function HomeView({ setActivePath, meals, onLogQuickSnack, snackToastVisible, setSnackToastVisible }) {
  return (
    <div className="flex flex-col w-full space-y-space-md max-w-3xl mx-auto">
      {/* Header Greeting & Streak Badge */}
      <div className="flex items-center justify-between gap-space-sm pt-space-xs">
        <div className="flex flex-col min-w-0">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface truncate">
            Good morning, Maya! 🌿
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant truncate">
            Ready to nourish your mind &amp; body today?
          </p>
        </div>
        <div className="relative shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high shadow-md border border-surface-container-highest">
          <span className="text-tertiary-fixed-dim font-bold text-label-md">🔥 6-Day Streak</span>
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-md shadow-lg border border-surface-container-high/60">
        <div className="relative z-10 flex flex-col space-y-space-sm">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container w-fit">
            <span className="material-symbols-outlined text-secondary text-[16px]">school</span>
            <span className="font-label-sm text-label-sm text-secondary tracking-wide uppercase font-bold">
              Dorm &amp; Exam Fuel
            </span>
          </div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile font-extrabold text-on-surface leading-tight">
            Build Better Habits. Understand What Your Body Needs.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Track your meals, hydration, and daily habits while learning the science behind good nutrition.
          </p>
          <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
            <button
              onClick={() => setActivePath('tracker')}
              className="flex items-center gap-2 px-space-md h-11 rounded-xl bg-primary text-on-primary font-title-sm text-title-sm font-bold shadow-md hover:opacity-90 transition-opacity"
              type="button"
            >
              <span>Start Tracking</span>
              <span className="material-symbols-outlined text-[18px]">bar_chart</span>
            </button>
            <button
              onClick={() => setActivePath('nutrition-library')}
              className="flex items-center gap-2 px-space-md h-11 rounded-xl bg-surface-container-high text-on-surface font-title-sm text-title-sm font-semibold hover:bg-surface-bright transition-colors"
              type="button"
            >
              <span>Explore Nutrition</span>
              <span className="material-symbols-outlined text-[18px] text-tertiary-container">menu_book</span>
            </button>
          </div>
        </div>
        <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
      </div>

      {/* Daily Progress Overview */}
      <div className="rounded-xl bg-surface-container-low p-space-md shadow-md space-y-space-sm border border-surface-container-high/50">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              Today's Momentum
            </span>
            <h3 className="font-title-sm text-title-sm text-on-surface font-bold">Daily Progress Overview</h3>
          </div>
          <span className="px-2 py-0.5 rounded-md bg-surface-container text-secondary font-label-sm text-label-sm font-bold">
            High Focus
          </span>
        </div>
        <div className="flex items-center gap-space-md py-space-xs">
          <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-surface-container-highest"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
              />
              <path
                className="text-primary-container transition-all duration-1000 ease-out"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray="78, 100"
                strokeLinecap="round"
                strokeWidth="3.5"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-title-sm text-title-sm font-extrabold text-on-surface leading-none">78%</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Met</span>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2 flex-1 min-w-0">
            <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-surface-container">
              <span className="font-body-md text-body-md text-on-surface truncate">💧 Hydration</span>
              <span className="font-label-md text-label-md text-secondary font-semibold shrink-0">1,800 / 2,400 ml</span>
            </div>
            <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-surface-container">
              <span className="font-body-md text-body-md text-on-surface truncate">🥗 Meals</span>
              <span className="font-label-md text-label-md text-primary font-semibold shrink-0">3 / 3 Logged</span>
            </div>
            <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-surface-container">
              <span className="font-body-md text-body-md text-on-surface truncate">⚡ Micro-Habits</span>
              <span className="font-label-md text-label-md text-tertiary-container font-semibold shrink-0">4 / 5 Done</span>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Meals Section */}
      <div className="space-y-space-sm">
        <div className="flex items-center justify-between">
          <h3 className="font-title-sm text-title-sm text-on-surface font-bold">Today's Meals</h3>
          <button
            onClick={onLogQuickSnack}
            className="flex items-center gap-1 text-primary hover:text-primary-fixed-dim transition-colors font-label-md text-label-md font-bold"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>Log Quick Snack</span>
          </button>
        </div>

        <div className="flex flex-col space-y-2">
          {meals.map((meal) => (
            <div key={meal.id} className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low shadow-sm border border-surface-container-high/40">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-xl">
                  {meal.icon || '🍽️'}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">{meal.type}</span>
                  <span className="font-body-md text-body-md text-on-surface-variant truncate">{meal.name}</span>
                </div>
              </div>
              <div className="flex flex-col items-end shrink-0 pl-2">
                <span className="font-label-md text-label-md text-on-surface font-bold">{meal.calories} kcal</span>
                {meal.status === 'Logged' ? (
                  <span className="font-label-sm text-label-sm text-secondary flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[14px]">check</span>Logged
                  </span>
                ) : (
                  <span className="font-label-sm text-label-sm text-tertiary-container flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>Pending
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Snack Toast Notification */}
      {snackToastVisible && (
        <div className="p-3 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-between shadow-lg border border-primary/30 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">task_alt</span>
            <span className="font-body-md text-body-md">Quick snack added to your daily tally!</span>
          </div>
          <button
            onClick={() => setSnackToastVisible(false)}
            className="text-on-surface-variant hover:text-on-surface"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
      )}

      {/* Weekly Nutrition Snapshot */}
      <div className="rounded-xl bg-surface-container-low p-space-md shadow-md space-y-space-sm border border-surface-container-high/50">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              Consistency
            </span>
            <h3 className="font-title-sm text-title-sm text-on-surface font-bold">Weekly Nutrition Snapshot</h3>
          </div>
          <span className="font-label-md text-label-md text-primary font-bold">84% Avg</span>
        </div>
        <div className="flex items-end justify-between h-28 pt-4 pb-2 px-1">
          {[
            { day: 'M', height: 'h-16', color: 'bg-secondary' },
            { day: 'T', height: 'h-20', color: 'bg-primary-container' },
            { day: 'W', height: 'h-12', color: 'bg-secondary' },
            { day: 'T', height: 'h-22', color: 'bg-primary-container' },
            { day: 'F', height: 'h-24', color: 'bg-secondary' },
            { day: 'S', height: 'h-14', color: 'bg-primary-container' },
            { day: 'S', height: 'h-8', color: 'bg-surface-container-highest' },
          ].map((bar, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5 flex-1">
              <div className={`w-5 ${bar.color} rounded-t-md ${bar.height}`}></div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">{bar.day}</span>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-lg bg-surface-container flex items-start gap-2.5">
          <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">insights</span>
          <p className="font-body-md text-body-md text-on-surface">
            ✨ You completed <span className="text-primary font-bold">5/7 hydration goals</span> this week! Your habit consistency improved even during mid-terms.
          </p>
        </div>
      </div>

      {/* Student Wellness Hub Tiles */}
      <div className="space-y-space-sm">
        <div className="flex items-center justify-between">
          <h3 className="font-title-sm text-title-sm text-on-surface font-bold">Student Wellness Hub</h3>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Micro-Guides</span>
        </div>
        <div className="grid grid-cols-2 gap-space-sm">
          <button
            onClick={() => setActivePath('plate')}
            className="flex flex-col justify-between p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors shadow-sm min-h-[128px] text-left border border-surface-container-high/40 group"
            type="button"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-2xl">🍽️</span>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[18px]">
                arrow_forward
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="font-title-sm text-title-sm text-on-surface font-bold leading-snug">Balanced Plate</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5 line-clamp-2">
                Build your 1/2 plate veggie ratio
              </span>
            </div>
          </button>

          <button
            onClick={() => setActivePath('quiz')}
            className="flex flex-col justify-between p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors shadow-sm min-h-[128px] text-left border border-surface-container-high/40 group"
            type="button"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-2xl">❓</span>
              <span className="px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-tertiary-container font-bold">
                +50 XP
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="font-title-sm text-title-sm text-on-surface font-bold leading-snug">Daily Quiz</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5 line-clamp-2">
                Tissue repair nutrient essentials
              </span>
            </div>
          </button>

          <button
            onClick={() => setActivePath('myth-vs-fact')}
            className="flex flex-col justify-between p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors shadow-sm min-h-[128px] text-left border border-surface-container-high/40 group"
            type="button"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-2xl">💡</span>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[18px]">
                arrow_forward
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="font-title-sm text-title-sm text-on-surface font-bold leading-snug">Myth vs Fact</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5 line-clamp-2">
                Does skipping meals trigger weight loss?
              </span>
            </div>
          </button>

          <button
            onClick={() => setActivePath('nutrition-library')}
            className="flex flex-col justify-between p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors shadow-sm min-h-[128px] text-left border border-surface-container-high/40 group"
            type="button"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-2xl">📚</span>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[18px]">
                arrow_forward
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="font-title-sm text-title-sm text-on-surface font-bold leading-snug">Knowledge Base</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5 line-clamp-2">
                15-min guides for exam-season eating
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Inspirational Quote Card */}
      <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-md shadow-md border border-surface-container-high/40">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-primary">
            <span className="material-symbols-outlined text-[20px]">format_quote</span>
          </div>
          <div className="flex flex-col min-w-0">
            <p className="font-title-sm text-title-sm font-semibold text-on-surface italic">
              “Small habits. Better health. One day at a time.”
            </p>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
              Built for university student life • non-clinical, pressure-free &amp; empowering.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
