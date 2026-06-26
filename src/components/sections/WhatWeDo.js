"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../../../config/content';

export default function WhatWeDo() {
  const targetData = siteContent.whatWeDo || {};
  const heading = targetData.heading || "NEXT-GEN INFRASTRUCTURE";
  const subHeading = targetData.subHeading || "Engineered for speed, built for security.";
  const blocks = targetData.blocks || [];

  return (
    <section id="what-we-do" className="w-full py-24 overflow-hidden border-b border-white/5 relative z-20 bg-transparent">
      
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-cyber-white uppercase">{heading}</h2>
        <p className="text-cyber-gray mt-4 text-xl">{subHeading}</p>
      </div>

      <div className="flex w-full overflow-hidden">
        <motion.div 
          className="flex gap-6 px-4"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            repeat: Infinity, 
            duration: 30, 
            ease: "linear" 
          }}
        >
          {[...blocks, ...blocks].map((block, index) => (
            <div 
              key={index} 
              className="w-[380px] shrink-0 p-8 rounded-xl border border-white/10 bg-[#0d1321] hover:border-cyber-cyan transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <h3 className="text-2xl font-bold text-cyber-white mb-6">
                {block.title}
              </h3>
              
              {/* FIXED: Increased text size from text-sm to text-lg and improved line height */}
              <p className="text-lg text-cyber-gray leading-relaxed mb-8 flex-grow tracking-wide">
                {block.description}
              </p>
              
              <a 
                href="#pricing" 
                className="w-full py-3 rounded border border-cyber-cyan text-cyber-cyan text-center font-bold uppercase tracking-wider hover:bg-cyber-cyan hover:text-black transition-colors block"
              >
                Select Plan
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}