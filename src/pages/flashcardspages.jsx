import React, { useState } from "react";

const FlashcardsPages = () => {
  // Math & Science Flashcards
  const mathFlashcards = [
    { question: "Quadratic Formula", answer: "x = (-b ± √(b² - 4ac)) / 2a" },
    { question: "Area of Circle", answer: "π × r²" },
    { question: "Pythagoras Theorem", answer: "a² + b² = c²" },
  ];

  const scienceFlashcards = [
    { question: "Speed of Light (c)", answer: "3 × 10⁸ m/s" },
    { question: "Gravitational Constant (G)", answer: "6.674 × 10⁻¹¹ N·m²/kg²" },
    { question: "Planck’s Constant (h)", answer: "6.626 × 10⁻³⁴ Js" },
  ];

  // State
  const [category, setCategory] = useState("math");
  const [index, setIndex] = useState(0);

  // Select flashcard list
  const flashcards = category === "math" ? mathFlashcards : scienceFlashcards;

  // Next & Previous handlers
  const nextCard = () => setIndex((prev) => (prev + 1) % flashcards.length);
  const prevCard = () =>
    setIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);

  return (
    <div className="flex flex-col items-center p-6 gap-6">
      <h1 className="text-2xl font-bold">Flashcards</h1>

      {/* Category Switch */}
      <div className="flex gap-4">
        <button
          onClick={() => {
            setCategory("math");
            setIndex(0);
          }}
          className={`px-4 py-2 rounded-lg ${
            category === "math" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Math
        </button>
        <button
          onClick={() => {
            setCategory("science");
            setIndex(0);
          }}
          className={`px-4 py-2 rounded-lg ${
            category === "science" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          Science
        </button>
      </div>

      {/* Flashcard Display */}
      <div className="w-80 h-48 bg-white shadow-lg rounded-2xl flex flex-col justify-center items-center text-center p-6 transition-all duration-500">
        <h2 className="text-lg font-semibold">{flashcards[index].question}</h2>
        <p className="mt-3 text-blue-600 font-bold">{flashcards[index].answer}</p>
      </div>

      {/* Navigation Buttons */}
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
    </div>
  );
};

export default FlashcardsPages;

