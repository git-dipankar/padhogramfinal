import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SearchBar from './components/SearchBar';
import DigitalDictionary from './components/DigitalDictionary';
import TrendingTopics from './components/TrendingTopics';
import StudyMaterialCategories from './components/StudyMaterialCategories';
import ContentPreview from './components/ContentPreview';
import BookmarkManager from './components/BookmarkManager';

const ResourceDiscoveryCenter = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    subject: '',
    difficulty: '',
    contentType: '',
    verifiedOnly: false,
    freeOnly: false
  });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showDictionary, setShowDictionary] = useState(false);

  useEffect(() => {
    document.title = 'Resource Discovery Center - PadhoGram';
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log('Filters updated:', newFilters);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    console.log('Category selected:', categoryId);
  };

  const quickStats = [
    {
      label: 'Total Resources',
      value: '2,847',
      icon: 'BookOpen',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      label: 'Verified Content',
      value: '1,234',
      icon: 'CheckCircle',
      color: 'text-progress',
      bgColor: 'bg-progress/10'
    },
    {
      label: 'Free Resources',
      value: '1,890',
      icon: 'Gift',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      label: 'Active Users',
      value: '45,678',
      icon: 'Users',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        isCollapsed={sidebarCollapsed} 
        onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      <main className={`pt-16 transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-80'
      }`}>
        <div className="p-6 space-y-8">
          {/* Page Header */}
          <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-progress/10 rounded-xl p-8 learning-particles">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Resource Discovery Center
                </h1>
                <p className="text-lg text-muted-foreground">
                  Explore our comprehensive knowledge hub with powerful search and discovery tools
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button
                  variant={showDictionary ? 'default' : 'outline'}
                  onClick={() => setShowDictionary(!showDictionary)}
                >
                  <Icon name="BookOpen" size={16} />
                  <span className="ml-2">Dictionary</span>
                </Button>
                <BookmarkManager />
              </div>
            </div>


            {/* Video Resources */}
            <div className="mt-6 p-4 border rounded bg-white/60">
              <h3 className="font-semibold mb-2">Video Resources (Science, Math, English)</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/LQwZwKS9RPs?si=2phXZ0XX6CNn-wAS">Science — How volcanoes work (YouTube)</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/5hG8e9jGeaA?si=vBGQAXbxauCj8ykw">Math — Quick fractions lesson (YouTube)</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/W7BW9gv_OkU?si=Tb2XWOYyTvWIJ7aY">English — Reading comprehension tips (YouTube)</a></li>
              </ul>
            </div>
    
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickStats?.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${stat?.bgColor} rounded-lg flex items-center justify-center`}>
                      <Icon name={stat?.icon} size={18} className={stat?.color} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stat?.value}</p>
                      <p className="text-sm text-muted-foreground">{stat?.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search Section */}
          <SearchBar 
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
            filters={filters}
          />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Categories and Dictionary */}
            <div className="lg:col-span-1 space-y-8">
              <StudyMaterialCategories onCategorySelect={handleCategorySelect} />
              
              {showDictionary && <DigitalDictionary />}
            </div>

            {/* Right Column - Content and Trending */}
            <div className="lg:col-span-2 space-y-8">
              <TrendingTopics />
              
              <ContentPreview selectedFilters={filters} />
            </div>
          </div>

          {/* Featured Collections */}
          <div className="bg-white rounded-xl shadow-soft border border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-achievement/10 rounded-lg flex items-center justify-center">
                  <Icon name="Star" size={20} className="text-achievement" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Featured Collections</h3>
                  <p className="text-sm text-muted-foreground">Curated study material collections</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Icon name="ArrowRight" size={14} />
                <span className="ml-2">View All</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "CBSE Class 10 Complete Package",
                  description: "All subjects covered with NCERT solutions, practice tests, and revision notes",
                  resources: 156,
                  subjects: ["Math", "Science", "Social Science", "English", "Hindi"],
                  rating: 4.8,
                  thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop"
                },
                {
                  title: "JEE Main Preparation Kit",
                  description: "Comprehensive preparation material for JEE Main with previous year papers",
                  resources: 234,
                  subjects: ["Physics", "Chemistry", "Mathematics"],
                  rating: 4.9,
                  thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop"
                },
                {
                  title: "NEET Biology Mastery",
                  description: "Complete biology preparation for NEET with diagrams and practice questions",
                  resources: 189,
                  subjects: ["Botany", "Zoology", "Human Physiology"],
                  rating: 4.7,
                  thumbnail: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=300&h=200&fit=crop"
                }
              ]?.map((collection, index) => (
                <div
                  key={index}
                  className="group bg-muted/30 rounded-lg overflow-hidden hover:bg-muted/50 transition-all duration-200 hover:shadow-soft cursor-pointer"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={collection?.thumbnail}
                      alt={collection?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-medium">
                          {collection?.resources} resources
                        </span>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={12} className="text-accent fill-current" />
                          <span className="text-white text-sm">{collection?.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {collection?.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {collection?.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {collection?.subjects?.slice(0, 3)?.map((subject, subIndex) => (
                        <span
                          key={subIndex}
                          className="px-2 py-1 bg-background text-muted-foreground text-xs rounded"
                        >
                          {subject}
                        </span>
                      ))}
                      {collection?.subjects?.length > 3 && (
                        <span className="px-2 py-1 bg-background text-muted-foreground text-xs rounded">
                          +{collection?.subjects?.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-trust/10 to-primary/10 rounded-xl p-6 border border-trust/20">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-trust rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="HelpCircle" size={24} className="text-trust-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Need Help Finding Resources?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our AI-powered search understands natural language queries. Try searching for "Class 10 math quadratic equations practice" or "NEET biology previous year questions".
                </p>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm">
                    <Icon name="MessageCircle" size={14} />
                    <span className="ml-2">Chat Support</span>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="BookOpen" size={14} />
                    <span className="ml-2">User Guide</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResourceDiscoveryCenter;