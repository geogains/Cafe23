import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/cafe23logo.png"
                alt="Cafe 23 logo"
                height={36}
                width={144}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Walsall&apos;s favourite independent café. Colombian coffee, speciality drinks, comfort food, and a community that feels like home.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {/* [PLACEHOLDER] Replace href with actual social URLs */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#608552] hover:border-[#608552] transition-colors"
              >
                {/* Instagram SVG icon */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              {/* TikTok icon */}
              <a
                href="#"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#608552] hover:border-[#608552] transition-colors text-xs font-bold"
              >
                TT
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#608552] mb-5">Explore</h3>
            <ul className="space-y-3">
              {[
                { href: "/",      label: "Home" },
                { href: "/menu",  label: "Menu" },
                { href: "/about", label: "About Us" },
                { href: "/visit", label: "Visit Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#608552] mb-5">Find Us</h3>
            <div className="flex items-start gap-2 text-white/60 text-sm">
              <MapPin className="w-4 h-4 text-[#608552] flex-shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed">
                {siteConfig.address.line2}<br />
                {siteConfig.address.line1}<br />
                {siteConfig.address.city} {siteConfig.address.postcode}
              </address>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-[#608552] text-sm hover:text-[#8FAB82] transition-colors font-medium"
            >
              Get directions →
            </a>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#608552] mb-5">Opening Hours</h3>
            <div className="flex items-start gap-2 text-white/60 text-sm mb-3">
              <Clock className="w-4 h-4 text-[#608552] flex-shrink-0 mt-0.5" />
              <span>Hours vary, see below</span>
            </div>
            <ul className="space-y-1.5">
              {siteConfig.hours.slice(0, 4).map((h) => (
                <li key={h.day} className="flex justify-between text-sm gap-4">
                  <span className="text-white/40">{h.day.slice(0, 3)}</span>
                  <span className="text-white/70">{h.open} – {h.close}</span>
                </li>
              ))}
              <li className="text-white/40 text-xs mt-2">
                {/* [PLACEHOLDER] Confirm actual hours */}
                Weekend hours differ, see Visit Us page
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/30">
          <span>© {new Date().getFullYear()} Cafe 23. All rights reserved.</span>
          <span>Walsall, West Midlands</span>
        </div>
      </div>
    </footer>
  );
}
