"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export function SignupCta() {
  const { t } = useLanguage();

  return (
    <section id="signin" className="relative h-[400px] md:h-[450px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img/bannerRewards.webp"
        alt={t.signupCta.imageAlt}
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-xl">
            {/* Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-white mb-4 leading-tight">
              {t.signupCta.title}
            </h2>

            {/* Subtitle */}
            <p className="text-white/90 text-base md:text-lg mb-6">
              {t.signupCta.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#023a50] hover:bg-[#27434f] text-white px-6 py-2.5 text-sm font-medium transition-colors rounded-2xl">
                {t.signupCta.signupButton}
              </button>
              <button className="bg-[#023a50] hover:bg-[#27434f] text-white px-6 py-2.5 text-sm font-medium transition-colors rounded-2xl">
                {t.signupCta.loginButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
