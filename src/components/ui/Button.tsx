"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "dark" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyle =
    "relative inline-flex items-center justify-center font-sans text-xs uppercase tracking-widest font-bold py-3.5 px-8 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-copper select-none cursor-pointer";

  const variants = {
    primary:
      "bg-brand-copper text-white hover:bg-brand-copper-hover border border-brand-copper shadow-sm",
    secondary:
      "bg-transparent text-brand-navy border border-brand-navy hover:bg-brand-navy/5",
    dark:
      "bg-brand-navy text-white hover:bg-brand-navy/95 border border-brand-navy shadow-sm",
    outline:
      "bg-transparent text-brand-copper border border-brand-copper hover:bg-brand-copper/5",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {children}
    </motion.button>
  );
}
