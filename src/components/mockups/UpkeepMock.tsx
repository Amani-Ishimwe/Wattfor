"use client";

import React from "react";
import { Shield, RefreshCcw, Cpu, Server, Check } from "lucide-react";

export default function UpkeepMock() {
  return (
    <div className="w-full bg-[#152238] border border-white/10 rounded-2xl overflow-hidden font-mono shadow-2xl relative select-none">
      {/* Header Bar */}
      <div className="bg-black/35 px-4 py-3 flex items-center justify-between border-b border-white/5">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] text-white/50 tracking-wider flex items-center space-x-1.5">
          <Server className="w-3.5 h-3.5 text-brand-copper" />
          <span>cloud-uptime-diagnostics.log</span>
        </span>
        <RefreshCcw className="w-3.5 h-3.5 text-white/30" />
      </div>

      {/* Stats Display Grid */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Performance Logs */}
        <div className="md:col-span-7 bg-black/40 border border-white/5 rounded-xl p-4 flex flex-col justify-between space-y-4 text-left">
          <div className="flex justify-between items-center">
            <span className="text-[9px] text-white/40">SYSTEM HEALTH STATUS</span>
            <span className="text-[8px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">
              ACTIVE
            </span>
          </div>

          <div className="space-y-2 text-[9px] text-white/60">
            <div>
              <span className="text-white/40">[10:04:11]</span> HOST: cloudflare-secure-edge-dn
            </div>
            <div>
              <span className="text-white/40">[10:04:12]</span> SSL CERT: Verified (Expires 365d)
            </div>
            <div>
              <span className="text-white/40">[10:04:12]</span> LATENCY: <span className="text-emerald-400">12ms</span> (RTT optimized)
            </div>
            <div>
              <span className="text-white/40">[10:04:13]</span> DATABASE: Backups generated successfully
            </div>
            <div className="text-emerald-400 flex items-center space-x-1">
              <Check className="w-3 h-3 flex-shrink-0" />
              <span>[10:04:14] UPTIME MONITOR: 100% (No shifts measured)</span>
            </div>
          </div>

          <div className="w-full bg-white/5 rounded h-3 overflow-hidden flex">
            <div className="w-3/4 bg-brand-copper h-full" />
            <div className="w-1/4 bg-emerald-500 h-full" />
          </div>
        </div>

        {/* Right Column: Security Config */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-4 text-left">
          
          <div className="space-y-3">
            <div className="text-brand-copper text-[10px] font-bold uppercase tracking-wider">// PLATFORM SECURE</div>
            <div className="space-y-1">
              <span className="text-[9px] text-white/40 block">UPTIME METRIC</span>
              <span className="font-display text-2xl font-black text-white uppercase tracking-wider">99.98%</span>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] text-white/40 block">BACKUP SYNC</span>
              <span className="font-display text-2xl font-black text-white uppercase tracking-wider">DAILY</span>
            </div>
          </div>

          {/* Uptime Guard Info */}
          <div className="bg-white/5 border border-white/5 p-3 rounded-lg flex items-center space-x-2.5">
            <div className="w-7 h-7 bg-brand-copper rounded-full flex items-center justify-center text-white">
              <Shield className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[9px] text-white/80 font-bold block">Uptime Guard</span>
              <span className="text-[8px] text-white/40 block font-mono">MITIGATED: 0 THREATS</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
