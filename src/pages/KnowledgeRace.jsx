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
      // correct
      setWrongAttempt(false);
      if (turnIndex + 1 < turns.length) {
        setTurnIndex(turnIndex + 1);
        setAnswer("");
      } else {
        // treasure reached
        setCompleted(true);
      }
    } else {
      // wrong
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
    <div className="flex flex-col items-center min-h-screen p-6 bg-gradient-to-br from-yellow-100 to-blue-200">
      <h1 className="text-3xl font-bold mb-4">🏴‍☠️ Treasure Hunt Quiz</h1>

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
  );
};

export default KnowledgeRace;
