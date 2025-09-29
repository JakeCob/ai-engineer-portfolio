import { NextRequest } from 'next/server';
import knowledgeBase from '@/lib/knowledge-base.json';

// For production, you would integrate with one of these:
// - Groq Cloud (free tier): https://console.groq.com
// - Together AI: https://api.together.xyz
// - Hugging Face Inference: https://huggingface.co/inference-api
// - Local Ollama: http://localhost:11434/api/generate

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    // Build context from knowledge base
    const context = `You are an AI assistant representing ${knowledgeBase.identity.name}, an ${knowledgeBase.identity.role}.

Background: ${knowledgeBase.background.summary}

Key Information:
- Specializations: ${knowledgeBase.background.specializations.join(', ')}
- Years of Experience: ${knowledgeBase.background.years_experience}
- Location: ${knowledgeBase.identity.location}
- Email: ${knowledgeBase.identity.email}

Technical Skills:
- AI/ML: ${knowledgeBase.technical_skills.ai_ml.frameworks.join(', ')}
- Data Engineering: ${knowledgeBase.technical_skills.data_engineering.languages.join(', ')}
- Backend: ${knowledgeBase.technical_skills.backend.frameworks.join(', ')}
- Frontend: ${knowledgeBase.technical_skills.frontend.frameworks.join(', ')}

Notable Projects:
${knowledgeBase.projects.map(p => `- ${p.name}: ${p.description}`).join('\n')}

Current Status: ${knowledgeBase.availability.status}

When answering questions:
1. Speak in first person as if you are Jacob's AI assistant
2. Be helpful, professional, and friendly
3. Provide specific details from the knowledge base when relevant
4. If asked about something not in your knowledge, politely redirect to relevant information
5. Keep responses concise but informative`;

    // Option 1: Use Groq Cloud (Free Tier - Recommended)
    if (process.env.GROQ_API_KEY) {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192', // Free and fast
          messages: [
            { role: 'system', content: context },
            ...conversationHistory,
            { role: 'user', content: message }
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      const data = await response.json();
      return Response.json({
        response: data.choices[0].message.content,
        model: 'Llama 3 (Groq)',
      });
    }

    // Option 2: Use Together AI (Free Credits)
    if (process.env.TOGETHER_API_KEY) {
      const response = await fetch('https://api.together.xyz/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.TOGETHER_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'meta-llama/Llama-3-8b-chat-hf',
          messages: [
            { role: 'system', content: context },
            ...conversationHistory,
            { role: 'user', content: message }
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      const data = await response.json();
      return Response.json({
        response: data.choices[0].message.content,
        model: 'Llama 3 (Together)',
      });
    }

    // Option 3: Use local Ollama (Completely Free)
    if (process.env.USE_OLLAMA === 'true') {
      const response = await fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3',
          messages: [
            { role: 'system', content: context },
            ...conversationHistory,
            { role: 'user', content: message }
          ],
          stream: false,
        }),
      });

      const data = await response.json();
      return Response.json({
        response: data.message.content,
        model: 'Llama 3 (Local)',
      });
    }

    // Fallback: Rule-based responses using knowledge base
    const response = generateRuleBasedResponse(message, knowledgeBase);
    return Response.json({
      response,
      model: 'Rule-based (Configure API for better responses)',
    });

  } catch (error) {
    console.error('Assistant API error:', error);
    return Response.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
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