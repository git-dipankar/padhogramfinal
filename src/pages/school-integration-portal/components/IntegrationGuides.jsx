import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IntegrationGuides = () => {
  const [activeGuide, setActiveGuide] = useState('getting-started');

  const integrationGuides = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: 'Rocket',
      description: 'Complete setup guide for new institutions',
      estimatedTime: '2-3 weeks',
      difficulty: 'Beginner'
    },
    {
      id: 'curriculum-mapping',
      title: 'Curriculum Mapping',
      icon: 'BookOpen',
      description: 'Align your syllabus with PadhoGram content',
      estimatedTime: '1 week',
      difficulty: 'Intermediate'
    },
    {
      id: 'teacher-training',
      title: 'Teacher Training',
      icon: 'GraduationCap',
      description: 'Comprehensive educator onboarding program',
      estimatedTime: '3-5 days',
      difficulty: 'Beginner'
    },
    {
      id: 'student-onboarding',
      title: 'Student Onboarding',
      icon: 'Users',
      description: 'Smooth transition for students to digital learning',
      estimatedTime: '1-2 weeks',
      difficulty: 'Beginner'
    },
    {
      id: 'advanced-features',
      title: 'Advanced Features',
      icon: 'Settings',
      description: 'Maximize platform potential with advanced tools',
      estimatedTime: 'Ongoing',
      difficulty: 'Advanced'
    }
  ];

  const guideContent = {
    'getting-started': {
      overview: 'This comprehensive guide will walk you through the complete setup process for integrating PadhoGram into your educational institution. From initial configuration to student enrollment, we cover every step.',
      steps: [
        {
          title: 'Initial Assessment & Planning',
          description: 'Evaluate your current infrastructure and plan the integration timeline',
          tasks: [
            'Assess current technology infrastructure',
            'Identify key stakeholders and champions',
            'Define success metrics and goals',
            'Create implementation timeline',
            'Prepare communication plan for staff and students'
          ],
          duration: '2-3 days'
        },
        {
          title: 'Platform Configuration',
          description: 'Set up your institutional account and configure basic settings',
          tasks: [
            'Create institutional admin account',
            'Configure school profile and branding',
            'Set up educational board alignment (CBSE/ICSE/State)',
            'Define class structures and subjects',
            'Configure user roles and permissions'
          ],
          duration: '1-2 days'
        },
        {
          title: 'Data Migration & Setup',
          description: 'Import existing student and teacher data into the platform',
          tasks: [
            'Prepare student and teacher data in required format',
            'Bulk import user accounts',
            'Verify data accuracy and completeness',
            'Set up class assignments and subject mappings',
            'Configure parent access accounts'
          ],
          duration: '3-5 days'
        },
        {
          title: 'Testing & Validation',
          description: 'Thoroughly test all features before full deployment',
          tasks: [
            'Conduct platform functionality testing',
            'Validate curriculum alignment',
            'Test user access and permissions',
            'Verify reporting and analytics features',
            'Perform security and privacy checks'
          ],
          duration: '2-3 days'
        },
        {
          title: 'Go-Live & Support',
          description: 'Launch the platform and provide ongoing support',
          tasks: [
            'Announce platform launch to all stakeholders',
            'Monitor initial usage and performance',
            'Provide immediate support for any issues',
            'Collect feedback from early users',
            'Plan for continuous improvement'
          ],
          duration: 'Ongoing'
        }
      ],
      resources: [
        { name: 'Setup Checklist', type: 'PDF', size: '2.3 MB' },
        { name: 'Data Import Template', type: 'Excel', size: '156 KB' },
        { name: 'Configuration Guide', type: 'Video', size: '45 min' },
        { name: 'Troubleshooting Guide', type: 'PDF', size: '1.8 MB' }
      ]
    },
    'curriculum-mapping': {
      overview: 'Learn how to effectively map your existing curriculum to PadhoGram\'s content library, ensuring seamless alignment with educational standards and learning objectives.',
      steps: [
        {
          title: 'Curriculum Analysis',
          description: 'Analyze your current curriculum structure and identify mapping opportunities',
          tasks: [
            'Review current syllabus and learning objectives',
            'Identify key topics and subtopics',
            'Map learning outcomes to assessment criteria',
            'Document prerequisite knowledge requirements',
            'Analyze difficulty progression patterns'
          ],
          duration: '2-3 days'
        },
        {
          title: 'Content Alignment',
          description: 'Align your curriculum with PadhoGram\'s extensive content library',
          tasks: [
            'Browse PadhoGram content library by subject',
            'Map curriculum topics to available content',
            'Identify gaps and additional content needs',
            'Sequence content according to your syllabus',
            'Set up custom learning paths'
          ],
          duration: '3-4 days'
        },
        {
          title: 'Assessment Integration',
          description: 'Integrate your assessment strategy with platform features',
          tasks: [
            'Map assessment types to platform tools',
            'Create custom quizzes and tests',
            'Set up grading criteria and rubrics',
            'Configure automated feedback systems',
            'Align assessments with learning objectives'
          ],
          duration: '2-3 days'
        }
      ],
      resources: [
        { name: 'Curriculum Mapping Template', type: 'Excel', size: '245 KB' },
        { name: 'Content Library Guide', type: 'PDF', size: '3.1 MB' },
        { name: 'Assessment Setup Tutorial', type: 'Video', size: '32 min' }
      ]
    },
    'teacher-training': {
      overview: 'Comprehensive training program designed to help educators effectively use PadhoGram\'s features and integrate them into their teaching methodology.',
      steps: [
        {
          title: 'Platform Orientation',
          description: 'Introduction to PadhoGram interface and basic navigation',
          tasks: [
            'Platform overview and key features',
            'Navigation and user interface training',
            'Account setup and profile management',
            'Basic troubleshooting and support resources',
            'Mobile app usage and features'
          ],
          duration: '1 day'
        },
        {
          title: 'Content Creation & Management',
          description: 'Learn to create and manage educational content effectively',
          tasks: [
            'Creating custom quizzes and assessments',
            'Uploading and organizing learning materials',
            'Setting up assignments and homework',
            'Managing class schedules and announcements',
            'Utilizing multimedia content tools'
          ],
          duration: '1 day'
        },
        {
          title: 'Student Engagement & Analytics',
          description: 'Master student engagement tools and performance analytics',
          tasks: [
            'Understanding student progress tracking',
            'Using gamification features effectively',
            'Interpreting analytics and reports',
            'Parent communication tools',
            'Identifying and supporting struggling students'
          ],
          duration: '1 day'
        }
      ],
      resources: [
        { name: 'Teacher Handbook', type: 'PDF', size: '4.2 MB' },
        { name: 'Training Videos', type: 'Video Series', size: '2.5 hours' },
        { name: 'Quick Reference Guide', type: 'PDF', size: '890 KB' }
      ]
    },
    'student-onboarding': {
      overview: 'Structured approach to help students transition smoothly to digital learning with PadhoGram, ensuring high engagement and adoption rates.',
      steps: [
        {
          title: 'Introduction & Orientation',
          description: 'Welcome students to the platform and explain its benefits',
          tasks: [
            'Platform introduction presentation',
            'Account setup and login process',
            'Basic navigation and interface tour',
            'Setting up student profiles',
            'Understanding gamification elements'
          ],
          duration: '1-2 days'
        },
        {
          title: 'Learning Path Setup',
          description: 'Help students understand their personalized learning journey',
          tasks: [
            'Explaining personalized learning paths',
            'Setting learning goals and objectives',
            'Understanding progress tracking',
            'Exploring subject-specific content',
            'Learning to use study tools effectively'
          ],
          duration: '2-3 days'
        },
        {
          title: 'Engagement & Support',
          description: 'Ensure continued engagement and provide ongoing support',
          tasks: [
            'Regular check-ins and feedback sessions',
            'Peer learning and collaboration setup',
            'Troubleshooting common issues',
            'Celebrating early achievements',
            'Continuous motivation and support'
          ],
          duration: 'Ongoing'
        }
      ],
      resources: [
        { name: 'Student Welcome Kit', type: 'PDF', size: '1.5 MB' },
        { name: 'Getting Started Video', type: 'Video', size: '15 min' },
        { name: 'Parent Guide', type: 'PDF', size: '1.2 MB' }
      ]
    },
    'advanced-features': {
      overview: 'Unlock the full potential of PadhoGram with advanced features designed for experienced users who want to maximize learning outcomes.',
      steps: [
        {
          title: 'Advanced Analytics',
          description: 'Leverage detailed analytics for data-driven decision making',
          tasks: [
            'Setting up custom dashboards',
            'Creating detailed performance reports',
            'Using predictive analytics features',
            'Implementing intervention strategies',
            'Benchmarking against standards'
          ],
          duration: '2-3 days'
        },
        {
          title: 'Integration & Automation',
          description: 'Integrate with existing systems and automate workflows',
          tasks: [
            'API integration setup',
            'Automated reporting configuration',
            'Third-party tool integrations',
            'Workflow automation setup',
            'Custom notification systems'
          ],
          duration: '3-5 days'
        },
        {
          title: 'Customization & Scaling',
          description: 'Customize the platform and scale for institutional growth',
          tasks: [
            'Custom branding and themes',
            'Advanced user role management',
            'Scaling for multiple campuses',
            'Custom feature development',
            'Performance optimization'
          ],
          duration: 'Ongoing'
        }
      ],
      resources: [
        { name: 'Advanced User Manual', type: 'PDF', size: '6.8 MB' },
        { name: 'API Documentation', type: 'Web', size: 'Online' },
        { name: 'Customization Guide', type: 'PDF', size: '3.4 MB' }
      ]
    }
  };

  const currentGuide = guideContent?.[activeGuide];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Integration Guides & Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive guides to help you seamlessly integrate PadhoGram into your educational institution. 
              From setup to advanced features, we've got you covered.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Guide Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl shadow-large border border-border p-6 sticky top-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">Integration Guides</h3>
                
                <div className="space-y-2">
                  {integrationGuides?.map((guide) => (
                    <button
                      key={guide?.id}
                      onClick={() => setActiveGuide(guide?.id)}
                      className={`w-full flex items-start space-x-3 p-4 rounded-lg text-left transition-all ${
                        activeGuide === guide?.id
                          ? 'bg-primary/10 border border-primary/20' :'hover:bg-muted'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        activeGuide === guide?.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <Icon name={guide?.icon} size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-medium text-sm ${
                          activeGuide === guide?.id ? 'text-foreground' : 'text-foreground'
                        }`}>
                          {guide?.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {guide?.description}
                        </p>
                        <div className="flex items-center space-x-3 mt-2">
                          <span className="text-xs text-muted-foreground">{guide?.estimatedTime}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            guide?.difficulty === 'Beginner' ? 'bg-progress/20 text-progress' :
                            guide?.difficulty === 'Intermediate'? 'bg-accent/20 text-accent' : 'bg-warning/20 text-warning'
                          }`}>
                            {guide?.difficulty}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Support Contact */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-medium text-foreground mb-4">Need Help?</h4>
                  <div className="space-y-3">
                    <Button variant="outline" size="sm" fullWidth iconName="MessageCircle" iconPosition="left">
                      Live Chat
                    </Button>
                    <Button variant="outline" size="sm" fullWidth iconName="Phone" iconPosition="left">
                      Call Support
                    </Button>
                    <Button variant="outline" size="sm" fullWidth iconName="Mail" iconPosition="left">
                      Email Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide Content */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl shadow-large border border-border overflow-hidden">
                {/* Guide Header */}
                <div className="bg-gradient-to-r from-primary/10 to-progress/10 p-8 border-b border-border">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                      <Icon 
                        name={integrationGuides?.find(g => g?.id === activeGuide)?.icon} 
                        size={28} 
                        className="text-primary-foreground"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {integrationGuides?.find(g => g?.id === activeGuide)?.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {integrationGuides?.find(g => g?.id === activeGuide)?.description}
                      </p>
                      <div className="flex items-center space-x-4 mt-3">
                        <div className="flex items-center space-x-2">
                          <Icon name="Clock" size={14} className="text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {integrationGuides?.find(g => g?.id === activeGuide)?.estimatedTime}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="BarChart" size={14} className="text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {integrationGuides?.find(g => g?.id === activeGuide)?.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guide Content */}
                <div className="p-8">
                  {/* Overview */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Overview</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentGuide?.overview}
                    </p>
                  </div>

                  {/* Steps */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-6">Implementation Steps</h4>
                    
                    <div className="space-y-8">
                      {currentGuide?.steps?.map((step, index) => (
                        <div key={index} className="relative">
                          {/* Step Number */}
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-lg font-semibold text-foreground">{step?.title}</h5>
                                <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                                  {step?.duration}
                                </span>
                              </div>
                              <p className="text-muted-foreground mb-4">{step?.description}</p>
                              
                              {/* Tasks */}
                              <div className="bg-muted/30 rounded-lg p-4">
                                <h6 className="font-medium text-foreground mb-3">Key Tasks:</h6>
                                <ul className="space-y-2">
                                  {step?.tasks?.map((task, taskIndex) => (
                                    <li key={taskIndex} className="flex items-start space-x-3">
                                      <Icon name="CheckCircle" size={16} className="text-progress flex-shrink-0 mt-0.5" />
                                      <span className="text-sm text-foreground">{task}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          
                          {/* Connector Line */}
                          {index < currentGuide?.steps?.length - 1 && (
                            <div className="absolute left-5 top-12 w-0.5 h-8 bg-border"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Resources */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-6">Downloadable Resources</h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {currentGuide?.resources?.map((resource, index) => (
                        <div key={index} className="flex items-center justify-between bg-muted/30 rounded-lg p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon 
                                name={
                                  resource?.type === 'PDF' ? 'FileText' :
                                  resource?.type === 'Excel' ? 'FileSpreadsheet' :
                                  resource?.type === 'Video'? 'Play' : 'Globe'
                                } 
                                size={18} 
                                className="text-primary" 
                              />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{resource?.name}</p>
                              <p className="text-sm text-muted-foreground">{resource?.type} • {resource?.size}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" iconName="Download">
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Next Steps */}
                  <div className="bg-gradient-to-r from-progress/10 to-accent/10 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Ready to Get Started?</h4>
                    <p className="text-muted-foreground mb-6">
                      Our implementation team is ready to help you every step of the way. 
                      Schedule a consultation to discuss your specific needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="default" iconName="Calendar" iconPosition="left">
                        Schedule Consultation
                      </Button>
                      <Button variant="outline" iconName="MessageCircle" iconPosition="left">
                        Contact Support
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-card rounded-2xl shadow-large border border-border p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our dedicated implementation team has helped hundreds of schools successfully integrate PadhoGram. 
                Let us help you too.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" iconName="Users" iconPosition="left">
                  Talk to Implementation Team
                </Button>
                <Button variant="outline" size="lg" iconName="BookOpen" iconPosition="left">
                  Browse All Guides
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationGuides;