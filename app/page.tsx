"use client";

import {useEffect, useState} from 'react';

import Loader from './components/loader';
import Navbar from './components/navbar';
import Hero from './components/hero';
import HowItWorks from './components/howitworks';
import Mission from './components/mission';
import AppPreview from './components/app-preview';
import Features from './components/features';
import WhoAreWe from './components/whoarewe';
import CTA from './components/cta';
import Footer from './components/footer';
import Testimonials from './components/testimonials';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFade(true);
    }, 2000);
    return () => clearTimeout(timer);
   }, []);
   

  useEffect(() => {
    const hamburger = document.getElementById("nav-hamburger");
    const navLinks = document.getElementById("nav-links");

    // Hamburger menu toggle
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        navLinks.classList.toggle("open");
      });
    }

    // IntersectionObserver
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((n) => {
          const el = n.target as HTMLElement;
          if (n.isIntersecting) {
            el.style.transitionDelay = `${
              (parseInt(el.dataset.delay || "0")) * 0.12
            }s`;
            n.target.classList.add("revealed");
            ro.unobserve(n.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    document.querySelectorAll(".reveal").forEach((e) => ro.observe(e));

    // Word reveal
    (function () {
      const ps = document.querySelectorAll(".word-reveal-text");
      ps.forEach((p) => {
        const t = document.createElement("div");
        t.innerHTML = p.innerHTML;
        const w: { t?: string; b?: boolean; s?: boolean }[] = [];
        function walk(n: Node) {
          if (n.nodeType === 3) {
            n.textContent?.split(/(\s+)/).forEach((s: string) => {
              if (s.trim()) w.push({ t: s, b: false });
              else if (s) w.push({ s: true });
            });
          } else if (n.nodeType === 1) {
            const el = n as HTMLElement;
            if (el.tagName === "STRONG") {
              n.childNodes.forEach((c) => {
                if (c.nodeType === 3)
                  c.textContent?.split(/(\s+)/).forEach((s: string) => {
                    if (s.trim()) w.push({ t: s, b: true });
                    else if (s) w.push({ s: true });
                  });
              });
            } else n.childNodes.forEach((c) => walk(c));
          }
        }
        t.childNodes.forEach((c) => walk(c));
        let h = "";
        w.forEach((x) => {
          if (x.s) h += " ";
          else
            h += `<span class="${x.b ? "word-span word-bold" : "word-span"}">${
              x.t
            }</span> `;
        });
        (p as HTMLElement).innerHTML = h;
      });
      const sec = document.getElementById("word-reveal"),
        ws = sec?.querySelectorAll(".word-span") || [],
        tot = ws.length;
      function up() {
        if (!sec) return;
        const r = sec.getBoundingClientRect(),
          vh = window.innerHeight,
          pr = Math.max(
            0,
            Math.min(1, (vh * 0.85 - r.top) / (vh * 0.85 + r.height * 0.3))
          );
        ws.forEach((s, i) => {
          (s as HTMLElement).style.opacity = String(
            Math.max(0.12, Math.min(1, (pr - (i / tot) * 0.7) / 0.3))
          );
        });
        requestAnimationFrame(up);
      }
      up();
    })();

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", function (e) {
        const t = document.querySelector(
          (e.currentTarget as HTMLAnchorElement).getAttribute("href") || ""
        );
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: "smooth" });
          hamburger?.classList.remove("open");
          navLinks?.classList.remove("open");
        }
      });
    });

    // Navbar scroll
    const nav = document.getElementById("main-nav");
    if (nav) {
      window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", window.scrollY > 60);
      });
    }
  }, [loading]);

    if (loading) return <Loader />;


  return (
    <div className={fade ? "fade-in" : ""}>

           {/* ===== NAVBAR ===== */}
      <Navbar />

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

  {/* ===== WHO ARE WE? ===== */}
      <WhoAreWe />

      {/* ===== TESTIMONIALS ===== */}
  <Testimonials />

  {/* ===== CTA with Evil Eye ===== */}

      <CTA />
  {/* ===== FOOTER ===== */}
      <Footer />
      </div>
  );
  
}
