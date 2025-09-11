
import React, { useEffect, useRef, useState } from "react";
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';

export default function ProgressAnalyticsCenter(){
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    // wait for Chart to be available (loaded via CDN in index.html)
    const create = () => {
      if (typeof window.Chart === 'undefined') return;
      const ctx = chartRef.current.getContext('2d');
      // simple progress over time
      new window.Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          datasets: [{ label: 'XP Earned', data: [10,20,35,50,80,90,120], fill: true }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });
    };
    create();
    window.addEventListener('load', create);
    return () => window.removeEventListener('load', create);
  },[]);

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar isCollapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(s => !s)} />
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto bg-white/60 p-6 rounded-lg border border-white/20">
            <h2 className="text-2xl font-bold mb-4">Progress Analytics</h2>
            <p className="text-sm text-muted-foreground mb-4">A quick visualization of recent activity and progress.</p>
            <div style={{height:300}}>
              <canvas ref={chartRef}></canvas>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 border rounded">
                <h4 className="font-semibold mb-2">Summary</h4>
                <p className="text-sm">Lessons completed: 12<br/>Quizzes passed: 3<br/>Coins: {localStorage.getItem("coins") || 0}</p>
              </div>
              <div className="p-4 border rounded">
                <h4 className="font-semibold mb-2">Insights</h4>
                <p className="text-sm">You tend to study more on weekdays. Try short bursts on weekends to keep streaks.</p>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
