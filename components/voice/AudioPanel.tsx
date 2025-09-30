'use client';

import AudioVisualizer from './AudioVisualizer';

interface AudioPanelProps {
  isListening: boolean;
  isSpeaking: boolean;
  onStartListening?: () => void;
  onStopListening?: () => void;
}

export default function AudioPanel({ isListening, isSpeaking, onStartListening, onStopListening }: AudioPanelProps) {
  return (
    <div className="h-full bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
        <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
          Audio
        </h3>
      </div>

      {/* Visualizer Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <AudioVisualizer isActive={isListening} isSpeaking={isSpeaking} />
      </div>

      {/* Status Indicator */}
      <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
        <div className="flex items-center justify-center gap-2">
          {isListening && (
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
              <div className="w-2 h-2 bg-cyan-600 dark:bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Listening...</span>
            </div>
          )}
          {isSpeaking && (
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
              <div className="w-2 h-2 bg-cyan-600 dark:bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Speaking...</span>
            </div>
          )}
          {!isListening && !isSpeaking && (
            <span className="text-sm text-neutral-500 dark:text-neutral-500">Ready</span>
          )}
        </div>

        {/* Control Buttons */}
        {!isListening && onStartListening && (
          <button
            onClick={onStartListening}
            className="w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
            Start Listening
          </button>
        )}

        {isListening && onStopListening && (
          <button
            onClick={onStopListening}
            className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
            </svg>
            Stop Listening
          </button>
        )}
      </div>
    </div>
  );
}