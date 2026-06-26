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
    <section id="what-we-do" className="w-full py-24 overflow-hidden border-b border-white/5 relative z-20">
      
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cyber-white uppercase">{heading}</h2>
        <p className="text-cyber-gray mt-6 text-xl">{subHeading}</p>
      </div>

      <div className="flex w-full overflow-hidden">
        <motion.div 
          className="flex gap-8 px-4"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {[...blocks, ...blocks].map((block, index) => (
            <div 
              key={index} 
              className="w-[400px] shrink-0 p-10 rounded-xl border border-white/10 bg-[#0d1321] hover:border-cyber-cyan transition-all duration-300 flex flex-col justify-between"
            >
              <h3 className="text-3xl font-bold text-cyber-white mb-6">
                {block.title}
              </h3>
              {/* TEXT SIZE INCREASED HERE */}
              <p className="text-base md:text-lg text-cyber-gray leading-relaxed mb-8 flex-grow">
                {block.description}
              </p>
              <a 
                href="#pricing" 
                className="w-full py-4 rounded border border-cyber-cyan text-cyber-cyan text-center font-bold text-lg uppercase tracking-wider hover:bg-cyber-cyan hover:text-black transition-colors block"
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