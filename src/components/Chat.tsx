"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { ChatMessage as ChatMessageType } from '@/constants/types';
import { ChatMessage } from './ChatMessage';

interface ChatProps {
  onSendMessage: (message: string) => void;
  messages: ChatMessageType[];
  isLoading?: boolean;
}

export const Chat = ({ onSendMessage, messages, isLoading }: ChatProps) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    onSendMessage(input.trim());
    setInput('');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages area with fixed height and scrolling */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
              <p>Start planning your Bali adventure!</p>
              <p className="text-sm mt-2">Example: "I want to plan a 3-day trip focusing on temples and beaches."</p>
            </div>
          ) : (
            messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area - fixed at bottom */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
          />
          <motion.button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-lg disabled:opacity-50"
            disabled={!input.trim() || isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </motion.button>
        </form>
      </div>
    </div>
  );
};