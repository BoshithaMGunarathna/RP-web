import React from 'react';
import { Lightbulb, Target } from 'lucide-react';

const ResearchProblemSolution: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-white">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold font-serif mb-4">Research Problem & Solution</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Current interview processes are often subjective and limited in scope, failing to provide a holistic assessment of candidates. There is a need for an automated tool that integrates multiple evaluation techniques to offer a comprehensive and objective analysis of candidates' capabilities and suitability for roles.
        </p>
      </div>

      {/* First part: Problem + Image */}
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <div className="flex items-start gap-4">
          <Target className="text-red-600 w-8 h-8 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Research Problem</h3>
            <p className="text-gray-700 leading-relaxed">
              Despite advancements in AI-driven recruitment systems, current automated interview tools remain limited in their ability to provide a holistic evaluation of candidates. While these systems effectively assess technical skills, they fall short in capturing critical behavioral and psychological attributes such as confidence, professionalism, stress resilience, and code maintainability—factors essential to real-world job performance.
            </p>
          </div>
        </div>

        <div>
          <img src="jobportal.png" alt="Job Portal Illustration" className="rounded-xl shadow" />
        </div>
      </div>

      {/* Solution below image */}
      <div className="flex items-start gap-4 mb-16">
        <Lightbulb className="text-green-600 w-8 h-8 mt-1" />
        <div>
          <h3 className="text-xl font-semibold mb-2">Proposed Solution</h3>
          <p className="text-gray-700 leading-relaxed">
            This research aims to bridge these gaps by developing a multimodal interview system that integrates voice, visual, and physiological data with technical performance metrics. The proposed solution includes a hybrid confidence detector, a culturally-aware professionalism evaluator, a stress-adaptive coding environment, and a multi-dimensional code assessment model. Together, these innovations aim to deliver fairer, more comprehensive candidate evaluations and set new standards for ethical and effective AI-based hiring.
          </p>
        </div>
      </div>

      {/* Remaining Problem Content - full width */}
      <div className="flex items-start gap-4">
        <Target className="text-red-600 w-8 h-8 mt-1" />
        <div>
          <p className="text-gray-700 leading-relaxed">
            Confidence detection is often reduced to simplistic vocal metrics, misinterpreting cultural speech patterns and failing to differentiate between assertiveness and content accuracy. Professionalism assessments rely heavily on superficial visual cues, overlooking contextual behaviors and cultural sensitivity. Similarly, technical interviews neglect stress-performance dynamics, ignoring physiological signals that reflect cognitive overload, and fail to adapt question difficulty accordingly. Additionally, code assessments focus solely on correctness, disregarding maintainability and complexity, which are vital for long-term software quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchProblemSolution;
