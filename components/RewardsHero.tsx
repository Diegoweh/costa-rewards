import { Star, Wifi, Umbrella, HandCoins } from "lucide-react"

export function RewardsHero() {
  const benefits = [
    {
      icon: Star,
      title: "200 puntos",
      subtitle: "de bienvenida",
    },
    {
      icon: Wifi,
      title: "WiFi",
      subtitle: "en cortesía",
    },
    {
      icon: Umbrella,
      title: "Tarifas",
      subtitle: "Preferenciales*",
    },
    {
      icon: HandCoins,
      title: "Noches de",
      subtitle: "hospedaje*",
    },
  ]

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-[#f8f5ed]">
      {/* Top decorative gradient with tropical green */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#3d6b4a]/40 to-transparent" />

      {/* Decorative palm leaf patterns on sides */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-15 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20400%22%3E%3Cpath%20d%3D%22M0%2C200%20Q50%2C100%20100%2C50%20Q60%2C120%2040%2C200%20Q60%2C280%20100%2C350%20Q50%2C300%200%2C200%22%20fill%3D%22%23b8860b%22%2F%3E%3Cpath%20d%3D%22M20%2C200%20Q60%2C120%20110%2C80%20Q70%2C140%2060%2C200%20Q70%2C260%20110%2C320%20Q60%2C280%2020%2C200%22%20fill%3D%22%23c4a052%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-left bg-contain" />
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-15 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20400%22%3E%3Cpath%20d%3D%22M200%2C200%20Q150%2C100%20100%2C50%20Q140%2C120%20160%2C200%20Q140%2C280%20100%2C350%20Q150%2C300%20200%2C200%22%20fill%3D%22%23b8860b%22%2F%3E%3Cpath%20d%3D%22M180%2C200%20Q140%2C120%2090%2C80%20Q130%2C140%20140%2C200%20Q130%2C260%2090%2C320%20Q140%2C280%20180%2C200%22%20fill%3D%22%23c4a052%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-right bg-contain" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-[#b8860b] mb-1">
          Costa de Oro Rewards
        </h1>
        <h2 className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-[#b8860b] mb-6">
          Tu estancia en Mazatlán, aún más gratificante
        </h2>

        {/* Description */}
        <p className="text-[#6b6b6b] text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
          Descubre nuestro programa de recompensas y transforma cada visita en puntos canjeables por ofertas exclusivas,
          descuentos irresistibles y beneficios solo para miembros. Únete y empieza a disfrutar.
        </p>

        {/* Benefits grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#b8860b] flex items-center justify-center">
                <benefit.icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <p className="text-[#4a4a4a] text-sm md:text-base font-medium">{benefit.title}</p>
                <p className="text-[#4a4a4a] text-sm md:text-base">{benefit.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
