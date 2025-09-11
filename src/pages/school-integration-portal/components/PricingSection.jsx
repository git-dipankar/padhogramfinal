import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('annual');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small schools getting started with digital learning',
      price: {
        monthly: 15,
        annual: 12
      },
      studentRange: 'Up to 200 students',
      features: [
        'Basic curriculum mapping (CBSE/ICSE/State)',
        'Student progress tracking',
        'Basic quiz creation tools',
        'Parent-teacher communication',
        'Mobile app access',
        'Email support',
        'Basic analytics dashboard',
        'Offline content access'
      ],
      limitations: [
        'Limited to 5 subjects',
        'Basic reporting only',
        'Standard support hours'
      ],
      color: 'trust',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Comprehensive solution for medium to large educational institutions',
      price: {
        monthly: 25,
        annual: 20
      },
      studentRange: 'Up to 1,000 students',
      features: [
        'Complete curriculum alignment (All boards)',
        'Advanced analytics & insights',
        'Bulk student enrollment',
        'Custom quiz & assessment creation',
        'Automated progress reports',
        'Parent engagement portal',
        'Teacher collaboration tools',
        'Priority support',
        'Advanced mobile features',
        'Integration with school systems',
        'Gamification features',
        'Performance benchmarking'
      ],
      limitations: [],
      color: 'primary',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Tailored solution for large institutions with advanced requirements',
      price: {
        monthly: 'Custom',
        annual: 'Custom'
      },
      studentRange: 'Unlimited students',
      features: [
        'Everything in Professional',
        'Custom curriculum development',
        'Advanced AI-powered insights',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security features',
        '24/7 priority support',
        'On-site training',
        'Custom reporting',
        'Multi-campus management',
        'API access'
      ],
      limitations: [],
      color: 'accent',
      popular: false
    }
  ];

  const addOnServices = [
    {
      name: 'Professional Training',
      description: 'Comprehensive on-site teacher training program',
      price: '₹25,000',
      duration: 'One-time',
      icon: 'GraduationCap'
    },
    {
      name: 'Custom Content Development',
      description: 'Tailored educational content for your curriculum',
      price: '₹15,000',
      duration: 'Per subject',
      icon: 'BookOpen'
    },
    {
      name: 'Advanced Analytics Package',
      description: 'Enhanced reporting and predictive analytics',
      price: '₹8,000',
      duration: 'Per year',
      icon: 'BarChart3'
    },
    {
      name: 'Parent Engagement Suite',
      description: 'Advanced parent communication and engagement tools',
      price: '₹5,000',
      duration: 'Per year',
      icon: 'Users'
    }
  ];

  const calculateSavings = (monthlyPrice, annualPrice) => {
    if (typeof monthlyPrice !== 'number' || typeof annualPrice !== 'number') return 0;
    const monthlyCost = monthlyPrice * 12;
    const annualCost = annualPrice * 12;
    return Math.round(((monthlyCost - annualCost) / monthlyCost) * 100);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Transparent Institutional Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Affordable per-student pricing designed specifically for Indian educational institutions. 
              No hidden fees, no long-term contracts required.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-card rounded-lg p-1 border border-border">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  billingCycle === 'monthly' ?'bg-primary text-primary-foreground shadow-soft' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  billingCycle === 'annual' ?'bg-primary text-primary-foreground shadow-soft' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                Annual
                <span className="ml-2 bg-progress/20 text-progress px-2 py-0.5 rounded-full text-xs">
                  Save up to 20%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {pricingPlans?.map((plan) => (
              <div
                key={plan?.id}
                className={`relative bg-card rounded-2xl shadow-large border transition-all hover:shadow-xl ${
                  plan?.popular 
                    ? 'border-primary ring-2 ring-primary/20 scale-105' :'border-border hover:border-primary/50'
                } ${selectedPlan === plan?.id ? 'ring-2 ring-primary/30' : ''}`}
              >
                {plan?.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-soft">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-${plan?.color}/10 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon name="School" size={28} className={`text-${plan?.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan?.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan?.description}</p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      {typeof plan?.price?.[billingCycle] === 'number' ? (
                        <div>
                          <div className="flex items-baseline justify-center">
                            <span className="text-4xl font-bold text-foreground">₹{plan?.price?.[billingCycle]}</span>
                            <span className="text-muted-foreground ml-2">per student/{billingCycle === 'annual' ? 'year' : 'month'}</span>
                          </div>
                          {billingCycle === 'annual' && (
                            <p className="text-sm text-progress mt-2">
                              Save {calculateSavings(plan?.price?.monthly, plan?.price?.annual)}% annually
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="text-2xl font-bold text-foreground">Custom Pricing</div>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{plan?.studentRange}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-foreground">What's included:</h4>
                    <ul className="space-y-3">
                      {plan?.features?.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icon name="Check" size={16} className="text-progress flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan?.limitations?.length > 0 && (
                      <div className="pt-4 border-t border-border">
                        <h5 className="text-sm font-medium text-muted-foreground mb-2">Limitations:</h5>
                        <ul className="space-y-2">
                          {plan?.limitations?.map((limitation, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <Icon name="Minus" size={16} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={plan?.popular ? 'default' : 'outline'}
                    size="lg"
                    fullWidth
                    onClick={() => setSelectedPlan(plan?.id)}
                    iconName={plan?.id === 'enterprise' ? 'Phone' : 'ArrowRight'}
                    iconPosition="right"
                  >
                    {plan?.id === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Add-on Services */}
          <div className="bg-card rounded-2xl shadow-large border border-border p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Optional Add-on Services</h3>
              <p className="text-muted-foreground">
                Enhance your PadhoGram experience with these professional services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOnServices?.map((service, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={service?.icon} size={20} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{service?.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{service?.description}</p>
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">{service?.price}</p>
                    <p className="text-xs text-muted-foreground">{service?.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Proposition */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Why Schools Choose PadhoGram
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="DollarSign" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Cost-Effective Solution</h4>
                    <p className="text-sm text-muted-foreground">
                      Significantly lower per-student cost compared to traditional educational software, 
                      with transparent pricing and no hidden fees.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-progress/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={20} className="text-progress" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Quick Implementation</h4>
                    <p className="text-sm text-muted-foreground">
                      Get started in just 2 weeks with our streamlined onboarding process 
                      and dedicated implementation support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Data Security & Privacy</h4>
                    <p className="text-sm text-muted-foreground">
                      Enterprise-grade security with GDPR compliance and local data storage 
                      to protect student information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-trust/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="HeadphonesIcon" size={20} className="text-trust" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Local Support Team</h4>
                    <p className="text-sm text-muted-foreground">
                      Dedicated Indian support team with deep understanding of local 
                      educational requirements and curriculum standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-progress/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Calculate Your Investment
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Number of students:</span>
                  <span className="font-medium text-foreground">500</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Selected plan:</span>
                  <span className="font-medium text-foreground capitalize">{selectedPlan}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Billing cycle:</span>
                  <span className="font-medium text-foreground capitalize">{billingCycle}</span>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground">Total cost:</span>
                  <span className="text-2xl font-bold text-foreground">
                    ₹{(500 * (pricingPlans?.find(p => p?.id === selectedPlan)?.price?.[billingCycle] || 0))?.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Per {billingCycle === 'annual' ? 'year' : 'month'} for 500 students
                </p>
              </div>

              <div className="mt-6">
                <Button variant="default" size="lg" fullWidth iconName="Calculator" iconPosition="left">
                  Get Custom Quote
                </Button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Have Questions About Pricing?
            </h3>
            <p className="text-muted-foreground mb-8">
              Our team is here to help you find the perfect plan for your institution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" iconName="MessageCircle" iconPosition="left">
                Chat with Sales
              </Button>
              <Button variant="outline" size="lg" iconName="Calendar" iconPosition="left">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;