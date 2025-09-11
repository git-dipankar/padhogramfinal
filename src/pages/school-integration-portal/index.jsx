import React from 'react';
import HeroSection from './components/HeroSection';
import SchoolLoginWidget from './components/SchoolLoginWidget';
import AdminDashboard from './components/AdminDashboard';
import EducatorTools from './components/EducatorTools';
import CaseStudies from './components/CaseStudies';
import PricingSection from './components/PricingSection';
import IntegrationGuides from './components/IntegrationGuides';

const SchoolIntegrationPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SchoolLoginWidget />
      <AdminDashboard />
      <EducatorTools />
      <CaseStudies />
      <PricingSection />
      <IntegrationGuides />
    </div>
  );
};

export default SchoolIntegrationPortal;