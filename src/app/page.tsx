"use client";

import React, { useState } from "react";
import Navigation from "../components/sections/Navigation";
import Hero from "../components/sections/Hero";
import Problem from "../components/sections/Problem";
import Services from "../components/sections/Services";
import BentoFeatures from "../components/sections/BentoFeatures";
import BlueprintGallery from "../components/sections/BlueprintGallery";
import Pricing from "../components/sections/Pricing";
import Social from "../components/sections/Social";
import Faq from "../components/sections/Faq";
import ClosingCta from "../components/sections/ClosingCta";
import Footer from "../components/sections/Footer";
import Modal from "../components/ui/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const triggerModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navigation */}
      <Navigation onCtaClick={triggerModal} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onCtaClick={triggerModal} />

        {/* Problem Section */}
        <Problem />

        {/* Services alternating panels */}
        <Services onCtaClick={triggerModal} />

        {/* New: Bento specifications list */}
        <BentoFeatures />

        {/* New: Wireframe / blueprint showcase grid */}
        <BlueprintGallery />

        {/* New: Transparent side-by-side Pricing */}
        <Pricing onCtaClick={triggerModal} />

        {/* Testimonial slider */}
        <Social />

        {/* New: Interactive FAQ Accordions */}
        <Faq />

        {/* High contrast final CTA */}
        <ClosingCta onCtaClick={triggerModal} />
      </main>

      {/* Footer info grid */}
      <Footer />

      {/* Action capture modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
