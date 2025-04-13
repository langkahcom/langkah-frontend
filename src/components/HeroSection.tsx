"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export const HeroSection = () => {
  const scrollToPrompt = () => {
    document.getElementById('prompt-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10" />
      <video 
        className="absolute inset-0 w-full h-full object-cover scale-105"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/videos/sample.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
            Journey With Confidence
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Your AI-powered travel companion
          </p>
        </motion.div>

        <motion.button 
          className="bg-white text-black hover:bg-white/90 font-bold py-3 px-8 rounded-full text-lg transition-colors flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={scrollToPrompt}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try It Yourself
          <ChevronDownIcon className="w-5 h-5" />
        </motion.button>

        <motion.button 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5,
          }}
          onClick={scrollToPrompt}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDownIcon className="w-8 h-8 text-white/70 hover:text-white" />
        </motion.button>
      </div>
    </div>
  );
}