import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Sidebar = ({ isCollapsed = false, onToggle }) => {
  const [activeSection, setActiveSection] = useState('learning');
  const location = useLocation();

  const navigationSections = {
    learning: {
      title: 'Learning Hub',
      icon: 'GraduationCap',
      items: [
        { name: 'Home', path: '/homepage', icon: 'Home', description: 'Dashboard & Overview' },
        { name: 'Learning Studio', path: '/interactive-learning-studio', icon: 'BookOpen', description: 'Interactive Lessons' },
        { name: 'AI Companion', path: '/ai-study-companion', icon: 'Bot', description: 'Personalized Assistance' },
        { name: 'Resources', path: '/resource-discovery-center', icon: 'Library', description: 'Study Materials' },
      ]
    },
    analytics: {
      title: 'Progress & Insights',
      icon: 'TrendingUp',
      items: [
        { name: 'Analytics Center', path: '/progress-analytics-center', icon: 'BarChart3', description: 'Performance Tracking' },
        { name: 'Achievements', path: '/achievements', icon: 'Award', description: 'Milestones & Badges' },
        { name: 'Study Streaks', path: '/streaks', icon: 'Flame', description: 'Learning Consistency' },
      ]
    },
    community: {
      title: 'Community & Support',
      icon: 'Users',
      items: [
        { name: 'School Portal', path: '/school-integration-portal', icon: 'School', description: 'Institution Dashboard' },
        { name: 'Study Groups', path: '/study-groups', icon: 'UserCheck', description: 'Collaborative Learning' },
        { name: 'Peer Connect', path: '/peer-connect', icon: 'MessageCircle', description: 'Student Network' },
      ]
    }
  };

  const quickActions = [
    { name: 'Start Quiz', icon: 'Play', color: 'bg-primary', action: () => console.log('Start Quiz') },
    { name: 'AI Help', icon: 'Sparkles', color: 'bg-accent', action: () => console.log('AI Help') },
    { name: 'Progress', icon: 'TrendingUp', color: 'bg-progress', action: () => console.log('Progress') },
  ];

  const isActivePath = (path) => location?.pathname === path;

  const getCurrentSection = () => {
    for (const [sectionKey, section] of Object.entries(navigationSections)) {
      if (section?.items?.some(item => isActivePath(item?.path))) {
        return sectionKey;
      }
    }
    return 'learning';
  };

  useEffect(() => {
    setActiveSection(getCurrentSection());
  }, [location?.pathname]);

  const ProgressRing = ({ progress, size = 40 }) => {
    const radius = (size - 4) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${(progress / 100) * circumference} ${circumference}`;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            className="text-muted"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            className="text-progress transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium text-foreground">{progress}%</span>
        </div>
      </div>
    );
  };

  return (
    <aside
      className={`fixed left-0 top-16 bottom-0 z-40 bg-background border-r border-border transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-80'
      } lg:fixed`}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-border">
          {!isCollapsed && (
            <div className="space-y-4">
              {/* Daily Progress */}
              <div className="bg-gradient-to-r from-primary/10 to-progress/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground">Today's Progress</h3>
                    <p className="text-sm text-muted-foreground">Keep up the great work!</p>
                  </div>
                  <ProgressRing progress={68} />
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} className="text-primary" />
                    <span className="text-muted-foreground">2h 15m</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Target" size={14} className="text-progress" />
                    <span className="text-muted-foreground">5/7 goals</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Quick Actions
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {quickActions?.map((action, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className={`flex flex-col items-center space-y-1 h-auto py-3 ${action?.color}/10 hover:${action?.color}/20 border border-${action?.color}/20`}
                      onClick={action?.action}
                    >
                      <div className={`w-8 h-8 ${action?.color} rounded-lg flex items-center justify-center`}>
                        <Icon name={action?.icon} size={16} className="text-white" />
                      </div>
                      <span className="text-xs font-medium">{action?.name}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {isCollapsed && (
            <div className="flex flex-col items-center space-y-4">
              <ProgressRing progress={68} size={32} />
              <div className="flex flex-col space-y-2">
                {quickActions?.map((action, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={`${action?.color}/10 hover:${action?.color}/20`}
                    onClick={action?.action}
                  >
                    <Icon name={action?.icon} size={16} />
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-4 space-y-6">
            {Object.entries(navigationSections)?.map(([sectionKey, section]) => (
              <div key={sectionKey}>
                {!isCollapsed && (
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide flex items-center space-x-2">
                      <Icon name={section?.icon} size={14} />
                      <span>{section?.title}</span>
                    </h4>
                    {activeSection === sectionKey && (
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    )}
                  </div>
                )}

                <nav className="space-y-1">
                  {section?.items?.map((item) => (
                    <a
                      key={item?.path}
                      href={item?.path}
                      className={`group flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActivePath(item?.path)
                          ? 'bg-primary text-primary-foreground shadow-soft'
                          : 'text-foreground hover:bg-muted hover:text-primary'
                      } ${isCollapsed ? 'justify-center' : ''}`}
                    >
                      <Icon 
                        name={item?.icon} 
                        size={18} 
                        className={isActivePath(item?.path) ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-primary'}
                      />
                      {!isCollapsed && (
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="truncate">{item?.name}</span>
                            {isActivePath(item?.path) && (
                              <Icon name="ChevronRight" size={14} className="text-primary-foreground" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground group-hover:text-primary/70 truncate">
                            {item?.description}
                          </p>
                        </div>
                      )}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-border">
          {!isCollapsed && (
            <div className="space-y-3">
              {/* Achievement Highlight */}
              <div className="bg-achievement/10 border border-achievement/20 rounded-lg p-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-achievement rounded-lg flex items-center justify-center achievement-pulse">
                    <Icon name="Trophy" size={18} className="text-achievement-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">Weekly Champion!</p>
                    <p className="text-xs text-muted-foreground">You're in the top 10%</p>
                  </div>
                </div>
              </div>

              {/* Settings & Help */}
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="flex-1">
                  <Icon name="Settings" size={16} />
                  <span className="ml-2">Settings</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="HelpCircle" size={16} />
                </Button>
              </div>
            </div>
          )}

          {isCollapsed && (
            <div className="flex flex-col items-center space-y-3">
              <div className="w-10 h-10 bg-achievement rounded-lg flex items-center justify-center achievement-pulse">
                <Icon name="Trophy" size={18} className="text-achievement-foreground" />
              </div>
              <div className="flex flex-col space-y-2">
                <Button variant="ghost" size="icon">
                  <Icon name="Settings" size={16} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="HelpCircle" size={16} />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;