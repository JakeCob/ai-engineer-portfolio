'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AthenaProject() {
  // Extract the file ID from the Google Drive URL
  const videoId = '10TfFjHhV6NLiB6ZFJ3ls7zngmcKfEYYw';

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
            Athena - Spatial AI Analysis Platform
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
            Computer vision system leveraging SLAM3R for 3D point cloud generation and SpatialLM for spatial analysis
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['SLAM3R', 'SpatialLM', 'Gradio', 'Computer Vision', '3D Visualization', 'Python', 'Matplotlib'].map((tech) => (
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
              title="Athena Demo Video"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Athena is an advanced spatial AI system that transforms simple room video scans into comprehensive
              3D spatial analyses. By combining state-of-the-art computer vision with spatial language models,
              it provides actionable insights for interior design, risk assessment, and space optimization.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              Built as a solo project in 2024, Athena demonstrates the integration of multiple AI modalities
              to solve real-world spatial understanding challenges.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Real-time video processing to generate detailed 3D point clouds</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Interactive 2D and 3D floorplan visualization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>AI-powered spatial analysis using SpatialLM</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Intelligent chatbot for risk assessments and design recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Gradio-based user interface for easy interaction</span>
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
                <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Input Processing</h3>
                <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                  <li>• Video capture & preprocessing</li>
                  <li>• Frame extraction</li>
                  <li>• Quality enhancement</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">3D Reconstruction</h3>
                <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                  <li>• SLAM3R point cloud generation</li>
                  <li>• Spatial mapping</li>
                  <li>• Dimension calculation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-green-600 dark:text-green-400">AI Analysis</h3>
                <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                  <li>• SpatialLM integration</li>
                  <li>• Risk assessment</li>
                  <li>• Design recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Applications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="font-semibold mb-2">Interior Design</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Generate furniture placement suggestions and optimize room layouts
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="font-semibold mb-2">Risk Assessment</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Identify safety hazards and accessibility concerns in spaces
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold mb-2">Space Analytics</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Measure and analyze spatial efficiency and utilization
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">Real-time</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">3D + 2D</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Visualization</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">Multi-modal</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">AI Integration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Solo Built</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Interested in spatial AI or computer vision projects?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition-opacity"
          >
            Let's Discuss
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