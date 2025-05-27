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
        <div className="lg:col-span-2 space-y-6">

          {/* Literature Content */}
          <div className="prose prose-gray max-w-none">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-800 leading-relaxed mb-4">
                Recent advancements in AI, NLP, and computer vision have significantly improved automated interview systems. 
                Traditional resume screening techniques have evolved with transformer-based models like BERT, achieving high 
                accuracy in skill extraction but still facing issues like implicit skill gaps and bias{' '}
                <span className="text-blue-600 font-medium">[1]</span>. Professionalism evaluation has moved beyond subjective 
                observation, with computer vision tools analyzing attire and facial expressions, yet most systems treat technical 
                and behavioral assessments separately{' '}
                <span className="text-blue-600 font-medium">[2]</span>.
              </p>

              <p className="text-gray-800 leading-relaxed mb-4">
                Voice-based confidence assessment has advanced from simple acoustic analysis to hybrid models that combine 
                speech features and semantic analysis using deep learning, improving classification accuracy and reducing 
                cultural misinterpretation{' '}
                <span className="text-blue-600 font-medium">[3]</span>. Gamification in interviews has been shown to enhance 
                candidate engagement and reduce anxiety. When combined with real-time stress detection via webcam-based facial 
                analysis, it provides insights into performance under pressure{' '}
                <span className="text-blue-600 font-medium">[4]</span>.
              </p>

              <p className="text-gray-800 leading-relaxed mb-4">
                Automated code assessment tools have historically emphasized correctness over quality. Recent systems now 
                evaluate maintainability using metrics like Cyclomatic Complexity and Cognitive Function Complexity, offering 
                a more complete view of coding proficiency{' '}
                <span className="text-blue-600 font-medium">[5]</span>. Lastly, research highlights the importance of accounting 
                for gender and cultural factors in voice analysis to ensure fair and unbiased evaluation{' '}
                <span className="text-blue-600 font-medium">[6]</span>,{' '}
                <span className="text-blue-600 font-medium">[7]</span>,{' '}
                <span className="text-blue-600 font-medium">[8]</span>.
              </p>
              <div className="space-y-3 text-sm">
              <div className="flex">
                <span className="text-blue-600 font-medium min-w-[2rem]">[1]</span>
                <span className="text-gray-700">
                  J. Devlin et al., "BERT: Pre-training of deep bidirectional transformers for language understanding," 
                  <em>Proc. NAACL-HLT</em>, pp. 4171–4186, 2019.
                </span>
              </div>
              <div className="flex">
                <span className="text-blue-600 font-medium min-w-[2rem]">[2]</span>
                <span className="text-gray-700">
                  L. Wang, "CNN-based attire classification," <em>IEEE Trans. Affective Comput.</em>, 
                  vol. 12, no. 3, pp. 500–509, 2021.
                </span>
              </div>
              <div className="flex">
                <span className="text-blue-600 font-medium min-w-[2rem]">[3]</span>
                <span className="text-gray-700">
                  M. Gupta, "Hybrid voice-NLP models for confidence assessment," <em>IEEE Trans. Human-Mach. Syst.</em>, 
                  vol. 52, no. 1, pp. 123–130, 2022.
                </span>
              </div>
              <div className="flex">
                <span className="text-blue-600 font-medium min-w-[2rem]">[4]</span>
                <span className="text-gray-700">
                  K. Kim, "Emotion detection from webcam using CNN," <em>Proc. CVPR Workshops</em>, 
                  pp. 1200–1205, 2021.
                </span>
              </div>
              <div className="flex">
                <span className="text-blue-600 font-medium min-w-[2rem]">[5]</span>
                <span className="text-gray-700">
                  N. Kumar, "Multi-metric code evaluation," <em>IEEE Softw.</em>, vol. 39, no. 3, pp. 56–63, 2022.
                </span>
              </div>
              <div className="flex">
                <span className="text-blue-600 font-medium min-w-[2rem]">[6]</span>
                <span className="text-gray-700">
                  L. Wu et al., "Gender effects in vocal confidence perception," <em>J. Acoust. Soc. Am.</em>, 
                  vol. 146, no. 5, pp. 3301–3312, 2019.
                </span>
              </div>
              <div className="flex">
                <span className="text-blue-600 font-medium min-w-[2rem]">[7]</span>
                <span className="text-gray-700">
                  D. Matsumoto and H. Hwang, "Cultural influences on voice expression," <em>Emotion Rev.</em>, 
                  vol. 8, no. 2, pp. 123–130, 2016.
                </span>
              </div>
              <div className="flex">
                <span className="text-blue-600 font-medium min-w-[2rem]">[8]</span>
                <span className="text-gray-700">
                  Internal Validation Report, "Integrated interview system testing results," 2024.
                </span>
              </div>
            </div>
            </div>
            
          </div>

          
          
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Graph/Chart Section */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Research Trends</h3>
            </div>
            <div className="p-4">
              {/* Placeholder for your graph image */}
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <div className="text-gray-400 mb-2">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3 text-center">
                Figure 1: Research publication trends in automated interview systems (2019-2024)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiteratureSurvey;