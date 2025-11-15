"use client";

import Image from "next/image";
import svgPaths from "@/imports/svg-lasglpsk63";

const imgImage66 = "/assets/ffeba28eb520fc86d5a21d336c1c9fc39ddb9b41.png";

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
      <path d="M6.38672 6.64062L0.386719 0.640625L12.3867 0.640625L6.38672 6.64062Z" fill="var(--fill-0, #64748B)" />
    </svg>
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

export function Footer() {
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
            <Image
              src={imgImage66}
              alt="Meyv slogan"
              width={180}
              height={60}
              className="h-14 w-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <FooterNavigation />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[#333333] font-['Inter:Regular',sans-serif] text-sm sm:text-base leading-relaxed opacity-70">
          <p>Copyright © 2025. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:opacity-100 transition-opacity"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
