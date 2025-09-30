# n8n AI Assistant Workflow

This directory contains the n8n workflow for the AI-powered portfolio assistant.

## Setup Instructions

### 1. Import Workflow to n8n

1. Open your n8n instance on Railway
2. Click **"+ Add workflow"**
3. Click **"Import from file"** or **"Import from JSON"**
4. Upload `ai-portfolio-assistant.json`
5. Click **"Import"**

### 2. Configure Groq Credentials

1. In n8n, go to **Settings** → **Credentials**
2. Click **"Add Credential"**
3. Search for **"Groq"** (or **"OpenAI"** if Groq not available)
4. Add your Groq API key from https://console.groq.com
5. Save the credential

### 3. Update AI Agent Node

1. Open the imported workflow
2. Click on the **"AI Agent"** node
3. Under **"Chat Model"**, select your Groq credentials
4. Choose model: **"llama-3.1-70b-versatile"** (recommended) or **"llama-3.3-70b-versatile"**
5. Save the node

### 4. Update API Key in n8n

The workflow uses API key authentication. You need to update the API key in the workflow:

1. Click on the **"Extract Request Data"** node
2. Find this line: `const expectedApiKey = 'n8n_5c80468e84bed2ef8ac0f452e5a1661beb090a4ecdf717c1f31b1f7b0c6e8905';`
3. Replace with your own generated API key
4. Save the workflow

### 5. Activate Workflow

1. Toggle the workflow to **"Active"**
2. Copy the **Production Webhook URL** (looks like: `https://your-n8n.railway.app/webhook/ai-assistant`)

### 6. Configure Next.js Environment

Add these variables to your `.env.local` file:

```bash
# n8n Webhook URL for AI Assistant
N8N_WEBHOOK_URL=https://your-n8n.railway.app/webhook/ai-assistant

# n8n Webhook Authentication
N8N_WEBHOOK_API_KEY=n8n_5c80468e84bed2ef8ac0f452e5a1661beb090a4ecdf717c1f31b1f7b0c6e8905
```

## Security

### API Key Authentication

The workflow validates incoming requests using a Bearer token:

- **Header**: `Authorization: Bearer YOUR_API_KEY`
- **Key Format**: `n8n_` prefix + 64 random hex characters
- **Validation**: Done in the "Extract Request Data" code node

### Generating a New API Key

To generate a new API key, run:

```bash
node -e "console.log('n8n_' + require('crypto').randomBytes(32).toString('hex'))"
```

Then update:
1. The `expectedApiKey` in n8n workflow's "Extract Request Data" node
2. The `N8N_WEBHOOK_API_KEY` in your `.env.local` file

### Railway Environment Variables

For production deployment, add the API key to Railway environment variables:
1. Go to your n8n Railway project
2. Click **"Variables"** tab
3. Add `N8N_WEBHOOK_API_KEY` with your generated key
4. Update the n8n workflow code to read from environment variable instead

## Workflow Architecture

```
┌─────────────────┐
│ Webhook Trigger │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────┐
│ Extract Request Data        │
│ - Validate API Key          │
│ - Extract message           │
│ - Parse conversation history│
└────────┬────────────────────┘
         │
         ▼
┌─────────────────────────────┐
│ AI Agent                    │
│ - Groq LLM (Llama 3)        │
│ - Portfolio context         │
│ - Conversational responses  │
└────────┬────────────────────┘
         │
         ▼
┌─────────────────────────────┐
│ Format Response             │
│ - Structure JSON output     │
│ - Add metadata              │
└────────┬────────────────────┘
         │
         ▼
┌─────────────────────────────┐
│ Respond to Webhook          │
│ - Return formatted response │
└─────────────────────────────┘
```

## Testing

### Test the n8n webhook directly:

```bash
curl -X POST https://your-n8n.railway.app/webhook/ai-assistant \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{"message": "What are Jacob'\''s main skills?"}'
```

### Test via Next.js API route:

```bash
curl -X POST http://localhost:3000/api/assistant \
  -H "Content-Type: application/json" \
  -d '{"message": "What are Jacob'\''s main skills?"}'
```

## Performance Metrics

- **Response Time**: 1-3 seconds (varies by model load)
- **Model**: Llama 3.1 70B (via Groq)
- **Cost**: $0 (free tier: 14,400 requests/day)
- **Availability**: 99%+ (Railway + n8n)

## Troubleshooting

### "Unauthorized: Invalid API key" error
- Check that `N8N_WEBHOOK_API_KEY` in `.env.local` matches the key in n8n workflow
- Ensure the Authorization header is being sent correctly
- Verify the key format: `Bearer n8n_...`

### "This webhook is not registered" error
- Make sure the workflow is **Active** in n8n
- Verify the webhook URL is correct
- Check that the webhook path matches (should be `/ai-assistant`)

### Slow responses
- Normal range is 1-3 seconds for AI processing
- Check Groq API status if consistently slow
- Consider switching to a faster model if needed

### n8n workflow fails
- Check n8n execution logs for detailed error messages
- Verify Groq credentials are configured correctly
- Ensure the AI Agent node has a valid model selected

## Next Steps

After basic integration is working, consider:

1. **Phase 2**: Add multi-service integration (GitHub stats, analytics)
2. **Phase 3**: Implement conversation memory and caching
3. **Phase 4**: Add monitoring and analytics dashboard

See `docs/todo/n8n-ai-assistant-plan.md` for the complete roadmap.