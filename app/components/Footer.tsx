"use client";

import svgPaths from "@/imports/svg-lasglpsk63";

const visitImage = "/assets/ffeba28eb520fc86d5a21d336c1c9fc39ddb9b41.png";

function Logo() {
  return (
    <div className="h-[64px] w-[132.489px]">
      <svg className="block size-full" fill="none" viewBox="0 0 133 64">
        <g clipPath="url(#footer-logo)">
          <path d={svgPaths.p2c2b4370} fill="#19459D" />
          <path d={svgPaths.p29295e00} fill="#19459D" />
          <path d={svgPaths.p3209fa00} fill="#19459D" />
          <path d={svgPaths.p1edaac70} fill="#19459D" fillRule="evenodd" clipRule="evenodd" />
          <path d={svgPaths.p410e800} fill="url(#footer-paint-0)" />
          <path d={svgPaths.p2f949000} fill="url(#footer-paint-1)" />
          <path d={svgPaths.p98c4c70} fill="#CFE5AE" />
          <path d={svgPaths.p44fb900} fill="#0D6D38" />
          <path d={svgPaths.pe555700} fill="#CFE5AE" />
          <path d={svgPaths.p3f4ffe00} fill="#19459D" />
        </g>
        <defs>
          <linearGradient id="footer-paint-0" x1="54.35" y1="63.37" x2="50.63" y2="46.56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <linearGradient id="footer-paint-1" x1="19.18" y1="52.81" x2="54.13" y2="45.08" gradientUnits="userSpaceOnUse">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <clipPath id="footer-logo">
            <rect width="132.489" height="64" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface FooterProps {
  onNavigate?: (page: string, productName?: string) => void;
}

const navLinks = [
  { label: "Home", page: "home" },
  { label: "Products", page: "products" },
  { label: "Who we are", page: "who-we-are" },
  { label: "Factories", page: "factories" },
  { label: "Quality & Certificates", page: "quality" },
];

const socialLinks = ["LinkedIn", "Instagram"];
const legalLinks = ["Terms & Conditions", "Privacy Policy"];

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: string) => () => onNavigate?.(page);

  return (
    <footer className="bg-[#f5f7f2] w-full">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 py-12 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-4">
            <Logo />
            <p className="font-['Inter:Semi_Bold',sans-serif] text-xl text-[#212121]">Naturally Sweet, Perfectly Dried</p>
          </div>
          <div className="text-[#212121] font-['Inter:Medium',sans-serif] text-lg sm:text-xl">
            <p>+90 (232) 864 22 00</p>
            <p>sales@meyv.com.tr</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <p className="font-['Inter:Semi_Bold',sans-serif] text-lg text-[#212121]">Navigation</p>
            <ul className="space-y-2 text-[#303030] font-['Inter:Regular',sans-serif]">
              {navLinks.map((item) => (
                <li key={item.page}>
                  <button type="button" onClick={handleNavigate(item.page)} className="hover:text-[#115132] transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-['Inter:Semi_Bold',sans-serif] text-lg text-[#212121]">Follow Us</p>
            <ul className="space-y-2 text-[#303030] font-['Inter:Regular',sans-serif]">
              {socialLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-['Inter:Semi_Bold',sans-serif] text-lg text-[#212121]">Legal</p>
            <ul className="space-y-2 text-[#303030] font-['Inter:Regular',sans-serif]">
              {legalLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-['Inter:Semi_Bold',sans-serif] text-lg text-[#212121]">Visit Us</p>
            <p className="font-['Inter:Regular',sans-serif] text-[#303030]">
              İzmir Atatürk OSB, Türkiye
            </p>
            <img src={visitImage} alt="Meyv facilities" className="rounded-2xl w-full h-32 object-cover" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-[#d5d9e3] pt-6">
          <p className="text-[#333333]/80 font-['Inter:Regular',sans-serif] text-sm sm:text-base">
            Copyright © 2025. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[#333333]/80 font-['Inter:Medium',sans-serif] text-sm sm:text-base"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
