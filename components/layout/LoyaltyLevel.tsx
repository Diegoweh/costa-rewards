"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Check, Minus } from "lucide-react"

const levels = [
  {
    name: "ORO",
    description:
      "Registrarse en el programa (sin costo). Tu puerta de entrada al mundo de beneficios exclusivos.",
    benefits: {
      welcomeDiscount: true,
      priorityCheckInOut: true,
      exclusiveOffers: true,
      freeWifi: true,
      pointsAccumulation: true,
      roomUpgrade: false,
      additionalDiscount: false,
      welcomeDrink: false,
      earlyAccessPromos: false,
      increasedPoints: false,
      lateCheckout: false,
      guaranteedUpgrade: false,
      significantDiscount: false,
      freeBreakfast: false,
      maximumPoints: false,
      guaranteedCheckInOut: false,
      personalizedAttention: false,
      specialWelcomeGift: false,
    },
  },
  {
    name: "PLATINO",
    description:
      "Haber completado [número] estancias o acumulado [cantidad] puntos en un periodo de [tiempo].",
    benefits: {
      welcomeDiscount: true,
      priorityCheckInOut: true,
      exclusiveOffers: true,
      freeWifi: true,
      pointsAccumulation: true,
      roomUpgrade: true,
      additionalDiscount: true,
      welcomeDrink: true,
      earlyAccessPromos: true,
      increasedPoints: true,
      lateCheckout: true,
      guaranteedUpgrade: false,
      significantDiscount: false,
      freeBreakfast: false,
      maximumPoints: false,
      guaranteedCheckInOut: false,
      personalizedAttention: false,
      specialWelcomeGift: false,
    },
  },
  {
    name: "DIAMANTE",
    description:
      "Haber completado [número] estancias o acumulado [cantidad] puntos en un periodo de [tiempo]. El nivel más exclusivo.",
    benefits: {
      welcomeDiscount: true,
      priorityCheckInOut: true,
      exclusiveOffers: true,
      freeWifi: true,
      pointsAccumulation: true,
      roomUpgrade: true,
      additionalDiscount: true,
      welcomeDrink: true,
      earlyAccessPromos: true,
      increasedPoints: true,
      lateCheckout: true,
      guaranteedUpgrade: true,
      significantDiscount: true,
      freeBreakfast: true,
      maximumPoints: true,
      guaranteedCheckInOut: true,
      personalizedAttention: true,
      specialWelcomeGift: true,
    },
  },
]

const benefitLabels = [
  { key: "welcomeDiscount", label: "Descuento de bienvenida en próxima reserva directa" },
  { key: "priorityCheckInOut", label: "Check in y check out prioritario" },
  { key: "exclusiveOffers", label: "Acceso a ofertas exclusivas" },
  { key: "freeWifi", label: "Wi-Fi gratuito" },
  { key: "pointsAccumulation", label: "Acumulación de puntos por noche" },
  { key: "roomUpgrade", label: "Mejora de habitación (Upgrade sujeto a disponibilidad)" },
  { key: "additionalDiscount", label: "Descuento adicional en reservas directas" },
  { key: "welcomeDrink", label: "Bebida de bienvenida gratuita" },
  { key: "earlyAccessPromos", label: "Acceso anticipado a promociones" },
  { key: "increasedPoints", label: "Aumento en cantidad de puntos" },
  { key: "lateCheckout", label: "Late check out (sujeto a disponibilidad)" },
  { key: "guaranteedUpgrade", label: "Mejora de habitación garantizada (sin costo)" },
  { key: "significantDiscount", label: "Descuento significativo (mayor porcentaje)" },
  { key: "freeBreakfast", label: "Desayuno buffet gratuito para el titular" },
  { key: "maximumPoints", label: "Máximo beneficio de puntos por noche" },
  { key: "guaranteedCheckInOut", label: "Early check in y late check out garantizados" },
  { key: "personalizedAttention", label: "Atención personalizada" },
  { key: "specialWelcomeGift", label: "Obsequio de bienvenida especial" },
]

export function LoyaltyLevels() {
  const [currentLevel, setCurrentLevel] = useState(0)

  const nextLevel = () => setCurrentLevel((prev) => (prev + 1) % levels.length)
  const prevLevel = () => setCurrentLevel((prev) => (prev - 1 + levels.length) % levels.length)

  const level = levels[currentLevel]

  return (
    <section className="bg-[#f5f0e8] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl text-[#c9a227] font-serif italic mb-12">Explora los niveles</h2>

        {/* Level Header */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={prevLevel}
            className="text-[#c9a227] hover:text-[#a88620] transition-colors p-2"
            aria-label="Nivel anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="flex items-center gap-6">
            {/* Starfish Icon */}
            <div className="relative">
              <svg viewBox="0 0 100 100" className="w-24 h-24 text-[#e8a832]">
                <path
                  fill="currentColor"
                  d="M50 0 L58 35 L95 35 L65 55 L75 90 L50 70 L25 90 L35 55 L5 35 L42 35 Z"
                  transform="rotate(35 50 50)"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-[#c9a227] text-white px-4 py-1 text-sm font-bold tracking-widest">{level.name}</div>
              </div>
            </div>

            <p className="text-[#666] text-sm max-w-md leading-relaxed">{level.description}</p>
          </div>

          <button
            onClick={nextLevel}
            className="text-[#c9a227] hover:text-[#a88620] transition-colors p-2"
            aria-label="Siguiente nivel"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Benefits Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-[#333]">Ventajas por nivel</th>
                <th className="text-center py-4 px-6 font-semibold text-[#666] w-24">{level.name}</th>
              </tr>
            </thead>
            <tbody>
              {benefitLabels.map(({ key, label }, index) => {
                const value = level.benefits[key as keyof typeof level.benefits]
                return (
                  <tr key={key} className={index % 2 === 0 ? "bg-gray-50/50" : "bg-white"}>
                    <td className="py-3 px-6 text-[#333] text-sm">{label}</td>
                    <td className="py-3 px-6 text-center">
                      {value === true ? (
                        <Check className="w-5 h-5 text-[#666] mx-auto" />
                      ) : value === false ? (
                        <Minus className="w-5 h-5 text-[#999] mx-auto" />
                      ) : (
                        <span className="text-[#666] text-sm">{value}</span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
