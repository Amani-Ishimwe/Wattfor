"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Shield, Phone, Mail, Award, CheckCircle } from "lucide-react";

export default function BuildMock() {
  const [activeTab, setActiveTab] = useState<"home" | "services" | "reviews">("home");

  return (
    <div className="w-full bg-white shadow-xl border border-brand-navy/10 overflow-hidden flex flex-col font-sans select-none text-brand-navy">
      {/* Browser chrome header */}
      <div className="bg-brand-offwhite border-b border-brand-navy/10 px-4 py-3 flex items-center space-x-2">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <div className="bg-white border border-brand-navy/5 text-xs text-brand-slate text-center py-1.5 px-6 rounded-md flex-1 max-w-sm mx-auto font-mono flex items-center justify-center space-x-1.5">
          <span className="text-emerald-500">🔒</span>
          <span>apexelectrical.com</span>
        </div>
      </div>

      {/* Embedded Website mock content */}
      <div className="p-6 bg-brand-offwhite/30 flex-1 min-h-[320px] flex flex-col justify-between">
        {/* Mock Navigation */}
        <div className="flex justify-between items-center border-b border-brand-navy/5 pb-4 mb-4">
          <span className="font-serif font-bold text-base tracking-tight flex items-center space-x-1">
            <span className="text-brand-copper">⚡</span>
            <span>Apex Electrical</span>
          </span>
          <div className="flex space-x-3 text-xs font-mono uppercase tracking-wider">
            {(["home", "services", "reviews"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 cursor-pointer transition-colors duration-150 ${
                  activeTab === tab
                    ? "border-b border-brand-copper text-brand-copper font-semibold"
                    : "text-brand-slate hover:text-brand-navy"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Mock Dynamic Panel */}
        <div className="flex-1 flex flex-col justify-center py-2 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 text-left"
              >
                <div className="inline-flex items-center space-x-1 bg-brand-copper/10 text-brand-copper px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5" />
                  <span>24/7 Emergency Dispatch</span>
                </div>
                <h4 className="font-serif text-2xl font-semibold leading-tight max-w-md">
                  Fast, Safe Electrical Work In Your Local Area.
                </h4>
                <p className="text-brand-slate text-xs max-w-sm">
                  Certified electricians for panels, wiring, and repairs. Safe work, flat-rate pricing, and prompt arrivals.
                </p>
                <div className="flex space-x-3">
                  <div className="bg-brand-copper text-white text-[11px] font-mono uppercase tracking-wider px-4 py-2 font-semibold shadow-sm">
                    Request Call Back
                  </div>
                  <div className="border border-brand-navy/10 text-brand-navy text-[11px] font-mono uppercase tracking-wider px-4 py-2 font-semibold flex items-center space-x-1">
                    <Phone className="w-3 h-3" />
                    <span>Call (555) 901-2099</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "services" && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-2 gap-3 text-left"
              >
                {[
                  { title: "Panel Upgrades", desc: "100A to 200A service changes." },
                  { title: "Troubleshooting", desc: "Locating short circuits fast." },
                  { title: "EV Charger Install", desc: "Level 2 home charging setup." },
                  { title: "Recessed Lighting", desc: "Sleek, modern ceiling fixtures." },
                ].map((svc) => (
                  <div
                    key={svc.title}
                    className="bg-white p-3 border border-brand-navy/5 shadow-sm space-y-1.5"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-serif text-xs font-semibold">{svc.title}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-brand-copper" />
                    </div>
                    <p className="text-[10px] text-brand-slate leading-relaxed">{svc.desc}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "reviews" && (
              <motion.div
                key="reviews"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3 text-left"
              >
                {[
                  { name: "Robert K.", text: "Prompt response, solved my flickering lights issue in 30 mins. Highly recommend!", stars: 5 },
                  { name: "Sarah L.", text: "Apex upgraded our panel. Clean work, passed inspection first try. Very professional.", stars: 5 },
                ].map((rev, i) => (
                  <div
                    key={i}
                    className="bg-white p-3 border border-brand-navy/5 shadow-sm space-y-1"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-sans text-xs font-semibold">{rev.name}</span>
                      <div className="flex text-amber-500">
                        {[...Array(rev.stars)].map((_, idx) => (
                          <Star key={idx} className="w-3 h-3 fill-amber-500" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[10px] italic text-brand-slate leading-relaxed">"{rev.text}"</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mock Footer Trust */}
        <div className="border-t border-brand-navy/5 pt-3 mt-3 flex justify-between items-center text-[10px] font-mono text-brand-slate uppercase tracking-wider">
          <span className="flex items-center space-x-1">
            <Award className="w-3.5 h-3.5 text-brand-copper" />
            <span>Licensed & Insured</span>
          </span>
          <span>CO Lic #EL-90821</span>
        </div>
      </div>
    </div>
  );
}
