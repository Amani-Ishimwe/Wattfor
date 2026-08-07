"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-white/5 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
        
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-4">
          <a href="#" className="font-display text-2xl uppercase tracking-wider font-extrabold text-white flex items-center space-x-0.5">
            <span>Wattfor</span>
            <span className="text-brand-copper">.</span>
          </a>
          <p className="text-brand-slate text-sm max-w-sm font-medium leading-relaxed">
            Wattfor builds high-speed websites and manages local search visibility for trade contractors. Power your search. Power your bookings.
          </p>
          <div className="pt-2 flex space-x-4 text-brand-slate">
            <a href="#" aria-label="Twitter" className="hover:text-brand-copper transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-brand-copper transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold">
            // SERVICES
          </h4>
          <ul className="space-y-2.5 text-xs font-mono text-brand-slate uppercase tracking-widest font-bold">
            <li>
              <a href="#services" className="hover:text-white transition-colors">Website Build</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">Google Profile Sync</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">Local Map SEO</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">Diagnostics & Upkeep</a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-4 space-y-4 text-xs font-mono text-brand-slate uppercase tracking-widest font-bold">
          <h4 className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold">
            // CONTACT INFO
          </h4>
          <ul className="space-y-3 font-mono">
            <li className="flex items-center space-x-2.5">
              <Mail className="w-4 h-4 text-brand-copper flex-shrink-0" />
              <a href="mailto:hello@wattfor.com" className="hover:text-white transition-colors lowercase">hello@wattfor.com</a>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-brand-copper flex-shrink-0" />
              <a href="tel:+15559012099" className="hover:text-white transition-colors">(555) 901-2099</a>
            </li>
            <li className="flex items-center space-x-2.5">
              <MapPin className="w-4 h-4 text-brand-copper flex-shrink-0 text-brand-slate" />
              <span className="text-brand-slate">Denver, CO · Serving Nationwide</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Giant WATTFOR Wordmark with Letter Hovers */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-b border-white/5 flex justify-center overflow-hidden select-none">
        <div className="flex space-x-1 sm:space-x-3">
          {"WATTFOR".split("").map((letter, i) => (
            <motion.span
              key={i}
              whileHover={{
                scale: 1.12,
                y: -8,
                color: "#C9722C",
                transition: { type: "spring", stiffness: 350, damping: 10 },
              }}
              className="font-display text-6xl sm:text-[9rem] md:text-[13rem] uppercase font-black tracking-tighter text-white/5 cursor-default transition-colors duration-150 leading-none"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row justify-between items-center text-[9px] font-mono text-brand-slate uppercase tracking-widest gap-4 font-bold">
        <span>© {currentYear} Wattfor. All rights reserved.</span>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
