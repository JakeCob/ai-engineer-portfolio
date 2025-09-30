export default function TapatProject() {
  return (
    <article className="prose prose-neutral max-w-none dark:prose-invert">
      <h1>Tapat - AI Audio Agent for Philippine Elections</h1>

      <div className="my-8">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://drive.google.com/file/d/1FhJhVhyqDV_M_ZHSXgQLe_PU00fGRZT4/preview"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            allow="autoplay"
            title="Tapat AI Demo"
          />
        </div>
      </div>

      <p className="lead">
        An intelligent audio agent designed to provide accurate information about Philippine elections
        through natural voice conversations.
      </p>

      <h2>Problem Statement</h2>
      <p>
        During Philippine elections, citizens struggle to find accurate, accessible information about
        candidates and voting processes. Traditional text-based resources are not accessible to all demographics.
      </p>

      <h2>Solution Architecture</h2>
      <p>Built a production-ready audio AI agent that:</p>
      <ul>
        <li><strong>Voice Processing</strong>: OpenAI Whisper for speech-to-text conversion</li>
        <li><strong>LLM Integration</strong>: GPT-4 for natural language understanding and response generation</li>
        <li><strong>RAG System</strong>: Custom knowledge base with election information and candidate data</li>
        <li><strong>Audio Synthesis</strong>: Text-to-speech for natural voice responses</li>
        <li><strong>API Design</strong>: FastAPI backend with real-time audio streaming</li>
      </ul>

      <h2>Key Features</h2>

      <h3>Real-time Audio Processing</h3>
      <ul>
        <li>Sub-2 second latency for complete audio-to-audio pipeline</li>
        <li>Streaming audio input/output for natural conversation flow</li>
        <li>Noise filtering and audio quality optimization</li>
      </ul>

      <h3>Multilingual Support</h3>
      <ul>
        <li>Support for English, Filipino, and regional languages</li>
        <li>Context-aware language detection and response matching</li>
        <li>Cultural sensitivity in political information delivery</li>
      </ul>

      <h2>Technical Stack</h2>
      <ul>
        <li><strong>Audio Processing</strong>: OpenAI Whisper, ElevenLabs TTS</li>
        <li><strong>LLM</strong>: GPT-4 with custom prompt engineering</li>
        <li><strong>Backend</strong>: FastAPI, Python, AsyncIO</li>
        <li><strong>Vector DB</strong>: ChromaDB for RAG implementation</li>
        <li><strong>Deployment</strong>: Docker, production-ready architecture</li>
      </ul>
    </article>
  );
}