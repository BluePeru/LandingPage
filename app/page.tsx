"use client";

import Hero from './components/hero';
import HowItWorks from './components/como-funciona';
import Testimonials from './components/testimonios';
import AppPreview from './components/vistaprevia-app';
import Features from './components/funciones';
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
