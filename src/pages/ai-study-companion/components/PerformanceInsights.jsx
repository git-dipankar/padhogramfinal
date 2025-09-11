import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';

const PerformanceInsights = ({ peerComparison, nationalAverages, studyPatterns }) => {
  const comparisonData = [
    { category: 'Mathematics', you: 85, peers: 78, national: 72 },
    { category: 'Science', you: 92, peers: 85, national: 80 },
    { category: 'English', you: 78, peers: 82, national: 75 },
    { category: 'History', you: 88, peers: 80, national: 76 },
    { category: 'Geography', you: 82, peers: 79, national: 74 }
  ];

  const studyTimeData = [
    { name: 'Morning', value: 35, color: '#10b981' },
    { name: 'Afternoon', value: 25, color: '#f59e0b' },
    { name: 'Evening', value: 30, color: '#1e3a8a' },
    { name: 'Night', value: 10, color: '#6b7280' }
  ];

  const getPerformanceIcon = (yourScore, peerScore) => {
    if (yourScore > peerScore + 5) return { icon: 'TrendingUp', color: 'text-progress' };
    if (yourScore < peerScore - 5) return { icon: 'TrendingDown', color: 'text-destructive' };
    return { icon: 'Minus', color: 'text-accent' };
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      {/* Peer Comparison */}
      <div className="lg:col-span-2 bg-card rounded-2xl p-6 border border-border shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-trust rounded-lg flex items-center justify-center">
              <Icon name="Users" size={18} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Performance Comparison</h3>
              <p className="text-sm text-muted-foreground">You vs peers & national average</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">You</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-muted-foreground">Peers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-muted rounded-full"></div>
              <span className="text-muted-foreground">National</span>
            </div>
          </div>
        </div>

        <div className="h-64 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis 
                dataKey="category" 
                tick={{ fontSize: 12, fill: '#6b7280' }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <YAxis 
                domain={[0, 100]}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Bar dataKey="you" fill="#1e3a8a" radius={[2, 2, 0, 0]} name="Your Score" />
              <Bar dataKey="peers" fill="#f59e0b" radius={[2, 2, 0, 0]} name="Peer Average" />
              <Bar dataKey="national" fill="#9ca3af" radius={[2, 2, 0, 0]} name="National Average" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {comparisonData?.map((item, index) => {
            const performance = getPerformanceIcon(item?.you, item?.peers);
            return (
              <div key={index} className="bg-muted/30 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Icon name={performance?.icon} size={16} className={performance?.color} />
                </div>
                <div className="text-sm font-medium text-foreground">{item?.category}</div>
                <div className="text-xs text-muted-foreground">
                  {item?.you > item?.peers ? '+' : ''}{item?.you - item?.peers} vs peers
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Study Patterns */}
      <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Clock" size={18} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Study Patterns</h3>
              <p className="text-sm text-muted-foreground">Your learning habits</p>
            </div>
          </div>
        </div>

        <div className="h-48 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={studyTimeData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {studyTimeData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry?.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-3">
          {studyTimeData?.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item?.color }}
                ></div>
                <span className="text-sm font-medium text-foreground">{item?.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">{item?.value}%</span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Lightbulb" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">AI Insight</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Your peak performance is during morning hours. Consider scheduling challenging topics between 8-11 AM for optimal results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceInsights;