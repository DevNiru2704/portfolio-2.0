'use client';

import { Mail, Users, Briefcase, Brain } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import GlitchText from "@/components/shared/GlitchText";
import Card3D from "@/components/shared/Card3D";

const Contact = () => {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <GlitchText className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              GET IN TOUCH
            </GlitchText>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s collaborate and create
            something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <Card3D>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 sm:p-8 rounded-lg text-center">
              <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4" />
              <h2 className="text-lg sm:text-xl font-semibold mb-2">
                Freelance
              </h2>
              <p className="text-blue-100 text-sm sm:text-base">
                Available for exciting projects
              </p>
            </div>
          </Card3D>
          <Card3D>
            <div className="bg-gradient-to-br from-green-600 to-teal-600 p-6 sm:p-8 rounded-lg text-center">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4" />
              <h2 className="text-lg sm:text-xl font-semibold mb-2">
                Full-time
              </h2>
              <p className="text-green-100 text-sm sm:text-base">
                Open to new opportunities
              </p>
            </div>
          </Card3D>
          <Card3D className="sm:col-span-2 lg:col-span-1">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 sm:p-8 rounded-lg text-center">
              <Brain className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4" />
              <h2 className="text-lg sm:text-xl font-semibold mb-2">
                Collaboration
              </h2>
              <p className="text-purple-100 text-sm sm:text-base">
                Let&apos;s innovate together
              </p>
            </div>
          </Card3D>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card3D>
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black p-8 rounded-lg border border-gray-200 dark:border-blue-500/30 shadow-lg dark:shadow-none">
              <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                    <a
                      href="mailto:nirmalyabiz2004@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      nirmalyabiz2004@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaGithub className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">GitHub</p>
                    <a
                      href="https://github.com/DevNiru2704"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      github.com/DevNiru2704
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaLinkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/nirmalya-mandal-9b2475313/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/nirmalya-mandal-9b2475313/
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaXTwitter className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">X</p>
                    <a
                      href="https://x.com/Nirmalya2709"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      x.com/Nirmalya2709
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>

          <Card3D>
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black p-8 rounded-lg border border-gray-200 dark:border-purple-500/30 shadow-lg dark:shadow-none">
              <h3 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">
                Let&apos;s Work Together
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  I&apos;m always interested in new opportunities and exciting
                  projects. Whether you&apos;re looking for a developer,
                  collaborator, or just want to chat about technology, I&apos;d love
                  to hear from you.
                </p>
                <p>Currently available for:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Full-stack web development projects</li>
                  <li>DevOps and cloud infrastructure setup</li>
                  <li>AI/ML integration and consulting</li>
                  <li>Code reviews and technical mentoring</li>
                  <li>Open source contributions</li>
                </ul>
              </div>
            </div>
          </Card3D>
        </div>

        <div className="text-center mt-12">
          <a
            href="mailto:nirmalyabiz2004@gmail.com"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50 inline-block"
          >
            Send Me a Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;