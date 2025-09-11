import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const SchoolLoginWidget = () => {
  const [loginType, setLoginType] = useState('school');
  const [formData, setFormData] = useState({
    schoolCode: '',
    username: '',
    password: '',
    board: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const boardOptions = [
    { value: 'cbse', label: 'CBSE - Central Board of Secondary Education' },
    { value: 'icse', label: 'ICSE - Indian Certificate of Secondary Education' },
    { value: 'state', label: 'State Board' },
    { value: 'ib', label: 'International Baccalaureate' },
    { value: 'cambridge', label: 'Cambridge International' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setError('');

    // Mock validation
    if (!formData?.schoolCode || !formData?.username || !formData?.password) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    // Mock credentials validation
    const validCredentials = {
      schoolCode: 'DEMO2024',
      username: 'admin@school.edu',
      password: 'SchoolAdmin123'
    };

    setTimeout(() => {
      if (
        formData?.schoolCode === validCredentials?.schoolCode &&
        formData?.username === validCredentials?.username &&
        formData?.password === validCredentials?.password
      ) {
        // Successful login
        console.log('Login successful');
        setIsLoading(false);
      } else {
        setError('Invalid credentials. Use School Code: DEMO2024, Username: admin@school.edu, Password: SchoolAdmin123');
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Institutional Access Portal
            </h2>
            <p className="text-lg text-muted-foreground">
              Secure login for schools, administrators, and educators
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Login Form */}
            <div className="bg-card rounded-2xl shadow-large p-8 border border-border">
              <div className="space-y-6">
                {/* Login Type Selector */}
                <div className="flex bg-muted rounded-lg p-1">
                  <button
                    onClick={() => setLoginType('school')}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                      loginType === 'school' ?'bg-primary text-primary-foreground shadow-soft' :'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon name="School" size={16} />
                    <span>School Admin</span>
                  </button>
                  <button
                    onClick={() => setLoginType('educator')}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                      loginType === 'educator' ?'bg-primary text-primary-foreground shadow-soft' :'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon name="UserCheck" size={16} />
                    <span>Educator</span>
                  </button>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <Input
                    label="School Code"
                    type="text"
                    placeholder="Enter your institution code"
                    value={formData?.schoolCode}
                    onChange={(e) => handleInputChange('schoolCode', e?.target?.value)}
                    required
                    description="Provided by your institution administrator"
                  />

                  <Select
                    label="Educational Board"
                    placeholder="Select your board"
                    options={boardOptions}
                    value={formData?.board}
                    onChange={(value) => handleInputChange('board', value)}
                    searchable
                    description="Choose your curriculum board"
                  />

                  <Input
                    label="Username / Email"
                    type="email"
                    placeholder="Enter your username or email"
                    value={formData?.username}
                    onChange={(e) => handleInputChange('username', e?.target?.value)}
                    required
                  />

                  <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData?.password}
                    onChange={(e) => handleInputChange('password', e?.target?.value)}
                    required
                  />
                </div>

                {error && (
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="AlertCircle" size={16} className="text-destructive mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-destructive">Login Failed</p>
                        <p className="text-sm text-destructive/80 mt-1">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Login Button */}
                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isLoading}
                  onClick={handleLogin}
                  iconName="LogIn"
                  iconPosition="left"
                >
                  {isLoading ? 'Authenticating...' : 'Access Dashboard'}
                </Button>

                {/* Additional Options */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <a href="#" className="text-primary hover:underline">Forgot Password?</a>
                    <a href="#" className="text-primary hover:underline">Need Help?</a>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      New institution? 
                      <a href="#" className="text-primary hover:underline ml-1">Request Access</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SSO Options & Info */}
            <div className="space-y-6">
              {/* SSO Login */}
              <div className="bg-card rounded-2xl shadow-large p-8 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Single Sign-On</h3>
                
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    size="lg"
                    fullWidth
                    iconName="Shield"
                    iconPosition="left"
                  >
                    Login with School SSO
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    fullWidth
                    iconName="Chrome"
                    iconPosition="left"
                  >
                    Continue with Google Workspace
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    fullWidth
                    iconName="Building"
                    iconPosition="left"
                  >
                    Microsoft 365 for Education
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-trust/10 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" size={16} className="text-trust mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Secure Authentication</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        All login attempts are encrypted and monitored for security compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-primary/10 to-progress/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Platform Statistics</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="School" size={20} className="text-primary-foreground" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">Schools</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-progress rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Users" size={20} className="text-progress-foreground" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">50K+</p>
                    <p className="text-sm text-muted-foreground">Students</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="BookOpen" size={20} className="text-accent-foreground" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">15+</p>
                    <p className="text-sm text-muted-foreground">Subjects</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-trust rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Award" size={20} className="text-trust-foreground" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">98%</p>
                    <p className="text-sm text-muted-foreground">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolLoginWidget;