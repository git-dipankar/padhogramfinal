import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ isCollapsed = false, onToggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Google Translate
  useEffect(() => {
    const addGoogleTranslate = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "hi,or", // hi = Hindi, or = Odia
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
            },
            "google_translate_element"
          );
        };
      }
    };
    addGoogleTranslate();
  }, []);

  const navigationItems = [
    { name: 'Learning Studio', path: '/interactive-learning-studio', icon: 'BookOpen' },
    { name: 'AI Companion', path: '/ai-study-companion', icon: 'Bot' },
    { name: 'Resources', path: '/resource-discovery-center', icon: 'Library' },
    { name: 'Analytics', path: '/progress-analytics-center', icon: 'BarChart3' },
    { name: 'FlashCard', path: '/flashcardspages' },
    { name: "Knowledge Hunt", path: "/knowledge-race", icon: "Gamepad2" },
  ];

  const secondaryItems = [
    { name: 'School Portal', path: '/school-integration-portal', icon: 'School' },
  ];

  const isActivePath = (path) => location?.pathname === path;
  const handleSignOut = () => { 
    localStorage.removeItem('user'); 
    localStorage.removeItem('coins'); 
    window.location.href = '/'; 
  };

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-soft">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-achievement rounded-full flex items-center justify-center">
          <Icon name="Sparkles" size={10} className="text-achievement-foreground" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold gradient-text">PadhoGram</span>
        <span className="text-xs text-muted-foreground font-medium">Intelligent Learning</span>
      </div>
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-soft' : 'bg-background/80 backdrop-blur-sm'}`}>
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={20} />
          </Button>

          {onToggleSidebar && (
            <Button variant="ghost" size="icon" className="hidden lg:flex" onClick={onToggleSidebar}>
              <Icon name={isCollapsed ? 'PanelLeftOpen' : 'PanelLeftClose'} size={20} />
            </Button>
          )}

          <Logo />
        </div>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationItems.map(item => (
            <a key={item.path} href={item.path} className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-muted ${isActivePath(item.path) ? 'bg-primary text-primary-foreground shadow-soft' : 'text-foreground hover:text-primary'}`}>
              <Icon name={item.icon} size={16} />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          {/* Translator */}
          <div id="google_translate_element" className="ml-4 rounded-lg border border-gray-300 px-2 py-1 text-sm bg-white shadow-sm"></div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Icon name="Bell" size={20} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-achievement text-achievement-foreground text-xs rounded-full flex items-center justify-center font-medium">
              3
            </span>
          </Button>

          {/* User */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-progress rounded-full flex items-center justify-center">
              <Icon name="User" size={16} className="text-white" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-foreground">Student</p>
              <p className="text-xs text-muted-foreground">Level 12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="px-6 py-4 space-y-2">
            {[...navigationItems, ...secondaryItems].map(item => (
              <a key={item.path} href={item.path} className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActivePath(item.path) ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'}`} onClick={() => setIsMobileMenuOpen(false)}>
                <Icon name={item.icon} size={18} />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
