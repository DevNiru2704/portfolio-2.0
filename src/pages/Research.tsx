import { FileText, Award, Brain, Network, Zap } from "lucide-react";
import GlitchText from "@/components/shared/GlitchText";
import Card3D from "@/components/shared/Card3D";

const Research = () => {
  const papers = [
    {
      title: "Optimizing Neural Networks for Edge Computing",
      conference: "IEEE Conference on AI",
      year: "2024",
      status: "Published",
    },
    {
      title: "Microservices Architecture Patterns",
      conference: "ACM Systems Conference",
      year: "2023",
      status: "Under Review",
    },
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner", issuer: "Amazon", year: "2024" },
    { name: "MongoDB Developer", issuer: "MongoDB Inc.", year: "2023" },
    { name: "React Professional", issuer: "Meta", year: "2023" },
  ];

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <GlitchText className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              RESEARCH & LEARNING
            </GlitchText>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Academic contributions and continuous learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16">
          {/* Research Papers */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
              <GlitchText>RESEARCH PAPERS</GlitchText>
            </h2>
            <div className="space-y-4">
              {papers.map((paper, index) => (
                <Card3D key={index}>
                  <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-green-400/30 shadow-lg dark:shadow-none">
                    <h3 className="text-base sm:text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
                      {paper.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm sm:text-base">
                      {paper.conference} • {paper.year}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs ${
                        paper.status === "Published"
                          ? "bg-green-200 dark:bg-green-500/30 text-green-800 dark:text-green-200"
                          : "bg-yellow-200 dark:bg-yellow-500/30 text-yellow-800 dark:text-yellow-200"
                      }`}
                    >
                      {paper.status}
                    </span>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
              <GlitchText>CERTIFICATIONS</GlitchText>
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card3D key={index}>
                  <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-yellow-400/30 shadow-lg dark:shadow-none">
                    <h3 className="text-base sm:text-lg font-semibold text-yellow-600 dark:text-yellow-400">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Goals */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black p-8 rounded-lg border border-gray-200 dark:border-purple-500/30 shadow-lg dark:shadow-none">
          <h2 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400 text-center">
            Current Learning Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Brain className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Deep learning, neural networks, and AI applications
              </p>
            </div>
            <div className="text-center">
              <Network className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Cloud Architecture</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                AWS, Docker, Kubernetes, and microservices
              </p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Performance Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Web performance, algorithms, and system design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;