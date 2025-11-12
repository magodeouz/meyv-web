"use client";

import type { CSSProperties } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import svgPaths from "@/imports/svg-0dp63v6w8b";

const imgCta = "/assets/f545fb012473769fce3efa3563fbf3bf2fa441d0.png";
const imgImage = "/assets/f7e2551cb869ca3bcf26a39b607254ba142ad1ae.png";
const imgImage1 = "/assets/6c3d626ccfa29c270df4cea4a3c68cab9a0ebc7b.png";
const imgImage2 = "/assets/27f5b63142058765da03e8c1f7d233fd84aafe26.png";
const imgImage3 = "/assets/e6b0ff8832c4cd3c5e8c49a8286fa65d4d1c37d1.png";
const imgSubtract = "/assets/9d653691428d97fcc29414b2816c940cfe1b17de.png";
const imgRectangle16 = "/assets/da6f214df68e9135ea7da87f3a6afad486061d61.png";

function Layer1() {
  return (
    <div className="relative size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_arrow_left)" id="Layer_1">
          <path d={svgPaths.p3a92e6c0} fill="var(--fill-0, #212121)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_arrow_left">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Layer2() {
  return (
    <div className="relative size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_arrow_right)" id="Layer_1">
          <path d={svgPaths.p3a92e6c0} fill="var(--fill-0, #115132)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_arrow_right">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface ProductDetailProps {
  onNavigate: (page: string, productName?: string) => void;
  productName?: string;
}

const relatedProducts = [
  { name: 'Sour Cherries', image: imgImage },
  { name: 'Raspberry', image: imgImage1 },
  { name: 'Mango', image: imgImage2 },
  { name: 'Blueberry', image: imgImage3 },
];

export function ProductDetail({ onNavigate, productName = 'Raspberry' }: ProductDetailProps) {
  return (
    <div className="bg-white relative size-full min-h-screen">
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

      {/* Product Title */}
      <div className="absolute box-border content-stretch flex gap-[10px] items-center left-[1052px] p-[10px] top-[605px] w-[588px]">
        <div aria-hidden="true" className="absolute border-[#d5d9e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#115132] text-[56px] text-nowrap whitespace-pre">{productName}</p>
      </div>

      {/* Product Image */}
      <div className="absolute h-[450px] left-[280px] top-[605px] w-[664px]">
        <img alt={productName} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgRectangle16} />
      </div>

      {/* Product Details */}
      <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[1052px] top-[756px] w-[584px]">
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          <div className="bg-[#115132] rounded-[400px] shrink-0 size-[16px]" />
          <div className="content-stretch flex flex-col gap-[7px] items-start not-italic relative shrink-0 w-[548px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#115132] text-[18px] w-full">Powder</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[15px] w-full">100% fruit powders are made from ground freeze-dried fruits and are available in a range of sieve sizes.</p>
          </div>
        </div>

        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          <div className="bg-[#115132] rounded-[400px] shrink-0 size-[16px]" />
          <div className="content-stretch flex flex-col gap-[7px] items-start not-italic relative shrink-0 w-[548px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#115132] text-[18px] w-full">Granule</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[15px] w-full">Freeze-dried fruit pieces are natural, and versatile. Depending on your selection whole or broken bits and fruits with or without peel.</p>
          </div>
        </div>

        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          <div className="bg-[#115132] rounded-[400px] shrink-0 size-[16px]" />
          <div className="content-stretch flex flex-col gap-[7px] items-start not-italic relative shrink-0 w-[548px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#115132] text-[18px] w-full">Slices</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[15px] w-full">Freeze-dried fruit slices are a natural and healthy snack on their own, but also add real fruit appeal to breakfast cereals, muesli and granola.</p>
          </div>
        </div>

        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          <div className="bg-[#115132] rounded-[400px] shrink-0 size-[16px]" />
          <div className="content-stretch flex flex-col gap-[7px] items-start not-italic relative shrink-0 w-[548px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#115132] text-[18px] w-full">Whole</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[15px] w-full">Freeze-drying preserves the natural colour, shape and goodness of fruits and creates a light-weight crunchy product suitable for a range of applications.</p>
          </div>
        </div>

        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          <div className="bg-[#115132] rounded-[400px] shrink-0 size-[16px]" />
          <div className="content-stretch flex flex-col gap-[7px] items-start not-italic relative shrink-0 w-[548px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#115132] text-[18px] w-full">Cube</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[15px] w-full">Freeze-dried fruit cubes are natural and healthy snack on their own. 3*3*3, 6*6*6, 10*10*10</p>
          </div>
        </div>
      </div>

      {/* Advantage Card */}
      <div className="absolute bg-[#f1f4ee] box-border content-stretch flex flex-col gap-[7px] items-start left-[1052px] not-italic p-[32px] rounded-[20px] top-[1274px] w-[588px]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#115132] text-[18px] w-full">Advantage Of Freeze- Dried Ingredients</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[15px] w-full">Freeze-dried products retain much of the vivid color, piece identity, intense flavor and nutritional value of the original raw material.</p>
      </div>

      {/* Why choose our products */}
      <div className="absolute box-border content-stretch flex flex-col gap-[40px] items-start left-0 px-[280px] py-[120px] top-[1413px] w-[1920px]">
        <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[28px] tracking-[-0.56px] w-[664px]">Why choose our products?</p>
        </div>

        <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
          <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px relative shrink-0">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#115132] text-[60px] text-nowrap whitespace-pre">1</p>
            <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#212121] text-[18px] w-full">Quality You Can Taste</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[15px] w-full">Every product is carefully sourced, processed, and preserved to deliver peak flavor, color, and nutrition—without compromise.</p>
            </div>
          </div>

          <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px relative shrink-0">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#115132] text-[60px] text-nowrap whitespace-pre">2</p>
            <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#212121] text-[18px] w-full">Trusted by Professionals Worldwide</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[15px] w-full">Food brands, manufacturers, and distributors rely on our consistent quality, safety standards, and clean-label fruit solutions.</p>
            </div>
          </div>

          <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px relative shrink-0">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#115132] text-[60px] text-nowrap whitespace-pre">3</p>
            <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#212121] text-[18px] w-full">From Farm to Final Product</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[15px] w-full">Our vertically integrated supply chain ensures traceability, sustainability, and reliable excellence—every step of the way.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="absolute box-border content-stretch flex flex-col gap-[32px] items-start left-0 px-[280px] py-[160px] top-[1825px] w-[1920px]">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[32px] text-nowrap tracking-[-0.64px] whitespace-pre">Related Products</p>
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
            <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "40", "--transform-inner-height": "40" } as CSSProperties}>
              <div className="flex-none rotate-[270deg] scale-y-[-100%]">
                <Layer1 />
              </div>
            </div>
            <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "40", "--transform-inner-height": "40" } as CSSProperties}>
              <div className="flex-none rotate-[270deg]">
                <Layer2 />
              </div>
            </div>
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
            {relatedProducts.map((product, index) => (
              <button
                key={index}
                onClick={() => onNavigate('product-detail', product.name)}
                className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[316px] cursor-pointer bg-transparent border-none"
              >
                <div className="h-[316px] relative rounded-[40px] shrink-0 w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={product.image} />
                </div>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[21px] text-center w-full">{product.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="absolute content-stretch flex flex-col gap-[60px] h-[450px] items-center justify-center left-0 top-[2596px] w-[1920px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[599.76%] left-0 max-w-none top-[-216.65%] w-[112.46%]" src={imgCta} />
          </div>
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.25)]" />
        </div>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[#115132] text-[152px] text-center tracking-[-3.04px] w-[min-content]">Fruit, Reinvented</p>
      </div>

      {/* Footer */}
      <div className="absolute top-[3046px] left-0 w-[1920px]">
        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
}
