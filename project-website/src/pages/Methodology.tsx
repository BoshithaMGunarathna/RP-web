import React from 'react';
import { ClipboardCheck, Mic, Gauge, Code, Brain } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-white">
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-serif mb-6">Methodology</h2>
        <div className="h-1 w-24 bg-blue-600"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
        <div className="flex justify-center">
          <img
            src="Methodology.png"
            alt="Methodology Visual"
            className="max-h-[400px] w-auto object-contain"
          />
        </div>

        <p className="text-gray-700 leading-relaxed text-justify max-w-xl">
          This research presents the design and implementation of an automated interview system aimed at conducting holistic candidate assessments.
          The system integrates mock examinations, voice-based non-technical interviews, and technical coding evaluations, each enhanced by AI-driven
          analytics and behavior tracking. The primary goal is to evaluate not only technical skills but also psychological resilience and professional behavior.
          The study adopts an applied research methodology focused on developing a functional and validated system for candidate evaluation.
          The system combines multiple techniques, including technical problem-solving assessments, behavioral analysis, and psychological profiling.
          Both qualitative and quantitative data are collected to measure system effectiveness. This includes metrics such as communication confidence,
          technical accuracy, code complexity, and professional demeanor. The system is evaluated through simulated interview sessions to ensure it replicates
          real-world hiring conditions.
        </p>
      </div>

      {/* Concise methodology points with a cleaner layout */}
      <div className="grid md:grid-cols-2 gap-8 text-gray-700">
        {[
          {
            icon: <ClipboardCheck className="text-blue-600 w-6 h-6" />,
            title: "Mock Examination & Resume Parsing",
            desc:
              "Candidates submit CVs and answer technical and situational questions. Responses are evaluated for correctness and professionalism, including behavioral traits.",
          },
          {
            icon: <Mic className="text-green-600 w-6 h-6" />,
            title: "Voice-Based Non-Technical Interview",
            desc:
              "Audio analyzed for tone, pitch, and speed. ML models assess confidence in real time using tools like Whisper and BERT.",
          },
          {
            icon: <Gauge className="text-orange-600 w-6 h-6" />,
            title: "Gamified Technical Coding Interview",
            desc:
              "Problem-solving challenges in a gamified setting with stress detection via CNNs. Scores and timers simulate real workplace pressure.",
          },
          {
            icon: <Code className="text-purple-600 w-6 h-6" />,
            title: "Code Complexity Analysis",
            desc:
              "Programming solutions are checked for maintainability with metrics like Cyclomatic Complexity, using AST parsing and tools like Radon and CodeClimate.",
          }
        ].map(({ icon, title, desc }) => (
          <div key={title} className="flex items-start gap-4">
            <div className="mt-1">{icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Methodology;
