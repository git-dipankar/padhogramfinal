import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AIRecommendations = ({ recommendations, studyPaths }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'bg-progress text-progress-foreground';
      case 'medium': return 'bg-accent text-accent-foreground';
      case 'hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getEstimatedTimeIcon = (time) => {
    if (time <= 15) return 'Clock3';
    if (time <= 30) return 'Clock6';
    if (time <= 60) return 'Clock9';
    return 'Clock12';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* AI Study Recommendations */}
      <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={18} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">AI Recommendations</h3>
              <p className="text-sm text-muted-foreground">Personalized study suggestions</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full">
            <Icon name="Brain" size={14} className="text-primary" />
            <span className="text-sm font-medium text-primary">Smart AI</span>
          </div>
        </div>

        <div className="space-y-4">
          {recommendations?.map((rec, index) => (
            <div key={index} className="bg-muted/30 rounded-xl p-4 border border-muted hover:border-primary/30 transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 ${rec?.priority === 'high' ? 'bg-destructive' : rec?.priority === 'medium' ? 'bg-accent' : 'bg-progress'} rounded-lg flex items-center justify-center`}>
                    <Icon name={rec?.icon} size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{rec?.title}</h4>
                    <p className="text-sm text-muted-foreground">{rec?.subject}</p>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${rec?.priority === 'high' ? 'bg-destructive/10 text-destructive' : rec?.priority === 'medium' ? 'bg-accent/10 text-accent' : 'bg-progress/10 text-progress'}`}>
                  {rec?.priority} priority
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">{rec?.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name={getEstimatedTimeIcon(rec?.estimatedTime)} size={14} />
                    <span>{rec?.estimatedTime} min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={14} />
                    <span>{rec?.completionRate}% completion</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" iconName="ArrowRight" iconPosition="right">
                  Start
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Study Path Journeys */}
      <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-progress to-accent rounded-lg flex items-center justify-center">
              <Icon name="Route" size={18} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Learning Journeys</h3>
              <p className="text-sm text-muted-foreground">Structured study paths</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" iconName="Plus">
            Create Path
          </Button>
        </div>

        <div className="space-y-4">
          {studyPaths?.map((path, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-r from-primary/5 to-progress/5 rounded-xl p-4 border border-primary/20 hover:border-primary/40 transition-all duration-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-progress rounded-lg flex items-center justify-center">
                      <Icon name={path?.icon} size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{path?.title}</h4>
                      <p className="text-sm text-muted-foreground">{path?.description}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(path?.difficulty)}`}>
                    {path?.difficulty}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="BookOpen" size={14} />
                      <span>{path?.totalLessons} lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{path?.estimatedHours}h total</span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {path?.completedLessons}/{path?.totalLessons} completed
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-primary to-progress h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(path?.completedLessons / path?.totalLessons) * 100}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {path?.participants?.slice(0, 3)?.map((participant, idx) => (
                        <div key={idx} className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-xs font-medium text-white">{participant?.charAt(0)}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">+{path?.totalParticipants - 3} others</span>
                  </div>
                  <Button variant="default" size="sm" iconName="Play" iconPosition="left">
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIRecommendations;