"use client";

import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const imgImage52 = "/assets/28fdde54e479f431a04fc07387aa5c4edfde500f.png";
const imgImage53 = "/assets/bec3804e00991c27344aa5b0a422b5fe5f8ffa81.png";
const imgRectangle19 = "/assets/88e57f1c4d0b5499fe43641635829d433e0f76fd.png";
const imgRectangle20 = "/assets/36e16d20d7eba77888bf886dcc2d41a5c8f94530.png";
const imgSubtract = "/assets/c37c4930ca3d2e3773dfb95db779ee4b9e0318c7.png";
const imgCta = "/assets/82c4c538c30244afbdb7308a18a81b162d0d8d85.png";

interface ProductsOverviewProps {
  onNavigate: (page: string, productName?: string) => void;
}

export function ProductsOverview({ onNavigate }: ProductsOverviewProps) {
  return (
    <div className="bg-white relative w-full min-h-screen overflow-x-hidden">
      <Header onNavigate={onNavigate} />

      <main className="flex flex-col">
        {/* Hero */}
        <section className="relative px-4 md:px-8 lg:px-16 pt-24 md:pt-32 overflow-visible">
          <img
            src={imgImage52}
            alt="Decorative fruit illustration"
            className="hidden md:block pointer-events-none select-none absolute left-0 top-[55%] -translate-y-1/2 -translate-x-1/2 w-[220px] lg:w-[260px] h-auto object-contain"
          />
          <div className="max-w-screen-xl mx-auto">
            <div className="relative w-full overflow-hidden rounded-[48px]">
              {/* Hero Image */}
              <img src={imgSubtract} alt="Colorful frozen fruits" className="w-full h-full object-cover" />
              
              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full px-6 md:px-12 lg:px-20">
                  <div className="max-w-2xl space-y-6">
                    <h1 className="font-['Inter:Medium',sans-serif] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] xl:leading-[96px] leading-tight">
                      Products
                    </h1>
                    <p className="font-['Inter:Medium',sans-serif] text-white text-base sm:text-lg md:text-xl lg:text-[21px] lg:leading-[25px] leading-relaxed">
                      Carefully selected strawberries, freeze-dried or IQF-processed for maximum shelf life and minimal loss of flavor or texture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro copy */}
        <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-16">
            <div className="flex-1 space-y-2 text-left">
              <p className="font-['Inter:Medium',sans-serif] text-[#212121] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] xl:leading-[58px] leading-snug md:leading-tight tracking-tight">Picked. Perfected. Packaged.</p>
            </div>
            <div className="flex-1">
              <p className="font-['Inter:Regular',sans-serif] text-[#303030] text-base sm:text-lg md:text-xl lg:text-[18px] lg:leading-[160%] leading-relaxed">At Meyv, we specialize in delivering high-quality freeze-dried and IQF fruit ingredients to clients worldwide. Founded on the principles of innovation, sustainability, and consistency, our company blends time-tested agricultural practices with state-of-the-art processing technologies.</p>
            </div>
          </div>
        </section>

        {/* Product cards */}
        <section className="px-4 md:px-8 lg:px-16 py-8 md:py-12">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <button
              onClick={() => onNavigate("product-list")}
              className="group rounded-[40px] min-h-[320px] md:min-h-[360px] lg:min-h-[450px] flex flex-col items-center justify-center gap-4 bg-cover bg-center text-white text-center px-6 transition-transform hover:scale-[1.01]"
              title="View IQF products"
              type="button"
            >
              <div className="w-full h-full rounded-[40px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_50%),url('/assets/88e57f1c4d0b5499fe43641635829d433e0f76fd.png')] bg-cover bg-center flex flex-col items-center justify-center gap-2 px-6 py-8">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] lg:leading-[58px] leading-snug tracking-tight text-center">IQF<br />Products</p>
              </div>
            </button>
            <button
              onClick={() => onNavigate("product-list")}
              className="group rounded-[40px] min-h-[320px] md:min-h-[360px] lg:min-h-[450px] flex flex-col items-center justify-center gap-4 bg-cover bg-center text-white text-center px-6 transition-transform hover:scale-[1.01]"
              title="View freeze dry products"
              type="button"
            >
              <div className="w-full h-full rounded-[40px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_50%),url('/assets/36e16d20d7eba77888bf886dcc2d41a5c8f94530.png')] bg-cover bg-center flex flex-col items-center justify-center gap-2 px-6 py-8">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] lg:leading-[58px] leading-snug tracking-tight text-center">Freeze Dry<br />Products</p>
              </div>
            </button>
          </div>
        </section>

        {/* Why choose */}
        <section className="relative px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 overflow-visible">
          <img
            src={imgImage53}
            alt="Berry illustration"
            className="hidden md:block pointer-events-none select-none absolute right-0 top-[55%] -translate-y-1/2 translate-x-1/2 w-48 lg:w-64 h-auto object-contain"
          />
          <div className="max-w-screen-xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
              <p className="font-['Inter:Medium',sans-serif] text-[#212121] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] xl:leading-[58px] leading-snug md:leading-tight tracking-tight text-center md:text-left">Why choose our products?</p>
              <div className="flex-1" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: "1",
                  title: "Quality You Can Taste",
                  copy: "Every product is carefully sourced, processed, and preserved to deliver peak flavor, color, and nutrition—without compromise.",
                },
                {
                  number: "2",
                  title: "Trusted by Professionals Worldwide",
                  copy: "Food brands, manufacturers, and distributors rely on our consistent quality, safety standards, and clean-label fruit solutions.",
                },
                {
                  number: "3",
                  title: "From Farm to Final Product",
                  copy: "Our vertically integrated supply chain ensures traceability, sustainability, and reliable excellence—every step of the way.",
                },
              ].map((item) => (
                <div key={item.number} className="bg-white p-6 md:p-8 space-y-4 text-left">
                  <p className="font-['Inter:Medium',sans-serif] text-[#115132] text-6xl sm:text-7xl md:text-8xl lg:text-[96px] lg:leading-[116px] leading-tight">{item.number}</p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] text-[#212121] text-lg sm:text-xl md:text-2xl lg:text-[21px] lg:leading-[25px] leading-snug">{item.title}</p>
                  <p className="font-['Inter:Regular',sans-serif] text-[#303030] text-sm sm:text-base md:text-lg lg:text-[15px] lg:leading-[150%] leading-relaxed opacity-70">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full h-[400px] md:h-[450px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_100%),url('/assets/82c4c538c30244afbdb7308a18a81b162d0d8d85.png')] bg-cover bg-center flex items-center justify-center">
          <div className="px-4 text-center">
            <p className="font-['Inter:Bold',sans-serif] text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[152px] xl:leading-[184px] leading-tight tracking-tight">
              Fruit, Reinvented
            </p>
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
