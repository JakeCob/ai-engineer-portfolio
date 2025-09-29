# n8n AI Assistant Integration Plan

## Overview
Integrate n8n workflow automation platform (already running on Railway) as the orchestration layer for the AI voice assistant, showcasing workflow automation skills and enabling complex multi-service integrations.

## Architecture

### Current Setup
```
[Browser] → [Next.js API] → [Groq API] → [Response]
```

### Proposed n8n Architecture
```
[Browser] → [Next.js API] → [n8n Webhook on Railway] → [Workflow Processing] → [Response]
                                    ↓
                          ┌─────────────────────┐
                          │   Service Layer     │
                          ├─────────────────────┤
                          │ • Groq LLM API      │
                          │ • Together AI       │
                          │ • GitHub Stats      │
                          │ • Google Sheets     │
                          │ • Redis Cache       │
                          └─────────────────────┘
```

## Benefits of n8n Integration

1. **Showcases Skills**
   - Workflow automation expertise
   - System architecture design
   - Multi-service orchestration
   - Visual programming capabilities

2. **Technical Advantages**
   - No-code workflow modifications
   - Visual debugging and monitoring
   - Built-in error handling
   - Easy A/B testing between models
   - Automatic retries and fallbacks

3. **Performance Considerations**
   - Additional latency: ~50-100ms (acceptable)
   - Total response time: ~250-500ms
   - Benefits outweigh minor latency increase

## n8n Workflow Components

### 1. Webhook Trigger
- Endpoint: `/ai-assistant-webhook`
- Method: POST
- Accepts: message, sessionId, conversationHistory

### 2. Intent Classification Node
- Analyze user message
- Route to appropriate workflow branch
- Categories: projects, skills, contact, general

### 3. Context Enrichment
- Pull from knowledge base
- Add GitHub live stats
- Include recent project updates
- Session memory management

### 4. LLM Processing
- **Primary**: Groq API (Llama 3 70B)
- **Fallback**: Together AI (Llama 3 8B)
- **Emergency**: Rule-based responses
- Context injection from knowledge base

### 5. Response Enhancement
- Format markdown responses
- Add relevant links
- Include call-to-actions
- Personalize based on intent

### 6. Analytics & Logging
- Log to Google Sheets
- Track conversation metrics
- Monitor response times
- Identify common questions

### 7. Caching Layer
- Cache common questions
- Store session context
- Reduce API calls
- Improve response speed

## Implementation Phases

### Phase 1: Basic Integration (Week 1)
- [ ] Set up n8n webhook endpoint
- [ ] Create simple LLM workflow
- [ ] Connect Groq API
- [ ] Update Next.js to call n8n
- [ ] Test basic conversation flow

### Phase 2: Multi-Service Integration (Week 2)
- [ ] Add Together AI as fallback
- [ ] Integrate GitHub API for live stats
- [ ] Set up Google Sheets logging
- [ ] Implement intent classification
- [ ] Add error handling nodes

### Phase 3: Advanced Features (Week 3)
- [ ] Implement Redis caching
- [ ] Add conversation memory
- [ ] Create A/B testing workflows
- [ ] Build analytics dashboard
- [ ] Add response templates

### Phase 4: Optimization (Week 4)
- [ ] Performance tuning
- [ ] Rate limiting
- [ ] Cost optimization
- [ ] Monitoring setup
- [ ] Documentation

## Required n8n Nodes

### Core Nodes
- Webhook (trigger)
- HTTP Request (API calls)
- Set (data manipulation)
- Switch (routing)
- Function (custom logic)

### Integration Nodes
- Groq API (custom HTTP)
- Together AI (custom HTTP)
- GitHub
- Google Sheets
- Redis

### Utility Nodes
- Wait (delays)
- Error Trigger (error handling)
- Merge (combine data)
- Split In Batches (rate limiting)

## Environment Variables Needed

```env
# n8n Webhook URL (Railway)
N8N_WEBHOOK_URL=https://your-n8n-railway.up.railway.app/webhook/ai-assistant

# API Keys
GROQ_API_KEY=your_groq_key
TOGETHER_API_KEY=your_together_key
GITHUB_TOKEN=your_github_token

# Google Sheets
GOOGLE_SHEETS_ID=your_sheet_id
GOOGLE_SERVICE_ACCOUNT=credentials_json

# Redis (optional)
REDIS_URL=redis://your-redis-url
```

## Next.js Integration Update

### Current API Route
```typescript
// app/api/assistant/route.ts
// Direct API calls to Groq/Together
```

### Updated API Route
```typescript
// app/api/assistant/route.ts
export async function POST(request: NextRequest) {
  const { message, sessionId, conversationHistory } = await request.json();

  // Call n8n webhook instead
  const response = await fetch(process.env.N8N_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message,
      sessionId,
      conversationHistory,
      timestamp: new Date().toISOString()
    })
  });

  return response.json();
}
```

## Monitoring & Maintenance

### Key Metrics to Track
- Response time (target: <500ms)
- Success rate (target: >95%)
- API costs (optimize for free tiers)
- User satisfaction (conversation completion)

### Maintenance Tasks
- Weekly workflow review
- Monthly cost analysis
- Update knowledge base
- Review conversation logs
- Optimize slow workflows

## Cost Analysis

### Free Tier Limits
- **n8n**: Self-hosted on Railway (already running)
- **Groq**: 14,400 requests/day
- **Together AI**: $25 credit
- **Google Sheets**: Free
- **GitHub API**: 5,000 requests/hour

### Estimated Usage
- Portfolio visitors: ~50/day
- Conversations/visitor: ~3
- Total API calls: ~150/day
- **Well within free limits!**

## Security Considerations

1. **API Key Management**
   - Store in n8n credentials
   - Never expose in frontend
   - Rotate regularly

2. **Rate Limiting**
   - Implement per-IP limits
   - Session-based throttling
   - Fallback to cached responses

3. **Input Validation**
   - Sanitize user messages
   - Limit message length
   - Filter malicious content

## Success Metrics

1. **Technical Success**
   - [ ] <500ms response time
   - [ ] 95%+ uptime
   - [ ] Zero API key exposure
   - [ ] Smooth fallback handling

2. **User Experience**
   - [ ] Natural conversations
   - [ ] Relevant responses
   - [ ] Quick response time
   - [ ] Mobile compatibility

3. **Portfolio Impact**
   - [ ] Increased engagement
   - [ ] Longer session duration
   - [ ] More contact requests
   - [ ] Positive feedback

## Future Enhancements

1. **Voice Features**
   - LiveKit integration
   - Real-time transcription
   - Custom TTS voices
   - Emotion detection

2. **Advanced AI**
   - RAG with vector search
   - Fine-tuned models
   - Multi-modal responses
   - Code generation

3. **Analytics**
   - Conversation insights
   - User journey mapping
   - Sentiment analysis
   - Performance dashboards

## Resources & Documentation

- [n8n Documentation](https://docs.n8n.io/)
- [n8n on Railway Guide](https://blog.railway.app/p/n8n)
- [Groq API Docs](https://console.groq.com/docs)
- [Together AI Docs](https://docs.together.ai/)
- [Webhook Security Best Practices](https://docs.n8n.io/hosting/security/)

## Next Steps

1. Import workflow template to n8n
2. Configure API credentials
3. Test webhook endpoint
4. Update Next.js API route
5. Deploy and monitor

## Questions to Resolve

- [ ] Preferred logging solution (Sheets vs database)?
- [ ] Need for conversation persistence?
- [ ] Custom domain for n8n webhook?
- [ ] Backup LLM provider priority?
- [ ] Analytics dashboard requirements?