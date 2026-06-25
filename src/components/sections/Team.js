"use client";

import React from 'react';
import { siteContent } from '../../../config/content';

export default function Team() {
  // Safe data fetching from your exact content.js structure
  const targetData = siteContent.team || {};
  const heading = targetData.heading || "Core Engineering & Leadership";
  const members = targetData.members || [];

  // Failsafe: If no members are found, don't crash, just show nothing
  if (!members || members.length === 0) {
    return null; 
  }

  return (
    <section id="team" className="w-full py-24 px-4 md:px-8 max-w-6xl mx-auto border-b border-white/5 relative z-20">
      
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-cyber-white uppercase">{heading}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {members.map((member, index) => (
          
          <div key={member.id || index} className="group w-full h-[420px] cursor-pointer" style={{ perspective: '1000px' }}>
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* FRONT OF CARD (Photo) */}
              <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl border border-white/10 overflow-hidden bg-[#0d1321]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top opacity-80"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500/0d1321/00FFCC?text=Photo' }}
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-cyber-white">{member.name}</h3>
                  <p className="text-xs text-cyber-cyan mt-1 uppercase tracking-widest">{member.role}</p>
                </div>
              </div>

              {/* BACK OF CARD (Social Links & Details) */}
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl border-2 border-cyber-cyan bg-[#0a0f18] p-8 flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(0,255,204,0.15)]">
                <p className="text-xs text-cyber-cyan font-bold uppercase tracking-widest mb-2">Connect</p>
                <h3 className="text-2xl font-bold text-cyber-white">{member.name}</h3>
                <p className="text-sm text-cyber-gray mt-2 mb-10">{member.role}</p>

                <div className="flex flex-col gap-4 w-full px-4">
                  {/* LinkedIn Render Logic */}
                  {member.socials?.linkedin && member.socials.linkedin !== "#" && (
                    <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="w-full py-3 border border-cyber-cyan/50 rounded flex items-center justify-center gap-2 text-cyber-white hover:bg-cyber-cyan hover:text-black font-bold transition-colors">
                      LinkedIn
                    </a>
                  )}
                  {/* Instagram Render Logic */}
                  {member.socials?.instagram && member.socials.instagram !== "#" && (
                    <a href={member.socials.instagram} target="_blank" rel="noreferrer" className="w-full py-3 border border-cyber-cyan/50 rounded flex items-center justify-center gap-2 text-cyber-white hover:bg-cyber-cyan hover:text-black font-bold transition-colors">
                      Instagram
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>

        ))}
      </div>
    </section>
  );
}