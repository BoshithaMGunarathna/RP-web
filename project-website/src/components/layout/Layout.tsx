'use client'

import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-col min-h-screen lg:pl-72">
        <Topbar setSidebarOpen={setSidebarOpen} />
        
        {/* This main flex-grow area will expand to fill space */}
        <main className="flex-grow py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
        
        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </>
  )
}
