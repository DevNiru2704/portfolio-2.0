import { Metadata } from "next";

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://nirmalyamandal.me' : 'http://localhost:3000';

export const generatePageMetadata = (
  title: string,
  description: string,
  path: string = "",
  keywords: string[] = []
): Metadata => {
  const url = `${baseUrl}${path}`;
  
  return {
    title: title, // Let the layout template handle the suffix
    description,
    keywords: [
      "Nirmalya Mandal",
      "portfolio",
      "developer",
      "full-stack",
      "react",
      "nextjs",
      "typescript",
      ...keywords
    ],
    openGraph: {
      title: `${title} | Nirmalya Mandal`,
      description,
      url,
      siteName: "Nirmalya Mandal Portfolio",
      type: "website",
      images: [
        {
          url: "/android-chrome-512x512.png",
          width: 512,
          height: 512,
          alt: "Nirmalya Mandal Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Nirmalya Mandal`,
      description,
      images: ["/android-chrome-512x512.png"],
    },
    alternates: {
      canonical: url,
    },
  };
};

export const homeMetadata = generatePageMetadata(
  "Portfolio",
  "Nirmalya Mandal is a passionate full-stack developer and researcher specializing in React, Node.js, AI/ML, and DevOps. Explore 50+ projects and 12+ months of professional experience in cutting-edge web development.",
  "",
  ["home", "developer", "portfolio", "full-stack", "react", "nodejs"]
);

export const aboutMetadata = generatePageMetadata(
  "About Me - Full-Stack Developer",
  "Meet Nirmalya Mandal, a Computer Science Engineering student and full-stack developer with expertise in React, Node.js, Python, and cloud technologies. Discover my journey, skills, and passion for innovation.",
  "/about",
  ["about", "biography", "skills", "education", "computer science"]
);

export const experienceMetadata = generatePageMetadata(
  "Professional Experience - Work History",
  "Explore Nirmalya Mandal's professional journey including internships and roles at TechCorp Solutions, StartupXYZ, and Digital Agency Pro. 12+ months of hands-on development experience.",
  "/experience",
  ["experience", "work", "internship", "career", "professional", "jobs"]
);

export const projectsMetadata = generatePageMetadata(
  "Projects - Web Development Portfolio",
  "Explore Nirmalya Mandal's impressive portfolio featuring 50+ innovative projects: e-commerce platforms, AI chat assistants, DevOps automation, and modern web applications using React, Node.js, Python, and cloud technologies.",
  "/projects",
  ["projects", "portfolio", "web development", "react", "nodejs", "python", "ai", "devops"]
);

export const researchMetadata = generatePageMetadata(
  "Research - AI/ML & Technology Innovation",
  "Explore Nirmalya Mandal's research work in artificial intelligence, machine learning, and cutting-edge technology innovations. Academic papers and technical contributions.",
  "/research",
  ["research", "ai", "machine learning", "artificial intelligence", "innovation", "papers"]
);

export const contactMetadata = generatePageMetadata(
  "Contact - Get In Touch",
  "Ready to collaborate? Contact Nirmalya Mandal for full-stack development projects, consulting opportunities, or professional discussions. Let's build something amazing together using modern web technologies.",
  "/contact",
  ["contact", "hire", "collaboration", "freelance", "consulting", "get in touch"]
);