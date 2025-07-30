'use client';

import { useState } from 'react';

import { Home, User, Briefcase, Code, BookOpen, Phone } from 'lucide-react';
import GlitchText from '@/components/shared/GlitchText';
import ThemeToggle from '@/components/shared/ThemeToggle';
import { useScrollRouting } from '@/hooks/useScrollRouting';
import { portfolioEvents } from '@/lib/analytics';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navigateToSection, currentPath } = useScrollRouting();

  const navigationItems = [
    { name: "Home", icon: Home, sectionId: "home", path: "/" },
    { name: "About", icon: User, sectionId: "about", path: "/about" },
    { name: "Experience", icon: Briefcase, sectionId: "experience", path: "/experience" },
    { name: "Projects", icon: Code, sectionId: "projects", path: "/projects" },
    { name: "Research", icon: BookOpen, sectionId: "research", path: "/research" },
    { name: "Contact", icon: Phone, sectionId: "contact", path: "/contact" },
  ];

  const isActive = (sectionId: string) => currentPath.includes(sectionId) || (sectionId === "home" && currentPath === "/");

  const handleNavigation = (sectionId: string) => {
    navigateToSection(sectionId);
    portfolioEvents.navigateToSection(sectionId);
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/90 dark:bg-black/90 backdrop-blur-lg border-b border-gray-200 dark:border-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => handleNavigation("home")}
            className="text-xl sm:text-2xl font-bold"
            aria-label="Go to home page"
            title="Go to home page"
          >
            <GlitchText className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              NM
            </GlitchText>
          </button>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.sectionId)}
                  className={`hover:text-blue-400 transition-colors relative group text-sm lg:text-base flex items-center gap-2 ${
                    isActive(item.sectionId) ? "text-blue-400" : ""
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    isActive(item.sectionId) ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </button>
              );
            })}
            <ThemeToggle />
          </div>
          
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              className="text-gray-900 dark:text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
              title={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            >
              <div
                className={`w-5 h-0.5 bg-gray-900 dark:bg-white mb-1 transition-transform ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-gray-900 dark:bg-white mb-1 transition-opacity ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-gray-900 dark:bg-white transition-transform ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-blue-500/30">
            <div className="flex flex-col space-y-4 pt-4">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavigation(item.sectionId);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left hover:text-blue-400 transition-colors flex items-center gap-3 text-gray-900 dark:text-white ${
                      isActive(item.sectionId) ? "text-blue-400" : ""
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;