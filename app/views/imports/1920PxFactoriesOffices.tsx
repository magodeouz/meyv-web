"use client";

import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const heroImage = "/assets/e2684821a002ca86e013a5d8adac2ec3d61d332b.png";
const highlightImages = [
  "/assets/56dc78c27f09e8b4c4bf295b74d0e48d1587b55f.png",
  "/assets/57446fc4f09979b364c1122960f918acd71741c6.png",
];
const globalImages = [
  "/assets/eaafecb983683b15887e29a337e54f286b9f0548.png",
  "/assets/ed517dd0e9dcd4f869637683a298e388775773fd.png",
];
const ctaImage = "/assets/c15bb3d7b30d65e84a0ade7670e584f728d9b5a7.png";

const overview = {
  title: "From field to frozen – fully integrated facilities",
  paragraphs: [
    "Our factories represent the full cycle of vertical integration—from sourcing fruits in our contracted and company-owned fields to processing, IQF freezing, packaging, and shipment.",
    "Every step takes place under one unified control system, ensuring traceability and consistency with advanced food-safety protocols and automation technologies.",
  ],
};

const highlightCards = [
  {
    title: "Where quality meets technology",
    body:
      "Next-generation IQF systems and precision-controlled environments keep every fruit at peak integrity from harvest to shipment.",
  },
  {
    title: "Innovation in every corner",
    body:
      "We combine engineering excellence with sustainable practices so each batch retains its natural flavor, color, and nutrition.",
  },
];

const globalSections = [
  {
    title: "Global reach, local roots",
    body:
      "Headquarters and regional offices connect our growing regions with export markets. Dedicated teams handle sales, logistics, and customer service with agility.",
    image: globalImages[0],
  },
  {
    title: "Controlled environments, uncompromised quality",
    body:
      "Every facility operates under meticulously controlled conditions—from temperature and humidity to advanced hygiene systems and digital monitoring.",
    image: globalImages[1],
  },
];

export default function Component1920PxFactoriesOffices() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="flex flex-col gap-16 md:gap-24 pb-16 md:pb-24">
        {/* Hero */}
        <section className="px-4 md:px-8 lg:px-16 pt-24">
          <div className="max-w-screen-xl mx-auto rounded-[48px] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.08)] relative h-[240px] sm:h-[300px] lg:h-[360px]">
            <Image src={heroImage} alt="Factories hero" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 flex h-full flex-col justify-center gap-4 px-6 sm:px-12 text-white">
              <p className="font-['Inter:Medium',sans-serif] text-3xl sm:text-4xl md:text-5xl leading-tight">Factories & Offices</p>
              <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl max-w-2xl">
                Discover the journey behind our brand and the purpose that guides everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="px-4 md:px-8 lg:px-16">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            <div className="flex-1 text-center md:text-left space-y-4">
              <p className="font-['Inter:Medium',sans-serif] text-3xl sm:text-4xl md:text-5xl text-[#212121] leading-tight">
                {overview.title}
              </p>
            </div>
            <div className="flex-1 text-center md:text-left space-y-4">
              {overview.paragraphs.map((paragraph) => (
                <p key={paragraph} className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl text-[#303030] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-[#115132] text-white px-4 md:px-8 lg:px-16 py-12 md:py-20">
          <div className="max-w-screen-xl mx-auto grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
            <div className="space-y-8">
              {highlightCards.map((card) => (
                <div key={card.title} className="space-y-3">
                  <p className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl leading-snug sm:leading-tight">{card.title}</p>
                  <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl text-white/85 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-6">
              {highlightImages.map((image, index) => (
                <div
                  key={image}
                  className={`relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl ${index === 1 ? 'hidden md:block' : ''}`}
                >
                  <Image
                    src={image}
                    alt={index === 0 ? 'Processing facility' : 'Cold storage'}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 45vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global sections */}
        <section className="px-4 md:px-8 lg:px-16">
          <div className="max-w-screen-xl mx-auto space-y-12">
            {globalSections.map((section, index) => (
              <div
                key={section.title}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}
              >
                <div className="flex-1 text-center lg:text-left space-y-4">
                  <p className="font-['Inter:Medium',sans-serif] text-3xl sm:text-4xl text-[#212121] leading-tight">{section.title}</p>
                  <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl text-[#303030]/85 leading-relaxed">{section.body}</p>
                </div>
                <div className="flex-1 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-lg aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Insights */}
        <section className="px-4 md:px-8 lg:px-16">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8">
            {highlightCards.map((card) => (
              <div key={`insight-${card.title}`} className="rounded-[32px] border border-[#dfe6da] bg-white p-6 space-y-3">
                <p className="font-['Inter:Medium',sans-serif] text-2xl text-[#115132] leading-snug">{card.title}</p>
                <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg text-[#303030]/80 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 md:px-8 lg:px-16">
          <div className="relative max-w-screen-xl mx-auto rounded-[48px] overflow-hidden text-center text-white py-20 md:py-28">
            <Image src={ctaImage} alt="CTA background" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative space-y-6 px-6">
              <p className="font-['Inter:Bold',sans-serif] text-4xl sm:text-5xl md:text-6xl">Let the Journey Begin</p>
              <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                Precision-engineered facilities, global offices, and an unbroken chain of quality—ready for your next project.
              </p>
              <button
                type="button"
                className="bg-white text-[#115132] px-10 py-3 rounded-full font-['Inter:Medium',sans-serif] text-base sm:text-lg"
                onClick={() => {
                  window.location.href = "mailto:sales@meyv.com.tr?subject=Meyv%20Inquiry";
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
