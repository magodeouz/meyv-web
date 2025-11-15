"use client";

import Image from "next/image";
import { useState } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection as SharedHeroSection } from "@/components/HeroSection";

const heroImage = "/assets/a3df3399bbd1dc78bb969951b80a980fd5eb7236.png";
const aboutImage = "/assets/e7c107b24f0ce6f0dda5844a9b2b7c2d0969fde9.png";
const preservationImage = "/assets/b0cc92681aa86709451caebbe356114df5e8fda5.png";
const ctaImage = "/assets/e313abdd1b398c37d5e7b535b12d9aeda71d60b8.png";
const productImage = "/assets/f545fb012473769fce3efa3563fbf3bf2fa441d0.png";
const pillarImageOne = "/assets/88e57f1c4d0b5499fe43641635829d433e0f76fd.png";
const pillarImageTwo = "/assets/8486d510548be62098d1de4e81000312a0392e81.png";
const pillarImageThree = "/assets/926b2a1350616d7befc15cbef83a7490a2446a01.png";
const pillarImageFour = "/assets/1fccaf4eeb3d7f9bac37820415d7f092bc01feb6.png";
const familiesImage = "/assets/3bdd021126e7144bff0fb88be2d65fb487625a2d.png";

const stats = [
  {
    value: "100%",
    label: "Customer Satisfaction Rate",
    description:
      "Built around customer needs, our premium ingredients earn loyalty and drive word-of-mouth growth.",
  },
  {
    value: "20+",
    label: "Years of Experience",
    description:
      "Two decades of agricultural expertise combined with cutting-edge preservation technology.",
  },
  {
    value: "160K",
    label: "Farmers Around the World",
    description:
      "A global network of growers guided by sustainable, ethical partnerships.",
  },
];

const preservationSteps = [
  {
    number: "01",
    title: "Fresh Harvesting",
    description:
      "Produce is picked at peak ripeness to lock in optimal flavor, color, and nutrition.",
  },
  {
    number: "02",
    title: "Rapid Freezing",
    description:
      "Each piece is frozen individually using ultra-low temperatures to protect texture and prevent clumping.",
  },
  {
    number: "03",
    title: "Long-Lasting Quality",
    description:
      "Gentle vacuum drying preserves taste, aroma, and nutrients for extended shelf life.",
  },
];

const productDetails = [
  {
    id: "raspberry",
    name: "Raspberry",
    description:
      "Vibrant color and bright acidity in a crisp bite—ideal for snacks, baking, or premium toppings.",
    features: [
      "100% natural with no added sugar",
      "High in potassium and fiber",
      "Slices, cubes, or powder formats",
      "Shelf-stable without refrigeration",
    ],
  },
  {
    id: "blueberry",
    name: "Blueberry",
    description:
      "Naturally sweet blueberries preserved at peak freshness with antioxidants intact.",
    features: [
      "Whole, diced, or powdered",
      "Perfect for cereals, confectionery, and beverages",
      "Deep color retention",
      "No preservatives or additives",
    ],
    isDefault: true,
  },
  {
    id: "banana",
    name: "Banana",
    description:
      "Creamy sweetness transformed into a lightweight crunch for smoothies and trail mixes.",
    features: [
      "Naturally sweet, no added sugars",
      "Available as slices or dices",
      "Long-lasting freshness",
      "Great for granolas and bakery",
    ],
  },
  {
    id: "apple",
    name: "Apple",
    description:
      "Classic orchard sweetness with a clean crunch—ready for snacking or blending.",
    features: [
      "Rings, slices, cubes, or powders",
      "Natural color retention",
      "Perfect for breakfast bowls",
      "Lightweight, on-the-go friendly",
    ],
  },
];

const valuePillars = [
  {
    title: "Unmatched Freshness",
    description:
      "Advanced IQF and freeze-drying techniques preserve the original flavor, aroma, and nutrients.",
    image: pillarImageTwo,
    textColor: "text-[#115132]",
    background: "bg-[#f1f4ee]",
  },
  {
    title: "Consistent Quality",
    description:
      "Every batch is verified against international food safety and quality standards.",
    image: pillarImageOne,
    textColor: "text-[#115132]",
    background: "bg-[#f1f4ee]",
  },
  {
    title: "Tailored Solutions",
    description:
      "Custom formats and blends built for retail, foodservice, and manufacturing partners.",
    image: pillarImageThree,
    textColor: "text-[#cde253]",
    background: "bg-[#115132]",
  },
  {
    title: "Sustainable Approach",
    description:
      "Eco-conscious farming, minimal waste, and energy-efficient processing protect our planet.",
    image: pillarImageFour,
    textColor: "text-[#115132]",
    background: "bg-[#cde253]",
  },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: "smooth" });
};

type ProductAccordionProps = {
  activeId: string;
  onToggle: (id: string) => void;
};

function StatCard({ value, label, description }: (typeof stats)[number]) {
  return (
    <div className="space-y-2">
      <p className="font-['Inter:Medium',sans-serif] text-[#115132] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
        {value}
      </p>
      <p className="font-['Inter:Semi_Bold',sans-serif] text-[#212121] text-lg sm:text-xl md:text-2xl leading-snug">
        {label}
      </p>
      <p className="font-['Inter:Regular',sans-serif] text-[#303030]/80 text-sm sm:text-base md:text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-32"
    >
      <div className="max-w-screen-xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-4">
            <p className="font-['Inter:Medium',sans-serif] text-[#212121] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              Where freshness meets innovation
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-[#303030] text-base sm:text-lg md:text-xl leading-relaxed">
              Meyv is redefining how the world experiences fruit through
              sustainable sourcing and advanced preservation. Our mission is to
              deliver nutrient-rich products that retain their original flavor,
              color, and integrity—without compromise.
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-[#303030] text-base sm:text-lg md:text-xl leading-relaxed">
              By blending modern techniques with time-honored harvesting
              practices, we offer shelf-stable solutions that meet demands for
              quality, convenience, and sustainability.
            </p>
            <button
              type="button"
              onClick={() => scrollToSection("products")}
              className="font-['Inter:Bold',sans-serif] text-[#212121] text-base sm:text-lg md:text-xl inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              Learn More <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl">
            <Image
              src={aboutImage}
              alt="Team harvesting fresh produce"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <StatsSection />
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14">
        <div className="flex-1 space-y-6">
          <p className="font-['Inter:Regular',sans-serif] text-[#303030] text-base sm:text-lg md:text-xl leading-relaxed">
            By integrating modern techniques with time-honored methods, we’re
            creating a more resilient, efficient agricultural landscape for
            future generations.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("products")}
            className="font-['Inter:Bold',sans-serif] text-[#212121] text-base sm:text-lg md:text-xl inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            Learn More <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="flex-1 w-full max-w-xl">
          <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl">
            <Image
              src={aboutImage}
              alt="Mission section imagery"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FamiliesFirstSection() {
  return (
    <section className="relative bg-[#f1f4ee] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center space-y-4">
        <p className="font-['Inter:Medium',sans-serif] text-[#115132] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          We believe in putting families first
        </p>
        <p className="font-['Inter:Regular',sans-serif] text-[#3f3f3f] text-base sm:text-lg md:text-xl">
          Nutrition, transparency, and long-term partnerships guide every
          decision we make.
        </p>
      </div>
      <div className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 w-64 h-48 lg:w-96 lg:h-64 opacity-40">
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          <Image
            src={familiesImage}
            alt="Family harvesting fruit"
            fill
            sizes="400px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function ProductAccordion({ activeId, onToggle }: ProductAccordionProps) {
  return (
    <div className="space-y-4">
      {productDetails.map((product) => {
        const isOpen = product.id === activeId;
        return (
          <div key={product.id} className="border-b border-[#d5d9e3] pb-4">
            <button
              type="button"
              onClick={() => onToggle(isOpen ? "" : product.id)}
              className="flex items-center justify-between w-full py-2 text-left"
            >
              <span
                className={`font-['Inter:Medium',sans-serif] text-lg sm:text-xl md:text-2xl ${
                  isOpen ? "text-[#115132]" : "text-[#212121]"
                }`}
              >
                {product.name}
              </span>
              <span
                className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d5d9e3] text-[#212121] transition-transform ${
                  isOpen ? "rotate-180 text-[#115132]" : ""
                }`}
              >
                ⌄
              </span>
            </button>
            {isOpen ? (
              <div className="space-y-3 pt-2">
                <p className="font-['Inter:Regular',sans-serif] text-[#212121] text-base sm:text-lg leading-relaxed">
                  {product.description}
                </p>
                <div className="font-['Inter:Regular',sans-serif] text-sm sm:text-base leading-relaxed text-[#212121] space-y-0.5">
                  {product.features.map((feature) => (
                    <p key={feature}>{`• ${feature}`}</p>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function ProductsSection() {
  const defaultId =
    productDetails.find((detail) => detail.isDefault)?.id ??
    productDetails[0].id;
  const [activeId, setActiveId] = useState(defaultId);

  return (
    <section
      id="products"
      className="px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-32"
    >
      <div className="max-w-screen-xl mx-auto space-y-12">
        <p className="font-['Inter:Medium',sans-serif] text-[#212121] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          Products
        </p>
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12">
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl">
              <Image
                src={productImage}
                alt="Freeze-dried fruit assortment"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 w-full">
            <ProductAccordion
              activeId={activeId}
              onToggle={(id) => setActiveId(id || defaultId)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PreservationMethodsSection() {
  return (
    <section
      id="methods"
      className="bg-neutral-50 px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-32"
    >
      <div className="max-w-screen-xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-6">
            <p className="font-['Inter:Medium',sans-serif] text-[#212121] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              Our preservation methods, explained
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-[#303030] text-base sm:text-lg md:text-xl leading-relaxed">
              From field to final product, we maintain the integrity of every
              ingredient. IQF and gentle vacuum drying lock in peak freshness so
              premium quality is available year-round.
            </p>
            <button
              type="button"
              onClick={() => scrollToSection("products")}
              className="font-['Inter:Bold',sans-serif] text-[#212121] text-base sm:text-lg md:text-xl inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              Learn More <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="relative w-full">
            <div className="relative rounded-[32px] overflow-hidden shadow-xl">
              <div className="relative aspect-[3/4]">
                <Image
                  src={preservationImage}
                  alt="Preservation process"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-[rgba(205,226,83,0.9)] text-[#115132] px-4 py-2 rounded-full font-['Inter:Medium',sans-serif] text-base sm:text-lg">
                  From fresh to forever
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {preservationSteps.map((step) => (
            <div key={step.number} className="space-y-4 border-t border-[#d5d9e3] pt-6">
              <p className="font-['Inter:Medium',sans-serif] text-[#115132] text-3xl sm:text-4xl md:text-5xl">
                {step.number}
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[#212121] text-xl sm:text-2xl">
                {step.title}
              </p>
              <p className="font-['Inter:Regular',sans-serif] text-[#212121] text-base sm:text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuePillarCard({
  title,
  description,
  image,
  background,
  textColor,
}: (typeof valuePillars)[number]) {
  return (
    <div className={`${background} rounded-[32px] p-6 md:p-8 flex flex-col gap-4`}>
      <div className="relative h-40 rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
          className="object-cover"
        />
      </div>
      <div className="space-y-2">
        <p className={`font-['Inter:Medium',sans-serif] text-xl sm:text-2xl ${textColor}`}>
          {title}
        </p>
        <p
          className={`font-['Inter:Regular',sans-serif] text-sm sm:text-base md:text-lg leading-relaxed ${textColor}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function WhyChooseSection() {
  return (
    <section
      id="why"
      className="px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-32"
    >
      <div className="max-w-screen-xl mx-auto space-y-12">
        <p className="font-['Inter:Medium',sans-serif] text-[#212121] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          Why choose our products?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {valuePillars.map((pillar) => (
            <ValuePillarCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative w-full min-h-[320px] md:min-h-[450px] lg:min-h-[560px] my-12">
      <div className="absolute inset-0">
        <Image
          src={ctaImage}
          alt="Fruit crates background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
      </div>
      <div className="relative z-10 max-w-screen-xl mx-auto h-full flex flex-col items-center justify-center gap-6 text-center px-4 md:px-8">
        <p className="font-['Inter:Bold',sans-serif] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Crafted to Stay Fresh
        </p>
        <button
          type="button"
          onClick={() => scrollToSection("products")}
          className="bg-white text-[#115132] px-8 md:px-12 py-3 md:py-4 rounded-full font-['Inter:Medium',sans-serif] text-base sm:text-lg uppercase tracking-wider"
        >
          Products
        </button>
      </div>
    </section>
  );
}

export default function Component1920PxHome() {
  return (
    <div
      id="home"
      className="bg-white relative w-full min-h-screen overflow-x-hidden"
    >
      <SharedHeroSection
        topSlot={<Header />}
        backgroundSrc={heroImage}
        backgroundAlt="Fresh produce crates in an orchard"
        titleLines={["Organic &", "Conventional"]}
        paragraphs={[
          "Premium fruit, vegetable, herb, and specialty ingredients—grown and processed to meet the highest standards.",
        ]}
        paragraphClassName="font-['Inter:Regular',sans-serif] text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl"
        contentWrapperClassName="max-w-screen-xl mx-auto flex h-full w-full flex-col justify-between px-4 md:px-8 lg:px-16 py-32 md:py-48 lg:py-64 text-white gap-12"
        hideGradient
        cta={{
          label: "Products",
          onClick: () => scrollToSection("products"),
          className: "px-6 md:px-10 py-3 md:py-4 border-white",
        }}
      />
      <AboutSection />
      <MissionSection />
      <FamiliesFirstSection />
      <ProductsSection />
      <PreservationMethodsSection />
      <WhyChooseSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
 
