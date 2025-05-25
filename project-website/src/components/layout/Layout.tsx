import React from 'react'
import Topbar from './Topbar'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Topbar />
      
      {/* This main flex-grow area will expand to fill space */}
      <main className="flex-grow bg-white dark:bg-gray-900">
        {children}
      </main>
      
      {/* Footer stays at bottom */}
      <Footer />
    </div>
  )
}