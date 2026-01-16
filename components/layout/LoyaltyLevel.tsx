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

  // Colores según el nivel
  const getLevelColor = () => {
    switch(currentLevel) {
      case 0: return 'bg-[#c9a227]' // Oro
      case 1: return 'bg-[#a8a9ad]' // Platino
      case 2: return 'bg-[#b9e1ff]' // Diamante
      default: return 'bg-[#c9a227]'
    }
  }

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

          <div className="flex-1 text-center">
            <h3 className={`text-4xl md:text-5xl font-bold tracking-wide text-white ${getLevelColor()} py-4 px-8 rounded-lg inline-block`}>
              {level.name}
            </h3>
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
              {benefitLabels
                .filter(({ key }) => level.benefits[key as keyof typeof level.benefits] === true)
                .map(({ key, label }, index) => {
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
