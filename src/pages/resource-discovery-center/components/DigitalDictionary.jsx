import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const DigitalDictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWord, setSelectedWord] = useState(null);
  const [recentSearches, setRecentSearches] = useState([
    'Algorithm', 'Photosynthesis', 'Democracy', 'Mitochondria', 'Ecosystem'
  ]);

  const dictionaryData = {
    'Algorithm': {
      pronunciation: '/ˈælɡəˌrɪðəm/',
      partOfSpeech: 'noun',
      definition: 'A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.',
      examples: [
        'The sorting algorithm arranges data in ascending order.',
        'Machine learning algorithms can predict patterns in data.'
      ],
      synonyms: ['procedure', 'method', 'process', 'formula'],
      relatedTerms: ['Programming', 'Computer Science', 'Mathematics']
    },
    'Photosynthesis': {
      pronunciation: '/ˌfoʊtoʊˈsɪnθəsɪs/',
      partOfSpeech: 'noun',
      definition: 'The process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll.',
      examples: [
        'Photosynthesis converts carbon dioxide and water into glucose.',
        'Plants perform photosynthesis to produce their own food.'
      ],
      synonyms: ['carbon fixation', 'light reaction'],
      relatedTerms: ['Biology', 'Chlorophyll', 'Glucose', 'Carbon Dioxide']
    },
    'Democracy': {
      pronunciation: '/dɪˈmɑkrəsi/',
      partOfSpeech: 'noun',
      definition: 'A system of government by the whole population or all the eligible members of a state, typically through elected representatives.',
      examples: [
        'India is the world\'s largest democracy.',
        'Democracy ensures that people have a voice in government.'
      ],
      synonyms: ['republic', 'self-government', 'popular government'],
      relatedTerms: ['Politics', 'Government', 'Elections', 'Constitution']
    }
  };

  const handleSearch = (term) => {
    const searchKey = Object.keys(dictionaryData)?.find(
      key => key?.toLowerCase() === term?.toLowerCase()
    );
    
    if (searchKey) {
      setSelectedWord({ word: searchKey, ...dictionaryData?.[searchKey] });
      if (!recentSearches?.includes(searchKey)) {
        setRecentSearches([searchKey, ...recentSearches?.slice(0, 4)]);
      }
    } else {
      setSelectedWord(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };

  const playPronunciation = () => {
    // Mock pronunciation play
    console.log('Playing pronunciation for:', selectedWord?.word);
  };

  return (
    <div className="bg-white rounded-xl shadow-soft border border-border p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="BookOpen" size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Digital Dictionary</h3>
          <p className="text-sm text-muted-foreground">Instant definitions with pronunciation guides</p>
        </div>
      </div>
      {/* Dictionary Search */}
      <div className="relative mb-6">
        <Input
          type="text"
          placeholder="Search for word definitions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e?.target?.value)}
          onKeyPress={handleKeyPress}
          className="pl-10 pr-12"
        />
        <Icon 
          name="Search" 
          size={18} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleSearch(searchTerm)}
          className="absolute right-1 top-1/2 transform -translate-y-1/2"
        >
          <Icon name="ArrowRight" size={16} />
        </Button>
      </div>
      {/* Recent Searches */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Recent Searches</h4>
        <div className="flex flex-wrap gap-2">
          {recentSearches?.map((word, index) => (
            <button
              key={index}
              onClick={() => {
                setSearchTerm(word);
                handleSearch(word);
              }}
              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {word}
            </button>
          ))}
        </div>
      </div>
      {/* Word Definition */}
      {selectedWord && (
        <div className="border-t border-border pt-6">
          <div className="space-y-4">
            {/* Word Header */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{selectedWord?.word}</h3>
                <div className="flex items-center space-x-3 mt-1">
                  <span className="text-sm text-muted-foreground font-mono">
                    {selectedWord?.pronunciation}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={playPronunciation}
                    className="p-1"
                  >
                    <Icon name="Volume2" size={16} className="text-primary" />
                  </Button>
                </div>
              </div>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                {selectedWord?.partOfSpeech}
              </span>
            </div>

            {/* Definition */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Definition</h4>
              <p className="text-foreground leading-relaxed">{selectedWord?.definition}</p>
            </div>

            {/* Examples */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Examples</h4>
              <ul className="space-y-2">
                {selectedWord?.examples?.map((example, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Quote" size={14} className="text-muted-foreground mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground italic">{example}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Synonyms */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Synonyms</h4>
              <div className="flex flex-wrap gap-2">
                {selectedWord?.synonyms?.map((synonym, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-progress/10 text-progress rounded text-sm"
                  >
                    {synonym}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Terms */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Related Terms</h4>
              <div className="flex flex-wrap gap-2">
                {selectedWord?.relatedTerms?.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchTerm(term);
                      handleSearch(term);
                    }}
                    className="px-2 py-1 bg-accent/10 text-accent rounded text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* No Results */}
      {searchTerm && !selectedWord && (
        <div className="border-t border-border pt-6 text-center">
          <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">Word not found</h3>
          <p className="text-muted-foreground mb-4">
            We couldn't find "{searchTerm}" in our dictionary. Try searching for a different word.
          </p>
          <Button variant="outline" onClick={() => setSearchTerm('')}>
            Clear Search
          </Button>
        </div>
      )}
    </div>
  );
};

export default DigitalDictionary;