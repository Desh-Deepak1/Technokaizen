"use client";

import React from 'react';
import { Check, Zap, Server, Crown } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto border-b border-white/5 relative z-20">
      
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cyber-white uppercase">Choose Your Matrix Plan</h2>
        <p className="text-cyber-gray mt-6 text-xl">Scalable enterprise architecture designed for your workload.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        
        {/* BASIC PLAN */}
        <div className="p-10 rounded-xl border border-white/10 bg-[#0d1321]/80 hover:border-white/30 transition-colors h-full flex flex-col">
          <div className="w-14 h-14 rounded border border-white/10 flex items-center justify-center text-cyber-gray mb-6"><Zap size={24}/></div>
          <h3 className="text-3xl font-bold text-cyber-white">Starter Node</h3>
          <p className="text-base md:text-lg text-cyber-gray mt-4 min-h-[60px] mb-8 leading-relaxed">Base infrastructure & management plan for early-stage apps.</p>
          
          <p className="text-sm md:text-base text-cyber-cyan uppercase tracking-widest font-bold mb-6">Services Included</p>
          <ul className="space-y-4 text-base md:text-lg text-cyber-gray flex-grow mb-10">
            <li className="flex items-start gap-3"><Check size={20} className="text-cyber-cyan shrink-0 mt-1"/> Shared Cloud Hosting</li>
            <li className="flex items-start gap-3"><Check size={20} className="text-cyber-cyan shrink-0 mt-1"/> Standard Security Firewall</li>
            <li className="flex items-start gap-3"><Check size={20} className="text-cyber-cyan shrink-0 mt-1"/> Weekly Database Backups</li>
            <li className="flex items-start gap-3"><Check size={20} className="text-cyber-cyan shrink-0 mt-1"/> Standard Support (Email)</li>
          </ul>
          <a href="#connect" className="w-full py-4 rounded border border-cyber-cyan text-cyber-cyan text-center font-bold text-lg uppercase tracking-wider hover:bg-cyber-cyan hover:text-black transition-colors block">Get Started</a>
        </div>

        {/* STANDARD PLAN */}
        <div className="relative p-12 rounded-xl border border-cyber-cyan bg-[#0a0f18] shadow-[0_0_40px_rgba(0,255,204,0.15)] transform lg:scale-105 z-10 h-full flex flex-col">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-cyber-cyan text-black px-6 py-2 text-sm font-bold uppercase tracking-widest rounded-full">
            Best Seller
          </div>
          <div className="w-14 h-14 rounded border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan mb-6"><Server size={24}/></div>
          <h3 className="text-3xl font-bold text-cyber-white">Standard Matrix</h3>
          <p className="text-base md:text-lg text-cyber-gray mt-4 min-h-[60px] mb-8 leading-relaxed">Advanced AI-hosting & dedicated computing resources.</p>
          
          <p className="text-sm md:text-base text-cyber-cyan uppercase tracking-widest font-bold mb-6">Includes Basic Plan +</p>
          <ul className="space-y-4 text-base md:text-lg text-cyber-gray flex-grow mb-10">
            <li className="flex items-start gap-3"><Check size={20} className="text-cyber-cyan shrink-0 mt-1"/> Dedicated Server Node</li>
            <li className="flex items-start gap-3"><Check size={20} className="text-cyber-cyan shrink-0 mt-1"/> High-Speed NVMe Storage</li>
            <li className="flex items-start gap-3"><Check size={20} className="text-cyber-cyan shrink-0 mt-1"/> AI-Model Deployment Support</li>
            <li className="flex items-start gap-3"><Check size={20} className="text-cyber-cyan shrink-0 mt-1"/> Automated Daily Backups</li>
            <li className="flex items-start gap-3"><Check size={20} className="text-cyber-cyan shrink-0 mt-1"/> Zero-Trust Architecture Setup</li>
          </ul>
          <a href="#connect" className="w-full py-4 rounded bg-cyber-cyan text-black text-center font-bold text-lg uppercase tracking-wider hover:bg-[#00e6b8] transition-colors block">Get Started</a>
        </div>

        {/* CUSTOM PLAN */}
        <div className="p-10 rounded-xl border border-white/10 bg-[#0d1321]/80 hover:border-white/30 transition-colors h-full flex flex-col">
          <div className="w-14 h-14 rounded border border-white/10 flex items-center justify-center text-cyber-gray mb-6"><Crown size={24}/></div>
          <h3 className="text-3xl font-bold text-cyber-white">Custom Arch.</h3>
          <p className="text-base md:text-lg text-cyber-gray mt-4 min-h-[60px] mb-8 leading-relaxed">Fully scalable barefoot metal for enterprise giants.</p>
          
          <p className="text-sm md:text-base text-cyber-cyan uppercase tracking-widest font-bold mb-6">Customization Includes</p>
          <ul className="space-y-4 text-base md:text-lg text-cyber-gray flex-grow mb-10">
            <li className="flex items-start gap-3"><Check size={20} className="text-cyber-cyan shrink-0 mt-1"/> Multi-cluster Load Balancing</li>
            <li className="flex items-start gap-3"><Check size={20} className="text-cyber-cyan shrink-0 mt-1"/> Dedicated DevOps Team</li>
            <li className="flex items-start gap-3"><Check size={20} className="text-cyber-cyan shrink-0 mt-1"/> Custom Hardware Provisioning</li>
            <li className="flex items-start gap-3"><Check size={20} className="text-cyber-cyan shrink-0 mt-1"/> Priority 24/7/365 Phone Support</li>
          </ul>
          <a href="#connect" className="w-full py-4 rounded border border-cyber-cyan text-cyber-cyan text-center font-bold text-lg uppercase tracking-wider hover:bg-cyber-cyan hover:text-black transition-colors block">Get Started</a>
        </div>

      </div>
    </section>
  );
}