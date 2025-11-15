import Image from "next/image";

import { Header as SiteHeader } from "@/components/Header";
import { Footer as SiteFooter } from "@/components/Footer";

const heroImage = "/assets/9f31f54ac53df93789ba6a08682898a9cbb8ce0d.png";
const mapImage = "/assets/74e5c57dfecd9cb4d073bd7a84d2e5be1ce7774c.png";
const instagramImages = [
  "/assets/354651f82306011d997d2a82199575c432fe299b.png",
  "/assets/8bb42813f5af81abc1d96e97246fc9780f0a4fce.png",
  "/assets/5dda885d439741c21b95acfdf678455a3646cc10.png",
  "/assets/e8f7981ee33f8d76608bc182e5de89d43930af24.png",
];

interface ContactComponentProps {
  onNavigate?: (page: string, productName?: string) => void;
}

function ContactHero() {
  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-24 pt-28 pb-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div className="space-y-8">
          <p className="font-['Inter:Medium',sans-serif] text-[#212121] text-3xl sm:text-4xl md:text-5xl leading-tight">
            Let&apos;s get in touch
          </p>
          <p className="font-['Inter:Regular',sans-serif] text-[#303030] text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
            Your message matters. Whether you have a question about our products, partnerships, or processes, Meyer team is ready to help you quickly.
          </p>
          <div className="space-y-4">
            <div>
              <p className="font-['Inter:Medium',sans-serif] text-[#115132] text-sm uppercase tracking-[0.2em]">
                Don&apos;t be afraid to say hello with us!
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="font-['Inter:Medium',sans-serif] text-[#115132] text-base uppercase tracking-wide">
                  Phone
                </p>
                <p className="font-['Inter:Medium',sans-serif] text-[#212121] text-lg md:text-2xl">
                  +90 (232) 864 22 00
                </p>
              </div>
              <div>
                <p className="font-['Inter:Medium',sans-serif] text-[#115132] text-base uppercase tracking-wide">
                  Email
                </p>
                <p className="font-['Inter:Medium',sans-serif] text-[#212121] text-lg md:text-2xl">
                  sales@meyv.com.tr
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-2xl">
            <div className="relative z-10 bg-[#0f3f26] rounded-[36px] p-6 md:p-8 lg:p-10 shadow-2xl">
              <ContactForm />
            </div>
            <div className="pointer-events-none absolute -bottom-16 -left-10 w-[320px] h-[320px] md:w-[360px] md:h-[360px] drop-shadow-2xl">
              <Image
                src={heroImage}
                alt="Strawberries"
                fill
                sizes="360px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <form
      className="text-white space-y-6"
      onSubmit={(event) => event.preventDefault()}
    >
      <p className="font-['Inter:Medium',sans-serif] text-2xl text-[#cde253]">
        Send us a message
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="First Name" placeholder="John" />
        <FormField label="Last Name" placeholder="Doe" />
    </div>
      <FormField label="Email Address" placeholder="john.doe@example.com" type="email" />
      <FormField label="Phone Number" placeholder="(555) 123-4567" />
      <FormField label="Your Message" placeholder="How can we help you today?" as="textarea" />
      <div className="flex flex-col gap-3">
        <label className="inline-flex items-start gap-3 text-sm md:text-base">
          <input type="checkbox" className="mt-1 size-4 rounded border border-white/50 bg-transparent" />
          <span>
            I agree to the{" "}
            <span className="text-[#cde253]">Terms of Service</span> and{" "}
            <span className="text-[#cde253]">Privacy Policy</span>.
          </span>
        </label>
        <button
          type="submit"
          className="bg-[#cde253] text-[#115132] font-['Inter:Medium',sans-serif] text-base md:text-lg py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Submit Message
        </button>
      </div>
    </form>
  );
}

type FormFieldProps = {
  label: string;
  placeholder: string;
  type?: "text" | "email";
  as?: "input" | "textarea";
};

function FormField({ label, placeholder, type = "text", as = "input" }: FormFieldProps) {
  const sharedClassName =
    "w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#cde253]";

  return (
    <label className="flex flex-col gap-2 text-sm uppercase tracking-wide text-[#cde253]">
      <span>{label}</span>
      {as === "textarea" ? (
        <textarea className={`${sharedClassName} min-h-[140px] resize-none`} placeholder={placeholder} />
      ) : (
        <input className={sharedClassName} placeholder={placeholder} type={type} />
      )}
    </label>
  );
}

function OfficeSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-24 pb-12 md:pb-16">
      <div className="max-w-screen-xl mx-auto space-y-2">
        <p className="font-['Inter:Medium',sans-serif] text-[#115132] text-sm uppercase tracking-[0.2em]">
          Office
        </p>
        <p className="font-['Inter:Regular',sans-serif] text-[#212121] text-base sm:text-lg leading-relaxed">
          IPOSB 7.Sokak No:3 Pancar-Torbalı 35875 Izmir, Türkiye
        </p>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-24 pb-16 md:pb-24">
      <div className="max-w-screen-xl mx-auto space-y-6">
        <p className="font-['Inter:Medium',sans-serif] text-[#212121] text-2xl sm:text-3xl">
          Visit us
        </p>
        <div className="relative h-[300px] md:h-[420px] rounded-[32px] overflow-hidden shadow-lg">
          <Image
            src={mapImage}
            alt="Meyv office map"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
      </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-24 pb-20 md:pb-28">
      <div className="max-w-screen-xl mx-auto space-y-8">
        <div className="flex flex-col gap-2">
          <p className="font-['Inter:Medium',sans-serif] text-base uppercase tracking-[0.2em] text-[#115132]">
            Instagram
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-['Inter:Medium',sans-serif] text-2xl sm:text-3xl md:text-4xl text-[#212121]">
              Follow @meyv
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {instagramImages.map((image) => (
            <div key={image} className="relative aspect-square rounded-[28px] overflow-hidden">
              <Image src={image} alt="Instagram highlight" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
          ))}
    </div>
      </div>
    </section>
  );
}

export default function Component1920PxContact({ onNavigate }: ContactComponentProps = {}) {
  return (
    <div className="bg-white relative w-full min-h-screen overflow-x-hidden">
      <SiteHeader onNavigate={onNavigate} />
      <ContactHero />
      <OfficeSection />
      <MapSection />
      <InstagramSection />
        <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}