"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Zap,
  Droplets,
  Flame,
  Home,
  Hammer,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  Loader2,
} from "lucide-react";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    tradeType: "",
    ownerName: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleTradeSelect = (trade: string) => {
    setFormData((prev) => ({ ...prev, tradeType: trade }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step === 1 && (!formData.businessName || !formData.tradeType)) return;
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.ownerName || !formData.email || !formData.phone) return;

    setLoading(true);
    // Simulate submission api call
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      businessName: "",
      tradeType: "",
      ownerName: "",
      email: "",
      phone: "",
    });
    setStep(1);
    onClose();
  };

  const trades = [
    { name: "Electrician", icon: Zap, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
    { name: "Plumber", icon: Droplets, color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
    { name: "HVAC Pro", icon: Flame, color: "text-red-500 bg-red-500/10 border-red-500/20" },
    { name: "Roofer", icon: Home, color: "text-green-500 bg-green-500/10 border-green-500/20" },
    { name: "General / Other", icon: Hammer, color: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-xl bg-brand-offwhite border border-brand-navy/10 overflow-hidden shadow-2xl z-10 rounded-[2rem]"
          >
            {/* Top Close Bar */}
            <div className="flex justify-end p-6">
              <button
                onClick={resetForm}
                className="p-2 rounded-full hover:bg-brand-navy/5 text-brand-slate hover:text-brand-navy transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-10 pb-12">
              {/* Step indicator */}
              {step < 3 && (
                <div className="flex justify-between items-center mb-8 border-b border-brand-navy/5 pb-4">
                  <div>
                    <span className="font-mono text-xs text-brand-copper uppercase tracking-widest">
                      Step {step} of 2
                    </span>
                    <h3 className="font-display text-4xl uppercase tracking-wider font-bold text-brand-navy mt-1">
                      {step === 1 ? "Let's sketch it out" : "Where should we send it?"}
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <span
                      className={`w-8 h-1 rounded-full transition-all duration-300 ${
                        step >= 1 ? "bg-brand-copper" : "bg-brand-navy/10"
                      }`}
                    />
                    <span
                      className={`w-8 h-1 rounded-full transition-all duration-300 ${
                        step >= 2 ? "bg-brand-copper" : "bg-brand-navy/10"
                      }`}
                    />
                  </div>
                </div>
              )}

              {/* Step 1: Business Details */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-brand-slate font-bold">
                      // Company Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="e.g. Apex Electrical Services"
                      className="w-full bg-white border border-brand-navy/10 py-3.5 px-5 rounded-xl font-sans text-brand-navy focus:outline-none focus:border-brand-copper transition-colors text-sm shadow-sm"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-brand-slate font-bold">
                      // Your Trade Specialty
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {trades.map((trade) => {
                        const Icon = trade.icon;
                        const isSelected = formData.tradeType === trade.name;
                        return (
                          <button
                            key={trade.name}
                            type="button"
                            onClick={() => handleTradeSelect(trade.name)}
                            className={`flex items-center space-x-3 p-4 border text-left cursor-pointer transition-all duration-150 rounded-2xl ${
                              isSelected
                                ? "bg-white border-brand-copper ring-2 ring-brand-copper/25 font-bold text-brand-navy"
                                : "bg-white/50 border-brand-navy/10 text-brand-slate hover:bg-white hover:border-brand-navy/30"
                            }`}
                          >
                            <div className={`p-2 rounded-xl ${trade.color}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="font-sans text-sm font-semibold">{trade.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-brand-navy/5">
                    <Button
                      onClick={nextStep}
                      className="flex items-center space-x-2"
                      variant="primary"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Contact Info */}
              {step === 2 && (
                <form onSubmit={handleSubmit}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-brand-slate font-bold">
                          // Owner / Contact Name
                        </label>
                        <input
                          type="text"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleInputChange}
                          placeholder="e.g. John Doe"
                          className="w-full bg-white border border-brand-navy/10 py-3.5 px-5 rounded-xl font-sans text-brand-navy focus:outline-none focus:border-brand-copper transition-colors text-sm shadow-sm"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-brand-slate font-bold">
                          // Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. (555) 123-4567"
                          className="w-full bg-white border border-brand-navy/10 py-3.5 px-5 rounded-xl font-sans text-brand-navy focus:outline-none focus:border-brand-copper transition-colors text-sm shadow-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-brand-slate font-bold">
                        // Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. john@apexelectrical.com"
                        className="w-full bg-white border border-brand-navy/10 py-3.5 px-5 rounded-xl font-sans text-brand-navy focus:outline-none focus:border-brand-copper transition-colors text-sm shadow-sm"
                        required
                      />
                    </div>

                    <div className="bg-brand-navy/5 p-5 border-l-2 border-brand-copper text-brand-slate text-xs space-y-1.5 rounded-r-2xl">
                      <p className="font-bold text-brand-navy uppercase tracking-wider">What happens next?</p>
                      <p className="leading-relaxed">
                        We build your free, functional homepage mockup based on your trade. Within 48 hours, we'll email you a secure link. Zero commitment.
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-brand-navy/5">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center space-x-1 font-mono text-xs uppercase tracking-wider text-brand-slate hover:text-brand-navy cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <Button
                        type="submit"
                        className="flex items-center space-x-2"
                        variant="primary"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Building Circuit...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Free Sample</span>
                            <ChevronRight className="w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.div>
                </form>
              )}

              {/* Step 3: Success State */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-brand-copper/10 border border-brand-copper/25 text-brand-copper">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs text-brand-copper uppercase tracking-widest block font-bold">
                      Connection Established
                    </span>
                    <h3 className="font-display text-5xl uppercase tracking-wider font-bold text-brand-navy">
                      Your sample is in queue.
                    </h3>
                    <p className="text-brand-slate text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="text-brand-navy font-bold">{formData.ownerName}</span>. We've routed <span className="text-brand-navy font-bold">{formData.businessName}</span>'s website project to our trade designers.
                    </p>
                  </div>

                  {/* Faux technical read-out */}
                  <div className="bg-brand-navy text-brand-offwhite text-left font-mono text-xs p-5 rounded-2xl space-y-1 max-w-md mx-auto border border-white/5 opacity-90 select-none shadow-md">
                    <p className="text-brand-copper font-bold">⚡ TERMINAL STATUS: OK</p>
                    <p className="text-white/40">// BUILD INITIATED FOR: {formData.tradeType}</p>
                    <p className="text-emerald-400">&gt; routing pipeline... complete</p>
                    <p className="text-emerald-400">&gt; establishing search nodes... sync</p>
                    <p className="text-emerald-400">&gt; allocating designer... locked</p>
                    <p className="text-white/40">// EXPECT SECURE LINK IN 24-48 HOURS</p>
                  </div>

                  <div className="pt-4">
                    <Button onClick={resetForm} variant="dark">
                      Close Window
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
