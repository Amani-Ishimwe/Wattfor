"use client";

import React from "react";
import { Star, MapPin, Award, Search, Compass } from "lucide-react";

export default function SignalMock() {
  return (
    <div className="w-full bg-brand-navy border border-white/10 rounded-2xl overflow-hidden font-mono shadow-2xl relative select-none">
      {/* Header Bar */}
      <div className="bg-black/35 px-4 py-3 flex items-center justify-between border-b border-white/5">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] text-white/50 tracking-wider flex items-center space-x-1.5">
          <Compass className="w-3.5 h-3.5 text-brand-copper" />
          <span>local-seo-pack.grid</span>
        </span>
        <Search className="w-3.5 h-3.5 text-white/30" />
      </div>

      {/* Main Stats Display */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Map Citation Grid */}
        <div className="md:col-span-7 bg-black/40 border border-white/5 rounded-xl p-4 flex flex-col justify-between space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-[9px] text-white/40">GEO RANKING RADIUS</span>
            <span className="text-[8px] bg-brand-copper/20 text-brand-copper px-2 py-0.5 rounded font-bold">
              100% COVERAGE
            </span>
          </div>

          {/* Grid diagram representing target maps pack locations */}
          <div className="grid grid-cols-5 gap-2 relative py-2">
            {[...Array(25)].map((_, idx) => {
              // Highlight centered clusters
              const isCenter = idx === 12;
              const isInner = [6, 7, 8, 11, 13, 16, 17, 18].includes(idx);
              const rank = isCenter ? "1" : isInner ? "1" : "2";

              return (
                <div
                  key={idx}
                  className={`aspect-square rounded flex items-center justify-center text-[8px] font-bold border transition-all duration-300 ${
                    isCenter
                      ? "bg-brand-copper text-white border-brand-copper shadow-md scale-105"
                      : isInner
                      ? "bg-brand-copper/20 text-brand-copper border-brand-copper/30"
                      : "bg-white/5 text-white/30 border-white/5"
                  }`}
                >
                  {rank}
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center text-[8px] text-white/50 border-t border-white/5 pt-2">
            <span>CLIENT RADIAL RANGE: 15 MILES</span>
            <span>RANKINGS SYNCED: DAILY</span>
          </div>
        </div>

        {/* Right Column: Signal Stats */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-4 text-left">
          
          <div className="space-y-3">
            <div className="text-brand-copper text-[10px] font-bold uppercase tracking-wider">// SIGNAL INTENSITY</div>
            <div className="space-y-1">
              <span className="text-[9px] text-white/40 block">LOCAL MAP PACK POSITION</span>
              <span className="font-display text-2xl font-black text-white uppercase tracking-wider">RANK #1</span>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] text-white/40 block">CITATIONS INDEXED</span>
              <span className="font-display text-2xl font-black text-white uppercase tracking-wider">94 CITATIONS</span>
            </div>
          </div>

          {/* Map pin bubble */}
          <div className="bg-white/5 border border-white/5 p-3 rounded-lg flex items-center space-x-2.5">
            <div className="w-7 h-7 bg-brand-copper rounded-full flex items-center justify-center text-white">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[9px] text-white/80 font-bold block">Denver Metro Pack</span>
              <span className="text-[8px] text-white/40 block font-mono">GBP: FULLY COMPLIANT</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
