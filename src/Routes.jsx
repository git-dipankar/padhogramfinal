import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import AIStudyCompanion from './pages/ai-study-companion';
import InteractiveLearningStudio from './pages/interactive-learning-studio';
import ProgressAnalyticsCenter from './pages/progress-analytics-center';
import AIHelp from './pages/ai-help';
import SchoolIntegrationPortal from './pages/school-integration-portal';
import ResourceDiscoveryCenter from './pages/resource-discovery-center';


const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AIStudyCompanion />} />
        <Route path="/ai-study-companion" element={<AIStudyCompanion />} />
        <Route path="/school-integration-portal" element={<SchoolIntegrationPortal />} />
        <Route path="/resource-discovery-center" element={<ResourceDiscoveryCenter />} />
        <Route path="/interactive-learning-studio" element={<InteractiveLearningStudio />} />
        <Route path="/progress-analytics-center" element={<ProgressAnalyticsCenter />} />
        <Route path="/ai-help" element={<AIHelp />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
