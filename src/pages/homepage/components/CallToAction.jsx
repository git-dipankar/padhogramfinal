import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  const features = [
    {
      icon: 'Zap',
      title: 'Instant Access',
      description: 'Start learning immediately with our quick setup'
    },
    {
      icon: 'Shield',
      title: 'Safe & Secure',
      description: 'Your data is protected with enterprise-grade security'
    },
    {
      icon: 'Users',
      title: 'Join 50K+ Students',
      description: 'Be part of India\'s largest learning community'
    }
  ];

  const quickStats = [
    { value: '5 min', label: 'Setup Time' },
    { value: '24/7', label: 'AI Support' },
    { value: '100%', label: 'Free Start' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-progress/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 learning-particles opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Icon name="Rocket" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Ready to Transform Your Learning?</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Start Your <span className="gradient-text">Learning Adventure</span> Today
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of students who've already discovered the joy of learning with PadhoGram. 
              Your personalized AI companion is waiting to help you succeed.
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              {quickStats?.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary">{stat?.value}</div>
                  <div className="text-sm text-muted-foreground">{stat?.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-large mb-12"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Form */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Get Started in 30 Seconds
                </h3>
                <p className="text-muted-foreground mb-6">
                  Enter your email to create your free account and unlock personalized learning paths
                </p>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e?.target?.value)}
                      required
                      className="text-lg"
                    />
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        iconName="ArrowRight"
                        iconPosition="right"
                        className="flex-1 text-lg px-8"
                      >
                        Start Learning Free
                      </Button>
                      
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        iconName="School"
                        iconPosition="left"
                        className="flex-1 text-lg px-8"
                      >
                        School Login
                      </Button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-progress/10 border border-progress/20 rounded-lg p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-progress rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="CheckCircle" size={32} className="text-progress-foreground" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">Welcome to PadhoGram!</h4>
                    <p className="text-muted-foreground">
                      Check your email for your personalized learning dashboard link
                    </p>
                  </motion.div>
                )}

                <p className="text-sm text-muted-foreground mt-4 text-center">
                  No credit card required • Free forever • Cancel anytime
                </p>
              </div>

              {/* Right Side - Features */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-foreground">What you get instantly:</h4>
                
                {features?.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={feature?.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">{feature?.title}</h5>
                      <p className="text-sm text-muted-foreground">{feature?.description}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Trust Indicators */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Shield" size={14} className="text-progress" />
                      <span>SSL Secured</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Lock" size={14} className="text-progress" />
                      <span>Privacy Protected</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Award" size={14} className="text-progress" />
                      <span>CBSE Aligned</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Alternative Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6">
              Already have an account or want to explore more?
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="ghost"
                size="lg"
                iconName="LogIn"
                iconPosition="left"
                className="px-8"
              >
                Sign In to Your Account
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="px-8"
              >
                Watch Demo Video
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="px-8"
              >
                Talk to Our Team
              </Button>
            </div>
          </motion.div>

          {/* Social Proof Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} className="text-achievement fill-current" />
                <span className="text-sm text-muted-foreground">4.9/5 Student Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">50,000+ Active Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="School" size={16} className="text-progress" />
                <span className="text-sm text-muted-foreground">500+ Partner Schools</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-accent" />
                <span className="text-sm text-muted-foreground">95% Success Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;