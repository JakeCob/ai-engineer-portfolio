'use client';

import { useState, useEffect } from 'react';
import { useSpeech } from '@/hooks/useSpeech';
import AudioPanel from './voice/AudioPanel';
import ChatTranscript from './voice/ChatTranscript';
import SettingsPanel from './voice/SettingsPanel';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function VoiceAgentV2() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showChat, setShowChat] = useState(true);
  const [showAudio, setShowAudio] = useState(true);
  const [isConnected, setIsConnected] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    isListening,
    isSpeaking,
    transcript,
    availableVoices,
    selectedVoice,
    startListening,
    stopListening,
    speak,
    stopSpeaking,
    setVoice,
    error,
  } = useSpeech({
    continuous: true,
    onTranscript: (text) => {
      // When speech is detected, send it as a message
      handleSpeechInput(text);
    },
  });

  // Don't auto-start listening - let user click "Start Listening" button
  useEffect(() => {
    // Only auto-stop if audio is disabled
    if (!showAudio && isListening) {
      console.log('Stopping listening because audio was disabled...');
      stopListening();
    }
  }, [showAudio, isListening, stopListening]);

  // Log speech recognition status
  useEffect(() => {
    console.log('Speech status:', { isListening, isSpeaking, error });
  }, [isListening, isSpeaking, error]);

  const handleSpeechInput = async (text: string) => {
    if (!text.trim() || isProcessing) return;

    console.log('Processing speech input:', text);

    // Stop listening while processing
    if (isListening) {
      stopListening();
    }
    setIsProcessing(true);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    try {
      // Send to n8n webhook
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          conversationHistory: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          sessionId: `session-${Date.now()}`,
        }),
      });

      const data = await response.json();

      // Add assistant message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response || data.text || 'Sorry, I could not process that.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);

      // Speak the response
      if (showAudio) {
        speak(assistantMessage.content);
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsProcessing(false);

      // Resume listening after a delay to avoid conflicts
      if (showAudio) {
        setTimeout(() => {
          if (!isSpeaking && !isListening) {
            console.log('Restarting listening after speech processing');
            startListening();
          }
        }, 2000); // Increased delay to 2 seconds
      }
    }
  };

  const handleTextInput = async () => {
    if (!inputValue.trim() || isProcessing) return;

    const text = inputValue.trim();
    setInputValue('');
    setIsProcessing(true);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    try {
      // Send to n8n webhook
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          conversationHistory: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          sessionId: `session-${Date.now()}`,
        }),
      });

      const data = await response.json();

      // Add assistant message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response || data.text || 'Sorry, I could not process that.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);

      // Speak the response if audio is enabled
      if (showAudio) {
        speak(assistantMessage.content);
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleToggleChat = () => setShowChat(!showChat);
  const handleToggleAudio = () => {
    setShowAudio(!showAudio);
    if (!showAudio) {
      // Enabling audio
      startListening();
    } else {
      // Disabling audio
      stopListening();
      stopSpeaking();
    }
  };

  return (
    <div className="w-full h-[600px] bg-neutral-950 rounded-lg border border-neutral-800 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
        <h2 className="text-lg font-semibold text-white">AI Portfolio Assistant</h2>
        <SettingsPanel
          showChat={showChat}
          showAudio={showAudio}
          isConnected={isConnected}
          availableVoices={availableVoices}
          selectedVoice={selectedVoice}
          onToggleChat={handleToggleChat}
          onToggleAudio={handleToggleAudio}
          onVoiceChange={setVoice}
        />
      </div>

      {/* Main Content */}
      <div className="h-[calc(100%-73px)] p-4">
        <div className="h-full grid gap-4" style={{
          gridTemplateColumns: showAudio && showChat ? '1fr 1fr' : '1fr'
        }}>
          {/* Audio Panel */}
          {showAudio && (
            <AudioPanel
              isListening={isListening}
              isSpeaking={isSpeaking}
              onTestMicrophone={startListening}
            />
          )}

          {/* Chat Panel */}
          {showChat && (
            <ChatTranscript
              messages={messages}
              isVoiceMode={showAudio}
              inputValue={inputValue}
              onInputChange={setInputValue}
              onSendMessage={handleTextInput}
            />
          )}
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="absolute bottom-4 left-4 right-4 bg-red-900/50 border border-red-700 rounded-lg p-3 text-sm text-red-200">
          {error}
        </div>
      )}
    </div>
  );
}