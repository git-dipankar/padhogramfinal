import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import WelcomeHeader from './components/WelcomeHeader';
import LearningAnalytics from './components/LearningAnalytics';
import AIRecommendations from './components/AIRecommendations';
import PerformanceInsights from './components/PerformanceInsights';
import StudyScheduleOptimizer from './components/StudyScheduleOptimizer';
import QuickActions from './components/QuickActions';

const AIStudyCompanion = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now?.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Mock data for welcome header
  const welcomeData = {
    userName: "Arjun",
    currentTime: currentTime,
    studyStreak: 12,
    todayGoals: { completed: 5, total: 7 }
  };

  // Mock data for learning analytics
  const analyticsData = {
    subjectStrengths: {
      mathematics: 85,
      science: 92,
      english: 78,
      history: 88,
      geography: 82,
      hindi: 75
    },
    progressTrends: [
      { week: 'Week 1', score: 65, time: 120 },
      { week: 'Week 2', score: 72, time: 135 },
      { week: 'Week 3', score: 68, time: 140 },
      { week: 'Week 4', score: 78, time: 155 },
      { week: 'Week 5', score: 82, time: 160 },
      { week: 'Week 6', score: 85, time: 175 }
    ],
    knowledgeGaps: [
      { topic: 'Algebra', difficulty: 85, improvement: 15 },
      { topic: 'Grammar', difficulty: 70, improvement: 30 },
      { topic: 'Physics', difficulty: 75, improvement: 25 },
      { topic: 'History', difficulty: 60, improvement: 40 }
    ]
  };

  // Mock data for AI recommendations
  const recommendationsData = {
    recommendations: [
      {
        title: "Master Quadratic Equations",
        subject: "Mathematics",
        description: "Based on your recent quiz performance, focus on solving quadratic equations using different methods.",
        priority: "high",
        icon: "Calculator",
        estimatedTime: 45,
        completionRate: 78
      },
      {
        title: "English Grammar Boost",
        subject: "English",
        description: "Strengthen your understanding of complex sentence structures and punctuation rules.",
        priority: "medium",
        icon: "BookOpen",
        estimatedTime: 30,
        completionRate: 85
      },
      {
        title: "Physics Lab Review",
        subject: "Science",
        description: "Review recent lab experiments and understand the underlying scientific principles.",
        priority: "medium",
        icon: "Beaker",
        estimatedTime: 25,
        completionRate: 92
      },
      {
        title: "History Timeline Practice",
        subject: "History",
        description: "Practice chronological ordering of historical events for better retention.",
        priority: "low",
        icon: "Clock",
        estimatedTime: 20,
        completionRate: 67
      }
    ],
    studyPaths: [
      {
        title: "Mathematics Mastery Path",
        description: "Complete algebra to advanced calculus",
        icon: "Calculator",
        difficulty: "Hard",
        totalLessons: 24,
        completedLessons: 16,
        estimatedHours: 48,
        participants: ["Rahul", "Priya", "Amit"],
        totalParticipants: 156
      },
      {
        title: "Science Explorer Journey",
        description: "Physics, Chemistry & Biology fundamentals",
        icon: "Atom",
        difficulty: "Medium",
        totalLessons: 18,
        completedLessons: 12,
        estimatedHours: 36,
        participants: ["Sneha", "Vikram", "Anita"],
        totalParticipants: 203
      },
      {
        title: "English Communication Skills",
        description: "Grammar, writing & speaking excellence",
        icon: "MessageSquare",
        difficulty: "Easy",
        totalLessons: 15,
        completedLessons: 10,
        estimatedHours: 25,
        participants: ["Kavya", "Rohan", "Meera"],
        totalParticipants: 89
      }
    ]
  };

  // Mock data for performance insights
  const performanceData = {
    peerComparison: [
      { category: 'Mathematics', you: 85, peers: 78, national: 72 },
      { category: 'Science', you: 92, peers: 85, national: 80 },
      { category: 'English', you: 78, peers: 82, national: 75 },
      { category: 'History', you: 88, peers: 80, national: 76 },
      { category: 'Geography', you: 82, peers: 79, national: 74 }
    ],
    nationalAverages: {
      mathematics: 72,
      science: 80,
      english: 75,
      history: 76,
      geography: 74
    },
    studyPatterns: {
      morning: 35,
      afternoon: 25,
      evening: 30,
      night: 10
    }
  };

  // Mock data for study schedule optimizer
  const scheduleData = {
    upcomingExams: [
      {
        subject: "Mathematics",
        topic: "Algebra & Geometry",
        date: "Sep 25, 2024",
        daysLeft: 16,
        preparedness: 75
      },
      {
        subject: "Science",
        topic: "Physics & Chemistry",
        date: "Oct 02, 2024",
        daysLeft: 23,
        preparedness: 85
      },
      {
        subject: "English",
        topic: "Literature & Grammar",
        date: "Oct 08, 2024",
        daysLeft: 29,
        preparedness: 65
      }
    ],
    suggestedSchedule: [],
    peakHours: [
      { time: "8:00 - 10:00 AM", period: "Morning", efficiency: 95 },
      { time: "4:00 - 6:00 PM", period: "Evening", efficiency: 88 },
      { time: "7:00 - 9:00 PM", period: "Night", efficiency: 72 }
    ]
  };

  // Mock data for quick actions
  const quickActionsData = {
    recentActivities: [
      {
        title: "Algebra Practice Quiz",
        subject: "Mathematics",
        type: "quiz",
        timeAgo: "2 hours ago",
        score: 85,
        progress: 100
      },
      {
        title: "Physics Flashcards",
        subject: "Science",
        type: "flashcard",
        timeAgo: "5 hours ago",
        progress: 75
      },
      {
        title: "Grammar Study Session",
        subject: "English",
        type: "study",
        timeAgo: "1 day ago",
        progress: 60
      },
      {
        title: "History Timeline Review",
        subject: "History",
        type: "review",
        timeAgo: "2 days ago",
        score: 92,
        progress: 100
      },
      {
        title: "Geography Mock Test",
        subject: "Geography",
        type: "test",
        timeAgo: "3 days ago",
        score: 78,
        progress: 100
      }
    ],
    quickAccessTools: [
      {
        name: "AI Quiz",
        description: "Smart questions",
        icon: "Brain",
        color: "bg-primary"
      },
      {
        name: "Flashcards",
        description: "Quick review",
        icon: "Square",
        color: "bg-accent"
      },
      {
        name: "Study Timer",
        description: "Focus sessions",
        icon: "Timer",
        color: "bg-progress"
      },
      {
        name: "Progress",
        description: "Track growth",
        icon: "TrendingUp",
        color: "bg-trust"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        isCollapsed={sidebarCollapsed} 
        onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />

      <main className={`transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-80'} pt-16`}>
        <div className="p-6 max-w-7xl mx-auto">
          {/* Welcome Header */}
          <WelcomeHeader {...welcomeData} />

          {/* Learning Analytics */}
          <LearningAnalytics {...analyticsData} />

          {/* AI Recommendations */}
          <AIRecommendations {...recommendationsData} />

          {/* Performance Insights */}
          <PerformanceInsights {...performanceData} />

          {/* Study Schedule Optimizer */}
          <StudyScheduleOptimizer {...scheduleData} />

          {/* Quick Actions */}
          <QuickActions {...quickActionsData} />
        </div>
      </main>
    </div>
  );
};

export default AIStudyCompanion;