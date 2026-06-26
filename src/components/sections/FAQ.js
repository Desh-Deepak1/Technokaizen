"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { siteContent } from '../../../config/content';

export default function FAQ() {
  const targetData = siteContent.faq || {};
  const heading = targetData.heading || "Frequently Asked Questions";
  const faqList = targetData.pairs || [];
  
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-32 px-4 md:px-8 max-w-5xl mx-auto border-b border-white/5 relative z-20">
      
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cyber-white uppercase font-sans">{heading}</h2>
      </div>

      <div className="flex flex-col gap-6 w-full">
        {faqList.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={item.id || index}
              className={`w-full rounded-xl border overflow-hidden transition-all duration-300 ${
                isActive 
                  ? 'bg-[#0d1321] border-cyber-cyan/40 shadow-[0_5px_20px_rgba(0,255,204,0.1)]' 
                  : 'bg-[#0d1321]/60 border-white/10 hover:border-white/30 hover:bg-[#0d1321]/80'
              }`}
            >
              <button onClick={() => toggleAccordion(index)} className="w-full p-8 flex items-center justify-between text-left focus:outline-none group">
                <div className="flex items-center gap-6">
                  <HelpCircle size={28} className={isActive ? 'text-cyber-cyan' : 'text-cyber-gray'} />
                  {/* QUESTION FONT INCREASED */}
                  <span className={`text-xl md:text-2xl font-bold transition-colors ${isActive ? 'text-cyber-cyan' : 'text-cyber-white'}`}>
                    {item.question}
                  </span>
                </div>
                <div className={`ml-4 shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all ${isActive ? 'border-cyber-cyan text-cyber-cyan bg-cyber-cyan/10' : 'border-white/10 text-cyber-gray'}`}>
                  {isActive ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {isActive && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                    {/* ANSWER FONT INCREASED */}
                    <div className="px-8 pb-8 pt-2 ml-14 text-lg md:text-xl text-cyber-gray leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}