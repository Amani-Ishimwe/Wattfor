"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Button from "../ui/Button";

interface FooterProps {
  onCtaClick: () => void;
}

export default function Footer({ onCtaClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Specs", href: "#specs" },
    { name: "Pricing", href: "#pricing" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  const connectLinks = [
    { name: "hello@wattfor.com", href: "mailto:hello@wattfor.com", type: "email" },
    { name: "(555) 901-2099", href: "tel:+15559012099", type: "tel" },
    { name: "LinkedIn", href: "#" },
    { name: "X (Twitter)", href: "#" },
  ];

  return (
    <footer className="bg-black text-white relative z-10 overflow-hidden font-sans border-t border-white/10">
      
      {/* 1. Top Call To Action Band (Lateral Style) */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <h2 className="font-serif italic text-3xl md:text-4xl font-normal text-white max-w-xl text-left leading-tight">
          Supercharge your trade crew.
        </h2>
        <Button
          onClick={onCtaClick}
          variant="secondary"
          className="bg-white text-brand-navy hover:bg-brand-sky hover:text-brand-navy px-8 py-3.5 rounded-full font-bold shadow-md transition-colors text-sm font-sans flex items-center justify-center space-x-2"
        >
          <span>Contact Us</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      {/* 2. Middle Directory Grid & Background Wordmark */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 relative">
        
        {/* Giant Background Serif Wordmark — colored with Sky Blue from palette */}
        <div className="absolute right-0 bottom-4 pointer-events-none select-none opacity-[0.08] flex z-0 overflow-hidden">
          <span className="font-serif italic text-[8rem] sm:text-[12rem] md:text-[16rem] text-brand-sky tracking-tighter leading-none whitespace-nowrap">
            Wattfor
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          
          {/* Logo / Brand Info */}
          <div className="md:col-span-4 space-y-4 text-left">
            <a href="#" className="font-display text-3xl uppercase tracking-wider font-extrabold text-white flex items-center space-x-0.5">
              <span>Wattfor</span>
              <span className="text-brand-sky">.</span>
            </a>
            <p className="text-brand-slate text-sm max-w-xs font-medium leading-relaxed">
              We build professional websites and manage local search visibility for trade contractors. Power your search. Power your bookings.
            </p>
          </div>

          {/* Directory Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Product Column */}
            <div className="space-y-4 text-left">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-sky font-bold">
                Product
              </h4>
              <ul className="space-y-2 text-sm text-brand-slate font-medium">
                {productLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4 text-left">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-sky font-bold">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-brand-slate font-medium">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Column */}
            <div className="space-y-4 text-left col-span-2 sm:col-span-1">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-sky font-bold">
                Connect
              </h4>
              <ul className="space-y-2 text-sm text-brand-slate font-medium">
                {connectLinks.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      className={`hover:text-white transition-colors ${link.type === 'email' ? 'lowercase' : ''}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>



      {/* 4. Bottom Copyright Bar (Lateral Style) */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[10px] font-sans text-brand-slate gap-4">
        <div className="flex items-center space-x-1">
          <span className="font-semibold text-white/60">Wattfor</span>
          <span>© Copyright {currentYear}</span>
        </div>
        <div className="flex space-x-6">
          <span className="text-white/20 select-none">Crafted By Wattfor</span>
        </div>
      </div>

    </footer>
  );
}
