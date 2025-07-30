'use client';

import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { portfolioEvents } from '@/lib/analytics';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light' as const, icon: Sun, label: 'Light' },
    { value: 'dark' as const, icon: Moon, label: 'Dark' },
    { value: 'system' as const, icon: Monitor, label: 'System' },
  ];

  const currentThemeIndex = themes.findIndex(t => t.value === theme);
  const nextTheme = themes[(currentThemeIndex + 1) % themes.length];

  const handleToggle = () => {
    console.log('Theme toggle clicked:', { current: theme, next: nextTheme.value });
    setTheme(nextTheme.value);
    portfolioEvents.themeToggle(nextTheme.value);
  };

  const CurrentIcon = themes.find(t => t.value === theme)?.icon || Moon;

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
      title={`Switch to ${nextTheme.label} mode`}
      aria-label={`Switch to ${nextTheme.label} mode`}
    >
      <CurrentIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
    </button>
  );
};

export default ThemeToggle;