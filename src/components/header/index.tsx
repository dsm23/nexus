import type { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Building2,
  Calendar,
  ChevronDown,
  Clock,
  Eye,
  FileText,
  Focus,
  FolderOpen,
  Headphones,
  Heart,
  HelpCircle,
  Home,
  Megaphone,
  Settings,
  Users,
} from "lucide-react";
import { GlobalSearch } from "~/components/global-search";
import { NotificationDropdown } from "~/components/notification-dropdown";
import { Profile } from "~/components/profile";
import { ThemeToggle } from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useFocusMode } from "~/contexts/focus-mode";
import { currentUser } from "~/data/mockData";
import { getTimeBasedGreeting } from "~/lib/utils";

export const Header: FunctionComponent = () => {
  const { isFocusMode, toggleFocusMode } = useFocusMode();
  const location = useLocation();
  const greeting = getTimeBasedGreeting();

  // Core navigation items (most important - always visible)
  const coreNavItems = [
    { path: "/", label: "Dashboard", icon: Home },
    { path: "/projects", label: "Projects", icon: FolderOpen },
  ];

  // People & Communication group
  const peopleNavItems = [
    { path: "/employees", label: "Employees", icon: Users },
    { path: "/kudos", label: "Kudos", icon: Heart },
    { path: "/announcements", label: "Announcements", icon: Megaphone },
  ];

  // Workspace & Tools group
  const workspaceNavItems = [
    { path: "/calendar", label: "Calendar", icon: Calendar },
    { path: "/analytics", label: "Analytics", icon: BarChart3 },
    { path: "/resources", label: "Resources", icon: FileText },
  ];

  // Support & Settings group
  const supportNavItems = [
    { path: "/time-off", label: "Time Off", icon: Clock },
    { path: "/help-desk", label: "Help Desk", icon: Headphones },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/70">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left side - Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                N
              </div>
              <span className="text-lg font-semibold">Nexus</span>
            </Link>
            <div className="hidden sm:block">
              <span className="text-lg font-medium text-muted-foreground">
                {greeting}, {currentUser.name}! 👋
              </span>
            </div>
          </div>
          {/* Right side - Controls */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <GlobalSearch />
            </div>
            {/* Focus Mode Button - Only visible on Dashboard */}
            {location.pathname === "/" && (
              <Button
                variant={isFocusMode ? "default" : "outline"}
                size="sm"
                onClick={toggleFocusMode}
                className="h-10 gap-2"
              >
                {isFocusMode ? (
                  <Eye className="size-4" />
                ) : (
                  <Focus className="size-4" />
                )}
                <span className="hidden sm:inline">
                  {isFocusMode ? "Exit Focus" : "Focus Mode"}
                </span>
              </Button>
            )}
            <NotificationDropdown />
            <ThemeToggle />
            <Profile />
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      {/* Navigation Bar */}
      <div className="sticky top-16 z-40 w-full border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-2">
            {/* Main Navigation - Cleaner with dropdowns */}
            <nav className="flex items-center gap-3">
              {/* Core Items - Always visible */}
              {coreNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary shadow-sm"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                    }`}
                  >
                    <Icon className="size-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                );
              })}

              {/* People & Communication Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="ghost"
                      className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                        peopleNavItems.some(
                          (item) => location.pathname === item.path,
                        )
                          ? "bg-primary/10 text-primary shadow-sm"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                      }`}
                    />
                  }
                >
                  <Building2 className="size-4" />
                  <span className="hidden sm:inline">People</span>
                  <ChevronDown className="size-3 opacity-50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  {peopleNavItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <DropdownMenuItem
                        key={item.path}
                        render={
                          <Link
                            to={item.path}
                            className="flex w-full items-center gap-2"
                          />
                        }
                      >
                        <Icon className="size-4" />
                        {item.label}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Workspace & Tools Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="ghost"
                      className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                        workspaceNavItems.some(
                          (item) => location.pathname === item.path,
                        )
                          ? "bg-primary/10 text-primary shadow-sm"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                      }`}
                    />
                  }
                >
                  <Settings className="size-4" />
                  <span className="hidden sm:inline">Tools</span>
                  <ChevronDown className="size-3 opacity-50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  {workspaceNavItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <DropdownMenuItem
                        key={item.path}
                        render={
                          <Link
                            to={item.path}
                            className="flex w-full items-center gap-2"
                          />
                        }
                      >
                        <Icon className="size-4" />
                        {item.label}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Support & Settings Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="ghost"
                      className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                        supportNavItems.some(
                          (item) => location.pathname === item.path,
                        )
                          ? "bg-primary/10 text-primary shadow-sm"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                      }`}
                    />
                  }
                >
                  <HelpCircle className="size-4" />
                  <span className="hidden sm:inline">Support</span>
                  <ChevronDown className="size-3 opacity-50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  {supportNavItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <DropdownMenuItem
                        key={item.path}
                        render={
                          <Link
                            to={item.path}
                            className="flex w-full items-center gap-2"
                          />
                        }
                      >
                        <Icon className="size-4" />
                        {item.label}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile greeting */}
      <div className="mx-auto max-w-7xl border-b bg-background/80 px-4 py-3 backdrop-blur supports-backdrop-filter:bg-background/70 sm:hidden sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          {greeting}, {currentUser.name}! 👋
        </p>
      </div>
    </>
  );
};
