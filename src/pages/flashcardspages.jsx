import React, { useState } from "react";

const subjects = {
  Math: [
    { front: "Pythagoras Theorem", back: "a² + b² = c²" },
    { front: "Area of Circle", back: "πr²" },
    { front: "Volume of Sphere", back: "4/3 πr³" },
    { front: "Derivative of x²", back: "2x" },
    { front: "Integral of 1/x", back: "ln|x|" },
    { front: "Slope Formula", back: "(y2-y1)/(x2-x1)" },
    { front: "Area of Triangle", back: "½ × base × height" },
    { front: "Quadratic Formula", back: "(-b ± √(b²-4ac)) / 2a" },
    { front: "Simple Interest", back: "SI = PRT/100" },
    { front: "Compound Interest", back: "A = P(1 + r/n)ⁿᵗ" },
    { front: "Log Rule", back: "log(ab) = loga + logb" },
  ],
  Science: [
    { front: "Speed of Light", back: "3 × 10⁸ m/s" },
    { front: "Acceleration due to Gravity", back: "9.8 m/s²" },
    { front: "Avogadro Number", back: "6.022 × 10²³" },
    { front: "Boiling Point of Water", back: "100 °C" },
    { front: "Freezing Point of Water", back: "0 °C" },
    { front: "Electron Charge", back: "1.6 × 10⁻¹⁹ C" },
    { front: "Newton’s 2nd Law", back: "F = ma" },
    { front: "Einstein Equation", back: "E = mc²" },
    { front: "Earth’s Atmosphere Layers", back: "Troposphere, Stratosphere, ..." },
    { front: "pH Neutral", back: "7" },
    { front: "Human DNA Pairs", back: "3 billion" },
  ],
  English: [
    { front: "Synonym of Happy", back: "Joyful" },
    { front: "Antonym of Big", back: "Small" },
    { front: "Past Tense of Run", back: "Ran" },
    { front: "Collective Noun: Cows", back: "Herd" },
    { front: "Opposite of Brave", back: "Coward" },
    { front: "Plural of Child", back: "Children" },
    { front: "Figure of Speech: 'As brave as a lion'", back: "Simile" },
    { front: "Author of Hamlet", back: "William Shakespeare" },
    { front: "One word for 'Fear of Books'", back: "Bibliophobia" },
    { front: "Opposite of Ancient", back: "Modern" },
    { front: "Synonym of Intelligent", back: "Smart" },
  ],
  Geography: [
    { front: "Capital of India", back: "New Delhi" },
    { front: "Largest Ocean", back: "Pacific Ocean" },
    { front: "Tallest Mountain", back: "Mount Everest" },
    { front: "Longest River", back: "Nile" },
    { front: "Smallest Country", back: "Vatican City" },
    { front: "Largest Desert", back: "Sahara Desert" },
    { front: "7 Continents", back: "Asia, Africa, ..." },
    { front: "Hottest Place on Earth", back: "Death Valley" },
    { front: "Coldest Continent", back: "Antarctica" },
    { front: "Country with Most Population", back: "India" },
    { front: "Ozone Layer Location", back: "Stratosphere" },
  ],
};

const Flashcards = () => {
  const [subject, setSubject] = useState("Math");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const cards = subjects[subject];

  const handleNext = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gradient-to-r from-blue-200 to-green-200">
      <h1 className="text-3xl font-bold mb-2">📚 Flashcards</h1>
      <p className="text-md italic text-gray-700 mb-6">
        💡 Guess it first... then flip it!
      </p>

      {/* Subject Selector */}
      <select
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
          setIndex(0);
          setFlipped(false);
        }}
        className="mb-6 px-4 py-2 border rounded-lg shadow"
      >
        {Object.keys(subjects).map((subj) => (
          <option key={subj} value={subj}>
            {subj}
          </option>
        ))}
      </select>

      {/* Flashcard */}
      <div
        className="w-80 h-52 cursor-pointer [perspective:1000px]"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute w-full h-full flex items-center justify-center text-xl font-bold bg-white border-2 border-gray-300 rounded-2xl shadow-lg [backface-visibility:hidden]">
            {cards[index].front}
          </div>

          {/* Back */}
          <div className="absolute w-full h-full flex items-center justify-center text-lg bg-indigo-600 text-white border-2 border-indigo-700 rounded-2xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
            {cards[index].back}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex mt-6 space-x-6">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 shadow"
        >
          ⬅ Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Flashcards;
