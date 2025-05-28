import React, { useState, useEffect } from 'react';
import { Star, Target, Zap, Search, Share2, TrendingUp, CheckCircle } from 'lucide-react';

const objectives = [
  {
    id: 1,
    title: "Assess Personality Traits & Confidence via Vocal Features",
    description: "Develop algorithms to analyze vocal features and identify personality traits and confidence levels with precision.",
    position: "left",
    color: "blue",
    icon: <Target className="w-5 h-5" />
  },
  {
    id: 2,
    title: "Gamified Emotional & Technical Skill Evaluation",
    description: "Integrate emotional analysis and gamified assessments to dynamically evaluate technical abilities under real-time scenarios.",
    position: "right",
    color: "blue",
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 3,
    title: "Code Complexity & Maintainability Assessment",
    description: "Automatically evaluate submitted code to determine its complexity and maintainability using advanced static analysis.",
    position: "left",
    color: "blue",
    icon: <Search className="w-5 h-5" />
  },
  {
    id: 4,
    title: "Video-Based Mock Tests & Cover Letter Screening",
    description: "Create and analyze mock video interviews and cover letters to assess candidates' background fit and communication skills.",
    position: "right",
    color: "blue",
    icon: <Share2 className="w-5 h-5" />
  },
  {
    id: 5,
    title: "Validation Against Traditional Benchmarks",
    description: "Compare the tool’s assessment results with traditional evaluation methods to validate accuracy, fairness, and efficiency.",
    position: "left",
    color: "blue",
    icon: <CheckCircle className="w-5 h-5" />
  }
];


const ResearchObjectives = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      objectives.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index]);
        }, index * 300);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getColorClasses = (color) => {
    const colors = {
      green: {
        bg: 'bg-green-500',
        border: 'border-green-200',
        cardBg: 'bg-green-50',
        text: 'text-green-800',
        accent: 'text-green-600'
      },
      blue: {
        bg: 'bg-blue-500',
        border: 'border-blue-200',
        cardBg: 'bg-blue-50',
        text: 'text-blue-800',
        accent: 'text-blue-600'
      },
      purple: {
        bg: 'bg-purple-500',
        border: 'border-purple-200',
        cardBg: 'bg-purple-50',
        text: 'text-purple-800',
        accent: 'text-purple-600'
      },
      orange: {
        bg: 'bg-orange-500',
        border: 'border-orange-200',
        cardBg: 'bg-orange-50',
        text: 'text-orange-800',
        accent: 'text-orange-600'
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-3 mb-4">
            <h2 className="text-3xl font-bold font-serif mb-2">Research Objectives</h2>
          </div>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 h-full rounded-full opacity-30"></div>
          <div className="space-y-[-10]">
            {objectives.map((objective, index) => {
              const colors = getColorClasses(objective.color);
              const isVisible = visibleItems.includes(index);
              const isLeft = objective.position === 'left';

              return (
                <div
                  key={objective.id}
                  className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} relative`}
                >
                  <div
                    className={`w-5/12 transform transition-all duration-700 ${
                      isVisible 
                        ? 'translate-x-0 opacity-100' 
                        : isLeft 
                          ? '-translate-x-20 opacity-0' 
                          : 'translate-x-20 opacity-0'
                    }`}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className={`
                      relative p-6 rounded-2xl shadow-lg border-2 transition-all duration-300
                      ${colors.cardBg} ${colors.border}
                      ${hoveredItem === index ? 'shadow-2xl scale-105' : 'shadow-lg scale-100'}
                    `}>
                      <div className={`
                        absolute top-8 w-0 h-0 transition-all duration-300
                        ${isLeft ? '-right-4' : '-left-4'}
                        ${hoveredItem === index ? 'scale-125' : 'scale-100'}
                      `}>
                        <div className={`
                          ${isLeft 
                            ? 'border-l-16 border-l-transparent border-r-16 border-t-8 border-b-8' 
                            : 'border-r-16 border-r-transparent border-l-16 border-t-8 border-b-8'
                          }
                          ${colors.cardBg.replace('bg-', 'border-')}
                        `} style={{
                          borderLeftWidth: isLeft ? '0' : '16px',
                          borderRightWidth: isLeft ? '16px' : '0',
                          borderTopWidth: '8px',
                          borderBottomWidth: '8px',
                          borderLeftColor: isLeft ? 'transparent' : colors.cardBg.includes('green') ? '#f0fdf4' : 
                                          colors.cardBg.includes('blue') ? '#eff6ff' :
                                          colors.cardBg.includes('purple') ? '#faf5ff' : '#fff7ed',
                          borderRightColor: isLeft ? (colors.cardBg.includes('green') ? '#f0fdf4' : 
                                           colors.cardBg.includes('blue') ? '#eff6ff' :
                                           colors.cardBg.includes('purple') ? '#faf5ff' : '#fff7ed') : 'transparent',
                          borderTopColor: 'transparent',
                          borderBottomColor: 'transparent'
                        }}></div>
                      </div>
                      <div className={`
                        inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-sm font-semibold
                        ${colors.bg} text-white
                        transform transition-all duration-300
                        ${hoveredItem === index ? 'scale-110' : 'scale-100'}
                      `}>
                        {objective.icon}
                        <span>Objective {objective.id}</span>
                      </div>
                      <h3 className={`
                        text-xl font-bold mb-4 leading-tight transition-colors duration-300
                        ${colors.text}
                        ${hoveredItem === index ? 'transform translate-x-1' : ''}
                      `}>
                        {objective.title}
                      </h3>

                      <p className={`
                        text-gray-700 leading-relaxed text-justify transition-all duration-300
                        ${hoveredItem === index ? 'text-gray-800 transform translate-x-1' : ''}
                      `}>
                        {objective.description}
                      </p>

                      <div className={`
                        mt-4 pt-4 border-t border-gray-200 transition-all duration-300
                        ${hoveredItem === index ? 'opacity-100 transform translate-y-0' : 'opacity-70'}
                      `}>
                        <div className="flex flex-wrap gap-2">
                          {objective.id === 1 && ['Classification', 'Machine Learning', 'Confidence'].map(tag => (
                            <span key={tag} className={`px-2 py-1 text-xs rounded-full ${colors.bg} bg-opacity-20 ${colors.accent} font-medium`}>
                              {tag}
                            </span>
                          ))}
                          {objective.id === 2 && ['Real-time', 'Stress Analysis', 'Performance'].map(tag => (
                            <span key={tag} className={`px-2 py-1 text-xs rounded-full ${colors.bg} bg-opacity-20 ${colors.accent} font-medium`}>
                              {tag}
                            </span>
                          ))}
                          {objective.id === 3 && ['Cultural Adaptation', 'Personalization', 'Fairness'].map(tag => (
                            <span key={tag} className={`px-2 py-1 text-xs rounded-full ${colors.bg} bg-opacity-20 ${colors.accent} font-medium`}>
                              {tag}
                            </span>
                          ))}
                          {objective.id === 4 && ['Integration', 'Gamification', 'Platform'].map(tag => (
                            <span key={tag} className={`px-2 py-1 text-xs rounded-full ${colors.bg} bg-opacity-20 ${colors.accent} font-medium`}>
                              {tag}
                            </span>
                          ))}
                          {objective.id === 5 && ['Benchmarking', 'Validation', 'Accuracy'].map(tag => (
                            <span key={tag} className={`px-2 py-1 text-xs rounded-full ${colors.bg} bg-opacity-20 ${colors.accent} font-medium`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`
                      w-12 h-12 rounded-full border-4 border-white shadow-lg transition-all duration-500
                      ${colors.bg}
                      ${isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-45'}
                      ${hoveredItem === index ? 'scale-125 shadow-2xl' : ''}
                    `}>
                      <div className="w-full h-full flex items-center justify-center">
                        <Star className={`
                          w-6 h-6 text-white transition-all duration-300
                          ${hoveredItem === index ? 'rotate-180 scale-110' : 'rotate-0'}
                        `} />
                      </div>
                    </div>
                    
                    {hoveredItem === index && (
                      <div className={`
                        absolute inset-0 w-12 h-12 rounded-full animate-ping
                        ${colors.bg} opacity-25
                      `}></div>
                    )}
                  </div>
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResearchObjectives;