
import React, { useState, useRef, useEffect } from "react";
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import Button from '../../components/ui/Button';

const canned = {
  "hello": "Hi! I'm your study buddy. Ask me about math, science, or study tips.",
  "hi": "Hello! Need help with a topic or a quick suggestion on how to study?",
  "math": "For math, try breaking problems into steps. Want a worked example?",
  "science": "Science is best learned with experiments. Which topic?",
  "english": "Read short passages and summarize them. I can give you an exercise."
};

function getReply(msg){
  const m = msg.trim().toLowerCase();
  if (canned[m]) return canned[m];
  if (m.includes("help") || m.includes("how")) return "Tell me the topic you're stuck on and I'll try to guide you.";
  if (m.length < 3) return "Can you add a few more words so I can help?";
  return "That's interesting — try asking for an example or a brief explanation of the topic.";
}

export default function AIHelp(){
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [messages, setMessages] = useState([{from:'bot', text:"Hi — I'm the AI helper. How can I assist you?"}]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(()=> endRef.current?.scrollIntoView({behavior:'smooth'}), [messages]);

  const send = () => {
    if (!input.trim()) return;
    setMessages(m => [...m, {from:'user', text: input}]);
    const reply = getReply(input);
    setTimeout(()=> setMessages(m => [...m, {from:'bot', text: reply}]), 600);
    setInput("");
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar isCollapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(s => !s)} />
        <main className="flex-1 p-8">
          <div className="max-w-3xl mx-auto bg-white/60 p-6 rounded-lg border border-white/20">
            <h2 className="text-2xl font-bold mb-4">AI Help — Study Companion</h2>

            <div className="h-80 overflow-auto border rounded p-3 bg-muted mb-3">
              {messages.map((m,i) => (
                <div key={i} className={`mb-2 ${m.from==='user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-2 rounded ${m.from==='user' ? 'bg-primary text-primary-foreground' : 'bg-white/80'}`}>{m.text}</div>
                </div>
              ))}
              <div ref={endRef}></div>
            </div>

            <div className="flex items-center space-x-2">
              <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Ask a study question..." className="flex-1 p-2 border rounded" />
              <Button onClick={send}>Send</Button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
