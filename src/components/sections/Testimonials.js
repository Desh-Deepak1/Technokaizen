"use client";

import React from 'react';
import { siteContent } from '../../../config/content';

export default function Testimonials() {
  const targetData = siteContent.testimonials || {};
  const heading = targetData.heading || "Client Transformation Results";
  const logs = targetData.list || [];

  return (
    <section id="testimonials" className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto border-b border-white/5 relative z-20">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cyber-white uppercase">{heading}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {logs.map((log, index) => (
          <div key={log.id || index} className="group w-full h-[360px] cursor-pointer" style={{ perspective: '1000px' }}>
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl border border-white/10 bg-[#0d1321] p-8 flex flex-col justify-between">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-cyber-white">{log.author}</h3>
                </div>
                <div className="flex-grow flex items-center justify-center text-center px-4">
                  <p className="text-base text-cyber-white/80">Hover to read transformation snapshot.</p>
                </div>
                <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-6">
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-cyber-gray uppercase mb-1">Views</p>
                    <p className="text-xl font-bold text-cyber-cyan">{log.views || "10k+"}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-cyber-gray uppercase mb-1">Engage</p>
                    <p className="text-xl font-bold text-cyber-cyan">{log.interactions || "5k+"}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-cyber-gray uppercase mb-1">Reach</p>
                    <p className="text-xl font-bold text-cyber-cyan">{log.impressions || "20k+"}</p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl border border-cyber-cyan bg-[#0a0f18] p-10 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(0,255,204,0.1)]">
                <p className="text-sm text-cyber-gray uppercase tracking-widest mb-6">Results Snapshot</p>
                <h3 className="text-2xl font-bold text-cyber-cyan mb-6">{log.author}</h3>
                <p className="text-lg md:text-xl text-cyber-white text-center leading-relaxed">
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