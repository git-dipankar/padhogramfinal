import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrendingTopics = () => {
  const trendingTopics = [
    {
      id: 1,
      title: "CBSE Board Exam Preparation",
      subject: "General",
      difficulty: "Advanced",
      studentsEngaged: 15420,
      trend: "up",
      trendPercentage: 23,
      icon: "GraduationCap",
      color: "bg-primary",
      description: "Complete preparation guide for CBSE Class 10 & 12 board exams",
      tags: ["Board Exams", "CBSE", "Preparation"]
    },
    {
      id: 2,
      title: "Quadratic Equations",
      subject: "Mathematics",
      difficulty: "Intermediate",
      studentsEngaged: 8750,
      trend: "up",
      trendPercentage: 18,
      icon: "Calculator",
      color: "bg-accent",
      description: "Master quadratic equations with step-by-step solutions",
      tags: ["Algebra", "Equations", "Class 10"]
    },
    {
      id: 3,
      title: "Photosynthesis Process",
      subject: "Biology",
      difficulty: "Beginner",
      studentsEngaged: 12300,
      trend: "up",
      trendPercentage: 15,
      icon: "Leaf",
      color: "bg-progress",
      description: "Understanding how plants make their own food",
      tags: ["Plants", "Biology", "Life Processes"]
    },
    {
      id: 4,
      title: "Indian Independence Movement",
      subject: "History",
      difficulty: "Intermediate",
      studentsEngaged: 6890,
      trend: "up",
      trendPercentage: 12,
      icon: "Flag",
      color: "bg-warning",
      description: "Key events and leaders of India's freedom struggle",
      tags: ["Freedom Struggle", "Gandhi", "History"]
    },
    {
      id: 5,
      title: "Chemical Bonding",
      subject: "Chemistry",
      difficulty: "Advanced",
      studentsEngaged: 5670,
      trend: "stable",
      trendPercentage: 5,
      icon: "Atom",
      color: "bg-destructive",
      description: "Ionic, covalent, and metallic bonding explained",
      tags: ["Chemistry", "Bonding", "Molecules"]
    },
    {
      id: 6,
      title: "English Grammar Basics",
      subject: "English",
      difficulty: "Beginner",
      studentsEngaged: 9840,
      trend: "up",
      trendPercentage: 8,
      icon: "BookOpen",
      color: "bg-secondary",
      description: "Essential grammar rules for better communication",
      tags: ["Grammar", "English", "Communication"]
    }
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return 'TrendingUp';
      case 'down':
        return 'TrendingDown';
      default:
        return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up':
        return 'text-progress';
      case 'down':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-soft border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="TrendingUp" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Trending Topics</h3>
            <p className="text-sm text-muted-foreground">Popular study areas this week</p>
          </div>
        </div>
        <Button variant="outline" size="sm">
          <Icon name="ExternalLink" size={14} />
          <span className="ml-2">View All</span>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trendingTopics?.map((topic) => (
          <div
            key={topic?.id}
            className="group bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-all duration-200 hover:shadow-soft cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-10 h-10 ${topic?.color} rounded-lg flex items-center justify-center`}>
                <Icon name={topic?.icon} size={18} className="text-white" />
              </div>
              <div className="flex items-center space-x-1">
                <Icon 
                  name={getTrendIcon(topic?.trend)} 
                  size={14} 
                  className={getTrendColor(topic?.trend)} 
                />
                <span className={`text-xs font-medium ${getTrendColor(topic?.trend)}`}>
                  {topic?.trendPercentage}%
                </span>
              </div>
            </div>

            <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {topic?.title}
            </h4>
            
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {topic?.description}
            </p>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-background rounded text-xs font-medium text-foreground">
                  {topic?.subject}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  topic?.difficulty === 'Beginner' ? 'bg-progress/10 text-progress' :
                  topic?.difficulty === 'Intermediate'? 'bg-accent/10 text-accent' : 'bg-destructive/10 text-destructive'
                }`}>
                  {topic?.difficulty}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={14} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {topic?.studentsEngaged?.toLocaleString()} students
                </span>
              </div>
              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="ArrowRight" size={14} />
              </Button>
            </div>

            <div className="flex flex-wrap gap-1 mt-3">
              {topic?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-background/50 text-xs text-muted-foreground rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Weekly Highlights */}
      <div className="mt-8 pt-6 border-t border-border">
        <h4 className="text-sm font-semibold text-foreground mb-4">This Week's Highlights</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Award" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Most Popular</span>
            </div>
            <p className="text-sm text-foreground font-medium">CBSE Board Exam Preparation</p>
            <p className="text-xs text-muted-foreground">15,420 students engaged</p>
          </div>

          <div className="bg-progress/5 border border-progress/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="TrendingUp" size={16} className="text-progress" />
              <span className="text-sm font-medium text-progress">Fastest Growing</span>
            </div>
            <p className="text-sm text-foreground font-medium">Quadratic Equations</p>
            <p className="text-xs text-muted-foreground">+23% this week</p>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Star" size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Highest Rated</span>
            </div>
            <p className="text-sm text-foreground font-medium">Photosynthesis Process</p>
            <p className="text-xs text-muted-foreground">4.9/5 rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopics;