import React from 'react';
import { Search, TrendingUp, MessageCircle } from 'lucide-react';

const researchGaps = [
  {
    title: 'Identification & Classification',
    description:
      'There are no records of a smart solution for coconut pest and disease identification and classification in Sri Lanka. Symptoms show similar appearance, making classification difficult.',
    icon: <Search className="text-blue-600 w-10 h-10" />,
  },
  {
    title: 'Severity Assessment',
    description:
      'Smart solutions exist in India for identification, but severity assessment of disease conditions and pest damage progression has not been attempted.',
    icon: <TrendingUp className="text-blue-600 w-10 h-10" />,
  },
  {
    title: 'Information Sharing',
    description:
      'Real-time communication between growers, researchers, and extension personnel is lacking. A priority need exists for integrated information systems.',
    icon: <MessageCircle className="text-blue-600 w-10 h-10" />,
  },
];

const ResearchGap: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Research Gap</h2>
      <p className="text-gray-700 mb-12">
        Following areas are the research gaps found in most of the recent researches.
      </p>

      <div className="grid gap-12 md:grid-cols-3">
        {researchGaps.map((gap, idx) => (
          <div key={idx} className="flex flex-col items-center text-center px-4">
            <div className="mb-4">{gap.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{gap.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{gap.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchGap;
