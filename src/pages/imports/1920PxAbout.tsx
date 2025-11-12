import { NavLink } from "react-router-dom";
import svgPaths from "./svg-uxdpx2db5h";
import imgImage54 from "@/assets/5d67a7f916b6f43f466fc2c9204eff762a68d9fe.png";
import imgImage55 from "@/assets/0e9e73385ce1d4831434ca7b2f84acde628e099d.png";
import imgImage56 from "@/assets/8123f21ea8fc9b038b5691ee9999d4159a1da9a0.png";
import imgImage57 from "@/assets/462e9e5325591b6266824e6f96c8dcaef043fbf7.png";
import imgImage58 from "@/assets/2f36a75ad0ba6d95c024dfda8808d5abd06be8c5.png";
import imgCta from "@/assets/261ee78b2877e6c28291c4372053c1fc58ec3cb9.png";
import imgImage66 from "@/assets/ffeba28eb520fc86d5a21d336c1c9fc39ddb9b41.png";
import imgImage69 from "@/assets/92a8529c10c728fdc55976887e3edbf6144447ec.png";
import imgImage70 from "@/assets/655397c830d575c259ba76535fb6961f2b8e8620.png";
import imgImage71 from "@/assets/5fb70debef23da97ca100e1774de6a88df37b0e8.png";
import imgImage72 from "@/assets/59f5bef59c12fa22f1af08726da5fe7c70b79f7c.png";
import imgImage73 from "@/assets/f4c5273490c14ef10fe66896f120a4bec2c49fdd.png";
import imgImage74 from "@/assets/99d738476c3e84dbde0f5f31c1c3207a1153a403.png";
import imgSubtract from "@/assets/621fbd1189a078e94f34c1d981c75bf20ecd9fd8.png";
import imgImage from "@/assets/166061a53088192508b93d7e7f99bcbd487eb813.png";
import imgImage1 from "@/assets/7de7b8b5b2103373d58539913cb1593d70b344b0.png";
import imgImage2 from "@/assets/f45333813f767b890458d78f18201021fae2063e.png";
import { imgImage68 } from "./svg-h82ub";

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start not-italic relative shrink-0 text-white w-full" data-name="Title">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[96px] relative shrink-0 text-[80px] text-nowrap whitespace-pre">Our Story</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[21px] w-[min-content]">Discover the journey behind our brand and the purpose that guides everything we do.</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[160px] top-[264px] w-[602px]">
      <Title />
    </div>
  );
}

function Layer() {
  return (
    <div className="h-[64px] relative shrink-0 w-[132.489px]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 64">
        <g clipPath="url(#clip0_1_269)" id="Layer_1">
          <path d={svgPaths.p2c2b4370} fill="var(--fill-0, #19459D)" id="Vector" />
          <path d={svgPaths.p29295e00} fill="var(--fill-0, #19459D)" id="Vector_2" />
          <path d={svgPaths.p3209fa00} fill="var(--fill-0, #19459D)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1edaac70} fill="var(--fill-0, #19459D)" fillRule="evenodd" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p410e800} fill="url(#paint0_linear_1_269)" id="Vector_5" />
            <path d={svgPaths.p2f949000} fill="url(#paint1_linear_1_269)" id="Vector_6" />
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
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_269" x1="54.3525" x2="50.634" y1="63.3711" y2="46.5562">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_269" x1="19.1797" x2="54.1336" y1="52.8126" y2="45.0812">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <clipPath id="clip0_1_269">
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
          <p
            className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre transition-colors duration-200 ${
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
            className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre transition-colors duration-200 ${
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
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#303030] text-[18px] w-full">
        <p className="mb-0">At Meyv, we specialize in delivering high-quality freeze-dried and IQF fruit ingredients to clients worldwide. Founded on the principles of innovation, sustainability, and consistency, our company blends time-tested agricultural practices with state-of-the-art processing technologies.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">From farm to final product, every step is handled with care to preserve the natural taste, nutrients, and texture of each fruit. Our commitment to quality and traceability ensures that our partners receive safe, clean-label products tailored to meet the evolving demands of the food industry.</p>
        <p className="mb-0">&nbsp;</p>
        <p>With a global mindset and deep respect for the land, we continue to grow—alongside our customers, our farmers, and the future of food.</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[48px] tracking-[-0.96px] w-[664px]">Rooted in nature. Driven by technology.</p>
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[120px] items-start left-0 px-[280px] py-[160px] top-[910px] w-[1920px]">
      <Frame17 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="mb-0">We envision a future where food is fresher, safer, and more sustainable—without compromise.</p>
        <p>
          <br aria-hidden="true" />
          As global demand grows for healthy, convenient, and shelf-stable ingredients, our vision is to lead the evolution of natural preservation. Through continuous innovation and strong partnerships, we aim to set the global benchmark for quality in freeze-dried and IQF fruit solutions.
          <br aria-hidden="true" />
          {` We see a world where everyone, everywhere, has access to nutritious ingredients that are as good for the body as they are for the earth.`}
        </p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[280px] top-[2752px] w-[664px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#cde253] text-[48px] tracking-[-0.96px] w-full">Our future focus</p>
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="mb-0">At Mayv, our purpose is simple yet impactful: to preserve the best of nature so it can nourish more people, more sustainably.</p>
        <p>
          <br aria-hidden="true" />
          We specialize in delivering premium-quality freeze-dried and IQF fruits that retain the full flavor, color, and nutrients of freshly harvested produce. By combining advanced food technology with ethical sourcing and transparent operations, we offer clean-label solutions trusted by food brands around the world.
        </p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[976px] top-[2297px] w-[664px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#cde253] text-[48px] tracking-[-0.96px] w-full">What drives us</p>
      <Frame29 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[48px] tracking-[-0.96px] w-[664px]">Key achievements</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#115132] text-[0px] text-nowrap whitespace-pre">
        <span className="text-[96px]">20</span>
        <span className="text-[32px]">+Years</span>
      </p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#212121] text-[21px] w-[min-content]">Proven Expertise</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full opacity-70 relative shrink-0 text-[#303030] text-[15px] w-[min-content]">Two decades of excellence in fruit processing and preservation.</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#115132] text-[0px] text-nowrap whitespace-pre">
        <span className="text-[96px]">160K</span>
        <span className="text-[32px]">+ Farmers</span>
      </p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#212121] text-[21px] w-[min-content]">Global Reach</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full opacity-70 relative shrink-0 text-[#303030] text-[15px] w-[min-content]">Supporting a worldwide network of trusted growers.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#115132] text-[0px] text-nowrap whitespace-pre">
        <span className="text-[96px]">100</span>
        <span className="text-[32px]">% Natural</span>
      </p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#212121] text-[21px] w-[min-content]">Pure Ingredients</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full opacity-70 relative shrink-0 text-[#303030] text-[15px] w-[min-content]">No additives, just real fruit—preserved at its peak.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame14 />
      <Frame12 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[120px] items-start left-0 px-[280px] py-[160px] top-[3311px] w-[1920px]">
      <Frame20 />
      <Frame15 />
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start leading-[normal] left-[280px] not-italic top-[4000px] w-[664px]" data-name="Title">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#212121] text-[48px] tracking-[-0.96px] w-full">Milestones</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[#303030] text-[16px] w-full">Since 1973, we’ve been working to “endure through time.”</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-between mix-blend-multiply relative shrink-0 w-full">
      <div className="h-[55px] relative shrink-0 w-[148.5px]" data-name="image 54">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage54} />
      </div>
      <div className="h-[60px] relative shrink-0 w-[153.708px]" data-name="image 55">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage55} />
      </div>
      <div className="h-[60px] relative shrink-0 w-[241.429px]" data-name="image 56">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage56} />
      </div>
      <div className="h-[62px] relative shrink-0 w-[193.395px]" data-name="image 57">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage57} />
      </div>
      <div className="h-[56px] relative shrink-0 w-[193.2px]" data-name="image 58">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage58} />
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[280px] top-[1678px] w-[1360px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[32px] tracking-[-0.64px] w-full">Other group companies</p>
      <Frame32 />
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
        <g clipPath="url(#clip0_1_245)" id="Logo">
          <path d={svgPaths.p2c2b4370} fill="var(--fill-0, #19459D)" id="Vector" />
          <path d={svgPaths.p29295e00} fill="var(--fill-0, #19459D)" id="Vector_2" />
          <path d={svgPaths.p3209fa00} fill="var(--fill-0, #19459D)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1edaac70} fill="var(--fill-0, #19459D)" fillRule="evenodd" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p410e800} fill="url(#paint0_linear_1_245)" id="Vector_5" />
            <path d={svgPaths.p2f949000} fill="url(#paint1_linear_1_245)" id="Vector_6" />
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
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_245" x1="54.3525" x2="50.634" y1="63.3711" y2="46.5562">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_245" x1="19.1797" x2="54.1336" y1="52.8126" y2="45.0812">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <clipPath id="clip0_1_245">
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

function Frame13() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Products</p>
    </div>
  );
}

function Frame21() {
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

function Frame22() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Quality</p>
      <DropdownArrowIcon300WRounded1 />
    </div>
  );
}

function Frame23() {
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
      <Frame13 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
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

function Frame24() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Linkedin</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Instagram</p>
    </div>
  );
}

function Menu2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Menu">
      <Frame24 />
      <Frame25 />
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

function Frame26() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">{`Terms & Conditions`}</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Menu3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Menu">
      <Frame26 />
      <Frame27 />
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
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[7421px] w-[1920px]" data-name="CTA & Footer">
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#115132] text-[32px] w-full">The Early Years</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[16px] w-full">
        <p className="mb-0">Bakioğlu Holding’s journey began in 1973 when Enver Bakioğlu founded Bak Ambalaj in İzmir, producing paper bags. By 1976, it expanded into polyethylene packaging, and in 1980 invested in rotogravure printing and plastic film, entering high-quality printed packaging.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">In 1990, the company moved to modern facilities in the İzmir Atatürk Organized Industrial Zone, continuing to grow with new technologies and exports. By the late 1990s, exports reached 25%, and a new plant was acquired in 1998.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Today, Bak Ambalaj operates four facilities in İzmir, ranks among Turkey’s Top 1000 Industrial Enterprises, and exports over 70% of its production—mainly to Western Europe.</p>
      </div>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#115132] text-[32px] w-full">Transition to Vertical Integration</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[16px] w-full">
        <p className="mb-0">Founded in 1993, Polibak Plastic Film marked a key step toward Bakioğlu Holding’s vertical integration by producing plastic films—essential materials for flexible packaging.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Operating on 170,000 m² in the İzmir Atatürk Organized Industrial Zone, Polibak has produced BOPP and CPP films since 1994 and ranks among Turkey’s Top 500 Industrial Enterprises. With advanced extrusion, slitting, and metallization lines, each new BOPP line further boosts its production capacity.</p>
      </div>
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

function MaskGroup2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[457.096px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[47.008px_8.921px] mask-size-[548px_440px] ml-[-47.01px] mt-[-8.92px] relative rounded-[40px] w-[603.247px]" data-name="image 70" style={{ maskImage: `url('${imgImage68}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage71} />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-[664px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#115132] text-[32px] w-full">Establishment of Service Companies</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[16px] w-full">In 1994, Baksaş Insurance was established to meet the Holding’s growing insurance needs and serve external clients. The same year, Egevizyon Media (Ege TV and Radio Ege) was founded to connect Ankara and the Aegean region, marking the Holding’s entry into the media sector.</p>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex gap-[148px] items-center relative shrink-0 w-full" data-name="Section">
      <MaskGroup2 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-[664px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#115132] text-[32px] w-full">The Final Stages of Vertical Integration</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[16px] w-full">Founded in 1998 as Wetzel AŞ under the Bakioğlu-Wetzel partnership, Bak Gravür became part of Bakioğlu Holding in 2001. Renamed in 2017 to align with the Group’s unified branding, it now ranks among Turkey’s leading rotogravure cylinder manufacturers.</p>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[455.605px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[40.299px_8.921px] mask-size-[548px_440px] ml-[-40.3px] mt-[-8.92px] relative rounded-[40px] w-[606.976px]" data-name="image 71" style={{ maskImage: `url('${imgImage68}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage72} />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex gap-[148px] items-center relative shrink-0 w-full" data-name="Section">
      <Text3 />
      <MaskGroup3 />
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[464.553px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[42.536px_12.649px] mask-size-[548px_440px] ml-[-42.54px] mt-[-12.65px] relative rounded-[40px] w-[612.195px]" data-name="image 72" style={{ maskImage: `url('${imgImage68}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage73} />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-[664px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#115132] text-[32px] w-[min-content]">Expanding Vertical Integration and Global Growth</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[16px] w-[664px]">
        <p className="mb-0">Founded in 2002, Bareks Plastik strengthened Bakioğlu Holding’s vertical integration by producing multi-layer polyethylene film for food packaging, printing, and lamination, with an annual capacity of 53,000 tons. Exporting over 70% of its products to 30+ countries, Bareks continues to grow through investments in the İzmir Free Zone.</p>
        <p className="mb-0">&nbsp;</p>
        <p>To complete the integration chain, Bakcycle Recycling was founded in 2021, and Bak Ambalaj Foreign Trade (Bak International) was established in 2015 to support expanding export operations.</p>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="content-stretch flex gap-[148px] items-center relative shrink-0 w-full" data-name="Section">
      <MaskGroup4 />
      <Frame34 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-[664px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#115132] text-[32px] w-full">Global Expansion and New Horizons</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#303030] text-[16px] w-full">
        <p className="mb-0">{`To strengthen its presence in Western Europe, Bak Flexibles BV was founded in Amsterdam in 2015, followed by Bak Global Trade BV (now P&B Flexibles) in 2016 to manage raw material sourcing and financing. In 2025, Bak Flexibles Germany will be established in Düsseldorf to serve the DACH region.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p>Expanding into new sectors, Freshbak was founded in 2017 as Turkey’s first industrial-scale freeze-dried food producer. In 2023, MegV Frozen Foods joined the group, processing 4,000 tons annually and exporting 60% of its output, further supporting Turkey’s agricultural economy.</p>
      </div>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[462.316px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[52.973px_5.192px] mask-size-[548px_440px] ml-[-52.97px] mt-[-5.19px] relative rounded-[40px] w-[610.704px]" data-name="image 73" style={{ maskImage: `url('${imgImage68}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage74} />
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="content-stretch flex gap-[148px] items-center relative shrink-0 w-full" data-name="Section">
      <Text4 />
      <MaskGroup5 />
    </div>
  );
}

function Sections() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] items-start left-[280px] top-[4181px] w-[1360px]" data-name="Sections">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default function Component1920PxAbout() {
  return (
    <div className="bg-white relative size-full" data-name="1920px - About">
      <div className="absolute bg-neutral-50 h-[341px] left-0 top-[1578px] w-[1920px]" />
      <div className="absolute h-[800px] left-[80px] top-[110px] w-[1760px]" data-name="Subtract">
        <img alt="" className="block max-w-none size-full" height="800" src={imgSubtract} width="1760" />
      </div>
      <Frame10 />
      <Frame8 />
      <Frame18 />
      <div className="absolute bg-[#115132] h-[1014px] left-0 top-[2213px] w-[1920px]" data-name="Bg" />
      <Frame30 />
      <Frame31 />
      <div className="absolute h-[563px] left-[302px] rounded-[40px] top-[2039px] w-[620px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage} />
      </div>
      <div className="absolute h-[475px] left-[998px] rounded-[40px] top-[2836px] w-[620px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage1} />
      </div>
      <Frame19 />
      <Title1 />
      <div className="absolute h-[280px] left-[1292px] rounded-[48px] top-[728px] w-[548px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[48px] size-full" src={imgImage2} />
      </div>
      <Frame33 />
      <CtaFooter />
      <Sections />
    </div>
  );
}