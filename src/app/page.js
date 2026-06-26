"use client";

import React from 'react';
import Header from '../components/sections/Header';
import About from '../components/sections/About';
import WhatWeDo from '../components/sections/WhatWeDo';
import Services from '../components/sections/Services';
import Pricing from '../components/sections/Pricing';
import Collaborators from '../components/sections/Collaborators';
import Testimonials from '../components/sections/Testimonials';
import Team from '../components/sections/Team';
import FAQ from '../components/sections/FAQ';
import Connect from '../components/sections/Connect';

export default function Home() {
  return (
    // FIXED: bg-transparent applied so grid shines through
    <main className="w-full relative bg-transparent flex flex-col items-center">
      <Header />
      <div className="w-full relative z-10 flex flex-col items-center pt-20">
        <About />
        <WhatWeDo />
        <Services />
        <Pricing />
        <Collaborators />
        <Testimonials />
        <Team />
        <FAQ />
        <Connect />
      </div>
    </main>
  );
}