'use client';

import { useState } from 'react';

interface SettingsPanelProps {
  showChat: boolean;
  showAudio: boolean;
  isConnected: boolean;
  availableVoices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice | null;
  onToggleChat: () => void;
  onToggleAudio: () => void;
  onVoiceChange: (voice: SpeechSynthesisVoice) => void;
}

export default function SettingsPanel({
  showChat,
  showAudio,
  isConnected,
  availableVoices,
  selectedVoice,
  onToggleChat,
  onToggleAudio,
  onVoiceChange,
}: SettingsPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Settings Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg text-sm text-neutral-900 dark:text-white transition-colors flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Settings
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-xl z-50 overflow-hidden">
          {/* Toggles Section */}
          <div className="p-4 space-y-3 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-700 dark:text-neutral-300">Show chat</span>
              <button
                onClick={onToggleChat}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  showChat ? 'bg-cyan-500' : 'bg-neutral-300 dark:bg-neutral-700'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    showChat ? 'translate-x-5' : ''
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-700 dark:text-neutral-300">Show audio</span>
              <button
                onClick={onToggleAudio}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  showAudio ? 'bg-cyan-500' : 'bg-neutral-300 dark:bg-neutral-700'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    showAudio ? 'translate-x-5' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Voice Selection */}
          <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
            <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">Voice</label>
            <select
              value={selectedVoice?.name || ''}
              onChange={(e) => {
                const voice = availableVoices.find((v) => v.name === e.target.value);
                if (voice) onVoiceChange(voice);
              }}
              className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg px-3 py-2 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400"
            >
              {availableVoices.map((voice) => (
                <option key={voice.name} value={voice.name}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </select>
          </div>

          {/* Status Section */}
          <div className="p-4">
            <div className="text-xs text-neutral-500 dark:text-neutral-500 uppercase mb-2">Status</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-700 dark:text-neutral-300">Agent connected</span>
                <span className={`text-sm font-medium ${isConnected ? 'text-cyan-600 dark:text-cyan-400' : 'text-neutral-500 dark:text-neutral-500'}`}>
                  {isConnected ? 'TRUE' : 'FALSE'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}