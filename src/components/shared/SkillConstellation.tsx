'use client';

import { useState, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
  FaDocker,
  FaAws,
  FaJava,
  FaAngular,
  FaGithub,
  FaUnity,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiKubernetes,
  SiTensorflow,
  SiNextdotjs,
  SiC,
  SiCplusplus,
  SiSharp,
  SiHtml5,
  SiCss3,
  SiDjango,
  SiReact,
  SiFlutter,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiJenkins,
  SiTerraform,
  SiBlender,
  SiGit,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

interface Skill {
  name: string;
  x: number;
  y: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const SkillConstellation = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [draggedSkill, setDraggedSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Core Programming Languages"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const skillCategories: SkillCategory[] = [
    {
      name: "Core Programming Languages",
      skills: [
        {
          name: "C",
          x: 20,
          y: 30,
          icon: SiC,
          color: "from-blue-600 to-blue-800",
        },
        {
          name: "C++",
          x: 40,
          y: 20,
          icon: SiCplusplus,
          color: "from-blue-500 to-purple-600",
        },
        {
          name: "Java",
          x: 60,
          y: 35,
          icon: FaJava,
          color: "from-red-500 to-orange-600",
        },
        {
          name: "Python",
          x: 30,
          y: 60,
          icon: FaPython,
          color: "from-yellow-400 to-blue-500",
        },
        {
          name: "JavaScript",
          x: 70,
          y: 65,
          icon: FaJs,
          color: "from-yellow-400 to-yellow-600",
        },
        {
          name: "C#",
          x: 80,
          y: 40,
          icon: SiSharp,
          color: "from-purple-500 to-purple-700",
        },
      ],
    },
    {
      name: "Full Stack Web Development",
      skills: [
        {
          name: "HTML",
          x: 15,
          y: 25,
          icon: SiHtml5,
          color: "from-orange-500 to-red-500",
        },
        {
          name: "CSS",
          x: 30,
          y: 20,
          icon: SiCss3,
          color: "from-blue-400 to-blue-600",
        },
        {
          name: "JavaScript",
          x: 50,
          y: 15,
          icon: FaJs,
          color: "from-yellow-400 to-yellow-600",
        },
        {
          name: "TypeScript",
          x: 70,
          y: 25,
          icon: SiTypescript,
          color: "from-blue-500 to-blue-700",
        },
        {
          name: "React",
          x: 85,
          y: 35,
          icon: FaReact,
          color: "from-cyan-400 to-blue-500",
        },
        {
          name: "Next.js",
          x: 25,
          y: 50,
          icon: SiNextdotjs,
          color: "from-gray-700 to-black",
        },
        {
          name: "Node.js",
          x: 45,
          y: 60,
          icon: FaNodeJs,
          color: "from-green-400 to-green-600",
        },
        {
          name: "Django",
          x: 65,
          y: 70,
          icon: SiDjango,
          color: "from-green-600 to-green-800",
        },
        {
          name: "Angular",
          x: 80,
          y: 65,
          icon: FaAngular,
          color: "from-red-500 to-red-700",
        },
        {
          name: "MongoDB",
          x: 15,
          y: 75,
          icon: SiMongodb,
          color: "from-green-500 to-green-700",
        },
        {
          name: "Tailwind CSS",
          x: 90,
          y: 50,
          icon: SiTailwindcss,
          color: "from-cyan-400 to-teal-500",
        },
      ],
    },
    {
      name: "App Development",
      skills: [
        {
          name: "React Native",
          x: 35,
          y: 40,
          icon: SiReact,
          color: "from-cyan-400 to-blue-500",
        },
        {
          name: "Flutter",
          x: 65,
          y: 45,
          icon: SiFlutter,
          color: "from-blue-400 to-cyan-500",
        },
      ],
    },
    {
      name: "AI/ML",
      skills: [
        {
          name: "TensorFlow",
          x: 25,
          y: 30,
          icon: SiTensorflow,
          color: "from-orange-500 to-red-500",
        },
        {
          name: "PyTorch",
          x: 50,
          y: 25,
          icon: SiPytorch,
          color: "from-red-500 to-orange-600",
        },
        {
          name: "Scikit-learn",
          x: 75,
          y: 35,
          icon: SiScikitlearn,
          color: "from-orange-400 to-yellow-500",
        },
        {
          name: "OpenCV",
          x: 35,
          y: 65,
          icon: SiOpencv,
          color: "from-green-500 to-blue-500",
        },
        {
          name: "Python",
          x: 65,
          y: 70,
          icon: FaPython,
          color: "from-yellow-400 to-blue-500",
        },
      ],
    },
    {
      name: "DevOps",
      skills: [
        {
          name: "Docker",
          x: 30,
          y: 35,
          icon: FaDocker,
          color: "from-blue-400 to-blue-600",
        },
        {
          name: "AWS",
          x: 60,
          y: 30,
          icon: FaAws,
          color: "from-orange-400 to-orange-600",
        },
        {
          name: "Kubernetes",
          x: 45,
          y: 60,
          icon: SiKubernetes,
          color: "from-blue-500 to-purple-600",
        },
        {
          name: "Jenkins",
          x: 70,
          y: 65,
          icon: SiJenkins,
          color: "from-blue-600 to-gray-700",
        },
        {
          name: "Terraform",
          x: 25,
          y: 70,
          icon: SiTerraform,
          color: "from-purple-500 to-blue-600",
        },
      ],
    },
    {
      name: "Others",
      skills: [
        {
          name: "Blender",
          x: 20,
          y: 30,
          icon: SiBlender,
          color: "from-orange-500 to-blue-500",
        },
        {
          name: "Unity",
          x: 40,
          y: 25,
          icon: FaUnity,
          color: "from-gray-700 to-black",
        },
        {
          name: "VS Code",
          x: 65,
          y: 35,
          icon: VscVscode,
          color: "from-blue-500 to-cyan-500",
        },
        {
          name: "GitHub",
          x: 80,
          y: 45,
          icon: FaGithub,
          color: "from-gray-700 to-black",
        },
        {
          name: "Git",
          x: 30,
          y: 65,
          icon: SiGit,
          color: "from-red-500 to-orange-500",
        },
        {
          name: "Postman",
          x: 55,
          y: 70,
          icon: SiPostman,
          color: "from-orange-500 to-red-500",
        },
      ],
    },
  ];

  const [skills, setSkills] = useState<Skill[]>(
    skillCategories.find((cat) => cat.name === selectedCategory)?.skills || []
  );

  const handleCategoryChange = (categoryName: string) => {
    const category = skillCategories.find((cat) => cat.name === categoryName);
    if (category) {
      setSkills([...category.skills]);
      setSelectedCategory(categoryName);
      setIsDropdownOpen(false);
      setHoveredSkill(null);
      setDraggedSkill(null);
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    isDragging: boolean;
    startX: number;
    startY: number;
    skillName: string;
  }>({ isDragging: false, startX: 0, startY: 0, skillName: "" });

  const handleMouseDown = useCallback(
    (e: React.MouseEvent, skillName: string) => {
      e.preventDefault();
      dragRef.current = {
        isDragging: true,
        startX: e.clientX,
        startY: e.clientY,
        skillName,
      };
      setDraggedSkill(skillName);
    },
    []
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent, skillName: string) => {
      e.preventDefault();
      const touch = e.touches[0];
      dragRef.current = {
        isDragging: true,
        startX: touch.clientX,
        startY: touch.clientY,
        skillName,
      };
      setDraggedSkill(skillName);
    },
    []
  );

  const handleMove = useCallback((clientX: number, clientY: number) => {
    if (!dragRef.current.isDragging || !containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    // Constrain within bounds (with some padding for the skill circle)
    const constrainedX = Math.max(8, Math.min(92, x));
    const constrainedY = Math.max(8, Math.min(85, y));

    setSkills((prev) =>
      prev.map((skill) =>
        skill.name === dragRef.current.skillName
          ? { ...skill, x: constrainedX, y: constrainedY }
          : skill
      )
    );
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    },
    [handleMove]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    },
    [handleMove]
  );

  const handleEnd = useCallback(() => {
    dragRef.current.isDragging = false;
    setDraggedSkill(null);
  }, []);

  return (
    <div className="space-y-4">
      {/* Category Selector */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full sm:w-auto min-w-64 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-left shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between"
        >
          <span className="text-gray-900 dark:text-white font-medium">
            {selectedCategory}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 sm:right-auto sm:min-w-64 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryChange(category.name)}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ${
                  selectedCategory === category.name
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                <div className="font-medium">{category.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {category.skills.length} skills
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Skills Constellation */}
      <div
        ref={containerRef}
        className="relative h-80 sm:h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black rounded-lg overflow-hidden select-none touch-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
      >
        <div className="absolute inset-0">
          <div className="absolute top-2 left-2 text-xs text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded backdrop-blur-sm">
            Drag skills around!
          </div>
          <div className="absolute top-2 right-2 text-xs text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded backdrop-blur-sm">
            {skills.length} skills
          </div>

          {skills.map((skill) => {
            const Icon = skill.icon;
            const isHovered = hoveredSkill === skill.name;
            const isDragged = draggedSkill === skill.name;

            return (
              <div
                key={`${selectedCategory}-${skill.name}`}
                className={`absolute transition-all duration-200 cursor-move group ${
                  isDragged ? "z-50" : isHovered ? "z-10" : "z-0"
                }`}
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`,
                  transform: `translate(-50%, -50%) ${
                    isHovered || isDragged ? "scale(1.1)" : "scale(1)"
                  }`,
                }}
                onMouseEnter={() =>
                  !dragRef.current.isDragging && setHoveredSkill(skill.name)
                }
                onMouseLeave={() =>
                  !dragRef.current.isDragging && setHoveredSkill(null)
                }
                onMouseDown={(e) => handleMouseDown(e, skill.name)}
                onTouchStart={(e) => handleTouchStart(e, skill.name)}
              >
                <div className="relative">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${
                      skill.color
                    } rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                      isHovered || isDragged
                        ? "shadow-xl shadow-current/30"
                        : "group-hover:shadow-xl"
                    } ${isDragged ? "ring-2 ring-white/50" : ""}`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div
                    className={`absolute -bottom-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity duration-200 ${
                      isDragged ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <span className="text-xs font-semibold text-gray-900 dark:text-white bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded backdrop-blur-sm">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillConstellation;
