import React, { useState } from 'react';

export default function BalancedPlateView() {
  const [activeZone, setActiveZone] = useState('veggies');
  const [simChoices, setSimChoices] = useState({
    veg: 'Sauteed Spinach & Bell Peppers',
    pro: 'Home-Style Dal Tadka',
    carb: 'Brown Rice / Whole-Wheat Roti',
  });

  const zoneData = {
    veggies: {
      title: '½ Vegetables & Fruits',
      subtitle: '50% OF THE PLATE',
      dotColor: 'bg-secondary',
      desc: 'Rich in essential dietary fiber, micronutrients, phytonutrients, and natural cellular hydration to prevent late-afternoon study slumps.',
      tags: ['Palak / Spinach', 'Crisp Cucumbers', 'Carrots & Cabbage', 'Bhindi (Okra)', 'Seasonal Papaya & Banana'],
    },
    protein: {
      title: '¼ Protein Power',
      subtitle: '25% OF THE PLATE',
      dotColor: 'bg-secondary-container',
      desc: 'Crucial for neurotransmitter synthesis, muscle maintenance, tissue repair, and sustained satiety during long study blocks.',
      tags: ['Dal Tadka', 'Rajma & Chana', 'Boiled Eggs', 'Grilled Paneer', 'Soya Chunks', 'Sprouted Moong'],
    },
    carbs: {
      title: '¼ Sustained Carbs',
      subtitle: '25% OF THE PLATE',
      dotColor: 'bg-tertiary-container',
      desc: 'Provides continuous glucose supply for brain metabolism without blood sugar spikes and mid-lecture fatigue.',
      tags: ['Whole-Wheat Rotis', 'Red or Brown Rice', 'Millets (Ragi/Jowar)', 'Poha', 'Sweet Potatoes'],
    },
    fats: {
      title: 'Healthy Fats & Micro-Shields',
      subtitle: 'ESSENTIAL COMPLEMENT',
      dotColor: 'bg-primary-container',
      desc: 'Supports fat-soluble vitamin absorption (A, D, E, K) and hormone regulation under exam stress.',
      tags: ['Handful of Peanuts', 'Flaxseed Sprinkle', 'Mustard / Olive Oil', 'Desi Ghee', 'Walnuts'],
    },
  };

  const currentZoneInfo = zoneData[activeZone] || zoneData.veggies;

  return (
    <div className="flex flex-col w-full space-y-space-md max-w-3xl mx-auto">
      {/* Concept Intro Card */}
      <div className="relative overflow-hidden bg-surface-container-low rounded-xl p-space-md shadow-xl border border-surface-container-high/40">
        <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex items-center gap-space-xs mb-1">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px]">restaurant</span>
          </span>
          <span className="font-label-sm text-label-sm tracking-wider uppercase text-primary font-bold">
            Intuitive Nutrition
          </span>
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface tracking-tight">
          The Balanced Plate Method
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">
          A simple visual guideline for everyday student meals — no calorie counting anxiety needed.
        </p>
      </div>

      {/* Interactive Graphic Section */}
      <div className="bg-surface-container-low rounded-xl p-space-md shadow-lg flex flex-col items-center border border-surface-container-high/40">
        <div className="flex items-center justify-between w-full mb-space-sm">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold block">
              Interactive Map
            </span>
            <span className="font-title-sm text-title-sm font-semibold text-on-surface">Tap any zone to focus</span>
          </div>
          <button
            onClick={() => setActiveZone('veggies')}
            className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors flex items-center gap-1"
            type="button"
          >
            <span className="material-symbols-outlined text-[14px]">refresh</span> Reset
          </button>
        </div>

        {/* Plate Graphic */}
        <div className="relative w-full max-w-[310px] aspect-square flex items-center justify-center my-2">
          {/* Ambient Glow */}
          <div className="absolute inset-4 rounded-full bg-primary-container/15 blur-2xl transition-all duration-500"></div>

          {/* Main SVG Plate */}
          <svg className="w-full h-full transform -rotate-45 drop-shadow-2xl" viewBox="0 0 320 320">
            <defs>
              <radialGradient id="rim-grad" cx="50%" cy="50%" r="50%">
                <stop offset="85%" stopColor="#1c201f" />
                <stop offset="97%" stopColor="#272b2a" />
                <stop offset="100%" stopColor="#323634" />
              </radialGradient>
            </defs>
            <circle cx="160" cy="160" r="148" fill="url(#rim-grad)" />
            <circle cx="160" cy="160" r="132" fill="#0b0f0e" />

            {/* Slice 1: 1/2 Veggies & Fruits (0 to 180 deg) */}
            <path
              onClick={() => setActiveZone('veggies')}
              d="M 160 160 L 290 160 A 130 130 0 0 1 30 160 Z"
              fill="#45dfa4"
              opacity={activeZone === 'veggies' ? '1' : '0.75'}
              className="cursor-pointer transition-all duration-300 origin-center hover:opacity-100"
            />
            {/* Slice 2: 1/4 Protein (180 to 270 deg) */}
            <path
              onClick={() => setActiveZone('protein')}
              d="M 160 160 L 30 160 A 130 130 0 0 1 160 30 Z"
              fill="#00bd85"
              opacity={activeZone === 'protein' ? '1' : '0.75'}
              className="cursor-pointer transition-all duration-300 origin-center hover:opacity-100"
            />
            {/* Slice 3: 1/4 Carbs (270 to 360 deg) */}
            <path
              onClick={() => setActiveZone('carbs')}
              d="M 160 160 L 160 30 A 130 130 0 0 1 290 160 Z"
              fill="#ffc989"
              opacity={activeZone === 'carbs' ? '1' : '0.75'}
              className="cursor-pointer transition-all duration-300 origin-center hover:opacity-100"
            />

            <circle cx="160" cy="160" r="130" fill="none" stroke="#101413" strokeWidth="4" />
            <circle cx="160" cy="160" r="28" fill="#101413" />
            <circle cx="160" cy="160" r="24" fill="#1c201f" />
          </svg>

          {/* Center Hub Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
            <span className="material-symbols-outlined text-primary text-[24px]">local_dining</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant/80 font-bold">BALANCED</span>
          </div>

          {/* Zone Overlay Badges */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none text-center">
            <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/90 font-label-sm text-label-sm text-secondary-fixed font-bold shadow-md">
              ½ Veggies &amp; Greens
            </span>
          </div>
          <div className="absolute top-8 left-3 pointer-events-none text-center">
            <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/90 font-label-sm text-label-sm text-secondary-fixed font-bold shadow-md">
              ¼ Protein
            </span>
          </div>
          <div className="absolute top-8 right-3 pointer-events-none text-center">
            <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/90 font-label-sm text-label-sm text-tertiary-container font-bold shadow-md">
              ¼ Carbs
            </span>
          </div>
        </div>

        {/* Satellite Rings */}
        <div className="grid grid-cols-2 gap-space-sm w-full mt-space-sm">
          <button
            onClick={() => setActiveZone('veggies')}
            className="flex items-center gap-space-xs p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all text-left"
            type="button"
          >
            <div className="w-9 h-9 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-secondary text-[20px]">water_drop</span>
            </div>
            <div className="min-w-0">
              <span className="font-label-sm text-label-sm text-secondary font-bold block truncate">Hydration Ring</span>
              <span className="font-body-md text-body-md text-on-surface truncate block">Water + Lime Slice</span>
            </div>
          </button>

          <button
            onClick={() => setActiveZone('fats')}
            className="flex items-center gap-space-xs p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all text-left"
            type="button"
          >
            <div className="w-9 h-9 rounded-full bg-tertiary-container/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-tertiary-container text-[20px]">spa</span>
            </div>
            <div className="min-w-0">
              <span className="font-label-sm text-label-sm text-tertiary-container font-bold block truncate">Healthy Fats</span>
              <span className="font-body-md text-body-md text-on-surface truncate block">Nuts, Seeds, Oils</span>
            </div>
          </button>
        </div>
      </div>

      {/* Active Zone Detail Inspector */}
      <div className="bg-surface-container-low rounded-xl p-space-md shadow-md transition-all duration-300 border border-surface-container-high/40">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${currentZoneInfo.dotColor}`}></span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
              {currentZoneInfo.subtitle}
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-outline">Nutrient Target</span>
        </div>
        <h2 className="font-headline-md text-headline-md font-bold text-on-surface">{currentZoneInfo.title}</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">{currentZoneInfo.desc}</p>

        <div className="mt-space-sm pt-space-sm bg-surface-container/60 rounded-lg p-space-sm">
          <span className="font-label-sm text-label-sm uppercase text-outline font-bold block mb-1.5">
            Hostel &amp; Budget Friendly Examples
          </span>
          <div className="flex flex-wrap gap-1.5">
            {currentZoneInfo.tags.map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-body-md text-body-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* The 4 Core Pillars Tabs */}
      <div className="space-y-space-xs">
        <div className="flex items-center justify-between px-1">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold">The 4 Core Pillars</span>
          <span className="font-label-sm text-label-sm text-primary font-bold">Culturally Diverse</span>
        </div>

        {[
          { key: 'veggies', title: '½ Vegetables & Fruits', badge: 'Fiber Boost', desc: 'Cabbage stir-fry, cucumbers, bhindi, tomatoes, carrots, citrus fruits.', icon: 'eco', color: 'text-secondary' },
          { key: 'protein', title: '¼ Protein Power', badge: 'Muscle & Brain', desc: 'Dal tadka, rajma, chana, boiled eggs, grilled paneer, soya chunks.', icon: 'fitness_center', color: 'text-secondary-container' },
          { key: 'carbs', title: '¼ Sustained Carbs', badge: 'Steady Glucose', desc: 'Whole-wheat rotis, red or brown rice, millets, poha, sweet potatoes.', icon: 'grain', color: 'text-tertiary-container' },
          { key: 'fats', title: 'Healthy Fats & Micro-Shields', badge: 'Hormone Health', desc: 'Handful of roasted peanuts, flaxseed sprinkle, mustard or olive oil, desi ghee.', icon: 'water', color: 'text-primary-container' },
        ].map((pillar) => (
          <button
            key={pillar.key}
            onClick={() => setActiveZone(pillar.key)}
            className={`w-full text-left p-space-md rounded-xl transition-all shadow-sm flex items-start justify-between gap-space-sm border ${
              activeZone === pillar.key ? 'bg-surface-container border-primary/40' : 'bg-surface-container-low border-surface-container-high/40 hover:bg-surface-container'
            }`}
            type="button"
          >
            <div className="flex gap-space-sm">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 mt-0.5">
                <span className={`material-symbols-outlined ${pillar.color} text-[22px]`}>{pillar.icon}</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-title-sm text-title-sm font-bold text-on-surface">{pillar.title}</span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-high font-label-sm text-label-sm text-primary font-bold">
                    {pillar.badge}
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">{pillar.desc}</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline text-[20px]">chevron_right</span>
          </button>
        ))}
      </div>

      {/* "Build Your Plate" Interactive Student Simulator */}
      <div className="bg-surface-container-low rounded-xl p-space-md shadow-xl space-y-space-md border border-surface-container-high/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">tune</span>
            <h2 className="font-title-sm text-title-sm font-bold text-on-surface">Build Your Plate Simulator</h2>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
            Interactive
          </span>
        </div>

        <div className="space-y-space-xs">
          {/* Slot 1: Veggies */}
          <div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-secondary"></span> Slot 1: ½ Vegetables
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">50% Area</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {['Sauteed Spinach & Bell Peppers', 'Cabbage & Crunchy Cucumbers'].map((item) => (
                <button
                  key={item}
                  onClick={() => setSimChoices({ ...simChoices, veg: item })}
                  className={`p-2 rounded-lg text-left font-body-md text-body-md transition-all ${
                    simChoices.veg === item
                      ? 'bg-secondary/25 text-on-surface font-bold border border-secondary'
                      : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-bright'
                  }`}
                  type="button"
                >
                  🌿 {item}
                </button>
              ))}
            </div>
          </div>

          {/* Slot 2: Protein */}
          <div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <span className="font-label-sm text-label-sm text-secondary-fixed font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span> Slot 2: ¼ Protein
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">25% Area</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {['Home-Style Dal Tadka', 'Spiced Soya Chunks / Paneer'].map((item) => (
                <button
                  key={item}
                  onClick={() => setSimChoices({ ...simChoices, pro: item })}
                  className={`p-2 rounded-lg text-left font-body-md text-body-md transition-all ${
                    simChoices.pro === item
                      ? 'bg-secondary-container/30 text-on-surface font-bold border border-secondary-container'
                      : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-bright'
                  }`}
                  type="button"
                >
                  🌱 {item}
                </button>
              ))}
            </div>
          </div>

          {/* Slot 3: Carbs */}
          <div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <span className="font-label-sm text-label-sm text-tertiary-container font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-tertiary-container"></span> Slot 3: ¼ Carbs
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">25% Area</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {['Brown Rice / Whole-Wheat Roti', 'Steamed Millet / Sweet Potato'].map((item) => (
                <button
                  key={item}
                  onClick={() => setSimChoices({ ...simChoices, carb: item })}
                  className={`p-2 rounded-lg text-left font-body-md text-body-md transition-all ${
                    simChoices.carb === item
                      ? 'bg-tertiary-container/30 text-on-surface font-bold border border-tertiary-container'
                      : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-bright'
                  }`}
                  type="button"
                >
                  🌾 {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Simulator Output Summary */}
        <div className="p-3 rounded-lg bg-surface-container flex flex-col gap-1 border border-primary-container/30">
          <span className="font-label-sm text-label-sm text-primary font-bold uppercase">Simulated Meal Combination</span>
          <p className="font-body-md text-body-md text-on-surface">
            {simChoices.veg} + {simChoices.pro} + {simChoices.carb}
          </p>
          <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-[14px]">check_circle</span>
            Perfect 1:1:2 ratio! Solves evening study fatigue.
          </span>
        </div>
      </div>
    </div>
  );
}
