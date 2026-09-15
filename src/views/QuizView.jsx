import React, { useState } from 'react';

export default function QuizView({ onEarnXp }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const question = {
    title: "Daily Nutrition Challenge (+50 XP)",
    text: "Which macronutrient combination provides the most stable mental focus during a 3-hour exam block without causing blood sugar spikes?",
    options: [
      { id: 'A', text: "Instant sugary energy drinks & chocolate", correct: false, explanation: "Triggers a rapid glucose spike followed by severe fatigue 45 minutes later." },
      { id: 'B', text: "Complex carbs + healthy fats + protein (e.g., almonds + whole grains)", correct: true, explanation: "Correct! Slows stomach emptying, providing steady brain glucose for 3+ hours." },
      { id: 'C', text: "Pure black coffee with 4 spoons of sugar", correct: false, explanation: "Spikes cortisol and jitteriness without cellular nutrient support." },
      { id: 'D', text: "Skipping eating completely", correct: false, explanation: "Causes hypoglycemia and impairs memory retrieval." },
    ]
  };

  const handleSelect = (optionId) => {
    if (submitted) return;
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    setSubmitted(true);
    const chosen = question.options.find(o => o.id === selectedOption);
    if (chosen?.correct && onEarnXp) {
      onEarnXp(50);
    }
  };

  return (
    <div className="flex flex-col w-full space-y-space-md max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">❓</span>
          <div>
            <span className="font-label-sm text-label-sm uppercase text-tertiary-container font-bold block">Daily Science Quiz</span>
            <h1 className="font-title-sm text-title-sm text-on-surface font-bold">Brain &amp; Exam Fuel</h1>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-tertiary-container/20 text-tertiary-container font-label-sm text-label-sm font-bold">
          +50 XP Reward
        </span>
      </div>

      <div className="p-space-md rounded-xl bg-surface-container-low shadow-lg border border-surface-container-high/50 space-y-space-md">
        <p className="font-headline-md text-headline-md font-semibold text-on-surface leading-snug">
          {question.text}
        </p>

        <div className="space-y-space-xs">
          {question.options.map((option) => {
            const isSelected = selectedOption === option.id;
            let btnStyle = "bg-surface-container border-surface-container-high text-on-surface hover:bg-surface-container-high";
            
            if (submitted) {
              if (option.correct) {
                btnStyle = "bg-secondary/20 border-secondary text-secondary font-bold";
              } else if (isSelected && !option.correct) {
                btnStyle = "bg-error/20 border-error text-error font-bold";
              }
            } else if (isSelected) {
              btnStyle = "bg-primary-container/30 border-primary text-primary font-bold";
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`w-full p-space-md rounded-xl text-left font-body-md text-body-md transition-all border flex items-start gap-3 ${btnStyle}`}
                type="button"
              >
                <span className="font-bold shrink-0">{option.id}.</span>
                <span className="flex-1">{option.text}</span>
                {submitted && option.correct && (
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                )}
              </button>
            );
          })}
        </div>

        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className={`w-full py-3 rounded-xl font-title-sm text-title-sm font-bold transition-all ${
              selectedOption
                ? 'bg-primary text-on-primary hover:opacity-90 shadow-md'
                : 'bg-surface-container-high text-outline cursor-not-allowed'
            }`}
            type="button"
          >
            Submit Answer
          </button>
        ) : (
          <div className="p-3 rounded-lg bg-surface-container space-y-1 animate-in fade-in duration-300">
            <span className="font-label-md text-label-md font-bold text-primary block">
              {question.options.find(o => o.id === selectedOption)?.correct ? "🎉 Correct! +50 XP Earned!" : "💡 Explanation:"}
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {question.options.find(o => o.id === selectedOption)?.explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
