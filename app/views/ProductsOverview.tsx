"use client";

import type { CSSProperties } from "react";

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
    <div className="bg-white relative size-full min-h-screen">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.6493388414382935)+(var(--transform-inner-height)*0.7604992985725403)))] items-center justify-center left-[-304px] top-[532px] w-[calc(1px*((var(--transform-inner-height)*0.6493388414382935)+(var(--transform-inner-width)*0.7604992985725403)))]" style={{ "--transform-inner-width": "449.09375", "--transform-inner-height": "509.625" } as CSSProperties}>
        <div className="flex-none rotate-[139.508deg] scale-y-[-100%]">
          <div className="h-[509.639px] relative w-[449.11px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage52} />
          </div>
        </div>
      </div>

      <Header onNavigate={onNavigate} />

      {/* Hero Title Section */}
      <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[160px] rounded-[32px] top-[205px] w-[602px]">
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col items-start pb-[34px] pt-0 px-0 relative shrink-0">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[96px] not-italic relative shrink-0 text-[80px] text-nowrap text-white whitespace-pre">Products</p>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[21px] text-white w-[min-content]">Carefully selected strawberries, freeze-dried or IQF-processed for maximum shelf life and minimal loss of flavor or texture.</p>
        </div>
      </div>

      {/* Hero Background */}
      <div className="absolute h-[400px] left-[80px] top-[110px] w-[1760px]">
        <img alt="" className="block max-w-none size-full" height="400" src={imgSubtract} width="1760" />
      </div>

      {/* Picked. Perfected. Packaged. Section */}
      <div className="absolute box-border content-stretch flex flex-col gap-[120px] items-start left-0 px-[280px] py-[160px] top-[510px] w-[1920px]">
        <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
          <div className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[48px] tracking-[-0.96px] w-[664px]">
            <p className="mb-0">Picked.</p>
            <p>Perfected. Packaged.</p>
          </div>
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[664px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#303030] text-[18px] w-full">At Meyv, we specialize in delivering high-quality freeze-dried and IQF fruit ingredients to clients worldwide. Founded on the principles of innovation, sustainability, and consistency, our company blends time-tested agricultural practices with state-of-the-art processing technologies.</p>
          </div>
        </div>
      </div>

      {/* IQF Products Card */}
      <button 
        onClick={() => onNavigate('product-list')}
        className="absolute h-[450px] left-[280px] rounded-[40px] top-[946px] w-[664px] cursor-pointer border-none p-0 overflow-hidden"
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[40px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[40px] size-full" src={imgRectangle19} />
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[40px] to-50% to-[rgba(0,0,0,0.45)]" />
        </div>
        <div className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-1/2 not-italic text-[48px] text-center text-nowrap text-white top-[169px] tracking-[-0.96px] -translate-x-1/2 whitespace-pre">
          <p className="mb-0">IQF</p>
          <p>Products</p>
        </div>
      </button>

      {/* Freeze Dry Products Card */}
      <button 
        onClick={() => onNavigate('product-list')}
        className="absolute h-[450px] left-[976px] rounded-[40px] top-[946px] w-[664px] cursor-pointer border-none p-0 overflow-hidden"
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[40px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[40px] size-full" src={imgRectangle20} />
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[40px] to-50% to-[rgba(0,0,0,0.45)]" />
        </div>
        <div className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-1/2 not-italic text-[48px] text-center text-nowrap text-white top-[169px] tracking-[-0.96px] -translate-x-1/2 whitespace-pre">
          <p className="mb-0">Freeze Dry</p>
          <p>Products</p>
        </div>
      </button>

      <div className="absolute h-[515px] left-[1635px] top-[1534px] w-[527px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage53} />
      </div>

      {/* Why choose section */}
      <div className="absolute top-[1396px] left-0 w-[1920px]">
        <div className="relative shrink-0 w-full">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[120px] items-start px-[280px] py-[160px] relative w-full">
              <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[48px] tracking-[-0.96px] w-[664px]">Why choose our products?</p>
              </div>

              <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#115132] text-[96px] text-nowrap whitespace-pre">1</p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#212121] text-[21px] w-[min-content]">Quality You Can Taste</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full opacity-70 relative shrink-0 text-[#303030] text-[15px] w-[min-content]">Every product is carefully sourced, processed, and preserved to deliver peak flavor, color, and nutrition—without compromise.</p>
                </div>

                <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#115132] text-[96px] text-nowrap whitespace-pre">2</p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#212121] text-[21px] w-[min-content]">Trusted by Professionals Worldwide</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full opacity-70 relative shrink-0 text-[#303030] text-[15px] w-[min-content]">Food brands, manufacturers, and distributors rely on our consistent quality, safety standards, and clean-label fruit solutions.</p>
                </div>

                <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#115132] text-[96px] text-nowrap whitespace-pre">3</p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#212121] text-[21px] w-[min-content]">From Farm to Final Product</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full opacity-70 relative shrink-0 text-[#303030] text-[15px] w-[min-content]">Our vertically integrated supply chain ensures traceability, sustainability, and reliable excellence—every step of the way.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="absolute top-[2344px] left-0 w-[1920px]">
        <div className="content-stretch flex flex-col gap-[60px] h-[450px] items-center justify-center relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute h-[426.67%] left-0 max-w-none top-[-269.11%] w-full" src={imgCta} />
            </div>
            <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.25)]" />
          </div>
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[152px] text-center text-white tracking-[-3.04px] w-[min-content]">Fruit, Reinvented</p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute top-[2794px] left-0 w-[1920px]">
        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
}
