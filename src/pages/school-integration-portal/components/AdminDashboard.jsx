import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const dashboardTabs = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'students', label: 'Students', icon: 'Users' },
    { id: 'analytics', label: 'Analytics', icon: 'BarChart3' },
    { id: 'reports', label: 'Reports', icon: 'FileText' }
  ];

  const studentData = [
    { id: 1, name: 'Arjun Sharma', class: '10-A', subject: 'Mathematics', score: 92, status: 'active', lastActive: '2 hours ago' },
    { id: 2, name: 'Priya Patel', class: '9-B', subject: 'Science', score: 88, status: 'active', lastActive: '1 hour ago' },
    { id: 3, name: 'Rahul Kumar', class: '10-C', subject: 'English', score: 85, status: 'inactive', lastActive: '1 day ago' },
    { id: 4, name: 'Sneha Gupta', class: '8-A', subject: 'Hindi', score: 94, status: 'active', lastActive: '30 minutes ago' },
    { id: 5, name: 'Vikram Singh', class: '9-A', subject: 'Social Studies', score: 78, status: 'active', lastActive: '3 hours ago' }
  ];

  const classPerformance = [
    { class: '10-A', students: 35, avgScore: 87.5, improvement: '+5.2%', engagement: 92 },
    { class: '10-B', students: 32, avgScore: 84.2, improvement: '+3.8%', engagement: 88 },
    { class: '9-A', students: 38, avgScore: 89.1, improvement: '+7.1%', engagement: 95 },
    { class: '9-B', students: 34, avgScore: 82.7, improvement: '+2.4%', engagement: 85 },
    { class: '8-A', students: 40, avgScore: 91.3, improvement: '+8.5%', engagement: 97 }
  ];

  const recentActivities = [
    { type: 'quiz', message: 'Class 10-A completed Mathematics Quiz #15', time: '2 hours ago', icon: 'BookOpen' },
    { type: 'achievement', message: 'Priya Patel earned "Science Explorer" badge', time: '3 hours ago', icon: 'Award' },
    { type: 'enrollment', message: '5 new students enrolled in Class 9-C', time: '5 hours ago', icon: 'UserPlus' },
    { type: 'report', message: 'Monthly progress report generated', time: '1 day ago', icon: 'FileText' },
    { type: 'alert', message: 'Low engagement alert for Class 8-B', time: '1 day ago', icon: 'AlertTriangle' }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Administrative Dashboard Preview
            </h2>
            <p className="text-lg text-muted-foreground">
              Real-time insights into student progress, class performance, and institutional analytics
            </p>
          </div>

          {/* Dashboard Interface */}
          <div className="bg-card rounded-2xl shadow-large border border-border overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Delhi Public School</h3>
                  <p className="opacity-90">Administrative Dashboard</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm opacity-90">Last Updated</p>
                    <p className="font-semibold">Dec 09, 2024 - 09:48 AM</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="School" size={24} />
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-border">
              <div className="flex space-x-0">
                {dashboardTabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-all ${
                      activeTab === tab?.id
                        ? 'border-primary text-primary bg-primary/5' :'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <Icon name="Users" size={20} className="text-primary-foreground" />
                        </div>
                        <span className="text-xs bg-progress/20 text-progress px-2 py-1 rounded-full">+12%</span>
                      </div>
                      <h4 className="text-2xl font-bold text-foreground">1,247</h4>
                      <p className="text-sm text-muted-foreground">Total Students</p>
                    </div>

                    <div className="bg-gradient-to-br from-progress/10 to-progress/5 rounded-lg p-6 border border-progress/20">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-progress rounded-lg flex items-center justify-center">
                          <Icon name="TrendingUp" size={20} className="text-progress-foreground" />
                        </div>
                        <span className="text-xs bg-progress/20 text-progress px-2 py-1 rounded-full">+5.2%</span>
                      </div>
                      <h4 className="text-2xl font-bold text-foreground">87.5%</h4>
                      <p className="text-sm text-muted-foreground">Average Score</p>
                    </div>

                    <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-6 border border-accent/20">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                          <Icon name="Clock" size={20} className="text-accent-foreground" />
                        </div>
                        <span className="text-xs bg-progress/20 text-progress px-2 py-1 rounded-full">+18%</span>
                      </div>
                      <h4 className="text-2xl font-bold text-foreground">4.2h</h4>
                      <p className="text-sm text-muted-foreground">Daily Engagement</p>
                    </div>

                    <div className="bg-gradient-to-br from-trust/10 to-trust/5 rounded-lg p-6 border border-trust/20">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-trust rounded-lg flex items-center justify-center">
                          <Icon name="Award" size={20} className="text-trust-foreground" />
                        </div>
                        <span className="text-xs bg-progress/20 text-progress px-2 py-1 rounded-full">+25%</span>
                      </div>
                      <h4 className="text-2xl font-bold text-foreground">342</h4>
                      <p className="text-sm text-muted-foreground">Achievements</p>
                    </div>
                  </div>

                  {/* Recent Activities */}
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Recent Activities</h4>
                    <div className="space-y-4">
                      {recentActivities?.map((activity, index) => (
                        <div key={index} className="flex items-center space-x-4 p-3 bg-background rounded-lg">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            activity?.type === 'quiz' ? 'bg-primary/10 text-primary' :
                            activity?.type === 'achievement' ? 'bg-accent/10 text-accent' :
                            activity?.type === 'enrollment' ? 'bg-progress/10 text-progress' :
                            activity?.type === 'report'? 'bg-trust/10 text-trust' : 'bg-warning/10 text-warning'
                          }`}>
                            <Icon name={activity?.icon} size={16} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">{activity?.message}</p>
                            <p className="text-xs text-muted-foreground">{activity?.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'students' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-foreground">Student Management</h4>
                    <div className="flex items-center space-x-3">
                      <Button variant="outline" size="sm" iconName="Download">
                        Export Data
                      </Button>
                      <Button variant="default" size="sm" iconName="UserPlus">
                        Add Student
                      </Button>
                    </div>
                  </div>

                  <div className="bg-background rounded-lg border border-border overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-muted/50">
                          <tr>
                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Student</th>
                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Class</th>
                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Subject</th>
                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Score</th>
                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Last Active</th>
                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {studentData?.map((student) => (
                            <tr key={student?.id} className="border-t border-border hover:bg-muted/30">
                              <td className="p-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-progress rounded-full flex items-center justify-center">
                                    <span className="text-xs font-medium text-white">
                                      {student?.name?.split(' ')?.map(n => n?.[0])?.join('')}
                                    </span>
                                  </div>
                                  <span className="font-medium text-foreground">{student?.name}</span>
                                </div>
                              </td>
                              <td className="p-4 text-sm text-foreground">{student?.class}</td>
                              <td className="p-4 text-sm text-foreground">{student?.subject}</td>
                              <td className="p-4">
                                <span className={`text-sm font-medium ${
                                  student?.score >= 90 ? 'text-progress' :
                                  student?.score >= 80 ? 'text-accent': 'text-warning'
                                }`}>
                                  {student?.score}%
                                </span>
                              </td>
                              <td className="p-4">
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                  student?.status === 'active' ?'bg-progress/20 text-progress' :'bg-muted text-muted-foreground'
                                }`}>
                                  {student?.status}
                                </span>
                              </td>
                              <td className="p-4 text-sm text-muted-foreground">{student?.lastActive}</td>
                              <td className="p-4">
                                <Button variant="ghost" size="sm" iconName="MoreHorizontal" />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-foreground">Class Performance Analytics</h4>
                  
                  <div className="grid gap-6">
                    {classPerformance?.map((classData, index) => (
                      <div key={index} className="bg-background rounded-lg border border-border p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h5 className="text-lg font-semibold text-foreground">Class {classData?.class}</h5>
                            <p className="text-sm text-muted-foreground">{classData?.students} students</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-foreground">{classData?.avgScore}%</p>
                            <p className={`text-sm font-medium ${
                              classData?.improvement?.startsWith('+') ? 'text-progress' : 'text-warning'
                            }`}>
                              {classData?.improvement}
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Engagement Rate</span>
                            <span className="font-medium text-foreground">{classData?.engagement}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-primary to-progress h-2 rounded-full transition-all duration-500"
                              style={{ width: `${classData?.engagement}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reports' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-foreground">Progress Reports</h4>
                    <Button variant="default" size="sm" iconName="Plus">
                      Generate Report
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <Icon name="FileText" size={20} className="text-primary-foreground" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground">Monthly Progress Report</h5>
                          <p className="text-sm text-muted-foreground">November 2024</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Comprehensive analysis of student performance, engagement metrics, and learning outcomes.
                      </p>
                      <Button variant="outline" size="sm" iconName="Download">
                        Download PDF
                      </Button>
                    </div>

                    <div className="bg-gradient-to-br from-progress/10 to-progress/5 rounded-lg p-6 border border-progress/20">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-progress rounded-lg flex items-center justify-center">
                          <Icon name="BarChart3" size={20} className="text-progress-foreground" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground">Performance Analytics</h5>
                          <p className="text-sm text-muted-foreground">Real-time Data</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Interactive dashboard with detailed insights into class performance and individual progress.
                      </p>
                      <Button variant="outline" size="sm" iconName="ExternalLink">
                        View Dashboard
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;