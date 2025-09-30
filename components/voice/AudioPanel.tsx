'use client';

import AudioVisualizer from './AudioVisualizer';

interface AudioPanelProps {
  isListening: boolean;
  isSpeaking: boolean;
  onTestMicrophone?: () => void;
}

export default function AudioPanel({ isListening, isSpeaking, onTestMicrophone }: AudioPanelProps) {
  return (
    <div className="h-full bg-black rounded-lg border border-neutral-800 flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-neutral-800">
        <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
          Audio
        </h3>
      </div>

      {/* Visualizer Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <AudioVisualizer isActive={isListening} isSpeaking={isSpeaking} />
      </div>

      {/* Status Indicator */}
      <div className="px-6 py-4 border-t border-neutral-800 space-y-3">
        <div className="flex items-center justify-center gap-2">
          {isListening && (
            <div className="flex items-center gap-2 text-cyan-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Listening...</span>
            </div>
          )}
          {isSpeaking && (
            <div className="flex items-center gap-2 text-cyan-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Speaking...</span>
            </div>
          )}
          {!isListening && !isSpeaking && (
            <span className="text-sm text-neutral-500">Ready</span>
          )}
        </div>

        {/* Test Microphone Button */}
        {onTestMicrophone && !isListening && (
          <button
            onClick={onTestMicrophone}
            className="w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded-lg transition-colors"
          >
            Start Listening
          </button>
        )}
      </div>
    </div>
  );
}