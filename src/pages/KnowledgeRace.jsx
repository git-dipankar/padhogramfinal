import React, { useState } from "react";

const turns = [
  { q: "2 + 2 = ?", a: "4" },
  { q: "Capital of India?", a: "New Delhi" },
  { q: "Square root of 16?", a: "4" },
  { q: "5 × 5 = ?", a: "25" },
  { q: "Synonym of Happy?", a: "Joyful" },
  { q: "Speed of light (m/s)?", a: "3e8" },
  { q: "Tallest mountain?", a: "Mount Everest" },
  { q: "Boiling point of water?", a: "100" },
  { q: "Derivative of x²?", a: "2x" },
  { q: "Plural of Child?", a: "Children" },
];

const KnowledgeRace = () => {
  const [turnIndex, setTurnIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [wrongAttempt, setWrongAttempt] = useState(false);
  const [mistakes, setMistakes] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentTurn = turns[turnIndex];

  const handleAnswer = () => {
    if (answer.trim().toLowerCase() === currentTurn.a.toLowerCase()) {
      setWrongAttempt(false);
      if (turnIndex + 1 < turns.length) {
        setTurnIndex(turnIndex + 1);
        setAnswer("");
      } else {
        setCompleted(true);
      }
    } else {
      if (!wrongAttempt) {
        setWrongAttempt(true);
        alert("❌ Wrong answer! You have one more chance!");
      } else {
        alert("💀 You failed this turn! Try again later.");
        setMistakes([...mistakes, currentTurn.q]);
        setGameOver(true);
      }
    }
  };

  const resetGame = () => {
    setTurnIndex(0);
    setAnswer("");
    setWrongAttempt(false);
    setMistakes([]);
    setGameOver(false);
    setCompleted(false);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-6 bg-gradient-to-br from-yellow-200 to-green-200 gap-6">
      
      {/* Treasure Map Side */}
      <div className="w-full lg:w-1/3 bg-yellow-100 rounded-2xl shadow-lg p-6 relative">
        <h2 className="text-xl font-bold mb-4">🗺️ Treasure Map</h2>
        <div className="relative h-full flex flex-col justify-start items-center gap-8">
          {turns.map((turn, idx) => {
            const leftOffset = idx % 2 === 0 ? "0%" : "50%"; // zig-zag
            return (
              <div
                key={idx}
                className="flex items-center gap-2 absolute transition-all duration-500"
                style={{ top: `${idx * 80}px`, left: leftOffset }}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-lg ${
                    idx < turnIndex
                      ? "bg-green-600"
                      : idx === turnIndex
                      ? "bg-yellow-500 animate-bounce"
                      : "bg-gray-400"
                  }`}
                >
                  {idx === turns.length - 1 ? "💰" : "🏝️"}
                </div>
                <span className={`font-medium ${idx < turnIndex ? "line-through" : ""}`}>
                  Turn {idx + 1}
                </span>
              </div>
            );
          })}

          {/* Connecting Paths */}
          {turns.slice(0, -1).map((_, idx) => {
            const left1 = idx % 2 === 0 ? 20 : 70;
            const left2 = (idx + 1) % 2 === 0 ? 20 : 70;
            return (
              <div
                key={idx}
                className="absolute h-0.5 bg-brown-600"
                style={{
                  top: `${idx * 80 + 20}px`,
                  left: `${left1}px`,
                  width: `${Math.abs(left2 - left1)}px`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Main Game Area */}
      <div className="w-full lg:w-2/3 flex flex-col items-center gap-4">
        {!gameOver && !completed && (
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4">
            <p className="text-lg font-semibold">Turn {turnIndex + 1} / {turns.length}</p>
            <p className="text-md italic text-gray-700">💡 Choose your path wisely and answer!</p>

            <p className="text-xl font-bold mt-4">{currentTurn.q}</p>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your answer"
              className="px-3 py-2 border rounded-lg mt-2 w-64"
            />
            <button
              onClick={handleAnswer}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Submit Answer
            </button>
          </div>
        )}

        {completed && (
          <div className="text-center mt-6 p-6 bg-green-200 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold mb-4">🎉 Congratulations! You found the treasure!</h2>
            {mistakes.length > 0 ? (
              <div className="text-left">
                <p className="font-semibold mb-2">Topics to review:</p>
                <ul className="list-disc ml-5">
                  {mistakes.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-lg">🏆 Perfect run! You answered everything correctly on the first try!</p>
            )}
            <button
              onClick={resetGame}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Play Again
            </button>
          </div>
        )}

        {gameOver && (
          <div className="text-center mt-6 p-6 bg-red-200 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">💀 Game Over!</h2>
            <p className="mb-2">You made a mistake in this turn. Try again!</p>
            <button
              onClick={resetGame}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Restart Game
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowledgeRace;
