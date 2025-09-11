import React from 'react';
import Icon from '../../../components/AppIcon';

const WelcomeHeader = ({ userName, currentTime, studyStreak, todayGoals }) => {
  const getGreeting = () => {
    const hour = new Date()?.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getMotivationalMessage = () => {
    const messages = [
      "Ready to unlock new knowledge today?",
      "Your learning journey continues!",
      "Time to level up your skills!",
      "Every question makes you stronger!",
      "Let\'s achieve something amazing today!"
    ];
    return messages?.[Math.floor(Math.random() * messages?.length)];
  };

  return (
    <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-progress/10 rounded-2xl p-6 mb-6 border border-primary/20">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Icon name="Bot" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {getGreeting()}, {userName}!
              </h1>
              <p className="text-muted-foreground">{getMotivationalMessage()}</p>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-sm text-muted-foreground mb-1">Current Time</div>
          <div className="text-lg font-semibold text-foreground">{currentTime}</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/50 rounded-lg p-4 border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-progress rounded-lg flex items-center justify-center">
              <Icon name="Flame" size={18} className="text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{studyStreak}</div>
              <div className="text-sm text-muted-foreground">Day Study Streak</div>
            </div>
          </div>
        </div>

        <div className="bg-white/50 rounded-lg p-4 border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Target" size={18} className="text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{todayGoals?.completed}/{todayGoals?.total}</div>
              <div className="text-sm text-muted-foreground">Today's Goals</div>
            </div>
          </div>
        </div>

        <div className="bg-white/50 rounded-lg p-4 border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Brain" size={18} className="text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">AI</div>
              <div className="text-sm text-muted-foreground">Ready to Help</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;