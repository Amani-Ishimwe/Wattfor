"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
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

      {/* 1. Top CTA Band */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-10 sm:py-12 border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 sm:gap-6">
        <h2 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl font-normal text-white max-w-xl text-left leading-tight">
          Supercharge your trade crew.
        </h2>
        <Button
          onClick={onCtaClick}
          variant="secondary"
          className="bg-white text-brand-navy hover:bg-brand-sky hover:text-brand-navy px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold shadow-md transition-colors text-sm font-sans flex items-center justify-center gap-2 w-full sm:w-auto shrink-0"
        >
          <span>Contact Us</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      {/* 2. Directory Grid & Background Wordmark */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-16 sm:pb-20 relative">

        {/* Giant Background Serif Wordmark */}
        <div className="absolute right-0 bottom-4 pointer-events-none select-none opacity-[0.07] overflow-hidden">
          <span className="font-serif italic text-[6rem] sm:text-[10rem] md:text-[14rem] text-brand-sky tracking-tighter leading-none whitespace-nowrap">
            Wattfor
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 sm:gap-12 relative z-10">

          {/* Logo / Brand Info */}
          <div className="sm:col-span-2 md:col-span-4 space-y-4 text-left">
            <a
              href="#"
              className="font-display text-2xl sm:text-3xl uppercase tracking-wider font-extrabold text-white flex items-center gap-0.5"
            >
              <span>Wattfor</span>
              <span className="text-brand-sky">.</span>
            </a>
            <p className="text-brand-slate text-sm max-w-xs font-medium leading-relaxed">
              We build professional websites and manage local search visibility for trade
              contractors. Power your search. Power your bookings.
            </p>
          </div>

          {/* Directory Columns */}
          <div className="sm:col-span-2 md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">

            {/* Product Column */}
            <div className="space-y-3 sm:space-y-4 text-left">
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
            <div className="space-y-3 sm:space-y-4 text-left">
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
            <div className="space-y-3 sm:space-y-4 text-left col-span-2 sm:col-span-1">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-sky font-bold">
                Connect
              </h4>
              <ul className="space-y-2 text-sm text-brand-slate font-medium">
                {connectLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className={`hover:text-white transition-colors break-all ${
                        link.type === "email" ? "lowercase" : ""
                      }`}
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

      {/* 3. Copyright Bar */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-6 sm:py-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[10px] font-sans text-brand-slate gap-3 sm:gap-4">
        <div className="flex items-center gap-1">
          <span className="font-semibold text-white/60">Wattfor</span>
          <span>© Copyright {currentYear}</span>
        </div>
        <div>
          <span className="text-white/20 select-none">Crafted By Wattfor</span>
        </div>
      </div>

    </footer>
  );
}
