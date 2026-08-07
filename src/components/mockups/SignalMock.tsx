"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Star, Phone, Globe, Navigation } from "lucide-react";

export default function SignalMock() {
  const [searchText, setSearchText] = useState("");
  const [showResults, setShowResults] = useState(false);
  const targetText = "electrician near me";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < targetText.length) {
        setSearchText((prev) => prev + targetText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowResults(true);
        }, 600);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white shadow-xl border border-brand-navy/10 overflow-hidden flex flex-col font-sans select-none text-brand-navy">
      {/* Browser Bar */}
      <div className="bg-brand-offwhite border-b border-brand-navy/10 px-4 py-3 flex items-center space-x-2">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <div className="bg-white border border-brand-navy/5 text-xs text-brand-slate text-center py-1.5 px-6 rounded-md flex-1 max-w-sm mx-auto font-mono">
          google.com/search
        </div>
      </div>

      <div className="p-5 bg-white space-y-4">
        {/* Google Mock Search Box */}
        <div className="relative flex items-center border border-brand-navy/15 rounded-full px-4 py-2.5 max-w-md mx-auto shadow-sm">
          <Search className="w-4 h-4 text-brand-slate mr-2" />
          <span className="text-sm font-sans flex-1 text-left min-h-[20px]">
            {searchText}
            <span className="animate-ping text-brand-copper font-thin">|</span>
          </span>
          <div className="flex space-x-2 text-[10px] text-brand-slate font-mono uppercase">
            <span>Enter</span>
          </div>
        </div>

        {/* Results Container */}
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4 text-left"
          >
            {/* Map and local listings splits */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 border border-brand-navy/5 bg-brand-offwhite/20 p-3">
              {/* Local List */}
              <div className="md:col-span-3 space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-brand-slate border-b border-brand-navy/5 pb-1">
                  📍 Local Pack Results
                </div>

                {/* Ranked #1: Wattfor Client */}
                <motion.div
                  initial={{ scale: 0.98 }}
                  animate={{ scale: 1 }}
                  className="bg-white p-3 border border-brand-copper/30 shadow-md relative overflow-hidden"
                >
                  {/* Top-Right Badge */}
                  <span className="absolute top-0 right-0 bg-brand-copper text-white font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 font-bold">
                    #1 Ranked
                  </span>
                  
                  <div className="space-y-1">
                    <h5 className="font-serif text-sm font-bold flex items-center space-x-1 text-brand-navy">
                      <span>Apex Electrical Services</span>
                    </h5>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-xs font-semibold text-brand-copper">5.0</span>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <span className="text-[10px] text-brand-slate">(84 reviews)</span>
                    </div>
                    <p className="text-[10px] text-brand-slate">Electrician · Denver, CO · Open 24 Hours</p>
                    <p className="text-[10px] font-semibold text-brand-copper flex items-center space-x-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1" />
                      <span>Local SEO optimized by Wattfor</span>
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 mt-3 pt-2.5 border-t border-brand-navy/5">
                    <button className="flex-1 bg-brand-offwhite text-brand-navy py-1.5 px-2 border border-brand-navy/5 text-[9px] font-mono uppercase tracking-wider flex items-center justify-center space-x-1">
                      <Globe className="w-3 h-3 text-brand-copper" />
                      <span>Website</span>
                    </button>
                    <button className="flex-1 bg-brand-copper text-white py-1.5 px-2 text-[9px] font-mono uppercase tracking-wider flex items-center justify-center space-x-1">
                      <Phone className="w-3 h-3" />
                      <span>Call Now</span>
                    </button>
                  </div>
                </motion.div>

                {/* Unoptimized Competitors */}
                {[
                  { name: "Colorado Wire Masters", rating: "4.2", reviews: "21", trade: "Electrician", status: "Closed · Opens 8AM" },
                  { name: "Denver Power Techs", rating: "3.9", reviews: "12", trade: "Electrician", status: "Open · Closes 5PM" },
                ].map((comp, idx) => (
                  <div key={idx} className="bg-white/60 p-2.5 border border-brand-navy/5 opacity-60 text-xs space-y-1">
                    <h5 className="font-serif text-xs font-semibold text-brand-navy">{comp.name}</h5>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-[10px] font-semibold text-brand-slate">{comp.rating}</span>
                      <div className="flex text-amber-500/50">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-amber-500/50 text-amber-500/50" />
                        ))}
                      </div>
                      <span className="text-[9px] text-brand-slate">({comp.reviews})</span>
                    </div>
                    <p className="text-[9px] text-brand-slate">{comp.trade} · Denver · {comp.status}</p>
                  </div>
                ))}
              </div>

              {/* Map View */}
              <div className="md:col-span-2 relative bg-brand-navy/10 border border-brand-navy/5 min-h-[180px] flex items-center justify-center overflow-hidden">
                {/* SVG Mock Map */}
                <svg className="absolute inset-0 w-full h-full stroke-brand-navy/5 fill-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Grid Lines/Streets */}
                  <path d="M 0 20 L 100 20 M 0 50 L 100 50 M 0 80 L 100 80 M 30 0 L 30 100 M 70 0 L 70 100" strokeWidth="1.5" />
                  <path d="M 0 0 L 100 100 M 100 0 L 0 100" strokeWidth="0.5" strokeDasharray="2,2" />
                </svg>

                {/* Map Pins */}
                {/* Competitor Pin */}
                <div className="absolute top-1/4 left-1/4 flex flex-col items-center opacity-40">
                  <MapPin className="w-4 h-4 text-brand-slate" />
                </div>
                {/* Competitor Pin */}
                <div className="absolute bottom-1/4 right-1/3 flex flex-col items-center opacity-40">
                  <MapPin className="w-4 h-4 text-brand-slate" />
                </div>

                {/* Active Pin (Wattfor Client) */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 cursor-pointer"
                >
                  <span className="bg-brand-navy text-white text-[8px] font-mono py-0.5 px-1.5 border border-brand-copper/35 whitespace-nowrap mb-1">
                    Apex (You)
                  </span>
                  <div className="relative">
                    <MapPin className="w-7 h-7 text-brand-copper fill-brand-copper/10 filter drop-shadow" />
                    <span className="absolute inset-0 w-7 h-7 rounded-full bg-brand-copper/20 animate-ping" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
