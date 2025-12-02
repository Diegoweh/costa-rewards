"use client"

import Link from "next/link"
import Image from "next/image";
import { Globe, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleLangDropdown = () => setIsLangDropdownOpen(!isLangDropdownOpen);

  const handleLanguageChange = (lang: 'es' | 'en') => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  return (
    <nav className="bg-[#9a8657]/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            {/* Logo image */}
            <Image
                src="/img/costa-logo2.png"
                alt="Costa de Oro Logo"
                width={90}
                height={90}
                priority
            />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#ofertas"
              className="text-white hover:text-gray-300 text-sm font-medium transition-colors"
            >
              {t.navbar.offers}
            </Link>
            <Link
              href="#niveles"
              className="text-white hover:text-gray-300 text-sm font-medium transition-colors"
            >
              {t.navbar.levels}
            </Link>
            <Link href="#signin" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
              {t.navbar.signup}
            </Link>

            {/* Language Dropdown - Desktop */}
            <div className="relative">
              <button
                onClick={toggleLangDropdown}
                className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium uppercase">{language}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {/* Dropdown Menu */}
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                  <button
                    onClick={() => handleLanguageChange('es')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                      language === 'es' ? 'bg-gray-100 font-semibold' : ''
                    }`}
                  >
                    🇲🇽 Español
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                      language === 'en' ? 'bg-gray-100 font-semibold' : ''
                    }`}
                  >
                    🇺🇸 English
                  </button>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <button className="bg-[#023a50] hover:bg-gray-700 text-white px-4 py-2 rounded-2xl text-sm font-medium transition-colors">
              {t.navbar.login}
            </button>

            <button className="bg-[#023a50] hover:bg-gray-700 text-white px-4 py-2 rounded-2xl text-sm font-medium transition-colors">
              {t.navbar.register}
            </button>
           </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#9a8657] border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {/* Mobile Navigation Links */}
            <Link
              href="#ofertas"
              onClick={closeMenu}
              className="block text-white hover:text-gray-300 py-2 px-3 rounded-lg hover:bg-white/10 text-base font-medium transition-colors"
            >
              {t.navbar.offers}
            </Link>
            <Link
              href="#niveles"
              onClick={closeMenu}
              className="block text-white hover:text-gray-300 py-2 px-3 rounded-lg hover:bg-white/10 text-base font-medium transition-colors"
            >
              {t.navbar.levels}
            </Link>
            <Link
              href="#signin"
              onClick={closeMenu}
              className="block text-white hover:text-gray-300 py-2 px-3 rounded-lg hover:bg-white/10 text-base font-medium transition-colors"
            >
              {t.navbar.signup}
            </Link>

            {/* Divider */}
            <div className="border-t border-white/20 my-3"></div>

            {/* Mobile Action Buttons */}
            <button
              onClick={closeMenu}
              className="w-full bg-[#023a50] hover:bg-gray-700 text-white px-4 py-3 rounded-2xl text-base font-medium transition-colors"
            >
              {t.navbar.login}
            </button>

            <button
              onClick={closeMenu}
              className="w-full bg-[#023a50] hover:bg-gray-700 text-white px-4 py-3 rounded-2xl text-base font-medium transition-colors"
            >
              {t.navbar.register}
            </button>

            {/* Language Selector Mobile */}
            <div className="pt-3">
              <div className="flex items-center justify-center space-x-2 pb-2">
                <Globe className="text-white w-4 h-4" />
                <span className="text-white text-sm font-medium">{t.navbar.language}</span>
              </div>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => {
                    handleLanguageChange('es');
                    closeMenu();
                  }}
                  className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    language === 'es'
                      ? 'bg-white text-[#9a8657]'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  🇲🇽 Español
                </button>
                <button
                  onClick={() => {
                    handleLanguageChange('en');
                    closeMenu();
                  }}
                  className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    language === 'en'
                      ? 'bg-white text-[#9a8657]'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  🇺🇸 English
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}