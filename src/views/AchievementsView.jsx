import React from 'react';

export default function AchievementsView() {
  const achievements = [
    { id: 1, title: '6-Day Habit Streak', desc: 'Logged habits for 6 consecutive days', icon: 'local_fire_department', unlocked: true, color: 'text-tertiary-fixed-dim' },
    { id: 2, title: 'Hydration Hero', desc: 'Reached 2,500 mL hydration target 5 times', icon: 'water_drop', unlocked: true, color: 'text-secondary' },
    { id: 3, title: 'Balanced Plate Pioneer', desc: 'Built 10 balanced meals using the 1:1:2 ratio', icon: 'restaurant', unlocked: true, color: 'text-primary' },
    { id: 4, title: 'Exam Season Scholar', desc: 'Completed 5 student wellness quizzes', icon: 'emoji_events', unlocked: false, color: 'text-outline' },
  ];

  return (
    <div className="flex flex-col w-full space-y-space-md max-w-3xl mx-auto">
      <div className="flex items-center gap-space-xs">
        <span className="text-2xl">🏆</span>
        <div>
          <span className="font-label-sm text-label-sm uppercase text-tertiary-fixed-dim font-bold block">Milestones &amp; Badges</span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">Achievements</h1>
        </div>
      </div>

      <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high/40 shadow-md flex items-center justify-between">
        <div>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Total Karma &amp; Level</span>
          <h2 className="font-headline-md text-headline-md font-extrabold text-primary">Level 4 Scholar • 450 XP</h2>
        </div>
        <span className="px-3 py-1 rounded-full bg-primary-container/20 text-primary font-bold text-sm">
          3 / 4 Unlocked
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            className={`p-space-md rounded-xl border flex items-start gap-space-sm shadow-sm transition-all ${
              ach.unlocked
                ? 'bg-surface-container-low border-surface-container-high/50'
                : 'bg-surface-container-lowest border-surface-container-high/20 opacity-60'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0 ${ach.color}`}>
              <span className="material-symbols-outlined text-[26px]">{ach.icon}</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-title-sm text-title-sm font-bold text-on-surface truncate">{ach.title}</h3>
                {ach.unlocked && <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>}
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">{ach.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
