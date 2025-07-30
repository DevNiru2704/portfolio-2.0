"use client";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import GlitchText from "@/components/shared/GlitchText";
import Card3D from "@/components/shared/Card3D";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack MERN application with payment integration and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      type: "client",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      github: "https://github.com/nirmalya",
      live: "https://ecommerce-demo.com",
    },
    {
      title: "AI Chat Assistant",
      description: "ML-powered chatbot with natural language processing",
      tech: ["Python", "TensorFlow", "Flask", "React"],
      type: "personal",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      github: "https://github.com/nirmalya",
      live: "https://ai-chat-demo.com",
    },
    {
      title: "DevOps Pipeline",
      description: "Automated CI/CD pipeline with Docker and Kubernetes",
      tech: ["Docker", "Kubernetes", "Jenkins", "AWS"],
      type: "company",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      github: "https://github.com/nirmalya",
      live: "https://devops-demo.com",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern responsive portfolio built with React and TypeScript",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      type: "personal",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      github: "https://github.com/nirmalya",
      live: "https://nirmalyamandal.me",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      type: "client",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      github: "https://github.com/nirmalya",
      live: "https://taskapp-demo.com",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring with data visualization",
      tech: ["React", "D3.js", "Weather API", "Chart.js"],
      type: "personal",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      github: "https://github.com/nirmalya",
      live: "https://weather-demo.com",
    },
  ];

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <GlitchText className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              MY PROJECTS
            </GlitchText>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my work spanning web development, AI/ML, and DevOps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card3D key={index} className="group">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black rounded-lg overflow-hidden border border-gray-200 dark:border-blue-500/30 hover:border-gray-300 dark:hover:border-blue-400/60 transition-all duration-300 h-full shadow-lg dark:shadow-none">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-white ${
                        project.type === "client"
                          ? "bg-green-800"
                          : project.type === "personal"
                          ? "bg-blue-800"
                          : "bg-purple-800"
                      }`}
                    >
                      {project.type.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-200 dark:bg-blue-500/30 text-blue-800 dark:text-blue-200 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm"
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
