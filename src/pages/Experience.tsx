'use client';

import { ExternalLink, Calendar, MapPin } from "lucide-react";
import GlitchText from "@/components/shared/GlitchText";
import Card3D from "@/components/shared/Card3D";

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      role: "Full Stack Developer Intern",
      duration: "Jun 2024 - Aug 2024",
      location: "Remote",
      description:
        "Developed and maintained web applications using React and Node.js, contributing to multiple client projects and improving system performance.",
      contributions: [
        "Built responsive web applications using React and TypeScript",
        "Implemented RESTful APIs with Node.js and Express",
        "Optimized database queries resulting in 40% performance improvement",
        "Collaborated with cross-functional teams using Agile methodologies",
      ],
      productUrl: "https://techcorp-demo.com",
    },
    {
      company: "StartupXYZ",
      role: "Frontend Developer",
      duration: "Jan 2024 - May 2024",
      location: "Bangalore, India",
      description:
        "Led frontend development for a fintech application, focusing on user experience and performance optimization.",
      contributions: [
        "Designed and implemented user interfaces using React and Tailwind CSS",
        "Integrated payment gateways and financial APIs",
        "Reduced page load times by 60% through code optimization",
        "Mentored junior developers and conducted code reviews",
      ],
      productUrl: "https://startupxyz-demo.com",
    },
    {
      company: "Digital Agency Pro",
      role: "Web Developer",
      duration: "Sep 2023 - Dec 2023",
      location: "Mumbai, India",
      description:
        "Worked on various client projects ranging from e-commerce platforms to corporate websites, delivering high-quality solutions.",
      contributions: [
        "Developed custom WordPress themes and plugins",
        "Created responsive websites for 15+ clients",
        "Implemented SEO best practices improving search rankings",
        "Managed project timelines and client communications",
      ],
      productUrl: "https://digitalagency-demo.com",
    },
  ];

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <GlitchText className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              EXPERIENCE
            </GlitchText>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and contributions to various organizations
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card3D key={index}>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black p-6 sm:p-8 rounded-lg border border-gray-300 dark:border-blue-500/30">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.company}
                    </h2>
                    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <a
                      href={exp.productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Product
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Contributions */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Contributions:
                  </h4>
                  <ul className="space-y-2">
                    {exp.contributions.map((contribution, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {contribution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Card3D>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2 text-white">3+</div>
              <div className="text-blue-100">Companies</div>
            </div>
          </Card3D>
          <Card3D>
            <div className="bg-gradient-to-br from-green-600 to-teal-600 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2 text-white">12+</div>
              <div className="text-green-100">Months Experience</div>
            </div>
          </Card3D>
          <Card3D>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2 text-white">25+</div>
              <div className="text-purple-100">Projects Delivered</div>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
};

export default Experience;
