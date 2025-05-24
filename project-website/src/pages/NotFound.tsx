import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-50 to-indigo-100 px-4 py-12">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
        alt="Page Not Found"
        className="w-48 h-48 mb-8 animate-fadeIn"
      />
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">404</h1>
      <p className="text-xl text-indigo-600 mb-6 text-center max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
        aria-label="Go back to homepage"
      >
        Go Back Home
      </button>
      <p className="mt-8 text-sm text-indigo-500">
        If you think this is a mistake, please contact support.
      </p>
    </div>
  )
}
