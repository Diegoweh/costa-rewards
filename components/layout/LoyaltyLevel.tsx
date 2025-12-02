"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Check, Minus } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function LoyaltyLevels() {
  const { t } = useLanguage();
  const [currentLevel, setCurrentLevel] = useState(0)

  const levels = [
    {
      name: t.loyaltyLevels.levels.gold.name,
      description: t.loyaltyLevels.levels.gold.description,
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
      name: t.loyaltyLevels.levels.platinum.name,
      description: t.loyaltyLevels.levels.platinum.description,
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
      name: t.loyaltyLevels.levels.diamond.name,
      description: t.loyaltyLevels.levels.diamond.description,
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
    { key: "welcomeDiscount", label: t.loyaltyLevels.benefits.welcomeDiscount },
    { key: "priorityCheckInOut", label: t.loyaltyLevels.benefits.priorityCheckInOut },
    { key: "exclusiveOffers", label: t.loyaltyLevels.benefits.exclusiveOffers },
    { key: "freeWifi", label: t.loyaltyLevels.benefits.freeWifi },
    { key: "pointsAccumulation", label: t.loyaltyLevels.benefits.pointsAccumulation },
    { key: "roomUpgrade", label: t.loyaltyLevels.benefits.roomUpgrade },
    { key: "additionalDiscount", label: t.loyaltyLevels.benefits.additionalDiscount },
    { key: "welcomeDrink", label: t.loyaltyLevels.benefits.welcomeDrink },
    { key: "earlyAccessPromos", label: t.loyaltyLevels.benefits.earlyAccessPromos },
    { key: "increasedPoints", label: t.loyaltyLevels.benefits.increasedPoints },
    { key: "lateCheckout", label: t.loyaltyLevels.benefits.lateCheckout },
    { key: "guaranteedUpgrade", label: t.loyaltyLevels.benefits.guaranteedUpgrade },
    { key: "significantDiscount", label: t.loyaltyLevels.benefits.significantDiscount },
    { key: "freeBreakfast", label: t.loyaltyLevels.benefits.freeBreakfast },
    { key: "maximumPoints", label: t.loyaltyLevels.benefits.maximumPoints },
    { key: "guaranteedCheckInOut", label: t.loyaltyLevels.benefits.guaranteedCheckInOut },
    { key: "personalizedAttention", label: t.loyaltyLevels.benefits.personalizedAttention },
    { key: "specialWelcomeGift", label: t.loyaltyLevels.benefits.specialWelcomeGift },
  ]

  const nextLevel = () => setCurrentLevel((prev) => (prev + 1) % levels.length)
  const prevLevel = () => setCurrentLevel((prev) => (prev - 1 + levels.length) % levels.length)

  const level = levels[currentLevel]

  return (
    <section id="niveles" className="bg-[#f5f0e8] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl text-[#c9a227] font-serif italic mb-12">
          {t.loyaltyLevels.title}
        </h2>

        {/* Level Header */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={prevLevel}
            className="text-[#c9a227] hover:text-[#a88620] transition-colors p-2"
            aria-label={t.loyaltyLevels.previousLevel}
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
            aria-label={t.loyaltyLevels.nextLevel}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Benefits Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-[#333]">{t.loyaltyLevels.benefitsTitle}</th>
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
