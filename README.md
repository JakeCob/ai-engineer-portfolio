# AI Engineer Portfolio

A modern, interactive portfolio website showcasing AI/ML engineering expertise, built with Next.js 15, React 19, and Tailwind CSS 4.

## Features

- **Interactive AI Assistant** - Voice-enabled chatbot powered by n8n workflow automation and RAG
- **Project Showcase** - Detailed case studies of AI/ML projects with live demos
- **Technical Skills** - Comprehensive display of AI/ML, backend, and automation expertise
- **Contact Form** - Email integration via Resend API
- **Dark Mode** - Elegant dark theme optimized for readability
- **Responsive Design** - Mobile-first design that works on all devices

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, Tailwind CSS 4
- **Content**: Contentlayer for MDX-based project pages
- **AI/Automation**: n8n workflow orchestration, RAG with vector search
- **Email**: Resend API
- **Deployment**: Railway

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- n8n instance (for AI assistant functionality)
- Resend account (for contact form)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JakeCob/ai-engineer-portfolio.git
cd ai-engineer-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```env
# Resend API for contact form
RESEND_API_KEY=your_resend_api_key
CONTACT_TO=your_email@example.com

# n8n Webhook for AI Assistant
N8N_WEBHOOK_URL=your_n8n_webhook_url
N8N_WEBHOOK_API_KEY=your_n8n_api_key
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── api/               # API routes (contact, assistant)
│   ├── projects/          # Project pages
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── voice/            # Voice agent components
│   └── ...               # UI components
├── content/              # MDX content for projects
├── lib/                  # Utilities and configurations
├── public/               # Static assets
└── n8n_workflows/        # n8n workflow definitions
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key for sending emails via Resend | Yes (for contact form) |
| `CONTACT_TO` | Email address to receive contact form submissions | Yes |
| `N8N_WEBHOOK_URL` | n8n webhook endpoint for AI assistant | Yes (for AI assistant) |
| `N8N_WEBHOOK_API_KEY` | Authentication key for n8n webhook | Yes (for AI assistant) |

## Deployment

### Railway

1. Push your code to GitHub
2. Create a new Railway project and connect your repository
3. Add environment variables in Railway dashboard
4. Railway will automatically deploy your app

### Vercel

```bash
vercel --prod
```

Make sure to add all environment variables in the Vercel dashboard.

## AI Assistant Setup

The AI assistant uses n8n for workflow automation. To set it up:

1. Deploy an n8n instance (Railway, self-hosted, or n8n Cloud)
2. Import the workflow from `n8n_workflows/rag.json`
3. Configure the webhook URL and API key
4. Set up vector database and LLM connections in n8n

## License

MIT

## Contact

Jacob Rafal - [rafaljacobmatthew@gmail.com](mailto:rafaljacobmatthew@gmail.com)

Portfolio: [Your Live URL]

LinkedIn: [jacob-matthew-rafal](https://www.linkedin.com/in/jacob-matthew-rafal-b94399217/)

GitHub: [@JakeCob](https://github.com/JakeCob)