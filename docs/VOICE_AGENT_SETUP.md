# AI Voice Agent Setup Guide

## Overview
This portfolio features an AI voice agent that can answer questions about Jacob Rafal's experience, skills, and projects. The system is built with open-source tools to minimize costs.

## Features
- 🎤 Voice input with Web Speech API
- 💬 Text chat interface
- 🔊 Multiple voice options for responses
- 📊 Real-time audio visualization
- 🤖 Powered by open-source LLMs

## Architecture

### Frontend (Already Implemented)
- **VoiceAgent Component**: React-based chat interface
- **Web Speech API**: Browser-native speech recognition
- **Speech Synthesis**: Browser-native text-to-speech
- **WebSockets**: Real-time communication (ready for upgrade)

### Backend Options (Choose One)

## Option 1: Groq Cloud (Recommended - Free Tier)
**Best for:** Fast responses, reliable uptime, no local setup

1. Sign up at [console.groq.com](https://console.groq.com)
2. Get your free API key
3. Add to `.env.local`:
```env
GROQ_API_KEY=your_groq_api_key_here
```

**Free Tier Limits:**
- 30 requests/minute
- 14,400 requests/day
- Llama 3 70B model available

## Option 2: Together AI (Free Credits)
**Best for:** Multiple model options, good for testing

1. Sign up at [api.together.xyz](https://api.together.xyz)
2. Get $25 free credits
3. Add to `.env.local`:
```env
TOGETHER_API_KEY=your_together_api_key_here
```

## Option 3: Local Ollama (Completely Free)
**Best for:** Complete privacy, no API limits, showcase self-hosting skills

### Install Ollama:
```bash
# macOS/Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows
# Download from https://ollama.com/download
```

### Download Llama 3:
```bash
ollama pull llama3
```

### Run Ollama server:
```bash
ollama serve
```

### Enable in `.env.local`:
```env
USE_OLLAMA=true
```

## Option 4: Hugging Face Inference (Free Tier)
**Best for:** Variety of models, community support

1. Get API key from [huggingface.co](https://huggingface.co/settings/tokens)
2. Add to `.env.local`:
```env
HUGGINGFACE_API_KEY=your_hf_api_key_here
```

## Advanced: Self-Hosted Stack with Docker

### Complete Open-Source Setup:
```yaml
# docker-compose.yml
version: '3.8'
services:
  ollama:
    image: ollama/ollama
    ports:
      - "11434:11434"
    volumes:
      - ollama_data:/root/.ollama
    command: serve

  whisper:
    image: onerahmet/openai-whisper-asr-webservice
    ports:
      - "9000:9000"

  piper-tts:
    image: rhasspy/wyoming-piper
    ports:
      - "10200:10200"
    command: --voice en_US-amy-medium

volumes:
  ollama_data:
```

### Run the stack:
```bash
docker-compose up -d
```

## Customizing the Knowledge Base

Edit `lib/knowledge-base.json` to update:
- Personal information
- Projects and achievements
- Skills and expertise
- Availability status

## Improving Responses

### 1. Add RAG (Retrieval Augmented Generation):
```typescript
// Use ChromaDB or Pinecone for vector storage
// Embed your resume, projects, and blog posts
// Retrieve relevant context for each query
```

### 2. Fine-tune on Personal Data:
```bash
# Use Hugging Face AutoTrain or Together Fine-tuning
# Create dataset from your writing samples
# Fine-tune Llama 3 on your communication style
```

### 3. Add Memory/Context:
```typescript
// Store conversation history in localStorage
// Pass previous messages as context
// Maintain session-based memory
```

## Voice Enhancement Options

### Better Speech Recognition:
- **Deepgram**: Real-time transcription API (free tier)
- **AssemblyAI**: Accurate transcription (free tier)
- **Whisper API**: OpenAI's model (self-hosted)

### Better Text-to-Speech:
- **Coqui TTS**: Open-source, multiple voices
- **Piper**: Fast, lightweight, local TTS
- **Edge TTS**: Microsoft's free TTS API

## Monitoring & Analytics

### Track Usage:
```typescript
// Log queries to understand user interests
// Monitor response times
// Track most asked questions
// Improve knowledge base based on gaps
```

## Cost Optimization Tips

1. **Cache Responses**: Store common Q&A pairs
2. **Rate Limiting**: Prevent abuse with session limits
3. **Compression**: Reduce token usage with smart prompts
4. **Fallback**: Use rule-based for simple queries

## Security Considerations

1. **API Keys**: Never commit to git
2. **Rate Limiting**: Implement per-IP limits
3. **Content Filtering**: Validate user input
4. **CORS**: Configure proper origins

## Deployment

### For Vercel:
```bash
# Install dependencies
npm install

# Set environment variables in Vercel dashboard
# Deploy
vercel --prod
```

### For Self-Hosting:
```bash
# Use PM2 for process management
npm install -g pm2
pm2 start npm --name "portfolio" -- start
```

## Troubleshooting

### Common Issues:

1. **No speech recognition**: Check browser compatibility (Chrome/Edge work best)
2. **API timeout**: Increase timeout in fetch requests
3. **CORS errors**: Configure API endpoints properly
4. **No response**: Check API keys and rate limits

## Future Enhancements

- [ ] Add WebRTC for better audio quality
- [ ] Implement voice cloning for personalized TTS
- [ ] Add multilingual support
- [ ] Create mobile app with React Native
- [ ] Add emotion detection in voice
- [ ] Implement avatar animations synced with speech

## Resources

- [Groq Documentation](https://console.groq.com/docs)
- [Ollama Documentation](https://ollama.com/docs)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [LiveKit Docs](https://docs.livekit.io/)

## Support

For issues or questions about the voice agent, please check the [GitHub repository](https://github.com/JakeCob) or contact Jacob directly.