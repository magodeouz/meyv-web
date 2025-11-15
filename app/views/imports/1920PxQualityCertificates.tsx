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
  "Our products are grown under continuous supervision on contracted or company-owned fields, ensuring complete quality control from the very beginning. After harvest, the raw materials are processed into finished or semi-finished goods at our own production facilities. All packaging and related services are carried out by our group companies, maintaining full control over every stage—from field to container loading. This fully integrated and traceable production model allows us to operate with uncompromising quality standards, ensuring transparency, consistency, and reliability across the entire supply chain.",
];

const storySections = [
  {
    title: "From field to final product",
    body:
      "Every stage of our production is managed in-house — from cultivation in our contracted and company-owned fields to processing, packaging, and logistics. This end-to-end control ensures total traceability and consistent product quality, allowing us to deliver premium standards without compromise.",
  },
  {
    title: "Integrated quality, transparent process",
    body:
      "We combine agricultural expertise with advanced manufacturing and packaging technologies within our own facilities. By managing every link in the value chain, we guarantee transparency, traceability, and reliability — ensuring our customers receive products they can trust, every time.",
  },
];

const certificationCards = [
  { label: "ISO 22000 – Food Safety Management System", description: "" },
  { label: "BRCGS Food Safety Certification", description: "" },
  { label: "ISO 9001 – Quality Management System", description: "" },
];

export default function Component1920PxQualityCertificates() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="flex flex-col">
        {/* Hero */}
        <section className="px-4 md:px-8 lg:px-20 pt-4 md:pt-6">
          <div className="max-w-screen-xl mx-auto rounded-[48px] overflow-hidden relative h-[300px] sm:h-[350px] md:h-[400px]">
            <Image src={heroImage} alt="Quality hero" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/25" />
            <div className="relative z-10 flex h-full flex-col justify-center gap-4 md:gap-10 px-6 sm:px-10 md:px-16 text-white">
              <h1 className="font-['Inter:Medium',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-[80px] lg:leading-[96px] leading-tight max-w-2xl">
                Quality & Certificates
              </h1>
              <p className="font-['Inter:Medium',sans-serif] text-base sm:text-lg md:text-xl lg:text-[21px] lg:leading-[25px] max-w-2xl">
                Ensuring excellence at every step — from field to final product — through certified processes, strict quality control, and complete traceability.
              </p>
      </div>
    </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-20 lg:py-32 px-4 md:px-8 lg:px-20">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-8">
            <div className="flex-1 text-left">
              <h2 className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[58px] text-[#212121] tracking-tight">
                Vertical integration and full traceability
              </h2>
    </div>
            <div className="flex-1 text-left space-y-4 lg:space-y-6">
              {overviewParagraphs.map((paragraph) => (
                <p key={paragraph} className="font-['Inter:Regular',sans-serif] text-base sm:text-lg lg:text-[18px] lg:leading-[160%] text-[#303030]">
                  {paragraph}
                </p>
              ))}
      </div>
    </div>
        </section>

        {/* Map and process timeline */}
        <section className="py-16 md:py-20 px-4 md:px-8 lg:px-20">
          <div className="max-w-screen-xl mx-auto space-y-10 md:space-y-12">
            <div className="relative w-full rounded-[40px] overflow-hidden">
              <Image src={mapImage} alt="Global operations map" width={1200} height={700} className="w-full h-auto object-cover" />
    </div>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl rounded-[40px] overflow-hidden">
                <Image src={processTimelineImage} alt="Process timeline" width={950} height={400} className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
        </section>

        {/* Story sections */}
        <section className="py-16 md:py-20 px-4 md:px-8 lg:px-20">
          <div className="max-w-screen-xl mx-auto space-y-16 md:space-y-20">
            {storySections.map((section, index) => (
              <div
                key={section.title}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 md:gap-12 lg:gap-16`}
              >
                <div className="flex-1 text-left space-y-4 lg:space-y-6">
                  <h3 className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[58px] text-[#333333] tracking-tight">
                    {section.title}
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg lg:text-[16px] lg:leading-[150%] text-[#303030] opacity-70">
                    {section.body}
                  </p>
      </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative w-full max-w-lg aspect-[4/3] rounded-[40px] overflow-hidden">
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
        <section className="bg-[#F1F4EE] py-16 md:py-20 lg:py-32 px-4 md:px-8 lg:px-20">
          <div className="max-w-screen-xl mx-auto space-y-10 md:space-y-12 lg:space-y-16">
            <div className="space-y-4 lg:space-y-6 text-left max-w-3xl">
              <h2 className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[58px] text-[#115132] tracking-tight">
                Certified Quality, Guaranteed Freshness
              </h2>
              <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg lg:text-[18px] lg:leading-[160%] text-[#303030]">
                Our operations meet the highest international food safety and quality standards. From farm to frozen fruit, every process is certified to ensure consistency, hygiene, and trust — delivering products that meet global expectations.
              </p>
            </div>
            <div className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-3">
              {certificationCards.map((card, index) => (
                <div key={card.label} className="flex flex-col gap-4 lg:gap-6">
                  <div className="relative w-full aspect-[3/4] rounded-[40px] overflow-hidden bg-white">
                    <Image
                      src={certificationImages[index]}
                      alt={card.label}
                      fill
                      sizes="(max-width: 1024px) 80vw, 30vw"
                      className="object-contain p-4"
                    />
                  </div>
                  {card.label && (
                    <p className="font-['Inter:Medium',sans-serif] text-base sm:text-lg text-[#212121] text-center">
                      {card.label}
                    </p>
                  )}
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
