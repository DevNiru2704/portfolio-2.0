"use client";

import { useState, useEffect, useMemo } from "react";

const LiveCodeSimulation = () => {
  const [displayCode, setDisplayCode] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const codeLines = useMemo(
    () => [
      "const developer = new NirmalyaMandal();",
      'developer.skills = ["MERN", "DevOps", "AI/ML"];',
      'developer.passion = "Clean Code & Innovation";',
      'developer.status = "Available for hire";',
      "console.log(developer.build());",
    ],
    []
  );

  useEffect(() => {
    const typeCode = () => {
      if (currentLineIndex < codeLines.length) {
        if (currentCharIndex < codeLines[currentLineIndex].length) {
          setDisplayCode((prev) => {
            const lines = prev.split("\n");
            lines[currentLineIndex] =
              (lines[currentLineIndex] || "") +
              codeLines[currentLineIndex][currentCharIndex];
            return lines.join("\n");
          });
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
          if (currentLineIndex < codeLines.length - 1) {
            setDisplayCode((prev) => prev + "\n");
          }
        }
      } else {
        // Reset after completion
        setTimeout(() => {
          setDisplayCode("");
          setCurrentLineIndex(0);
          setCurrentCharIndex(0);
        }, 3000);
      }
    };

    const timer = setTimeout(typeCode, currentCharIndex === 0 ? 500 : 50);
    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex, codeLines]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm border border-gray-300 dark:border-blue-500/30 w-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-700 dark:text-gray-300 ml-2 text-xs sm:text-sm">
          terminal.js
        </span>
      </div>
      <div className="text-green-700 dark:text-green-300 min-h-[120px] sm:min-h-[140px] overflow-hidden">
        <pre className="whitespace-pre-wrap break-words">
          {displayCode}
          <span className="animate-pulse">|</span>
        </pre>
      </div>
    </div>
  );
};

export default LiveCodeSimulation;
