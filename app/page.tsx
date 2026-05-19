"use client";

import Hero from './components/hero';
import HowItWorks from './components/howitworks';
import Testimonials from './components/testimonials';
import AppPreview from './components/app-preview';
import Features from './components/features';
import CTA from './components/cta';
import { useHeroEffects } from './hooks/useHeroEffects';

export default function Home() {

  useHeroEffects();

  return (
    <>
           {/* ===== NAVBAR ===== */}

  {/* ===== HERO — CINEMATIC VIDEO ===== */}
      <Hero />

  {/* ===== HOW IT WORKS ===== */}
  
      <HowItWorks />

  {/* ===== APP PREVIEW ===== */}
      <AppPreview />

  {/* ===== FEATURES ===== */}
      <Features />

        {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

  {/* ===== CTA with Evil Eye ===== */}

      <CTA />
  {/* ===== FOOTER ===== */}

      </>
  );
  
}
