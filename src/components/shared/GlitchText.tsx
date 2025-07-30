'use client';

import { useState, useEffect } from "react";

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

const GlitchText = ({ children, className = "" }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={`${isGlitching ? "animate-pulse" : ""}`}>
        {children}
      </span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 text-red-500 opacity-70 animate-ping">
            {children}
          </span>
          <span className="absolute top-0 left-0 text-blue-500 opacity-70 animate-pulse">
            {children}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;
