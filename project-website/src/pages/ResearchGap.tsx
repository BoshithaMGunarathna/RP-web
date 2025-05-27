import React from 'react';
import {
  AlertTriangle,
  Brain,
  Code,
  Share2,
  Globe,
  Gamepad2,
} from 'lucide-react';

const researchGaps = [
  {
    title: 'Identification & Classification of Confidence Levels',
    icon: <Brain className="text-blue-600 w-6 h-6" />,
    description:
      'Confidence is often misclassified as enthusiasm or happiness. Current models lack specialized detection for confidence in professional interviews.',
  },
  {
    title: 'Severity Assessment of Stress and Performance Degradation',
    icon: <AlertTriangle className="text-red-500 w-6 h-6" />,
    description:
      'Stress detection studies lack real-world coding contexts. Tools fail to assess stress impact on code quality and decision-making.',
  },
  {
    title: 'Information Integration and Sharing',
    icon: <Share2 className="text-green-600 w-6 h-6" />,
    description:
      'Assessments for code, stress, confidence, and professionalism are siloed. No unified system exists to deliver holistic evaluation.',
  },
  {
    title: 'Lack of Real-World Interview Data',
    icon: <Code className="text-yellow-600 w-6 h-6" />,
    description:
      'Controlled datasets dominate research. Real-time, diverse interview data capturing spontaneous behavior under pressure is missing.',
  },
  {
    title: 'Cultural and Individual Variability in Confidence Expression',
    icon: <Globe className="text-indigo-600 w-6 h-6" />,
    description:
      'Current models apply uniform confidence thresholds, ignoring cultural and personal vocal differences, harming fairness in global assessments.',
  },
  {
    title: 'Limited Application of Gamified & Adaptive Assessments',
    icon: <Gamepad2 className="text-purple-600 w-6 h-6" />,
    description:
      'Gamification is underutilized in interviews. There’s a lack of adaptive systems that enhance engagement and resilience under evaluation.',
  },
];

const ResearchGap: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-white">
      <div className="mb-10">
        <h2 className="text-3xl font-bold font-serif mb-4">Research Gap</h2>
        <div className="h-1 w-24 bg-blue-600"></div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {researchGaps.map((gap, idx) => (
          <div
            key={idx}
            className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-5 hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-shrink-0">{gap.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{gap.title}</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{gap.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchGap;
