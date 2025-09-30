import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { allProjects } from 'contentlayer/generated';
import MDXRenderer from '@/components/MDXRenderer';
import VoiceAgentV2 from '@/components/VoiceAgentV2';

export default function N8nWorkflowsPage() {
  const project = allProjects.find(p => p.slug === 'n8n-workflows');

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-16">
      {/* Back Button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-8"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span>Back to Projects</span>
      </Link>

      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
          {project.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Live Implementation Notice */}
      <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-3">
          <div className="text-3xl animate-pulse">🔴</div>
          <div>
            <h3 className="font-semibold text-lg text-blue-900 dark:text-blue-100">
              Live Implementation Running Now!
            </h3>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              The workflows shown below are actively powering the AI assistant on this portfolio. Scroll down to try it yourself!
            </p>
          </div>
        </div>
      </div>

      {/* Workflow Architecture Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Workflow Architecture</h2>

        {/* AI Assistant Workflow */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            AI Portfolio Assistant Workflow
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            This workflow processes every message sent to the AI assistant on this portfolio. It handles authentication,
            RAG retrieval, LLM processing with Groq, and maintains conversation history.
          </p>

          {/* Workflow Screenshot */}
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 overflow-hidden">
            <div className="relative w-full bg-white dark:bg-neutral-900 rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/Agent.png"
                alt="AI Portfolio Assistant n8n Workflow"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="text-xs text-center text-neutral-500 dark:text-neutral-400 mt-2">
              Live n8n workflow running on Railway
            </p>
          </div>

          {/* Workflow Details */}
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <h4 className="font-medium mb-2">Input Processing</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Webhook validates authentication and extracts message data
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <h4 className="font-medium mb-2">AI Processing</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Groq LLM (Llama 3.3 70B) with RAG-enhanced context
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <h4 className="font-medium mb-2">Response Time</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Average 1-2 seconds end-to-end processing
              </p>
            </div>
          </div>
        </div>

        {/* RAG Pipeline Workflow */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">🔍</span>
            RAG Embeddings Pipeline
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Handles document ingestion and semantic search. Creates vector embeddings for portfolio content,
            enabling intelligent context retrieval for accurate AI responses.
          </p>

          {/* Workflow Screenshot */}
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 overflow-hidden">
            <div className="relative w-full bg-white dark:bg-neutral-900 rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/RAG.png"
                alt="RAG Embeddings Pipeline n8n Workflow"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <p className="text-xs text-center text-neutral-500 dark:text-neutral-400 mt-2">
              Document ingestion and vector embeddings workflow
            </p>
          </div>
        </div>
      </div>

      {/* Technical Stack */}
      <div className="mb-12 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            Infrastructure
          </h3>
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>• n8n self-hosted on Railway (99.9% uptime)</li>
            <li>• PostgreSQL for conversation memory</li>
            <li>• Supabase Vector Store for RAG</li>
            <li>• API key authentication</li>
            <li>• Sub-2 second response times</li>
          </ul>
        </div>

        <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            AI Components
          </h3>
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>• Groq LLM (Llama 3.3 70B Versatile)</li>
            <li>• Google Gemini embeddings</li>
            <li>• RAG-enhanced responses</li>
            <li>• Context-aware conversations</li>
            <li>• 95%+ accuracy on portfolio queries</li>
          </ul>
        </div>
      </div>

      {/* About This Project */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">About This Project</h2>

        {/* Introduction Card */}
        <div className="mb-8 p-6 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Live production implementation of n8n workflow automation powering the AI assistant on this portfolio. This project demonstrates expertise in no-code AI orchestration, integrating LLMs, vector databases, and conversation memory to create an intelligent, context-aware assistant with RAG-enhanced responses and sub-2-second response times.
          </p>
        </div>

        {/* Overview Card */}
        <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">📋</span>
            Overview
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Built two complementary n8n workflows that work together to power this portfolio's AI assistant: one for real-time chat processing with RAG retrieval, and another for document ingestion and vector embeddings. Self-hosted on Railway with PostgreSQL for conversation memory and Supabase for vector storage, achieving 99.9% uptime and consistent performance.
          </p>
        </div>

        {/* Workflow Architecture Cards */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Workflow Architecture</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <h4 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-3 flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                AI Portfolio Assistant
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Main chat processing workflow:</p>
              <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Webhook trigger with API key authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>AI Agent node with Groq LLM (Llama 3.3 70B)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>RAG context retrieval from Supabase</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>PostgreSQL conversation memory</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Response formatting and delivery</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <h4 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-3 flex items-center gap-2">
                <span className="text-2xl">🔍</span>
                RAG Embeddings Pipeline
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Document processing workflow:</p>
              <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Portfolio content ingestion and parsing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Text chunking with optimal overlap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Google Gemini embeddings generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Vector storage in Supabase</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Semantic search capability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Metrics Cards */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Response Performance
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">End-to-end response</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">1-2s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">Query accuracy</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">95%+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">RAG retrieval</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">&lt;500ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">Memory persistence</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">Real-time</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-xl border border-cyan-200 dark:border-cyan-800">
              <h4 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-4 flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                System Reliability
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">Uptime (Railway)</span>
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">99.9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">Error handling</span>
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">Auto-retry</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">Security</span>
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">API Key Auth</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">Chat history</span>
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">Persistent</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Cards */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Intelligent Context Retrieval</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                RAG system retrieves relevant portfolio content using semantic search for accurate, contextual responses.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Conversation Memory</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                PostgreSQL-backed memory maintains context across messages for natural multi-turn conversations.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Fast LLM Inference</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Groq's lightning-fast Llama 3.3 70B model delivers quality responses in under 2 seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Implementation Card */}
        <div className="mb-8 p-6 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">🔧</span>
            Technical Implementation
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">No-Code AI Orchestration</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Leveraged n8n's visual workflow builder to create complex AI pipelines without traditional coding.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">RAG Architecture</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Implemented retrieval-augmented generation using Supabase vector store and Google Gemini embeddings.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">LangChain Integration</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Used LangChain agent nodes for orchestrating LLM calls, memory management, and tool usage.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Production Deployment</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Self-hosted n8n on Railway with PostgreSQL and Supabase, achieving enterprise-grade reliability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Card */}
        <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl border-2 border-blue-300 dark:border-blue-700 shadow-lg">
          <h4 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-2 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Real-World Impact
          </h4>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            This live implementation showcases practical expertise in n8n workflow automation, AI orchestration, and no-code development—directly applicable to building production-grade GenAI solutions for enterprise applications.
          </p>
        </div>
      </div>

      {/* Code Example */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Workflow Configuration Example</h2>
        <div className="bg-neutral-900 text-neutral-100 p-6 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            <code>{`{
  "nodes": [
    {
      "name": "Webhook Trigger",
      "type": "n8n-nodes-base.webhook",
      "parameters": {
        "path": "ai-assistant",
        "authentication": "headerAuth"
      }
    },
    {
      "name": "AI Agent",
      "type": "@n8n/n8n-nodes-langchain.agent",
      "parameters": {
        "model": "groq:llama-3.3-70b",
        "systemPrompt": "Portfolio assistant context...",
        "tools": ["vectorStore", "memory"]
      }
    },
    {
      "name": "Vector Store",
      "type": "@n8n/n8n-nodes-langchain.vectorStoreSupabase",
      "parameters": {
        "tableName": "documents",
        "embeddings": "gemini"
      }
    }
  ]
}`}</code>
          </pre>
        </div>
      </div>

      {/* Live Demo Section */}
      <div className="mt-16">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold mb-3">Try the Live Implementation</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Experience the n8n workflows in action. This chat assistant uses the exact workflows shown above.
          </p>
        </div>

        {/* Embedded Chatbot */}
        <div className="max-w-4xl mx-auto">
          <div className="p-6 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-black rounded-xl border-2 border-blue-300 dark:border-blue-700 shadow-xl">
            <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3">
                <div className="text-2xl animate-pulse">🔴</div>
                <div>
                  <p className="font-semibold text-blue-900 dark:text-blue-100">Live n8n Workflow Running</p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Every message is processed through the AI Agent → RAG → Memory pipeline shown above
                  </p>
                </div>
              </div>
            </div>
            <VoiceAgentV2 />
          </div>
        </div>
      </div>
    </main>
  );
}

// Helper Components
function NodeCard({ icon, title, description, color }: { icon: string; title: string; description: string; color: string }) {
  const colorClasses = {
    green: 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800',
    yellow: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800',
    purple: 'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800',
    blue: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800',
    teal: 'bg-teal-50 dark:bg-teal-950/30 border-teal-200 dark:border-teal-800',
    orange: 'bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800',
    pink: 'bg-pink-50 dark:bg-pink-950/30 border-pink-200 dark:border-pink-800',
    cyan: 'bg-cyan-50 dark:bg-cyan-950/30 border-cyan-200 dark:border-cyan-800',
  }[color] || 'bg-neutral-50 dark:bg-neutral-950/30 border-neutral-200 dark:border-neutral-800';

  return (
    <div className={`p-4 rounded-lg border-2 ${colorClasses} transition-transform hover:scale-105`}>
      <div className="text-2xl mb-1">{icon}</div>
      <div className="font-medium text-sm">{title}</div>
      <div className="text-xs text-neutral-600 dark:text-neutral-400">{description}</div>
    </div>
  );
}

function Arrow() {
  return (
    <svg className="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}