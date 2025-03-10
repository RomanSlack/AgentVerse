'use client';

import { useEffect, useRef } from 'react';

// Simple 3D visualization for SpaceTime DB
function SpaceTimeVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Create grid points
    const gridSize = 10;
    const points: {x: number, y: number, z: number, vx: number, vy: number, vz: number, size: number}[] = [];
    
    for (let i = 0; i < 100; i++) {
      points.push({
        x: (Math.random() - 0.5) * gridSize,
        y: (Math.random() - 0.5) * gridSize,
        z: (Math.random() - 0.5) * gridSize,
        vx: (Math.random() - 0.5) * 0.02,
        vy: (Math.random() - 0.5) * 0.02,
        vz: (Math.random() - 0.5) * 0.02,
        size: Math.random() * 2 + 1
      });
    }
    
    // Create connections
    const connections: {a: number, b: number, strength: number}[] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (Math.random() < 0.03) {
          connections.push({
            a: i,
            b: j,
            strength: Math.random() * 0.8 + 0.2
          });
        }
      }
    }
    
    // Animation variables
    let time = 0;
    let angle = 0;
    
    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Rotate view
      angle += 0.002;
      time += 0.01;
      
      // Update points
      points.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;
        point.z += point.vz;
        
        // Boundary check
        if (Math.abs(point.x) > gridSize/2) point.vx *= -1;
        if (Math.abs(point.y) > gridSize/2) point.vy *= -1;
        if (Math.abs(point.z) > gridSize/2) point.vz *= -1;
      });
      
      // Draw connections
      connections.forEach(conn => {
        const pointA = points[conn.a];
        const pointB = points[conn.b];
        
        // Project 3D to 2D
        const xa = (pointA.x * Math.cos(angle) - pointA.z * Math.sin(angle)) * 30 + canvas.width/2;
        const ya = pointA.y * 30 + canvas.height/2;
        
        const xb = (pointB.x * Math.cos(angle) - pointB.z * Math.sin(angle)) * 30 + canvas.width/2;
        const yb = pointB.y * 30 + canvas.height/2;
        
        // Calculate distance for opacity
        const dist = Math.sqrt((xa-xb)**2 + (ya-yb)**2);
        
        ctx.beginPath();
        ctx.moveTo(xa, ya);
        ctx.lineTo(xb, yb);
        ctx.strokeStyle = `rgba(165, 142, 105, ${Math.max(0, 0.8 - dist/400) * conn.strength})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      
      // Draw points
      points.forEach(point => {
        // Project 3D to 2D
        const x = (point.x * Math.cos(angle) - point.z * Math.sin(angle)) * 30 + canvas.width/2;
        const y = point.y * 30 + canvas.height/2;
        
        // Calculate depth for size and opacity
        const depth = (point.z * Math.cos(angle) + point.x * Math.sin(angle)) / gridSize;
        const opacity = Math.max(0.2, 1 - Math.abs(depth));
        const size = point.size * (1 - Math.abs(depth) * 0.5);
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120, 110, 100, ${opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="w-full h-full" />;
}

export default function TechStack() {
  return (
    <section id="technology" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <img src="/spacetime3.svg" alt="SpaceTime DB Logo" className="h-50" />
          </div>
          <h2 className="text-gradient mb-4">Powered by SpaceTime DB</h2>
          <p className="max-w-2xl mx-auto text-lg text-stone-700">
            Our infrastructure leverages cutting-edge technology to create a persistent, real-time virtual environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-stone-50 shadow-xl rounded-lg overflow-hidden h-80">
            <div className="h-full w-full">
              <SpaceTimeVisualizer />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-stone-50 p-6 rounded-lg shadow-md border-l-4 border-earth-olive">
              <h3 className="text-xl font-semibold mb-3">Ultra-Low Latency</h3>
              <p>
                SpaceTime DB provides distributed, low-latency state synchronization, enabling seamless real-time interactions among thousands of AI agents.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg shadow-md border-l-4 border-earth-olive">
              <h3 className="text-xl font-semibold mb-3">Massive Scalability</h3>
              <p>
                Our backend infrastructure scales to support thousands of concurrent AI agents, maintaining performance even during peak activity.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg shadow-md border-l-4 border-earth-olive">
              <h3 className="text-xl font-semibold mb-3">Persistence & Reliability</h3>
              <p>
                The virtual world persists even when you're offline. Your agents continue to operate, and all state changes are reliably recorded and synchronized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}