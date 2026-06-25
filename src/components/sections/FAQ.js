"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { siteContent } from '../../../config/content';

export default function FAQ() {
  const targetData = siteContent.faq || {};
  const heading = targetData.heading || "Frequently Asked Questions";
  
  // EXACTLY 8 Relevant Questions
  const fallbackFaq = [
    { id: 1, question: "How secure is your enterprise hosting infrastructure?", answer: "We utilize military-grade encryption and a strict zero-trust architecture. Every data packet is verified, ensuring your intellectual property is never compromised." },
    { id: 2, question: "Can we scale our server storage dynamically?", answer: "Absolutely. Our cloud infrastructure allows for real-time elastic scaling. You can upgrade storage and bandwidth on the fly with zero downtime." },
    { id: 3, question: "Are your servers optimized for AI and Machine Learning?", answer: "Yes, we provide dedicated GPU clusters and high-performance NVMe storage networks specifically configured for low-latency AI model training and deployment." },
    { id: 4, question: "What is your uptime guarantee?", answer: "We offer a strict 99.99% uptime Service Level Agreement (SLA). Our distributed nodes ensure failover protection against regional outages." },
    { id: 5, question: "Do you assist with server migration?", answer: "Yes, our engineering team provides end-to-end migration services. We ensure your existing web applications are moved to our matrix seamlessly." },
    { id: 6, question: "How often are backups performed?", answer: "Automated snapshots are taken every 6 hours and stored across geographically redundant off-site secure vaults." },
    { id: 7, question: "Do you offer custom bare-metal servers?", answer: "Yes. For enterprise clients requiring maximum control and isolation, we provide fully customizable bare-metal provisioning." },
    { id: 8, question: "What kind of technical support do you provide?", answer: "We provide 24/7/365 monitoring and Tier-3 engineering support via priority ticketing, email, and emergency phone channels." }
  ];
  const faqList = targetData.list || targetData.items || targetData.questions || fallbackFaq;
  
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-32 px-4 md:px-8 max-w-5xl mx-auto border-b border-white/5 relative z-20">
      
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-cyber-white font-sans">{heading}</h2>
      </div>

      <div className="flex flex-col gap-4 w-full">
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
              <button onClick={() => toggleAccordion(index)} className="w-full p-6 flex items-center justify-between text-left focus:outline-none group">
                <div className="flex items-center gap-4">
                  <HelpCircle size={20} className={isActive ? 'text-cyber-cyan' : 'text-cyber-gray'} />
                  {/* TEXT IS NOW CRISP WHITE BY DEFAULT */}
                  <span className={`text-lg font-bold transition-colors ${isActive ? 'text-cyber-cyan' : 'text-cyber-white'}`}>
                    {item.question}
                  </span>
                </div>
                <div className={`ml-4 shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all ${isActive ? 'border-cyber-cyan text-cyber-cyan bg-cyber-cyan/10' : 'border-white/10 text-cyber-gray'}`}>
                  {isActive ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {isActive && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                    {/* READABLE LIGHT GRAY FOR ANSWERS */}
                    <div className="px-6 pb-6 pt-2 ml-10 text-base text-cyber-gray leading-relaxed">
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