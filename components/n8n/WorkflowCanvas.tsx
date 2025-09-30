'use client';

import React, { useEffect, useRef } from 'react';
import WorkflowNode from './WorkflowNode';

interface WorkflowCanvasProps {
  workflow: any;
  selectedNode: string | null;
  onNodeClick: (nodeId: string) => void;
}

export default function WorkflowCanvas({ workflow, selectedNode, onNodeClick }: WorkflowCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);

  // Calculate canvas bounds based on node positions
  const calculateBounds = () => {
    let minX = Infinity, minY = Infinity;
    let maxX = -Infinity, maxY = -Infinity;

    workflow.nodes.forEach((node: any) => {
      const [x, y] = node.position;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x + 200); // Assume node width of 200
      maxY = Math.max(maxY, y + 100); // Assume node height of 100
    });

    return {
      width: maxX - minX + 100,
      height: maxY - minY + 100,
      offsetX: minX - 50,
      offsetY: minY - 50,
    };
  };

  const bounds = calculateBounds();

  // Draw connections between nodes
  const renderConnections = () => {
    const connections: React.ReactElement[] = [];

    Object.entries(workflow.connections || {}).forEach(([sourceNodeId, outputs]: [string, any]) => {
      const sourceNode = workflow.nodes.find((n: any) => n.id === sourceNodeId || n.name === sourceNodeId);
      if (!sourceNode) return;

      Object.values(outputs).forEach((outputArray: any) => {
        if (Array.isArray(outputArray)) {
          outputArray.forEach((connectionArray) => {
            if (Array.isArray(connectionArray)) {
              connectionArray.forEach((connection: any) => {
                const targetNode = workflow.nodes.find((n: any) =>
                  n.id === connection.node || n.name === connection.node
                );
                if (targetNode) {
                  const key = `${sourceNode.id}-${targetNode.id}`;
                  connections.push(
                    <svg
                      key={key}
                      className="absolute pointer-events-none"
                      style={{
                        left: 0,
                        top: 0,
                        width: bounds.width,
                        height: bounds.height,
                      }}
                    >
                      <defs>
                        <marker
                          id="arrowhead"
                          markerWidth="10"
                          markerHeight="10"
                          refX="9"
                          refY="3"
                          orient="auto"
                        >
                          <polygon
                            points="0 0, 10 3, 0 6"
                            fill="#999"
                          />
                        </marker>
                      </defs>
                      <path
                        d={createPath(sourceNode, targetNode, bounds)}
                        stroke="#999"
                        strokeWidth="2"
                        fill="none"
                        markerEnd="url(#arrowhead)"
                        className="transition-all hover:stroke-blue-500"
                      />
                    </svg>
                  );
                }
              });
            }
          });
        }
      });
    });

    return connections;
  };

  return (
    <div
      ref={canvasRef}
      className="relative w-full overflow-auto"
      style={{
        minHeight: '500px',
        height: Math.min(bounds.height, 600),
      }}
    >
      <div
        className="relative"
        style={{
          width: bounds.width,
          height: bounds.height,
        }}
      >
        {/* Render connections */}
        {renderConnections()}

        {/* Render nodes */}
        {workflow.nodes.map((node: any) => (
          <WorkflowNode
            key={node.id}
            node={node}
            isSelected={selectedNode === node.id}
            onClick={() => onNodeClick(node.id)}
            offset={bounds}
          />
        ))}
      </div>
    </div>
  );
}

// Create a curved path between two nodes
function createPath(source: any, target: any, bounds: any) {
  const sourceX = source.position[0] - bounds.offsetX + 180;
  const sourceY = source.position[1] - bounds.offsetY + 40;
  const targetX = target.position[0] - bounds.offsetX + 20;
  const targetY = target.position[1] - bounds.offsetY + 40;

  const controlPointOffset = Math.abs(targetX - sourceX) / 2;

  return `M ${sourceX} ${sourceY} C ${sourceX + controlPointOffset} ${sourceY}, ${targetX - controlPointOffset} ${targetY}, ${targetX} ${targetY}`;
}