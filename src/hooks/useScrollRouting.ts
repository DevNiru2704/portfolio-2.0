"use client";

import { useEffect, useRef, useCallback, useState } from "react";

interface Section {
  id: string;
  path: string;
  cleanPath: string;
}

const sections: Section[] = [
  { id: "home", path: "/", cleanPath: "/" },
  { id: "about", path: "/#about", cleanPath: "/about" },
  { id: "experience", path: "/#experience", cleanPath: "/experience" },
  { id: "projects", path: "/#projects", cleanPath: "/projects" },
  { id: "research", path: "/#research", cleanPath: "/research" },
  { id: "contact", path: "/#contact", cleanPath: "/contact" },
];

// Helper function to get section by clean path
const getSectionByCleanPath = (cleanPath: string): Section | undefined => {
  return sections.find((section) => section.cleanPath === cleanPath);
};

// Helper function to get section by hash
const getSectionByHash = (hash: string): Section | undefined => {
  return sections.find((section) => section.id === hash);
};

export const useScrollRouting = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const isNavigatingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Throttled scroll handler to update current section
  const handleScroll = useCallback(() => {
    // Don't update if we're currently navigating
    if (isNavigatingRef.current) return;

    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Throttle the scroll handling
    scrollTimeoutRef.current = setTimeout(() => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (currentSection !== section.id) {
              setCurrentSection(section.id);
              // Update URL with clean path without triggering navigation
              const currentSectionData = sections.find(
                (s) => s.id === section.id
              );
              if (currentSectionData) {
                window.history.replaceState(
                  null,
                  "",
                  currentSectionData.cleanPath
                );
              }
            }
            break;
          }
        }
      }
    }, 100); // Throttle to 100ms
  }, [currentSection]);

  // Add scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  // Handle initial route on page load
  useEffect(() => {
    const currentPath = window.location.pathname;
    const hash = window.location.hash.replace("#", "");

    // Check if we have a clean path route
    const sectionByPath = getSectionByCleanPath(currentPath);
    if (sectionByPath) {
      setCurrentSection(sectionByPath.id);
      // Scroll to section after a brief delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(sectionByPath.id);
        if (element && sectionByPath.id !== "home") {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }, 100);
    }
    // Fallback to hash-based routing for backward compatibility
    else if (hash && getSectionByHash(hash)) {
      const section = getSectionByHash(hash);
      if (section) {
        setCurrentSection(section.id);
        // Update URL to clean path
        window.history.replaceState(null, "", section.cleanPath);
        // Scroll to section
        setTimeout(() => {
          const element = document.getElementById(section.id);
          if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    }
  }, []);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const currentPath = window.location.pathname;
      const section = getSectionByCleanPath(currentPath);

      if (section) {
        setCurrentSection(section.id);
        // Scroll to the section
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = section.id === "home" ? 0 : element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const section = sections.find((s) => s.id === sectionId);

    if (element && section) {
      // Set navigation flag to prevent scroll listener interference
      isNavigatingRef.current = true;
      setCurrentSection(sectionId);

      // Update URL with clean path
      window.history.pushState(null, "", section.cleanPath);

      // Smooth scroll to section
      const offsetTop = sectionId === "home" ? 0 : element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      // Clear navigation flag after scroll completes
      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 1000);
    }
  };

  const getCurrentPath = () => {
    const section = sections.find((s) => s.id === currentSection);
    return section ? section.cleanPath : "/";
  };

  return {
    navigateToSection,
    currentPath: getCurrentPath(),
    currentSection,
    sections, // Export sections for navigation components
  };
};
