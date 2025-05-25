import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { Car, UserCheck, Video } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-white mb-4 transition-colors duration-300">
            Automotive Interview System
          </h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Streamline your hiring process with AI-powered video interviews and automated candidate evaluation.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex justify-center mb-4">
                <Car className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Industry Focused
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tailored specifically for the automotive sector to assess technical skills and professionalism.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex justify-center mb-4">
                <Video className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Video Based Mockups
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Conduct interactive video interviews that simulate real-world scenarios.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex justify-center mb-4">
                <UserCheck className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Automated Evaluation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Use AI-driven assessments to automatically evaluate candidate performance and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose Our System?
          </h2>
          <div className="space-y-4">
            {[
              'Save time with automated candidate screening',
              'Gain insights with detailed performance analytics',
              'Enhance candidate experience with smooth video interactions',
            ].map((point, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
                <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-200 text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}