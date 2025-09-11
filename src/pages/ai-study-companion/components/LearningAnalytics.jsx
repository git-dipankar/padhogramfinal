import React from 'react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';
import Icon from '../../../components/AppIcon';

const LearningAnalytics = ({ subjectStrengths, progressTrends, knowledgeGaps }) => {
  const radarData = [
    { subject: 'Mathematics', strength: subjectStrengths?.mathematics, fullMark: 100 },
    { subject: 'Science', strength: subjectStrengths?.science, fullMark: 100 },
    { subject: 'English', strength: subjectStrengths?.english, fullMark: 100 },
    { subject: 'History', strength: subjectStrengths?.history, fullMark: 100 },
    { subject: 'Geography', strength: subjectStrengths?.geography, fullMark: 100 },
    { subject: 'Hindi', strength: subjectStrengths?.hindi, fullMark: 100 }
  ];

  const trendData = [
    { week: 'Week 1', score: 65, time: 120 },
    { week: 'Week 2', score: 72, time: 135 },
    { week: 'Week 3', score: 68, time: 140 },
    { week: 'Week 4', score: 78, time: 155 },
    { week: 'Week 5', score: 82, time: 160 },
    { week: 'Week 6', score: 85, time: 175 }
  ];

  const gapData = [
    { topic: 'Algebra', difficulty: 85, improvement: 15 },
    { topic: 'Grammar', difficulty: 70, improvement: 30 },
    { topic: 'Physics', difficulty: 75, improvement: 25 },
    { topic: 'History', difficulty: 60, improvement: 40 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* Subject Strengths Radar */}
      <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Radar" size={18} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Subject Strengths</h3>
              <p className="text-sm text-muted-foreground">Your performance across subjects</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-sm text-muted-foreground">Your Level</span>
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: '#6b7280' }} />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fontSize: 10, fill: '#6b7280' }}
                tickCount={5}
              />
              <Radar
                name="Strength"
                dataKey="strength"
                stroke="#1e3a8a"
                fill="#1e3a8a"
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Progress Trends */}
      <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-progress rounded-lg flex items-center justify-center">
              <Icon name="TrendingUp" size={18} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Progress Trends</h3>
              <p className="text-sm text-muted-foreground">Weekly performance overview</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-progress rounded-full"></div>
              <span className="text-muted-foreground">Score</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-muted-foreground">Study Time</span>
            </div>
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis 
                dataKey="week" 
                tick={{ fontSize: 12, fill: '#6b7280' }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <YAxis 
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
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="time" 
                stroke="#f59e0b" 
                strokeWidth={3}
                dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Knowledge Gaps - Skill Challenges */}
      <div className="lg:col-span-2 bg-card rounded-2xl p-6 border border-border shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Target" size={18} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Skill Challenges</h3>
              <p className="text-sm text-muted-foreground">Areas with the highest growth potential</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Info" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Focus areas for improvement</span>
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={gapData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis 
                type="number" 
                domain={[0, 100]}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <YAxis 
                type="category" 
                dataKey="topic"
                tick={{ fontSize: 12, fill: '#6b7280' }}
                axisLine={{ stroke: '#e5e7eb' }}
                width={80}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Bar 
                dataKey="difficulty" 
                fill="#dc2626" 
                radius={[0, 4, 4, 0]}
                name="Challenge Level"
              />
              <Bar 
                dataKey="improvement" 
                fill="#10b981" 
                radius={[0, 4, 4, 0]}
                name="Growth Potential"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default LearningAnalytics;