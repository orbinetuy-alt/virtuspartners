import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-76px)] px-6 md:px-12 lg:px-24 overflow-hidden">

      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[#17458F]/80" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 max-w-3xl pt-12 pb-24 md:pt-20 md:pb-32">

        {/* Badge */}
        <span className="inline-block border border-white/40 text-white/80 text-[10px] font-semibold tracking-[0.25em] uppercase px-4 py-2 mb-10 w-fit">
          Virtus Partners
        </span>

        {/* Heading */}
        <h1 className="text-[clamp(2.8rem,6.5vw,5.5rem)] font-extrabold leading-none tracking-tight uppercase mb-6">
          <span className="text-[#C9A55A]">Impulsando</span>
          <br />
          <span className="font-light text-white">Tu negocio</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/65 text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-lg mb-10 md:mb-12">
          Soluciones estratégicas para impulsar el crecimiento y la competitividad de tu empresa.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#servicios"
            className="bg-[#C9A55A] text-white text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#b8944d] transition-colors"
          >
            Nuestros Servicios
          </Link>
          <Link
            href="#contacto"
            className="border border-[#C9A55A] text-[#C9A55A] text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#C9A55A]/10 transition-colors"
          >
            Contáctanos
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-white/50 text-[10px] font-semibold tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-14 bg-linear-to-b from-white/50 to-transparent" />
      </div>

    </section>
  );
}
