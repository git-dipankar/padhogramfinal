import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EducatorTools = () => {
  const [activeFeature, setActiveFeature] = useState('enrollment');

  const educatorFeatures = [
    {
      id: 'enrollment',
      title: 'Bulk Student Enrollment',
      icon: 'UserPlus',
      description: 'Easily add multiple students to your classes with CSV import and automated account creation.',
      color: 'primary'
    },
    {
      id: 'quiz',
      title: 'Custom Quiz Creation',
      icon: 'FileQuestion',
      description: 'Create curriculum-aligned quizzes with various question types and automated grading.',
      color: 'accent'
    },
    {
      id: 'reports',
      title: 'Automated Progress Reports',
      icon: 'FileText',
      description: 'Generate detailed reports for parent-teacher meetings with performance insights.',
      color: 'progress'
    },
    {
      id: 'curriculum',
      title: 'Curriculum Mapping',
      icon: 'BookOpen',
      description: 'Align content with CBSE, ICSE, and State Board syllabi for seamless integration.',
      color: 'trust'
    }
  ];

  const toolFeatures = {
    enrollment: {
      steps: [
        'Upload student data via CSV file',
        'Map fields to system requirements',
        'Validate and preview student information',
        'Bulk create accounts with auto-generated credentials',
        'Send welcome emails with login instructions'
      ],
      benefits: [
        'Save hours of manual data entry',
        'Reduce enrollment errors by 95%',
        'Automatic parent notification system',
        'Seamless class assignment'
      ]
    },
    quiz: {
      steps: [
        'Select curriculum standards and topics',
        'Choose from multiple question types',
        'Set difficulty levels and time limits',
        'Preview and test quiz functionality',
        'Schedule or assign to specific classes'
      ],
      benefits: [
        'Curriculum-aligned content library',
        'Automated grading and feedback',
        'Real-time performance analytics',
        'Customizable difficulty progression'
      ]
    },
    reports: {
      steps: [
        'Select reporting period and metrics',
        'Choose students or classes to include',
        'Customize report format and layout',
        'Generate comprehensive analytics',
        'Export and share with stakeholders'
      ],
      benefits: [
        'Data-driven insights for educators',
        'Professional presentation format',
        'Parent engagement tracking',
        'Actionable improvement recommendations'
      ]
    },
    curriculum: {
      steps: [
        'Select your educational board',
        'Choose grade level and subjects',
        'Map existing content to standards',
        'Validate alignment accuracy',
        'Sync with lesson planning tools'
      ],
      benefits: [
        '100% curriculum compliance',
        'Seamless textbook integration',
        'Standards-based assessment',
        'Regulatory reporting support'
      ]
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Powerful Educator Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Streamline your teaching workflow with intelligent tools designed specifically for Indian educators. 
              From bulk enrollment to curriculum mapping, we've got you covered.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl shadow-large border border-border p-6 sticky top-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Available Tools</h3>
                
                <div className="space-y-3">
                  {educatorFeatures?.map((feature) => (
                    <button
                      key={feature?.id}
                      onClick={() => setActiveFeature(feature?.id)}
                      className={`w-full flex items-center space-x-4 p-4 rounded-lg text-left transition-all ${
                        activeFeature === feature?.id
                          ? `bg-${feature?.color}/10 border border-${feature?.color}/20`
                          : 'hover:bg-muted'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        activeFeature === feature?.id
                          ? `bg-${feature?.color} text-${feature?.color}-foreground`
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <Icon name={feature?.icon} size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-medium ${
                          activeFeature === feature?.id ? 'text-foreground' : 'text-foreground'
                        }`}>
                          {feature?.title}
                        </h4>
                        <p className="text-sm text-muted-foreground truncate">
                          {feature?.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-medium text-foreground mb-4">Usage Statistics</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Time Saved</span>
                      <span className="text-sm font-medium text-foreground">15+ hours/week</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Error Reduction</span>
                      <span className="text-sm font-medium text-progress">95%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Educator Satisfaction</span>
                      <span className="text-sm font-medium text-accent">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Details */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl shadow-large border border-border overflow-hidden">
                {/* Feature Header */}
                <div className={`bg-gradient-to-r from-${educatorFeatures?.find(f => f?.id === activeFeature)?.color}/10 to-${educatorFeatures?.find(f => f?.id === activeFeature)?.color}/5 p-8 border-b border-border`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-${educatorFeatures?.find(f => f?.id === activeFeature)?.color} rounded-xl flex items-center justify-center`}>
                      <Icon 
                        name={educatorFeatures?.find(f => f?.id === activeFeature)?.icon} 
                        size={28} 
                        className={`text-${educatorFeatures?.find(f => f?.id === activeFeature)?.color}-foreground`}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {educatorFeatures?.find(f => f?.id === activeFeature)?.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {educatorFeatures?.find(f => f?.id === activeFeature)?.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature Content */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* How It Works */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                        <Icon name="Settings" size={18} />
                        <span>How It Works</span>
                      </h4>
                      
                      <div className="space-y-4">
                        {toolFeatures?.[activeFeature]?.steps?.map((step, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className={`w-6 h-6 bg-${educatorFeatures?.find(f => f?.id === activeFeature)?.color} text-${educatorFeatures?.find(f => f?.id === activeFeature)?.color}-foreground rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5`}>
                              {index + 1}
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                        <Icon name="CheckCircle" size={18} />
                        <span>Key Benefits</span>
                      </h4>
                      
                      <div className="space-y-3">
                        {toolFeatures?.[activeFeature]?.benefits?.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <Icon name="Check" size={16} className="text-progress flex-shrink-0" />
                            <p className="text-sm text-foreground">{benefit}</p>
                          </div>
                        ))}
                      </div>

                      {/* Demo CTA */}
                      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-foreground">Try it yourself</p>
                            <p className="text-sm text-muted-foreground">Interactive demo available</p>
                          </div>
                          <Button 
                            variant="default" 
                            size="sm" 
                            iconName="Play"
                            iconPosition="left"
                          >
                            Start Demo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Preview */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Feature Preview</h4>
                    
                    <div className="bg-muted/30 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
                            <Icon name="Monitor" size={16} className="text-muted-foreground" />
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            {educatorFeatures?.find(f => f?.id === activeFeature)?.title} Interface
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-progress rounded-full"></div>
                          <span className="text-xs text-muted-foreground">Live Preview</span>
                        </div>
                      </div>
                      
                      <div className="bg-background rounded-lg p-4 border border-border">
                        <div className="flex items-center justify-center h-32 text-muted-foreground">
                          <div className="text-center">
                            <Icon name="Eye" size={32} className="mx-auto mb-2 opacity-50" />
                            <p className="text-sm">Interactive preview available in full version</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-progress/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Transform Your Teaching Experience?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of educators who have already streamlined their workflow with PadhoGram's intelligent tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" iconName="Rocket" iconPosition="left">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" iconName="Calendar" iconPosition="left">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducatorTools;