import React, { useState } from 'react';

export default function SettingsView() {
  const [profile, setProfile] = useState({
    name: 'Maya Lin',
    year: '2nd Year Computer Science',
    hydrationTarget: 2500,
    examMode: true,
    notifications: true,
  });

  return (
    <div className="flex flex-col w-full space-y-space-md max-w-2xl mx-auto">
      <div className="flex items-center gap-space-xs">
        <span className="text-2xl">⚙️</span>
        <div>
          <span className="font-label-sm text-label-sm uppercase text-outline font-bold block">Preferences</span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">App Settings</h1>
        </div>
      </div>

      <div className="p-space-md rounded-xl bg-surface-container-low shadow-md border border-surface-container-high/40 space-y-space-md">
        <div className="flex items-center gap-space-md border-b border-surface-container-high pb-space-md">
          <div className="w-16 h-16 rounded-full bg-primary-container/20 text-primary flex items-center justify-center font-bold text-2xl border border-primary/40">
            ML
          </div>
          <div>
            <h2 className="font-title-sm text-title-sm font-bold text-on-surface">{profile.name}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">{profile.year}</p>
          </div>
        </div>

        <div className="space-y-space-sm">
          <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container">
            <div>
              <span className="font-body-md text-body-md font-bold text-on-surface block">Exam Season Mode</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant block">Lowers cortisol targets &amp; highlights brain fuel tips</span>
            </div>
            <button
              onClick={() => setProfile({ ...profile, examMode: !profile.examMode })}
              className={`w-12 h-6 rounded-full p-0.5 transition-colors focus:outline-none flex items-center ${
                profile.examMode ? 'bg-primary' : 'bg-surface-container-highest'
              }`}
              type="button"
            >
              <div className={`w-5 h-5 rounded-full bg-surface shadow-md transform transition-transform ${
                profile.examMode ? 'translate-x-6' : 'translate-x-0'
              }`}></div>
            </button>
          </div>

          <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container">
            <div>
              <span className="font-body-md text-body-md font-bold text-on-surface block">Hydration Reminders</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant block">Pre-lecture sip notifications</span>
            </div>
            <button
              onClick={() => setProfile({ ...profile, notifications: !profile.notifications })}
              className={`w-12 h-6 rounded-full p-0.5 transition-colors focus:outline-none flex items-center ${
                profile.notifications ? 'bg-secondary' : 'bg-surface-container-highest'
              }`}
              type="button"
            >
              <div className={`w-5 h-5 rounded-full bg-surface shadow-md transform transition-transform ${
                profile.notifications ? 'translate-x-6' : 'translate-x-0'
              }`}></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
