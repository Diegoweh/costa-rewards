import Link from "next/link"
import Image from "next/image";
import { Globe } from "lucide-react";

export function Navbar() {
  return (
    <nav className="bg-[#9a8657]/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
            {/* Logo image */}
            <Image
                src="/img/costa-logo2.png" // reemplaza con la ruta de tu logo
                alt="Costa de Oro Logo"
                width={90}
                height={90}
                priority
            />     
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/habitaciones"
              className="text-white hover:text-gray-300 text-sm font-medium transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/todo-incluido"
              className="text-white hover:text-gray-300 text-sm font-medium transition-colors"
            >
              Ofertas
            </Link>
            <Link
              href="/restaurantes"
              className="text-white hover:text-gray-300 text-sm font-medium transition-colors"
            >
              Niveles
            </Link>
            <Link href="/eventos" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
              Inscríbete
            </Link>            

            {/* Language/Country Selector */}
             <div className="flex items-center space-x-2">
              <div className="w-4 h-6 relative">
                <Globe />
              </div>
            </div>

            {/* Reserve Button */}
            <button className="bg-[#023a50] hover:bg-gray-700 text-white px-4 py-2 rounded-2xl text-sm font-medium transition-colors">
              Inicio
            </button>

            <button className="bg-[#023a50] hover:bg-gray-700 text-white px-4 py-2 rounded-2xl text-sm font-medium transition-colors">
              Registrarme
            </button>
           </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}