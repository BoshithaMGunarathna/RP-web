export default function Blogs() {
  const blogPosts = [
    {
      title: 'The Future of Automotive Hiring',
      excerpt: 'Discover how AI is transforming recruitment in the automotive sector...',
      image: 'https://images.unsplash.com/photo-1600378890602-3a882f3c79b2?auto=format&fit=crop&w=800&q=80',
      link: '#',
    },
    {
      title: 'Video Mock Interviews: Best Practices',
      excerpt: 'Learn how to conduct effective mock interviews with video-based systems...',
      image: 'https://images.unsplash.com/photo-1618477388959-3fbc7f6466e4?auto=format&fit=crop&w=800&q=80',
      link: '#',
    },
    {
      title: 'Enhancing Candidate Experience with AI',
      excerpt: 'Tips to improve the candidate experience while using AI-powered evaluation tools...',
      image: 'https://images.unsplash.com/photo-1618375718254-5d92e44b9aaf?auto=format&fit=crop&w=800&q=80',
      link: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 flex flex-col transition-colors duration-300">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-white mb-4 transition-colors duration-300">
          Our Latest Blogs
        </h1>
        <p className="text-indigo-700 dark:text-gray-300 text-lg mb-6 transition-colors duration-300">
          Stay updated with the latest trends, insights, and best practices in automotive hiring.
        </p>
      </section>

      {/* Blog Posts */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        {blogPosts.map((post) => (
          <div 
            key={post.title} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl dark:shadow-gray-700/50 overflow-hidden flex flex-col transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
          >
            <div className="overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                loading="lazy" 
              />
            </div>
            <div className="p-4 flex flex-col gap-3 flex-grow">
              <h2 className="text-xl font-bold text-indigo-900 dark:text-white transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-indigo-700 dark:text-gray-300 flex-grow transition-colors duration-300">
                {post.excerpt}
              </p>
              <a 
                href={post.link} 
                className="text-indigo-600 dark:text-blue-400 hover:text-indigo-800 dark:hover:text-blue-300 hover:underline font-semibold mt-auto transition-colors duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}