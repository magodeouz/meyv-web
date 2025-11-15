"use client";

import Image from "next/image";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection as SharedHeroSection } from "@/components/HeroSection";
import svgPaths from "./svg-uxdpx2db5h";

const imgImage54 = "/assets/5d67a7f916b6f43f466fc2c9204eff762a68d9fe.png";
const imgImage55 = "/assets/0e9e73385ce1d4831434ca7b2f84acde628e099d.png";
const imgImage56 = "/assets/8123f21ea8fc9b038b5691ee9999d4159a1da9a0.png";
const imgImage57 = "/assets/462e9e5325591b6266824e6f96c8dcaef043fbf7.png";
const imgImage58 = "/assets/2f36a75ad0ba6d95c024dfda8808d5abd06be8c5.png";
const imgImage66 = "/assets/ffeba28eb520fc86d5a21d336c1c9fc39ddb9b41.png";
const imgImage = "/assets/166061a53088192508b93d7e7f99bcbd487eb813.png";
const imgImage1 = "/assets/7de7b8b5b2103373d58539913cb1593d70b344b0.png";
const imgImage2 = "/assets/f45333813f767b890458d78f18201021fae2063e.png";
const imgImage69 = "/assets/92a8529c10c728fdc55976887e3edbf6144447ec.png";
const imgImage70 = "/assets/655397c830d575c259ba76535fb6961f2b8e8620.png";
const imgImage71 = "/assets/5fb70debef23da97ca100e1774de6a88df37b0e8.png";
const imgImage72 = "/assets/59f5bef59c12fa22f1af08726da5fe7c70b79f7c.png";
const imgImage73 = "/assets/f4c5273490c14ef10fe66896f120a4bec2c49fdd.png";
const imgImage74 = "/assets/99d738476c3e84dbde0f5f31c1c3207a1153a403.png";

const heroDescription = [
  "Discover the journey behind our brand and the purpose that guides everything we do."
];

const aboutParagraphs = [
  "At Meyv, we specialize in delivering high-quality freeze-dried and IQF fruit ingredients to clients worldwide. Founded on the principles of innovation, sustainability, and consistency, our company blends time-tested agricultural practices with state-of-the-art processing technologies.",
  "From farm to final product, every step is handled with care to preserve the natural taste, nutrients, and texture of each fruit. Our commitment to quality and traceability ensures that our partners receive safe, clean-label products tailored to meet the evolving demands of the food industry.",
  "With a global mindset and deep respect for the land, we continue to grow—alongside our customers, our farmers, and the future of food."
];

const visionParagraphs = [
  "At Meyv, our purpose is simple yet impactful: to preserve the best of nature so it can nourish more people, more sustainably.",
  "We specialize in delivering premium-quality freeze-dried and IQF fruits that retain the full flavor, color, and nutrients of freshly harvested produce. By combining advanced food technology with ethical sourcing and transparent operations, we offer clean-label solutions trusted by food brands around the world."
];

const futureParagraphs = [
  "We envision a future where food is fresher, safer, and more sustainable—without compromise.",
  "As global demand grows for healthy, convenient, and shelf-stable ingredients, our vision is to lead the evolution of natural preservation. Through continuous innovation and strong partnerships, we aim to set the global benchmark for quality in freeze-dried and IQF fruit solutions.",
  "We see a world where everyone, everywhere, has access to nutritious ingredients that are as good for the body as they are for the earth."
];

const achievements = [
  {
    headline: "20+",
    suffix: "Years",
    title: "Proven Expertise",
    description: "Two decades of excellence in fruit processing and preservation."
  },
  {
    headline: "160K+",
    suffix: "Farmers",
    title: "Global Reach",
    description: "Supporting a worldwide network of trusted growers."
  },
  {
    headline: "100%",
    suffix: "Natural",
    title: "Pure Ingredients",
    description: "No additives, just real fruit—preserved at its peak."
  }
];

const milestones = [
  {
    title: "The Early Years",
    paragraphs: [
      "Bakioğlu Holding's journey began in 1973 when Enver Bakioğlu founded Bak Ambalaj in İzmir, producing paper bags. By 1976, it expanded into polyethylene packaging, and in 1980 invested in rotogravure printing and plastic film, entering high-quality printed packaging.",
      "In 1990, the company moved to modern facilities in the İzmir Atatürk Organized Industrial Zone, continuing to grow with new technologies and exports. By the late 1990s, exports reached 25%, and a new plant was acquired in 1998.",
      "Today, Bak Ambalaj operates four facilities in İzmir, ranks among Turkey's Top 1000 Industrial Enterprises, and exports over 70% of its production—mainly to Western Europe."
    ],
    image: imgImage69
  },
  {
    title: "Transition to Vertical Integration",
    paragraphs: [
      "Founded in 1993, Polibak Plastic Film marked a key step toward Bakioğlu Holding's vertical integration by producing plastic films—essential materials for flexible packaging.",
      "Operating on 170,000 m² in the İzmir Atatürk Organized Industrial Zone, Polibak has produced BOPP and CPP films since 1994 and ranks among Turkey's Top 500 Industrial Enterprises. With advanced extrusion, slitting, and metallization lines, each new BOPP line further boosts its production capacity."
    ],
    image: imgImage70,
    reverse: true
  },
  {
    title: "Establishment of Service Companies",
    paragraphs: [
      "In 1994, Baksaş Insurance was established to meet the Holding's growing insurance needs and serve external clients. The same year, Egevizyon Media (Ege TV and Radio Ege) was founded to connect Ankara and the Aegean region, marking the Holding's entry into the media sector."
    ],
    image: imgImage71
  },
  {
    title: "The Final Stages of Vertical Integration",
    paragraphs: [
      "Founded in 1998 as Wetzel AŞ under the Bakioğlu-Wetzel partnership, Bak Gravür became part of Bakioğlu Holding in 2001. Renamed in 2017 to align with the Group's unified branding, it now ranks among Turkey's leading rotogravure cylinder manufacturers."
    ],
    image: imgImage72,
    reverse: true
  },
  {
    title: "Expanding Vertical Integration and Global Growth",
    paragraphs: [
      "Founded in 2002, Bareks Plastik strengthened Bakioğlu Holding's vertical integration by producing multi-layer polyethylene film for food packaging, printing, and lamination, with an annual capacity of 53,000 tons. Exporting over 70% of its products to 30+ countries, Bareks continues to grow through investments in the İzmir Free Zone.",
      "To complete the integration chain, Bakcycle Recycling was founded in 2021, and Bak Ambalaj Foreign Trade (Bak International) was established in 2015 to support expanding export operations."
    ],
    image: imgImage73
  },
  {
    title: "Global Expansion and New Horizons",
    paragraphs: [
      "To strengthen its presence in Western Europe, Bak Flexibles BV was founded in Amsterdam in 2015, followed by Bak Global Trade BV (now P&B Flexibles) in 2016 to manage raw material sourcing and financing. In 2025, Bak Flexibles Germany will be established in Düsseldorf to serve the DACH region.",
      "Expanding into new sectors, Freshbak was founded in 2017 as Turkey's first industrial-scale freeze-dried food producer. In 2023, MegV Frozen Foods joined the group, processing 4,000 tons annually and exporting 60% of its output, further supporting Turkey's agricultural economy."
    ],
    image: imgImage74,
    reverse: true
  }
];


function AboutHeroSection() {
  return (
    <SharedHeroSection
      topSlot={<Header />}
      backgroundSrc={imgImage2}
      backgroundAlt="Orchard rows with harvesting tractor"
      titleLines={["Our Story"]}
      paragraphs={heroDescription}
      paragraphClassName="font-['Inter:Regular',sans-serif] text-white text-base sm:text-lg md:text-xl lg:text-[21px] lg:leading-[25px] leading-relaxed max-w-2xl"
      contentWrapperClassName="max-w-screen-xl mx-auto flex h-full w-full flex-col justify-between px-4 md:px-8 lg:px-20 py-20 md:py-28 lg:py-32 text-white gap-8 md:gap-10"
      hideGradient
    />
  );
}

function AboutSection() {
  return (
    <section className="py-16 md:py-20 lg:py-40 px-4 md:px-8 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-8">
          <div className="flex-1 text-left">
            <h2 className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[58px] text-[#212121] tracking-tight">
              Rooted in nature. Driven by technology.
            </h2>
          </div>
          <div className="flex-1 text-left space-y-4 lg:space-y-10">
            {aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="font-['Inter:Regular',sans-serif] text-base sm:text-lg lg:text-[18px] lg:leading-[160%] text-[#303030]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GroupCompaniesSection() {
  const logos = [imgImage54, imgImage55, imgImage56, imgImage57, imgImage58];

  return (
    <section className="bg-[#FAFAFA] py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8 md:gap-10">
        <div className="text-left">
          <h3 className="font-['Inter:Medium',sans-serif] text-xl sm:text-2xl lg:text-[32px] lg:leading-[39px] text-[#212121] tracking-tight">
            Other group companies
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-8 md:gap-10 lg:gap-12">
          {logos.map((logo) => (
            <div key={logo} className="flex items-center justify-center">
              <Image
                src={logo}
                alt="Partner company logo"
                width={150}
                height={62}
                className="h-10 w-auto md:h-12 lg:h-14 object-contain hover:opacity-70 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="bg-[#115132] py-16 md:py-20 lg:py-32 px-4 md:px-8 lg:px-20 text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-16 md:gap-20 lg:gap-32">
        {/* What drives us */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 md:gap-12 lg:gap-16">
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-lg rounded-[40px] overflow-hidden">
              <Image
                src={imgImage}
                alt="Selective berry processing"
                width={620}
                height={563}
                className="w-full h-auto object-cover rounded-[40px]"
              />
            </div>
          </div>
          <div className="flex-1 text-left space-y-6 lg:space-y-8">
            <h2 className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[58px] text-[#CDE253] tracking-tight">
              What drives us
            </h2>
            <div className="space-y-4 lg:space-y-10">
              {visionParagraphs.map((text) => (
                <p
                  key={text}
                  className="font-['Inter:Regular',sans-serif] text-base sm:text-lg lg:text-[18px] lg:leading-[160%]"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        {/* Our future focus */}
        <div className="flex flex-col lg:flex-row-reverse items-start justify-between gap-10 md:gap-12 lg:gap-16">
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg rounded-[40px] overflow-hidden">
              <Image
                src={imgImage1}
                alt="Thriving orchard rows"
                width={620}
                height={475}
                className="w-full h-auto object-cover rounded-[40px]"
              />
            </div>
          </div>
          <div className="flex-1 text-left space-y-6 lg:space-y-8">
            <h2 className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[58px] text-[#CDE253] tracking-tight">
              Our future focus
            </h2>
            <div className="space-y-4 lg:space-y-10">
              {futureParagraphs.map((text) => (
                <p
                  key={text}
                  className="font-['Inter:Regular',sans-serif] text-base sm:text-lg lg:text-[18px] lg:leading-[160%]"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-40 px-4 md:px-8 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20">
        <div className="text-left">
          <h2 className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[58px] text-[#212121] tracking-tight">
            Key achievements
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-8">
          {achievements.map(({ headline, suffix, title, description }) => (
            <div key={title} className="flex flex-col gap-2">
              <div className="text-[#115132]">
                <span className="font-['Inter:Medium',sans-serif] text-5xl sm:text-6xl md:text-7xl lg:text-[96px] lg:leading-[116px]">
                  {headline}
                </span>
                <span className="font-['Inter:Medium',sans-serif] text-xl sm:text-2xl md:text-3xl lg:text-[32px] align-top ml-1">
                  {suffix}
                </span>
              </div>
              <p className="font-['Inter:Semi_Bold',sans-serif] text-lg sm:text-xl lg:text-[21px] lg:leading-[25px] text-[#212121] mt-1">
                {title}
              </p>
              <p className="font-['Inter:Regular',sans-serif] text-sm sm:text-base lg:text-[15px] lg:leading-[18px] text-[#303030] opacity-70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MilestonesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-32 px-4 md:px-8 lg:px-20 bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20">
        <div className="text-left space-y-3 lg:space-y-6">
          <h2 className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[58px] text-[#212121] tracking-tight">
            Milestones
          </h2>
          <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg lg:text-[16px] lg:leading-[19px] text-[#303030] opacity-70">
            Since 1973, we've been working to "endure through time."
          </p>
        </div>
        <div className="flex flex-col gap-16 md:gap-20">
          {milestones.map(({ title, paragraphs, image, reverse }) => (
            <div
              key={title}
              className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-start justify-between gap-10 md:gap-12 lg:gap-16`}
            >
              <div className="flex-1 text-left space-y-4 lg:space-y-6">
                <h3 className="font-['Inter:Medium',sans-serif] text-xl sm:text-2xl md:text-3xl lg:text-[32px] lg:leading-[39px] text-[#115132]">
                  {title}
                </h3>
                <div className="space-y-3 lg:space-y-4">
                  {paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-['Inter:Regular',sans-serif] text-base sm:text-lg lg:text-[16px] lg:leading-[150%] text-[#303030] opacity-70"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-lg rounded-[40px] overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    width={548}
                    height={440}
                    className="w-full h-auto object-cover rounded-[40px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative w-full h-[450px] md:h-[550px] lg:h-[700px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_100%),url('/assets/82c4c538c30244afbdb7308a18a81b162d0d8d85.png')] bg-cover bg-center flex items-center justify-center">
      <div className="px-4 text-center">
        <h2 className="font-['Inter:Bold',sans-serif] text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[152px] xl:leading-[184px] leading-tight tracking-tight">
          Let the Journey Begin
        </h2>
      </div>
    </section>
  );
}


export default function Component1920PxAbout() {
  return (
    <div className="w-full min-h-screen bg-white">
      <AboutHeroSection />
      <AboutSection />
      <GroupCompaniesSection />
      <VisionSection />
      <AchievementsSection />
      <MilestonesSection />
      <CtaSection />
      <Footer />
    </div>
  );
}