import type { CSSProperties } from "react";

import { Header as SiteHeader } from "@/components/Header";
import { Footer as SiteFooter } from "@/components/Footer";
import svgPaths from "./svg-iex8mzyjvv";
const imgImage = "/assets/354651f82306011d997d2a82199575c432fe299b.png";
const imgImage1 = "/assets/8bb42813f5af81abc1d96e97246fc9780f0a4fce.png";
const imgImage2 = "/assets/5dda885d439741c21b95acfdf678455a3646cc10.png";
const imgImage3 = "/assets/e8f7981ee33f8d76608bc182e5de89d43930af24.png";
const imgFrame1523 = "/assets/702779a6d3a3fb3e19cac6a2b110dddffb56176d.png";
const imgImage66 = "/assets/ffeba28eb520fc86d5a21d336c1c9fc39ddb9b41.png";
const imgImage46 = "/assets/9f31f54ac53df93789ba6a08682898a9cbb8ce0d.png";
const imgImage4 = "/assets/74e5c57dfecd9cb4d073bd7a84d2e5be1ce7774c.png";

interface ContactComponentProps {
  onNavigate?: (page: string, productName?: string) => void;
}

function Layer() {
  return (
    <div className="h-[64px] relative shrink-0 w-[132.489px]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 64">
        <g clipPath="url(#clip0_1_250)" id="Layer_1">
          <path d={svgPaths.p2c2b4370} fill="var(--fill-0, #19459D)" id="Vector" />
          <path d={svgPaths.p29295e00} fill="var(--fill-0, #19459D)" id="Vector_2" />
          <path d={svgPaths.p3209fa00} fill="var(--fill-0, #19459D)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1edaac70} fill="var(--fill-0, #19459D)" fillRule="evenodd" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p410e800} fill="url(#paint0_linear_1_250)" id="Vector_5" />
            <path d={svgPaths.p2f949000} fill="url(#paint1_linear_1_250)" id="Vector_6" />
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
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_250" x1="54.3525" x2="50.634" y1="63.3711" y2="46.5562">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_250" x1="19.1797" x2="54.1336" y1="52.8126" y2="45.0812">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <clipPath id="clip0_1_250">
            <rect fill="white" height="64" width="132.489" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#cde253] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#115132] text-[16px] text-nowrap whitespace-pre">Home</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Products</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Who we are</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Factories</p>
    </div>
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

function Frame4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">{`Quality & Certificates`}</p>
      <DropdownArrowIcon300WRounded />
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-[27px] items-center relative shrink-0" data-name="Menu">
      <Frame1 />
      <Frame3 />
      <Frame2 />
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Frame8() {
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

function Frame7() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-[10000px] shrink-0 size-[40px]">
      <LongArrowRight300WRounded />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#115132] box-border content-stretch flex gap-[16px] h-[48px] items-center justify-center pl-[32px] pr-[6px] py-[10px] relative rounded-[32px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact Us</p>
      <Frame7 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col font-medium gap-[103px] items-start left-[280px] not-italic text-[#212121] top-[452px] tracking-[-0.56px] w-[316px]">
      <p className="font-['Inter:Medium',sans-serif] leading-[normal] relative shrink-0 text-[28px] w-full">Don’t be afraid to say hello with us!</p>
      <div className="font-['Inter:Medium','Noto_Sans:Regular','Noto_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[0px] w-full">
        <p className="font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans:Medium',sans-serif] font-normal mb-0 not-italic text-[24px]">{`Phone `}</p>
        <p className="mb-0 text-[28px]">+90 (232) 864 22 00</p>
        <p className="mb-0 text-[28px]"> </p>
        <p className="font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans:Medium',sans-serif] font-normal mb-0 not-italic text-[24px]">{`Email `}</p>
        <p className="text-[28px]">sales@meyv.com.tr</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-0 w-[294.656px]" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[normal] left-0 not-italic text-[#cde253] text-[14px] top-[-0.1px] w-[73px]">First Name</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#cde253] h-[50px] left-0 rounded-[8px] top-[24px] w-[294.656px]" data-name="input">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[50px] justify-center leading-[0] left-[16px] not-italic text-[#115132] text-[16px] top-[25px] translate-y-[-50%] w-[38px]">
        <p className="leading-[24px]">John</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[74px] left-0 top-0 w-[294.656px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-0 w-[294.672px]" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[normal] left-0 not-italic text-[#cde253] text-[14px] top-[-0.1px] w-[72px]">Last Name</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[#cde253] h-[50px] left-0 rounded-[8px] top-[24px] w-[294.672px]" data-name="input">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[50px] justify-center leading-[0] left-[16px] not-italic text-[#115132] text-[16px] top-[25px] translate-y-[-50%] w-[31px]">
        <p className="leading-[24px]">Doe</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[74px] left-[318.66px] top-0 w-[294.672px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Label1 />
      <Input1 />
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[74px] left-0 top-0 w-[613.328px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div />
      <Div1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-0 w-[613.328px]" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[normal] left-0 not-italic text-[#cde253] text-[14px] top-[-0.1px] w-[95px]">Email Address</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute bg-[#cde253] h-[50px] left-0 rounded-[8px] top-[24px] w-[613.328px]" data-name="input">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[50px] justify-center leading-[0] left-[16px] not-italic text-[#115132] text-[16px] top-[25px] translate-y-[-50%] w-[181px]">
        <p className="leading-[24px]">john.doe@example.com</p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[74px] left-0 top-[98px] w-[613.328px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Label2 />
      <Input2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-0 w-[613.328px]" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[normal] left-0 not-italic text-[#cde253] text-[14px] top-[-0.1px] w-[100px]">Phone Number</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="absolute bg-[#cde253] h-[50px] left-0 rounded-[8px] top-0 w-[613px]" data-name="input">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[50px] justify-center leading-[0] left-[16px] not-italic text-[#115132] text-[16px] top-[25px] translate-y-[-50%] w-[120px]">
        <p className="leading-[24px]">(555) 123-4567</p>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[50px] left-0 top-[24px] w-[613.328px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Input3 />
    </div>
  );
}

function Div5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[74px] left-0 top-[196px] w-[613.328px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Label3 />
      <Div4 />
    </div>
  );
}

function Label4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-0 w-[613.328px]" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[normal] left-0 not-italic text-[#cde253] text-[14px] top-[-0.1px] w-[95px]">Your Message</p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="absolute bg-[#cde253] h-[122px] left-0 overflow-clip rounded-[8px] top-[24px] w-[613.328px]" data-name="textarea">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[122px] leading-[24px] left-[16px] not-italic text-[#115132] text-[16px] top-[12px] w-[217px]">How can we help you today?</p>
    </div>
  );
}

function Div6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[16px] left-0 top-[156px] w-[613.328px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[16px] leading-[16px] left-[515.33px] not-italic text-[#cde253] text-[12px] top-[-1.6px] w-[98px]">0/500 characters</p>
    </div>
  );
}

function Div7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[172px] left-0 top-[294px] w-[613.328px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Label4 />
      <Textarea />
      <Div6 />
    </div>
  );
}

function Input4() {
  return <div className="bg-white rounded-[4px] shrink-0 size-[16px]" data-name="input" />;
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] left-0 not-italic text-[14px] top-[-1.2px]">
      <p className="h-[20px] relative shrink-0 text-white w-[89px]">I agree to the</p>
      <p className="h-[20px] relative shrink-0 text-[#cde253] w-[112px]">Terms of Service</p>
      <p className="h-[20px] relative shrink-0 text-white w-[25px]">and</p>
      <p className="h-[20px] relative shrink-0 text-[#cde253] w-[92px]">Privacy Policy</p>
    </div>
  );
}

function Label5() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[20px] relative shrink-0 w-[329.125px]" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Input4 />
      <Label5 />
    </div>
  );
}

function Div8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-[490px] w-[613.328px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame20 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#cde253] h-[48px] left-0 rounded-[8px] top-0 w-[613.328px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[24px] leading-[normal] left-[306.94px] not-italic text-[#115132] text-[16px] text-center top-[12.56px] translate-x-[-50%] w-[128px]">Submit Message</p>
    </div>
  );
}

function Div9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[48px] left-0 top-[534px] w-[613.328px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[582px] left-[48px] top-[104px] w-[613.328px]" data-name="form">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div2 />
      <Div3 />
      <Div5 />
      <Div7 />
      <Div8 />
      <Div9 />
    </div>
  );
}

function Div10() {
  return (
    <div className="absolute bg-[#115132] h-[770px] left-[931px] rounded-[40px] top-[452px] w-[709.328px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[40px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-[48px] not-italic text-[#cde253] text-[28px] text-nowrap top-[43.56px] whitespace-pre">Send us a message</p>
      <Form />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[103px] items-start left-[280px] top-[1394px] w-[548px]">
      <div className="font-['Inter:Medium','Noto_Sans:Regular',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[0px] tracking-[-0.56px] w-full">
        <p className="font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal mb-0 text-[24px]">{`Office `}</p>
        <p className="text-[28px]">IPOSB 7.Sokak No:3 Pancar-Torbalı 35875 Izmir, Türkiye</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-0 mix-blend-multiply" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 35">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p56ca3b2} fill="var(--fill-0, #19459D)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p2eb48d00} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p2a64e680} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p1b6d4080} fill="var(--fill-0, white)" id="Vector_4" />
            <path clipRule="evenodd" d={svgPaths.p30a0ee00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_5" />
            <g id="Group_3">
              <path d={svgPaths.p2a9d8580} fill="url(#paint0_linear_1_226)" id="Vector_6" />
              <path d={svgPaths.p4b653f2} fill="url(#paint1_linear_1_226)" id="Vector_7" />
              <g id="Group_4">
                <path d={svgPaths.pb533d00} fill="var(--fill-0, #CFE5AE)" id="Vector_8" />
              </g>
              <g id="Group_5">
                <path d={svgPaths.p2249000} fill="var(--fill-0, #0D6D38)" id="Vector_9" />
              </g>
              <g id="Group_6">
                <path d={svgPaths.p3f916480} fill="var(--fill-0, #CFE5AE)" id="Vector_10" />
              </g>
            </g>
            <path d={svgPaths.p378cfc80} fill="var(--fill-0, white)" id="Vector_11" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_226" x1="29.4871" x2="28.0322" y1="29.5908" y2="23.1157">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_226" x1="16.1329" x2="29.423" y1="25.519" y2="22.6255">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute contents inset-0" data-name="Layer 1">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Layer1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[35px] left-[1037px] overflow-clip top-[1732px] w-[68px]" data-name="Frame">
      <Group1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="h-[48px] relative shrink-0 w-[47.997px]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(17, 81, 50, 1)" } as CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <g id="Vector">
              <path d={svgPaths.p2e3b2f00} fill="#115132" />
              <path d={svgPaths.p25004080} fill="#115132" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[48px] text-nowrap tracking-[-0.32px] tracking-[-0.96px] whitespace-pre">
        <span>{`Instagram `}</span>
        <span className="text-[#115132]">@meyv</span>
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[40px] shrink-0 size-[316px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage} />
      </div>
      <div className="relative rounded-[40px] shrink-0 size-[316px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage1} />
      </div>
      <div className="relative rounded-[40px] shrink-0 size-[316px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage2} />
      </div>
      <div className="relative rounded-[40px] shrink-0 size-[316px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-0 px-[280px] py-[160px] top-[2114px] w-[1920px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <div className="absolute bg-repeat bg-size-[481px_488px] bg-top-left inset-0 opacity-25" style={{ backgroundImage: `url('${imgFrame1523}')` }} />
      </div>
      <Frame25 />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[64px] relative shrink-0 w-[132.489px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 64">
        <g clipPath="url(#clip0_1_250)" id="Layer_1">
          <path d={svgPaths.p2c2b4370} fill="var(--fill-0, #19459D)" id="Vector" />
          <path d={svgPaths.p29295e00} fill="var(--fill-0, #19459D)" id="Vector_2" />
          <path d={svgPaths.p3209fa00} fill="var(--fill-0, #19459D)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1edaac70} fill="var(--fill-0, #19459D)" fillRule="evenodd" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p410e800} fill="url(#paint0_linear_1_250)" id="Vector_5" />
            <path d={svgPaths.p2f949000} fill="url(#paint1_linear_1_250)" id="Vector_6" />
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
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_250" x1="54.3525" x2="50.634" y1="63.3711" y2="46.5562">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_250" x1="19.1797" x2="54.1336" y1="52.8126" y2="45.0812">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <clipPath id="clip0_1_250">
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

function Frame10() {
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
      <Frame10 />
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

function Frame16() {
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
      <Frame16 />
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

function Frame17() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">{`Terms & Conditions`}</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-50 relative shrink-0 text-[#212121] text-[16px] text-nowrap whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Menu3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Menu">
      <Frame17 />
      <Frame18 />
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

export default function Component1920PxContact({ onNavigate }: ContactComponentProps = {}) {
  return (
    <div className="bg-white relative size-full" data-name="1920px - Contact">
      <div className="absolute h-[515px] left-[665px] top-[864px] w-[572px]" data-name="image 46">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage46} />
      </div>
      <SiteHeader onNavigate={onNavigate} />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[931px] not-italic text-[#212121] text-[28px] top-[226px] tracking-[-0.56px] w-[709px]">Your message matters. Our team is ready to assist you with any questions or requests.</p>
      <Frame21 />
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[96px] left-[280px] not-italic text-[#333333] text-[80px] text-nowrap top-[170px] whitespace-pre">
        <p className="mb-0">Let’s get</p>
        <p>in touch</p>
      </div>
      <Div10 />
      <Frame22 />
      <div className="absolute h-[452px] left-[280px] mix-blend-luminosity rounded-[40px] top-[1553px] w-[1360px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgImage4} />
      </div>
      <Frame />
      <Frame26 />
      <div className="absolute bottom-[31px] left-0 w-full">
        <SiteFooter onNavigate={onNavigate} />
      </div>
    </div>
  );
}