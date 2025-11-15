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
    "Our factories represent the full cycle of vertical integration — from sourcing fruits in our contracted and company-owned fields to processing, IQF freezing, packaging, and shipment. Every step takes place under one continuous control system, ensuring full traceability and consistency. With advanced food safety protocols and automation technologies, we deliver frozen fruits that preserve the taste, color, and nutrition of freshly harvested produce.",
  ],
};

const highlightCards = [
  {
    title: "Innovation in every corner",
    body:
      "Our production facilities are equipped with next-generation IQF (Individually Quick Frozen) systems, automated sorting lines, and precision-controlled environments that maintain product integrity at every stage. We combine technological excellence with a deep respect for nature, ensuring that every fruit retains its freshness and authentic flavor. Continuous investment in innovation allows us to increase efficiency, sustainability, and capacity while meeting global food safety standards.",
  },
  {
    title: "Where quality meets technology",
    body:
      "At the heart of our operations lies a commitment to precision and hygiene. Each factory is designed according to international standards such as ISO 22000, BRCGS, and HACCP, supported by advanced quality-control laboratories. From washing and slicing to freezing and packaging, every process is monitored in real-time to guarantee consistent, high-quality results. Our facilities reflect the harmony between modern engineering and nature's finest fruits.",
  },
];

const globalSections = [
  {
    title: "Global reach, local roots",
    body:
      "Our headquarters and offices strategically connect our growing regions with key export markets. While our factories are located near fertile agricultural zones to ensure rapid processing after harvest, our international offices manage sales, logistics, and customer relations with agility and precision. This global network allows us to deliver IQF fruits to partners in Europe, the Middle East, and beyond — always on time, always in perfect condition.",
    image: globalImages[0],
  },
  {
    title: "Controlled environments, uncompromised quality",
    body:
      "Each of our facilities operates under meticulously controlled conditions — from temperature and humidity to air filtration and hygiene. Automated packaging and metal-detection systems safeguard product safety, while digital monitoring ensures process transparency. Supported by experienced food technologists and engineers, we maintain an unbroken chain of quality from the moment the fruit is picked until it reaches our customers' doors.",
    image: globalImages[1],
  },
];

export default function Component1920PxFactoriesOffices() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="flex flex-col">
        {/* Hero */}
        <section className="px-4 md:px-8 lg:px-20 pt-4 md:pt-6">
          <div className="max-w-screen-xl mx-auto rounded-[48px] overflow-hidden relative h-[300px] sm:h-[350px] md:h-[400px]">
            <Image src={heroImage} alt="Factories hero" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/25" />
            <div className="relative z-10 flex h-full flex-col justify-center gap-4 md:gap-10 px-6 sm:px-10 md:px-16 text-white">
              <h1 className="font-['Inter:Medium',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-[80px] lg:leading-[96px] leading-tight max-w-3xl">
                Factories & Offices
              </h1>
              <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl lg:text-[21px] lg:leading-[25px] max-w-2xl">
                Discover the journey behind our brand and the purpose that guides everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-20 lg:py-40 px-4 md:px-8 lg:px-20">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-8">
            <div className="flex-1 text-left">
              <h2 className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[58px] text-[#212121] tracking-tight">
                {overview.title}
              </h2>
            </div>
            <div className="flex-1 text-left space-y-4 lg:space-y-6">
              {overview.paragraphs.map((paragraph) => (
                <p key={paragraph} className="font-['Inter:Regular',sans-serif] text-base sm:text-lg lg:text-[18px] lg:leading-[160%] text-[#303030]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-[#115132] text-white py-16 md:py-20 lg:py-32 px-4 md:px-8 lg:px-20">
          <div className="max-w-screen-xl mx-auto space-y-16 md:space-y-20 lg:space-y-24">
            {/* Innovation in every corner - Image left, text right */}
            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-16">
              <div className="flex-1 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-lg aspect-[4/3] rounded-[40px] overflow-hidden">
                  <Image
                    src={highlightImages[0]}
                    alt="Processing facility"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-left space-y-4 lg:space-y-6">
                <h3 className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[58px] text-[#CDE253] tracking-tight">
                  {highlightCards[0].title}
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg lg:text-[18px] lg:leading-[160%]">
                  {highlightCards[0].body}
                </p>
              </div>
            </div>

            {/* Where quality meets technology - Text left, image right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 md:gap-12 lg:gap-16">
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-lg aspect-[4/3] rounded-[40px] overflow-hidden">
                  <Image
                    src={highlightImages[1]}
                    alt="Cold storage"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-left space-y-4 lg:space-y-6">
                <h3 className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[58px] text-[#CDE253] tracking-tight">
                  {highlightCards[1].title}
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg lg:text-[18px] lg:leading-[160%]">
                  {highlightCards[1].body}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global sections */}
        <section className="py-16 md:py-20 lg:py-20 px-4 md:px-8 lg:px-20">
          <div className="max-w-screen-xl mx-auto space-y-16 md:space-y-20">
            {/* Global reach, local roots - Image left, text right */}
            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-16">
              <div className="flex-1 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-lg aspect-[4/3] rounded-[40px] overflow-hidden">
                  <Image
                    src={globalSections[0].image}
                    alt={globalSections[0].title}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-left space-y-4 lg:space-y-6">
                <h3 className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[58px] text-[#333333] tracking-tight">
                  {globalSections[0].title}
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg lg:text-[16px] lg:leading-[150%] text-[#303030] opacity-70">
                  {globalSections[0].body}
                </p>
              </div>
            </div>

            {/* Controlled environments - Text left, image right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 md:gap-12 lg:gap-16">
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-lg aspect-[4/3] rounded-[40px] overflow-hidden">
                  <Image
                    src={globalSections[1].image}
                    alt={globalSections[1].title}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-left space-y-4 lg:space-y-6">
                <h3 className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[58px] text-[#333333] tracking-tight">
                  {globalSections[1].title}
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg lg:text-[16px] lg:leading-[150%] text-[#303030] opacity-70">
                  {globalSections[1].body}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative w-full h-[450px] md:h-[550px] lg:h-[700px]">
          <Image src={ctaImage} alt="CTA background" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/25" />
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <h2 className="font-['Inter:Bold',sans-serif] text-[#115132] text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[152px] xl:leading-[184px] leading-tight tracking-tight text-center">
              Let the Journey Begin
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
