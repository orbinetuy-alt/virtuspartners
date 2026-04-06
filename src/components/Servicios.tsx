"use client";

const services = [
  {
    number: "01",
    title: "Proyectos de Inversión",
    description:
      "Evaluamos y estructuramos proyectos de inversión adaptados a tus objetivos financieros y operativos, maximizando el retorno y minimizando el riesgo.",
  },
  {
    number: "02",
    title: "Auditoría Contable y Fiscal",
    description:
      "Realizamos auditorías integrales que garantizan la transparencia financiera y el cumplimiento de la normativa vigente en tu empresa.",
  },
  {
    number: "03",
    title: "Análisis de inteligencia comercial",
    description:
      "Realizamos análisis de inteligencia comercial para identificar oportunidades de mercado, evaluar la competencia y diseñar estrategias efectivas de entrada o expansión.",
  },
  {
    number: "04",
    title: "Asesoramiento en Logística",
    description:
      "Optimizamos tus cadenas de suministro y procesos logísticos para reducir costos y mejorar la eficiencia operativa.",
  },
  {
    number: "05",
    title: "Régimen Maquila",
    description:
      "Brindamos asesoramiento especializado en el régimen de maquila, facilitando su habilitación y el aprovechamiento pleno de sus beneficios.",
  },
  {
    number: "06",
    title: "Trámites y Despachos Aduaneros",
    description:
      "Gestionamos todos los trámites y despachos aduaneros con agilidad y precisión, asegurando el cumplimiento de las regulaciones vigentes.",
  },

  {
    number: "07",
    title: "Asesoramiento Contable e Impositivo",
    description:
      "Acompañamos la gestión contable e impositiva con soluciones precisas y actualizadas según la normativa local e internacional.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="relative bg-[#17458F] py-28 md:py-36 overflow-hidden">

      {/* Top fade: white → transparent */}
      <div className="absolute top-0 inset-x-0 h-32 bg-linear-to-b from-white via-white/70 to-transparent z-10 pointer-events-none" />
      {/* Bottom fade: transparent → white */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-white via-white/70 to-transparent z-10 pointer-events-none" />

      <div className="relative z-0">

        {/* Badge + heading */}
        <div className="px-6 md:px-12 lg:px-24 mb-10 md:mb-14">
          <div className="max-w-7xl mx-auto">

            <div className="flex justify-center mb-10 md:mb-12">
              <span className="border border-white/30 text-white/70 text-[10px] font-semibold tracking-[0.3em] uppercase px-8 py-3">
                Servicios
              </span>
            </div>

            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight leading-tight text-center">
              ¿En qué podemos{" "}
              <span className="text-[#C9A55A]">ayudarte?</span>
            </h2>
          </div>
        </div>

        {/* Cards grid */}
        <div className="px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-5">
            {services.map((service) => (
              <div
                key={service.number}
                className="group relative flex flex-col bg-white p-6 overflow-hidden
                  w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]
                  transition-transform duration-300 ease-out hover:scale-105 hover:z-10"
              >
                {/* Animated gold top line */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#C9A55A] transition-[width] duration-500 group-hover:w-full" />

                {/* Number */}
                <span className="text-[#C9A55A] text-3xl font-extrabold leading-none mb-4 tracking-tight">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="text-neutral-900 text-xs font-bold tracking-widest uppercase mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-500 text-sm font-light leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Footer accent */}
                <div className="flex items-center gap-2 mt-6 pt-4 border-t border-neutral-100">
                  <span className="w-4 h-px bg-[#C9A55A]" />
                  <span className="text-neutral-400 text-[10px] font-semibold tracking-[0.2em] uppercase">
                    Virtus Partners
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className="px-6 md:px-12 lg:px-24 mt-14 md:mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <span className="shrink-0 w-12 h-px bg-[#C9A55A]/60" />
              <p className="text-white/60 text-sm md:text-base font-light italic text-center md:text-left leading-relaxed">
                Un equipo de profesionales experimentados y listos para acompañarte en el inicio o desarrollo de tu empresa.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
