import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AchievementShowcase = () => {
  const [activeTab, setActiveTab] = useState('leaderboard');
  const [currentRank, setCurrentRank] = useState(0);

  const leaderboardData = [
    {
      rank: 1,
      name: 'Aarav Gupta',
      school: 'Delhi Public School',
      points: 15420,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      streak: 45,
      badge: 'Champion',
      subjects: ['Math', 'Science', 'English']
    },
    {
      rank: 2,
      name: 'Ishita Sharma',
      school: 'Kendriya Vidyalaya',
      points: 14850,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      streak: 38,
      badge: 'Expert',
      subjects: ['Science', 'Math', 'Computer']
    },
    {
      rank: 3,
      name: 'Arjun Patel',
      school: 'St. Xavier\'s School',
      points: 14200,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      streak: 42,
      badge: 'Master',
      subjects: ['English', 'Social', 'Hindi']
    },
    {
      rank: 4,
      name: 'Priya Singh',
      school: 'Ryan International',
      points: 13980,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      streak: 35,
      badge: 'Scholar',
      subjects: ['Math', 'Science']
    },
    {
      rank: 5,
      name: 'Rohit Kumar',
      school: 'Modern School',
      points: 13750,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      streak: 40,
      badge: 'Achiever',
      subjects: ['Computer', 'Math', 'Science']
    }
  ];

  const recentAchievements = [
    {
      id: 1,
      student: 'Kavya Reddy',
      achievement: 'Mathematics Mastery',
      description: 'Completed all Algebra modules with 95% accuracy',
      time: '2 minutes ago',
      icon: 'Calculator',
      color: 'bg-primary'
    },
    {
      id: 2,
      student: 'Aditya Jain',
      achievement: 'Science Explorer',
      description: 'Solved 100 physics problems in a row',
      time: '5 minutes ago',
      icon: 'Atom',
      color: 'bg-progress'
    },
    {
      id: 3,
      student: 'Sneha Agarwal',
      achievement: 'Language Expert',
      description: 'Perfect score in English grammar quiz',
      time: '8 minutes ago',
      icon: 'BookOpen',
      color: 'bg-accent'
    },
    {
      id: 4,
      student: 'Vikram Singh',
      achievement: 'Code Warrior',
      description: 'Built first Python program successfully',
      time: '12 minutes ago',
      icon: 'Code',
      color: 'bg-destructive'
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'Advanced Mathematics',
      level: 'Level 3',
      progress: 85,
      requirements: '45/50 modules completed',
      icon: 'Award',
      color: 'bg-achievement'
    },
    {
      id: 2,
      title: 'Science Fundamentals',
      level: 'Level 2',
      progress: 92,
      requirements: '23/25 experiments done',
      icon: 'Medal',
      color: 'bg-progress'
    },
    {
      id: 3,
      title: 'English Proficiency',
      level: 'Level 4',
      progress: 78,
      requirements: '39/50 essays graded',
      icon: 'Trophy',
      color: 'bg-primary'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRank((prev) => (prev + 1) % leaderboardData?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [leaderboardData?.length]);

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Champion': return 'bg-achievement text-achievement-foreground';
      case 'Expert': return 'bg-primary text-primary-foreground';
      case 'Master': return 'bg-progress text-progress-foreground';
      case 'Scholar': return 'bg-accent text-accent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const tabs = [
    { id: 'leaderboard', name: 'Live Rankings', icon: 'Trophy' },
    { id: 'achievements', name: 'Recent Wins', icon: 'Award' },
    { id: 'certifications', name: 'Certifications', icon: 'Medal' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-achievement/10 border border-achievement/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Trophy" size={16} className="text-achievement" />
            <span className="text-sm font-medium text-achievement">Achievement Hub</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Celebrate Your <span className="gradient-text">Learning Victories</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your progress, compete with peers, and earn certifications that showcase your academic excellence
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === tab?.id
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-card border border-border text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={tab?.icon} size={18} />
              <span>{tab?.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'leaderboard' && (
            <motion.div
              key="leaderboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {/* Leaderboard */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">National Rankings</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-progress rounded-full animate-pulse"></div>
                    <span>Live Updates</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {leaderboardData?.map((student, index) => (
                    <motion.div
                      key={student?.rank}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center space-x-4 p-4 rounded-xl transition-all ${
                        index === currentRank 
                          ? 'bg-primary/10 border border-primary/20 scale-105' :'bg-muted/50 hover:bg-muted'
                      }`}
                    >
                      {/* Rank */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        student?.rank === 1 ? 'bg-achievement text-achievement-foreground' :
                        student?.rank === 2 ? 'bg-muted-foreground text-background' :
                        student?.rank === 3 ? 'bg-accent text-accent-foreground': 'bg-muted text-muted-foreground'
                      }`}>
                        {student?.rank}
                      </div>

                      {/* Avatar */}
                      <Image
                        src={student?.avatar}
                        alt={student?.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      {/* Student Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-foreground truncate">{student?.name}</h4>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getBadgeColor(student?.badge)}`}>
                            {student?.badge}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{student?.school}</p>
                        <div className="flex items-center space-x-3 mt-1">
                          <div className="flex items-center space-x-1">
                            <Icon name="Flame" size={12} className="text-achievement" />
                            <span className="text-xs text-muted-foreground">{student?.streak} days</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Star" size={12} className="text-primary" />
                            <span className="text-xs text-muted-foreground">{student?.points?.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* Subjects */}
                      <div className="hidden sm:flex flex-col items-end space-y-1">
                        {student?.subjects?.slice(0, 2)?.map((subject, idx) => (
                          <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button className="text-primary hover:text-primary/80 font-medium text-sm">
                    View Full Rankings →
                  </button>
                </div>
              </div>

              {/* Spotlight Student */}
              <div className="bg-gradient-to-br from-achievement/10 to-primary/10 border border-achievement/20 rounded-2xl p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center space-x-2 bg-achievement/20 rounded-full px-3 py-1 mb-4">
                    <Icon name="Crown" size={14} className="text-achievement" />
                    <span className="text-sm font-medium text-achievement">Student Spotlight</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">This Week's Champion</h3>
                </div>

                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <Image
                      src={leaderboardData?.[0]?.avatar}
                      alt={leaderboardData?.[0]?.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-achievement rounded-full flex items-center justify-center achievement-pulse">
                      <Icon name="Crown" size={16} className="text-achievement-foreground" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-foreground">{leaderboardData?.[0]?.name}</h4>
                    <p className="text-muted-foreground">{leaderboardData?.[0]?.school}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-achievement">{leaderboardData?.[0]?.points?.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Points</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{leaderboardData?.[0]?.streak}</div>
                      <div className="text-sm text-muted-foreground">Day Streak</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-progress">{leaderboardData?.[0]?.subjects?.length}</div>
                      <div className="text-sm text-muted-foreground">Subjects</div>
                    </div>
                  </div>

                  <div className="bg-card/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground italic">
                      "PadhoGram's gamified approach made learning addictive. I never thought I'd enjoy studying this much!"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'achievements' && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">Recent Achievements</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-progress rounded-full animate-pulse"></div>
                    <span>Real-time Updates</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {recentAchievements?.map((achievement, index) => (
                    <motion.div
                      key={achievement?.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                    >
                      <div className={`w-12 h-12 ${achievement?.color} rounded-xl flex items-center justify-center`}>
                        <Icon name={achievement?.icon} size={20} className="text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-foreground">{achievement?.student}</h4>
                          <span className="text-sm text-muted-foreground">{achievement?.time}</span>
                        </div>
                        <p className="font-medium text-primary mb-1">{achievement?.achievement}</p>
                        <p className="text-sm text-muted-foreground">{achievement?.description}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Icon name="Heart" size={16} className="text-destructive" />
                        <Icon name="MessageCircle" size={16} className="text-muted-foreground" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'certifications' && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certifications?.map((cert, index) => (
                <motion.div
                  key={cert?.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 hover-lift"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${cert?.color} rounded-xl flex items-center justify-center`}>
                      <Icon name={cert?.icon} size={24} className="text-white" />
                    </div>
                    <span className="text-sm bg-muted px-3 py-1 rounded-full font-medium">
                      {cert?.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">{cert?.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cert?.requirements}</p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium text-foreground">{cert?.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${cert?.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-primary/10 hover:bg-primary/20 text-primary font-medium py-2 rounded-lg transition-colors">
                    Continue Learning
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AchievementShowcase;