"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { siteContent } from '../../../config/content';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoText = siteContent.header?.logoText || "SERVER.STARTUP";
  
  // FIXED: Ascending Order based on page layout flow
  const navLinks = [
    { name: "Services", href: "#what-we-do" },
    { name: "Pricing", href: "#pricing" },
    { name: "Results", href: "#testimonials" },
    { name: "Team", href: "#team" },
    { name: "FAQ", href: "#faq" }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-[#030712]/95 backdrop-blur-xl border-b border-white/10 shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <a href="#" className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105">
          <Shield size={28} className="text-cyber-cyan" />
          <span className="font-bold text-xl md:text-2xl tracking-widest text-cyber-white">{logoText}</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="text-sm font-semibold text-cyber-gray hover:text-cyber-cyan transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#connect" className="px-6 py-2.5 border border-cyber-cyan text-cyber-cyan rounded hover:bg-cyber-cyan hover:text-black font-bold transition-all shadow-[0_0_15px_rgba(0,255,204,0.1)] hover:shadow-[0_0_20px_rgba(0,255,204,0.4)]">
            CONNECT
          </a>
        </nav>

        <button className="md:hidden text-cyber-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#030712] border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-cyber-gray hover:text-cyber-cyan block">
              {link.name}
            </a>
          ))}
          <a href="#connect" onClick={() => setMobileMenuOpen(false)} className="mt-2 block text-center w-full px-6 py-3 bg-cyber-cyan text-black font-bold rounded">
            CONNECT
          </a>
        </div>
      )}
    </header>
  );
}