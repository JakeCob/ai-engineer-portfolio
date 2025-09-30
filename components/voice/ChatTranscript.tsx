'use client';

import { useEffect, useRef } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatTranscriptProps {
  messages: Message[];
  isVoiceMode: boolean;
  inputValue: string;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
}

export default function ChatTranscript({
  messages,
  isVoiceMode,
  inputValue,
  onInputChange,
  onSendMessage,
}: ChatTranscriptProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className="h-full bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
        <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
          Chat
        </h3>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <p className="text-cyan-600 dark:text-cyan-400 text-center">
              {isVoiceMode
                ? 'Start speaking or type a message below...'
                : 'Type a message to start chatting...'}
            </p>
          </div>
        )}

        {messages.map((message) => (
          <div key={message.id} className="space-y-1">
            <div className="text-xs font-medium text-neutral-500 dark:text-neutral-500 uppercase">
              {message.role === 'user' ? 'You' : 'Agent'}
            </div>
            <div
              className={`text-sm ${
                message.role === 'user'
                  ? 'text-neutral-900 dark:text-white'
                  : 'text-cyan-600 dark:text-cyan-400'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area (always show) */}
      <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors"
          />
          <button
            onClick={onSendMessage}
            disabled={!inputValue.trim()}
            className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-neutral-300 dark:disabled:bg-neutral-700 disabled:cursor-not-allowed text-white rounded-lg text-sm font-medium transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}