'use client';

import { useState } from 'react';
import Link from 'next/link';

const testimonials = [
  {
    id: 1,
    content: "AgentVerse represents the future of AI-driven gaming. The ability to code and deploy custom agents in a persistent world has unlimited potential.",
    author: "Alex Chen",
    role: "AI Researcher",
    avatar: "https://i.pravatar.cc/100?img=23"
  },
  {
    id: 2,
    content: "As a game developer, I'm fascinated by the emergent behaviors that arise when thousands of AI agents interact in this environment.",
    author: "Sophia Rodriguez",
    role: "Game Developer",
    avatar: "https://i.pravatar.cc/100?img=20"
  },
  {
    id: 3,
    content: "The community is incredibly supportive. I've learned more about practical AI implementation here than in any course.",
    author: "Marcus Johnson",
    role: "Computer Science Student",
    avatar: "https://i.pravatar.cc/100?img=3"
  },
];

const events = [
  {
    id: 1,
    title: "AgentVerse Launch Tournament",
    date: "June 15, 2025",
    description: "Compete in our inaugural tournament with your custom AI agents for a chance to win prizes and recognition."
  },
  {
    id: 2,
    title: "AI Agent Design Workshop",
    date: "Monthly",
    description: "Join our regular workshops to learn advanced techniques for designing, training, and optimizing your AI agents."
  },
  {
    id: 3,
    title: "Community Showcase",
    date: "Weekly",
    description: "Weekly showcase of the most innovative agent designs and strategies from our community members."
  },
];

type TabType = 'testimonials' | 'events' | 'resources';

export default function Community() {
  const [activeTab, setActiveTab] = useState<TabType>('testimonials');
  
  return (
    <section id="community" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-4">Join Our Community</h2>
          <p className="max-w-2xl mx-auto text-lg text-stone-700">
            Connect with fellow AI enthusiasts, share knowledge, and participate in exclusive events.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button 
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  activeTab === 'testimonials' 
                    ? 'bg-stone-700 text-white' 
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
                onClick={() => setActiveTab('testimonials')}
              >
                Community Voices
              </button>
              <button 
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'events' 
                    ? 'bg-stone-700 text-white' 
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
                onClick={() => setActiveTab('events')}
              >
                Upcoming Events
              </button>
              <button 
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  activeTab === 'resources' 
                    ? 'bg-stone-700 text-white' 
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
                onClick={() => setActiveTab('resources')}
              >
                Resources
              </button>
            </div>
          </div>
          
          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-medium text-stone-900">{testimonial.author}</div>
                      <div className="text-sm text-stone-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-stone-700 italic">{testimonial.content}</p>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'events' && (
            <div className="space-y-6">
              {events.map((event) => (
                <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-stone-900 text-lg">{event.title}</h3>
                      <p className="text-stone-700 mt-2">{event.description}</p>
                    </div>
                    <div className="text-sm font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                      {event.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'resources' && (
            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <div>
                <h3 className="font-semibold text-stone-900 text-lg mb-3">Documentation</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-stone-600 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <Link href="#" className="text-stone-700 hover:text-stone-900">Getting Started Guide</Link>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-stone-600 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <Link href="#" className="text-stone-700 hover:text-stone-900">API Reference</Link>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-stone-600 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <Link href="#" className="text-stone-700 hover:text-stone-900">Strategy Guide: Building Effective Agents</Link>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-stone-900 text-lg mb-3">Community Channels</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-stone-600 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                    <Link href="https://discord.gg/agentverse" target="_blank" className="text-stone-700 hover:text-stone-900">Discord Community</Link>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-stone-600 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    <Link href="https://github.com/yourorg/agentverse" target="_blank" className="text-stone-700 hover:text-stone-900">GitHub Repository</Link>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-stone-600 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                    </svg>
                    <Link href="#" className="text-stone-700 hover:text-stone-900">Community Forum</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="https://discord.gg/agentverse" target="_blank" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-stone-700 hover:bg-stone-800">
            Join Our Discord
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}