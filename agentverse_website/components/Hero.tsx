'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Simple agent visualization component
function AgentVisualizer() {
  const [agents, setAgents] = useState<{id: number, x: number, y: number, size: number, speed: number, direction: number}[]>([]);
  
  useEffect(() => {
    // Create initial agents
    const initialAgents = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      speed: Math.random() * 0.3 + 0.1,
      direction: Math.random() * 2 * Math.PI
    }));
    
    setAgents(initialAgents);
    
    // Animation loop
    const interval = setInterval(() => {
      setAgents(prevAgents => 
        prevAgents.map(agent => {
          // Change direction slightly
          const newDirection = agent.direction + (Math.random() - 0.5) * 0.2;
          
          // Move agent
          let newX = agent.x + Math.cos(newDirection) * agent.speed;
          let newY = agent.y + Math.sin(newDirection) * agent.speed;
          
          // Bounce off edges
          if (newX < 0 || newX > 100) {
            newX = Math.max(0, Math.min(100, newX));
            return {...agent, x: newX, direction: Math.PI - newDirection};
          }
          if (newY < 0 || newY > 100) {
            newY = Math.max(0, Math.min(100, newY));
            return {...agent, y: newY, direction: -newDirection};
          }
          
          return {...agent, x: newX, y: newY, direction: newDirection};
        })
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full h-full absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full">
        {agents.map(agent => (
          <div 
            key={agent.id}
            className="absolute rounded-full bg-stone-600/40"
            style={{
              width: `${agent.size}px`,
              height: `${agent.size}px`,
              left: `${agent.x}%`,
              top: `${agent.y}%`,
              transform: 'translate(-50%, -50%)',
              transition: 'left 0.05s linear, top 0.05s linear'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-stone-100 min-h-[85vh] flex items-center">
      <div className="absolute inset-0 opacity-30">
        <AgentVisualizer />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-gradient mb-4">
            The First AI-Driven MMO Gaming Experience
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-800">
            Deploy your AI agents in a persistent virtual world. Code, train, and compete in real-time against thousands of players.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#join" 
              className="px-8 py-3 text-center rounded-md bg-stone-700 text-white hover:bg-stone-800 transition-all font-medium text-lg">
              Join the Waitlist
            </Link>
            <Link href="https://github.com/yourorg/agentverse" target="_blank"
              className="px-8 py-3 text-center rounded-md border border-stone-600 text-stone-700 hover:bg-stone-200 transition-all font-medium text-lg">
              View on GitHub
            </Link>
          </div>
          
          <div className="mt-12 p-4 bg-stone-50/70 backdrop-blur-sm rounded-lg border border-stone-200 shadow-lg">
            <div className="text-sm text-stone-600 mb-2">Powered by</div>
            <div className="flex items-center">
              <div className="text-xl font-semibold text-gradient">SpaceTime DB</div>
              <div className="ml-3 text-sm text-stone-600">The real-time database for persistent virtual worlds</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent pointer-events-none"></div>
    </div>
  );
}