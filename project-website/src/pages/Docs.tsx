import { Book } from 'lucide-react'

export default function Docs() {
  const docs = [
    {
      title: 'Getting Started',
      description: 'Learn how to set up and use our system for your hiring needs.',
      link: '#',
    },
    {
      title: 'Video Mockup Best Practices',
      description: 'Best practices for creating realistic video-based interviews.',
      link: '#',
    },
    {
      title: 'AI Evaluation Explained',
      description: 'Understand how our AI evaluates candidate performance.',
      link: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 flex flex-col transition-colors duration-300">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-white mb-4 transition-colors duration-300">
          Documentation
        </h1>
        <p className="text-indigo-700 dark:text-gray-300 text-lg mb-6 transition-colors duration-300">
          Find guides and resources to help you get the most out of our system.
        </p>
      </section>

      {/* Docs List */}
      <section className="max-w-4xl mx-auto px-6 space-y-8 pb-20">
        {docs.map((doc) => (
          <div 
            key={doc.title} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl dark:shadow-gray-700/50 p-6 flex items-center gap-4 transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
          >
            <Book className="w-8 h-8 text-indigo-600 dark:text-blue-400 flex-shrink-0 transition-colors duration-300 group-hover:scale-110" />
            <div>
              <h2 className="text-xl font-bold text-indigo-900 dark:text-white transition-colors duration-300">
                {doc.title}
              </h2>
              <p className="text-indigo-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                {doc.description}
              </p>
              <a 
                href={doc.link} 
                className="text-indigo-600 dark:text-blue-400 hover:text-indigo-800 dark:hover:text-blue-300 hover:underline font-semibold transition-colors duration-300"
              >
                View Guide
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}