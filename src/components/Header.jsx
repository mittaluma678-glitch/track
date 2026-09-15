import React, { useState } from 'react';

export default function Header({ onOpenDrawer, activePath, setActivePath }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_12px_rgba(0,0,0,0.35)]">
      <div className="h-16 px-space-md flex items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm min-w-0">
          <button
            aria-label="Open menu"
            className="w-11 h-11 flex items-center justify-center rounded-xl text-on-surface hover:text-primary hover:bg-surface-container-high/40 transition-colors"
            onClick={onOpenDrawer}
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
          
          <div 
            className="flex items-center gap-space-xs cursor-pointer select-none"
            onClick={() => setActivePath('home')}
          >
            {/* Embedded SVG Logo from nutritrack_logo */}
            <div className="w-8 h-8 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <defs>
                  <linearGradient id="headerLeafGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#A3E635"/>
                    <stop offset="100%" stopColor="#10B981"/>
                  </linearGradient>
                </defs>
                <rect width="100" height="100" rx="28" fill="#121917"/>
                <rect width="98" height="98" x="1" y="1" rx="27" stroke="#273832" strokeWidth="2"/>
                <path d="M50 18C30 18 20 38 22 62C24 86 52 82 72 76C82 54 75 18 50 18Z" fill="url(#headerLeafGrad)" fillOpacity="0.2"/>
                <path d="M50 18C30 18 20 38 22 62C24 86 52 82 72 76C82 54 75 18 50 18Z" stroke="url(#headerLeafGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M34 52L46 64L68 34" stroke="#A3E635" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="68" cy="34" r="4.5" fill="#F59E0B"/>
              </svg>
            </div>
            
            <div className="flex flex-col truncate">
              <span className="font-title-sm text-title-sm font-bold tracking-tight text-on-surface leading-none truncate">
                NutriTrack
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant/80 tracking-normal hidden min-[380px]:inline truncate">
                Track Habits. Understand Nutrition
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-space-xs">
          <span className="font-title-sm text-title-sm font-semibold text-primary hidden min-[480px]:inline px-space-xs truncate capitalize">
            {activePath.replace('-', ' ')}
          </span>
          
          {/* Search Button */}
          <button
            aria-label="Search"
            className="w-11 h-11 flex items-center justify-center rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40 transition-colors"
            onClick={() => setShowSearch(!showSearch)}
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>

          {/* Notifications Button */}
          <div className="relative">
            <button
              aria-label="Notifications"
              className="relative w-11 h-11 flex items-center justify-center rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40 transition-colors"
              onClick={() => setShowNotifications(!showNotifications)}
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-2 right-2 min-w-[16px] h-4 px-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold ring-2 ring-surface">
                1
              </span>
            </button>

            {/* Notification Popover */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-surface-container-low rounded-xl shadow-2xl border border-surface-container-high p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-surface-container-high">
                  <span className="font-title-sm text-title-sm font-bold text-on-surface">Notifications</span>
                  <span className="text-xs text-primary font-semibold">1 New</span>
                </div>
                <div className="p-2 rounded-lg bg-surface-container flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">water_drop</span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-on-surface">Hydration Milestone!</p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">You logged 1,900 mL today. Almost at your 2,500 mL goal!</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Profile Avatar */}
          <div 
            className="w-11 h-11 flex items-center justify-center pl-space-xs cursor-pointer"
            onClick={() => setActivePath('settings')}
            title="Maya's Profile"
          >
            <div className="w-8 h-8 rounded-full bg-surface-container-high ring-2 ring-primary-container/40 flex items-center justify-center text-primary font-bold text-xs overflow-hidden">
              <span className="material-symbols-outlined text-[20px]">person</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Search Overlay Bar */}
      {showSearch && (
        <div className="px-space-md pb-3 pt-1 border-t border-surface-container-high/50 flex items-center gap-2">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[18px]">search</span>
            <input
              type="text"
              placeholder="Search meals, nutrition tips, recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="w-full bg-surface-container pl-9 pr-3 py-1.5 rounded-lg text-sm text-on-surface placeholder:text-outline border border-surface-container-high focus:outline-none focus:border-primary"
            />
          </div>
          <button 
            onClick={() => { setShowSearch(false); setSearchQuery(''); }}
            className="text-xs font-semibold text-on-surface-variant hover:text-on-surface px-2 py-1"
          >
            Cancel
          </button>
        </div>
      )}
    </header>
  );
}
