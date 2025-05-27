import React from 'react';
import {TrendingUp, Gamepad2, Globe, Code2, Share2, Brain } from 'lucide-react';

const researchGaps = [
  {
    title: 'Identification & classification',
    icon: <Brain className="text-blue-600 w-8 h-8" />,
    description:
      'Confidence is often misclassified as enthusiasm or happiness. Current models lack specialized detection for confidence in professional interviews.',
  },
  {
    title: 'Severity assessment',
    icon: <TrendingUp className="text-blue-600 w-8 h-8" />,
    description:
      'Stress detection studies lack real-world coding contexts. Tools fail to assess stress impact on code quality and decision-making.',
  },
  {
    title: 'Information sharing',
    icon: <Share2 className="text-blue-600 w-8 h-8" />,
    description:
      'Assessments for code, stress, confidence, and professionalism are siloed. No unified system exists to deliver holistic evaluation.',
  },
  {
    title: 'Real-world interview data',
    icon: <Code2 className="text-blue-600 w-8 h-8" />,
    description:
      'Controlled datasets dominate research. Real-time, diverse interview data capturing spontaneous behavior under pressure is missing.',
  },
  {
    title: 'Cultural & individual variability',
    icon: <Globe className="text-blue-600 w-8 h-8" />,
    description:
      'Current models apply uniform confidence thresholds, ignoring cultural and personal vocal differences, harming fairness in global assessments.',
  },
  {
    title: 'Gamified & adaptive assessments',
    icon: <Gamepad2 className="text-blue-600 w-8 h-8" />,
    description:
      'Gamification is underutilized in interviews. There’s a lack of adaptive systems that enhance engagement and resilience under evaluation.',
  },
];


const ResearchGap: React.FC = () => {
  return (
    <section className="bg-white py-0 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold font-serif mb-3">Research Gap</h2>
      <p className="text-gray-700 mb-12">
        Following areas are the research gaps found in most of the recent researches.
      </p>

      <div className="grid gap-12 md:grid-cols-3">
        {researchGaps.map((gap, idx) => (
          <div key={idx} className="flex flex-col items-center text-center px-4">
            <div className="mb-4">{gap.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{gap.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">{gap.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchGap;
