'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseSpeechOptions {
  onTranscript?: (text: string) => void;
  onSpeechEnd?: () => void;
  continuous?: boolean;
}

interface UseSpeechReturn {
  isListening: boolean;
  isSpeaking: boolean;
  transcript: string;
  availableVoices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice | null;
  startListening: () => void;
  stopListening: () => void;
  speak: (text: string) => void;
  stopSpeaking: () => void;
  setVoice: (voice: SpeechSynthesisVoice) => void;
  error: string | null;
}

export function useSpeech(options: UseSpeechOptions = {}): UseSpeechReturn {
  const { onTranscript, onSpeechEnd, continuous = true } = options;

  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [error, setError] = useState<string | null>(null);

  const recognitionRef = useRef<any>(null);
  const synthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Initialize voices
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        setAvailableVoices(voices);

        // Set default voice (prefer English)
        const defaultVoice = voices.find(v => v.lang.startsWith('en-')) || voices[0];
        if (defaultVoice) {
          setSelectedVoice(defaultVoice);
        }
      };

      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError('Speech recognition not supported in this browser');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = continuous;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setError(null);
    };

    recognition.onresult = (event: any) => {
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        }
      }

      if (finalTranscript) {
        setTranscript(finalTranscript);
        if (onTranscript) {
          onTranscript(finalTranscript);
        }
      }
    };

    recognition.onerror = (event: any) => {
      // Ignore "aborted" errors as they're usually from stopping/restarting
      if (event.error === 'aborted' || event.error === 'no-speech') {
        console.log('Speech recognition info:', event.error);
        setIsListening(false);
        return;
      }

      console.error('Speech recognition error:', event.error);
      setError(`Speech recognition error: ${event.error}`);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
      if (onSpeechEnd) {
        onSpeechEnd();
      }
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [continuous, onTranscript, onSpeechEnd]);

  const startListening = useCallback(() => {
    if (recognitionRef.current && !isListening) {
      try {
        setTranscript('');
        recognitionRef.current.start();
      } catch (error) {
        console.error('Error starting recognition:', error);
        setError('Failed to start listening');
      }
    }
  }, [isListening]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
        setIsListening(false);
      } catch (error) {
        console.log('Error stopping recognition:', error);
        setIsListening(false);
      }
    }
  }, []);

  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.log('Speech synthesis not supported');
      return;
    }

    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = (event) => {
      // Only log significant errors, ignore cancelled/interrupted
      if (event.error !== 'canceled' && event.error !== 'interrupted') {
        console.error('Speech synthesis error:', event.error);
      }
      setIsSpeaking(false);
    };

    synthesisRef.current = utterance;

    // Small delay to ensure previous utterance is cancelled
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 100);
  }, [selectedVoice]);

  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  const setVoice = useCallback((voice: SpeechSynthesisVoice) => {
    setSelectedVoice(voice);
  }, []);

  return {
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
  };
}