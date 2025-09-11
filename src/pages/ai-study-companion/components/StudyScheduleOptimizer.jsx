import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StudyScheduleOptimizer = ({ upcomingExams, suggestedSchedule, peakHours }) => {
  const [selectedWeek, setSelectedWeek] = useState('current');

  const scheduleData = {
    current: [
      { day: 'Monday', date: '09 Sep', sessions: [
        { time: '09:00 AM', subject: 'Mathematics', topic: 'Algebra Basics', duration: 45, difficulty: 'medium', type: 'study' },
        { time: '04:00 PM', subject: 'Science', topic: 'Physics Review', duration: 30, difficulty: 'easy', type: 'review' }
      ]},
      { day: 'Tuesday', date: '10 Sep', sessions: [
        { time: '08:30 AM', subject: 'English', topic: 'Grammar Practice', duration: 40, difficulty: 'easy', type: 'practice' },
        { time: '03:30 PM', subject: 'History', topic: 'World War II', duration: 50, difficulty: 'hard', type: 'study' }
      ]},
      { day: 'Wednesday', date: '11 Sep', sessions: [
        { time: '09:15 AM', subject: 'Mathematics', topic: 'Geometry', duration: 60, difficulty: 'hard', type: 'study' },
        { time: '05:00 PM', subject: 'Science', topic: 'Chemistry Lab', duration: 45, difficulty: 'medium', type: 'practical' }
      ]},
      { day: 'Thursday', date: '12 Sep', sessions: [
        { time: '08:45 AM', subject: 'Geography', topic: 'Climate Zones', duration: 35, difficulty: 'medium', type: 'study' },
        { time: '04:30 PM', subject: 'English', topic: 'Essay Writing', duration: 40, difficulty: 'medium', type: 'practice' }
      ]},
      { day: 'Friday', date: '13 Sep', sessions: [
        { time: '09:00 AM', subject: 'Mathematics', topic: 'Practice Test', duration: 90, difficulty: 'hard', type: 'test' },
        { time: '02:00 PM', subject: 'Science', topic: 'Biology Review', duration: 30, difficulty: 'easy', type: 'review' }
      ]}
    ]
  };

  const getSessionTypeIcon = (type) => {
    switch (type) {
      case 'study': return 'BookOpen';
      case 'review': return 'RotateCcw';
      case 'practice': return 'PenTool';
      case 'test': return 'FileText';
      case 'practical': return 'Beaker';
      default: return 'BookOpen';
    }
  };

  const getSessionTypeColor = (type) => {
    switch (type) {
      case 'study': return 'bg-primary text-primary-foreground';
      case 'review': return 'bg-progress text-progress-foreground';
      case 'practice': return 'bg-accent text-accent-foreground';
      case 'test': return 'bg-destructive text-destructive-foreground';
      case 'practical': return 'bg-trust text-trust-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'text-progress';
      case 'medium': return 'text-accent';
      case 'hard': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
      {/* Schedule Optimizer Main */}
      <div className="lg:col-span-3 bg-card rounded-2xl p-6 border border-border shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-progress rounded-lg flex items-center justify-center">
              <Icon name="Calendar" size={18} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">AI Study Schedule</h3>
              <p className="text-sm text-muted-foreground">Optimized for your peak learning hours</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant={selectedWeek === 'current' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setSelectedWeek('current')}
            >
              This Week
            </Button>
            <Button 
              variant={selectedWeek === 'next' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setSelectedWeek('next')}
            >
              Next Week
            </Button>
            <Button variant="ghost" size="sm" iconName="Settings">
              Customize
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {scheduleData?.current?.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-muted/20 rounded-xl p-4 border border-muted">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-progress/20 rounded-lg flex flex-col items-center justify-center border border-primary/30">
                    <span className="text-xs font-medium text-primary">{day?.date?.split(' ')?.[0]}</span>
                    <span className="text-xs text-muted-foreground">{day?.date?.split(' ')?.[1]}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{day?.day}</h4>
                    <p className="text-sm text-muted-foreground">{day?.sessions?.length} study sessions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-sm text-muted-foreground">
                    Total: {day?.sessions?.reduce((acc, session) => acc + session?.duration, 0)} min
                  </div>
                  <Button variant="ghost" size="sm" iconName="Plus">
                    Add
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {day?.sessions?.map((session, sessionIndex) => (
                  <div key={sessionIndex} className="bg-card rounded-lg p-4 border border-border hover:border-primary/30 transition-all duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 ${getSessionTypeColor(session?.type)} rounded-lg flex items-center justify-center`}>
                          <Icon name={getSessionTypeIcon(session?.type)} size={14} className="text-current" />
                        </div>
                        <div>
                          <h5 className="font-medium text-foreground">{session?.subject}</h5>
                          <p className="text-sm text-muted-foreground">{session?.topic}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">{session?.time}</div>
                        <div className="text-xs text-muted-foreground">{session?.duration} min</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon name="BarChart3" size={14} className={getDifficultyColor(session?.difficulty)} />
                        <span className={`text-sm font-medium ${getDifficultyColor(session?.difficulty)}`}>
                          {session?.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" iconName="Edit2">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" iconName="Play">
                          Start
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Sidebar - Exams & Insights */}
      <div className="space-y-6">
        {/* Upcoming Exams */}
        <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-destructive rounded-lg flex items-center justify-center">
              <Icon name="AlertTriangle" size={16} className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Upcoming Exams</h4>
              <p className="text-xs text-muted-foreground">Priority scheduling</p>
            </div>
          </div>

          <div className="space-y-3">
            {upcomingExams?.map((exam, index) => (
              <div key={index} className="bg-destructive/5 border border-destructive/20 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-foreground">{exam?.subject}</h5>
                  <span className="text-xs font-medium text-destructive">{exam?.daysLeft} days</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{exam?.topic}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{exam?.date}</span>
                  <span className={`font-medium ${exam?.preparedness >= 80 ? 'text-progress' : exam?.preparedness >= 60 ? 'text-accent' : 'text-destructive'}`}>
                    {exam?.preparedness}% ready
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Peak Hours */}
        <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={16} className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Peak Hours</h4>
              <p className="text-xs text-muted-foreground">Your best learning times</p>
            </div>
          </div>

          <div className="space-y-3">
            {peakHours?.map((hour, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border border-accent/20">
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-accent" />
                  <div>
                    <div className="font-medium text-foreground">{hour?.time}</div>
                    <div className="text-xs text-muted-foreground">{hour?.period}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-accent">{hour?.efficiency}%</div>
                  <div className="text-xs text-muted-foreground">efficiency</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Lightbulb" size={14} className="text-primary" />
              <span className="text-sm font-medium text-primary">Tip</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Schedule your most challenging subjects during peak hours for maximum retention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyScheduleOptimizer;