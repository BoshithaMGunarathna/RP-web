import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { Car, UserCheck, Video } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-indigo-900 mb-4">
            Automotive Interview System
          </h1>
          <p className="text-indigo-700 text-lg mb-6">
            Streamline your hiring process with AI-powered video interviews and automated candidate evaluation.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition">
            Get Started
          </button>
        </div>
        <div className="w-full max-w-md lg:max-w-lg">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Automotive Interview"
            className="rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 shadow-inner">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center gap-4 px-4">
            <Car className="w-12 h-12 text-indigo-600" />
            <h3 className="text-xl font-semibold text-indigo-900">Industry Focused</h3>
            <p className="text-indigo-700">
              Tailored specifically for the automotive sector to assess technical skills and professionalism.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 px-4">
            <Video className="w-12 h-12 text-indigo-600" />
            <h3 className="text-xl font-semibold text-indigo-900">Video Based Mockups</h3>
            <p className="text-indigo-700">
              Conduct interactive video interviews that simulate real-world scenarios.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 px-4">
            <UserCheck className="w-12 h-12 text-indigo-600" />
            <h3 className="text-xl font-semibold text-indigo-900">Automated Evaluation</h3>
            <p className="text-indigo-700">
              Use AI-driven assessments to automatically evaluate candidate performance and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-indigo-900 mb-10 text-center">
          Why Choose Our System?
        </h2>
        <ul className="max-w-3xl mx-auto space-y-6">
          {[
            'Save time with automated candidate screening',
            'Gain insights with detailed performance analytics',
            'Enhance candidate experience with smooth video interactions',
          ].map((point) => (
            <li key={point} className="flex items-center gap-3 text-indigo-700 text-lg">
              <CheckCircleIcon className="w-6 h-6 text-indigo-500 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
