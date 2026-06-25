"use client";

import React, { useState } from 'react';
import { Loader2, CheckCircle2, MapPin, Mail, Phone } from 'lucide-react';
import { siteContent } from '../../../config/content';

export default function Connect() {
  const [uiStatus, setUiStatus] = useState('idle');
  const logoText = siteContent.header?.logoText || "Technokaizen";

  const handleFormSubmission = (e) => {
    e.preventDefault();
    setUiStatus('loading');
    setTimeout(() => { setUiStatus('success'); }, 1800);
  };

  return (
    <div id="connect" className="w-full relative bg-[#0b1121] pt-24 border-t border-white/5 z-20">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-cyber-white mb-6">Let's Connect</h2>
          <p className="text-lg text-cyber-gray mb-10 leading-relaxed">
            We are the next-generation infrastructure layer for AI models and modern enterprises. Operating at the intersection of high-performance computing and absolute zero-trust architecture. Reach out to transform your digital infrastructure.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-cyber-gray">
              <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center text-cyber-cyan"><Mail size={20}/></div>
              {/* Email Updated */}
              <span className="text-base font-semibold text-cyber-white">contact@technokaizen.com</span>
            </div>
            <div className="flex items-center gap-4 text-cyber-gray">
              <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center text-cyber-cyan"><Phone size={20}/></div>
              <span className="text-base font-semibold text-cyber-white">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4 text-cyber-gray">
              <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center text-cyber-cyan"><MapPin size={20}/></div>
              <span className="text-base font-semibold text-cyber-white">Tech Park, Cyber City, India</span>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-xl border border-white/10 bg-[#111827]/90 shadow-2xl">
          {uiStatus !== 'success' ? (
            <form onSubmit={handleFormSubmission} className="space-y-5">
              <h3 className="text-2xl font-bold text-cyber-white mb-6">Send a Message</h3>
              <div>
                <label className="block text-xs uppercase tracking-wider text-cyber-gray mb-2">Name</label>
                <input required type="text" className="w-full bg-[#0b1121] border border-white/10 rounded-lg px-4 py-3 text-cyber-white focus:outline-none focus:border-cyber-cyan transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-cyber-gray mb-2">Email</label>
                <input required type="email" className="w-full bg-[#0b1121] border border-white/10 rounded-lg px-4 py-3 text-cyber-white focus:outline-none focus:border-cyber-cyan transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-cyber-gray mb-2">Requirements</label>
                <textarea required rows={4} className="w-full bg-[#0b1121] border border-white/10 rounded-lg px-4 py-3 text-cyber-white focus:outline-none focus:border-cyber-cyan transition-colors resize-none" />
              </div>
              <button disabled={uiStatus === 'loading'} type="submit" className="w-full py-4 rounded-lg bg-cyber-cyan text-black font-bold uppercase tracking-wider hover:bg-[#00e6b8] transition-colors flex items-center justify-center gap-2 mt-4">
                {uiStatus === 'loading' ? <><Loader2 size={18} className="animate-spin" /> Processing...</> : 'Establish Connection'}
              </button>
            </form>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
              <CheckCircle2 size={60} className="text-cyber-cyan mb-4" />
              <h4 className="text-2xl font-bold text-cyber-white">Message Sent Successfully</h4>
              <p className="text-cyber-gray">Our team will get back to you shortly.</p>
              <button onClick={() => setUiStatus('idle')} className="mt-8 px-6 py-2 border border-cyber-cyan text-cyber-cyan rounded hover:bg-cyber-cyan/10">Send Another</button>
            </div>
          )}
        </div>
      </div>

      <footer className="w-full bg-[#070b14] border-t border-white/10 pt-16 pb-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-cyber-white tracking-widest mb-4">{logoText}</h3>
            <p className="text-cyber-gray leading-relaxed max-w-sm">Providing absolute zero-trust architecture and blazing fast enterprise hosting worldwide.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-cyber-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-cyber-gray">
              <li><a href="#services" className="hover:text-cyber-cyan transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-cyber-cyan transition-colors">Client Results</a></li>
              <li><a href="#faq" className="hover:text-cyber-cyan transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-cyber-white mb-4">Legal</h4>
            <ul className="space-y-2 text-cyber-gray">
              <li><a href="#" className="hover:text-cyber-cyan transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyber-cyan transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-cyber-gray/50">
          <p>© 2026 {logoText}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">CYBERINFRASTRUCTURE MATRIX ACTIVE</p>
        </div>
      </footer>
    </div>
  );
}