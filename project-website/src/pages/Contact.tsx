import React from 'react'
import { Mail, Phone, MessageSquare } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 flex flex-col transition-colors duration-300">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-white mb-4 transition-colors duration-300">
          Contact Us
        </h1>
        <p className="text-indigo-700 dark:text-gray-300 text-lg mb-6 transition-colors duration-300">
          We'd love to hear from you! Reach out via email, phone, or by filling out the form below.
        </p>
      </section>

      {/* Contact Details */}
      <section className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 text-center">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl dark:shadow-gray-700/50 p-6 flex flex-col items-center transition-all duration-300 border border-gray-100 dark:border-gray-700">
          <Mail className="w-10 h-10 text-indigo-600 dark:text-blue-400 mb-3 transition-colors duration-300" />
          <h3 className="text-lg font-semibold text-indigo-900 dark:text-white transition-colors duration-300">Email</h3>
          <p className="text-indigo-700 dark:text-gray-300 transition-colors duration-300">teamresearch@example.com</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl dark:shadow-gray-700/50 p-6 flex flex-col items-center transition-all duration-300 border border-gray-100 dark:border-gray-700">
          <Phone className="w-10 h-10 text-indigo-600 dark:text-blue-400 mb-3 transition-colors duration-300" />
          <h3 className="text-lg font-semibold text-indigo-900 dark:text-white transition-colors duration-300">Phone</h3>
          <p className="text-indigo-700 dark:text-gray-300 transition-colors duration-300">+94 77 123 4567</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl dark:shadow-gray-700/50 p-6 flex flex-col items-center transition-all duration-300 border border-gray-100 dark:border-gray-700">
          <MessageSquare className="w-10 h-10 text-indigo-600 dark:text-blue-400 mb-3 transition-colors duration-300" />
          <h3 className="text-lg font-semibold text-indigo-900 dark:text-white transition-colors duration-300">Chat</h3>
          <p className="text-indigo-700 dark:text-gray-300 transition-colors duration-300">We're online and ready to chat!</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <form className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700/50 p-8 space-y-6 border border-gray-100 dark:border-gray-700 transition-all duration-300">
          <div>
            <label htmlFor="name" className="block text-indigo-900 dark:text-white font-semibold mb-2 transition-colors duration-300">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-indigo-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-indigo-900 dark:text-white font-semibold mb-2 transition-colors duration-300">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-indigo-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-indigo-900 dark:text-white font-semibold mb-2 transition-colors duration-300">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Type your message..."
              rows={4}
              className="w-full p-3 border border-indigo-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact