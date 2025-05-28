import React from 'react';
import { Lightbulb, Target } from 'lucide-react';

const ResearchProblemSolution: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-white">
        <div className="mb-8">
            <h2 className="text-3xl font-bold font-serif mb-6">Research Problem & Solution</h2>
            
            <div className="h-1 w-24 bg-blue-600"></div>
            
        </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-start mb-4">
        <div className="flex items-start gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Research Problem</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Despite advancements in AI-driven recruitment systems, current automated interview tools remain limited in their ability to provide a holistic evaluation of candidates. While these systems effectively assess technical skills, they fall short in capturing critical behavioral and psychological attributes such as confidence, professionalism, stress resilience, and code maintainability factors essential to real world job performance.
            </p>
          </div>
        </div>

        <div>
          <img src="jobportal.png" alt="Job Portal Illustration" className="rounded-xl shadow" />
        </div>
      </div>


      <div className="flex items-start gap-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-4">Proposed Solution</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            This research aims to bridge these gaps by developing a multimodal interview system that integrates voice, visual, and physiological data with technical performance metrics. The proposed solution includes a hybrid confidence detector, a culturally-aware professionalism evaluator, a stress adaptive coding environment, and a multi dimensional code assessment model. Together, these innovations aim to deliver fairer, more comprehensive candidate evaluations and set new standards for ethical and effective AI-based hiring.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            Confidence detection is often reduced to simplistic vocal metrics, misinterpreting cultural speech patterns and failing to differentiate between assertiveness and content accuracy. Professionalism assessments rely heavily on superficial visual cues, overlooking contextual behaviors and cultural sensitivity. Similarly, technical interviews neglect stress performance dynamics, ignoring physiological signals that reflect cognitive overload, and fail to adapt question difficulty accordingly. Additionally, code assessments focus solely on correctness, disregarding maintainability and complexity, which are vital for long-term software quality.
          </p>
        </div>
      </div>


          

    </section>
  );
};

export default ResearchProblemSolution;
