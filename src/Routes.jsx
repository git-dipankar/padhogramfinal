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
import FlashcardsPages from './pages/flashcardspages';
import KnowledgeRace from "./pages/KnowledgeRace";

import Layout from './Layout'; // ✅ Import the layout

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Home / AI Study Companion */}
          <Route 
            path="/" 
            element={
              <Layout>
                <AIStudyCompanion />
              </Layout>
            } 
          />
          <Route 
            path="/ai-study-companion" 
            element={
              <Layout>
                <AIStudyCompanion />
              </Layout>
            } 
          />

          {/* Other Pages */}
          <Route 
            path="/school-integration-portal" 
            element={
              <Layout>
                <SchoolIntegrationPortal />
              </Layout>
            } 
          />
          <Route 
            path="/resource-discovery-center" 
            element={
              <Layout>
                <ResourceDiscoveryCenter />
              </Layout>
            } 
          />
          <Route 
            path="/interactive-learning-studio" 
            element={
              <Layout>
                <InteractiveLearningStudio />
              </Layout>
            } 
          />
          <Route 
            path="/progress-analytics-center" 
            element={
              <Layout>
                <ProgressAnalyticsCenter />
              </Layout>
            } 
          />
          <Route 
            path="/ai-help" 
            element={
              <Layout>
                <AIHelp />
              </Layout>
            } 
          />

          {/* Flashcards & KnowledgeRace */}
          <Route 
            path="/flashcardspages" 
            element={
              <Layout>
                <FlashcardsPages />
              </Layout>
            } 
          />
          <Route 
            path="/knowledge-race" 
            element={
              <Layout>
                <KnowledgeRace />
              </Layout>
            } 
          />

          {/* 404 */}
          <Route 
            path="*" 
            element={
              <Layout>
                <NotFound />
              </Layout>
            } 
          />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
