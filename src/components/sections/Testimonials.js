"use client";

import React from 'react';
import { siteContent } from '../../../config/content';

export default function Testimonials() {
  const targetData = siteContent.testimonials || {};
  const heading = targetData.heading || "Client Transformation Results";
  
  const fallbackLogs = [
    { id: 1, author: "TechCorp Inc.", sub: "Enterprise Portal", quote: "Zero downtime during our highest traffic spike. Absolute game changer.", views: "200k+", interactions: "10k+", impressions: "50k+" },
    { id: 2, author: "AI Solutions Ltd.", sub: "Neural Network App", quote: "Latency dropped by 80% after migrating our hosting.", views: "40k+", interactions: "10k+", impressions: "20k+" },
    { id: 3, author: "Cyber Secure", sub: "Data Vault System", quote: "Security standards finally met our enterprise requirements.", views: "20k+", interactions: "2k+", impressions: "10k+" }
  ];
  const logs = targetData.list || targetData.items || fallbackLogs;

  return (
    <section id="testimonials" className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto border-b border-white/5 relative z-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-cyber-white uppercase">{heading}</h2>
        <p className="text-cyber-gray mt-4">We work with enterprise owners, startups and professionals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {logs.map((log, index) => (
          <div key={log.id || index} className="group perspective-1000 w-full h-[320px] cursor-pointer">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
              
              {/* FRONT OF CARD */}
              <div className="absolute inset-0 backface-hidden rounded-xl border border-white/10 bg-[#0d1321] p-6 flex flex-col justify-between">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-cyber-white">{log.author}</h3>
                  <p className="text-xs text-cyber-gray uppercase tracking-widest mt-1">{log.sub}</p>
                </div>
                
                <div className="flex-grow flex items-center justify-center text-center px-4">
                  <p className="text-sm text-cyber-white/80">Hover to read transformation snapshot.</p>
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                  <div className="text-center">
                    <p className="text-[10px] text-cyber-gray uppercase">Total Views</p>
                    <p className="text-lg font-bold text-cyber-cyan">{log.views || "10k+"}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-cyber-gray uppercase">Interactions</p>
                    <p className="text-lg font-bold text-cyber-cyan">{log.interactions || "5k+"}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-cyber-gray uppercase">Impressions</p>
                    <p className="text-lg font-bold text-cyber-cyan">{log.impressions || "20k+"}</p>
                  </div>
                </div>
              </div>

              {/* BACK OF CARD */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl border border-cyber-cyan bg-[#0a0f18] p-8 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(0,255,204,0.1)]">
                <p className="text-xs text-cyber-gray uppercase tracking-widest mb-4">Results Snapshot</p>
                <h3 className="text-xl font-bold text-cyber-cyan mb-4">{log.author}</h3>
                <p className="text-base text-cyber-white text-center leading-relaxed">
                  "{log.quote}"
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}