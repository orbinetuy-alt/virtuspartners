import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Somos", href: "#somos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  "Proyectos de Inversión",
  "Auditoría Contable y Fiscal",
  "Asesoramiento Contable e Impositivo",
  "Asesoramiento en Logística",
  "Régimen Maquila",
  "Trámites y Despachos Aduaneros",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/footer.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[#17458F]/88" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">

          {/* Top divider */}
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <span className="w-8 h-px bg-[#C9A55A]" />
            <span className="text-[#C9A55A] text-[10px] font-semibold tracking-[0.35em] uppercase">
              Virtus Partners
            </span>
            <span className="flex-1 h-px bg-white/10" />
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14">

            {/* Col 1: brand */}
            <div className="lg:col-span-1 flex flex-col gap-5">
              <Image
                src="/logo-virtus.png"
                alt="Virtus Partners"
                width={140}
                height={38}
                className="object-contain brightness-0 invert"
              />
              <p className="text-white/55 text-sm font-light leading-relaxed">
                Asesoría y consultoría empresarial orientada a resultados. Acompañamos tu crecimiento desde la estrategia hasta la ejecución.
              </p>
            </div>

            {/* Col 2: navigation */}
            <div className="flex flex-col gap-5">
              <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">
                Navegación
              </h4>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative text-white/55 text-sm font-light hover:text-white transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#C9A55A] after:transition-[width] after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: services */}
            <div className="flex flex-col gap-5">
              <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">
                Servicios
              </h4>
              <ul className="flex flex-col gap-3">
                {services.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="mt-2 shrink-0 w-1.5 h-px bg-[#C9A55A]" />
                    <span className="text-white/55 text-sm font-light leading-snug">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: contact */}
            <div className="flex flex-col gap-5">
              <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">
                Contacto
              </h4>
              <ul className="flex flex-col gap-4 text-sm font-light text-white/55">
                <li className="flex flex-col gap-0.5">
                  <span className="text-[#C9A55A] text-[10px] font-semibold tracking-widest uppercase">Teléfono</span>
                  <span>+595 21 234 5678</span>
                </li>
                <li className="flex flex-col gap-0.5">
                  <span className="text-[#C9A55A] text-[10px] font-semibold tracking-widest uppercase">Email</span>
                  <span>info@virtuspartners.com</span>
                </li>
                <li className="flex flex-col gap-0.5">
                  <span className="text-[#C9A55A] text-[10px] font-semibold tracking-widest uppercase">Dirección</span>
                  <span>Av. España 1234, Piso 8<br />Asunción, Paraguay</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/35 text-xs font-light tracking-wide">
              © {new Date().getFullYear()} Virtus Partners. Todos los derechos reservados.
            </p>
            <p className="text-white/25 text-xs font-light">
              Diseñado con excelencia
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
