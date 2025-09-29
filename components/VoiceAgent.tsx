'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const voiceOptions = [
  { id: 'jenny', name: 'Jenny (Female)', gender: 'female', accent: 'American' },
  { id: 'ryan', name: 'Ryan (Male)', gender: 'male', accent: 'American' },
  { id: 'amy', name: 'Amy (Female)', gender: 'female', accent: 'British' },
  { id: 'brian', name: 'Brian (Male)', gender: 'male', accent: 'British' },
];

export default function VoiceAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Jacob's AI assistant. Ask me anything about his experience, skills, or projects. You can type or use voice!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('jenny');
  const [isRecording, setIsRecording] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const micStreamRef = useRef<MediaStream | null>(null);
  const recognitionRef = useRef<any>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join('');

        if (event.results[0].isFinal) {
          setInput(transcript);
          setIsListening(false);
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        setIsRecording(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        setIsRecording(false);
      };
    }
  }, []);

  // Simulate audio level visualization
  useEffect(() => {
    if (isRecording) {
      const interval = setInterval(() => {
        setAudioLevel(Math.random() * 100);
      }, 100);
      return () => clearInterval(interval);
    } else {
      setAudioLevel(0);
    }
  }, [isRecording]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateResponse(userMessage.content),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsProcessing(false);

      // Text-to-speech for the response
      if ('speechSynthesis' in window && selectedVoice) {
        const utterance = new SpeechSynthesisUtterance(assistantMessage.content);
        const voice = speechSynthesis.getVoices().find(v =>
          v.name.toLowerCase().includes(selectedVoice.toLowerCase())
        );
        if (voice) utterance.voice = voice;
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        speechSynthesis.speak(utterance);
      }
    }, 1000);
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      setIsRecording(false);
    } else {
      recognitionRef.current?.start();
      setIsListening(true);
      setIsRecording(true);
    }
  };

  const generateResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    // Simple rule-based responses (replace with LLM API)
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('work')) {
      return "Jacob is an AI Engineer specializing in NLP, MLOps, and agent development. He has deployed 15+ ML models to production and processed over 10 million data points. His work focuses on building intelligent systems that augment human productivity.";
    } else if (lowerQuestion.includes('skills')) {
      return "Jacob's core skills include PyTorch, TensorFlow, Transformers/NLP, LangChain, and MLOps. He's also proficient in full-stack development with React/Next.js, FastAPI, and cloud platforms like AWS and GCP.";
    } else if (lowerQuestion.includes('project')) {
      return "One of Jacob's notable projects is the Customer Support AI Classifier, achieving 87% accuracy on 3M+ tweets. He's also built AI agents for DevTools that improved developer productivity by 40%. Check out the Projects section for more details!";
    } else if (lowerQuestion.includes('contact') || lowerQuestion.includes('hire')) {
      return "You can contact Jacob through the Contact page on this portfolio, or schedule a meeting via his Calendly link. He's currently available for AI engineering opportunities and consulting projects.";
    } else if (lowerQuestion.includes('education')) {
      return "Jacob has a strong foundation in computer science and machine learning, with continuous learning through practical projects and staying updated with the latest AI research and technologies.";
    } else {
      return "That's an interesting question! Jacob has extensive experience in AI/ML engineering, particularly in NLP and agent development. Feel free to ask about his specific projects, technical skills, or professional experience.";
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-800">
        {/* Header */}
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🤖</span>
                </div>
                {isProcessing && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                )}
              </div>
              <div>
                <h3 className="font-semibold">Jacob's AI Assistant</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'Ready to chat'}
                </p>
              </div>
            </div>

            {/* Voice Selection */}
            <select
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
              className="text-sm px-2 py-1 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
            >
              {voiceOptions.map((voice) => (
                <option key={voice.id} value={voice.id}>
                  {voice.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isProcessing && (
            <div className="flex justify-start">
              <div className="bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-lg">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                  <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Audio Visualizer */}
        {isRecording && (
          <div className="px-4 pb-2">
            <div className="flex items-center justify-center gap-1 h-12">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-blue-500 rounded-full transition-all duration-100"
                  style={{
                    height: `${Math.max(4, (Math.sin((audioLevel + i * 10) * Math.PI / 180) + 1) * 20)}px`
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex gap-2">
            <button
              onClick={toggleListening}
              className={`p-3 rounded-lg transition-colors ${
                isListening
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
              aria-label={isListening ? 'Stop recording' : 'Start recording'}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message or use voice..."
              className="flex-1 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleSendMessage}
              disabled={!input.trim() || isProcessing}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Send
            </button>
          </div>

          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 text-center">
            Powered by open-source AI • Ask about skills, projects, or experience
          </p>
        </div>
      </div>
    </div>
  );
}