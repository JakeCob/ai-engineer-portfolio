'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TapatProject() {
  // Extract the file ID from the Google Drive URL
  const videoId = '1FhJhVhyqDV_M_ZHSXgQLe_PU00fGRZT4';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tapat - AI Audio Agent for Philippine Elections
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
            An AI-powered audio conversational agent providing real-time information and fact-checking for the 2024 Philippine elections
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['Whisper', 'GPT-4', 'FastAPI', 'LangChain', 'React', 'Python', 'Speech Recognition'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Embedded Video */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Demo Video</h2>
          <div className="relative w-full rounded-xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={`https://drive.google.com/file/d/${videoId}/preview`}
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay"
              allowFullScreen
              title="Tapat Demo Video"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Tapat is an innovative AI audio agent designed to democratize access to election information
              in the Philippines. Built during the 2024 election season, it provides voters with instant,
              accurate information about candidates, platforms, and electoral processes through natural
              voice conversations.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              The system leverages state-of-the-art speech recognition and large language models to understand
              queries in both Filipino and English, making civic information accessible to all voters regardless
              of their technical literacy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Real-time audio conversation with sub-2 second response time</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Bilingual support (Filipino and English) for inclusive access</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Fact-checking capability to combat misinformation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Coverage of 100+ candidates and their platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>RAG system for accurate, sourced information retrieval</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technical Architecture</h2>
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Speech Processing</h3>
                <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                  <li>• Whisper for transcription</li>
                  <li>• Multi-language detection</li>
                  <li>• Noise reduction</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">AI Processing</h3>
                <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                  <li>• LangChain orchestration</li>
                  <li>• GPT-4 for responses</li>
                  <li>• RAG for accuracy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-green-600 dark:text-green-400">Backend</h3>
                <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                  <li>• FastAPI server</li>
                  <li>• WebSocket connections</li>
                  <li>• Redis caching</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Impact & Social Good */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Social Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
              <div className="text-3xl mb-3">🗳️</div>
              <h3 className="font-semibold mb-2">Voter Education</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Empowering citizens with accurate election information through accessible AI
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold mb-2">Combat Misinformation</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Real-time fact-checking to ensure voters receive verified information
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
              <div className="text-3xl mb-3">🌏</div>
              <h3 className="font-semibold mb-2">Inclusive Access</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Breaking language and technology barriers for all Filipino voters
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Challenges */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technical Challenges Solved</h2>
          <div className="space-y-4">
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Low-latency Audio Processing</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Achieved sub-2 second response times through optimized pipeline design, WebSocket streaming,
                and intelligent caching strategies.
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Multilingual Understanding</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Implemented code-switching detection to handle mixed Filipino-English conversations naturally,
                crucial for authentic Filipino communication patterns.
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Information Accuracy</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Built a comprehensive RAG system with verified sources to ensure all election information
                provided is accurate and up-to-date.
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">&lt;2s</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">100+</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Candidates Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">Bilingual</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Fil/Eng Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">24/7</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Availability</div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="mb-12 flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/posts/jacob-matthew-rafal-b94399217_meet-tapat-your-ai-audio-agent-built-to-activity-7327135156719235073-F4V0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn Post
          </a>
          <a
            href="https://github.com/JakeCob"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-900 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub Profile
          </a>
        </div>

        {/* Call to Action */}
        <div className="text-center py-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Interested in building AI solutions for social good?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition-opacity"
          >
            Let's Collaborate
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}