"use client";

import React from "react";
import { Star, Shield, Phone, Cpu, Settings, Code } from "lucide-react";

export default function BuildMock() {
  return (
    <div className="w-full bg-[#152238] border border-white/10 rounded-2xl overflow-hidden font-mono shadow-2xl relative select-none">
      {/* Code Editor Header */}
      <div className="bg-black/35 px-4 py-3 flex items-center justify-between border-b border-white/5">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] text-white/50 tracking-wider flex items-center space-x-1.5">
          <Code className="w-3.5 h-3.5 text-brand-copper" />
          <span>apex-builder.config.json</span>
        </span>
        <Settings className="w-3.5 h-3.5 text-white/30" />
      </div>

      {/* Editor Content Area */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Config JSON */}
        <div className="md:col-span-6 space-y-3 text-[10px] text-left text-white/60">
          <div className="text-brand-copper font-bold">// INITIALIZE SITE DEPLOY</div>
          <div>
            <span className="text-white/40">1 </span>
            <span className="text-emerald-400">"siteName"</span>: <span className="text-brand-copper">"Apex Electrical"</span>,
          </div>
          <div>
            <span className="text-white/40">2 </span>
            <span className="text-emerald-400">"industry"</span>: <span className="text-brand-copper">"Electrician Crew"</span>,
          </div>
          <div>
            <span className="text-white/40">3 </span>
            <span className="text-emerald-400">"status"</span>: <span className="text-brand-copper">"LIVE_PRODUCTION"</span>,
          </div>
          <div>
            <span className="text-white/40">4 </span>
            <span className="text-emerald-400">"pageSpeed"</span>: <span className="text-emerald-400">99</span>,
          </div>
          <div>
            <span className="text-white/40">5 </span>
            <span className="text-emerald-400">"sslCert"</span>: <span className="text-emerald-400">true</span>,
          </div>
          <div>
            <span className="text-white/40">6 </span>
            <span className="text-emerald-400">"features"</span>: [
          </div>
          <div className="pl-4">
            <span className="text-white/40">7 </span><span className="text-brand-copper">"Google Reviews Feed"</span>,
          </div>
          <div className="pl-4">
            <span className="text-white/40">8 </span><span className="text-brand-copper">"Click-To-Call Dialers"</span>,
          </div>
          <div className="pl-4">
            <span className="text-white/40">9 </span><span className="text-brand-copper">"Lead Booking Terminal"</span>
          </div>
          <div>
            <span className="text-white/40">10 </span>]
          </div>
        </div>

        {/* Right Column: Visual Layout Render Mock */}
        <div className="md:col-span-6 bg-black/40 border border-white/5 rounded-xl p-4 flex flex-col justify-between space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <span className="text-[9px] text-white/40 font-mono">LIVE PREVIEW</span>
            <span className="text-[8px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold uppercase">
              Secure SSL
            </span>
          </div>

          <div className="space-y-2 text-left">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-brand-copper text-brand-copper" />
              ))}
              <span className="text-[8px] text-white/50">(48 Reviews)</span>
            </div>
            <h4 className="font-display text-lg font-black uppercase tracking-wider text-white leading-none">
              Apex Electrical
            </h4>
            <p className="text-[9px] text-white/60 leading-relaxed font-sans">
              24/7 emergency panel upgrades & residential troubleshooting.
            </p>
          </div>

          <div className="bg-brand-copper text-white py-1.5 rounded-lg text-center text-[9px] font-bold tracking-widest uppercase">
            CALL DISPATCH
          </div>
        </div>
      </div>
    </div>
  );
}
