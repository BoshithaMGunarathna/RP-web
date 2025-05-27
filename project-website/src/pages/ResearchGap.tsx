import React from 'react';
import {TrendingUp, Gamepad2, Globe, Code2, Share2, Brain } from 'lucide-react';

const researchGaps = [
  {
    title: 'Identification & Classification',
    icon: <Brain className="text-green-600 w-10 h-10" />,
    description:
      'Confidence is often misclassified as enthusiasm or happiness. Current models lack specialized detection for confidence in professional interviews.',
  },
  {
    title: 'Severity Assessment',
    icon: <TrendingUp className="text-green-600 w-10 h-10" />,
    description:
      'Stress detection studies lack real-world coding contexts. Tools fail to assess stress impact on code quality and decision-making.',
  },
  {
    title: 'Information Sharing',
    icon: <Share2 className="text-green-600 w-10 h-10" />,
    description:
      'Assessments for code, stress, confidence, and professionalism are siloed. No unified system exists to deliver holistic evaluation.',
  },
  {
    title: 'Lack of Real-World Interview Data',
    icon: <Code2 className="text-green-600 w-10 h-10" />,
    description:
      'Controlled datasets dominate research. Real-time, diverse interview data capturing spontaneous behavior under pressure is missing.',
  },
  {
    title: 'Cultural Variability in Confidence Expression',
    icon: <Globe className="text-green-600 w-10 h-10" />,
    description:
      'Uniform thresholds in current models ignore cultural and personal speech differences, reducing fairness in global assessments.',
  },
  {
    title: 'Limited Gamified & Adaptive Assessments',
    icon: <Gamepad2 className="text-green-600 w-10 h-10" />,
    description:
      'Gamification is underutilized in interviews. Adaptive systems for engagement and resilience feedback are largely missing.',
  },
];

const ResearchGap: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 max-w-7xl mx-auto text-center">
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
