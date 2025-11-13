import type { CSSProperties } from "react";

import { Header as SiteHeader } from "@/components/Header";
import { Footer as SiteFooter } from "@/components/Footer";
import svgPaths from "./svg-iex8mzyjvv";
const imgImage = "/assets/354651f82306011d997d2a82199575c432fe299b.png";
const imgImage1 = "/assets/8bb42813f5af81abc1d96e97246fc9780f0a4fce.png";
const imgImage2 = "/assets/5dda885d439741c21b95acfdf678455a3646cc10.png";
const imgImage3 = "/assets/e8f7981ee33f8d76608bc182e5de89d43930af24.png";
const imgFrame1523 = "/assets/702779a6d3a3fb3e19cac6a2b110dddffb56176d.png";
const imgImage46 = "/assets/9f31f54ac53df93789ba6a08682898a9cbb8ce0d.png";
const imgImage4 = "/assets/74e5c57dfecd9cb4d073bd7a84d2e5be1ce7774c.png";

interface ContactComponentProps {
  onNavigate?: (page: string, productName?: string) => void;
}

function Label() {
  return (
    <div className="relative bg-[rgba(0,0,0,0)] mb-2" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#cde253] text-[14px]">First Name</p>
    </div>
  );
}

function Input() {
  return (
    <div className="relative bg-[#cde253] h-[50px] rounded-[8px] w-full flex items-center px-4" data-name="input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#115132] text-[16px]">John</p>
    </div>
  );
}

function Div() {
  return (
    <div className="relative bg-[rgba(0,0,0,0)] w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="relative bg-[rgba(0,0,0,0)] mb-2" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#cde253] text-[14px]">Last Name</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="relative bg-[#cde253] h-[50px] rounded-[8px] w-full flex items-center px-4" data-name="input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#115132] text-[16px]">Doe</p>
    </div>
  );
}

function Div1() {
  return (
    <div className="relative bg-[rgba(0,0,0,0)] w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Label1 />
      <Input1 />
    </div>
  );
}

function Div2() {
  return (
    <div className="relative bg-[rgba(0,0,0,0)] w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div />
      <Div1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="relative bg-[rgba(0,0,0,0)] mb-2" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#cde253] text-[14px]">Email Address</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="relative bg-[#cde253] h-[50px] rounded-[8px] w-full flex items-center px-4" data-name="input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#115132] text-[16px]">john.doe@example.com</p>
    </div>
  );
}

function Div3() {
  return (
    <div className="relative bg-[rgba(0,0,0,0)] w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Label2 />
      <Input2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="relative bg-[rgba(0,0,0,0)] mb-2" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#cde253] text-[14px]">Phone Number</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="relative bg-[#cde253] h-[50px] rounded-[8px] w-full flex items-center px-4" data-name="input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#115132] text-[16px]">(555) 123-4567</p>
    </div>
  );
}

function Div4() {
  return (
    <div className="relative bg-[rgba(0,0,0,0)] w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Input3 />
    </div>
  );
}

function Div5() {
  return (
    <div className="relative bg-[rgba(0,0,0,0)] w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Label3 />
      <Div4 />
    </div>
  );
}

function Label4() {
  return (
    <div className="relative bg-[rgba(0,0,0,0)] mb-2" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#cde253] text-[14px]">Your Message</p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="relative bg-[#cde253] h-[122px] overflow-clip rounded-[8px] w-full p-4" data-name="textarea">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#115132] text-[16px]">How can we help you today?</p>
    </div>
  );
}

function Div6() {
  return (
    <div className="relative bg-[rgba(0,0,0,0)] mt-2 text-right" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#cde253] text-[12px]">0/500 characters</p>
    </div>
  );
}

function Div7() {
  return (
    <div className="relative bg-[rgba(0,0,0,0)] w-full" data-name="div">
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
    <div className="relative content-stretch flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] not-italic text-[12px] md:text-[14px]">
      <p className="relative text-white">I agree to the</p>
      <p className="relative text-[#cde253]">Terms of Service</p>
      <p className="relative text-white">and</p>
      <p className="relative text-[#cde253]">Privacy Policy</p>
    </div>
  );
}

function Label5() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative flex-1" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative content-stretch flex gap-[8px] items-start">
      <Input4 />
      <Label5 />
    </div>
  );
}

function Div8() {
  return (
    <div className="relative bg-[rgba(0,0,0,0)] w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame20 />
    </div>
  );
}

function Button() {
  return (
    <div className="relative bg-[#cde253] h-[48px] rounded-[8px] w-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#115132] text-[16px] text-center">Submit Message</p>
    </div>
  );
}

function Div9() {
  return (
    <div className="relative bg-[rgba(0,0,0,0)] w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button />
    </div>
  );
}

function Form() {
  return (
    <div className="relative bg-[rgba(0,0,0,0)] w-full space-y-6" data-name="form">
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
    <div className="relative bg-[#115132] min-h-[600px] md:min-h-[700px] lg:h-[770px] rounded-[20px] md:rounded-[40px] w-full p-6 md:p-8 lg:p-12" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[20px] md:rounded-[40px]" />
      <p className="relative font-['Inter:Medium',sans-serif] font-medium leading-[32px] not-italic text-[#cde253] text-xl md:text-2xl lg:text-[28px] mb-8 lg:mb-12">
        Send us a message
      </p>
      <Form />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative content-stretch flex flex-col gap-8 md:gap-12 lg:gap-[103px] items-start w-full">
      <div className="font-['Inter:Medium','Noto_Sans:Regular',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[0px] tracking-[-0.56px] w-full">
        <p className="font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal mb-0 text-lg md:text-xl lg:text-[24px]">Office</p>
        <p className="text-xl md:text-2xl lg:text-[28px]">IPOSB 7.Sokak No:3 Pancar-Torbalı 35875 Izmir, Türkiye</p>
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
    <div className="relative h-[35px] overflow-clip w-[68px] mx-auto my-8" data-name="Frame">
      <Group1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-4 md:gap-[20px] items-center relative shrink-0 flex-wrap">
      <div className="h-[32px] md:h-[40px] lg:h-[48px] relative shrink-0 w-[32px] md:w-[40px] lg:w-[47.997px]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(17, 81, 50, 1)" } as CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <g id="Vector">
              <path d={svgPaths.p2e3b2f00} fill="#115132" />
              <path d={svgPaths.p25004080} fill="#115132" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-2xl md:text-4xl lg:text-[48px] tracking-[-0.32px] tracking-[-0.96px]">
        <span>Instagram </span>
        <span className="text-[#115132]">@meyv</span>
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-[32px] w-full">
      <div className="relative rounded-[20px] md:rounded-[40px] aspect-square w-full" data-name="image">
        <img alt="" className="w-full h-full object-cover pointer-events-none rounded-[20px] md:rounded-[40px]" src={imgImage} />
      </div>
      <div className="relative rounded-[20px] md:rounded-[40px] aspect-square w-full" data-name="image">
        <img alt="" className="w-full h-full object-cover pointer-events-none rounded-[20px] md:rounded-[40px]" src={imgImage1} />
      </div>
      <div className="relative rounded-[20px] md:rounded-[40px] aspect-square w-full" data-name="image">
        <img alt="" className="w-full h-full object-cover pointer-events-none rounded-[20px] md:rounded-[40px]" src={imgImage2} />
      </div>
      <div className="relative rounded-[20px] md:rounded-[40px] aspect-square w-full" data-name="image">
        <img alt="" className="w-full h-full object-cover pointer-events-none rounded-[20px] md:rounded-[40px]" src={imgImage3} />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-6 md:gap-8 lg:gap-[40px] items-start relative shrink-0 w-full z-10">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative box-border content-stretch flex flex-col gap-[10px] items-start px-4 md:px-8 lg:px-[280px] py-12 md:py-20 lg:py-[160px] w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <div className="absolute bg-repeat bg-size-[481px_488px] bg-top-left inset-0 opacity-25" style={{ backgroundImage: `url('${imgFrame1523}')` }} />
      </div>
      <Frame25 />
    </div>
  );
}

export default function Component1920PxContact({ onNavigate }: ContactComponentProps = {}) {
  return (
    <div className="bg-white relative w-full min-h-screen overflow-x-hidden">
      <SiteHeader onNavigate={onNavigate} />
      
      {/* Hero Section */}
      <div className="relative px-4 md:px-8 lg:px-[280px] pt-8 md:pt-12 lg:pt-16">
        <div className="font-['Inter:Medium',sans-serif] font-medium leading-tight not-italic text-[#333333] text-4xl md:text-6xl lg:text-[80px]">
          <p className="mb-0">Let&apos;s get</p>
          <p>in touch</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative px-4 md:px-8 lg:px-[280px] py-8 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[71px]">
          {/* Left Side - Contact Info */}
          <div className="flex-1">
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[400px] md:h-[515px] w-[400px] md:w-[572px] -z-10 opacity-50 lg:opacity-100" data-name="image 46">
              <img alt="" className="w-full h-full object-cover pointer-events-none" src={imgImage46} />
            </div>
            
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-normal not-italic text-[#212121] text-lg md:text-2xl lg:text-[28px] tracking-[-0.56px] mb-8 lg:mb-16">
              Your message matters. Our team is ready to assist you with any questions or requests.
            </p>
            
            <div className="content-stretch flex flex-col font-medium gap-12 lg:gap-[103px] items-start not-italic text-[#212121] tracking-[-0.56px]">
              <p className="font-['Inter:Medium',sans-serif] leading-normal text-xl md:text-2xl lg:text-[28px]">
                Don&apos;t be afraid to say hello with us!
              </p>
              <div className="font-['Inter:Medium','Noto_Sans:Regular','Noto_Sans:Medium',sans-serif] leading-normal text-[0px]">
                <p className="font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans:Medium',sans-serif] font-normal mb-0 not-italic text-lg md:text-xl lg:text-[24px]">
                  Phone
                </p>
                <p className="mb-0 text-xl md:text-2xl lg:text-[28px]">+90 (232) 864 22 00</p>
                <p className="mb-0 text-xl md:text-2xl lg:text-[28px]"> </p>
                <p className="font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans:Medium',sans-serif] font-normal mb-0 not-italic text-lg md:text-xl lg:text-[24px]">
                  Email
                </p>
                <p className="text-xl md:text-2xl lg:text-[28px]">sales@meyv.com.tr</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 lg:flex-none lg:w-[709px]">
            <Div10 />
          </div>
        </div>
      </div>

      {/* Office Section */}
      <div className="relative px-4 md:px-8 lg:px-[280px] py-8 md:py-12">
        <Frame22 />
      </div>

      {/* Map Image */}
      <div className="relative px-4 md:px-8 lg:px-[280px] py-8 md:py-12">
        <div className="h-[300px] md:h-[400px] lg:h-[452px] mix-blend-luminosity rounded-[20px] md:rounded-[40px] w-full overflow-hidden" data-name="image">
          <img alt="" className="w-full h-full object-cover pointer-events-none rounded-[20px] md:rounded-[40px]" src={imgImage4} />
        </div>
      </div>

      {/* Logo Frame - Hidden on mobile */}
      <div className="hidden lg:block">
        <Frame />
      </div>

      {/* Instagram Section */}
      <Frame26 />

      {/* Footer */}
      <div className="relative mt-8">
        <SiteFooter onNavigate={onNavigate} />
      </div>
    </div>
  );
}