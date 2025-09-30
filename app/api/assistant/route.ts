import { NextRequest } from 'next/server';
import knowledgeBase from '@/lib/knowledge-base.json';

// Using n8n workflow automation as orchestration layer
// This showcases workflow automation skills and enables complex multi-service integrations

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [], sessionId } = await request.json();

    // Validate message
    if (!message || typeof message !== 'string') {
      return Response.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    // Call n8n webhook endpoint
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || 'https://n8n-production-60ce.up.railway.app/webhook/ai-assistant';
    const apiKey = process.env.N8N_WEBHOOK_API_KEY;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Add API key if configured (n8n Header Auth expects the key directly, not "Bearer ")
    if (apiKey) {
      headers['Authorization'] = apiKey;
    }

    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        message,
        conversationHistory,
        sessionId: sessionId || `session-${Date.now()}`,
        timestamp: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error(`n8n webhook returned ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);

  } catch (error) {
    console.error('Assistant API error:', error);

    // Fallback to rule-based response if n8n is unavailable
    const fallbackResponse = generateRuleBasedResponse(
      (await request.json()).message,
      knowledgeBase
    );

    return Response.json({
      response: fallbackResponse,
      model: 'Rule-based fallback',
      note: 'n8n workflow temporarily unavailable'
    });
  }
}

function generateRuleBasedResponse(message: string, kb: typeof knowledgeBase): string {
  const lowerMessage = message.toLowerCase();

  // Match against knowledge base data
  if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
    return `${kb.background.summary} I have ${kb.background.years_experience} years of experience specializing in ${kb.background.specializations.slice(0, 3).join(', ')}.`;
  }

  if (lowerMessage.includes('skill') || lowerMessage.includes('tech')) {
    const skills = [
      ...kb.technical_skills.ai_ml.frameworks.slice(0, 3),
      ...kb.technical_skills.backend.frameworks.slice(0, 2),
    ];
    return `Jacob's core technical skills include ${skills.join(', ')}. He specializes in ${kb.background.specializations[0]} and ${kb.background.specializations[1]}.`;
  }

  if (lowerMessage.includes('project')) {
    const project = kb.projects[0];
    return `One of Jacob's notable projects is the ${project.name}, ${project.description}. Key achievements include: ${project.achievements.slice(0, 2).join(', ')}.`;
  }

  if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('available')) {
    return `Jacob is ${kb.availability.status.toLowerCase()}! You can reach him at ${kb.identity.email} or schedule a meeting at ${kb.links.calendly}. He's interested in ${kb.availability.preferences.slice(0, 3).join(', ')}.`;
  }

  if (lowerMessage.includes('ai') || lowerMessage.includes('ml') || lowerMessage.includes('machine learning')) {
    return `Jacob has extensive experience in AI/ML, particularly with ${kb.technical_skills.ai_ml.frameworks.slice(0, 3).join(', ')}. His expertise includes ${kb.technical_skills.ai_ml.expertise.slice(0, 3).join(', ')}.`;
  }

  // Default response
  return `That's a great question! Jacob is an ${kb.identity.role} with expertise in ${kb.background.specializations[0]}. Feel free to ask about his specific projects, technical skills, or professional experience. You can also check out the Projects section or contact him directly!`;
}