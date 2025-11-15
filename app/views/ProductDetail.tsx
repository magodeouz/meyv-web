"use client";

import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const heroBackground = "/assets/9d653691428d97fcc29414b2816c940cfe1b17de.png";
const heroProduct = "/assets/da6f214df68e9135ea7da87f3a6afad486061d61.png";
const ctaImage = "/assets/f545fb012473769fce3efa3563fbf3bf2fa441d0.png";

const productVariants = [
  {
    title: "Powder",
    description:
      "100% fruit powders are made from ground freeze-dried fruits and are available in a range of sieve sizes.",
  },
  {
    title: "Granule",
    description:
      "Freeze-dried fruit pieces are natural and versatile—choose whole or broken bits with or without peel.",
  },
  {
    title: "Slices",
    description:
      "Lightweight slices retain natural colour, shape, and crunch—perfect for cereals, granola, and snacking.",
  },
  {
    title: "Whole",
    description:
      "Freeze-drying preserves colour, shape, and goodness to create premium fruit suitable for endless applications.",
  },
  {
    title: "Cube",
    description:
      "Freeze-dried cubes (3–10 mm) are clean-label inclusions that elevate bakery, confectionery, and snacking.",
  },
];

const advantageText =
  "Freeze-dried products retain vivid colour, piece identity, intense flavour, and nutritional value of the original raw material.";

const whyChooseItems = [
  {
    title: "Quality You Can Taste",
    description:
      "Every product is carefully sourced, processed, and preserved to deliver peak flavour, colour, and nutrition—without compromise.",
  },
  {
    title: "Trusted Worldwide",
    description:
      "Food brands and manufacturers rely on our consistent quality, safety standards, and clean-label fruit solutions.",
  },
  {
    title: "From Farm to Final Product",
    description:
      "Our vertically integrated supply chain ensures traceability, sustainability, and reliable excellence—every step of the way.",
  },
];

const relatedProducts = [
  { name: "Sour Cherries", image: "/assets/f7e2551cb869ca3bcf26a39b607254ba142ad1ae.png" },
  { name: "Raspberry", image: "/assets/6c3d626ccfa29c270df4cea4a3c68cab9a0ebc7b.png" },
  { name: "Mango", image: "/assets/27f5b63142058765da03e8c1f7d233fd84aafe26.png" },
  { name: "Blueberry", image: "/assets/e6b0ff8832c4cd3c5e8c49a8286fa65d4d1c37d1.png" },
];

interface ProductDetailProps {
  onNavigate: (page: string, productName?: string) => void;
  productName?: string;
}

export function ProductDetail({ onNavigate, productName = "Raspberry" }: ProductDetailProps) {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <Header onNavigate={onNavigate} />
      <main className="flex flex-col gap-16 md:gap-24 lg:gap-32 pb-16 md:pb-24">
        {/* Hero */}
        <section className="px-4 md:px-8 lg:px-16 pt-20">
          <div className="relative max-w-screen-xl mx-auto">
            <div className="relative h-[260px] sm:h-[320px] lg:h-[360px] rounded-[64px] overflow-hidden">
              <Image src={heroBackground} alt="Berries background" fill priority className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-12 py-10 text-white space-y-4 max-w-2xl">
                <p className="font-['Inter:Medium',sans-serif] text-3xl sm:text-4xl md:text-5xl leading-tight">Products</p>
                <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl leading-relaxed">
                  Carefully selected strawberries, freeze-dried or IQF-processed for maximum shelf life and minimal loss of flavour or
                  texture.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-10 right-0 w-28 h-16 bg-white rounded-tl-[32px]" />
            <div className="absolute -bottom-5 right-28 w-14 h-10 bg-white rounded-t-full" />
          </div>
        </section>

        {/* Product highlight */}
        <section className="px-4 md:px-8 lg:px-16">
          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1 rounded-[40px] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.08)] p-4">
              <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden">
                <Image
                  src={heroProduct}
                  alt={`${productName} bowl`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 rounded-[32px] border border-[#dfe6da] bg-white px-6 py-8 space-y-6">
              <p className="font-['Inter:Medium',sans-serif] text-3xl sm:text-4xl text-[#115132]">{productName}</p>
              <div className="space-y-6">
                {productVariants.map((variant) => (
                  <div key={variant.title} className="flex gap-4">
                    <span className="mt-1 h-3.5 w-3.5 rounded-full bg-[#115132] shrink-0" />
                    <div className="space-y-1">
                      <p className="font-['Inter:Semi_Bold',sans-serif] text-lg sm:text-xl text-[#115132]">{variant.title}</p>
                      <p className="font-['Inter:Regular',sans-serif] text-base text-[#303030]/80 leading-relaxed">{variant.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-[20px] border border-[#d7e5ce] bg-[#f2f7ed] px-5 py-4">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-base text-[#115132]">Advantage of Freeze-Dried Ingredients</p>
                <p className="font-['Inter:Regular',sans-serif] text-sm sm:text-base text-[#303030]/80 leading-relaxed">{advantageText}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="px-4 md:px-8 lg:px-16">
          <div className="max-w-screen-xl mx-auto space-y-10">
            <p className="font-['Inter:Medium',sans-serif] text-3xl sm:text-4xl text-[#212121]">Why choose our products?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseItems.map((item, index) => (
                <div key={item.title} className="flex gap-5 items-start">
                  <span className="font-['Inter:Medium',sans-serif] text-4xl text-[#115132]">{index + 1}</span>
                  <div className="space-y-2">
                    <p className="font-['Inter:Semi_Bold',sans-serif] text-lg sm:text-xl text-[#212121]">{item.title}</p>
                    <p className="font-['Inter:Regular',sans-serif] text-base text-[#303030]/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related products */}
        <section className="px-4 md:px-8 lg:px-16">
          <div className="max-w-screen-xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl text-[#212121]">Related Products</p>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe6da] text-[#115132]"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  ←
                </button>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe6da] text-[#115132]"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  →
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <button
                  key={product.name}
                  type="button"
                  onClick={() => onNavigate("product-detail", product.name)}
                  className="group space-y-4 text-center"
                >
                  <div className="relative w-full aspect-square rounded-[32px] overflow-hidden shadow-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] text-lg text-[#212121]">{product.name}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 md:px-8 lg:px-16">
          <div className="relative max-w-screen-xl mx-auto rounded-[48px] overflow-hidden text-center text-white py-20 md:py-28">
            <Image src={ctaImage} alt="Fruit background" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative space-y-6 px-6">
              <p className="font-['Inter:Bold',sans-serif] text-4xl sm:text-5xl md:text-6xl">Fruit, Reinvented</p>
              <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                Premium IQF fruits crafted for modern food innovation. Let’s build your next hero product together.
              </p>
              <button
                type="button"
                className="bg-white text-[#115132] px-10 py-3 rounded-full font-['Inter:Medium',sans-serif] text-base sm:text-lg"
                onClick={() => onNavigate("contact")}
              >
                Talk to our team
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
