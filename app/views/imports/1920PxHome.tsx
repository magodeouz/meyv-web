"use client";

import type { CSSProperties } from "react";

import { Header } from "@/components/Header";
import NavLink from "@/components/NavLink";
import { HeroSection as SharedHeroSection } from "@/components/HeroSection";
import svgPaths from "./svg-k8wa0wvcwg";

const imgImage45 = "/assets/4235fb4fc0155f8606913f4a8a328eddc47ae6f3.png";
const imgImage = "/assets/e7c107b24f0ce6f0dda5844a9b2b7c2d0969fde9.png";
const imgImage1 = "/assets/b0cc92681aa86709451caebbe356114df5e8fda5.png";
const imgCta = "/assets/e313abdd1b398c37d5e7b535b12d9aeda71d60b8.png";
const imgImage66 = "/assets/ffeba28eb520fc86d5a21d336c1c9fc39ddb9b41.png";
const imgImage2 = "/assets/f545fb012473769fce3efa3563fbf3bf2fa441d0.png";
const imgImage3 = "/assets/88e57f1c4d0b5499fe43641635829d433e0f76fd.png";
const imgImage4 = "/assets/8486d510548be62098d1de4e81000312a0392e81.png";
const imgImage5 = "/assets/926b2a1350616d7befc15cbef83a7490a2446a01.png";
const imgImage6 = "/assets/1fccaf4eeb3d7f9bac37820415d7f092bc01feb6.png";
const imgSubtract = "/assets/a3df3399bbd1dc78bb969951b80a980fd5eb7236.png";
const imgImage7 = "/assets/3bdd021126e7144bff0fb88be2d65fb487625a2d.png";
const imgImage47 = "/assets/fb252188c435916b7a570630eb63bdd319548751.png";
const imgImage8 = "/assets/76c0d6b70fc2309f69378e002683c4e617591eac.png";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: "smooth" });
};

const toggleProduct = (detailsId: string, headerId?: string) => {
  const target = document.getElementById(detailsId);
  if (!target) return;
  const allIds = [
    "product-raspberry-details",
    "product-blueberry-details",
    "product-banana-details",
    "product-apple-details",
  ];
  const allHeaderIds = [
    "header-raspberry",
    "header-blueberry",
    "header-banana",
    "header-apple",
  ];
  const wasOpen = !target.classList.contains("is-hidden");
  // Close all others
  for (const id of allIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el !== target) {
      el.classList.add("is-hidden");
    }
  }
  // Remove 'is-open' from all headers
  for (const hid of allHeaderIds) {
    const h = document.getElementById(hid);
    if (h) h.classList.remove("is-open");
  }
  // Toggle the clicked one (allow closing if it was open)
  if (wasOpen) {
    target.classList.add("is-hidden");
  } else {
    target.classList.remove("is-hidden");
    if (headerId) {
      const headerEl = document.getElementById(headerId);
      if (headerEl) headerEl.classList.add("is-open");
    }
  }
};

function Layer() {
  return (
    <div className="h-[64px] relative shrink-0 w-[132.489px]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 64">
        <g clipPath="url(#clip0_1_298)" id="Layer_1">
          <path d={svgPaths.p2c2b4370} fill="var(--fill-0, #19459D)" id="Vector" />
          <path d={svgPaths.p29295e00} fill="var(--fill-0, #19459D)" id="Vector_2" />
          <path d={svgPaths.p3209fa00} fill="var(--fill-0, #19459D)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1edaac70} fill="var(--fill-0, #19459D)" fillRule="evenodd" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p410e800} fill="url(#paint0_linear_1_298)" id="Vector_5" />
            <path d={svgPaths.p2f949000} fill="url(#paint1_linear_1_298)" id="Vector_6" />
            <g id="Group_2">
              <path d={svgPaths.p98c4c70} fill="var(--fill-0, #CFE5AE)" id="Vector_7" />
            </g>
            <g id="Group_3">
              <path d={svgPaths.p44fb900} fill="var(--fill-0, #0D6D38)" id="Vector_8" />
            </g>
            <g id="Group_4">
              <path d={svgPaths.pe555700} fill="var(--fill-0, #CFE5AE)" id="Vector_9" />
            </g>
          </g>
          <path d={svgPaths.p3f4ffe00} fill="var(--fill-0, #19459D)" id="Vector_10" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_298" x1="54.3525" x2="50.634" y1="63.3711" y2="46.5562">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_298" x1="19.1797" x2="54.1336" y1="52.8126" y2="45.0812">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <clipPath id="clip0_1_298">
            <rect fill="white" height="64" width="132.489" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <NavLink
      to="/"
      end
      className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 cursor-pointer group"
      onClick={(event) => {
        if (window.location.pathname === "/") {
          event.preventDefault();
          scrollToSection("home");
        }
      }}
    >
      {({ isActive }) => (
        <>
          <div
            aria-hidden="true"
            className={`absolute border-[#cde253] border-[0px_0px_2px] border-solid inset-0 pointer-events-none transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`}
          />
          <p
            className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre transition-colors duration-200 ${
              isActive ? "text-[#115132]" : "text-[#212121]"
            }`}
          >
            Home
          </p>
        </>
      )}
    </NavLink>
  );
}

function Frame2() {
  return (
    <NavLink
      to="/products"
      className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 cursor-pointer group"
    >
      {({ isActive }) => (
        <>
          <p
            className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre transition-colors duration-200 ${
              isActive ? "text-[#115132]" : "text-[#212121]"
            }`}
          >
            Products
          </p>
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-[#cde253] transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`}
          />
        </>
      )}
    </NavLink>
  );
}

function Frame1() {
  return (
    <NavLink
      to="/about"
      className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 cursor-pointer group"
    >
      {({ isActive }) => (
        <>
          <p
            className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre transition-colors duration-200 ${
              isActive ? "text-[#115132]" : "text-[#212121]"
            }`}
          >
            Who we are
          </p>
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-[#cde253] transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`}
          />
        </>
      )}
    </NavLink>
  );
}

function Frame4() {
  return (
    <NavLink
      to="/factories"
      className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 cursor-pointer group"
    >
      {({ isActive }) => (
        <>
          <p
            className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre transition-colors duration-200 ${
              isActive ? "text-[#115132]" : "text-[#212121]"
            }`}
          >
            Factories
          </p>
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-[#cde253] transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`}
          />
        </>
      )}
    </NavLink>
  );
}

function DropdownArrowIcon300WRounded() {
  return (
    <div className="h-[7px] relative shrink-0 w-[12.775px]" data-name="Dropdown Arrow Icon 300W Rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
        <g id="Dropdown Arrow Icon 300W Rounded">
          <path d={svgPaths.p11ff1530} fill="var(--fill-0, #64748B)" id="Dropdown Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <NavLink
      to="/quality"
      className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 cursor-pointer group"
    >
      {({ isActive }) => (
        <>
          <p
            className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre transition-colors duration-200 ${
              isActive ? "text-[#115132]" : "text-[#212121]"
            }`}
          >{`Quality & Certificates`}</p>
          <DropdownArrowIcon300WRounded />
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-[#cde253] transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`}
          />
        </>
      )}
    </NavLink>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-[27px] items-center relative shrink-0" data-name="Menu">
      <Frame />
      <Frame2 />
      <Frame1 />
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[125px] items-center relative shrink-0">
      <Layer />
      <Menu />
    </div>
  );
}

function LongArrowRight300WRounded() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22.559px]" data-name="Long Arrow Right 300W Rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 16">
        <g id="Long Arrow Right 300W Rounded">
          <path d={svgPaths.pcc9c080} fill="var(--fill-0, #115132)" id="Arrow Right" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-[10000px] shrink-0 size-[40px]">
      <LongArrowRight300WRounded />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#115132] box-border content-stretch flex gap-[16px] h-[48px] items-center justify-center pl-[32px] pr-[6px] py-[10px] relative rounded-[32px] shrink-0 cursor-pointer" onClick={() => { window.location.href = "mailto:sales@meyv.com.tr?subject=Meyv%20Website%20Inquiry"; }}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact Us</p>
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return <Header />;
}

function Frame16() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 items-start w-full space-y-4">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-[#303030] text-base sm:text-lg md:text-xl">
        <p className="mb-4">Meyv, where tradition meets innovation, is dedicated to redefining how the world experiences fruit—through sustainable sourcing and advanced freeze-drying technology. Our mission is to deliver natural, nutrient-rich fruit products that retain their original flavor, color, and integrity—without compromise.</p>
        <p>By blending modern preservation techniques with time-honored harvesting practices, we offer shelf-stable solutions that meet today&apos;s demands for quality, convenience, and sustainability—supporting healthier choices for generations to come.</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] leading-normal text-base sm:text-lg md:text-xl text-[#303030]">
        <span className="font-['Inter:Bold',sans-serif] font-bold">Learn More</span>
        <span>{` →`}</span>
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start w-full">
      <div className="flex-1 text-left">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-tight text-[#212121] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Where freshness meets innovation</p>
      </div>
      <div className="flex-1">
        <Frame16 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="flex-1 flex flex-col gap-3 md:gap-4 items-start space-y-2">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#115132] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">100%</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#212121] text-lg sm:text-xl md:text-2xl leading-snug">Customer Satisfaction Rate</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#303030] text-sm sm:text-base md:text-lg opacity-70 leading-relaxed">Meyv shows how products meet consumer needs, enhancing satisfaction and fostering loyalty, leading to recommendations and expanding influence.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="flex-1 flex flex-col gap-3 md:gap-4 items-start space-y-2">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#115132] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">20+</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#212121] text-lg sm:text-xl md:text-2xl leading-snug">Years of Experience</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#303030] text-sm sm:text-base md:text-lg opacity-70 leading-relaxed">With 20 years in agriculture, Meyv shows how products meet consumer needs, enhancing satisfaction and loyalty.</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="flex-1 flex flex-col gap-3 md:gap-4 items-start space-y-2">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#115132] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">160K</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#212121] text-lg sm:text-xl md:text-2xl leading-snug">Farmer Around the World</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#303030] text-sm sm:text-base md:text-lg opacity-70 leading-relaxed">Meyv illustrates how products cater to the needs of farmers globally, boosting their satisfaction and loyalty. Loyalty boosts recommendations and expands impact.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start w-full">
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame18() {
  return (
    <div id="about" className="relative w-full px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto space-y-16 md:space-y-24">
        <Frame17 />
        <Frame15 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 items-start space-y-4">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-[#303030] text-base sm:text-lg md:text-xl">By integrating modern techniques with time-honored methods, we aim to create a more resilient and efficient agricultural landscape for future generations.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-normal text-[#303030] text-base sm:text-lg md:text-xl">
        <span className="font-['Inter:Bold',sans-serif] font-bold">Learn More</span>
        <span>{` →`}</span>
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="relative w-full px-4 md:px-8 lg:px-16 xl:px-24 py-12 md:py-24">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="flex-1">
          <Frame19 />
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img alt="" className="w-full max-w-md h-auto aspect-[4/3] object-cover rounded-3xl" src={imgImage} />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 items-start space-y-4">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-[#303030] text-base sm:text-lg md:text-xl">From field to final product, our mission is to maintain the integrity of every ingredient we process. Whether flash-frozen with IQF or gently vacuum-dried, our methods lock in peak freshness, making premium quality available all year round.</p>
      <button
        type="button"
        onClick={() => scrollToSection("products")}
        className="font-['Inter:Regular',sans-serif] leading-normal text-base sm:text-lg md:text-xl text-[#212121] inline-flex items-center gap-2 cursor-pointer bg-transparent border-none p-0 hover:opacity-70 transition-opacity"
      >
        <span className="font-['Inter:Bold',sans-serif] font-bold">Learn More</span>
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}

function Frame39() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start w-full">
      <div className="flex-1">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-tight text-[#212121] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Our preservation methods, explained</p>
      </div>
      <div className="flex-1">
        <Frame34 />
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute bottom-4 left-0 bg-[rgba(205,226,83,0.8)] px-4 md:px-6 py-2 md:py-3 rounded-br-2xl rounded-tr-2xl">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-snug text-neutral-50 text-lg sm:text-xl md:text-2xl">From fresh to forever</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="relative w-full">
      <img alt="" className="w-full h-auto aspect-[3/4] object-cover rounded-3xl" src={imgImage1} />
      <Frame54 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 items-start space-y-2">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-snug text-[#212121] text-lg sm:text-xl md:text-2xl">Fresh Harvesting</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-[#212121] text-sm sm:text-base md:text-lg">Fruits and vegetables are picked at peak ripeness to ensure optimal flavor and nutrition.</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 w-full space-y-2">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-tight text-[#115132] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">01</p>
      <Frame35 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 items-start space-y-2">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-snug text-[#212121] text-lg sm:text-xl md:text-2xl">Rapid Freezing</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-[#212121] text-sm sm:text-base md:text-lg">Each piece is quickly frozen individually using ultra-low temperatures to prevent clumping and preserve texture.</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 w-full space-y-2">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-tight text-[#115132] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">02</p>
      <Frame41 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 items-start space-y-2">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-snug text-[#212121] text-lg sm:text-xl md:text-2xl">Long-Lasting Quality</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-[#212121] text-sm sm:text-base md:text-lg">Maintains natural taste, color, and nutritional value—perfect for foodservice and retail with extended shelf life.</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 w-full space-y-2">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-tight text-[#115132] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">03</p>
      <Frame44 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 w-full">
      <Frame36 />
      <div className="hidden lg:block w-full h-px bg-[#D5D9E3]" />
      <Frame37 />
      <div className="hidden lg:block w-full h-px bg-[#D5D9E3]" />
      <Frame38 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center w-full">
      <div className="flex-1">
        <Frame53 />
      </div>
      <div className="flex-1">
        <Frame40 />
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div id="methods" className="relative bg-neutral-50 w-full px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto space-y-12 md:space-y-16">
        <Frame39 />
        <Frame42 />
      </div>
    </div>
  );
}

function LongArrowRight300WRounded1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22.559px]" data-name="Long Arrow Right 300W Rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 16">
        <g id="Long Arrow Right 300W Rounded">
          <path d={svgPaths.pcc9c080} fill="var(--fill-0, white)" id="Arrow Right" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#115132] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-[10000px] shrink-0 size-[40px]">
      <LongArrowRight300WRounded1 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white flex gap-4 h-14 md:h-16 items-center justify-center px-6 md:px-8 py-3 rounded-full cursor-pointer hover:opacity-90 transition-opacity" onClick={() => scrollToSection("products")}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-normal text-[#115132] text-base sm:text-lg md:text-xl uppercase tracking-wider">Products</p>
      <Frame14 />
    </div>
  );
}

function Cta() {
  return (
    <div className="relative w-full h-[400px] md:h-[550px] lg:h-[700px]" data-name="CTA">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute w-full h-full object-cover" src={imgCta} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.25)]" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16 px-4 md:px-8">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-tight text-[#115132] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center max-w-5xl">Crafted to Stay Fresh</p>
        <Frame20 />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[64px] relative shrink-0 w-[132.489px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 64">
        <g clipPath="url(#clip0_1_271)" id="Logo">
          <path d={svgPaths.p2c2b4370} fill="var(--fill-0, #19459D)" id="Vector" />
          <path d={svgPaths.p29295e00} fill="var(--fill-0, #19459D)" id="Vector_2" />
          <path d={svgPaths.p3209fa00} fill="var(--fill-0, #19459D)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1edaac70} fill="var(--fill-0, #19459D)" fillRule="evenodd" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p410e800} fill="url(#paint0_linear_1_271)" id="Vector_5" />
            <path d={svgPaths.p2f949000} fill="url(#paint1_linear_1_271)" id="Vector_6" />
            <g id="Group_2">
              <path d={svgPaths.p98c4c70} fill="var(--fill-0, #CFE5AE)" id="Vector_7" />
            </g>
            <g id="Group_3">
              <path d={svgPaths.p44fb900} fill="var(--fill-0, #0D6D38)" id="Vector_8" />
            </g>
            <g id="Group_4">
              <path d={svgPaths.pe555700} fill="var(--fill-0, #CFE5AE)" id="Vector_9" />
            </g>
          </g>
          <path d={svgPaths.p3f4ffe00} fill="var(--fill-0, #19459D)" id="Vector_10" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_271" x1="54.3525" x2="50.634" y1="63.3711" y2="46.5562">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_271" x1="19.1797" x2="54.1336" y1="52.8126" y2="45.0812">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <clipPath id="clip0_1_271">
            <rect fill="white" height="64" width="132.489" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Logo">
      <Logo />
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 items-start md:items-end space-y-2" data-name="Contact Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-snug text-[#212121] text-xl sm:text-2xl md:text-3xl lg:text-4xl">+90 (232) 864 22 00</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-snug text-[#212121] text-lg sm:text-xl md:text-2xl lg:text-3xl">sales@meyv.com.tr</p>
    </div>
  );
}

function Top() {
  return (
    <div className="w-full border-b border-[#d5d9e3]" data-name="Top">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 px-4 md:px-8 lg:px-16 xl:px-24 py-8 md:py-12 lg:py-16">
        <Logo1 />
        <ContactInfo />
      </div>
    </div>
  );
}

function SloganLogo() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 items-start" data-name="Slogan & Logo">
      <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-snug text-[#212121] text-xl sm:text-2xl md:text-3xl">
        <p className="mb-0">Naturally Sweet,</p>
        <p>Perfectly Dried</p>
      </div>
      <div className="w-32 h-12" data-name="image 66">
        <img alt="" className="w-full h-full object-contain" src={imgImage66} />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#cde253] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#115132] text-[16px] text-nowrap whitespace-pre">Home</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Products</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Who we are</p>
    </div>
  );
}

function DropdownArrowIcon300WRounded1() {
  return (
    <div className="h-[7px] relative shrink-0 w-[12.775px]" data-name="Dropdown Arrow Icon 300W Rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
        <g id="Dropdown Arrow Icon 300W Rounded">
          <path d={svgPaths.p11ff1530} fill="var(--fill-0, #64748B)" id="Dropdown Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Quality</p>
      <DropdownArrowIcon300WRounded1 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Con</p>
    </div>
  );
}

function Menu1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Menu">
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0" data-name="Item">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[21px] w-full">Navigation</p>
      <Menu1 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Linkedin</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Instagram</p>
    </div>
  );
}

function Menu2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Menu">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0" data-name="Item">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[21px] w-full">Follow Us</p>
      <Menu2 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">{`Terms & Conditions`}</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Menu3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Menu">
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0" data-name="Item">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[21px] w-full">Legal</p>
      <Menu3 />
    </div>
  );
}

function Menu4() {
  return (
    <div className="basis-0 content-stretch flex flex-col md:flex-row grow items-start justify-between gap-8 md:gap-4 min-h-px min-w-px relative shrink-0" data-name="Menu">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Mid() {
  return (
    <div className="w-full" data-name="Mid">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-16 px-4 md:px-8 lg:px-16 xl:px-24 py-8 md:py-12">
        <SloganLogo />
        <Menu4 />
      </div>
    </div>
  );
}

function Subfooter() {
  return (
    <div className="w-full" data-name="Subfooter">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 px-4 md:px-8 lg:px-16 xl:px-24 py-6 md:py-8">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-normal text-[#333333] text-sm sm:text-base opacity-70">Copyright © 2025. All rights reserved.</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-normal text-[#333333] text-sm sm:text-base opacity-70 cursor-pointer hover:opacity-100 transition-opacity" onClick={() => scrollToSection("home")}>Back to Top</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div id="footer" className="relative bg-white w-full space-y-12 md:space-y-16 lg:space-y-24" data-name="Footer">
      <Top />
      <Mid />
      <Subfooter />
    </div>
  );
}

function Frame45() {
  return (
    <div id="header-raspberry" className="flex items-center justify-between w-full cursor-pointer py-4 border-b border-[#d5d9e3]" onClick={() => toggleProduct("product-raspberry-details", "header-raspberry")}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-snug text-[#212121] text-lg sm:text-xl md:text-2xl lg:text-3xl">Raspberry</p>
      <div className="shrink-0 w-6 h-6 md:w-8 md:h-8 accordion-arrow" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p24e75940} fill="var(--fill-0, #212121)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame45 />
      <div id="product-raspberry-details" className="w-full relative shrink-0 is-hidden">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#212121] text-[16px] w-full">Our freeze-dried raspberries deliver vibrant flavor and color with a light, crunchy texture—ideal for snacks, toppings, and baking.</p>
          <Frame48 />
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div id="header-blueberry" className="is-open flex items-center justify-between w-full cursor-pointer py-4 border-b border-[#d5d9e3]" onClick={() => toggleProduct("product-blueberry-details", "header-blueberry")}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-snug text-[#115132] text-lg sm:text-xl md:text-2xl lg:text-3xl">Blueberry</p>
      <div className="shrink-0 w-6 h-6 md:w-8 md:h-8 accordion-arrow arrow-invert" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(17, 81, 50, 1)" } as CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p37282e00} fill="var(--fill-0, #115132)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="flex flex-col gap-3 items-start space-y-2">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#212121] text-base sm:text-lg">Features:</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-[#212121] text-sm sm:text-base md:text-lg">
        {` • 100% natural, no added sugar`}
        <br aria-hidden="true" />
        {` • Rich in potassium and fiber`}
        <br aria-hidden="true" />
        {` • Long shelf life without refrigeration`}
        <br aria-hidden="true" />
        {` • Available in slices, cubes, or powder formats`}
      </p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame52 />
      <div id="product-blueberry-details" className="w-full relative shrink-0">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#212121] text-[16px] w-full">Our freeze-dried bananas deliver the naturally sweet taste and creamy texture of ripe fruit in a light, crunchy form. Gently processed to preserve nutrients, color, and flavor without any additives, these banana slices are ideal for snacks, cereals, smoothie blends, or baking applications.</p>
          <Frame48 />
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div id="header-banana" className="flex items-center justify-between w-full cursor-pointer py-4 border-b border-[#d5d9e3]" onClick={() => toggleProduct("product-banana-details", "header-banana")}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-snug text-[#212121] text-lg sm:text-xl md:text-2xl lg:text-3xl">Banana</p>
      <div className="shrink-0 w-6 h-6 md:w-8 md:h-8 accordion-arrow" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p24e75940} fill="var(--fill-0, #212121)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame57 />
      <div id="product-banana-details" className="w-full relative shrink-0 is-hidden">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#212121] text-[16px] w-full">Our freeze-dried bananas deliver naturally sweet flavor in a crisp bite—perfect for cereals, smoothie blends, and snacking.</p>
          <Frame48 />
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div id="header-apple" className="flex items-center justify-between w-full cursor-pointer py-4 border-b border-[#d5d9e3]" onClick={() => toggleProduct("product-apple-details", "header-apple")}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-snug text-[#212121] text-lg sm:text-xl md:text-2xl lg:text-3xl">Apple</p>
      <div className="shrink-0 w-6 h-6 md:w-8 md:h-8 accordion-arrow" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p24e75940} fill="var(--fill-0, #212121)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame59 />
      <div id="product-apple-details" className="w-full relative shrink-0 is-hidden">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#212121] text-[16px] w-full">Freeze-dried apples retain their natural sweetness and crunch—great for on-the-go snacks and baking applications.</p>
          <Frame48 />
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame46 />
      <Frame56 />
      <Frame58 />
      <Frame47 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-start w-full">
      <div className="flex-1">
        <img alt="" className="w-full h-auto aspect-[4/5] object-cover rounded-3xl" src={imgImage2} />
      </div>
      <div className="flex-1">
        <Frame49 />
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div id="products" className="relative w-full px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto space-y-12 md:space-y-16">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-tight text-[#212121] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Products</p>
        <Frame50 />
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 items-start space-y-2">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-snug text-[#115132] text-xl sm:text-2xl md:text-3xl">Consistent Quality</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-[#115132] text-sm sm:text-base md:text-lg">From harvest to packaging, every product meets strict international food safety and quality standards.</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 items-start space-y-2">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-snug text-[#115132] text-xl sm:text-2xl md:text-3xl">Unmatched Freshness</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-[#115132] text-sm sm:text-base md:text-lg">We preserve the original taste, color, and nutrients of our ingredients through advanced IQF and freeze-drying technologies.</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 items-start space-y-2">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-snug text-[#cde253] text-xl sm:text-2xl md:text-3xl">Tailored Solutions</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-[#cde253] text-sm sm:text-base md:text-lg">We offer customizable formats and blends to fit your production needs, whether for retail, foodservice, or industrial use.</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 items-start space-y-2">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-snug text-[#115132] text-xl sm:text-2xl md:text-3xl">Sustainable Approach</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-[#115132] text-sm sm:text-base md:text-lg">We prioritize eco-conscious farming, minimal waste, and energy-efficient processing to protect our planet while feeding the world.</p>
    </div>
  );
}

function Group1() {
  return (
    <>
      {/* Desktop complex grid layout */}
      <div className="hidden lg:grid grid-cols-[max-content] grid-rows-[max-content] leading-[0] place-items-start relative shrink-0">
        <div className="[grid-area:1_/_1] bg-[#f1f4ee] ml-0 mt-0 rounded-[24px] size-[316px]" />
        <div className="[grid-area:1_/_1] bg-[#f1f4ee] h-[316px] ml-[348px] mt-0 rounded-[24px] w-[432px]" />
        <div className="[grid-area:1_/_1] h-[160px] ml-[368px] mt-[16px] relative rounded-[24px] w-[392px]" data-name="image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgImage3} />
        </div>
        <div className="[grid-area:1_/_1] h-[105px] ml-[20px] mt-[16px] relative rounded-[24px] w-[276px]" data-name="image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgImage4} />
        </div>
        <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[14px] items-start leading-[normal] ml-[371px] mt-[214px] not-italic relative text-[#115132] w-[387px]">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[28px] w-full">Consistent Quality</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">From harvest to packaging, every product meets strict international food safety and quality standards.</p>
        </div>
        <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[14px] items-start leading-[normal] ml-[20px] mt-[146px] not-italic relative text-[#115132] w-[276px]">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[28px] w-full">Unmatched Freshness</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">We preserve the original taste, color, and nutrients of our ingredients through advanced IQF and freeze-drying technologies.</p>
        </div>
        <div className="[grid-area:1_/_1] bg-[#115132] h-[316px] ml-0 mt-[348px] rounded-[24px] w-[780px]" />
        <div className="[grid-area:1_/_1] h-[152px] ml-[20px] mt-[368px] relative rounded-[24px] w-[740px]" data-name="image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgImage5} />
        </div>
        <div className="[grid-area:1_/_1] bg-[#cde253] h-[664px] ml-[812px] mt-0 rounded-[24px] w-[548px]" />
        <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[14px] items-start leading-[normal] ml-[20px] mt-[540px] not-italic relative text-[#cde253] w-[730px]">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[28px] w-full">Tailored Solutions</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">We offer customizable formats and blends to fit your production needs, whether for retail, foodservice, or industrial use.</p>
        </div>
        <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[14px] items-start leading-[normal] ml-[847px] mt-[536px] not-italic relative text-[#115132] w-[482px]">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[28px] w-full">Sustainable Approach</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">We prioritize eco-conscious farming, minimal waste, and energy-efficient processing to protect our planet while feeding the world.</p>
        </div>
        <div className="[grid-area:1_/_1] h-[476px] ml-[839px] mt-[32px] relative rounded-[24px] w-[495px]" data-name="image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgImage6} />
        </div>
      </div>

      {/* Mobile simplified layout */}
      <div className="lg:hidden flex flex-col gap-6 w-full">
        <div className="bg-[#f1f4ee] p-6 rounded-[24px]">
          <div className="h-[150px] mb-4 relative rounded-[16px] w-full" data-name="image">
            <img alt="" className="w-full h-full object-cover rounded-[16px]" src={imgImage4} />
          </div>
          <Frame31 />
        </div>
        
        <div className="bg-[#f1f4ee] p-6 rounded-[24px]">
          <div className="h-[150px] mb-4 relative rounded-[16px] w-full" data-name="image">
            <img alt="" className="w-full h-full object-cover rounded-[16px]" src={imgImage3} />
          </div>
          <Frame30 />
        </div>

        <div className="bg-[#115132] p-6 rounded-[24px]">
          <div className="h-[150px] mb-4 relative rounded-[16px] w-full" data-name="image">
            <img alt="" className="w-full h-full object-cover rounded-[16px]" src={imgImage5} />
          </div>
          <div className="box-border content-stretch flex flex-col gap-[14px] items-start leading-[normal] not-italic relative text-[#cde253] w-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-xl w-full">Tailored Solutions</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-xs w-full">We offer customizable formats and blends to fit your production needs, whether for retail, foodservice, or industrial use.</p>
          </div>
        </div>

        <div className="bg-[#cde253] p-6 rounded-[24px]">
          <div className="h-[250px] mb-4 relative rounded-[16px] w-full" data-name="image">
            <img alt="" className="w-full h-full object-cover rounded-[16px]" src={imgImage6} />
          </div>
          <Frame33 />
        </div>
      </div>
    </>
  );
}

function Frame55() {
  return (
    <div id="why" className="relative w-full px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto space-y-12 md:space-y-16">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-tight text-[#212121] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Why choose our products?</p>
        <Group1 />
      </div>
    </div>
  );
}

export default function Component1920PxHome() {
  return (
    <div id="home" className="bg-white relative w-full min-h-screen overflow-x-hidden" data-name="1920px - Home">
      {/* Hero Section with Background */}
      <SharedHeroSection
        topSlot={<Frame8 />}
        backgroundSrc={imgSubtract}
        backgroundAlt="Fresh produce crates in an orchard"
        titleLines={["Organic &", "Conventional"]}
        paragraphs={[
          "We provide premium fruit, vegetable, herb, and specialty ingredients—grown and processed to meet the highest standards.",
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
      
      {/* About Section */}
      <Frame18 />
      
      {/* Families First Section */}
      <div className="relative bg-[#f1f4ee] w-full py-16 md:py-24 lg:py-32 overflow-hidden" data-name="Bg">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex items-center justify-center relative">
          <div className="font-['Inter:Medium',sans-serif] font-medium leading-tight text-[#115132] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center z-10">
            <p className="mb-2">We believe in</p>
            <p>putting families first</p>
          </div>
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-64 h-48 lg:w-96 lg:h-64" data-name="image">
            <img alt="" className="w-full h-full object-cover rounded-3xl opacity-50" src={imgImage7} />
          </div>
        </div>
      </div>
      
      {/* Image Section */}
      <Group />
      
      {/* Products Section */}
      <Frame51 />
      
      {/* Methods Section */}
      <Frame43 />
      
      {/* Why Section */}
      <Frame55 />
      
      {/* CTA Section */}
      <Cta />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}