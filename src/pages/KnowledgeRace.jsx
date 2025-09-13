import React, { useState } from "react";

const questions = [
  // Math
  { q: "2 + 2 = ?", a: "4" },
  { q: "Square root of 16?", a: "4" },
  { q: "5 × 5 = ?", a: "25" },
  { q: "Derivative of x²?", a: "2x" },
  { q: "Integral of 1/x?", a: "ln|x|" },

  // Science
  { q: "Speed of light (m/s)?", a: "3e8" },
  { q: "Acceleration due to gravity?", a: "9.8" },
  { q: "Newton’s Second Law?", a: "F=ma" },
  { q: "Boiling point of water?", a: "100" },
  { q: "Electron charge (C)?", a: "1.6e-19" },

  // English
  { q: "Synonym of Happy?", a: "Joyful" },
  { q: "Antonym of Big?", a: "Small" },
  { q: "Past tense of Run?", a: "Ran" },
  { q: "Plural of Child?", a: "Children" },
  { q: "Opposite of Ancient?", a: "Modern" },

  // Geography
  { q: "Capital of India?", a: "New Delhi" },
  { q: "Largest ocean?", a: "Pacific" },
  { q: "Tallest mountain?", a: "Mount Everest" },
  { q: "Longest river?", a: "Nile" },
  { q: "Smallest country?", a: "Vatican" },
];

const KnowledgeRace = () => {
  const [pos, setPos] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [fallen, setFallen] = useState(false);
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const finishLine = 15;

  const handleSubmit = () => {
    if (fallen) return;

    const correct = answer.trim().toLowerCase() === questions[qIndex].a.toLowerCase();

    if (correct) {
      setMessage("⚡ Correct! Speed Boost!");
      setPos((prev) => Math.min(prev + 2, finishLine));
      setScore((prev) => prev + 10);
    } else {
      setMessage("🕳️ Wrong! Watch out for the pothole!");
      const obsPos = Math.min(pos + 1, finishLine);
      setObstacles([...obstacles, obsPos]);
      setFallen(true);
    }

    setAnswer("");
    setQIndex((prev) => (prev + 1) % questions.length);
  };

  const resetGame = () => {
    setPos(0);
    setQIndex(0);
    setAnswer("");
    setMessage("");
    setFallen(false);
    setObstacles([]);
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gradient-to-br from-yellow-100 to-blue-200">
      <h1 className="text-3xl font-bold mb-4">🏁 Knowledge Race</h1>
      <p className="mb-2 text-gray-700">Score: {score}</p>

      {/* Track */}
      <div className="relative w-full max-w-3xl h-32 border-4 border-gray-600 rounded-lg bg-gray-100 flex items-center justify-between px-4 overflow-hidden">
        {[...Array(finishLine + 1)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-gray-400"
            style={{ left: `${(i / finishLine) * 100}%` }}
          ></div>
        ))}

        {/* Player */}
        <div
          className={`absolute text-4xl transition-all duration-700 ${
            fallen ? "animate-bounce text-red-600" : ""
          }`}
          style={{ left: `${(pos / finishLine) * 100}%`, top: "30%" }}
        >
          🚴
        </div>

        {/* Obstacles */}
        {obstacles.map((o, idx) => (
          <div
            key={idx}
            className="absolute text-3xl"
            style={{ left: `${(o / finishLine) * 100}%`, bottom: "5%" }}
          >
            🕳️
          </div>
        ))}

        {/* Finish Line */}
        <div className="absolute right-0 text-3xl">🎌</div>
      </div>

      {/* Question Section */}
      {!fallen && pos < finishLine ? (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold mb-2">{questions[qIndex].q}</p>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Your answer"
            className="px-3 py-2 border rounded-lg"
          />
          <button
            onClick={handleSubmit}
            className="ml-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Submit
          </button>
          {message && <p className="mt-2 italic">{message}</p>}
        </div>
      ) : pos >= finishLine ? (
        <div className="mt-6 text-xl font-bold text-green-600">
          🎉 You reached the finish line! Score: {score}
          <button
            onClick={resetGame}
            className="block mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="mt-6 text-xl font-bold text-red-600">
          💀 You fell in a pothole! Try again.
          <button
            onClick={resetGame}
            className="block mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default KnowledgeRace;
