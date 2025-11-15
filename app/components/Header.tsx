"use client";

import type { MouseEvent } from "react";
import type { Route } from "next";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import NavLink from "@/components/NavLink";
import svgPaths from "@/imports/svg-lasglpsk63";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (!element) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const top = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: "smooth" });
};

function Layer() {
  return (
    <div className="h-[64px] relative shrink-0 w-[132.489px]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 64">
        <g clipPath="url(#clip0_header_logo)" id="Layer_1">
          <path d={svgPaths.p2c2b4370} fill="var(--fill-0, #19459D)" id="Vector" />
          <path d={svgPaths.p29295e00} fill="var(--fill-0, #19459D)" id="Vector_2" />
          <path d={svgPaths.p3209fa00} fill="var(--fill-0, #19459D)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1edaac70} fill="var(--fill-0, #19459D)" fillRule="evenodd" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p410e800} fill="url(#paint0_linear_header)" id="Vector_5" />
            <path d={svgPaths.p2f949000} fill="url(#paint1_linear_header)" id="Vector_6" />
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
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_header" x1="54.3525" x2="50.634" y1="63.3711" y2="46.5562">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_header" x1="19.1797" x2="54.1336" y1="52.8126" y2="45.0812">
            <stop stopColor="#72BF44" />
            <stop offset="1" stopColor="#007932" />
          </linearGradient>
          <clipPath id="clip0_header_logo">
            <rect fill="white" height="64" width="132.489" />
          </clipPath>
        </defs>
      </svg>
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

function HamburgerIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

type NavItem = {
  label: string;
  page: string;
  to: Route;
  end?: boolean;
  showArrow?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", page: "home", to: "/", end: true },
  { label: "Products", page: "products", to: "/products" },
  { label: "Who we are" , page: "who-we-are", to: "/about" },
  { label: "Factories", page: "factories", to: "/factories" },
  { label: "Quality & Certificates", page: "quality", to: "/quality", showArrow: true },
];

interface HeaderProps {
  onNavigate?: (page: string, productName?: string) => void;
}

export function Header({ onNavigate }: HeaderProps = {}) {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const createClickHandler =
    (page: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      if (page === "home" && pathname === "/") {
        event.preventDefault();
        scrollToSection("home");
        setMobileMenuOpen(false);
        return;
      }

      if (onNavigate) {
        event.preventDefault();
        onNavigate(page);
        setMobileMenuOpen(false);
      } else {
        setMobileMenuOpen(false);
      }
    };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate("contact");
    } else {
      router.push("/contact");
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40 w-full">
      <div className="max-w-screen-xl mx-auto flex h-20 items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="flex gap-4 md:gap-8 lg:gap-16 items-center">
          <NavLink to="/" onClick={createClickHandler("home")} className="cursor-pointer">
            <Layer />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 items-center">
            {navItems.map(({ label, page, to, end, showArrow }) => (
              <NavLink
                key={page}
                to={to}
                end={end}
                className="relative flex gap-2 items-center justify-center px-2 py-2 cursor-pointer group"
                onClick={createClickHandler(page)}
              >
                {({ isActive }) => (
                  <>
                    <p
                      className={`font-['Inter:Medium',sans-serif] text-base md:text-lg transition-colors duration-200 ${
                        isActive ? "text-[#115132]" : "text-[#212121]"
                      }`}
                    >
                      {label}
                    </p>
                    {showArrow ? <DropdownArrowIcon300WRounded /> : null}
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-[#cde253] transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="hidden md:flex bg-[#115132] gap-3 h-12 items-center justify-center pl-8 pr-4 rounded-full text-white"
            onClick={handleContactClick}
          >
            <span className="font-['Inter:Medium',sans-serif] text-base">Contact Us</span>
            <div className="bg-white flex items-center justify-center rounded-full size-10">
              <LongArrowRight300WRounded />
            </div>
          </button>

          <button
            className="lg:hidden text-[#212121] p-2 cursor-pointer bg-transparent border-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-6">
          <nav className="flex flex-col gap-4">
            {navItems.map(({ label, page, to, end, showArrow }) => (
              <NavLink
                key={page}
                to={to}
                end={end}
                className="flex items-center justify-between py-3 cursor-pointer border-b border-gray-100 last:border-none"
                onClick={createClickHandler(page)}
              >
                {({ isActive }) => (
                  <>
                    <p
                      className={`font-['Inter:Medium',sans-serif] text-base transition-colors duration-200 ${
                        isActive ? "text-[#115132]" : "text-[#212121]"
                      }`}
                    >
                      {label}
                    </p>
                    {showArrow ? <DropdownArrowIcon300WRounded /> : null}
                  </>
                )}
              </NavLink>
            ))}

            <button
              className="mt-4 bg-[#115132] flex gap-3 h-12 items-center justify-center px-6 rounded-full text-white"
              onClick={handleContactClick}
            >
              <span className="font-['Inter:Medium',sans-serif] text-base">Contact Us</span>
              <div className="bg-white flex items-center justify-center rounded-full size-10">
                <LongArrowRight300WRounded />
              </div>
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
