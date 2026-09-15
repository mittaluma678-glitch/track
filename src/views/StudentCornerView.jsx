import React, { useState } from 'react';

export default function StudentCornerView({ setActivePath }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [boosters, setBoosters] = useState([
    { id: 1, title: 'Add 1 Fresh Fruit Today', xp: '+25 XP', completed: false },
    { id: 2, title: '10-Min Post-Study Walk', xp: '+30 XP', completed: true },
  ]);

  const [stressRoutine, setStressRoutine] = useState([
    { id: 1, name: 'Chamomile / Herbal Tea', desc: 'Lowers evening exam anxiety', active: true },
    { id: 2, name: '20-20-20 Screen Break', desc: 'Rest eyes after 2-hr study block', active: true },
    { id: 3, name: 'Clean Protein Snack Ingested', desc: 'Peanuts, boiled eggs, or sprouts', active: false },
  ]);

  const toggleBooster = (id) => {
    setBoosters(prev => prev.map(b => b.id === id ? { ...b, completed: !b.completed } : b));
  };

  const toggleStressItem = (id) => {
    setStressRoutine(prev => prev.map(s => s.id === id ? { ...s, active: !s.active } : s));
  };

  const budgetMeals = [
    {
      id: 1,
      title: 'Peanut Butter Banana Oats',
      badge: 'Kettle / Microwave',
      price: '~$1.20 / ₹90',
      time: '5m Prep',
      protein: '18g Protein',
      tag: 'Hostel Kettle',
      desc: 'Warm rolled oats topped with creamy peanut butter, banana slices, and chia seeds.',
      icon: '🥣',
    },
    {
      id: 2,
      title: 'Sprouted Moong Chaat',
      badge: 'Zero Cooking',
      price: '~$0.80 / ₹60',
      time: '8m Prep',
      protein: '15g Protein, Fiber Rich',
      tag: 'No-Cook',
      desc: 'Fresh sprouted moong & chickpea chaat with tomatoes, coriander, and lemon.',
      icon: '🥗',
    },
    {
      id: 3,
      title: 'Veggie Paneer/Egg Scramble',
      badge: 'Induction Friendly',
      price: '~$1.50 / ₹110',
      time: '10m Prep',
      protein: '22g Protein',
      tag: '15-Min Prep',
      desc: 'Quick skillet scramble with bell peppers, onions, eggs or crumbled paneer.',
      icon: '🍳',
    },
  ];

  const filteredMeals = activeFilter === 'All'
    ? budgetMeals
    : budgetMeals.filter(m => m.tag === activeFilter || activeFilter === 'Under ₹100 / $3');

  return (
    <div className="flex flex-col w-full space-y-space-lg max-w-3xl mx-auto">
      {/* Header Section */}
      <section className="flex flex-col gap-space-xs">
        <div className="inline-flex items-center gap-space-xs text-primary font-label-md">
          <span className="material-symbols-outlined text-[18px]">school</span>
          <span className="tracking-wide uppercase font-bold">Campus Wellness Hub</span>
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface flex items-center gap-space-xs tracking-tight">
          <span>👩‍🎓</span> Student Corner
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Nutrition &amp; wellness tailored for campus budgets, busy exam schedules &amp; hostel living.
        </p>
      </section>

      {/* Student Weekly Challenge Banner */}
      <section className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-md shadow-xl border border-surface-container-high/40">
        <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-primary-container/10 blur-2xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col gap-space-md">
          <div className="flex items-start justify-between gap-space-sm">
            <div className="flex items-center gap-space-xs min-w-0">
              <span className="text-xl">🏆</span>
              <div className="truncate">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold block">
                  This Week's Challenge
                </span>
                <h2 className="font-title-sm text-title-sm text-on-surface font-bold truncate">7-Day Hydration Hero</h2>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-tertiary-container/20 text-on-tertiary-container font-label-sm text-label-sm font-bold">
              <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
              Streak x5
            </span>
          </div>

          <div className="space-y-space-xs">
            <div className="flex items-center justify-between text-on-surface font-label-md">
              <span className="text-on-surface-variant font-medium">Day 5 of 7 Completed</span>
              <span className="text-primary font-bold">71%</span>
            </div>
            <div className="h-2.5 w-full bg-surface-container-highest rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-gradient-to-r from-secondary to-primary-container rounded-full transition-all duration-500"
                style={{ width: '71.4%' }}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container">
            <div className="flex items-center gap-space-xs min-w-0">
              <div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-[18px]">water_drop</span>
              </div>
              <div className="min-w-0">
                <span className="font-label-sm text-label-sm text-on-surface-variant block leading-tight">Reward on Day 7</span>
                <span className="font-label-md text-label-md text-on-surface font-semibold truncate block">💧 Hydration Master</span>
              </div>
            </div>
            <span className="font-label-sm text-label-sm font-bold text-primary shrink-0">+100 Karma</span>
          </div>

          {/* Active Mini Challenges */}
          <div className="space-y-space-xs pt-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold block">
              Daily Campus Boosters
            </span>
            <div className="grid grid-cols-1 gap-space-xs">
              {boosters.map((booster) => (
                <button
                  key={booster.id}
                  onClick={() => toggleBooster(booster.id)}
                  className={`w-full flex items-center justify-between p-space-sm rounded-lg transition-colors text-left ${
                    booster.completed ? 'bg-surface-container-high' : 'bg-surface-container hover:bg-surface-container-high'
                  }`}
                  type="button"
                >
                  <div className="flex items-center gap-space-sm min-w-0">
                    <span className={`material-symbols-outlined text-[20px] ${
                      booster.completed ? 'text-primary' : 'text-outline'
                    }`}>
                      {booster.completed ? 'check_circle' : 'radio_button_unchecked'}
                    </span>
                    <span className={`font-body-md text-body-md truncate ${
                      booster.completed ? 'text-on-surface-variant line-through' : 'text-on-surface'
                    }`}>
                      {booster.title}
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold shrink-0">{booster.xp}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips For Today */}
      <section className="space-y-space-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="text-lg">💡</span>
            <h2 className="font-title-sm text-title-sm text-on-surface font-bold">Quick Study &amp; Hostel Tips</h2>
          </div>
          <span className="font-label-sm text-label-sm text-primary font-semibold">Swipe cards</span>
        </div>
        
        <div className="flex gap-space-sm overflow-x-auto pb-space-xs -mx-space-margin px-space-margin snap-x snap-mandatory">
          <article className="min-w-[270px] max-w-[280px] p-space-md rounded-xl bg-surface-container-low shrink-0 flex flex-col justify-between snap-start shadow-md border border-surface-container-high/40">
            <div className="space-y-space-xs">
              <div className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm font-bold">
                <span className="material-symbols-outlined text-[14px]">psychology</span>
                Focus Booster
              </div>
              <h3 className="font-title-sm text-title-sm text-on-surface font-bold">Exam Brain Fuel</h3>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                Pairing walnuts or almonds with complex carbs slows sugar spikes, eliminating the sudden 3 PM lecture crash.
              </p>
            </div>
            <div className="pt-space-sm flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
              <span>Takes 10 sec to pack</span>
            </div>
          </article>

          <article className="min-w-[270px] max-w-[280px] p-space-md rounded-xl bg-surface-container-low shrink-0 flex flex-col justify-between snap-start shadow-md border border-surface-container-high/40">
            <div className="space-y-space-xs">
              <div className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-tertiary-container/20 text-on-tertiary-container font-label-sm text-label-sm font-bold">
                <span className="material-symbols-outlined text-[14px]">bedtime</span>
                Cramming Guide
              </div>
              <h3 className="font-title-sm text-title-sm text-on-surface font-bold">Midnight Munchies</h3>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                Swap deep-fried instant ramen with roasted makhana (foxnuts) or salted roasted chana to stay awake without acid reflux.
              </p>
            </div>
            <div className="pt-space-sm flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px] text-primary">savings</span>
              <span>Saves hostel cash</span>
            </div>
          </article>

          <article className="min-w-[270px] max-w-[280px] p-space-md rounded-xl bg-surface-container-low shrink-0 flex flex-col justify-between snap-start shadow-md border border-surface-container-high/40">
            <div className="space-y-space-xs">
              <div className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm font-bold">
                <span className="material-symbols-outlined text-[14px]">timer</span>
                Alertness Hack
              </div>
              <h3 className="font-title-sm text-title-sm text-on-surface font-bold">Hydration Reminder</h3>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                Sip cold water every 45 minutes during reading blocks. Even 2% dehydration drops short-term memory recall by 15%.
              </p>
            </div>
            <div className="pt-space-sm flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
              <span>Clinically verified</span>
            </div>
          </article>
        </div>
      </section>

      {/* Budget-Friendly Healthy Meals Section */}
      <section className="space-y-space-md">
        <div className="space-y-space-xs">
          <div className="flex items-center justify-between">
            <h2 className="font-title-sm text-title-sm text-on-surface font-bold flex items-center gap-space-xs">
              <span>🥗</span> Budget-Friendly Meals
            </h2>
            <span className="font-label-sm text-label-sm text-outline font-semibold">Mess &amp; Hostel Ready</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Nutritious, high-yield options under student allowance constraints.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-space-xs overflow-x-auto pb-1 -mx-space-margin px-space-margin">
          {['All', 'Under ₹100 / $3', '15-Min Prep', 'No-Cook', 'Hostel Kettle'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-space-md py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap transition-colors ${
                activeFilter === filter
                  ? 'bg-primary text-on-primary font-bold shadow-sm'
                  : 'bg-surface-container text-on-surface-variant hover:text-on-surface font-semibold'
              }`}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Meal Cards */}
        <div className="space-y-space-sm">
          {filteredMeals.map((meal) => (
            <article key={meal.id} className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm shadow-md border border-surface-container-high/40">
              <div className="flex gap-space-md">
                <div className="w-20 h-20 rounded-lg bg-surface-container flex items-center justify-center text-3xl shrink-0">
                  {meal.icon}
                </div>
                <div className="flex flex-col justify-between min-w-0 flex-1">
                  <div>
                    <div className="flex items-center justify-between gap-space-xs">
                      <span className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-wider">
                        {meal.badge}
                      </span>
                      <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-highest text-primary font-bold">
                        {meal.price}
                      </span>
                    </div>
                    <h3 className="font-title-sm text-title-sm text-on-surface font-bold truncate mt-0.5">{meal.title}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-outline">timer</span> {meal.time}
                    </span>
                    <span>•</span>
                    <span className="text-primary font-semibold">{meal.protein}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-space-xs border-t-0 bg-surface-container/60 -mx-space-md -mb-space-md px-space-md py-space-sm rounded-b-xl">
                <span className="font-label-sm text-label-sm text-on-surface-variant">{meal.desc}</span>
                <button
                  onClick={() => alert(`Recipe details for ${meal.title}: 1. Mix ingredients. 2. Enjoy!`)}
                  className="font-label-md text-label-md text-primary font-bold inline-flex items-center gap-0.5 hover:underline shrink-0"
                  type="button"
                >
                  Quick Recipe <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Hostel & PG Living Survival Guides */}
      <section className="space-y-space-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="text-lg">📚</span>
            <h2 className="font-title-sm text-title-sm text-on-surface font-bold">Hostel &amp; PG Survival Guides</h2>
          </div>
          <button onClick={() => setActivePath('nutrition-library')} className="font-label-md text-label-md text-primary font-semibold hover:underline">
            View All
          </button>
        </div>
        
        <div className="space-y-space-xs">
          {[
            { title: 'Eating Well on a Tight Monthly Budget', desc: 'Smart bulk buying & hostel storage tactics', icon: 'account_balance_wallet', color: 'text-primary' },
            { title: 'Navigating the University Mess Line', desc: 'How to pick protein & skip hidden trans-fats', icon: 'soup_kitchen', color: 'text-secondary' },
            { title: '5-Minute Breakfasts Before 9 AM Lectures', desc: 'Zero-cook options when your alarm fails', icon: 'alarm', color: 'text-tertiary-container' },
            { title: 'Sleep & The Caffeine Crash Cycle', desc: 'Surviving finals without exhausting your adrenals', icon: 'coffee', color: 'text-error' },
          ].map((guide, idx) => (
            <button
              key={idx}
              onClick={() => setActivePath('nutrition-library')}
              className="w-full flex items-center justify-between p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors group text-left border border-surface-container-high/40"
              type="button"
            >
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <span className={`material-symbols-outlined ${guide.color} text-[22px]`}>{guide.icon}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-body-md text-body-md font-bold text-on-surface truncate">{guide.title}</h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">{guide.desc}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all text-[20px] shrink-0">
                chevron_right
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Personalized Student Goal Tracker */}
      <section className="p-space-md rounded-xl bg-surface-container-low space-y-space-md shadow-xl border border-surface-container-high/40">
        <div className="flex items-start justify-between">
          <div className="space-y-0.5">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
              Active Micro-Tracker
            </span>
            <h3 className="font-title-sm text-title-sm text-on-surface font-bold">Exam Week Stress Routine</h3>
          </div>
          <span className="px-space-xs py-1 rounded bg-secondary-container/20 text-secondary font-label-sm text-label-sm font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">psychiatry</span>
            Low Cortisol
          </span>
        </div>

        <div className="space-y-space-sm">
          {stressRoutine.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container">
              <div className="flex items-center gap-space-sm min-w-0">
                <div className="w-7 h-7 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px]">task_alt</span>
                </div>
                <div className="min-w-0">
                  <span className="font-body-md text-body-md text-on-surface font-semibold block truncate">{item.name}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant block">{item.desc}</span>
                </div>
              </div>
              
              <button
                onClick={() => toggleStressItem(item.id)}
                className={`w-12 h-6 rounded-full p-0.5 transition-colors focus:outline-none flex items-center ${
                  item.active ? 'bg-secondary' : 'bg-surface-container-highest'
                }`}
                type="button"
              >
                <div className={`w-5 h-5 rounded-full bg-surface shadow-md transform transition-transform ${
                  item.active ? 'translate-x-6' : 'translate-x-0'
                }`}></div>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
