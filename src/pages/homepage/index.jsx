import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './components/HeroSection';
import LearningUniverse from './components/LearningUniverse';
import SocialProof from './components/SocialProof';
import AchievementShowcase from './components/AchievementShowcase';
import CallToAction from './components/CallToAction';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>PadhoGram - Transform Your Learning Journey Into An Adventure</title>
        <meta 
          name="description" 
          content="Join 50,000+ students learning with PadhoGram's AI-powered platform. Gamified education, personalized learning paths, and real-time progress tracking. Start free today!" 
        />
        <meta name="keywords" content="online learning, education platform, AI tutoring, gamified learning, CBSE, student progress, interactive quizzes" />
        <meta property="og:title" content="PadhoGram - Where Padho meets Progress" />
        <meta property="og:description" content="Transform your learning journey with India's most engaging educational platform" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <HeroSection />

        {/* Learning Universe Section */}
        <LearningUniverse />

        {/* Social Proof Section */}
        <SocialProof />

        {/* Achievement Showcase Section */}
        <AchievementShowcase />

        {/* Call to Action Section */}
        <CallToAction />
      </div>
    </>
  );
};

export default Homepage;