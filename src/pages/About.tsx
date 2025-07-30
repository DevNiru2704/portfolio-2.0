"use client";

import { Code, Server, Brain } from "lucide-react";
import GlitchText from "@/components/shared/GlitchText";
import Card3D from "@/components/shared/Card3D";

const About = () => {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <GlitchText className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              ABOUT ME
            </GlitchText>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer crafting digital experiences with modern
            technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card3D>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black p-8 rounded-lg border border-gray-300 dark:border-blue-500/30">
              <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                My Journey
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  I&apos;m a Computer Science Engineering student with a passion
                  for creating innovative solutions. My journey began with
                  curiosity about how things work, which led me to explore
                  programming and technology.
                </p>
                <p>
                  Currently pursuing my B.Tech degree while actively working on
                  real-world projects. I believe in learning by doing and
                  constantly challenging myself with new technologies.
                </p>
                <p>
                  My goal is to bridge the gap between complex technical
                  solutions and user-friendly experiences, making technology
                  accessible and meaningful for everyone.
                </p>
              </div>
            </div>
          </Card3D>

          <Card3D>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black p-8 rounded-lg border border-gray-300 dark:border-purple-500/30">
              <h2 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">
                What I Do
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Full-Stack Development
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Building end-to-end web applications with modern
                      frameworks and best practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Server className="w-6 h-6 text-green-600 dark:text-green-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      DevOps & Cloud
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Implementing CI/CD pipelines and cloud infrastructure for
                      scalable applications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      AI/ML Integration
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Exploring machine learning applications and integrating AI
                      into web applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card3D>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2 text-white">50+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
          </Card3D>
          <Card3D>
            <div className="bg-gradient-to-br from-green-600 to-teal-600 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2 text-white">3+</div>
              <div className="text-green-100">Years Learning</div>
            </div>
          </Card3D>
          <Card3D>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2 text-white">10+</div>
              <div className="text-purple-100">Technologies</div>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
};

export default About;
