import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContentPreview = ({ selectedFilters }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');

  const studyMaterials = [
    {
      id: 1,
      title: "Quadratic Equations - Complete Guide",
      type: "Study Notes",
      subject: "Mathematics",
      difficulty: "Intermediate",
      duration: "45 min",
      rating: 4.8,
      reviews: 234,
      studentsEnrolled: 1250,
      isVerified: true,
      isFree: true,
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
      description: "Master quadratic equations with step-by-step solutions, practice problems, and real-world applications.",
      tags: ["Algebra", "Equations", "Class 10", "NCERT"],
      author: {
        name: "Dr. Priya Sharma",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        verified: true
      },
      lastUpdated: "2 days ago",
      completionRate: 87
    },
    {
      id: 2,
      title: "Photosynthesis Interactive Quiz",
      type: "Quiz",
      subject: "Biology",
      difficulty: "Beginner",
      duration: "20 min",
      rating: 4.6,
      reviews: 189,
      studentsEnrolled: 890,
      isVerified: true,
      isFree: false,
      thumbnail: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=400&h=250&fit=crop",
      description: "Test your understanding of photosynthesis with interactive questions and instant feedback.",
      tags: ["Biology", "Plants", "Life Processes", "Class 7"],
      author: {
        name: "Prof. Rajesh Kumar",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        verified: true
      },
      lastUpdated: "1 week ago",
      completionRate: 92
    },
    {
      id: 3,
      title: "Indian Independence Movement Flashcards",
      type: "Flashcards",
      subject: "History",
      difficulty: "Intermediate",
      duration: "30 min",
      rating: 4.7,
      reviews: 156,
      studentsEnrolled: 670,
      isVerified: false,
      isFree: true,
      thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
      description: "Quick revision cards covering key events, dates, and personalities of India's freedom struggle.",
      tags: ["History", "Freedom Struggle", "Gandhi", "Class 8"],
      author: {
        name: "Anita Desai",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        verified: false
      },
      lastUpdated: "3 days ago",
      completionRate: 78
    },
    {
      id: 4,
      title: "Chemical Bonding Video Series",
      type: "Video",
      subject: "Chemistry",
      difficulty: "Advanced",
      duration: "2h 15min",
      rating: 4.9,
      reviews: 298,
      studentsEnrolled: 1450,
      isVerified: true,
      isFree: false,
      thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop",
      description: "Comprehensive video lessons on ionic, covalent, and metallic bonding with 3D animations.",
      tags: ["Chemistry", "Bonding", "Molecules", "Class 11"],
      author: {
        name: "Dr. Vikram Singh",
        avatar: "https://randomuser.me/api/portraits/men/38.jpg",
        verified: true
      },
      lastUpdated: "5 days ago",
      completionRate: 85
    },
    {
      id: 5,
      title: "English Grammar Practice Tests",
      type: "Practice Test",
      subject: "English",
      difficulty: "Beginner",
      duration: "1h 30min",
      rating: 4.5,
      reviews: 167,
      studentsEnrolled: 980,
      isVerified: true,
      isFree: true,
      thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop",
      description: "Comprehensive grammar tests covering tenses, parts of speech, and sentence structure.",
      tags: ["English", "Grammar", "Communication", "All Classes"],
      author: {
        name: "Sarah Johnson",
        avatar: "https://randomuser.me/api/portraits/women/42.jpg",
        verified: true
      },
      lastUpdated: "1 day ago",
      completionRate: 91
    },
    {
      id: 6,
      title: "Physics Laws of Motion Simulator",
      type: "Interactive",
      subject: "Physics",
      difficulty: "Intermediate",
      duration: "40 min",
      rating: 4.8,
      reviews: 203,
      studentsEnrolled: 1120,
      isVerified: true,
      isFree: false,
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
      description: "Interactive physics simulator to understand Newton\'s laws of motion with real-time experiments.",
      tags: ["Physics", "Motion", "Newton\'s Laws", "Class 9"],
      author: {
        name: "Dr. Amit Patel",
        avatar: "https://randomuser.me/api/portraits/men/35.jpg",
        verified: true
      },
      lastUpdated: "4 days ago",
      completionRate: 89
    }
  ];

  const getTypeIcon = (type) => {
    const icons = {
      'Study Notes': 'FileText',
      'Quiz': 'HelpCircle',
      'Flashcards': 'CreditCard',
      'Video': 'Play',
      'Practice Test': 'CheckSquare',
      'Interactive': 'Gamepad2'
    };
    return icons?.[type] || 'BookOpen';
  };

  const getTypeColor = (type) => {
    const colors = {
      'Study Notes': 'bg-primary',
      'Quiz': 'bg-accent',
      'Flashcards': 'bg-warning',
      'Video': 'bg-destructive',
      'Practice Test': 'bg-progress',
      'Interactive': 'bg-secondary'
    };
    return colors?.[type] || 'bg-muted';
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': 'text-progress bg-progress/10',
      'Intermediate': 'text-accent bg-accent/10',
      'Advanced': 'text-destructive bg-destructive/10'
    };
    return colors?.[difficulty] || 'text-muted-foreground bg-muted';
  };

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {studyMaterials?.map((material) => (
        <div
          key={material?.id}
          className="group bg-white rounded-xl shadow-soft border border-border overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-1"
        >
          {/* Thumbnail */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={material?.thumbnail}
              alt={material?.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3 flex items-center space-x-2">
              <span className={`px-2 py-1 ${getTypeColor(material?.type)} text-white text-xs font-medium rounded-full flex items-center space-x-1`}>
                <Icon name={getTypeIcon(material?.type)} size={12} />
                <span>{material?.type}</span>
              </span>
              {material?.isVerified && (
                <span className="px-2 py-1 bg-progress text-progress-foreground text-xs font-medium rounded-full flex items-center space-x-1">
                  <Icon name="CheckCircle" size={12} />
                  <span>Verified</span>
                </span>
              )}
            </div>
            <div className="absolute top-3 right-3">
              {material?.isFree ? (
                <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                  Free
                </span>
              ) : (
                <span className="px-2 py-1 bg-warning text-warning-foreground text-xs font-medium rounded-full">
                  Premium
                </span>
              )}
            </div>
            <div className="absolute bottom-3 right-3">
              <Button variant="secondary" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="Play" size={16} />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground font-medium">{material?.subject}</span>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(material?.difficulty)}`}>
                {material?.difficulty}
              </span>
            </div>

            <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {material?.title}
            </h3>

            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {material?.description}
            </p>

            {/* Author */}
            <div className="flex items-center space-x-2 mb-3">
              <img
                src={material?.author?.avatar}
                alt={material?.author?.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-xs text-muted-foreground">{material?.author?.name}</span>
              {material?.author?.verified && (
                <Icon name="BadgeCheck" size={12} className="text-primary" />
              )}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={12} className="text-accent fill-current" />
                  <span className="text-xs font-medium text-foreground">{material?.rating}</span>
                  <span className="text-xs text-muted-foreground">({material?.reviews})</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={12} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{material?.duration}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {material?.tags?.slice(0, 3)?.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={12} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {material?.studentsEnrolled?.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Icon name="Bookmark" size={14} />
                </Button>
                <Button variant="default" size="sm">
                  Start Learning
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="space-y-4">
      {studyMaterials?.map((material) => (
        <div
          key={material?.id}
          className="bg-white rounded-xl shadow-soft border border-border p-6 hover:shadow-large transition-all duration-200"
        >
          <div className="flex items-start space-x-4">
            {/* Thumbnail */}
            <div className="relative w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={material?.thumbnail}
                alt={material?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Icon name="Play" size={20} className="text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 ${getTypeColor(material?.type)} text-white text-xs font-medium rounded-full flex items-center space-x-1`}>
                    <Icon name={getTypeIcon(material?.type)} size={12} />
                    <span>{material?.type}</span>
                  </span>
                  <span className="text-xs text-muted-foreground">{material?.subject}</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(material?.difficulty)}`}>
                    {material?.difficulty}
                  </span>
                  {material?.isVerified && (
                    <Icon name="CheckCircle" size={14} className="text-progress" />
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Icon name="Bookmark" size={14} />
                  </Button>
                  <Button variant="default" size="sm">
                    Start Learning
                  </Button>
                </div>
              </div>

              <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                {material?.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {material?.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <img
                      src={material?.author?.avatar}
                      alt={material?.author?.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-xs text-muted-foreground">{material?.author?.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={12} className="text-accent fill-current" />
                    <span className="text-xs font-medium text-foreground">{material?.rating}</span>
                    <span className="text-xs text-muted-foreground">({material?.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{material?.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={12} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {material?.studentsEnrolled?.toLocaleString()}
                    </span>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  material?.isFree ? 'bg-accent/10 text-accent' : 'bg-warning/10 text-warning'
                }`}>
                  {material?.isFree ? 'Free' : 'Premium'}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-white rounded-xl shadow-soft border border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-foreground">
              {studyMaterials?.length} resources found
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e?.target?.value)}
                className="text-sm border border-border rounded px-2 py-1 focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="relevance">Relevance</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('grid')}
            >
              <Icon name="Grid3x3" size={16} />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('list')}
            >
              <Icon name="List" size={16} />
            </Button>
          </div>
        </div>
      </div>
      {/* Content */}
      {viewMode === 'grid' ? <GridView /> : <ListView />}
      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          <Icon name="ChevronDown" size={16} />
          <span className="ml-2">Load More Resources</span>
        </Button>
      </div>
    </div>
  );
};

export default ContentPreview;