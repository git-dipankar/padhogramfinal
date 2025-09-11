import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const SearchBar = ({ onSearch, onFilterChange, filters }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const searchRef = useRef(null);

  const suggestions = [
    "NCERT Class 10 Mathematics",
    "Physics Laws of Motion",
    "Chemistry Periodic Table",
    "Biology Cell Structure",
    "History Mughal Empire",
    "Geography Climate Change",
    "English Grammar Rules",
    "Hindi Literature",
    "Computer Science Algorithms",
    "Economics Market Structure"
  ];

  const filteredSuggestions = suggestions?.filter(suggestion =>
    suggestion?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  )?.slice(0, 5);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef?.current && !searchRef?.current?.contains(event?.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query = searchQuery) => {
    if (query?.trim()) {
      onSearch(query?.trim());
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    handleSearch(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-soft border border-border p-6 mb-8">
      <div className="relative" ref={searchRef}>
        <div className="relative">
          <Input
            type="search"
            placeholder="Search for study materials, topics, or subjects..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e?.target?.value);
              setShowSuggestions(true);
            }}
            onKeyPress={handleKeyPress}
            className="pl-12 pr-24 h-14 text-lg"
          />
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowFilters(!showFilters)}
              className={showFilters ? 'bg-primary text-primary-foreground' : ''}
            >
              <Icon name="Filter" size={18} />
            </Button>
            <Button
              variant="default"
              onClick={() => handleSearch()}
              className="px-4"
            >
              <Icon name="Search" size={16} />
            </Button>
          </div>
        </div>

        {/* Search Suggestions */}
        {showSuggestions && searchQuery && filteredSuggestions?.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-lg shadow-large z-50">
            <div className="py-2">
              {filteredSuggestions?.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left px-4 py-2 hover:bg-muted transition-colors flex items-center space-x-3"
                >
                  <Icon name="Search" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-foreground">{suggestion}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Advanced Filters */}
      {showFilters && (
        <div className="mt-6 pt-6 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Subject Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <select
                value={filters?.subject}
                onChange={(e) => onFilterChange({ ...filters, subject: e?.target?.value })}
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">All Subjects</option>
                <option value="mathematics">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="biology">Biology</option>
                <option value="history">History</option>
                <option value="geography">Geography</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Difficulty</label>
              <select
                value={filters?.difficulty}
                onChange={(e) => onFilterChange({ ...filters, difficulty: e?.target?.value })}
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {/* Content Type Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Content Type</label>
              <select
                value={filters?.contentType}
                onChange={(e) => onFilterChange({ ...filters, contentType: e?.target?.value })}
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">All Types</option>
                <option value="flashcards">Flashcards</option>
                <option value="quizzes">Quizzes</option>
                <option value="notes">Study Notes</option>
                <option value="videos">Video Lessons</option>
                <option value="practice">Practice Tests</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters?.verifiedOnly}
                  onChange={(e) => onFilterChange({ ...filters, verifiedOnly: e?.target?.checked })}
                  className="rounded border-border"
                />
                <span className="text-sm text-foreground">Verified content only</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters?.freeOnly}
                  onChange={(e) => onFilterChange({ ...filters, freeOnly: e?.target?.checked })}
                  className="rounded border-border"
                />
                <span className="text-sm text-foreground">Free content only</span>
              </label>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onFilterChange({
                subject: '',
                difficulty: '',
                contentType: '',
                verifiedOnly: false,
                freeOnly: false
              })}
            >
              Clear Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;