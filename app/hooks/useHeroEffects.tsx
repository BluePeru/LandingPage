"use client";
import { useEffect } from "react";

export const useHeroEffects = () => {
  useEffect(() => {
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
  }, []);
};
