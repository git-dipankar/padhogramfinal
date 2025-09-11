import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningUniverse = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const subjects = [
    {
      id: 'mathematics',
      name: 'Mathematics',
      icon: 'Calculator',
      color: 'bg-primary',
      progress: 68,
      totalLessons: 45,
      completedLessons: 31,
      difficulty: 'Intermediate',
      description: 'Master algebra, geometry, and calculus with interactive problem solving'
    },
    {
      id: 'science',
      name: 'Science',
      icon: 'Atom',
      color: 'bg-progress',
      progress: 82,
      totalLessons: 38,
      completedLessons: 31,
      difficulty: 'Advanced',
      description: 'Explore physics, chemistry, and biology through virtual experiments'
    },
    {
      id: 'english',
      name: 'English',
      icon: 'BookOpen',
      color: 'bg-accent',
      progress: 75,
      totalLessons: 52,
      completedLessons: 39,
      difficulty: 'Intermediate',
      description: 'Improve grammar, vocabulary, and literature comprehension'
    },
    {
      id: 'social',
      name: 'Social Studies',
      icon: 'Globe',
      color: 'bg-trust',
      progress: 45,
      totalLessons: 28,
      completedLessons: 13,
      difficulty: 'Beginner',
      description: 'Discover history, geography, and civics through engaging stories'
    },
    {
      id: 'computer',
      name: 'Computer Science',
      icon: 'Code',
      color: 'bg-destructive',
      progress: 90,
      totalLessons: 35,
      completedLessons: 32,
      difficulty: 'Advanced',
      description: 'Learn programming, algorithms, and digital literacy skills'
    },
    {
      id: 'hindi',
      name: 'Hindi',
      icon: 'Languages',
      color: 'bg-warning',
      progress: 55,
      totalLessons: 42,
      completedLessons: 23,
      difficulty: 'Intermediate',
      description: 'व्याकरण, साहित्य और भाषा कौशल में निपुणता प्राप्त करें'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Subjects', icon: 'Grid3X3' },
    { id: 'core', name: 'Core Subjects', icon: 'BookOpen' },
    { id: 'advanced', name: 'Advanced', icon: 'TrendingUp' },
    { id: 'popular', name: 'Most Popular', icon: 'Star' }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-progress bg-progress/10';
      case 'Intermediate': return 'text-accent bg-accent/10';
      case 'Advanced': return 'text-destructive bg-destructive/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const ProgressRing = ({ progress, size = 60 }) => {
    const radius = (size - 8) / 2;
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
            strokeWidth="4"
            fill="transparent"
            className="text-muted"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            className="text-progress transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-foreground">{progress}%</span>
        </div>
      </div>
    );
  };

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
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Learning Universe</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Explore Your <span className="gradient-text">Learning Path</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive curriculum designed to make learning engaging, 
            interactive, and perfectly aligned with your academic goals.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories?.map((category) => (
            <Button
              key={category?.id}
              variant={selectedCategory === category?.id ? 'default' : 'outline'}
              size="sm"
              iconName={category?.icon}
              iconPosition="left"
              onClick={() => setSelectedCategory(category?.id)}
              className="transition-all duration-200"
            >
              {category?.name}
            </Button>
          ))}
        </motion.div>

        {/* Subjects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects?.map((subject, index) => (
            <motion.div
              key={subject?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-6 hover-lift smooth-transition cursor-pointer"
            >
              {/* Subject Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${subject?.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon name={subject?.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {subject?.name}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(subject?.difficulty)}`}>
                      {subject?.difficulty}
                    </span>
                  </div>
                </div>
                <ProgressRing progress={subject?.progress} size={50} />
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {subject?.description}
              </p>

              {/* Progress Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Icon name="BookOpen" size={14} className="text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {subject?.completedLessons}/{subject?.totalLessons} lessons
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">~2h left</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-4">
                <motion.div
                  className="h-full bg-progress progress-trail"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${subject?.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </div>

              {/* Action Button */}
              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
              >
                Continue Learning
              </Button>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            iconName="Grid3X3"
            iconPosition="left"
            className="px-8"
          >
            View All Subjects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningUniverse;