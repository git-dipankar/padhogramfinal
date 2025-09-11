import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CaseStudies = () => {
  const [activeStudy, setActiveStudy] = useState(0);

  const caseStudies = [
    {
      id: 1,
      schoolName: "Delhi Public School, Gurgaon",
      location: "Haryana, India",
      type: "CBSE Affiliated",
      students: 2500,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      challenge: "Managing diverse learning paces across 2,500 students while maintaining curriculum alignment with CBSE standards.",
      solution: "Implemented PadhoGram\'s adaptive learning platform with curriculum mapping and real-time progress tracking.",
      results: {
        engagement: { before: 65, after: 92, improvement: 27 },
        scores: { before: 78, after: 89, improvement: 11 },
        teacherSatisfaction: { before: 72, after: 96, improvement: 24 },
        parentEngagement: { before: 45, after: 78, improvement: 33 }
      },
      testimonial: {
        quote: "PadhoGram has revolutionized how we approach personalized learning. Our students are more engaged, and teachers have better insights into individual progress than ever before.",
        author: "Dr. Priya Sharma",
        position: "Principal",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      },
      keyMetrics: [
        { label: "Student Engagement", value: "+27%", icon: "TrendingUp" },
        { label: "Average Scores", value: "+11%", icon: "Award" },
        { label: "Teacher Efficiency", value: "+35%", icon: "Clock" },
        { label: "Parent Satisfaction", value: "+33%", icon: "Heart" }
      ]
    },
    {
      id: 2,
      schoolName: "St. Xavier\'s High School",
      location: "Mumbai, Maharashtra",
      type: "ICSE Affiliated",
      students: 1800,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
      challenge: "Bridging the gap between traditional teaching methods and modern digital learning expectations of students.",
      solution: "Gradual integration of PadhoGram's interactive modules with existing curriculum, focusing on gamified learning experiences.",
      results: {
        engagement: { before: 58, after: 87, improvement: 29 },
        scores: { before: 82, after: 91, improvement: 9 },
        teacherSatisfaction: { before: 68, after: 94, improvement: 26 },
        parentEngagement: { before: 52, after: 81, improvement: 29 }
      },
      testimonial: {
        quote: "The seamless integration with our ICSE curriculum and the immediate improvement in student participation convinced us that PadhoGram was the right choice.",
        author: "Fr. Michael D\'Souza",
        position: "Vice Principal",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      },
      keyMetrics: [
        { label: "Digital Adoption", value: "+85%", icon: "Smartphone" },
        { label: "Quiz Completion", value: "+67%", icon: "CheckCircle" },
        { label: "Study Time", value: "+42%", icon: "BookOpen" },
        { label: "Peer Collaboration", value: "+58%", icon: "Users" }
      ]
    },
    {
      id: 3,
      schoolName: "Government Senior Secondary School",
      location: "Jaipur, Rajasthan",
      type: "State Board",
      students: 1200,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
      challenge: "Limited resources and infrastructure while serving students from diverse socio-economic backgrounds.",
      solution: "Leveraged PadhoGram\'s offline capabilities and mobile-first design to ensure accessibility across all student demographics.",
      results: {
        engagement: { before: 48, after: 79, improvement: 31 },
        scores: { before: 71, after: 84, improvement: 13 },
        teacherSatisfaction: { before: 61, after: 89, improvement: 28 },
        parentEngagement: { before: 38, after: 69, improvement: 31 }
      },
      testimonial: {
        quote: "PadhoGram's affordability and offline features made quality education accessible to all our students, regardless of their background. The improvement has been remarkable.",
        author: "Mrs. Sunita Agarwal",
        position: "Headmistress",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      },
      keyMetrics: [
        { label: "Accessibility", value: "+95%", icon: "Wifi" },
        { label: "Cost Efficiency", value: "+60%", icon: "DollarSign" },
        { label: "Rural Reach", value: "+78%", icon: "MapPin" },
        { label: "Digital Literacy", value: "+89%", icon: "Monitor" }
      ]
    }
  ];

  const currentStudy = caseStudies?.[activeStudy];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Success Stories from Indian Schools
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how progressive educational institutions across India have transformed their learning outcomes 
              with PadhoGram's innovative platform.
            </p>
          </div>

          {/* Case Study Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {caseStudies?.map((study, index) => (
              <button
                key={study?.id}
                onClick={() => setActiveStudy(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg border transition-all ${
                  activeStudy === index
                    ? 'bg-primary text-primary-foreground border-primary shadow-soft'
                    : 'bg-card text-foreground border-border hover:border-primary/50 hover:bg-muted'
                }`}
              >
                <Icon name="School" size={16} />
                <div className="text-left">
                  <p className="font-medium text-sm">{study?.schoolName}</p>
                  <p className="text-xs opacity-80">{study?.location}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Case Study Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - School Info & Image */}
            <div className="space-y-8">
              {/* School Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-large">
                <Image
                  src={currentStudy?.image}
                  alt={currentStudy?.schoolName}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{currentStudy?.schoolName}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} />
                      <span>{currentStudy?.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={14} />
                      <span>{currentStudy?.students?.toLocaleString()} students</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* School Details */}
              <div className="bg-card rounded-2xl shadow-large border border-border p-8">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-semibold text-foreground">School Profile</h4>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {currentStudy?.type}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Challenge</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {currentStudy?.challenge}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-medium text-foreground mb-2">Solution</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {currentStudy?.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20">
                <div className="flex items-start space-x-4">
                  <Image
                    src={currentStudy?.testimonial?.avatar}
                    alt={currentStudy?.testimonial?.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <blockquote className="text-foreground italic mb-4 leading-relaxed">
                      "{currentStudy?.testimonial?.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-foreground">{currentStudy?.testimonial?.author}</p>
                      <p className="text-sm text-muted-foreground">{currentStudy?.testimonial?.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Results & Metrics */}
            <div className="space-y-8">
              {/* Key Metrics */}
              <div className="bg-card rounded-2xl shadow-large border border-border p-8">
                <h4 className="text-xl font-semibold text-foreground mb-6">Key Improvements</h4>
                
                <div className="grid grid-cols-2 gap-6">
                  {currentStudy?.keyMetrics?.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-progress/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Icon name={metric?.icon} size={24} className="text-primary" />
                      </div>
                      <p className="text-2xl font-bold text-foreground mb-1">{metric?.value}</p>
                      <p className="text-sm text-muted-foreground">{metric?.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Results */}
              <div className="bg-card rounded-2xl shadow-large border border-border p-8">
                <h4 className="text-xl font-semibold text-foreground mb-6">Performance Analytics</h4>
                
                <div className="space-y-6">
                  {Object.entries(currentStudy?.results)?.map(([key, data]) => (
                    <div key={key}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground capitalize">
                          {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                        </span>
                        <span className="text-sm font-bold text-progress">+{data?.improvement}%</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Before: {data?.before}%</span>
                          <span>After: {data?.after}%</span>
                        </div>
                        
                        <div className="relative">
                          <div className="w-full bg-muted rounded-full h-3">
                            <div 
                              className="bg-gradient-to-r from-primary to-progress h-3 rounded-full transition-all duration-1000"
                              style={{ width: `${data?.after}%` }}
                            ></div>
                          </div>
                          <div 
                            className="absolute top-0 h-3 w-1 bg-muted-foreground rounded-full"
                            style={{ left: `${data?.before}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Implementation Timeline */}
              <div className="bg-gradient-to-br from-trust/10 to-trust/5 rounded-2xl p-8 border border-trust/20">
                <h4 className="text-xl font-semibold text-foreground mb-6">Implementation Timeline</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-trust rounded-full flex items-center justify-center text-trust-foreground text-sm font-medium">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Initial Setup</p>
                      <p className="text-sm text-muted-foreground">2 weeks - Platform configuration and data migration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-trust rounded-full flex items-center justify-center text-trust-foreground text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Teacher Training</p>
                      <p className="text-sm text-muted-foreground">1 week - Comprehensive educator onboarding</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-trust rounded-full flex items-center justify-center text-trust-foreground text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Student Rollout</p>
                      <p className="text-sm text-muted-foreground">2 weeks - Gradual student onboarding and support</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-progress rounded-full flex items-center justify-center text-progress-foreground text-sm font-medium">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Full Integration</p>
                      <p className="text-sm text-muted-foreground">Ongoing - Continuous optimization and support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-progress/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join these successful institutions and transform your school's learning outcomes with PadhoGram.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" iconName="Rocket" iconPosition="left">
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg" iconName="Phone" iconPosition="left">
                  Speak with Expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;