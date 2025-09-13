import React, { useState } from "react";

const FlashcardsPages = () => {
  // ✅ Flashcard data
  const subjects = {
    math: [
      { question: "Quadratic Formula", answer: "x = (-b ± √(b² - 4ac)) / 2a" },
      { question: "Area of Circle", answer: "π × r²" },
      { question: "Pythagoras Theorem", answer: "a² + b² = c²" },
      { question: "Derivative of x²", answer: "2x" },
      { question: "Integral of 1/x", answer: "ln|x| + C" },
      { question: "Slope Formula", answer: "(y₂ - y₁) / (x₂ - x₁)" },
      { question: "Area of Triangle", answer: "½ × base × height" },
      { question: "Volume of Sphere", answer: "(4/3)πr³" },
      { question: "Log Rule", answer: "log(a×b) = log a + log b" },
      { question: "Mean Formula", answer: "Σx / n" },
      { question: "Combination Formula", answer: "nCr = n! / (r!(n-r)!)" },
    ],
    science: [
      { question: "Speed of Light (c)", answer: "3 × 10⁸ m/s" },
      { question: "Gravitational Constant (G)", answer: "6.674 × 10⁻¹¹ N·m²/kg²" },
      { question: "Planck’s Constant (h)", answer: "6.626 × 10⁻³⁴ Js" },
      { question: "Avogadro’s Number", answer: "6.022 × 10²³" },
      { question: "Electron Charge (e)", answer: "1.602 × 10⁻¹⁹ C" },
      { question: "Boltzmann Constant (k)", answer: "1.38 × 10⁻²³ J/K" },
      { question: "Gas Constant (R)", answer: "8.314 J/(mol·K)" },
      { question: "Acceleration due to Gravity (g)", answer: "9.8 m/s²" },
      { question: "Density Formula", answer: "Mass / Volume" },
      { question: "Newton’s 2nd Law", answer: "F = m × a" },
      { question: "Work Formula", answer: "Force × Distance" },
    ],
    english: [
      { question: "Synonym of Happy", answer: "Joyful" },
      { question: "Antonym of Brave", answer: "Cowardly" },
      { question: "Past Tense of Go", answer: "Went" },
      { question: "Plural of Child", answer: "Children" },
      { question: "Figure of Speech: Life is a journey", answer: "Metaphor" },
      { question: "Opposite of Fast", answer: "Slow" },
      { question: "Meaning of Benevolent", answer: "Kind and Generous" },
      { question: "Adjective of Beauty", answer: "Beautiful" },
      { question: "Synonym of Intelligent", answer: "Smart" },
      { question: "Antonym of Begin", answer: "End" },
      { question: "Proverb: A stitch in time...", answer: "saves nine" },
    ],
    geography: [
      { question: "Largest Continent", answer: "Asia" },
      { question: "Longest River", answer: "Nile" },
      { question: "Tallest Mountain", answer: "Mount Everest" },
      { question: "Smallest Country", answer: "Vatican City" },
      { question: "Largest Ocean", answer: "Pacific Ocean" },
      { question: "Capital of Japan", answer: "Tokyo" },
      { question: "Desert in Africa", answer: "Sahara Desert" },
      { question: "River in India", answer: "Ganga" },
      { question: "Continent of Brazil", answer: "South America" },
      { question: "Coldest Place", answer: "Antarctica" },
      { question: "Layer of Air", answer: "Atmosphere" },
    ],
  };

  // ✅ States
  const [subject, setSubject] = useState("math");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const flashcards = subjects[subject];

  // ✅ Navigation
  const nextCard = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % flashcards.length);
  };
  const prevCard = () => {
    setFlipped(false);
    setIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="flex flex-col items-center p-6 gap-6 min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <h1 className="text-3xl font-extrabold text-gray-800">Flashcards</h1>

      {/* Subject Switcher */}
      <div className="flex flex-wrap justify-center gap-4">
        {Object.keys(subjects).map((subj) => (
          <button
            key={subj}
            onClick={() => {
              setSubject(subj);
              setIndex(0);
              setFlipped(false);
            }}
            className={`px-5 py-2 rounded-xl font-medium transition-all ${
              subject === subj
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {subj.charAt(0).toUpperCase() + subj.slice(1)}
          </button>
        ))}
      </div>

      {/* Flashcard */}
      <div
        className="w-96 h-56 perspective cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute w-full h-full bg-white shadow-xl rounded-2xl flex items-center justify-center p-6 text-center text-xl font-semibold backface-hidden">
            {flashcards[index].question}
          </div>
          {/* Back */}
          <div className="absolute w-full h-full bg-indigo-600 text-white shadow-xl rounded-2xl flex items-center justify-center p-6 text-center text-lg font-bold rotate-y-180 backface-hidden">
            {flashcards[index].answer}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-6">
        <button
          onClick={prevCard}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
        >
          ⬅ Prev
        </button>
        <button
          onClick={nextCard}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
        >
          Next ➡
        </button>
      </div>

      <p className="text-sm text-gray-600">
        Card {index + 1} / {flashcards.length} ({subject})
      </p>
    </div>
  );
};

export default FlashcardsPages;
