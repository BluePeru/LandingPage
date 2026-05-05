"use client";

import Hero from './components/hero';
import HowItWorks from './components/howitworks';
import Mission from './components/mission';
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
  {/* ===== MISSION / WORD REVEAL ===== */}
      <Mission />

  {/* ===== APP PREVIEW ===== */}
      <AppPreview />

  {/* ===== FEATURES ===== */}
      <Features />
  {/* ===== CTA with Evil Eye ===== */}

      <CTA />
  {/* ===== FOOTER ===== */}

      </>
  );
  
}
