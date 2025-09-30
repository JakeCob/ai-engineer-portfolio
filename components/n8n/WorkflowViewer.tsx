'use client';

import { useState } from 'react';
import WorkflowCanvas from './WorkflowCanvas';

interface WorkflowViewerProps {
  workflows: {
    id: string;
    name: string;
    description: string;
    data: any;
  }[];
}

export default function WorkflowViewer({ workflows }: WorkflowViewerProps) {
  const [selectedWorkflow, setSelectedWorkflow] = useState(0);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const currentWorkflow = workflows[selectedWorkflow];

  return (
    <div className="w-full">
      {/* Workflow Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-neutral-200 dark:border-neutral-800">
        {workflows.map((workflow, index) => (
          <button
            key={workflow.id}
            onClick={() => {
              setSelectedWorkflow(index);
              setSelectedNode(null);
            }}
            className={`px-4 py-2 font-medium transition-colors border-b-2 ${
              selectedWorkflow === index
                ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400'
                : 'text-neutral-600 dark:text-neutral-400 border-transparent hover:text-neutral-900 dark:hover:text-neutral-100'
            }`}
          >
            {workflow.name}
          </button>
        ))}
      </div>

      {/* Workflow Description */}
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          {currentWorkflow.description}
        </p>
      </div>

      {/* Workflow Canvas */}
      <div className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        <WorkflowCanvas
          workflow={currentWorkflow.data}
          selectedNode={selectedNode}
          onNodeClick={setSelectedNode}
        />
      </div>

      {/* Node Details Panel */}
      {selectedNode && (
        <div className="mt-6 p-4 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <h3 className="font-semibold text-lg mb-2">
            {currentWorkflow.data.nodes.find((n: any) => n.id === selectedNode)?.name || 'Node Details'}
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium text-neutral-600 dark:text-neutral-400">Type: </span>
              <span className="font-mono">
                {currentWorkflow.data.nodes.find((n: any) => n.id === selectedNode)?.type.split('.').pop()}
              </span>
            </div>
            <div>
              <span className="font-medium text-neutral-600 dark:text-neutral-400">Node ID: </span>
              <span className="font-mono text-xs">{selectedNode}</span>
            </div>
            {getNodeDescription(currentWorkflow.data.nodes.find((n: any) => n.id === selectedNode))}
          </div>
        </div>
      )}
    </div>
  );
}

function getNodeDescription(node: any) {
  if (!node) return null;

  const descriptions: { [key: string]: string } = {
    webhook: 'Receives HTTP requests to trigger the workflow',
    code: 'Executes custom JavaScript code for data processing',
    agent: 'AI Agent that processes requests using LLM',
    respondToWebhook: 'Sends response back to the webhook caller',
    lmChatGroq: 'Groq LLM for fast inference with Llama models',
    memoryPostgresChat: 'Stores conversation history in PostgreSQL',
    vectorStoreSupabase: 'Vector database for semantic search and RAG',
    embeddingsGoogleGemini: 'Creates embeddings using Google Gemini',
  };

  const typeKey = node.type.includes('.') ? node.type.split('.').pop() : node.type;
  const description = descriptions[typeKey] || 'Processes data in the workflow';

  return (
    <div className="mt-2 p-2 bg-neutral-50 dark:bg-neutral-800 rounded">
      <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
  );
}