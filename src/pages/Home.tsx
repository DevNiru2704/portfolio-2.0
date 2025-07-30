'use client';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, ChevronDown, Terminal } from "lucide-react";
import GlitchText from "@/components/shared/GlitchText";
import Card3D from "@/components/shared/Card3D";
import LiveCodeSimulation from "@/components/shared/LiveCodeSimulation";
import SkillConstellation from "@/components/shared/SkillConstellation";
import { portfolioEvents } from "@/lib/analytics";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
              <GlitchText>NIRMALYA</GlitchText>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                MANDAL
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Full-Stack Developer | DevOps Enthusiast | AI/ML Explorer
            </p>
            <div className="text-base sm:text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto mb-12 px-4">
              I quickly learn, adapt, and deliver clean, maintainable code with
              a user-focused mindset. I understand the &apos;why&apos; behind features,
              aligning technical solutions with real user needs and business
              goals.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
            <Card3D>
              <LiveCodeSimulation />
            </Card3D>
            <Card3D>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black p-4 sm:p-6 rounded-lg border border-gray-300 dark:border-blue-500/30">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 dark:text-blue-400" />
                  Current Status
                </h2>
                <div className="space-y-3 text-left text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>B.Tech CSE</span>
                    <span className="text-green-600 dark:text-green-400">2023-2027</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Learning</span>
                    <span className="text-blue-600 dark:text-blue-400">DevOps & AI/ML</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Available</span>
                    <span className="text-yellow-600 dark:text-yellow-400 animate-pulse">
                      ● Freelance & Full-time
                    </span>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/DevNiru2704"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-full transition-colors"
              aria-label="Visit Nirmalya's GitHub profile"
              title="Visit GitHub profile"
              onClick={() => portfolioEvents.socialClick('GitHub')}
            >
              <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/nirmalya-mandal-9b2475313/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-full transition-colors"
              aria-label="Visit Nirmalya's LinkedIn profile"
              title="Visit LinkedIn profile"
              onClick={() => portfolioEvents.socialClick('LinkedIn')}
            >
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </a>
            <a
              href="https://x.com/Nirmalya2709"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-full transition-colors"
              aria-label="Visit Nirmalya's X (Twitter) profile"
              title="Visit X (Twitter) profile"
              onClick={() => portfolioEvents.socialClick('Twitter')}
            >
              <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </a>
            <a
              href="mailto:nirmalyabiz2004@gmail.com"
              className="p-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-full transition-colors"
              aria-label="Send email to Nirmalya"
              title="Send email"
              onClick={() => portfolioEvents.emailClick()}
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  const offsetTop = element.offsetTop - 80; // Account for fixed navbar
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
              aria-label="Scroll down to About section"
              title="Scroll down to About section"
            >
              <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 dark:text-blue-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Skills Constellation */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            <GlitchText className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              SKILL CONSTELLATION
            </GlitchText>
          </h2>
          <div className="relative">
            <SkillConstellation />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;