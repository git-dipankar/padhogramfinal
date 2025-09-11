import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const BookmarkManager = () => {
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [newCollectionName, setNewCollectionName] = useState('');
  const [showCreateCollection, setShowCreateCollection] = useState(false);

  const collections = [
    {
      id: 'all',
      name: 'All Bookmarks',
      count: 24,
      icon: 'Bookmark',
      color: 'bg-primary'
    },
    {
      id: 'exam-prep',
      name: 'Exam Preparation',
      count: 8,
      icon: 'GraduationCap',
      color: 'bg-destructive'
    },
    {
      id: 'quick-revision',
      name: 'Quick Revision',
      count: 12,
      icon: 'Zap',
      color: 'bg-accent'
    },
    {
      id: 'favorites',
      name: 'Favorites',
      count: 4,
      icon: 'Heart',
      color: 'bg-progress'
    }
  ];

  const bookmarkedItems = [
    {
      id: 1,
      title: "Quadratic Equations - Complete Guide",
      type: "Study Notes",
      subject: "Mathematics",
      collection: "exam-prep",
      dateAdded: "2 days ago",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=100&h=60&fit=crop",
      tags: ["Algebra", "Class 10"]
    },
    {
      id: 2,
      title: "Photosynthesis Interactive Quiz",
      type: "Quiz",
      subject: "Biology",
      collection: "quick-revision",
      dateAdded: "1 week ago",
      thumbnail: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=100&h=60&fit=crop",
      tags: ["Biology", "Plants"]
    },
    {
      id: 3,
      title: "Indian Independence Movement Flashcards",
      type: "Flashcards",
      subject: "History",
      collection: "favorites",
      dateAdded: "3 days ago",
      thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=100&h=60&fit=crop",
      tags: ["History", "Freedom Struggle"]
    },
    {
      id: 4,
      title: "Chemical Bonding Video Series",
      type: "Video",
      subject: "Chemistry",
      collection: "exam-prep",
      dateAdded: "5 days ago",
      thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=100&h=60&fit=crop",
      tags: ["Chemistry", "Bonding"]
    }
  ];

  const filteredBookmarks = selectedCollection === 'all' 
    ? bookmarkedItems 
    : bookmarkedItems?.filter(item => item?.collection === selectedCollection);

  const handleCreateCollection = () => {
    if (newCollectionName?.trim()) {
      // Add new collection logic here
      console.log('Creating collection:', newCollectionName);
      setNewCollectionName('');
      setShowCreateCollection(false);
    }
  };

  const getTypeIcon = (type) => {
    const icons = {
      'Study Notes': 'FileText',
      'Quiz': 'HelpCircle',
      'Flashcards': 'CreditCard',
      'Video': 'Play'
    };
    return icons?.[type] || 'BookOpen';
  };

  return (
    <div className="relative">
      {/* Bookmark Toggle Button */}
      <Button
        variant={showBookmarks ? 'default' : 'outline'}
        onClick={() => setShowBookmarks(!showBookmarks)}
        className="relative"
      >
        <Icon name="Bookmark" size={16} />
        <span className="ml-2">My Library</span>
        <span className="ml-2 px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
          {bookmarkedItems?.length}
        </span>
      </Button>
      {/* Bookmark Panel */}
      {showBookmarks && (
        <div className="absolute top-full right-0 mt-2 w-96 bg-white border border-border rounded-xl shadow-large z-50">
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">My Study Library</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowBookmarks(false)}
              >
                <Icon name="X" size={16} />
              </Button>
            </div>

            {/* Collections */}
            <div className="space-y-2">
              {collections?.map((collection) => (
                <button
                  key={collection?.id}
                  onClick={() => setSelectedCollection(collection?.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                    selectedCollection === collection?.id
                      ? 'bg-primary/10 border border-primary/20' :'hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${collection?.color} rounded-lg flex items-center justify-center`}>
                      <Icon name={collection?.icon} size={14} className="text-white" />
                    </div>
                    <span className={`font-medium ${
                      selectedCollection === collection?.id ? 'text-primary' : 'text-foreground'
                    }`}>
                      {collection?.name}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {collection?.count}
                  </span>
                </button>
              ))}

              {/* Create New Collection */}
              {showCreateCollection ? (
                <div className="p-3 border border-border rounded-lg">
                  <Input
                    type="text"
                    placeholder="Collection name..."
                    value={newCollectionName}
                    onChange={(e) => setNewCollectionName(e?.target?.value)}
                    className="mb-2"
                  />
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={handleCreateCollection}
                    >
                      Create
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setShowCreateCollection(false);
                        setNewCollectionName('');
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setShowCreateCollection(true)}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                    <Icon name="Plus" size={14} className="text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">Create Collection</span>
                </button>
              )}
            </div>
          </div>

          {/* Bookmarked Items */}
          <div className="p-4 max-h-96 overflow-y-auto custom-scrollbar">
            {filteredBookmarks?.length > 0 ? (
              <div className="space-y-3">
                {filteredBookmarks?.map((item) => (
                  <div
                    key={item?.id}
                    className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-16 h-10 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item?.thumbnail}
                        alt={item?.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Icon name={getTypeIcon(item?.type)} size={12} className="text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
                        {item?.title}
                      </h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-muted-foreground">{item?.subject}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{item?.type}</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex flex-wrap gap-1">
                          {item?.tags?.slice(0, 2)?.map((tag, index) => (
                            <span
                              key={index}
                              className="px-1 py-0.5 bg-muted text-muted-foreground text-xs rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{item?.dateAdded}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Icon name="ExternalLink" size={12} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive hover:text-destructive">
                        <Icon name="Trash2" size={12} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Icon name="BookmarkX" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h4 className="font-medium text-foreground mb-2">No bookmarks yet</h4>
                <p className="text-sm text-muted-foreground">
                  Start bookmarking resources to build your study library
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {filteredBookmarks?.length} items in {collections?.find(c => c?.id === selectedCollection)?.name}
              </span>
              <Button variant="outline" size="sm">
                <Icon name="Download" size={14} />
                <span className="ml-2">Export</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookmarkManager;