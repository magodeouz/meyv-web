"use client";

import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const heroImage = "/assets/2f66065bf70904e46b181fea861d96a697e786a5.png";
const heroInsetImage = "/assets/d009e6cdfad9224c09bac53ee0ae46d9d683f012.png";
const ctaImage = "/assets/f7e2551cb869ca3bcf26a39b607254ba142ad1ae.png";

const products = [
  { name: "Soul Cherries", image: "/assets/f7e2551cb869ca3bcf26a39b607254ba142ad1ae.png" },
  { name: "Mango", image: "/assets/27f5b63142058765da03e8c1f7d233fd84aafe26.png" },
  { name: "Blueberry", image: "/assets/e6b0ff8832c4cd3c5e8c49a8286fa65d4d1c37d1.png" },
  { name: "Strawberry", image: "/assets/da6f214df68e9135ea7da87f3a6afad486061d61.png" },
  { name: "Apple", image: "/assets/73f455577d742a33355c0e1e32220cc2f31ecf0f.png" },
  { name: "Blackberry", image: "/assets/8e342947f328fbee2c161b2ba361c2d1cb901b74.png" },
  { name: "Raspberry", image: "/assets/6c3d626ccfa29c270df4cea4a3c68cab9a0ebc7b.png" },
  { name: "Peach", image: "/assets/88654e2f867c824a61814c77d48e19547c949694.png" },
];

interface ProductListProps {
  onNavigate: (page: string, productName?: string) => void;
}

function SearchIcon() {
  return (
    <svg className="w-4 h-4 text-[#64748B]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="8" strokeWidth="2" />
      <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg className="w-3 h-3 text-[#64748B]" viewBox="0 0 12 7" fill="none" stroke="currentColor">
      <path d="M1 1.5 6 5 11 1.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProductList({ onNavigate }: ProductListProps) {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <Header onNavigate={onNavigate} />
      <main className="flex flex-col gap-16 md:gap-24 lg:gap-32 pb-16 md:pb-24">
        {/* Hero */}
        <section className="px-4 md:px-8 lg:px-16 pt-28">
          <div className="max-w-screen-xl mx-auto bg-white rounded-[48px] shadow-lg p-4 sm:p-6 lg:p-10">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
              <div className="relative flex-1 rounded-[40px] overflow-hidden min-h-[320px]">
                <Image
                  src={heroImage}
                  alt="Assorted IQF fruits"
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 h-full w-full flex flex-col justify-end p-6 sm:p-8 lg:p-12 space-y-4 max-w-2xl">
                  <p className="font-['Inter:Medium',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-white leading-tight">
                    IQF Products
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl text-white leading-relaxed">
                    Explore our full range of premium fruit products, preserved at peak freshness for lasting quality.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex items-end justify-center">
                <div className="w-full max-w-sm rounded-[40px] overflow-hidden shadow-lg">
                  <Image
                    src={heroInsetImage}
                    alt="Hand-picked frozen fruit detail"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="px-4 md:px-8 lg:px-16">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-16">
            <div className="flex-1 text-center md:text-left space-y-4">
              <p className="font-['Inter:Medium',sans-serif] text-3xl sm:text-4xl md:text-5xl text-[#212121] leading-tight">
                Picked. Perfected. Packaged.
              </p>
            </div>
            <div className="flex-1 text-center md:text-left space-y-4">
              <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl text-[#303030] leading-relaxed">
                At Meyv, we specialize in delivering high-quality freeze-dried and IQF fruit ingredients to clients worldwide. Founded on
                the principles of innovation, sustainability, and consistency, our company blends time-tested agricultural practices with
                state-of-the-art processing technologies.
              </p>
              <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl text-[#303030] leading-relaxed">
                From farm to final product, every step is handled with care to preserve natural taste, nutrients, and texture—ensuring your
                ingredients arrive at their flavorful best.
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="px-4 md:px-8 lg:px-16">
          <div className="max-w-screen-xl mx-auto space-y-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <p className="font-['Inter:Medium',sans-serif] text-3xl sm:text-4xl md:text-5xl text-[#212121]">Product List</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 bg-white">
                  <SearchIcon />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent border-none outline-none font-['Inter:Regular',sans-serif] text-sm sm:text-base text-[#303030] placeholder:text-[#303030]/60"
                  />
                </label>
                <button className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 bg-white">
                  <span className="font-['Inter:Regular',sans-serif] text-sm sm:text-base text-[#303030]/80">Order by</span>
                  <ChevronDownIcon />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => (
                <button
                  key={product.name}
                  type="button"
                  onClick={() => onNavigate("product-detail", product.name)}
                  className="flex flex-col gap-4 items-center text-center group"
                >
                  <div className="relative w-full aspect-square overflow-hidden rounded-[32px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] text-lg sm:text-xl text-[#212121]">{product.name}</p>
                </button>
              ))}
            </div>

            <div className="flex justify-center">
              <button className="bg-[#115132] text-white font-['Inter:Medium',sans-serif] text-base sm:text-lg px-10 py-4 rounded-full">
                Load more product
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-4 md:px-8 lg:px-16">
          <div className="relative max-w-screen-xl mx-auto rounded-[48px] overflow-hidden text-center text-white py-20 md:py-28">
            <Image src={ctaImage} alt="Fruit processing" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative space-y-6 px-6">
              <p className="font-['Inter:Bold',sans-serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Fruit, Reinvented</p>
              <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                Premium IQF fruits crafted for modern food innovation. Let’s build your next hero product together.
              </p>
              <button
                type="button"
                className="bg-white text-[#115132] px-10 py-3 rounded-full font-['Inter:Medium',sans-serif] text-base sm:text-lg"
                onClick={() => onNavigate("contact")}
              >
                Contact our team
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
