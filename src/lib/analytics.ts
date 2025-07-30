// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      page_location: url,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined events for your portfolio
export const portfolioEvents = {
  // Navigation events
  navigateToSection: (section: string) => 
    trackEvent('navigate', 'Navigation', section),
  
  // Contact events
  emailClick: () => 
    trackEvent('click', 'Contact', 'Email'),
  
  socialClick: (platform: string) => 
    trackEvent('click', 'Social', platform),
  
  // Project events
  projectView: (projectName: string) => 
    trackEvent('view', 'Project', projectName),
  
  projectLinkClick: (projectName: string, linkType: 'github' | 'live') => 
    trackEvent('click', 'Project Link', `${projectName} - ${linkType}`),
  
  // Engagement events
  skillInteraction: (skillName: string) => 
    trackEvent('interact', 'Skill', skillName),
  
  themeToggle: (theme: 'light' | 'dark') => 
    trackEvent('toggle', 'Theme', theme),
  
  downloadResume: () => 
    trackEvent('download', 'Resume', 'PDF'),
  
  // Form events (if you add contact forms later)
  formSubmit: (formType: string) => 
    trackEvent('submit', 'Form', formType),
};