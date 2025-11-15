"use client";

import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const heroImage = "/assets/a60cf5a4140837a6d316c19e5f2371721df039bd.png";
const mapImage = "/assets/d6b951c05983c97681d0d548ab23d573d83b0aaa.png";
const processTimelineImage = "/assets/da5954ebc6bf718dfca95385611d0d0b47a63ce8.png";
const storyImages = [
  "/assets/a07f6137190a89f184a4264475fbf0e621ee2d70.png",
  "/assets/2837a00b28597efe31db5853400bda5ffd9796bb.png",
];
const certificationImages = [
  "/assets/9d2647379f8eee2ef77cbeb05b9ca8279797d9fe.png",
  "/assets/470f6afeb9dd3ca9971fc29a4c82467b249df490.png",
  "/assets/4c82289e047e4a87c7cd727f7df76a937838761d.png",
];

const overviewParagraphs = [
  "Our products are grown under continuous supervision on contracted or company-owned fields, ensuring full quality control from the very beginning. After harvest, the raw materials are processed into finished or semi-finished goods at our own facilities.",
  "Every step—from washing and slicing to freezing, packaging, and container loading—is carried out by our group companies, delivering an unbroken, fully traceable production chain.",
];

const storySections = [
  {
    title: "From field to final product",
    body:
      "Every stage is managed in-house—from cultivation and processing to packaging and logistics—so we maintain complete traceability and deliver consistent quality without compromise.",
  },
  {
    title: "Integrated quality, transparent process",
    body:
      "We combine agricultural expertise with advanced manufacturing technologies inside our own facilities, guaranteeing transparency, reliability, and customer trust across the entire value chain.",
  },
];

const certificationCards = [
  { label: "ISO 22000", description: "Food Safety Management System" },
  { label: "BRCGS", description: "Global Food Safety Standard" },
  { label: "ISO 9001", description: "Quality Management System" },
];

export default function Component1920PxQualityCertificates() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="flex flex-col gap-16 md:gap-24 pb-16 md:pb-24">
        {/* Hero */}
        <section className="px-4 md:px-8 lg:px-16 pt-24">
          <div className="max-w-screen-xl mx-auto rounded-[48px] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.08)] relative h-[240px] sm:h-[300px] lg:h-[360px]">
            <Image src={heroImage} alt="Quality hero" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 flex h-full flex-col justify-center gap-4 px-6 sm:px-12 text-white">
              <p className="font-['Inter:Medium',sans-serif] text-3xl sm:text-4xl md:text-5xl leading-tight">Quality & Certificates</p>
              <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl max-w-2xl">
                Ensuring excellence at every step—from field to final product—through certified processes, strict quality control, and full traceability.
              </p>
      </div>
    </div>
        </section>

        {/* Overview */}
        <section className="px-4 md:px-8 lg:px-16">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            <div className="flex-1 text-center md:text-left space-y-4">
              <p className="font-['Inter:Medium',sans-serif] text-3xl sm:text-4xl md:text-5xl text-[#212121] leading-tight">
                Vertical integration & full traceability
              </p>
    </div>
            <div className="flex-1 text-center md:text-left space-y-4">
              {overviewParagraphs.map((paragraph) => (
                <p key={paragraph} className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl text-[#303030] leading-relaxed">
                  {paragraph}
                </p>
              ))}
      </div>
    </div>
        </section>

        {/* Map and process timeline */}
        <section className="px-4 md:px-8 lg:px-16">
          <div className="max-w-screen-xl mx-auto space-y-10">
            <div className="relative w-full rounded-[32px] overflow-hidden shadow-xl">
              <Image src={mapImage} alt="Global operations map" width={1200} height={700} className="w-full h-auto object-cover" />
    </div>
            <div className="flex justify-center">
              <div className="w-full max-w-3xl rounded-[32px] overflow-hidden shadow-lg">
                <Image src={processTimelineImage} alt="Process timeline" width={950} height={400} className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
        </section>

        {/* Story sections */}
        <section className="px-4 md:px-8 lg:px-16">
          <div className="max-w-screen-xl mx-auto space-y-12">
            {storySections.map((section, index) => (
              <div
                key={section.title}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-16`}
              >
                <div className="flex-1 text-center lg:text-left space-y-4">
                  <p className="font-['Inter:Medium',sans-serif] text-3xl sm:text-4xl text-[#212121] leading-tight">{section.title}</p>
                  <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl text-[#303030]/85 leading-relaxed">{section.body}</p>
      </div>
                <div className="flex-1 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-md aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg">
                    <Image
                      src={storyImages[index % storyImages.length]}
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

        {/* Certifications */}
        <section className="bg-[#f1f4ee] px-4 md:px-8 lg:px-16 py-12 md:py-20">
          <div className="max-w-screen-xl mx-auto space-y-12">
            <div className="space-y-4 text-center">
              <p className="font-['Inter:Medium',sans-serif] text-3xl sm:text-4xl text-[#115132]">Certified quality, guaranteed freshness</p>
              <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl text-[#303030]/80 leading-relaxed">
                Our operations meet globally recognized food-safety and quality standards, ensuring every shipment is consistent, hygienic, and trustworthy.
              </p>
            </div>
            <div className="grid gap-8 md:gap-12 md:grid-cols-3">
              {certificationCards.map((card, index) => (
                <div key={card.label} className="flex flex-col items-center gap-6">
                  <div className="relative w-full aspect-[3/4] rounded-[32px] overflow-hidden shadow-lg">
                    <Image
                      src={certificationImages[index]}
                      alt={card.label}
                      fill
                      sizes="(max-width: 1024px) 80vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center space-y-1">
                    <p className="font-['Inter:Medium',sans-serif] text-xl text-[#212121]">{card.label}</p>
                    <p className="font-['Inter:Regular',sans-serif] text-base text-[#303030]/80">{card.description}</p>
          </div>
              </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
