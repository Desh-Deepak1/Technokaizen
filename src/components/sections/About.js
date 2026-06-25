"use client";

import React, { useState, useEffect } from 'react';
import { siteContent } from '../../../config/content';

export default function About() {
  const data = siteContent.about || {};
  const heading = data.heading || "Enterprise Infrastructure for AI and Web Applications";
  const description = data.description || data.subheading || data.content || data.text || "We are the next-generation infrastructure layer for AI models and modern enterprises. Operating at the intersection of high-performance computing and absolute zero-trust architecture, we eliminate storage bottlenecks and downtime. We don't just host web applications; we fortify and scale the digital brain of your organization.";
  const keywords = data.keywords || ["zero-trust", "AI models", "scalability"];
  
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeywordIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [keywords.length]);

  return (
    <section id="about" className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto border-b border-white/5 relative z-20">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-cyber-white font-sans mb-8 leading-tight">
          {heading}
        </h2>
        
        <p className="text-base md:text-lg text-cyber-gray font-sans leading-relaxed mb-8">
          {description}
        </p>

        <div className="flex items-center space-x-4 border-l-2 border-cyber-cyan pl-6 mt-12 h-12 overflow-hidden">
          <span className="font-mono text-xs uppercase tracking-widest text-cyber-gray">Optimized For</span>
          
          <div className="relative h-full flex items-center w-64">
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className="absolute font-mono text-sm md:text-base font-bold text-cyber-cyan tracking-wider transition-all duration-500 ease-in-out"
                style={{
                  opacity: index === currentKeywordIndex ? 1 : 0,
                  transform: `translateY(${index === currentKeywordIndex ? '0%' : index < currentKeywordIndex ? '-100%' : '100%'})`,
                }}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}