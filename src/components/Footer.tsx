import svgPaths from "@/imports/svg-lasglpsk63";
import imgImage66 from "@/assets/ffeba28eb520fc86d5a21d336c1c9fc39ddb9b41.png";

function Logo() {
  return (
    <div className="h-[64px] relative shrink-0 w-[132.489px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 64">
        <g clipPath="url(#clip0_footer_logo)" id="Logo">
          <path d={svgPaths.p2c2b4370} fill="var(--fill-0, #19459D)" id="Vector" />
          <path d={svgPaths.p29295e00} fill="var(--fill-0, #19459D)" id="Vector_2" />
          <path d={svgPaths.p3209fa00} fill="var(--fill-0, #19459D)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1edaac70} fill="var(--fill-0, #19459D)" fillRule="evenodd" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p410e800} fill="url(#paint0_linear_footer)" id="Vector_5" />
            <path d={svgPaths.p2f949000} fill="url(#paint1_linear_footer)" id="Vector_6" />
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
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_footer" x1="54.3525" x2="50.634" y1="63.3711" y2="46.5562">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_footer" x1="19.1797" x2="54.1336" y1="52.8126" y2="45.0812">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <clipPath id="clip0_footer_logo">
            <rect fill="white" height="64" width="132.489" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownArrowIcon() {
  return (
    <div className="h-[7px] relative shrink-0 w-[12.775px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
        <g id="Dropdown Arrow Icon 300W Rounded">
          <path d={svgPaths.p11ff1530} fill="var(--fill-0, #64748B)" id="Dropdown Arrow" />
        </g>
      </svg>
    </div>
  );
}

interface FooterProps {
  onNavigate?: (page: string, productName?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white content-stretch flex flex-col gap-[100px] items-start relative shrink-0 w-full">
      {/* Top section */}
      <div className="relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[#d5d9e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex items-center justify-between px-[80px] py-[60px] relative w-full">
            <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0">
              <Logo />
            </div>
            <div className="basis-0 content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[13px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#212121]">
              <p className="relative shrink-0 text-[40px] w-full">+90 (232) 864 22 00</p>
              <p className="relative shrink-0 text-[32px] w-full">sales@meyv.com.tr</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mid section */}
      <div className="relative shrink-0 w-full">
        <div className="size-full">
          <div className="box-border content-stretch flex items-start justify-between px-[80px] py-0 relative w-full">
            {/* Slogan & Logo */}
            <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0">
              <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[28px] w-[403px]">
                <p className="mb-0">Naturally Sweet,</p>
                <p>Perfectly Dried</p>
              </div>
              <div className="h-[45px] relative shrink-0 w-[128px]">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage66} />
              </div>
            </div>

            {/* Menu */}
            <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px relative shrink-0">
              {/* Navigation */}
              <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[21px] w-full">Navigation</p>
                <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
                  <button onClick={() => onNavigate?.('home')} className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0 cursor-pointer bg-transparent border-none">
                    <div aria-hidden="true" className="absolute border-[#cde253] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#115132] text-[16px] text-nowrap whitespace-pre">Home</p>
                  </button>
                  <button onClick={() => onNavigate?.('products')} className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0 cursor-pointer bg-transparent border-none">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Products</p>
                  </button>
                  <button className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0 cursor-pointer bg-transparent border-none">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Who we are</p>
                  </button>
                  <button className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0 cursor-pointer bg-transparent border-none">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Quality</p>
                    <DropdownArrowIcon />
                  </button>
                  <button className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0 cursor-pointer bg-transparent border-none">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Con</p>
                  </button>
                </div>
              </div>

              {/* Follow Us */}
              <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[21px] w-full">Follow Us</p>
                <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
                  <button className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0 cursor-pointer bg-transparent border-none">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Linkedin</p>
                  </button>
                  <button className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0 cursor-pointer bg-transparent border-none">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Instagram</p>
                  </button>
                </div>
              </div>

              {/* Legal */}
              <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[21px] w-full">Legal</p>
                <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
                  <button className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0 cursor-pointer bg-transparent border-none">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">{`Terms & Conditions`}</p>
                  </button>
                  <button className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0 cursor-pointer bg-transparent border-none">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Privacy Policy</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subfooter */}
      <div className="relative shrink-0 w-full">
        <div className="size-full">
          <div className="box-border content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[normal] not-italic px-[80px] py-[32px] relative text-[#333333] text-[16px] text-nowrap w-full whitespace-pre">
            <p className="opacity-70 relative shrink-0">Copyright © 2025. All rights reserved.</p>
            <button 
              onClick={handleScrollToTop}
              className="opacity-70 relative shrink-0 text-right cursor-pointer bg-transparent border-none font-['Inter:Regular',sans-serif] font-normal text-[#333333] text-[16px]"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
