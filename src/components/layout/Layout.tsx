'use client';

import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import ParticleSystem from "@/components/shared/ParticleSystem";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    // Enhanced mobile/touch device detection
    const checkDevice = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const shouldShowCursor = !isMobile && !isTouchDevice;
      setShowCursor(shouldShowCursor);
      return shouldShowCursor;
    };

    // Initial check
    const shouldShowCursor = checkDevice();

    // Handle mouse movement only for non-mobile devices
    if (shouldShowCursor) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);

      // Handle window resize to re-check device type
      const handleResize = () => {
        const newShouldShowCursor = checkDevice();
        if (!newShouldShowCursor) {
          window.removeEventListener("mousemove", handleMouseMove);
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
      };
    } else {
      // For mobile devices, still listen for resize in case user switches to desktop view
      const handleResize = () => {
        const newShouldShowCursor = checkDevice();
        if (newShouldShowCursor) {
          const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
          };
          window.addEventListener("mousemove", handleMouseMove);
        }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300 relative">
      <ParticleSystem />

      {/* Professional Custom Cursor (disabled on mobile) */}
      {showCursor && (
        <div
          className="fixed w-16 h-16 rounded-full pointer-events-none z-50 opacity-60"
          style={{
            left: mousePosition.x - 32,
            top: mousePosition.y - 32,
            transition: "all 0.8s ease-out",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.3) 50%, rgba(59, 130, 246, 0.1) 100%)",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(147, 51, 234, 0.2)",
            filter: 'blur(0.5px)',
          }}
        />
      )}

      <Navigation />

      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-blue-500/30 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Nirmalya Mandal. Crafted with passion and cutting-edge
            technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;