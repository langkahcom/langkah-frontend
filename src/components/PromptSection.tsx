"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { baliDestinations } from '@/constants/baliDestinations';
import { Chat } from './Chat';
import { ChatMessage } from '@/constants/types';

const MapWithNoSSR = dynamic(() => import('./ClientMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[600px] bg-gray-100 flex items-center justify-center">
      <p>Loading map...</p>
    </div>
  ),
});

export const PromptSection = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response (replace with actual API call later)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Add assistant message
    const assistantMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      content: `I'll help you plan your trip to Bali! Here are some recommended destinations based on your preferences...`,
      role: 'assistant',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, assistantMessage]);
    setShowMap(true);
    setIsLoading(false);
  };

  return (
    <div id="prompt-section" className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left side - Chat interface */}
      <motion.div 
        className="flex flex-col h-screen sticky top-0 bg-white"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Plan Your Journey</h2>
          <p className="text-gray-600 mt-2">Chat with AI to plan your perfect Bali trip</p>
        </div>

        <div className="flex-1 overflow-hidden">
          <Chat
            messages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
          />
        </div>
      </motion.div>

      {/* Right side - Map visualization */}
      <motion.div 
        className="bg-gray-100 relative min-h-screen"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {!showMap ? (
          <div className="flex items-center justify-center p-8 h-full">
            <p className="text-gray-500 text-center">
              Start a conversation to see destinations on the map
            </p>
          </div>
        ) : (
          <MapWithNoSSR destinations={baliDestinations} />
        )}
      </motion.div>
    </div>
  );
}