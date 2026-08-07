"use client";

import React from "react";
import { ArrowRight, Calendar, Clock, Check } from "lucide-react";
import Button from "../ui/Button";
import CircuitBg from "../ui/CircuitBg";

interface ClosingCtaProps {
  onCtaClick: () => void;
}

export default function ClosingCta({ onCtaClick }: ClosingCtaProps) {
  const days = [
    { name: "Mon", date: "10", active: false },
    { name: "Tue", date: "11", active: true },
    { name: "Wed", date: "12", active: true },
    { name: "Thu", date: "13", active: false },
    { name: "Fri", date: "14", active: true },
  ];

  return (
    <section id="contact" className="bg-brand-offwhite py-16 sm:py-24 px-6 scroll-mt-24">
      <div className="relative bg-brand-navy text-white py-16 sm:py-20 px-8 sm:px-12 overflow-hidden rounded-[2.5rem] border border-white/5 max-w-6xl mx-auto shadow-2xl">
        {/* High density Circuit Line Background */}
        <CircuitBg opacity={0.16} color="dark" />

        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,114,44,0.12),transparent_60%)]" />

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Text Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
              // TERMINAL RUNWAY
            </span>

            <h2 className="font-display text-5xl sm:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-white">
              Stop losing jobs <br />
              to a search bar.
            </h2>

            <p className="text-brand-slate text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              We'll review your local service territory and schedule a brief discovery call to map out your site layout and search rankings strategy. No pushy sales calls, no lock-in terms.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                onClick={onCtaClick}
                variant="primary"
                className="group flex items-center space-x-3 w-full sm:w-auto"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="text-[10px] font-mono text-brand-slate uppercase tracking-widest font-bold">
              Expect a direct callback within 24 hours · Billed month-to-month
            </p>
          </div>

          {/* Right Column: Calendar / Dispatch Scheduler Mockup */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-sm bg-black/35 backdrop-blur-md border border-white/10 p-6 rounded-3xl shadow-xl space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="font-mono text-[9px] text-brand-copper uppercase tracking-widest font-bold flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Interactive Scheduler</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="space-y-3 text-left">
                <h4 className="font-display text-2xl font-bold uppercase tracking-wider text-white">Select a Preview Slot</h4>
                <p className="text-brand-slate text-[10px] font-medium leading-relaxed">
                  Lock in a 10-minute preview walk-through once your sample page is generated.
                </p>
              </div>

              {/* Grid of Days */}
              <div className="grid grid-cols-5 gap-2">
                {days.map((day) => (
                  <div
                    key={day.date}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center cursor-pointer transition-all duration-150 ${
                      day.active
                        ? "bg-brand-copper/15 border-brand-copper/30 text-white font-bold"
                        : "bg-white/5 border-white/5 text-white/40"
                    }`}
                  >
                    <span className="text-[9px] font-mono uppercase font-bold">{day.name}</span>
                    <span className="text-sm font-display mt-0.5">{day.date}</span>
                  </div>
                ))}
              </div>

              {/* Slots List */}
              <div className="space-y-2">
                {[
                  { time: "09:00 AM MST", text: "Clayton (Trade Ops)" },
                  { time: "02:00 PM MST", text: "Marcus (Tech Build)" },
                ].map((slot, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-white/5 border border-white/5 p-3 rounded-xl hover:border-brand-copper/30 transition-all duration-150"
                  >
                    <span className="font-mono text-[10px] text-white font-bold flex items-center space-x-1.5">
                      <Clock className="w-3 h-3 text-brand-copper" />
                      <span>{slot.time}</span>
                    </span>
                    <span className="text-[9px] font-mono text-brand-slate font-bold">{slot.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-1.5 text-[9px] font-mono text-emerald-400 justify-center">
                <Check className="w-3.5 h-3.5" />
                <span>3 slots available this week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
