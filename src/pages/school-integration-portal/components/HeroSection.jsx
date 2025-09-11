import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-progress/5 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-progress/10 rounded-full blur-xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="School" size={16} />
                <span>Institutional Gateway</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Seamless School
                <span className="gradient-text block">Integration Portal</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform your institution's learning experience with PadhoGram's comprehensive educational platform. 
                Aligned with CBSE, ICSE, and State Board curricula for enhanced student engagement and measurable outcomes.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="BookOpen" size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Curriculum Aligned</h3>
                  <p className="text-sm text-muted-foreground">CBSE, ICSE, State Boards</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-progress/10 rounded-lg flex items-center justify-center">
                  <Icon name="BarChart3" size={18} className="text-progress" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Real-time Analytics</h3>
                  <p className="text-sm text-muted-foreground">Student Progress Tracking</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Bulk Enrollment</h3>
                  <p className="text-sm text-muted-foreground">Easy Student Management</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-trust/10 rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={18} className="text-trust" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Secure SSO</h3>
                  <p className="text-sm text-muted-foreground">Single Sign-On Access</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" iconName="LogIn" iconPosition="left">
                School Login Portal
              </Button>
              <Button variant="outline" size="lg" iconName="Play" iconPosition="left">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Schools Connected</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-progress">50K+</p>
                <p className="text-sm text-muted-foreground">Active Students</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-accent">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-large p-8 border border-border">
              <div className="space-y-6">
                {/* Dashboard Preview */}
                <div className="bg-gradient-to-r from-primary/10 to-progress/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">School Dashboard</h3>
                    <div className="w-3 h-3 bg-progress rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Users" size={16} className="text-primary" />
                        <span className="text-sm font-medium">Total Students</span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">1,247</p>
                      <p className="text-xs text-progress">+12% this month</p>
                    </div>
                    
                    <div className="bg-background rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="TrendingUp" size={16} className="text-accent" />
                        <span className="text-sm font-medium">Avg. Score</span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">87.5%</p>
                      <p className="text-xs text-progress">+5.2% improvement</p>
                    </div>
                  </div>
                </div>

                {/* Curriculum Integration */}
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Curriculum Integration</h4>
                  <div className="space-y-2">
                    {['CBSE Class 10 Mathematics', 'ICSE Class 9 Science', 'State Board Class 8 English']?.map((subject, index) => (
                      <div key={index} className="flex items-center justify-between bg-muted rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <Icon name="BookOpen" size={16} className="text-primary" />
                          <span className="text-sm font-medium text-foreground">{subject}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-progress rounded-full"></div>
                          <span className="text-xs text-muted-foreground">Synced</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-large">
              <Icon name="Sparkles" size={24} className="text-accent-foreground" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-progress rounded-full flex items-center justify-center shadow-large">
              <Icon name="CheckCircle" size={20} className="text-progress-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;