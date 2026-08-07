"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

interface NavigationProps {
  onCtaClick: () => void;
}

export default function Navigation({ onCtaClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Specs", href: "#specs" },
    { name: "Pricing", href: "#pricing" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed z-40 transition-all duration-300 ${
          isScrolled
            ? "top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl bg-brand-offwhite/85 border border-brand-navy/10 rounded-full shadow-lg backdrop-blur-md py-2 px-6"
            : "top-0 left-0 w-full bg-transparent py-6 px-6 sm:px-12"
        }`}
      >
        <div className="mx-auto flex justify-between items-center w-full">
          {/* Logo / Wordmark */}
          <a
            href="#"
            className="font-display text-2xl uppercase tracking-wider font-extrabold text-brand-navy flex items-center space-x-0.5 hover:opacity-90 transition-opacity"
          >
            <span>Wattfor</span>
            <span className="text-brand-copper">.</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8 text-xs font-mono uppercase tracking-widest text-brand-slate items-center font-bold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand-navy transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-copper transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button onClick={onCtaClick} variant="primary" className="py-2 px-5">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-full hover:bg-brand-navy/5 text-brand-navy transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-30 md:hidden flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-brand-navy/50 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-4/5 max-w-sm h-full bg-brand-offwhite border-l border-brand-navy/10 px-8 py-20 flex flex-col justify-between"
            >
              <div className="space-y-8">
                <span className="font-display text-3xl uppercase tracking-wider font-extrabold text-brand-navy">
                  Wattfor<span className="text-brand-copper">.</span>
                </span>
                <nav className="flex flex-col space-y-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-display text-3xl uppercase tracking-wider font-bold text-brand-navy hover:text-brand-copper transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    onCtaClick();
                  }}
                  variant="primary"
                  className="w-full flex items-center justify-center space-x-2"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-[9px] font-mono text-center text-brand-slate uppercase tracking-widest font-bold">
                  No lock-in terms · Billed month-to-month
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
