import type { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { TooltipProvider } from "~/components/ui/tooltip";
import { FloatingHelpButton } from "./components/floating-help-button";
import { ScrollToTop } from "./components/scroll-to-top";
import { ThemeProvider } from "./components/theme-provider";
import { FocusModeProvider } from "./contexts/focus-mode";
import { AnalyticsPage } from "./pages/analytics";
import { CalendarPage } from "./pages/calendar";
import { CompanyAnnouncementsPage } from "./pages/company-announcements";
import { Dashboard } from "./pages/dashboard";
import { EmployeeDirectoryPage } from "./pages/employee-directory";
import { ForYouPage } from "./pages/for-you";
import { HelpDeskPage } from "./pages/help-desk";
import { KudosFeedPage } from "./pages/kudos-feed";
import { ProjectsPage } from "./pages/projects";
import { ResourcesPage } from "./pages/resources";
import { TimeOffPage } from "./pages/time-off";

const AppRoutes: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/for-you" element={<ForYouPage />} />
      <Route path="/announcements" element={<CompanyAnnouncementsPage />} />
      <Route path="/kudos" element={<KudosFeedPage />} />
      <Route path="/employees" element={<EmployeeDirectoryPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/help-desk" element={<HelpDeskPage />} />
      <Route path="/time-off" element={<TimeOffPage />} />
    </Routes>
  );
};

const App: FunctionComponent = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="nexus-ui-theme">
      <FocusModeProvider>
        <TooltipProvider>
          <BrowserRouter>
            <ScrollToTop />
            <AppRoutes />
            <FloatingHelpButton />
            <Toaster />
          </BrowserRouter>
        </TooltipProvider>
      </FocusModeProvider>
    </ThemeProvider>
  );
};

export default App;
