"use client";

import { Header } from "@/components/Header";
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

function Logo() {
  return (
    <div className="h-16 w-32 md:h-20 md:w-40">
      <svg className="h-full w-full" viewBox="0 0 133 64" fill="none" preserveAspectRatio="xMidYMid meet">
        <g clipPath="url(#logo-clip)">
          <path d={svgPaths.p2c2b4370} fill="var(--fill-0, #19459D)" />
          <path d={svgPaths.p29295e00} fill="var(--fill-0, #19459D)" />
          <path d={svgPaths.p3209fa00} fill="var(--fill-0, #19459D)" />
          <path d={svgPaths.p1edaac70} fill="var(--fill-0, #19459D)" fillRule="evenodd" clipRule="evenodd" />
          <path d={svgPaths.p410e800} fill="url(#logo-paint-0)" />
          <path d={svgPaths.p2f949000} fill="url(#logo-paint-1)" />
          <path d={svgPaths.p98c4c70} fill="var(--fill-0, #CFE5AE)" />
          <path d={svgPaths.p44fb900} fill="var(--fill-0, #0D6D38)" />
          <path d={svgPaths.pe555700} fill="var(--fill-0, #CFE5AE)" />
          <path d={svgPaths.p3f4ffe00} fill="var(--fill-0, #19459D)" />
        </g>
        <defs>
          <linearGradient id="logo-paint-0" x1="54.3525" x2="50.634" y1="63.3711" y2="46.5562" gradientUnits="userSpaceOnUse">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <linearGradient id="logo-paint-1" x1="19.1797" x2="54.1336" y1="52.8126" y2="45.0812" gradientUnits="userSpaceOnUse">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <clipPath id="logo-clip">
            <rect width="132.489" height="64" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownArrowIcon() {
  return (
    <svg className="h-2 w-3" viewBox="0 0 13 7" fill="none" preserveAspectRatio="xMidYMid meet">
      <path d={svgPaths.p11ff1530} fill="var(--fill-0, #64748B)" />
    </svg>
  );
}

function AboutHeroSection() {
  return (
    <SharedHeroSection
      topSlot={<Header />}
      backgroundSrc={imgImage2}
      backgroundAlt="Orchard rows with harvesting tractor"
      titleLines={["Our Story"]}
      paragraphs={heroDescription}
      titleClassName="font-['Inter:Medium',sans-serif] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
      paragraphClassName="font-['Inter:Regular',sans-serif] text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-xl"
      contentWrapperClassName="max-w-screen-xl mx-auto flex h-full w-full flex-col justify-between px-6 sm:px-10 lg:px-16 py-16 md:py-24 lg:py-28 text-white gap-10 md:gap-14"
      overlayImage={{
        src: imgImage1,
        alt: "Close-up of blueberries",
        containerClassName: "hidden md:flex justify-end md:items-end",
        className: "h-32 w-48 lg:h-36 lg:w-56 rounded-[24px] object-cover"
      }}
    />
  );
}

function AboutSection() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="flex-1 text-center md:text-left space-y-4">
            <p className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#212121] leading-snug md:leading-tight">
              Rooted in nature. Driven by technology.
            </p>
    </div>
          <div className="flex-1 text-center md:text-left space-y-4">
            {aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl leading-relaxed text-[#303030]"
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
    <section className="bg-neutral-50 py-12 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8 md:gap-16">
        <div className="text-center md:text-left space-y-4">
          <p className="font-['Inter:Medium',sans-serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#212121] leading-snug md:leading-tight">
            Other group companies
        </p>
      </div>
        <div className="flex flex-nowrap items-center justify-center gap-6 md:gap-10 overflow-x-auto">
          {logos.map((logo) => (
            <div key={logo} className="flex items-center justify-center">
              <img
                src={logo}
                alt="Partner company logo"
                className="h-12 w-auto md:h-16 lg:h-20 object-contain"
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
    <section className="bg-[#115132] py-12 md:py-24 px-4 md:px-8 lg:px-16 text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 flex justify-center lg:justify-start">
            <img
              src={imgImage}
              alt="Selective berry processing"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-3xl object-cover"
            />
    </div>
          <div className="flex-1 text-center lg:text-left space-y-4">
            <p className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#cde253] leading-snug md:leading-tight">
              What drives us
            </p>
            {visionParagraphs.map((text) => (
              <p
                key={text}
                className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl leading-relaxed"
              >
                {text}
              </p>
            ))}
    </div>
    </div>
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={imgImage1}
              alt="Thriving orchard rows"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-3xl object-cover"
            />
    </div>
          <div className="flex-1 text-center lg:text-left space-y-4">
            <p className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#cde253] leading-snug md:leading-tight">
              Our future focus
            </p>
            {futureParagraphs.map((text) => (
              <p
                key={text}
                className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl leading-relaxed"
              >
                {text}
              </p>
            ))}
      </div>
    </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8 md:gap-16">
        <div className="text-center md:text-left space-y-4">
          <p className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#212121] leading-snug md:leading-tight">
            Key achievements
          </p>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {achievements.map(({ headline, suffix, title, description }) => (
            <div key={title} className="flex flex-col gap-4">
              <div className="font-['Inter:Medium',sans-serif] text-4xl sm:text-5xl md:text-6xl text-[#115132] leading-snug md:leading-tight">
                {headline}
                <span className="ml-1 text-lg sm:text-xl md:text-2xl text-[#115132]">{suffix}</span>
    </div>
              <p className="font-['Inter:Semi_Bold',sans-serif] text-lg sm:text-xl md:text-2xl text-[#212121] leading-snug">
                {title}
              </p>
              <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl leading-relaxed text-[#303030]">
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
    <section className="py-12 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-12 md:gap-16">
        <div className="text-center md:text-left space-y-4">
          <p className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#212121] leading-snug md:leading-tight">
            Milestones
          </p>
          <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl leading-relaxed text-[#303030]/70">
            Since 1973, we've been working to “endure through time.”
          </p>
        </div>
        <div className="flex flex-col gap-12 md:gap-16">
          {milestones.map(({ title, paragraphs, image, reverse }) => (
            <div
              key={title}
              className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-8 md:gap-16`}
            >
              <div className="flex-1 text-center md:text-left space-y-4">
                <p className="font-['Inter:Medium',sans-serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#115132] leading-snug md:leading-tight">
                  {title}
                </p>
                {paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl leading-relaxed text-[#303030]"
                  >
                    {paragraph}
                  </p>
                ))}
      </div>
              <div className="flex-1 flex justify-center md:justify-end">
                <img
                  src={image}
                  alt={title}
                  className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover rounded-3xl"
                />
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
    <section className="py-12 md:py-24 px-4 md:px-8 lg:px-16 bg-[#f0f7f2]">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center gap-6 md:gap-10">
        <p className="font-['Inter:Bold',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#115132] leading-snug md:leading-tight">
          Let the Journey Begin
        </p>
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
            <svg className="h-12 w-12" viewBox="0 0 96 96" fill="none" preserveAspectRatio="xMidYMid meet">
              <path d={svgPaths.p1b7f1380} fill="var(--fill-0, #115132)" />
      </svg>
          </span>
          <div className="text-left space-y-2">
            <p className="font-['Inter:Semi_Bold',sans-serif] text-lg sm:text-xl md:text-2xl text-[#115132]">
              Ready to create something extraordinary?
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl text-[#303030] leading-relaxed">
              Connect with our team to explore tailored ingredient solutions for your products.
            </p>
    </div>
    </div>
    </div>
    </section>
  );
}

function FooterNavigation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      <div className="space-y-4">
        <p className="font-['Inter:Semi_Bold',sans-serif] text-lg sm:text-xl md:text-2xl text-[#212121] leading-snug">
          Navigation
        </p>
        <div className="flex flex-col gap-2 font-['Inter:Medium',sans-serif] text-base sm:text-lg md:text-xl text-[#212121]">
          <span className="text-[#115132]">Home</span>
          <span className="opacity-70">Products</span>
          <span className="opacity-70">Who we are</span>
          <span className="flex items-center gap-2 opacity-70">
            Quality
            <DropdownArrowIcon />
          </span>
          <span className="opacity-70">Contact</span>
    </div>
    </div>
      <div className="space-y-4">
        <p className="font-['Inter:Semi_Bold',sans-serif] text-lg sm:text-xl md:text-2xl text-[#212121] leading-snug">
          Follow Us
        </p>
        <div className="flex flex-col gap-2 font-['Inter:Medium',sans-serif] text-base sm:text-lg md:text-xl text-[#212121] opacity-70">
          <span>LinkedIn</span>
          <span>Instagram</span>
        </div>
      </div>
      <div className="space-y-4">
        <p className="font-['Inter:Semi_Bold',sans-serif] text-lg sm:text-xl md:text-2xl text-[#212121] leading-snug">
          Legal
        </p>
        <div className="flex flex-col gap-2 font-['Inter:Medium',sans-serif] text-base sm:text-lg md:text-xl text-[#212121] opacity-70">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-12 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <Logo />
          <div className="text-center md:text-right space-y-2 font-['Inter:Medium',sans-serif] text-[#212121]">
            <p className="text-xl sm:text-2xl md:text-3xl leading-snug">+90 (232) 864 22 00</p>
            <p className="text-lg sm:text-xl md:text-2xl leading-snug">sales@meyv.com.tr</p>
      </div>
    </div>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12">
          <div className="flex-1 space-y-4">
            <p className="font-['Inter:Semi_Bold',sans-serif] text-xl sm:text-2xl md:text-3xl text-[#212121] leading-snug">
              Naturally Sweet, Perfectly Dried
            </p>
            <img
              src={imgImage66}
              alt="Meyv slogan"
              className="h-14 w-auto object-contain"
            />
      </div>
          <div className="flex-1">
            <FooterNavigation />
      </div>
    </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[#333333] font-['Inter:Regular',sans-serif] text-sm sm:text-base leading-relaxed opacity-70">
          <p>Copyright © 2025. All rights reserved.</p>
          <p>Back to Top</p>
    </div>
      </div>
    </footer>
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