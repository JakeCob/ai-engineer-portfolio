'use client';

import { useState } from 'react';
import Link from 'next/link';

const demos = [
  {
    id: 'text-analysis',
    title: 'Text Sentiment Analysis',
    description: 'Analyze the sentiment of any text using AI',
    category: 'NLP',
    status: 'interactive',
  },
  {
    id: 'code-generation',
    title: 'Code Generation Assistant',
    description: 'Generate code snippets from natural language descriptions',
    category: 'AI Agents',
    status: 'coming-soon',
  },
  {
    id: 'prompt-optimizer',
    title: 'Prompt Optimizer',
    description: 'Optimize your prompts for better AI responses',
    category: 'LLM',
    status: 'coming-soon',
  },
  {
    id: 'rag-demo',
    title: 'RAG System Demo',
    description: 'See how retrieval-augmented generation works',
    category: 'AI Systems',
    status: 'coming-soon',
  },
];

function SentimentAnalysisDemo() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<{
    sentiment: string;
    confidence: number;
    keywords: string[];
  } | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeSentiment = () => {
    setIsAnalyzing(true);

    // Simulate API call
    setTimeout(() => {
      const sentiments = ['positive', 'negative', 'neutral'];
      const randomSentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
      const confidence = Math.random() * 40 + 60; // 60-100

      // Extract simple keywords (this would be done by AI in real implementation)
      const words = text.toLowerCase().split(/\s+/);
      const keywords = words
        .filter(word => word.length > 4)
        .slice(0, 3);

      setResult({
        sentiment: randomSentiment,
        confidence: Math.round(confidence),
        keywords: keywords.length > 0 ? keywords : ['no', 'keywords', 'found'],
      });
      setIsAnalyzing(false);
    }, 1000);
  };

  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Text Sentiment Analysis</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
        Enter some text below to analyze its sentiment using AI.
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        className="w-full h-32 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={analyzeSentiment}
        disabled={!text || isAnalyzing}
        className="mt-4 px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
      >
        {isAnalyzing ? 'Analyzing...' : 'Analyze Sentiment'}
      </button>

      {result && (
        <div className="mt-6 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
          <div className="grid gap-3">
            <div>
              <span className="text-sm font-medium">Sentiment: </span>
              <span className={`inline-block px-2 py-1 rounded text-sm font-medium ${
                result.sentiment === 'positive'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : result.sentiment === 'negative'
                  ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              }`}>
                {result.sentiment}
              </span>
            </div>

            <div>
              <span className="text-sm font-medium">Confidence: </span>
              <span className="text-sm">{result.confidence}%</span>
              <div className="mt-1 w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                <div
                  className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all"
                  style={{ width: `${result.confidence}%` }}
                />
              </div>
            </div>

            <div>
              <span className="text-sm font-medium">Keywords: </span>
              <div className="mt-1 flex gap-2 flex-wrap">
                {result.keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DemosPage() {
  const [selectedDemo, setSelectedDemo] = useState('text-analysis');

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold">Interactive Demos</h1>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          Explore live demonstrations of AI-powered tools and capabilities.
        </p>

        {/* Demo Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => demo.status === 'interactive' && setSelectedDemo(demo.id)}
              disabled={demo.status === 'coming-soon'}
              className={`p-6 rounded-lg border text-left transition-all ${
                selectedDemo === demo.id
                  ? 'border-blue-600 bg-blue-50 dark:border-blue-400 dark:bg-blue-950'
                  : demo.status === 'coming-soon'
                  ? 'border-neutral-200 dark:border-neutral-800 opacity-60 cursor-not-allowed'
                  : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold">{demo.title}</h3>
                {demo.status === 'coming-soon' && (
                  <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                {demo.description}
              </p>
              <span className="text-xs text-blue-600 dark:text-blue-400">
                {demo.category}
              </span>
            </button>
          ))}
        </div>

        {/* Active Demo */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Live Demo</h2>
          {selectedDemo === 'text-analysis' && <SentimentAnalysisDemo />}
        </div>

        {/* Info Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Want to see these in production?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            These demos showcase just a fraction of what&apos;s possible with modern AI integration.
            Let&apos;s discuss how we can implement similar solutions for your specific use case.
          </p>
          <div className="flex gap-4">
            <Link
              href="/work"
              className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 hover:opacity-90 transition-opacity"
            >
              View Full Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 hover:bg-white dark:hover:bg-black transition-colors"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>

        {/* Technical Note */}
        <div className="mt-12 p-6 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            <strong>Note:</strong> These demos are simplified versions running client-side.
            Production implementations would include proper API integration, error handling,
            authentication, and scalable infrastructure.
          </p>
        </div>
      </div>
    </main>
  );
}