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
      "Meyv shows how products meet consumer needs, enhancing satisfaction and fostering loyalty, leading to recommendations and expanding influence.",
  },
  {
    value: "20+",
    label: "Years of Experience",
    description:
      "With 20 years in agriculture, Meyv shows how products meet consumer needs, enhancing satisfaction and loyalty.",
  },
  {
    value: "160K",
    label: "Farmer Around the World",
    description:
      "Meyv illustrates how products cater to the needs of farmers globally, boosting their satisfaction and loyalty. Loyalty boosts recommendations and expands impact.",
  },
];

const preservationSteps = [
  {
    number: "01",
    title: "Fresh Harvesting",
    description:
      "Fruits and vegetables are picked at peak ripeness to ensure optimal flavor and nutrition.",
  },
  {
    number: "02",
    title: "Rapid Freezing",
    description:
      "Each piece is quickly frozen individually using ultra-low temperatures to prevent clumping and preserve texture.",
  },
  {
    number: "03",
    title: "Long-Lasting Quality",
    description:
      "Maintains natural taste, color, and nutritional value—perfect for foodservice and retail with extended shelf life.",
  },
];

const productDetails = [
  {
    id: "raspberry",
    name: "Raspberry",
    description:
      "Vibrant color and bright acidity in a crisp bite—ideal for snacks, baking, or premium toppings.",
    features: [
      "100% natural, no added sugar",
      "Rich in potassium and fiber",
      "Long shelf life without refrigeration",
      "Available in slices, cubes, or powder formats",
    ],
  },
  {
    id: "blueberry",
    name: "Blueberry",
    description:
      "Our freeze-dried bananas deliver the naturally sweet taste and creamy texture of ripe fruit in a light, crunchy form. Gently processed to preserve nutrients, color, and flavor without any additives, these banana slices are ideal for snacks, cereals, smoothie blends, or baking applications.",
    features: [
      "100% natural, no added sugar",
      "Rich in potassium and fiber",
      "Long shelf life without refrigeration",
      "Available in slices, cubes, or powder formats",
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
      "We preserve the original taste, color, and nutrients of our ingredients through advanced IQF and freeze-drying technologies.",
    image: pillarImageTwo,
    textColor: "text-[#115132]",
    background: "bg-[#F1F4EE]",
    size: "small",
  },
  {
    title: "Consistent Quality",
    description:
      "From harvest to packaging, every product meets strict international food safety and quality standards.",
    image: pillarImageOne,
    textColor: "text-[#115132]",
    background: "bg-[#F1F4EE]",
    size: "medium",
  },
  {
    title: "Tailored Solutions",
    description:
      "We offer customizable formats and blends to fit your production needs, whether for retail, foodservice, or industrial use.",
    image: pillarImageThree,
    textColor: "text-[#CDE253]",
    background: "bg-[#115132]",
    size: "large",
  },
  {
    title: "Sustainable Approach",
    description:
      "We prioritize eco-conscious farming, minimal waste, and energy-efficient processing to protect our planet while feeding the world.",
    image: pillarImageFour,
    textColor: "text-[#115132]",
    background: "bg-[#CDE253]",
    size: "xlarge",
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
      <p className="font-['Inter:Medium',sans-serif] text-[#115132] text-6xl sm:text-7xl md:text-8xl lg:text-[96px] leading-tight lg:leading-[116px]">
        {value}
      </p>
      <p className="font-['Inter:Semi_Bold',sans-serif] text-[#212121] text-lg sm:text-xl lg:text-[21px] leading-snug lg:leading-[25px]">
        {label}
      </p>
      <p className="font-['Inter:Regular',sans-serif] text-[#303030] text-sm sm:text-base lg:text-[15px] leading-relaxed lg:leading-[18px] opacity-70">
        {description}
      </p>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
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
      className="bg-white px-4 md:px-8 lg:px-20 xl:px-[280px] py-16 md:py-24 lg:py-[160px]"
    >
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-start mb-16 lg:mb-[120px]">
          {/* Left side - Title */}
          <div>
            <h2 className="font-['Inter:Medium',sans-serif] text-[#212121] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight lg:leading-[58px] tracking-tight">
              Where freshness meets innovation
            </h2>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-6 lg:space-y-10">
            <p className="font-['Inter:Regular',sans-serif] text-[#303030] text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[160%]">
              Meyv, where tradition meets innovation, is dedicated to redefining how the world experiences fruit—through sustainable sourcing and advanced freeze-drying technology. Our mission is to deliver natural, nutrient-rich fruit products that retain their original flavor, color, and integrity—without compromise. By blending modern preservation techniques with time-honored harvesting practices, we offer shelf-stable solutions that meet today's demands for quality, convenience, and sustainability—supporting healthier choices for generations to come.
            </p>
            <button
              type="button"
              onClick={() => scrollToSection("products")}
              className="font-['Inter:Bold',sans-serif] text-[#303030] text-base sm:text-lg lg:text-[18px] inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              Learn More →
            </button>
          </div>
        </div>
        
        {/* Stats Section */}
        <StatsSection />
      </div>
    </section>
  );
}


function FamiliesFirstSection() {
  return (
    <section className="relative bg-[#F1F4EE] py-16 md:py-20 lg:py-[131px] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-20 relative">
        {/* Small decorative image on left */}
        <div className="hidden lg:block absolute left-[52px] top-1/2 -translate-y-1/2 w-[280px] md:w-[364px] h-[220px] md:h-[285px] rounded-[40px] overflow-hidden">
          <Image
            src={familiesImage}
            alt="Fresh produce"
            fill
            sizes="364px"
            className="object-cover"
          />
        </div>
        
        {/* Center content */}
        <div className="text-center max-w-[876px] mx-auto space-y-8 lg:space-y-12">
          <h2 className="font-['Inter:Medium',sans-serif] text-[#115132] text-3xl sm:text-4xl md:text-6xl lg:text-[96px] leading-tight lg:leading-[116px] tracking-tight text-center">
            We believe in putting families first
          </h2>
        </div>
        
        {/* Bottom image and text */}
        <div className="mt-12 lg:mt-[94px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[91px] items-center max-w-[1360px] mx-auto lg:mx-[280px]">
          <div className="space-y-6 lg:space-y-10">
            <p className="font-['Inter:Regular',sans-serif] text-[#303030] text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[160%]">
              By integrating modern techniques with time-honored methods, we aim to create a more resilient and efficient agricultural landscape for future generations.
            </p>
            <button
              type="button"
              onClick={() => scrollToSection("products")}
              className="font-['Inter:Bold',sans-serif] text-[#303030] text-base sm:text-lg lg:text-[18px] inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              Learn More →
            </button>
          </div>
          
          <div className="relative w-full aspect-[545/403] rounded-[40px] overflow-hidden shadow-lg">
            <Image
              src={aboutImage}
              alt="Family with fresh produce"
              fill
              sizes="(max-width: 1024px) 100vw, 545px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductAccordion({ activeId, onToggle }: ProductAccordionProps) {
  return (
    <div className="space-y-3">
      {productDetails.map((product) => {
        const isOpen = product.id === activeId;
        return (
          <div key={product.id} className={isOpen ? "space-y-4" : ""}>
            <button
              type="button"
              onClick={() => onToggle(isOpen ? "" : product.id)}
              className={`flex items-center justify-between w-full text-left ${
                isOpen ? "pb-3" : "pb-3 border-b border-[#D5D9E3]"
              }`}
            >
              <span
                className={`font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl lg:text-[32px] leading-tight lg:leading-[39px] tracking-tight ${
                  isOpen ? "text-[#115132]" : "text-[#212121]"
                }`}
              >
                {product.name}
              </span>
              <div
                className={`flex items-center justify-center w-8 h-8 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M8 12L16 20L24 12"
                    stroke={isOpen ? "#115132" : "#212121"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            {isOpen ? (
              <div className="space-y-4 pb-3 border-b border-[#D5D9E3]">
                <p className="font-['Inter:Regular',sans-serif] text-[#212121] text-base lg:text-[16px] leading-relaxed lg:leading-[160%]">
                  {product.description}
                </p>
                <div className="space-y-2">
                  <p className="font-['Inter:Medium',sans-serif] text-[#212121] text-base lg:text-[16px] leading-relaxed lg:leading-[160%]">
                    Features:
                  </p>
                  <div className="font-['Inter:Regular',sans-serif] text-base lg:text-[16px] leading-relaxed lg:leading-[160%] text-[#212121]">
                    {product.features.map((feature) => (
                      <p key={feature}>{`• ${feature}`}</p>
                    ))}
                  </div>
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
      className="bg-white px-4 md:px-8 lg:px-20 xl:px-[280px] py-16 md:py-24 lg:py-[160px]"
    >
      <div className="max-w-[1920px] mx-auto space-y-12 lg:space-y-[60px]">
        <h2 className="font-['Inter:Medium',sans-serif] text-[#212121] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight lg:leading-[58px] tracking-tight">
          Products
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[548px_1fr] gap-10 lg:gap-[148px] items-start">
          {/* Left side - Product Image */}
          <div className="relative w-full">
            <div className="relative w-full aspect-[548/491] rounded-[40px] overflow-hidden shadow-lg">
              <Image
                src={productImage}
                alt="Freeze-dried fruit assortment"
                fill
                sizes="(max-width: 1024px) 100vw, 548px"
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Product Accordion */}
          <div className="relative w-full max-w-[664px]">
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
      className="bg-[#FAFAFA] px-4 md:px-8 lg:px-20 xl:px-[280px] py-16 md:py-24 lg:py-[160px]"
    >
      <div className="max-w-[1920px] mx-auto space-y-12 lg:space-y-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-start">
          {/* Left side - Content */}
          <div className="space-y-6 lg:space-y-10">
            <h2 className="font-['Inter:Medium',sans-serif] text-[#212121] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight lg:leading-[58px] tracking-tight">
              Our preservation methods, explained
            </h2>
            <p className="font-['Inter:Regular',sans-serif] text-[#303030] text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[160%]">
              From field to final product, our mission is to maintain the integrity of every ingredient we process. Whether flash-frozen with IQF or gently vacuum-dried, our methods lock in peak freshness, making premium quality available all year round.
            </p>
            <button
              type="button"
              onClick={() => scrollToSection("products")}
              className="font-['Inter:Bold',sans-serif] text-[#303030] text-base sm:text-lg lg:text-[18px] inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              Learn More →
            </button>
          </div>
          
          {/* Right side - Empty space for layout */}
          <div className="hidden lg:block"></div>
        </div>
        
        {/* Image and Steps Row */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-8">
          {/* Image with badge */}
          <div className="relative w-full lg:w-[316px] flex-shrink-0">
            <div className="relative w-full aspect-[316/540] rounded-[40px] overflow-hidden shadow-lg">
              <Image
                src={preservationImage}
                alt="Preservation process"
                fill
                sizes="(max-width: 1024px) 100vw, 316px"
                className="object-cover"
              />
              <div className="absolute left-0 top-[400px] bg-[rgba(205,226,83,0.8)] rounded-r-[20px] px-5 py-2">
                <p className="font-['Inter:Medium',sans-serif] text-[#FAFAFA] text-xl sm:text-2xl lg:text-[28px] leading-tight lg:leading-[34px] tracking-tight">
                  From fresh to forever
                </p>
              </div>
            </div>
          </div>
          
          {/* Preservation Steps */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
            {preservationSteps.map((step, index) => (
              <div 
                key={step.number} 
                className={`space-y-5 flex flex-col ${
                  index === 0 ? 'justify-start' : 
                  index === 1 ? 'justify-center' : 
                  'justify-end'
                }`}
              >
                <p className="font-['Inter:Medium',sans-serif] text-[#115132] text-4xl sm:text-5xl lg:text-[48px] leading-tight lg:leading-[58px] tracking-tight">
                  {step.number}
                </p>
                <div className="space-y-4">
                  <p className="font-['Inter:Medium',sans-serif] text-[#212121] text-xl sm:text-2xl lg:text-[24px] leading-tight lg:leading-[29px]">
                    {step.title}
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[#212121] text-base lg:text-[16px] leading-relaxed lg:leading-[160%]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
  size,
}: (typeof valuePillars)[number]) {
  const imageHeight = size === "small" ? "h-[105px]" : size === "medium" ? "h-[160px]" : size === "large" ? "h-[152px]" : "h-[476px]";
  
  return (
    <div className={`${background} rounded-[24px] p-5 md:p-6 flex flex-col gap-4 md:gap-6`}>
      <div className={`relative ${imageHeight} rounded-[24px] overflow-hidden`}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
          className="object-cover"
        />
      </div>
      <div className="space-y-3 md:space-y-[14px]">
        <h3 className={`font-['Inter:Medium',sans-serif] text-xl sm:text-2xl lg:text-[28px] leading-tight lg:leading-[34px] ${textColor}`}>
          {title}
        </h3>
        <p
          className={`font-['Inter:Regular',sans-serif] text-sm lg:text-[14px] leading-relaxed lg:leading-[17px] ${textColor}`}
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
      className="bg-white px-4 md:px-8 lg:px-20 xl:px-[280px] py-16 md:py-24 lg:py-[160px]"
    >
      <div className="max-w-[1920px] mx-auto space-y-12 lg:space-y-[60px]">
        <h2 className="font-['Inter:Medium',sans-serif] text-[#212121] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight lg:leading-[58px] tracking-tight">
          Why choose our products?
        </h2>
        
        {/* Custom Grid Layout - matches Figma design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[316px_432px_548px] gap-4 lg:gap-8">
          {/* Small card - Unmatched Freshness */}
          <div className="lg:row-span-1">
            <ValuePillarCard {...valuePillars[0]} />
          </div>
          
          {/* Medium card - Consistent Quality */}
          <div className="lg:row-span-1">
            <ValuePillarCard {...valuePillars[1]} />
          </div>
          
          {/* XLarge card - Sustainable Approach (spans 2 rows) */}
          <div className="lg:row-span-2">
            <ValuePillarCard {...valuePillars[3]} />
          </div>
          
          {/* Large card - Tailored Solutions (spans 2 columns) */}
          <div className="md:col-span-2 lg:col-span-2">
            <ValuePillarCard {...valuePillars[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <div className="absolute inset-0">
        <Image
          src={ctaImage}
          alt="Fruit crates background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/25" />
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-10 lg:gap-[60px] text-center px-4">
        <h2 className="font-['Inter:Bold',sans-serif] text-[#115132] text-5xl sm:text-7xl md:text-8xl lg:text-[152px] leading-tight lg:leading-[184px] tracking-tight">
          Crafted to Stay Fresh
        </h2>
        <button
          type="button"
          onClick={() => scrollToSection("products")}
          className="bg-white text-[#115132] px-8 md:px-12 py-4 md:py-5 lg:px-12 lg:py-[10px] rounded-[32px] font-['Inter:Medium',sans-serif] text-base sm:text-lg lg:text-[18px] hover:bg-opacity-90 transition-all inline-flex items-center gap-4 uppercase tracking-[0.1em]"
        >
          <span>Products</span>
          <div className="w-10 h-10 bg-[#115132] rounded-full flex items-center justify-center">
            <svg width="23" height="16" viewBox="0 0 23 16" fill="none">
              <path
                d="M22 8L2 8M22 8L15 1M22 8L15 15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
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
          "We provide premium fruit, vegetable, herb, and specialty ingredients—grown and processed to meet the highest standards.",
        ]}
        paragraphClassName="font-['Inter:Regular',sans-serif] text-white text-lg sm:text-xl md:text-xl lg:text-[21px] leading-relaxed max-w-[785px]"
        contentWrapperClassName="max-w-screen-xl mx-auto flex h-full w-full flex-col justify-between px-4 md:px-8 lg:px-20 py-24 md:py-32 lg:py-40 text-white gap-12 md:gap-16"
        hideGradient
        cta={{
          label: "Products",
          onClick: () => scrollToSection("products"),
          className: "px-6 py-4 border-white rounded-full",
        }}
      />
      <AboutSection />
      <FamiliesFirstSection />
      <ProductsSection />
      <PreservationMethodsSection />
      <WhyChooseSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
 
