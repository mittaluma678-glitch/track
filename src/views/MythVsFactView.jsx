import React, { useState } from 'react';

export default function MythVsFactView() {
  const myths = [
    {
      id: 1,
      myth: "Skipping breakfast helps students lose weight faster.",
      fact: "Skipping breakfast lowers morning blood sugar, causing severe over-eating and intense sugar cravings by lunch.",
      category: "Weight & Metabolism",
    },
    {
      id: 2,
      myth: "Drinking coffee replaces hydration needs during long study sessions.",
      fact: "Caffeine is a mild diuretic. While it boosts alertness, plain water is required to maintain brain cognitive speed.",
      category: "Hydration",
    },
    {
      id: 3,
      myth: "Eating late at night directly turns food into body fat.",
      fact: "Total daily caloric intake and macro balance dictate body composition, not the clock time of your meal.",
      category: "Timing & Sleep",
    },
    {
      id: 4,
      myth: "Hostel mess food has zero healthy options.",
      fact: "Pairing mess dal with steamed rice and fresh cucumber salads provides a complete protein and fiber baseline.",
      category: "Campus Eating",
    },
  ];

  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col w-full space-y-space-md max-w-2xl mx-auto">
      <div className="flex items-center gap-space-xs">
        <span className="text-2xl">💡</span>
        <div>
          <span className="font-label-sm text-label-sm uppercase text-primary font-bold block">Science vs Rumors</span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">Myth vs Fact</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-space-sm">
        {myths.map((item) => {
          const isFlipped = flipped[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleFlip(item.id)}
              className="p-space-md rounded-xl bg-surface-container-low shadow-md border border-surface-container-high/50 cursor-pointer transition-all hover:bg-surface-container"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  {item.category}
                </span>
                <span className="font-label-sm text-label-sm text-primary font-bold">
                  {isFlipped ? "Show Myth" : "Tap for Fact 💡"}
                </span>
              </div>

              {!isFlipped ? (
                <div className="space-y-1">
                  <span className="font-label-sm text-label-sm text-error font-bold uppercase tracking-wider block">
                    ❌ Myth
                  </span>
                  <h3 className="font-title-sm text-title-sm font-bold text-on-surface">
                    “{item.myth}”
                  </h3>
                </div>
              ) : (
                <div className="space-y-1 animate-in fade-in duration-200">
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider block">
                    ✅ Evidence-Based Fact
                  </span>
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    {item.fact}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
