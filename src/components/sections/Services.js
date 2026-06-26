"use client";

import React from 'react';
import { Layers, Terminal, Cpu, ShieldCheck } from 'lucide-react';
import { siteContent } from '../../../config/content';

export default function Services() {
  const targetData = siteContent.services || {};
  const items = targetData.items || [];
  
  const getIcon = (idx) => {
    const icons = [<Layers size={32}/>, <Terminal size={32}/>, <ShieldCheck size={32}/>, <Cpu size={32}/>];
    return icons[idx] || <Layers size={32}/>;
  };

  return (
    <section id="services" className="w-full py-24 px-4 md:px-8 max-w-6xl mx-auto border-b border-white/5 relative z-20 bg-transparent">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-cyber-white uppercase">{targetData.heading}</h2>
      </div>

      <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
        {items.map((service, index) => (
          <div key={service.id} className="sticky top-28 p-8 md:p-10 rounded-xl border border-white/10 bg-[#0d1321] hover:border-cyber-cyan transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-10 shadow-2xl">
            <div className="w-20 h-20 rounded-lg bg-black/40 border border-white/5 flex items-center justify-center shrink-0 text-cyber-cyan">
              {getIcon(index)}
            </div>
            <div>
              {/* FIXED: Increased Heading Size */}
              <h3 className="font-sans font-bold text-2xl text-cyber-white mb-4">{service.title}</h3>
              
              {/* FIXED: Increased Text Size from text-sm to text-lg with relaxed leading */}
              <p className="text-lg text-cyber-gray leading-relaxed font-sans tracking-wide">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}