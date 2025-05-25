import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react'
import {
  XMarkIcon,
  HomeIcon,
  UsersIcon,
  EnvelopeIcon,
  NewspaperIcon,
  DocumentIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline'
import logo from '../../assets/images/logo.png'
import { useTheme } from '../../../ThemeContext'

interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'About Us', href: '/about', icon: UsersIcon },
  { name: 'Blogs', href: '/blogs', icon: NewspaperIcon },
  { name: 'Docs', href: '/docs', icon: DocumentIcon },
  { name: 'Contact Us', href: '/contact', icon: EnvelopeIcon },
]

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Topbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm fixed w-full z-50 transition-colors duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            aria-label="Go to Home"
            className="flex items-center"
          >
            <img
              alt="Silicon Nerds"
              src={logo}
              className="h-12 w-auto max-w-auto object-contain cursor-pointer"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navigation.map((item) => {
              const isCurrent = location.pathname === item.href
              return (
                <button
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className={classNames(
                    isCurrent
                      ? 'text-indigo-600 border-b-2 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400',
                    'flex items-center gap-2 text-sm font-semibold px-2 pb-1 transition-colors duration-200'
                  )}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </button>
              )
            })}
          </nav>

          {/* Right Side: Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="relative z-50 md:hidden">
        <DialogBackdrop className="fixed inset-0 bg-gray-900/80 dark:bg-black/80" />
        <div className="fixed inset-0 flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
          <DialogPanel className="flex-1 p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => navigate('/')}
                aria-label="Go to Home"
                className="flex items-center"
              >
                <img
                  alt="Silicon Nerds"
                  src={logo}
                  className="h-10 w-auto max-w-[160px] object-contain cursor-pointer"
                />
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav className="space-y-2">
              {navigation.map((item) => {
                const isCurrent = location.pathname === item.href
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      navigate(item.href)
                      setMobileMenuOpen(false)
                    }}
                    className={classNames(
                      isCurrent
                        ? 'text-indigo-600 dark:text-indigo-400 bg-gray-50 dark:bg-gray-800'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400',
                      'flex items-center gap-2 w-full text-left rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-200'
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </button>
                )
              })}

              {/* Theme Toggle in Mobile */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 w-full text-left px-3 py-2 text-sm font-semibold rounded-md transition-colors duration-200"
                >
                  {theme === 'dark' ? (
                    <>
                      <SunIcon className="h-5 w-5" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <MoonIcon className="h-5 w-5" />
                      Dark Mode
                    </>
                  )}
                </button>
              </div>
            </nav>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}