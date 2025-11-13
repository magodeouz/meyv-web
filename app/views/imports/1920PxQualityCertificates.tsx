"use client";

import NavLink from "@/components/NavLink";
import { Header } from "@/components/Header";
import { imgImage68, imgMap1 } from "./svg-0ml1w";
import svgPaths from "./svg-c0zbl1co9l";

const imgImage69 = "/assets/a07f6137190a89f184a4264475fbf0e621ee2d70.png";
const imgImage70 = "/assets/2837a00b28597efe31db5853400bda5ffd9796bb.png";
const imgMap2 = "/assets/d6b951c05983c97681d0d548ab23d573d83b0aaa.png";
const imgImage75 = "/assets/da5954ebc6bf718dfca95385611d0d0b47a63ce8.png";
const imgImage66 = "/assets/ffeba28eb520fc86d5a21d336c1c9fc39ddb9b41.png";
const imgImage = "/assets/9d2647379f8eee2ef77cbeb05b9ca8279797d9fe.png";
const imgImage1 = "/assets/470f6afeb9dd3ca9971fc29a4c82467b249df490.png";
const imgImage2 = "/assets/4c82289e047e4a87c7cd727f7df76a937838761d.png";
const imgSubtract = "/assets/a60cf5a4140837a6d316c19e5f2371721df039bd.png";

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
  return <Header />;
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-6 md:gap-[40px] items-start relative shrink-0 w-full">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#303030] text-base md:text-[18px] w-full">
        <p className="mb-0">Our products are grown under continuous supervision on contracted or company-owned fields, ensuring complete quality control from the very beginning. After harvest, the raw materials are processed into finished or semi-finished goods at our own production facilities.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">All packaging and related services are carried out by our group companies, maintaining full control over every stage—from field to container loading.</p>
        <p>This fully integrated and traceable production model allows us to operate with uncompromising quality standards, ensuring transparency, consistency, and reliability across the entire supply chain.</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-[32px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-2xl md:text-4xl lg:text-[48px] tracking-[-0.96px] w-full md:w-1/2">Vertical integration and full traceability</p>
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative box-border content-stretch flex flex-col gap-16 md:gap-24 lg:gap-[120px] items-start left-0 px-4 md:px-8 lg:px-[280px] py-16 md:py-24 lg:py-[160px] mt-[350px] md:mt-[400px] lg:mt-[510px] w-full">
      <Frame17 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[34px] pt-0 px-0 relative shrink-0">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-tight md:leading-[96px] not-italic relative shrink-0 text-5xl md:text-7xl lg:text-[80px] text-white">
        <p className="mb-0">{`Quality &`}</p>
        <p>Certificates</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-6 md:gap-[40px] items-start relative shrink-0 w-full" data-name="Title">
      <Frame24 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] w-full not-italic relative shrink-0 text-base md:text-lg lg:text-[21px] text-white">Ensuring excellence at every step — from field to final product — through certified processes, strict quality control, and complete traceability.</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-8 md:gap-[60px] items-start left-4 md:left-8 lg:left-[160px] rounded-[32px] top-32 md:top-36 lg:top-[157px] right-4 md:right-auto w-auto lg:w-[602px]">
      <Title />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[460.079px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[43.281px_12.65px] mask-size-[548px_440px] ml-[-43.28px] mt-[-12.65px] relative rounded-[40px] w-[602.502px]" data-name="image 68" style={{ maskImage: `url('${imgImage68}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage69} />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-4 md:gap-[24px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333333] text-2xl md:text-4xl lg:text-[48px] w-full">From field to final product</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-sm md:text-[16px] w-full">Every stage of our production is managed in-house — from cultivation in our contracted and company-owned fields to processing, packaging, and logistics. This end-to-end control ensures total traceability and consistent product quality, allowing us to deliver premium standards without compromise.</p>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-[148px] items-center relative shrink-0 w-full" data-name="Section">
      <div className="hidden lg:block"><MaskGroup /></div>
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-4 md:gap-[24px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333333] text-2xl md:text-4xl lg:text-[48px] w-full">Integrated quality, transparent process</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-sm md:text-[16px] w-full">We combine agricultural expertise with advanced manufacturing and packaging technologies within our own facilities. By managing every link in the value chain, we guarantee transparency, traceability, and reliability — ensuring our customers receive products they can trust, every time.</p>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[457.096px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[29.859px_12.65px] mask-size-[548px_440px] ml-[-29.86px] mt-[-12.65px] relative rounded-[40px] w-[606.976px]" data-name="image 69" style={{ maskImage: `url('${imgImage68}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage70} />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-[148px] items-center relative shrink-0 w-full" data-name="Section">
      <Text1 />
      <div className="hidden lg:block"><MaskGroup1 /></div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-12 md:gap-16 lg:gap-[80px] items-start w-full">
      <Section />
      <Section1 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Mask group">
      <div className="relative rounded-[28.011px] w-full max-w-[1153px] mx-auto" data-name="map 1">
        <img alt="" className="w-full h-auto object-contain rounded-[28.011px]" src={imgMap2} />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-8 md:gap-12 lg:gap-[60px] items-center w-full px-4 md:px-8">
      <MaskGroup2 />
      <div className="h-auto relative shrink-0 w-full max-w-[950px]" data-name="image 75">
        <img alt="" className="w-full h-auto object-contain" src={imgImage75} />
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
      <p className="relative shrink-0 text-xl md:text-3xl lg:text-[40px] w-full">+90 (232) 864 22 00</p>
      <p className="relative shrink-0 text-lg md:text-2xl lg:text-[32px] w-full">sales@meyv.com.tr</p>
    </div>
  );
}

function Top() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div aria-hidden="true" className="absolute border-[#d5d9e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col md:flex-row items-center size-full">
        <div className="box-border content-stretch flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 px-4 md:px-8 lg:px-[80px] py-8 md:py-12 lg:py-[60px] relative w-full">
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
      <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#212121] text-xl md:text-2xl lg:text-[28px] w-full max-w-[403px]">
        <p className="mb-0">Naturally Sweet,</p>
        <p>Perfectly Dried</p>
      </div>
      <div className="h-[45px] relative shrink-0 w-[128px] mt-4" data-name="image 66">
        <img alt="" className="w-full h-full object-contain" src={imgImage66} />
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
    <div className="basis-0 content-stretch flex flex-col md:flex-row grow items-start justify-between gap-8 md:gap-4 min-h-px min-w-px relative shrink-0" data-name="Menu">
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
        <div className="box-border content-stretch flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4 px-4 md:px-8 lg:px-[80px] py-0 relative w-full">
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
        <div className="box-border content-stretch flex flex-col md:flex-row font-['Inter:Regular',sans-serif] font-normal items-start justify-between gap-4 md:gap-0 leading-[normal] not-italic px-4 md:px-8 lg:px-[80px] py-6 md:py-[32px] relative text-[#333333] text-sm md:text-[16px] w-full">
          <p className="opacity-70 relative shrink-0">Copyright © 2025. All rights reserved.</p>
          <p className="opacity-70 relative shrink-0 text-left md:text-right">Back to Top</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-12 md:gap-20 lg:gap-[100px] items-start relative shrink-0 w-full" data-name="Footer">
      <Top />
      <Mid />
      <Subfooter />
    </div>
  );
}

function CtaFooter() {
  return (
    <div className="content-stretch flex flex-col items-start w-full" data-name="CTA & Footer">
      <Footer />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-6 md:gap-[40px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#303030] text-base md:text-[18px] w-full">Our operations meet the highest international food safety and quality standards. From farm to frozen fruit, every process is certified to ensure consistency, hygiene, and trust — delivering products that meet global expectations.</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-6 md:gap-[32px] items-start w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#115132] text-2xl md:text-4xl lg:text-[48px] tracking-[-0.96px] w-full">Certified Quality, Guaranteed Freshness</p>
      <Frame22 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-4 md:gap-[24px] items-start w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-base md:text-[18px] text-center w-full">ISO 22000 – Food Safety Management System</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-4 md:gap-[24px] items-start w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-base md:text-[18px] text-center w-full">BRCGS Food Safety Certification</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-4 md:gap-[24px] items-start w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-base md:text-[18px] text-center w-full">ISO 9001 – Quality Management System</p>
    </div>
  );
}

function Group() {
  return (
    <div className="relative bg-[#f1f4ee] py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-[280px]">
      <div className="flex flex-col gap-12 md:gap-16">
        <Frame23 />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col gap-6 items-center">
            <div className="h-[250px] md:h-[300px] w-full pointer-events-none rounded-[40px]" data-name="image">
              <div className="relative overflow-hidden rounded-[40px] h-full w-full">
                <img alt="" className="w-full h-full object-cover" src={imgImage} />
              </div>
              <div aria-hidden="true" className="absolute border border-[#d5d9e3] border-solid inset-0 rounded-[40px]" />
            </div>
            <Text2 />
          </div>
          <div className="flex flex-col gap-6 items-center">
            <div className="h-[250px] md:h-[300px] w-full pointer-events-none rounded-[40px]" data-name="image">
              <img alt="" className="w-full h-full object-cover rounded-[40px]" src={imgImage1} />
              <div aria-hidden="true" className="absolute border border-[#d5d9e3] border-solid inset-0 rounded-[40px]" />
            </div>
            <Text3 />
          </div>
          <div className="flex flex-col gap-6 items-center">
            <div className="h-[250px] md:h-[300px] w-full pointer-events-none rounded-[40px]" data-name="image">
              <div className="relative overflow-hidden rounded-[40px] h-full w-full">
                <img alt="" className="w-full h-full object-cover" src={imgImage2} />
              </div>
              <div aria-hidden="true" className="absolute border border-[#d5d9e3] border-solid inset-0 rounded-[40px]" />
            </div>
            <Text4 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component1920PxQualityCertificates() {
  return (
    <div className="bg-white relative w-full min-h-screen overflow-x-hidden" data-name="1920px - Quality & Certificates">
      {/* Hero Section with Background */}
      <div className="relative">
        <div className="absolute h-[300px] md:h-[350px] lg:h-[400px] left-4 md:left-8 lg:left-[80px] right-4 md:right-8 lg:right-[80px] top-[110px]" data-name="Subtract">
          <img alt="" className="w-full h-full object-cover" src={imgSubtract} />
        </div>
        <Frame10 />
        <Frame8 />
      </div>

      {/* Content Section */}
      <Frame18 />

      {/* Map Section */}
      <div className="relative py-16 md:py-24 lg:py-32">
        <Frame25 />
      </div>

      {/* Info Sections */}
      <div className="relative py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-[280px]">
        <Frame26 />
      </div>

      {/* Certificates Section */}
      <Group />

      {/* Footer */}
      <CtaFooter />
    </div>
  );
}