import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActions = ({ recentActivities, quickAccessTools }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'quiz': return 'HelpCircle';
      case 'flashcard': return 'Square';
      case 'study': return 'BookOpen';
      case 'review': return 'RotateCcw';
      case 'test': return 'FileText';
      default: return 'Circle';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'quiz': return 'bg-primary text-primary-foreground';
      case 'flashcard': return 'bg-accent text-accent-foreground';
      case 'study': return 'bg-progress text-progress-foreground';
      case 'review': return 'bg-trust text-trust-foreground';
      case 'test': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-progress';
    if (score >= 75) return 'text-accent';
    if (score >= 60) return 'text-primary';
    return 'text-destructive';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Quick Access Tools */}
      <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-progress rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={18} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
              <p className="text-sm text-muted-foreground">Jump into learning instantly</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" iconName="Settings">
            Customize
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {quickAccessTools?.map((tool, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-24 flex flex-col items-center justify-center space-y-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
            >
              <div className={`w-10 h-10 ${tool?.color} rounded-lg flex items-center justify-center`}>
                <Icon name={tool?.icon} size={20} className="text-white" />
              </div>
              <div className="text-center">
                <div className="font-medium text-foreground">{tool?.name}</div>
                <div className="text-xs text-muted-foreground">{tool?.description}</div>
              </div>
            </Button>
          ))}
        </div>

        {/* AI Assistant Chat */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-4 border border-primary/20">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="MessageCircle" size={16} className="text-white" />
            </div>
            <div>
              <h4 className="font-medium text-foreground">Ask AI Assistant</h4>
              <p className="text-sm text-muted-foreground">Get instant help with any topic</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-white rounded-lg px-3 py-2 border border-border">
              <input 
                type="text" 
                placeholder="What would you like to learn about?"
                className="w-full text-sm text-foreground placeholder-muted-foreground bg-transparent border-none outline-none"
              />
            </div>
            <Button size="sm" iconName="Send">
              Ask
            </Button>
          </div>
        </div>
      </div>
      {/* Recent Activities */}
      <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-trust to-primary rounded-lg flex items-center justify-center">
              <Icon name="History" size={18} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Recent Activities</h3>
              <p className="text-sm text-muted-foreground">Continue where you left off</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" iconName="ExternalLink">
            View All
          </Button>
        </div>

        <div className="space-y-4">
          {recentActivities?.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-xl border border-muted hover:border-primary/30 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 ${getActivityColor(activity?.type)} rounded-lg flex items-center justify-center`}>
                  <Icon name={getActivityIcon(activity?.type)} size={18} className="text-current" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground truncate">{activity?.title}</h4>
                  <p className="text-sm text-muted-foreground">{activity?.subject} • {activity?.timeAgo}</p>
                  {activity?.progress && (
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-16 bg-muted rounded-full h-1.5">
                        <div 
                          className="bg-primary h-1.5 rounded-full transition-all duration-300"
                          style={{ width: `${activity?.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity?.progress}%</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                {activity?.score && (
                  <div className="text-right">
                    <div className={`text-lg font-bold ${getScoreColor(activity?.score)}`}>
                      {activity?.score}%
                    </div>
                    <div className="text-xs text-muted-foreground">Score</div>
                  </div>
                )}
                <Button variant="ghost" size="sm" iconName="Play">
                  Continue
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Study Streak */}
        <div className="mt-6 p-4 bg-gradient-to-r from-progress/10 to-accent/10 rounded-xl border border-progress/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-progress to-accent rounded-lg flex items-center justify-center">
                <Icon name="Flame" size={18} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Study Streak</h4>
                <p className="text-sm text-muted-foreground">Keep the momentum going!</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-progress">12</div>
              <div className="text-sm text-muted-foreground">days</div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="flex space-x-1">
              {[...Array(7)]?.map((_, i) => (
                <div 
                  key={i}
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    i < 5 ? 'bg-progress text-progress-foreground' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" iconName="Calendar">
              View Calendar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;