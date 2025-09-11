import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StudyMaterialCategories = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    {
      id: 'all',
      name: 'All Materials',
      icon: 'Grid3x3',
      count: 2847,
      color: 'bg-primary',
      description: 'Complete collection of study resources'
    },
    {
      id: 'ncert',
      name: 'NCERT Solutions',
      icon: 'BookOpen',
      count: 456,
      color: 'bg-progress',
      description: 'Official NCERT textbook solutions'
    },
    {
      id: 'board-exams',
      name: 'Board Exam Prep',
      icon: 'GraduationCap',
      count: 234,
      color: 'bg-destructive',
      description: 'CBSE, ICSE, and state board preparation'
    },
    {
      id: 'competitive',
      name: 'Competitive Exams',
      icon: 'Target',
      count: 189,
      color: 'bg-accent',
      description: 'JEE, NEET, and other entrance exams'
    },
    {
      id: 'flashcards',
      name: 'Flashcards',
      icon: 'CreditCard',
      count: 892,
      color: 'bg-warning',
      description: 'Quick revision cards for all subjects'
    },
    {
      id: 'quizzes',
      name: 'Practice Quizzes',
      icon: 'HelpCircle',
      count: 567,
      color: 'bg-secondary',
      description: 'Interactive quizzes and assessments'
    },
    {
      id: 'notes',
      name: 'Study Notes',
      icon: 'FileText',
      count: 423,
      color: 'bg-trust',
      description: 'Comprehensive chapter-wise notes'
    },
    {
      id: 'videos',
      name: 'Video Lessons',
      icon: 'Play',
      count: 156,
      color: 'bg-achievement',
      description: 'Visual learning through video content'
    }
  ];

  const subjectCategories = [
    {
      name: 'Mathematics',
      icon: 'Calculator',
      topics: ['Algebra', 'Geometry', 'Calculus', 'Statistics'],
      resources: 456
    },
    {
      name: 'Physics',
      icon: 'Zap',
      topics: ['Mechanics', 'Thermodynamics', 'Optics', 'Electronics'],
      resources: 389
    },
    {
      name: 'Chemistry',
      icon: 'Atom',
      topics: ['Organic', 'Inorganic', 'Physical', 'Analytical'],
      resources: 367
    },
    {
      name: 'Biology',
      icon: 'Leaf',
      topics: ['Botany', 'Zoology', 'Genetics', 'Ecology'],
      resources: 298
    },
    {
      name: 'English',
      icon: 'BookOpen',
      topics: ['Grammar', 'Literature', 'Writing', 'Comprehension'],
      resources: 234
    },
    {
      name: 'History',
      icon: 'Clock',
      topics: ['Ancient', 'Medieval', 'Modern', 'World History'],
      resources: 189
    }
  ];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    onCategorySelect(categoryId);
  };

  return (
    <div className="space-y-8">
      {/* Main Categories */}
      <div className="bg-white rounded-xl shadow-soft border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="FolderOpen" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Study Material Categories</h3>
            <p className="text-sm text-muted-foreground">Organized by curriculum standards and content type</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => handleCategoryClick(category?.id)}
              className={`group p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                selectedCategory === category?.id
                  ? 'border-primary bg-primary/5 shadow-soft'
                  : 'border-border hover:border-primary/50 hover:bg-muted/30'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 ${category?.color} rounded-lg flex items-center justify-center ${
                  selectedCategory === category?.id ? 'shadow-soft' : ''
                }`}>
                  <Icon name={category?.icon} size={18} className="text-white" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  selectedCategory === category?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {category?.count}
                </span>
              </div>
              
              <h4 className={`font-semibold mb-2 ${
                selectedCategory === category?.id ? 'text-primary' : 'text-foreground'
              }`}>
                {category?.name}
              </h4>
              
              <p className="text-xs text-muted-foreground line-clamp-2">
                {category?.description}
              </p>
            </button>
          ))}
        </div>
      </div>
      {/* Subject Categories */}
      <div className="bg-white rounded-xl shadow-soft border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-progress/10 rounded-lg flex items-center justify-center">
              <Icon name="BookMarked" size={20} className="text-progress" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Subject-wise Resources</h3>
              <p className="text-sm text-muted-foreground">Browse by academic subjects</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Icon name="Grid3x3" size={14} />
            <span className="ml-2">View Grid</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjectCategories?.map((subject, index) => (
            <div
              key={index}
              className="group bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-all duration-200 hover:shadow-soft cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <Icon name={subject?.icon} size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {subject?.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {subject?.resources} resources
                    </p>
                  </div>
                </div>
                <Icon name="ChevronRight" size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Popular Topics
                </p>
                <div className="flex flex-wrap gap-1">
                  {subject?.topics?.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="px-2 py-1 bg-background rounded text-xs text-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Learning Styles */}
      <div className="bg-white rounded-xl shadow-soft border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="Brain" size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Learning Style Preferences</h3>
            <p className="text-sm text-muted-foreground">Content organized by learning preferences</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Icon name="Eye" size={20} className="text-primary" />
              <h4 className="font-semibold text-foreground">Visual Learning</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Diagrams, charts, infographics, and visual aids
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-primary font-medium">847 resources</span>
              <Button variant="ghost" size="sm">
                <Icon name="ArrowRight" size={14} />
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-progress/5 to-progress/10 border border-progress/20 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Icon name="Headphones" size={20} className="text-progress" />
              <h4 className="font-semibold text-foreground">Auditory Learning</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Audio lessons, podcasts, and verbal explanations
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-progress font-medium">423 resources</span>
              <Button variant="ghost" size="sm">
                <Icon name="ArrowRight" size={14} />
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Icon name="Hand" size={20} className="text-accent" />
              <h4 className="font-semibold text-foreground">Kinesthetic Learning</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Interactive simulations and hands-on activities
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-accent font-medium">356 resources</span>
              <Button variant="ghost" size="sm">
                <Icon name="ArrowRight" size={14} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialCategories;