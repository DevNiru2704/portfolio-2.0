// Structured data schemas for SEO

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nirmalya Mandal",
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer and researcher passionate about cutting-edge technology and innovation.",
  url: "https://nirmalyamandal.me",
  image: "https://nirmalyamandal.me/android-chrome-512x512.png",
  sameAs: [
    "https://github.com/nirmalya",
    "https://linkedin.com/in/nirmalya",
    "https://twitter.com/nirmalya",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Machine Learning",
    "DevOps",
    "Cloud Computing",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Computer Science Engineering",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-Stack Developer",
    occupationLocation: {
      "@type": "Place",
      name: "India",
    },
    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "Python",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nirmalya Mandal - Portfolio",
  description:
    "Full-stack developer and researcher passionate about cutting-edge technology and innovation.",
  url: "https://nirmalyamandal.me",
  author: {
    "@type": "Person",
    name: "Nirmalya Mandal",
  },
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
  potentialAction: {
    "@type": "SearchAction",
    target: "https://nirmalyamandal.me/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nirmalya Mandal - Full-Stack Development Services",
  description:
    "Professional full-stack development, DevOps, and AI/ML integration services.",
  url: "https://nirmalyamandal.me",
  logo: "https://nirmalyamandal.me/android-chrome-512x512.png",
  image: "https://nirmalyamandal.me/android-chrome-512x512.png",
  founder: {
    "@type": "Person",
    name: "Nirmalya Mandal",
  },
  serviceType: [
    "Web Development",
    "Full-Stack Development",
    "DevOps Services",
    "AI/ML Integration",
  ],
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full-Stack Web Development",
          description:
            "End-to-end web application development using modern technologies",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "DevOps & Cloud Services",
          description:
            "CI/CD pipeline setup and cloud infrastructure management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI/ML Integration",
          description:
            "Machine learning model integration into web applications",
        },
      },
    ],
  },
};

export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const portfolioWorkSchema = (
  projects: Array<{
    title: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
    image: string;
  }>
) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Portfolio Projects",
  description: "A collection of web development, AI/ML, and DevOps projects",
  author: {
    "@type": "Person",
    name: "Nirmalya Mandal",
  },
  hasPart: projects.map((project) => ({
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    url: project.live,
    codeRepository: project.github,
    screenshot: project.image,
    programmingLanguage: project.tech,
    author: {
      "@type": "Person",
      name: "Nirmalya Mandal",
    },
  })),
});
