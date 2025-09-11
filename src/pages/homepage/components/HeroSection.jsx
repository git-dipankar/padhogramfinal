import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentAnimation, setCurrentAnimation] = useState(0);

  const floatingElements = [
    { icon: 'BookOpen', color: 'bg-primary', delay: 0 },
    { icon: 'Trophy', color: 'bg-achievement', delay: 0.5 },
    { icon: 'Target', color: 'bg-progress', delay: 1 },
    { icon: 'Sparkles', color: 'bg-accent', delay: 1.5 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 learning-particles">
        {floatingElements?.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute w-16 h-16 ${element?.color} rounded-2xl flex items-center justify-center shadow-large`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: currentAnimation === index ? 1 : 0.3,
              scale: currentAnimation === index ? 1.2 : 1,
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 2,
              delay: element?.delay,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              top: `${20 + index * 15}%`,
              left: `${10 + index * 20}%`,
            }}
          >
            <Icon name={element?.icon} size={24} className="text-white" />
          </motion.div>
        ))}
      </div>
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2"
            >
              <Icon name="Sparkles" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Learning Platform</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Transform Your{' '}
                <span className="gradient-text">Learning Journey</span>{' '}
                Into An Adventure
              </h1>
              
              {/* Bilingual Tagline */}
              <div className="space-y-2">
                <p className="text-xl text-muted-foreground">Where Padho meets Progress</p>
                <p className="text-lg text-muted-foreground font-medium">जहाँ पढ़ाई मिलती है प्रगति से</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Join thousands of students who've discovered the joy of learning through gamification, 
              AI-powered insights, and community-driven achievements.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="text-lg px-8 py-4"
              >
                Start Learning Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="School"
                iconPosition="left"
                className="text-lg px-8 py-4"
              >
                Connect Your School
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Schools Connected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-2xl p-6 shadow-large">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-progress rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Priya Sharma</p>
                    <p className="text-sm text-muted-foreground">Class 10 • Mathematics</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-achievement/10 rounded-full px-3 py-1">
                  <Icon name="Flame" size={14} className="text-achievement" />
                  <span className="text-sm font-medium text-achievement">7 Day Streak</span>
                </div>
              </div>

              {/* Quiz Demo */}
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-3">
                    What is the value of x in: 2x + 5 = 13?
                  </h3>
                  <div className="space-y-2">
                    {['x = 3', 'x = 4', 'x = 5', 'x = 6']?.map((option, index) => (
                      <motion.div
                        key={index}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          index === 1 
                            ? 'bg-progress/10 border-progress text-progress font-medium' :'bg-background border-border hover:border-primary/50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {option}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Progress & Points */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Trophy" size={16} className="text-achievement" />
                    <span className="text-sm font-medium text-foreground">+50 Points</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-progress"
                        initial={{ width: '60%' }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                </div>
              </div>

              {/* AI Feedback */}
              <div className="mt-4 bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Bot" size={16} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground mb-1">AI Study Companion</p>
                    <p className="text-sm text-muted-foreground">
                      Great job! You're mastering linear equations. Try the advanced problems next.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Achievement */}
            <motion.div
              className="absolute -top-4 -right-4 bg-achievement rounded-xl p-3 shadow-large"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <Icon name="Award" size={20} className="text-achievement-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;