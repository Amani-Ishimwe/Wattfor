"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Gauge, Check, ShieldAlert, Cpu, RefreshCw, Database } from "lucide-react";

export default function UpkeepMock() {
  const [speedScore, setSpeedScore] = useState(0);
  const [logStep, setLogStep] = useState(0);

  useEffect(() => {
    // Count speed score up to 100
    const duration = 1500;
    const end = 100;
    let start = 0;
    const timer = setInterval(() => {
      start += 2;
      if (start >= end) {
        setSpeedScore(end);
        clearInterval(timer);
      } else {
        setSpeedScore(start);
      }
    }, duration / (end / 2));

    // Stagger terminal logs
    const logTimers = [
      setTimeout(() => setLogStep(1), 300),
      setTimeout(() => setLogStep(2), 700),
      setTimeout(() => setLogStep(3), 1100),
      setTimeout(() => setLogStep(4), 1500),
    ];

    return () => {
      clearInterval(timer);
      logTimers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="w-full bg-brand-navy shadow-xl border border-white/5 overflow-hidden flex flex-col font-sans select-none text-white">
      {/* Chrome bar (dark) */}
      <div className="bg-brand-navy/60 border-b border-white/5 px-4 py-3 flex items-center space-x-2">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
        </div>
        <div className="bg-brand-navy/90 border border-white/10 text-xs text-white/50 text-center py-1.5 px-6 rounded-md flex-1 max-w-sm mx-auto font-mono">
          site-health-monitor.exe
        </div>
      </div>

      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        {/* Speed Dial Left */}
        <div className="flex flex-col items-center justify-center p-3 bg-white/5 border border-white/5 space-y-2 relative">
          <span className="font-mono text-[9px] uppercase tracking-wider text-brand-copper font-semibold self-start absolute top-2 left-2">
            ⚡ Site Speed
          </span>

          <div className="relative w-28 h-28 flex items-center justify-center mt-3">
            {/* SVG circle meter */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="56"
                cy="56"
                r="46"
                className="stroke-white/10 fill-none"
                strokeWidth="6"
              />
              <circle
                cx="56"
                cy="56"
                r="46"
                className="stroke-brand-copper fill-none transition-all duration-300"
                strokeWidth="6"
                strokeDasharray="290"
                strokeDashoffset={290 - (290 * speedScore) / 100}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-3xl font-serif font-bold text-white">{speedScore}</span>
              <span className="text-[8px] font-mono uppercase tracking-widest text-emerald-400">/ 100 Rating</span>
            </div>
          </div>
          <span className="text-[10px] text-white/60 font-mono">Google Core Web Vitals Passed</span>
        </div>

        {/* Console Log Right */}
        <div className="bg-black/40 border border-white/10 p-4 font-mono text-left space-y-2 min-h-[140px] flex flex-col justify-center">
          <div className="flex items-center space-x-1.5 text-xs text-brand-copper font-bold pb-1 border-b border-white/10">
            <Cpu className="w-3.5 h-3.5 text-brand-copper animate-pulse" />
            <span>DIAGNOSTICS PANEL</span>
          </div>

          <div className="space-y-1.5 text-[10px] flex-1 flex flex-col justify-center">
            {logStep >= 1 && (
              <div className="flex items-center justify-between text-emerald-400">
                <span className="flex items-center space-x-1">
                  <Check className="w-3 h-3" />
                  <span>SEO Meta Tags Configured</span>
                </span>
                <span className="text-[8px] px-1 bg-emerald-500/10 border border-emerald-500/20">PASS</span>
              </div>
            )}

            {logStep >= 2 && (
              <div className="flex items-center justify-between text-emerald-400">
                <span className="flex items-center space-x-1">
                  <Check className="w-3 h-3" />
                  <span>SSL Certificate Verified</span>
                </span>
                <span className="text-[8px] px-1 bg-emerald-500/10 border border-emerald-500/20">SECURE</span>
              </div>
            )}

            {logStep >= 3 && (
              <div className="flex items-center justify-between text-emerald-400">
                <span className="flex items-center space-x-1">
                  <Check className="w-3 h-3" />
                  <span>Daily Cloud Backup Sync</span>
                </span>
                <span className="text-[8px] px-1 bg-emerald-500/10 border border-emerald-500/20">ACTIVE</span>
              </div>
            )}

            {logStep >= 4 && (
              <div className="flex items-center justify-between text-emerald-400 border-t border-white/5 pt-1.5 mt-1.5 font-bold">
                <span className="flex items-center space-x-1 animate-pulse">
                  <RefreshCw className="w-3 h-3 animate-spin mr-0.5" />
                  <span>Uptime Monitoring Live</span>
                </span>
                <span className="text-[8px] px-1 bg-emerald-500/10 border border-emerald-500/20">100.0%</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
