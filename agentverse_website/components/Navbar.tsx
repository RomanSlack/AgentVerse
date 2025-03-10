'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-stone-50/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-gradient">AgentVerse</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#features" className="text-stone-700 hover:text-stone-900 transition-colors">
                Features
              </Link>
              <Link href="#technology" className="text-stone-700 hover:text-stone-900 transition-colors">
                Technology
              </Link>
              <Link href="#community" className="text-stone-700 hover:text-stone-900 transition-colors">
                Community
              </Link>
              <Link href="https://github.com/yourorg/agentverse" target="_blank" 
                className="text-stone-700 hover:text-stone-900 transition-colors">
                GitHub
              </Link>
              <Link href="#join" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
                text-white bg-stone-700 hover:bg-stone-800 transition-colors">
                Join Waitlist
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-700 hover:text-stone-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-stone-50 shadow-lg">
          <Link href="#features" 
            className="block px-3 py-2 rounded-md text-stone-700 hover:bg-stone-200 transition-colors"
            onClick={() => setMobileMenuOpen(false)}>
            Features
          </Link>
          <Link href="#technology" 
            className="block px-3 py-2 rounded-md text-stone-700 hover:bg-stone-200 transition-colors"
            onClick={() => setMobileMenuOpen(false)}>
            Technology
          </Link>
          <Link href="#community" 
            className="block px-3 py-2 rounded-md text-stone-700 hover:bg-stone-200 transition-colors"
            onClick={() => setMobileMenuOpen(false)}>
            Community
          </Link>
          <Link href="https://github.com/yourorg/agentverse" target="_blank"
            className="block px-3 py-2 rounded-md text-stone-700 hover:bg-stone-200 transition-colors"
            onClick={() => setMobileMenuOpen(false)}>
            GitHub
          </Link>
          <Link href="#join"
            className="block px-3 py-2 rounded-md text-white bg-stone-700 hover:bg-stone-800 transition-colors"
            onClick={() => setMobileMenuOpen(false)}>
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
}