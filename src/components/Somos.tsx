import Image from "next/image";

const cards = [
  {
    icon: "◈",
    title: "Visión Estratégica",
    description:
      "Analizamos el mercado con profundidad para anticipar oportunidades y diseñar rutas de crecimiento sostenible.",
  },
  {
    icon: "◇",
    title: "Equipo Senior",
    description:
      "Profesionales con trayectoria consolidada en consultoría financiera, M&A y desarrollo de negocio.",
  },
  {
    icon: "◉",
    title: "Enfoque Personalizado",
    description:
      "Cada cliente es único. Adaptamos cada solución a la realidad y los objetivos específicos de tu empresa.",
  },
  {
    icon: "⬡",
    title: "Resultados Medibles",
    description:
      "Trabajamos con KPIs claros desde el primer día para garantizar impacto real y tangible en tu negocio.",
  },
];

export default function Somos() {
  return (
    <section id="somos" className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Top badge */}
        <div className="flex justify-center mb-10 md:mb-14">
          <span className="border border-neutral-300 text-neutral-500 text-[10px] font-semibold tracking-[0.3em] uppercase px-8 py-3">
            Quiénes Somos
          </span>
        </div>

        {/* Intro text */}
        <p className="text-center text-neutral-600 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto mb-16 md:mb-20">
          En <span className="font-semibold text-neutral-900">Virtus Partners</span> ayudamos a impulsar
          tu negocio. Ofrecemos asesoría y consultoría con una oferta que abarca desde la estrategia
          hasta la ejecución, con el compromiso de generar valor real en cada etapa.
        </p>

        {/* Main grid: image + cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* Left: image */}
          <div className="group relative min-h-90 lg:min-h-130 overflow-hidden">
            <Image
              src="/somos.jpg"
              alt="Virtus Partners equipo"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay — bottom to top */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0d2a5e]/80 via-[#17458F]/20 to-transparent" />

            {/* Vertical gold line accent */}
            <div className="absolute top-8 left-8 flex flex-col items-center gap-2">
              <span className="w-px h-16 bg-[#C9A55A]/70" />
              <span className="text-[#C9A55A] text-[9px] font-bold tracking-[0.35em] uppercase [writing-mode:vertical-rl] rotate-180">
                Virtus Partners
              </span>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-0 left-0 right-0 px-8 py-7">
              <p className="text-white/40 text-[10px] font-semibold tracking-[0.3em] uppercase mb-1">
                Nuestro equipo
              </p>
              <p className="text-white text-lg font-semibold leading-snug max-w-xs">
                Comprometidos con tu crecimiento
              </p>
            </div>
          </div>

          {/* Right: 2x2 cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group relative flex flex-col gap-4 bg-neutral-50 border border-neutral-200 p-7 overflow-hidden transition-all duration-300 hover:border-[#C9A55A]/60 hover:shadow-lg hover:-translate-y-0.5"
              >
                {/* Gold accent line */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#C9A55A] transition-[width] duration-500 group-hover:w-full" />

                {/* Icon */}
                <span className="text-[#C9A55A] text-2xl leading-none">{card.icon}</span>

                {/* Title */}
                <h3 className="text-neutral-900 text-sm font-bold tracking-wide uppercase">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-500 text-sm font-light leading-relaxed flex-1">
                  {card.description}
                </p>

                {/* Bottom accent */}
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-neutral-200">
                  <span className="w-4 h-px bg-[#C9A55A]" />
                  <span className="text-[#C9A55A] text-[10px] font-semibold tracking-[0.2em] uppercase">
                    Virtus Partners
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
