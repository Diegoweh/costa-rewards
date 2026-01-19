"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-[#e8e4dc] py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center">
              <Image
                src="/img/costa-logo3.png"
                alt="Costa de Oro Logo"
                width={180}
                height={120}
                className="object-contain"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <div className="space-y-1 text-[#b5a267]">
              <p>(669) 913 20 05</p>
              <p>(669) 330 00 14</p>
              <p>1877 341 8355 – Toll Free USA/Canada</p>
              <p>info@hotelcostadeoro.mx</p>
              <p>Av. Camarón Sábalo No. 710 Zona Dorada</p>
            </div>
          </div>

          {/* Navigation and Social */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 justify-end">
            <nav className="flex flex-col items-center md:items-start gap-2 text-[#b5a267]">
              <Link href="#" className="hover:underline">
                {t.footer.navigation.home}
              </Link>
              <Link href="#niveles" className="hover:underline">
                {t.footer.navigation.levels}
              </Link>
              <Link href="#ofertas" className="hover:underline">
                {t.footer.navigation.offers}
              </Link>
              {/* <Link href="#" className="hover:underline">
                {t.footer.navigation.experiences}
              </Link> */}
            </nav>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link href="#" className="text-[#b5a267] hover:text-[#9a8a55] transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-[#b5a267] hover:text-[#9a8a55] transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#b5a267] py-3 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-white text-sm">
          <span>{t.footer.copyright}</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:underline">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="#" className="hover:underline">
              {t.footer.termsConditions}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
