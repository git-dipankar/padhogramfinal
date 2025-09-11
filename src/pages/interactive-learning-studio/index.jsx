
import React, { useState } from "react";
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import Button from '../../components/ui/Button';

const QUESTIONS = [
  { q: "What is 5 + 7?", options: ["10","11","12","13"], a: 2 },
  { q: "What planet is known as the Red Planet?", options: ["Earth","Mars","Jupiter","Venus"], a: 1 },
  { q: "Which is a noun in this sentence: 'The quick brown fox jumps'?", options: ["quick","brown","fox","jumps"], a: 2 },
  { q: "What is 9 x 3?", options: ["27","26","30","24"], a: 0 },
  { q: "Which shape has 4 equal sides?", options: ["Rectangle","Square","Triangle","Circle"], a: 1 },
  { q: "What is the boiling point of water in °C?", options: ["90","80","100","120"], a: 2 },
];

export default function InteractiveLearningStudio(){
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [completed, setCompleted] = useState(false);
  const [message, setMessage] = useState("");

  const handleSelect = (idx, val) => {
    const copy = [...answers]; copy[idx] = val; setAnswers(copy);
  };

  const handleSubmit = () => {
    if (answers.some(a => a === null)) { setMessage("Please answer all questions before submitting."); return; }
    const correct = answers.every((ans, i) => ans === QUESTIONS[i].a);
    if (correct) {
      // award coins
      const prev = parseInt(localStorage.getItem("coins") || "0", 10);
      const award = 50;
      localStorage.setItem("coins", String(prev + award));
      setMessage("All correct! You earned " + award + " coins. 🎉");
    } else {
      setMessage("Some answers are incorrect — try again to earn coins.");
    }
    setCompleted(true);
  };

  const resetRound = () => { setAnswers(Array(QUESTIONS.length).fill(null)); setCompleted(false); setMessage(""); setStep(0); };

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar isCollapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(s => !s)} />
        <main className="flex-1 p-8">
          <div className="max-w-3xl mx-auto bg-white/60 p-6 rounded-lg border border-white/20">
            <h2 className="text-2xl font-bold mb-4">Interactive Learning Studio — Quick Quiz Round</h2>
            <p className="text-sm text-muted-foreground mb-4">Answer all 6 questions correctly in this round to earn coins.</p>

            {QUESTIONS.map((it, idx) => (
              <div key={idx} className="mb-4 p-3 border rounded">
                <div className="font-medium mb-2">Q{idx+1}. {it.q}</div>
                <div className="grid grid-cols-2 gap-2">
                  {it.options.map((opt,oidx) => (
                    <button key={oidx} className={`p-2 border rounded text-left ${answers[idx]===oidx ? 'bg-primary text-primary-foreground' : ''}`} onClick={() => handleSelect(idx, oidx)}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex items-center space-x-3 mt-4">
              <Button onClick={handleSubmit}>Submit Round</Button>
              <Button variant="ghost" onClick={resetRound}>Reset</Button>
              <div className="ml-auto text-sm">
                Coins: <strong>{localStorage.getItem("coins") || 0}</strong>
              </div>
            </div>

            {message && <div className="mt-4 p-3 rounded bg-green-50 border border-green-200">{message}</div>}
            {completed && <div className="mt-3 text-sm text-muted-foreground">Reload the Learning Studio to try another round.</div>}
          </div>
        </main>
      </div>
    </div>
  );
}
