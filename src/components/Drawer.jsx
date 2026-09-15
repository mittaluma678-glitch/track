import React from 'react';

export default function Drawer({ isOpen, onClose, activePath, setActivePath }) {
  const navigateTo = (path) => {
    setActivePath(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide-out drawer menu */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-72 max-w-[80vw] bg-surface-container-low shadow-[0_8px_32px_rgba(0,0,0,0.6)] transform transition-transform duration-300 ease-out flex flex-col pt-safe pb-safe ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-16 px-space-md flex items-center justify-between border-b border-surface-container-high/40">
          <div className="flex items-center gap-space-sm">
            <div className="w-7 h-7">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <rect width="100" height="100" rx="28" fill="#121917"/>
                <path d="M50 18C30 18 20 38 22 62C24 86 52 82 72 76C82 54 75 18 50 18Z" fill="#A3E635" fillOpacity="0.3"/>
                <path d="M34 52L46 64L68 34" stroke="#A3E635" strokeWidth="7" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-title-sm text-title-sm font-bold text-on-surface">NutriTrack Menu</span>
          </div>
          <button
            className="w-11 h-11 flex items-center justify-center rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40"
            onClick={onClose}
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        <div className="px-space-md py-space-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold">
            Secondary Destinations
          </span>
        </div>

        <div className="flex-1 overflow-y-auto px-space-sm space-y-1">
          <button
            onClick={() => navigateTo('nutrition-library')}
            className={`w-full flex items-center gap-space-md px-space-md h-12 rounded-xl text-left transition-colors ${
              activePath === 'nutrition-library'
                ? 'bg-surface-container text-primary font-bold'
                : 'text-on-surface-variant hover:text-primary hover:bg-surface-container/60'
            }`}
          >
            <span className="material-symbols-outlined text-[22px] text-secondary">menu_book</span>
            <span className="font-body-md text-body-md font-semibold">Nutrition Library</span>
          </button>

          <button
            onClick={() => navigateTo('quiz')}
            className={`w-full flex items-center gap-space-md px-space-md h-12 rounded-xl text-left transition-colors ${
              activePath === 'quiz'
                ? 'bg-surface-container text-primary font-bold'
                : 'text-on-surface-variant hover:text-primary hover:bg-surface-container/60'
            }`}
          >
            <span className="material-symbols-outlined text-[22px] text-tertiary-container">quiz</span>
            <span className="font-body-md text-body-md font-semibold">Daily Quiz</span>
            <span className="ml-auto px-1.5 py-0.5 rounded bg-tertiary-container/20 text-tertiary-container font-label-sm text-label-sm font-bold">
              +50 XP
            </span>
          </button>

          <button
            onClick={() => navigateTo('myth-vs-fact')}
            className={`w-full flex items-center gap-space-md px-space-md h-12 rounded-xl text-left transition-colors ${
              activePath === 'myth-vs-fact'
                ? 'bg-surface-container text-primary font-bold'
                : 'text-on-surface-variant hover:text-primary hover:bg-surface-container/60'
            }`}
          >
            <span className="material-symbols-outlined text-[22px] text-primary">lightbulb</span>
            <span className="font-body-md text-body-md font-semibold">Myth vs Fact</span>
          </button>

          <button
            onClick={() => navigateTo('achievements')}
            className={`w-full flex items-center gap-space-md px-space-md h-12 rounded-xl text-left transition-colors ${
              activePath === 'achievements'
                ? 'bg-surface-container text-primary font-bold'
                : 'text-on-surface-variant hover:text-primary hover:bg-surface-container/60'
            }`}
          >
            <span className="material-symbols-outlined text-[22px] text-tertiary-fixed-dim">emoji_events</span>
            <span className="font-body-md text-body-md font-semibold">Achievements</span>
          </button>

          <button
            onClick={() => navigateTo('settings')}
            className={`w-full flex items-center gap-space-md px-space-md h-12 rounded-xl text-left transition-colors ${
              activePath === 'settings'
                ? 'bg-surface-container text-primary font-bold'
                : 'text-on-surface-variant hover:text-primary hover:bg-surface-container/60'
            }`}
          >
            <span className="material-symbols-outlined text-[22px] text-outline">settings</span>
            <span className="font-body-md text-body-md font-semibold">Settings</span>
          </button>
        </div>

        <div className="p-space-md bg-surface-container-lowest/60 m-space-sm rounded-xl border border-surface-container-high/40">
          <span className="font-label-sm text-label-sm text-on-surface-variant block">Collegiate Wellness Hub</span>
          <span className="font-label-md text-label-md text-primary font-bold block">Budget &amp; Schedule Friendly</span>
        </div>
      </aside>
    </>
  );
}
