import React, { useState } from "react";

const subjects = {
  Math: [
    { q: "2 + 2 = ?", a: "4" },
    { q: "Square root of 16?", a: "4" },
    { q: "10 × 5 = ?", a: "50" },
    { q: "12 ÷ 3 = ?", a: "4" },
    { q: "What is Pi (approx)?", a: "3.14" },
    { q: "Area of square with side 4?", a: "16" },
    { q: "Derivative of x²?", a: "2x" },
    { q: "5³ = ?", a: "125" },
    { q: "100 ÷ 25 = ?", a: "4" },
    { q: "7 × 8 = ?", a: "56" },
    { q: "Integral of 1/x dx?", a: "lnx" },
  ],
  Science: [
    { q: "Chemical symbol of water?", a: "H2O" },
    { q: "Planet known as Red Planet?", a: "Mars" },
    { q: "Speed of light (m/s)?", a: "3e8" },
    { q: "Gas we breathe in?", a: "Oxygen" },
    { q: "Atomic number of Carbon?", a: "6" },
    { q: "Boiling point of water (°C)?", a: "100" },
    { q: "Center of atom?", a: "Nucleus" },
    { q: "Earth revolves around?", a: "Sun" },
    { q: "Smallest unit of life?", a: "Cell" },
    { q: "Force formula?", a: "F=ma" },
    { q: "Acceleration due to gravity (m/s²)?", a: "9.8" },
  ],
};

const KnowledgeRace = () => {
  const [subject, setSubject] = useState("Math");
  const [playerPos, setPlayerPos] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [answer, setAnswer] = useState("");
  const [winner, setWinner] = useState(null);
  const [pothole, setPothole] = useState(null);
  const [fallen, setFallen] = useState(false);
  const [message, setMessage] = useState("");

  const questions = subjects[subject];

  const handleSubmit = () => {
    if (winner || fallen) return;

    const correct =
      answer.trim().toLowerCase() === questions[currentQ].a.toLowerCase();

    if (correct) {
      setMessage("⚡ Correct! Speed Boost!");
      movePlayer(2);
    } else {
      setMessage("🕳️ Oh no! You fell into a pothole!");
      setPothole(playerPos + 1);
      setFallen(true);
    }

    setAnswer("");
    setCurrentQ((prev) => (prev + 1) % questions.length);
  };

  const movePlayer = (steps) => {
    setPlayerPos((prev) => {
      const newPos = prev + steps;
      if (newPos >= 10) {
        setWinner("You");
      }
      return Math.min(newPos, 10);
    });
  };

  const resetGame = () => {
    setPlayerPos(0);
    setCurrentQ(0);
    setAnswer("");
    setWinner(null);
    setMessage("");
    setPothole(null);
    setFallen(false);
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gradient-to-br from-yellow-100 to-blue-200">
      <h1 className="text-3xl font-bold mb-6">🏁 Knowledge Race with Potholes</h1>

      {/* Subject Selector */}
      <div className="mb-6">
        <select
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
            resetGame();
          }}
          className="px-4 py-2 border rounded-lg"
        >
          {Object.keys(subjects).map((subj) => (
            <option key={subj} value={subj}>
              {subj}
            </option>
          ))}
        </select>
      </div>

      {/* Track */}
      <div className="relative w-full max-w-3xl h-32 border-4 border-gray-600 rounded-lg bg-gradient-to-r from-white to-gray-100 shadow-lg flex items-center justify-between px-4 overflow-hidden">
        {/* Track markers */}
        {[...Array(11)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-gray-300"
            style={{ left: `${i * 10}%` }}
          ></div>
        ))}

        {/* Player (bicycle) */}
        <div
          className={`absolute text-4xl transition-all duration-700 ${
            fallen ? "animate-bounce text-red-600" : ""
          }`}
          style={{ left: `${playerPos * 10}%`, top: "30%" }}
        >
          🚴
        </div>

        {/* Pothole */}
        {pothole !== null && (
          <div
            className="absolute text-4xl"
            style={{ left: `${pothole * 10}%`, bottom: "5%" }}
          >
            🕳️
          </div>
        )}

        {/* Finish Flag */}
        <div className="absolute right-0 text-3xl">🎌</div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-3xl mt-4 bg-gray-300 rounded-full h-4">
        <div
          className="bg-green-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${playerPos * 10}%` }}
        ></div>
      </div>

      {/* Question Section */}
      {!winner && !fallen ? (
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold mb-3">{questions[currentQ].q}</p>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="border px-3 py-2 rounded-lg"
            placeholder="Your Answer"
          />
          <button
            onClick={handleSubmit}
            className="ml-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Submit
          </button>

          {/* Feedback */}
          {message && <p className="mt-3 text-md italic">{message}</p>}
        </div>
      ) : winner ? (
        <div className="mt-6 text-xl font-bold">
          🎉 {winner} reached the finish line!
          <button
            onClick={resetGame}
            className="block mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Play Again
          </button>
        </div>
      ) : fallen ? (
        <div className="mt-6 text-xl font-bold text-red-600">
          💀 You fell in a pothole! Try again.
          <button
            onClick={resetGame}
            className="block mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Restart Game
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default KnowledgeRace;
