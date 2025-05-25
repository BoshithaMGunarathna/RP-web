import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 px-4 py-12 transition-colors duration-300">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
        alt="Page Not Found"
        className="w-48 h-48 mb-8 animate-pulse opacity-80 dark:opacity-60 transition-opacity duration-300"
      />
      <h1 className="text-5xl font-extrabold text-indigo-700 dark:text-blue-400 mb-4 transition-colors duration-300">
        404
      </h1>
      <p className="text-xl text-indigo-600 dark:text-gray-300 mb-6 text-center max-w-md transition-colors duration-300">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="rounded-md bg-indigo-600 hover:bg-indigo-700 dark:bg-blue-600 dark:hover:bg-blue-700 px-6 py-3 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        aria-label="Go back to homepage"
      >
        Go Back Home
      </button>
      <p className="mt-8 text-sm text-indigo-500 dark:text-gray-400 transition-colors duration-300">
        If you think this is a mistake, please contact support.
      </p>
    </div>
  )
}