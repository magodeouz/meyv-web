import React from "react";
import { NavLink } from "react-router-dom";
import svgPaths from "./svg-k8wa0wvcwg";
import imgImage45 from "@/assets/4235fb4fc0155f8606913f4a8a328eddc47ae6f3.png";
import imgImage from "@/assets/e7c107b24f0ce6f0dda5844a9b2b7c2d0969fde9.png";
import imgImage1 from "@/assets/b0cc92681aa86709451caebbe356114df5e8fda5.png";
import imgCta from "@/assets/e313abdd1b398c37d5e7b535b12d9aeda71d60b8.png";
import imgImage66 from "@/assets/ffeba28eb520fc86d5a21d336c1c9fc39ddb9b41.png";
import imgImage2 from "@/assets/f545fb012473769fce3efa3563fbf3bf2fa441d0.png";
import imgImage3 from "@/assets/88e57f1c4d0b5499fe43641635829d433e0f76fd.png";
import imgImage4 from "@/assets/8486d510548be62098d1de4e81000312a0392e81.png";
import imgImage5 from "@/assets/926b2a1350616d7befc15cbef83a7490a2446a01.png";
import imgImage6 from "@/assets/1fccaf4eeb3d7f9bac37820415d7f092bc01feb6.png";
import imgSubtract from "@/assets/a3df3399bbd1dc78bb969951b80a980fd5eb7236.png";
import imgImage7 from "@/assets/3bdd021126e7144bff0fb88be2d65fb487625a2d.png";
import imgImage47 from "@/assets/fb252188c435916b7a570630eb63bdd319548751.png";
import imgImage8 from "@/assets/76c0d6b70fc2309f69378e002683c4e617591eac.png";

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

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start not-italic relative shrink-0 text-white w-full" data-name="Title">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[96px] relative shrink-0 text-[96px] text-nowrap whitespace-pre">
        <p className="mb-0">{`Organic &`}</p>
        <p>Conventional</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[21px] w-[min-content]">We provide premium fruit, vegetable, herb, and specialty ingredients—grown and processed to meet the highest standards.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 cursor-pointer" onClick={() => scrollToSection("products")}>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Products</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[160px] top-[264px] w-[785px]">
      <Title />
      <Frame9 />
    </div>
  );
}

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
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 cursor-pointer" onClick={() => scrollToSection("products")}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Products</p>
    </div>
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
  return (
    <div className="absolute bg-white content-stretch flex h-[110px] items-center justify-between left-[80px] top-0 w-[1760px]">
      <Frame7 />
      <Frame5 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[40px] items-start leading-[0] not-italic relative shrink-0 text-[#303030] w-[664px]">
      <div className="leading-[1.6] relative shrink-0 text-[18px] w-full">
        <p className="mb-0">Meyv, where tradition meets innovation, is dedicated to redefining how the world experiences fruit—through sustainable sourcing and advanced freeze-drying technology. Our mission is to deliver natural, nutrient-rich fruit products that retain their original flavor, color, and integrity—without compromise.</p>
        <p className="mb-0">&nbsp;</p>
        <p>By blending modern preservation techniques with time-honored harvesting practices, we offer shelf-stable solutions that meet today’s demands for quality, convenience, and sustainability—supporting healthier choices for generations to come.</p>
      </div>
      <p className="leading-[normal] relative shrink-0 text-[0px] text-[18px] w-full">
        <span className="font-['Inter:Bold',sans-serif] font-bold not-italic">Learn More</span>
        <span>{` →`}</span>
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[48px] tracking-[-0.96px] w-[664px]">Where freshness meets innovation</p>
      <Frame16 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#115132] text-[96px] text-nowrap whitespace-pre">100%</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#212121] text-[21px] w-[min-content]">Customer Satisfaction Rate</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full opacity-70 relative shrink-0 text-[#303030] text-[15px] w-[min-content]">Meyv shows how products meet consumer needs, enhancing satisfaction and fostering loyalty, leading to recommendations and expanding influence.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#115132] text-[96px] text-nowrap whitespace-pre">20+</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#212121] text-[21px] w-[min-content]">Years of Experience</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full opacity-70 relative shrink-0 text-[#303030] text-[15px] w-[min-content]">With 20 years in agriculture, Meyv shows how products meet consumer needs, enhancing satisfaction and loyalty.</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#115132] text-[96px] text-nowrap whitespace-pre">160K</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#212121] text-[21px] w-[min-content]">Farmer Around the World</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full opacity-70 relative shrink-0 text-[#303030] text-[15px] w-[min-content]">Meyv illustrates how products cater to the needs of farmers globally, boosting their satisfaction and loyalty. Loyalty boosts recommendations and expands impact.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame18() {
  return (
    <div id="about" className="absolute box-border content-stretch flex flex-col gap-[120px] items-start left-0 px-[280px] py-[160px] top-[910px] w-[1920px]">
      <Frame17 />
      <Frame15 />
      <div className="absolute flex h-[678px] items-center justify-center left-[-440px] mix-blend-darken top-[162px] w-[721.586px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[678px] relative w-[721.586px]" data-name="image 45">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage45} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[280px] top-[2586px] w-[664px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#303030] text-[18px] w-full">By integrating modern techniques with time-honored methods, we aim to create a more resilient and efficient agricultural landscape for future generations.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#303030] text-[0px] text-[18px] w-full">
        <span className="font-['Inter:Bold',sans-serif] font-bold">Learn More</span>
        <span>{` →`}</span>
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[280px] top-[2407px]">
      <div className="absolute h-[403px] left-[1035px] pointer-events-none rounded-[40px] top-[2407px] w-[545px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[40px] size-full" src={imgImage} />
      </div>
      <Frame19 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[40px] items-start not-italic relative shrink-0 text-[#303030] w-[664px]">
      <p className="leading-[1.6] relative shrink-0 text-[18px] w-full">From field to final product, our mission is to maintain the integrity of every ingredient we process. Whether flash-frozen with IQF or gently vacuum-dried, our methods lock in peak freshness, making premium quality available all year round.</p>
      <button
        type="button"
        onClick={() => scrollToSection("products")}
        className="leading-[normal] relative shrink-0 text-[16px] text-[#212121] inline-flex items-center gap-[8px] cursor-pointer"
      >
        <span className="font-['Inter:Bold',sans-serif] font-bold not-italic">Learn More</span>
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[48px] tracking-[-0.96px] w-[664px]">Our preservation methods, explained</p>
      <Frame34 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute bg-[rgba(205,226,83,0.8)] box-border content-stretch flex gap-[10px] items-center justify-center left-0 px-[20px] py-[8px] rounded-br-[20px] rounded-tr-[20px] top-[400px] w-[241px]">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[28px] text-neutral-50 tracking-[-0.56px]">From fresh to forever</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <div className="h-[520px] relative rounded-[40px] shrink-0 w-[316px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage1} />
      </div>
      <Frame54 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-[#212121] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] w-full">Fresh Harvesting</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] w-full">Fruits and vegetables are picked at peak ripeness to ensure optimal flavor and nutrition.</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#115132] text-[56px] tracking-[-0.96px] w-full">01</p>
      <Frame35 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-[#212121] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] w-full">Rapid Freezing</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] w-full">Each piece is quickly frozen individually using ultra-low temperatures to prevent clumping and preserve texture.</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow h-full items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#115132] text-[56px] tracking-[-0.96px] w-full">02</p>
      <Frame41 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-[#212121] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] w-full">Long-Lasting Quality</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] w-full">Maintains natural taste, color, and nutritional value—perfect for foodservice and retail with extended shelf life.</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow h-full items-start justify-end min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#115132] text-[56px] tracking-[-0.96px] w-full">03</p>
      <Frame44 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[24px] h-[520px] items-center relative shrink-0 w-full">
      <Frame36 />
      <div className="flex h-full items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "520", "--transform-inner-height": "520" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[90deg]">
          <div className="h-full relative w-[520px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 520 1">
                <line id="Line 1" stroke="var(--stroke-0, #D5D9E3)" x2="520" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame37 />
      <div className="flex h-full items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "520", "--transform-inner-height": "520" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[90deg]">
          <div className="h-full relative w-[520px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 520 1">
                <line id="Line 1" stroke="var(--stroke-0, #D5D9E3)" x2="520" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame38 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame53 />
      <Frame40 />
    </div>
  );
}

function Frame43() {
  return (
    <div id="methods" className="absolute bg-neutral-50 box-border content-stretch flex flex-col gap-[60px] items-center left-0 px-[280px] py-[160px] top-[3893px] w-[1920px]">
      <Frame39 />
      <Frame42 />
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
    <div className="bg-white box-border content-stretch flex gap-[16px] h-[64px] items-center justify-center pl-[32px] pr-[12px] py-[10px] relative rounded-[32px] shrink-0 w-[213px] cursor-pointer" onClick={() => scrollToSection("products")}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#115132] text-[18px] text-nowrap tracking-[1.8px] uppercase whitespace-pre">Products</p>
      <Frame14 />
    </div>
  );
}

function Cta() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] h-[700px] items-center justify-center left-0 top-[6093px] w-[1920px]" data-name="CTA">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgCta} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.25)]" />
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[#115132] text-[152px] text-center tracking-[-3.04px] w-[min-content]">Crafted to Stay Fresh</p>
      <Frame20 />
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
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[13px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#212121]" data-name="Contact Info">
      <p className="relative shrink-0 text-[40px] w-full">+90 (232) 864 22 00</p>
      <p className="relative shrink-0 text-[32px] w-full">sales@meyv.com.tr</p>
    </div>
  );
}

function Top() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div aria-hidden="true" className="absolute border-[#d5d9e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[80px] py-[60px] relative w-full">
          <Logo1 />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

function SloganLogo() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0" data-name="Slogan & Logo">
      <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[28px] w-[403px]">
        <p className="mb-0">Naturally Sweet,</p>
        <p>Perfectly Dried</p>
      </div>
      <div className="h-[45px] relative shrink-0 w-[128px]" data-name="image 66">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage66} />
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
    <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px relative shrink-0" data-name="Menu">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Mid() {
  return (
    <div className="relative shrink-0 w-full" data-name="Mid">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between px-[80px] py-0 relative w-full">
          <SloganLogo />
          <Menu4 />
        </div>
      </div>
    </div>
  );
}

function Subfooter() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subfooter">
      <div className="size-full">
        <div className="box-border content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[normal] not-italic px-[80px] py-[32px] relative text-[#333333] text-[16px] text-nowrap w-full whitespace-pre">
          <p className="opacity-70 relative shrink-0">Copyright © 2025. All rights reserved.</p>
          <p className="opacity-70 relative shrink-0 text-right cursor-pointer" onClick={() => scrollToSection("home")}>Back to Top</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div id="footer" className="absolute bg-white content-stretch flex flex-col gap-[100px] items-start left-0 top-[6793px] w-[1920px]" data-name="Footer">
      <Top />
      <Mid />
      <Subfooter />
    </div>
  );
}

function Frame45() {
  return (
    <div id="header-raspberry" className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer" onClick={() => toggleProduct("product-raspberry-details", "header-raspberry")}>
      <div aria-hidden="true" className="active-underline absolute border-[#d5d9e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[32px] text-nowrap tracking-[-0.64px] whitespace-pre">Raspberry</p>
      <div className="relative shrink-0 size-[32px] accordion-arrow" data-name="Vector">
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
    <div id="header-blueberry" className="is-open box-border content-stretch flex items-center justify-between pb-[12px] pt-0 px-0 relative shrink-0 w-full cursor-pointer" onClick={() => toggleProduct("product-blueberry-details", "header-blueberry")}>
      <div aria-hidden="true" className="active-underline absolute border-[#d5d9e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#115132] text-[32px] text-nowrap tracking-[-0.64px] whitespace-pre">Blueberry</p>
      <div className="relative shrink-0 size-[32px] accordion-arrow arrow-invert" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(17, 81, 50, 1)" } as React.CSSProperties}>
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
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.6] not-italic relative shrink-0 text-[#212121] text-[16px] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 w-full">Features:</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">
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
    <div id="header-banana" className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer" onClick={() => toggleProduct("product-banana-details", "header-banana")}>
      <div aria-hidden="true" className="active-underline absolute border-[#d5d9e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[32px] text-nowrap tracking-[-0.64px] whitespace-pre">Banana</p>
      <div className="relative shrink-0 size-[32px] accordion-arrow" data-name="Vector">
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
    <div id="header-apple" className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer" onClick={() => toggleProduct("product-apple-details", "header-apple")}>
      <div aria-hidden="true" className="active-underline absolute border-[#d5d9e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[32px] text-nowrap tracking-[-0.64px] whitespace-pre">Apple</p>
      <div className="relative shrink-0 size-[32px] accordion-arrow" data-name="Vector">
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
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[664px]">
      <Frame46 />
      <Frame56 />
      <Frame58 />
      <Frame47 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[148px] items-start relative shrink-0 w-full">
      <div className="h-[491px] relative rounded-[40px] shrink-0 w-[548px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage2} />
      </div>
      <Frame49 />
    </div>
  );
}

function Frame51() {
  return (
    <div id="products" className="absolute box-border content-stretch flex flex-col gap-[60px] items-start left-0 px-[280px] py-[160px] top-[2964px] w-[1920px]">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[48px] tracking-[-0.96px] w-full">Products</p>
      <Frame50 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[14px] items-start leading-[normal] ml-[371px] mt-[214px] not-italic relative text-[#115132] w-[387px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[28px] w-full">Consistent Quality</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">From harvest to packaging, every product meets strict international food safety and quality standards.</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[14px] items-start leading-[normal] ml-[20px] mt-[146px] not-italic relative text-[#115132] w-[276px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[28px] w-full">Unmatched Freshness</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">We preserve the original taste, color, and nutrients of our ingredients through advanced IQF and freeze-drying technologies.</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[14px] items-start leading-[normal] ml-[20px] mt-[540px] not-italic relative text-[#cde253] w-[730px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[28px] w-full">Tailored Solutions</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">We offer customizable formats and blends to fit your production needs, whether for retail, foodservice, or industrial use.</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[14px] items-start leading-[normal] ml-[847px] mt-[536px] not-italic relative text-[#115132] w-[482px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[28px] w-full">Sustainable Approach</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">We prioritize eco-conscious farming, minimal waste, and energy-efficient processing to protect our planet while feeding the world.</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#f1f4ee] ml-0 mt-0 rounded-[24px] size-[316px]" />
      <div className="[grid-area:1_/_1] bg-[#f1f4ee] h-[316px] ml-[348px] mt-0 rounded-[24px] w-[432px]" />
      <div className="[grid-area:1_/_1] h-[160px] ml-[368px] mt-[16px] relative rounded-[24px] w-[392px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgImage3} />
      </div>
      <div className="[grid-area:1_/_1] h-[105px] ml-[20px] mt-[16px] relative rounded-[24px] w-[276px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgImage4} />
      </div>
      <Frame30 />
      <Frame31 />
      <div className="[grid-area:1_/_1] bg-[#115132] h-[316px] ml-0 mt-[348px] rounded-[24px] w-[780px]" />
      <div className="[grid-area:1_/_1] h-[152px] ml-[20px] mt-[368px] relative rounded-[24px] w-[740px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgImage5} />
      </div>
      <div className="[grid-area:1_/_1] bg-[#cde253] h-[664px] ml-[812px] mt-0 rounded-[24px] w-[548px]" />
      <Frame32 />
      <Frame33 />
      <div className="[grid-area:1_/_1] h-[476px] ml-[839px] mt-[32px] relative rounded-[24px] w-[495px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div id="why" className="absolute box-border content-stretch flex flex-col gap-[60px] items-start left-0 px-[280px] py-[160px] top-[4991px] w-[1920px]">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#212121] text-[48px] tracking-[-0.96px] w-[min-content]">Why choose our products?</p>
      <Group1 />
    </div>
  );
}

export default function Component1920PxHome() {
  return (
    <div id="home" className="bg-white relative size-full" data-name="1920px - Home">
      <div className="absolute h-[800px] left-[80px] top-[110px] w-[1760px]" data-name="Subtract">
        <img alt="" className="block max-w-none size-full" height="800" src={imgSubtract} width="1760" />
      </div>
      <Frame10 />
      <Frame8 />
      <Frame18 />
      <div className="absolute bg-[#f1f4ee] h-[1014px] left-0 top-[1950px] w-[1920px]" data-name="Bg">
      </div>
      <div
        className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#115132] text-[96px] text-center text-nowrap top-[2081px] tracking-[-1.92px] whitespace-pre"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <p className="mb-0">We believe in</p>
        <p>putting families first</p>
      </div>
      <div className="absolute h-[285px] left-[52px] pointer-events-none rounded-[40px] top-[2054px] w-[364px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[40px] size-full" src={imgImage7} />
      </div>
      <Group />
      <Frame43 />
      <Cta />
      <Footer />
      <Frame51 />
      <Frame55 />
      <div className="absolute h-[678px] left-[1248px] mix-blend-darken pointer-events-none top-[1751px] w-[721.586px]" data-name="image 45">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgImage45} />
      </div>
      <div className="absolute h-[575px] left-[1682px] mix-blend-darken pointer-events-none top-[3522px] w-[408.301px]" data-name="image 47">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgImage47} />
      </div>
      <div className="absolute h-[280px] left-[1292px] pointer-events-none rounded-[48px] top-[728px] w-[548px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[48px] size-full" src={imgImage8} />
      </div>
    </div>
  );
}