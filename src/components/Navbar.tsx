"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 mx-auto px-4 py-3 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          Langkah
        </Link>

        {/* Center Menu */}
        <div className="flex items-center gap-8">
          <Link 
            href="#prompt-section" 
            className="text-gray-700 hover:text-gray-900 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('prompt-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Try it out
          </Link>
          <Link href="/docs" className="text-gray-700 hover:text-gray-900 transition-colors">
            Docs
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">
            Blog
          </Link>
        </div>

        {/* Right Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Login
          </Link>
          <Link 
            href="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};