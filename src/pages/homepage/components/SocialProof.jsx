import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const metrics = [
    {
      value: '50,000+',
      label: 'Students Learning Daily',
      icon: 'Users',
      color: 'text-primary',
      description: 'Active learners across India'
    },
    {
      value: '500+',
      label: 'Schools Connected',
      icon: 'School',
      color: 'text-progress',
      description: 'Trusted by institutions'
    },
    {
      value: '95%',
      label: 'Success Rate',
      icon: 'TrendingUp',
      color: 'text-achievement',
      description: 'Students improve grades'
    },
    {
      value: '1M+',
      label: 'Questions Solved',
      icon: 'Target',
      color: 'text-accent',
      description: 'Practice problems completed'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Arjun Patel',
      grade: 'Class 12',
      school: 'Delhi Public School',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: `PadhoGram transformed my math scores from 65% to 92%! The AI companion helped me understand concepts I struggled with for months. The gamification made studying actually fun.`,
      achievement: 'Math Olympiad Qualifier',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Sharma',
      grade: 'Class 10',
      school: 'Kendriya Vidyalaya',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: `The interactive quizzes and peer competitions motivated me to study consistently. I went from being afraid of science to loving it! My confidence has grown tremendously.`,
      achievement: 'Science Fair Winner',
      rating: 5
    },
    {
      id: 3,
      name: 'Rohit Kumar',
      grade: 'Class 11',
      school: 'St. Xavier\'s School',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: `The personalized learning paths helped me focus on my weak areas. The progress tracking showed me exactly where I improved. It's like having a personal tutor 24/7.`,achievement: 'Top 5% in Board Exams',
      rating: 5
    }
  ];

  const schoolLogos = [
    { name: 'Delhi Public School', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=60&fit=crop' },
    { name: 'Kendriya Vidyalaya', logo: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=120&h=60&fit=crop' },
    { name: 'St. Xavier\'s School', logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=60&fit=crop' },
    { name: 'Ryan International', logo: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=120&h=60&fit=crop' },
    { name: 'DAV Public School', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=60&fit=crop' },
    { name: 'Modern School', logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=60&fit=crop' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const StarRating = ({ rating }) => (
    <div className="flex items-center space-x-1">
      {[...Array(5)]?.map((_, i) => (
        <Icon
          key={i}
          name="Star"
          size={16}
          className={i < rating ? 'text-achievement fill-current' : 'text-muted'}
        />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-progress/10 border border-progress/20 rounded-full px-4 py-2 mb-6">
            <Icon name="TrendingUp" size={16} className="text-progress" />
            <span className="text-sm font-medium text-progress">Trusted by Thousands</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Join India's <span className="gradient-text">Fastest Growing</span> Learning Community
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Students and schools across India trust PadhoGram to transform their learning experience
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics?.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover-lift"
              >
                <div className={`w-12 h-12 ${metric?.color === 'text-primary' ? 'bg-primary' : 
                  metric?.color === 'text-progress' ? 'bg-progress' : 
                  metric?.color === 'text-achievement' ? 'bg-achievement' : 'bg-accent'} 
                  rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={metric?.icon} size={24} className="text-white" />
                </div>
                <div className={`text-3xl font-bold ${metric?.color} mb-2`}>
                  {metric?.value}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {metric?.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric?.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Testimonial Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What Students Say About <span className="gradient-text">PadhoGram</span>
              </h3>
              <p className="text-muted-foreground">
                Real stories from students who transformed their learning journey
              </p>
            </div>

            {/* Current Testimonial */}
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-soft"
            >
              <div className="flex items-start space-x-4 mb-4">
                <Image
                  src={testimonials?.[currentTestimonial]?.image}
                  alt={testimonials?.[currentTestimonial]?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonials?.[currentTestimonial]?.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials?.[currentTestimonial]?.grade} • {testimonials?.[currentTestimonial]?.school}
                      </p>
                    </div>
                    <StarRating rating={testimonials?.[currentTestimonial]?.rating} />
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-achievement/10 border border-achievement/20 rounded-full px-3 py-1">
                    <Icon name="Award" size={12} className="text-achievement" />
                    <span className="text-xs font-medium text-achievement">
                      {testimonials?.[currentTestimonial]?.achievement}
                    </span>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-foreground leading-relaxed">
                "{testimonials?.[currentTestimonial]?.content}"
              </blockquote>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex items-center space-x-3">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-primary/10 to-progress/10 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-foreground mb-6">Student Success Stories</h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Average Grade Improvement</span>
                  <span className="text-2xl font-bold text-progress">+23%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Study Time Efficiency</span>
                  <span className="text-2xl font-bold text-achievement">+40%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-achievement"
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Confidence Level</span>
                  <span className="text-2xl font-bold text-primary">+35%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: '88%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* School Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Trusted by Leading Schools Across India
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-60">
            {schoolLogos?.map((school, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-4 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={school?.logo}
                  alt={school?.name}
                  className="w-full h-8 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;