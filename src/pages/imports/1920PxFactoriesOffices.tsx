import { NavLink } from "react-router-dom";
import svgPaths from "./svg-u7nplz23fe";
import imgCta from "@/assets/c15bb3d7b30d65e84a0ade7670e584f728d9b5a7.png";
import imgImage66 from "@/assets/ffeba28eb520fc86d5a21d336c1c9fc39ddb9b41.png";
import imgImage69 from "@/assets/eaafecb983683b15887e29a337e54f286b9f0548.png";
import imgImage70 from "@/assets/ed517dd0e9dcd4f869637683a298e388775773fd.png";
import imgImage from "@/assets/56dc78c27f09e8b4c4bf295b74d0e48d1587b55f.png";
import imgImage1 from "@/assets/57446fc4f09979b364c1122960f918acd71741c6.png";
import imgSubtract from "@/assets/e2684821a002ca86e013a5d8adac2ec3d61d332b.png";
import { imgImage68 } from "./svg-70gsh";

function Layer() {
  return (
    <div className="h-[64px] relative shrink-0 w-[132.489px]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 64">
        <g clipPath="url(#clip0_9_196)" id="Layer_1">
          <path d={svgPaths.p2c2b4370} fill="var(--fill-0, #19459D)" id="Vector" />
          <path d={svgPaths.p29295e00} fill="var(--fill-0, #19459D)" id="Vector_2" />
          <path d={svgPaths.p3209fa00} fill="var(--fill-0, #19459D)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1edaac70} fill="var(--fill-0, #19459D)" fillRule="evenodd" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p410e800} fill="url(#paint0_linear_9_196)" id="Vector_5" />
            <path d={svgPaths.p2f949000} fill="url(#paint1_linear_9_196)" id="Vector_6" />
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
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_196" x1="54.3525" x2="50.634" y1="63.3711" y2="46.5562">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_9_196" x1="19.1797" x2="54.1336" y1="52.8126" y2="45.0812">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <clipPath id="clip0_9_196">
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
    >
      {({ isActive }) => (
        <>
          <div aria-hidden="true" className={`absolute border-[#cde253] border-[0px_0px_2px] border-solid inset-0 pointer-events-none transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`} />
          <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre transition-colors duration-200 ${isActive ? "text-[#115132]" : "text-[#212121]"}`}>Home</p>
        </>
      )}
    </NavLink>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 cursor-pointer">
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
          <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre transition-colors duration-200 ${isActive ? "text-[#115132]" : "text-[#212121]"}`}>Who we are</p>
          <span aria-hidden="true" className={`pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-[#cde253] transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`} />
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
          <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre transition-colors duration-200 ${isActive ? "text-[#115132]" : "text-[#212121]"}`}>Factories</p>
          <span aria-hidden="true" className={`pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-[#cde253] transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`} />
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
          <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre transition-colors duration-200 ${isActive ? "text-[#115132]" : "text-[#212121]"}`}>{`Quality & Certificates`}</p>
          <DropdownArrowIcon300WRounded />
          <span aria-hidden="true" className={`pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-[#cde253] transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`} />
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
    <div className="bg-[#115132] box-border content-stretch flex gap-[16px] h-[48px] items-center justify-center pl-[32px] pr-[6px] py-[10px] relative rounded-[32px] shrink-0">
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
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[664px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#303030] text-[18px] w-full">Our factories represent the full cycle of vertical integration — from sourcing fruits in our contracted and company-owned fields to processing, IQF freezing, packaging, and shipment. Every step takes place under one continuous control system, ensuring full traceability and consistency. With advanced food safety protocols and automation technologies, we deliver frozen fruits that preserve the taste, color, and nutrition of freshly harvested produce.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[48px] tracking-[-0.96px] w-[664px]">From field to frozen – fully integrated facilities</p>
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[120px] items-start left-0 px-[280px] py-[160px] top-[510px] w-[1920px]">
      <Frame17 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start not-italic relative shrink-0 text-white w-full" data-name="Title">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[96px] relative shrink-0 text-[80px] text-nowrap whitespace-pre">{`Factories & Offices`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[21px] w-[min-content]">Discover the journey behind our brand and the purpose that guides everything we do.</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[160px] top-[205px] w-[602px]">
      <Title />
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] h-[700px] items-center justify-center relative shrink-0 w-full" data-name="CTA">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgCta} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.25)]" />
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[#115132] text-[152px] text-center tracking-[-3.04px] w-[min-content]">Let the Journey Begin</p>
      <div className="relative shrink-0 size-[96px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 96">
          <path d={svgPaths.p1b7f1380} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[64px] relative shrink-0 w-[132.489px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 64">
        <g clipPath="url(#clip0_9_180)" id="Logo">
          <path d={svgPaths.p2c2b4370} fill="var(--fill-0, #19459D)" id="Vector" />
          <path d={svgPaths.p29295e00} fill="var(--fill-0, #19459D)" id="Vector_2" />
          <path d={svgPaths.p3209fa00} fill="var(--fill-0, #19459D)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1edaac70} fill="var(--fill-0, #19459D)" fillRule="evenodd" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p410e800} fill="url(#paint0_linear_9_180)" id="Vector_5" />
            <path d={svgPaths.p2f949000} fill="url(#paint1_linear_9_180)" id="Vector_6" />
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
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_180" x1="54.3525" x2="50.634" y1="63.3711" y2="46.5562">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_9_180" x1="19.1797" x2="54.1336" y1="52.8126" y2="45.0812">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <clipPath id="clip0_9_180">
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

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#cde253] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#115132] text-[16px] text-nowrap whitespace-pre">Home</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Products</p>
    </div>
  );
}

function Frame12() {
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

function Frame13() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Quality</p>
      <DropdownArrowIcon300WRounded1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Con</p>
    </div>
  );
}

function Menu1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Menu">
      <Frame9 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
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

function Frame15() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Linkedin</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Instagram</p>
    </div>
  );
}

function Menu2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Menu">
      <Frame15 />
      <Frame19 />
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

function Frame20() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">{`Terms & Conditions`}</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Menu3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Menu">
      <Frame20 />
      <Frame21 />
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
          <p className="opacity-70 relative shrink-0 text-right">Back to Top</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[100px] items-start relative shrink-0 w-full" data-name="Footer">
      <Top />
      <Mid />
      <Subfooter />
    </div>
  );
}

function CtaFooter() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[3585px] w-[1920px]" data-name="CTA & Footer">
      <Cta />
      <Footer />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[460.079px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[43.281px_12.649px] mask-size-[548px_440px] ml-[-43.28px] mt-[-12.65px] relative rounded-[40px] w-[602.502px]" data-name="image 68" style={{ maskImage: `url('${imgImage68}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage69} />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-[664px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333333] text-[48px] w-full">Global reach, local roots</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[16px] w-full">Our headquarters and offices strategically connect our growing regions with key export markets. While our factories are located near fertile agricultural zones to ensure rapid processing after harvest, our international offices manage sales, logistics, and customer relations with agility and precision. This global network allows us to deliver IQF fruits to partners in Europe, the Middle East, and beyond — always on time, always in perfect condition.</p>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex gap-[148px] items-center relative shrink-0 w-full" data-name="Section">
      <MaskGroup />
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-[664px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333333] text-[48px] w-full">Controlled environments, uncompromised quality</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[16px] w-full">Each of our facilities operates under meticulously controlled conditions — from temperature and humidity to air filtration and hygiene. Automated packaging and metal-detection systems safeguard product safety, while digital monitoring ensures process transparency. Supported by experienced food technologists and engineers, we maintain an unbroken chain of quality from the moment the fruit is picked until it reaches our customers’ doors.</p>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[457.096px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[29.86px_12.65px] mask-size-[548px_440px] ml-[-29.86px] mt-[-12.65px] relative rounded-[40px] w-[606.976px]" data-name="image 69" style={{ maskImage: `url('${imgImage68}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage70} />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex gap-[148px] items-center relative shrink-0 w-full" data-name="Section">
      <Text1 />
      <MaskGroup1 />
    </div>
  );
}

function Sections() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] items-start left-[280px] top-[2465px] w-[1360px]" data-name="Sections">
      <Section />
      <Section1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[2465px]">
      <CtaFooter />
      <Sections />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] text-white w-full">At the heart of our operations lies a commitment to precision and hygiene. Each factory is designed according to international standards such as ISO 22000, BRCGS, and HACCP, supported by advanced quality-control laboratories. From washing and slicing to freezing and packaging, every process is monitored in real-time to guarantee consistent, high-quality results. Our facilities reflect the harmony between modern engineering and nature’s finest fruits.</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[280px] top-[1746px] w-[664px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#cde253] text-[48px] tracking-[-0.96px] w-full">Where quality meets technology</p>
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] text-white w-full">Our production facilities are equipped with next-generation IQF (Individually Quick Frozen) systems, automated sorting lines, and precision-controlled environments that maintain product integrity at every stage. We combine technological excellence with a deep respect for nature, ensuring that every fruit retains its freshness and authentic flavor. Continuous investment in innovation allows us to increase efficiency, sustainability, and capacity while meeting global food safety standards.</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[976px] top-[1291px] w-[664px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#cde253] text-[48px] tracking-[-0.96px] w-full">Innovation in every corner</p>
      <Frame23 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-[1033px]">
      <div className="absolute bg-[#115132] h-[1014px] left-0 top-[1207px] w-[1920px]" data-name="Bg" />
      <Frame24 />
      <Frame25 />
      <div className="absolute h-[563px] left-[302px] rounded-[40px] top-[1033px] w-[620px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage} />
      </div>
      <div className="absolute h-[475px] left-[998px] rounded-[40px] top-[1830px] w-[620px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

export default function Component1920PxFactoriesOffices() {
  return (
    <div className="bg-white relative size-full" data-name="1920px - Factories & Offices">
      <Frame8 />
      <Frame18 />
      <div className="absolute h-[400px] left-[80px] top-[110px] w-[1760px]" data-name="Subtract">
        <img alt="" className="block max-w-none size-full" height="400" src={imgSubtract} width="1760" />
      </div>
      <Frame10 />
      <Group1 />
      <Group />
    </div>
  );
}