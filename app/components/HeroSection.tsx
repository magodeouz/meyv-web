"use client";

import type { ReactNode } from "react";

type HeroCTA = {
  label: string;
  onClick?: () => void;
  className?: string;
};

type HeroOverlayImage = {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
};

export interface SharedHeroSectionProps {
  topSlot?: ReactNode;
  topSlotClassName?: string;
  backgroundSrc: string;
  backgroundAlt: string;
  titleLines: string[];
  paragraphs?: string[];
  titleClassName?: string;
  paragraphClassName?: string;
  contentWrapperClassName?: string;
  cta?: HeroCTA;
  overlayImage?: HeroOverlayImage;
  gradientClassName?: string;
  hideGradient?: boolean;
  className?: string;
  containerClassName?: string;
}

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function HeroSection({
  topSlot,
  topSlotClassName = "px-4 md:px-8 lg:px-16 pt-6",
  backgroundSrc,
  backgroundAlt,
  titleLines,
  paragraphs = [],
  titleClassName = "font-['Inter:Medium',sans-serif] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight",
  paragraphClassName = "font-['Inter:Regular',sans-serif] text-white text-base sm:text-lg md:text-xl leading-relaxed",
  contentWrapperClassName = "max-w-screen-xl mx-auto flex h-full w-full flex-col justify-between px-6 sm:px-10 lg:px-16 py-16 md:py-20 lg:py-24 text-white gap-10 md:gap-14",
  cta,
  overlayImage,
  gradientClassName = "bg-gradient-to-r from-black/55 via-black/25 to-transparent",
  hideGradient = false,
  className = "",
  containerClassName = "relative w-full min-h-[600px] md:min-h-[800px] lg:min-h-[900px] bg-white overflow-hidden",
}: SharedHeroSectionProps) {
  const hasBottomContent = Boolean(cta) || Boolean(overlayImage);

  return (
    <section className={cx(containerClassName, className)}>
      {topSlot ? (
        <div className={cx("relative z-30", topSlotClassName)}>
          {topSlot}
        </div>
      ) : null}

      <div className="absolute inset-0 mx-4 md:mx-8 lg:mx-16 mt-28 mb-16 rounded-[32px]">
        <img
          src={backgroundSrc}
          alt={backgroundAlt}
          className="h-full w-full rounded-[32px] object-cover"
        />
      </div>

      {hideGradient ? null : (
        <div
          className={cx(
            "pointer-events-none absolute inset-0 mx-4 md:mx-8 lg:mx-16 mt-28 mb-16 rounded-[32px]",
            gradientClassName,
          )}
        />
      )}

      <div className="relative z-20 h-full">
        <div className={contentWrapperClassName}>
          <div className="space-y-4 sm:space-y-6 max-w-3xl">
            <div className={titleClassName}>
              {titleLines.map((line) => (
                <p key={line} className="mb-0">
                  {line}
                </p>
              ))}
            </div>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className={paragraphClassName}>
                {paragraph}
              </p>
            ))}
          </div>

          {hasBottomContent ? (
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
              {cta ? (
                <button
                  type="button"
                  onClick={cta.onClick}
                  className={cx(
                    "inline-flex items-center justify-center rounded-full border border-white px-6 md:px-8 py-3 md:py-4 font-['Inter:Medium',sans-serif] text-base md:text-lg text-white transition-colors duration-200 hover:bg-white/10",
                    cta.className,
                  )}
                >
                  {cta.label}
                </button>
              ) : null}

              {overlayImage ? (
                <div
                  className={cx(
                    "hidden md:flex flex-1 justify-end",
                    overlayImage.containerClassName,
                  )}
                >
                  <div className="rounded-[32px] bg-white p-3 shadow-xl">
                    <img
                      src={overlayImage.src}
                      alt={overlayImage.alt}
                      className={cx(
                        "h-32 w-48 lg:h-40 lg:w-60 rounded-[24px] object-cover",
                        overlayImage.className,
                      )}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

