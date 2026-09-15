import React, { useState } from 'react';

export default function NutritionLibraryView() {
  const [activeCategory, setActiveCategory] = useState('All');

  const articles = [
    {
      id: 1,
      title: "Exam Season Nutrition & Brain Function",
      category: "Exam Prep",
      readTime: "4 min read",
      desc: "Discover how omega-3 fatty acids, complex carbohydrates, and hydration affect cognitive focus during 3-hour reading sessions.",
      icon: "brain",
    },
    {
      id: 2,
      title: "Hostel Kettle Cooking: High Protein Meals",
      category: "Hostel Living",
      readTime: "3 min read",
      desc: "Step-by-step guide to preparing oats, boiled eggs, soya chunks, and tea using basic hostel electric kettles.",
      icon: "soup_kitchen",
    },
    {
      id: 3,
      title: "Understanding Macronutrients (Protein, Carbs, Fats)",
      category: "Basics",
      readTime: "5 min read",
      desc: "Learn why your body needs all three macronutrients and how to balance them without strict counting apps.",
      icon: "menu_book",
    },
    {
      id: 4,
      title: "Caffeine Management & Sleep Architecture",
      category: "Wellness",
      readTime: "4 min read",
      desc: "The 8-hour caffeine half-life rule to preserve deep REM sleep while still studying effectively.",
      icon: "bedtime",
    },
  ];

  const categories = ['All', 'Exam Prep', 'Hostel Living', 'Basics', 'Wellness'];
  const filtered = activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <div className="flex flex-col w-full space-y-space-md max-w-3xl mx-auto">
      <div className="flex items-center gap-space-xs">
        <span className="text-2xl">📚</span>
        <div>
          <span className="font-label-sm text-label-sm uppercase text-secondary font-bold block">Knowledge Base</span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">Nutrition Library</h1>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-space-xs overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-space-md py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap transition-colors ${
              activeCategory === cat
                ? 'bg-secondary text-on-secondary font-bold shadow-sm'
                : 'bg-surface-container text-on-surface-variant hover:text-on-surface font-semibold'
            }`}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Stack */}
      <div className="space-y-space-sm">
        {filtered.map((article) => (
          <article
            key={article.id}
            onClick={() => alert(`Opening article: ${article.title}`)}
            className="p-space-md rounded-xl bg-surface-container-low shadow-md border border-surface-container-high/40 cursor-pointer hover:bg-surface-container transition-colors group"
          >
            <div className="flex items-start justify-between gap-space-sm mb-2">
              <span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-label-sm text-label-sm font-bold">
                {article.category}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">schedule</span> {article.readTime}
              </span>
            </div>
            <h3 className="font-title-sm text-title-sm font-bold text-on-surface group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              {article.desc}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
