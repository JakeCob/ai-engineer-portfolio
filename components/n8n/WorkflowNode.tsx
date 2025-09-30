'use client';

interface WorkflowNodeProps {
  node: any;
  isSelected: boolean;
  onClick: () => void;
  offset: {
    offsetX: number;
    offsetY: number;
  };
}

export default function WorkflowNode({ node, isSelected, onClick, offset }: WorkflowNodeProps) {
  const [x, y] = node.position;
  const adjustedX = x - offset.offsetX;
  const adjustedY = y - offset.offsetY;

  // Get node icon and color based on type
  const getNodeStyle = (type: string) => {
    const styles: { [key: string]: { icon: string; color: string; bgColor: string } } = {
      webhook: { icon: '🌐', color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-950/30' },
      code: { icon: '⚙️', color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-950/30' },
      agent: { icon: '🤖', color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-950/30' },
      respondToWebhook: { icon: '↩️', color: 'text-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-950/30' },
      lmChatGroq: { icon: '🧠', color: 'text-indigo-600', bgColor: 'bg-indigo-50 dark:bg-indigo-950/30' },
      memoryPostgresChat: { icon: '💾', color: 'text-teal-600', bgColor: 'bg-teal-50 dark:bg-teal-950/30' },
      vectorStoreSupabase: { icon: '🔍', color: 'text-cyan-600', bgColor: 'bg-cyan-50 dark:bg-cyan-950/30' },
      embeddingsGoogleGemini: { icon: '✨', color: 'text-pink-600', bgColor: 'bg-pink-50 dark:bg-pink-950/30' },
    };

    const typeKey = type.includes('.') ? type.split('.').pop() || 'default' : type;
    return styles[typeKey] || { icon: '📦', color: 'text-gray-600', bgColor: 'bg-gray-50 dark:bg-gray-950/30' };
  };

  const style = getNodeStyle(node.type);

  return (
    <div
      className={`absolute cursor-pointer transition-all duration-200 ${
        isSelected ? 'z-10 scale-105' : 'hover:scale-102'
      }`}
      style={{
        left: `${adjustedX}px`,
        top: `${adjustedY}px`,
        width: '200px',
      }}
      onClick={onClick}
    >
      <div
        className={`
          relative bg-white dark:bg-neutral-900 rounded-lg shadow-lg
          border-2 transition-colors
          ${isSelected
            ? 'border-blue-500 dark:border-blue-400 shadow-blue-200 dark:shadow-blue-900/50'
            : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600'
          }
        `}
      >
        {/* Node Header */}
        <div className={`px-3 py-2 rounded-t-lg ${style.bgColor} border-b border-neutral-200 dark:border-neutral-700`}>
          <div className="flex items-center gap-2">
            <span className="text-xl">{style.icon}</span>
            <span className={`text-xs font-medium ${style.color}`}>
              {node.type.includes('.') ? node.type.split('.').pop()?.toUpperCase() : node.type.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Node Content */}
        <div className="px-3 py-2">
          <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 truncate">
            {node.name}
          </p>
          {node.parameters?.model && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 truncate">
              Model: {node.parameters.model}
            </p>
          )}
          {node.parameters?.path && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 truncate">
              Path: /{node.parameters.path}
            </p>
          )}
        </div>

        {/* Connection Points */}
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 rounded-full"></div>
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 rounded-full"></div>
      </div>

      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute -inset-1 border-2 border-blue-500 dark:border-blue-400 rounded-lg animate-pulse pointer-events-none"></div>
      )}
    </div>
  );
}