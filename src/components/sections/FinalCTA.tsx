"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#608552] py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 50%, rgba(255,255,255,0.06) 0%, transparent 50%),
                            radial-gradient(circle at 85% 50%, rgba(74,107,62,0.5) 0%, transparent 50%)`,
        }}
      />
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-white/10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />
      {/* Background image overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/bg.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal inline-flex items-center gap-2 text-white/60 text-xs font-semibold uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-white/40" />
          Walsall's Favourite Café
          <span className="w-8 h-px bg-white/40" />
        </div>

        <h2 className="reveal font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Your next great coffee is waiting.
        </h2>

        <p className="reveal text-white/75 text-base sm:text-xl max-w-xl mx-auto leading-relaxed mb-12">
          Come see what the fuss is about. We&apos;re in the heart of Walsall and we can&apos;t wait to welcome you.
        </p>

        <div className="reveal flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/visit"
            className="inline-flex items-center gap-2 bg-white text-[#608552] font-bold px-8 py-4 rounded-full hover:bg-[#F7F2E9] transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            Visit Cafe 23 →
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all duration-200 text-base"
          >
            See the Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
