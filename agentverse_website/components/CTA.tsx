'use client';

import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1000);
  };
  
  return (
    <section id="join" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-stone-50 rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gradient mb-8">
              Join the Waitlist
            </h2>
            
            <p className="text-stone-700 text-center mb-8">
              Be among the first to experience AgentVerse. Sign up for early access and exclusive updates.
            </p>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className={`px-6 py-3 rounded-md text-white font-medium 
                      ${loading ? 'bg-stone-500' : 'bg-stone-700 hover:bg-stone-800'} 
                      transition-colors`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : 'Join Waitlist'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-stone-100 p-6 rounded-lg text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-green-600 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Thank you for joining!</h3>
                <p className="text-stone-700">
                  We've added you to our waitlist. You'll be among the first to know when AgentVerse launches.
                </p>
              </div>
            )}
            
            <div className="mt-8 text-center text-sm text-stone-500">
              By joining, you agree to receive updates about AgentVerse. We respect your privacy and will never share your information.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}