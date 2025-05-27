import React from 'react';
import { ClipboardCheck, Mic, Gauge, Code, Brain } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-white">
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-serif mb-6">Methodology</h2>
        <div className="h-1 w-24 bg-blue-600"></div>
      </div>

      <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
          This research presents the design and implementation of an automated interview system aimed at conducting holistic candidate assessments.
          The system integrates mock examinations, voice-based non-technical interviews, and technical coding evaluations, each enhanced by AI-driven
          analytics and behavior tracking. The primary goal is to evaluate not only technical skills but also psychological resilience and professional behavior.
          The study adopts an applied research methodology focused on developing a functional and validated system for candidate evaluation.
          The system combines multiple techniques, including technical problem-solving assessments, behavioral analysis, and psychological profiling.
          Both qualitative and quantitative data are collected to measure system effectiveness. This includes metrics such as communication confidence,
          technical accuracy, code complexity, and professional demeanor. The system is evaluated through simulated interview sessions to ensure it replicates
          real-world hiring conditions.
        </p>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <img
            src="Methodology.png"
            alt="Methodology Visual"
            className="w-full object-contain"
          />
        </div>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <ClipboardCheck className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Mock Examination & Resume Parsing</h3>
              <p className="text-gray-700">
                The system begins with the mock exam, where candidates submit their CVs. The system extracts relevant data and presents a set of technical and situational questions.
                Responses are recorded and evaluated for both correctness and professionalism, including behavioral traits like reasoning and clarity.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mic className="text-green-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Voice-Based Non-Technical Interview</h3>
              <p className="text-gray-700">
                Audio responses are analyzed using speech features such as tone, pitch, and speed. Machine learning models assess the candidate’s confidence
                in real time, providing a composite score based on verbal delivery and natural language content. Tools like Whisper and BERT extract meaningful insights.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Gauge className="text-orange-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Gamified Technical Coding Interview</h3>
              <p className="text-gray-700">
                Candidates face problem-solving challenges within a gamified environment designed to simulate workplace pressure. The system tracks facial expressions using CNNs
                to detect stress and emotional cues. Game mechanics such as scores and timers create a high-pressure scenario that reflects real-world technical roles.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Code className="text-purple-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Code Complexity Analysis</h3>
              <p className="text-gray-700">
                Candidates’ programming solutions are evaluated for structural soundness and maintainability. Metrics such as Cyclomatic Complexity (CC),
                Class Function Complexity (CFC), and Weighted Code Complexity (WCC) are computed using AST parsing and validated using tools like Radon and CodeClimate.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Brain className="text-pink-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Behavioral & Psychological Profiling</h3>
              <p className="text-gray-700">
                Behavioral traits during mock exams are assessed using semantic reasoning and time-based response analysis. Performance metrics like task completion
                and response time are analyzed using custom tools to evaluate stress resilience and reasoning quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
