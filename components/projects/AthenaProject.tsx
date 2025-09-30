export default function AthenaProject() {
  return (
    <article className="prose prose-neutral max-w-none dark:prose-invert">
      <h1>Athena - Spatial AI Analysis Platform</h1>

      <div className="my-8">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://drive.google.com/file/d/10TfFjHhV6NLiB6ZFJ3ls7zngmcKfEYYw/preview"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            allow="autoplay"
            title="Athena Spatial AI Demo"
          />
        </div>
      </div>

      <p className="lead">
        Advanced computer vision system that transforms 2D videos into interactive 3D spatial
        environments with AI-powered analysis and recommendations.
      </p>

      <h2>Project Overview</h2>
      <p>
        Athena is a spatial intelligence platform that combines cutting-edge computer vision with
        large language models to create comprehensive spatial analysis tools. The system processes
        video input to generate 3D reconstructions and provides AI-powered insights for space
        optimization, risk assessment, and design recommendations.
      </p>

      <h2>Technical Architecture</h2>

      <h3>Core Components</h3>
      <ul>
        <li><strong>SLAM3R Integration</strong>: State-of-the-art monocular SLAM for real-time mapping</li>
        <li><strong>Point Cloud Generation</strong>: Dense 3D reconstruction from video sequences</li>
        <li><strong>SpatialLM</strong>: Large language model specialized for spatial reasoning</li>
        <li><strong>Interactive Visualization</strong>: Real-time 3D environment viewer</li>
      </ul>

      <h2>Key Features</h2>

      <h3>Video-to-3D Reconstruction</h3>
      <ul>
        <li>Input flexibility for various video formats and camera types</li>
        <li>Real-time processing pipeline for large video files</li>
        <li>Quality optimization with automatic parameter tuning</li>
        <li>Metric-scale reconstruction from monocular input</li>
      </ul>

      <h3>AI-Powered Spatial Analysis</h3>
      <ul>
        <li>Safety assessment identifying potential hazards</li>
        <li>Space optimization suggestions for better utilization</li>
        <li>Traffic flow analysis for movement patterns</li>
        <li>Compliance checking against building codes</li>
      </ul>

      <h2>Performance Metrics</h2>
      <ul>
        <li><strong>Accuracy</strong>: Sub-centimeter precision in controlled environments</li>
        <li><strong>Completeness</strong>: 95%+ coverage of visible surfaces</li>
        <li><strong>Processing Speed</strong>: Real-time capability on modern hardware</li>
        <li><strong>Risk Detection</strong>: 92% accuracy in identifying safety hazards</li>
      </ul>

      <h2>Use Cases</h2>
      <ul>
        <li><strong>Architecture & Construction</strong>: Site planning and progress monitoring</li>
        <li><strong>Real Estate</strong>: Property assessment and space planning</li>
        <li><strong>Retail</strong>: Store layout optimization and customer flow analysis</li>
        <li><strong>Security</strong>: Vulnerability identification and blind spot analysis</li>
      </ul>
    </article>
  );
}