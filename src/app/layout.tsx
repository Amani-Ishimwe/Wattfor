import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wattfor — Premium Websites & Local SEO for Trade Contractors",
  description: "Wattfor builds professional, high-converting websites and manages local search presence for electricians, plumbers, HVAC pros, and roofers. Start with a $0 upfront free sample.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&family=Epilogue:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col text-brand-navy bg-brand-offwhite font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
