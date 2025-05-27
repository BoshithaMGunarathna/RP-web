import React from 'react';

const LiteratureSurvey: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-serif mb-6">Literature Survey</h2>
        <div className="h-1 w-24 bg-blue-600"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8"> {/* Slightly increased space for breathing */}

          {/* Literature Content */}
          <div className="prose prose-gray max-w-none">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-800 leading-relaxed mb-6">
                Recent advancements in AI, NLP, and computer vision have significantly improved automated interview systems. 
                Traditional resume screening techniques have evolved with transformer-based models like BERT, achieving high 
                accuracy in skill extraction but still facing issues like implicit skill gaps and bias{' '}
                <span className="text-blue-600 font-medium">[1]</span>. Professionalism evaluation has moved beyond subjective 
                observation, with computer vision tools analyzing attire and facial expressions, yet most systems treat technical 
                and behavioral assessments separately{' '}
                <span className="text-blue-600 font-medium">[2]</span>.
              </p>

              <p className="text-gray-800 leading-relaxed mb-6">
                Voice-based confidence assessment has advanced from simple acoustic analysis to hybrid models that combine 
                speech features and semantic analysis using deep learning, improving classification accuracy and reducing 
                cultural misinterpretation{' '}
                <span className="text-blue-600 font-medium">[3]</span>. Gamification in interviews has been shown to enhance 
                candidate engagement and reduce anxiety. When combined with real-time stress detection via webcam-based facial 
                analysis, it provides insights into performance under pressure{' '}
                <span className="text-blue-600 font-medium">[4]</span>.
              </p>

              <p className="text-gray-800 leading-relaxed mb-6">
                Automated code assessment tools have historically emphasized correctness over quality. Recent systems now 
                evaluate maintainability using metrics like Cyclomatic Complexity and Cognitive Function Complexity, offering 
                a more complete view of coding proficiency{' '}
                <span className="text-blue-600 font-medium">[5]</span>. Lastly, research highlights the importance of accounting 
                for gender and cultural factors in voice analysis to ensure fair and unbiased evaluation{' '}
                <span className="text-blue-600 font-medium">[6]</span>,{' '}
                <span className="text-blue-600 font-medium">[7]</span>,{' '}
                <span className="text-blue-600 font-medium">[8]</span>.
              </p>

              {/* References */}
              <div className="space-y-2 mt-8 text-xs text-gray-700 leading-snug">
                <div className="flex">
                  <span className="text-blue-600 font-semibold min-w-[2rem]">[1]</span>
                  <span>
                    J. Devlin et al., "BERT: Pre-training of deep bidirectional transformers for language understanding," 
                    <em> Proc. NAACL-HLT</em>, pp. 4171–4186, 2019.
                  </span>
                </div>
                <div className="flex">
                  <span className="text-blue-600 font-semibold min-w-[2rem]">[2]</span>
                  <span>
                    L. Wang, "CNN-based attire classification," <em>IEEE Trans. Affective Comput.</em>, 
                    vol. 12, no. 3, pp. 500–509, 2021.
                  </span>
                </div>
                <div className="flex">
                  <span className="text-blue-600 font-semibold min-w-[2rem]">[3]</span>
                  <span>
                    M. Gupta, "Hybrid voice-NLP models for confidence assessment," <em>IEEE Trans. Human-Mach. Syst.</em>, 
                    vol. 52, no. 1, pp. 123–130, 2022.
                  </span>
                </div>
                <div className="flex">
                  <span className="text-blue-600 font-semibold min-w-[2rem]">[4]</span>
                  <span>
                    K. Kim, "Emotion detection from webcam using CNN," <em>Proc. CVPR Workshops</em>, 
                    pp. 1200–1205, 2021.
                  </span>
                </div>
                <div className="flex">
                  <span className="text-blue-600 font-semibold min-w-[2rem]">[5]</span>
                  <span>
                    N. Kumar, "Multi-metric code evaluation," <em>IEEE Softw.</em>, vol. 39, no. 3, pp. 56–63, 2022.
                  </span>
                </div>
                <div className="flex">
                  <span className="text-blue-600 font-semibold min-w-[2rem]">[6]</span>
                  <span>
                    L. Wu et al., "Gender effects in vocal confidence perception," <em>J. Acoust. Soc. Am.</em>, 
                    vol. 146, no. 5, pp. 3301–3312, 2019.
                  </span>
                </div>
                <div className="flex">
                  <span className="text-blue-600 font-semibold min-w-[2rem]">[7]</span>
                  <span>
                    D. Matsumoto and H. Hwang, "Cultural influences on voice expression," <em>Emotion Rev.</em>, 
                    vol. 8, no. 2, pp. 123–130, 2016.
                  </span>
                </div>
                <div className="flex">
                  <span className="text-blue-600 font-semibold min-w-[2rem]">[8]</span>
                  <span>
                    Internal Validation Report, "Integrated interview system testing results," 2024.
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Sidebar */}
        {/* Sidebar */}
<div className="space-y-6">
  {/* Graph/Chart Section */}
  <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 border-b border-gray-200">
      <h3 className="font-semibold text-gray-900">Research Trends</h3>
    </div>
    <div className="p-4">
      <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
        <div className="text-center">
          <img src="graph.png" alt="Research Trends Graph" className="max-h-full max-w-full" />
        </div>
      </div>
      <p className="text-xs text-gray-600 mt-3 text-center">
        Figure 1: Effectiveness of the automated interview systems
      </p>
    </div>
  </div>

  {/* Research Gap Table */}
  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
    <h3 className="font-semibold text-gray-900 mb-3">Research Gap: Technology Comparison</h3>
    <table className="w-full text-sm text-left text-gray-700">
      <thead className="text-xs text-gray-600 uppercase bg-gray-50">
        <tr>
          <th className="py-2 px-3 border border-gray-200">Function</th>
          <th className="py-2 px-3 border border-gray-200">Research Paper 1</th>
          <th className="py-2 px-3 border border-gray-200">Research Paper 2</th>
          <th className="py-2 px-3 border border-gray-200">Research Paper 3</th>
          <th className="py-2 px-3 border border-gray-200">Proposed</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border border-gray-200">
          <td className="py-2 px-3 border border-gray-200 font-medium">Analysis of Tone</td>
          <td className="py-2 px-3 border border-gray-200 text-center">✓</td>
          <td className="py-2 px-3 border border-gray-200 text-center">X</td>
          <td className="py-2 px-3 border border-gray-200 text-center">✓</td>
          <td className="py-2 px-3 border border-gray-200 text-center">✓</td>
        </tr>
        <tr className="border border-gray-200 bg-gray-50">
          <td className="py-2 px-3 border border-gray-200 font-medium">Analysis of Pitch</td>
          <td className="py-2 px-3 border border-gray-200 text-center">✓</td>
          <td className="py-2 px-3 border border-gray-200 text-center">X</td>
          <td className="py-2 px-3 border border-gray-200 text-center">X</td>
          <td className="py-2 px-3 border border-gray-200 text-center">✓</td>
        </tr>
        <tr className="border border-gray-200">
          <td className="py-2 px-3 border border-gray-200 font-medium">Analysis of Frequency</td>
          <td className="py-2 px-3 border border-gray-200 text-center">X</td>
          <td className="py-2 px-3 border border-gray-200 text-center">✓</td>
          <td className="py-2 px-3 border border-gray-200 text-center">X</td>
          <td className="py-2 px-3 border border-gray-200 text-center">✓</td>
        </tr>
        <tr className="border border-gray-200 bg-gray-50">
          <td className="py-2 px-3 border border-gray-200 font-medium">Correlation with Personality Traits</td>
          <td className="py-2 px-3 border border-gray-200 text-center">X</td>
          <td className="py-2 px-3 border border-gray-200 text-center">X</td>
          <td className="py-2 px-3 border border-gray-200 text-center">✓</td>
          <td className="py-2 px-3 border border-gray-200 text-center">✓</td>
        </tr>
        <tr className="border border-gray-200">
          <td className="py-2 px-3 border border-gray-200 font-medium">Confidence Level Indicators</td>
          <td className="py-2 px-3 border border-gray-200 text-center">X</td>
          <td className="py-2 px-3 border border-gray-200 text-center">X</td>
          <td className="py-2 px-3 border border-gray-200 text-center">X</td>
          <td className="py-2 px-3 border border-gray-200 text-center">✓</td>
        </tr>
      </tbody>
    </table>
    <p className="text-xs text-gray-500 mt-2 italic">Table 2: Research Gap</p>
  </div>
</div>

      </div>
    </div>
  );
};

export default LiteratureSurvey;
