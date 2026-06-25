"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ImageMinus, Hexagon } from 'lucide-react';
import { siteContent } from '../../../config/content';

export default function Collaborators() {
  const { heading, nodes } = siteContent.collaborators;

  return (
    <section id="collaborators" className="w-full py-24 px-4 md:px-8 max-w-6xl mx-auto border-b border-white/5 relative z-20">
      
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-cyber-white font-sans max-w-xl mx-auto leading-tight">
          {heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl mx-auto">
        {nodes && nodes.map((node, index) => {
          const isMnnit = node.id.includes('mnnit') || node.name.toLowerCase().includes('mnnit');
          const logoPath = isMnnit ? '/images/mnnit.png' : '/images/iitbhu.png';

          return (
            <motion.div
              key={node.id || index}
              whileHover={{ 
                y: -6,
                borderColor: "rgba(0, 255, 204, 0.4)",
                boxShadow: "0 20px 40px rgba(0, 255, 204, 0.08)"
              }}
              className="relative p-10 rounded-xl border border-white/10 bg-[#0d1321]/70 backdrop-blur-md flex flex-col items-center justify-center gap-6 overflow-hidden group cursor-pointer transition-all duration-300"
            >
              
              {/* Cyber Bracket Frame Borders */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/10 group-hover:border-cyber-cyan transition-colors duration-300" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/10 group-hover:border-cyber-cyan transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/10 group-hover:border-cyber-cyan transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-cyber-cyan transition-colors duration-300" />

              {/* Large High-Visibility Frame for Logos */}
              <div className="relative w-32 h-32 rounded-xl bg-black/50 border border-white/5 flex items-center justify-center overflow-hidden p-4 group-hover:border-cyber-cyan/20 transition-all duration-300">
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 flex items-center justify-center text-cyber-cyan">
                  <Hexagon size={110} className="animate-spin" style={{ animationDuration: '16s' }} />
                </div>

                <img 
                  src={logoPath} 
                  alt=""
                  className="w-full h-full object-contain filter brightness-100 group-hover:scale-105 transition-transform duration-300 relative z-10" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{ display: 'none' }} className="w-full h-full items-center justify-center text-white/20">
                  <ImageMinus size={36} />
                </div>
              </div>

              <div className="text-center z-10">
                <div className="text-lg font-bold tracking-wider uppercase text-cyber-white group-hover:text-cyber-cyan transition-colors duration-300">
                  {node.name}
                </div>
                {/* DELETED: Removed [ COHORT_PARTNER ] text element from here entirely */}
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}