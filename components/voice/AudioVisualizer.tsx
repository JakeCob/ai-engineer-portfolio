'use client';

interface AudioVisualizerProps {
  isActive: boolean;
  isSpeaking: boolean;
}

export default function AudioVisualizer({ isActive, isSpeaking }: AudioVisualizerProps) {
  const circles = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-center gap-4">
      {circles.map((index) => (
        <div
          key={index}
          className={`
            w-12 h-12 rounded-full transition-all duration-300
            ${isActive || isSpeaking
              ? 'bg-cyan-400 animate-pulse'
              : 'bg-cyan-400/30'
            }
          `}
          style={{
            animationDelay: `${index * 0.1}s`,
            animationDuration: '1.5s',
          }}
        />
      ))}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}