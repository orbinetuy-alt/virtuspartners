"use client";

import { useState } from "react";
import Image from "next/image";

const contactInfo = [
  {
    label: "Teléfono",
    value: "+595 994 543 918",
    sub: "Lun–Vie, 8:00 – 18:00",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@virtuspartners.com",
    sub: "Respuesta en menos de 24 hs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Dirección",
    value: "Avenida Dr. Guido Boggiani 5465. Escritorio 1104",
    sub: "Asunción, Paraguay",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
];

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-10 md:mb-14">
          <span className="border border-neutral-300 text-neutral-500 text-[10px] font-semibold tracking-[0.3em] uppercase px-8 py-3">
            Contacto
          </span>
        </div>

        {/* Heading + phrase */}
        <div className="text-center mb-14 md:mb-18">
          <h2 className="text-neutral-900 text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Hablemos de tu <span className="text-[#17458F]">próximo paso</span>
          </h2>
          <p className="text-neutral-500 text-base font-light leading-relaxed max-w-xl mx-auto">
            Las grandes decisiones comienzan con una conversación. Contáctanos y descubre cómo podemos
            transformar tus objetivos en resultados concretos.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* Left: form */}
          <div className="lg:col-span-3 bg-neutral-50 border border-neutral-200 p-8 md:p-10">

            {/* Gold top line */}
            <div className="w-10 h-0.5 bg-[#C9A55A] mb-8" />

            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-[#C9A55A] flex items-center justify-center text-[#C9A55A] text-2xl">✓</div>
                <p className="text-neutral-800 font-semibold text-lg text-center">Mensaje enviado</p>
                <p className="text-neutral-500 text-sm text-center">Nos pondremos en contacto contigo a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-500">
                      Nombre <span className="text-[#C9A55A]">*</span>
                    </label>
                    <input
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                      className="border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-[#17458F] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-500">
                      Empresa <span className="text-neutral-400 normal-case font-light tracking-normal">(opcional)</span>
                    </label>
                    <input
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-[#17458F] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-500">
                      Email <span className="text-[#C9A55A]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className="border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-[#17458F] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-500">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+595 ..."
                      className="border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-[#17458F] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-500">
                    Mensaje <span className="text-[#C9A55A]">*</span>
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    className="border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-[#17458F] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="self-start bg-[#17458F] text-white text-[11px] font-bold tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#0f3270] transition-colors duration-200 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Enviando..." : "Enviar mensaje"}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-sm mt-1">
                    Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Right: contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="group flex items-start gap-5 border border-neutral-200 bg-neutral-50 px-6 py-5 hover:border-[#C9A55A]/50 transition-colors duration-200"
              >
                <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-neutral-200 text-[#17458F] group-hover:border-[#C9A55A]/50 group-hover:text-[#C9A55A] transition-colors duration-200">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#C9A55A] mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-neutral-900 text-sm font-semibold">{item.value}</p>
                  <p className="text-neutral-400 text-xs font-light mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* Image */}
            <div className="group relative overflow-hidden mt-1 h-48 rounded-xl">
              <Image
                src="/contacto.jpg"
                alt="Virtus Partners oficina"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Blue gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-[#0d2a5e]/70 via-[#17458F]/30 to-transparent" />

              {/* Corner gold accent */}
              <div className="absolute top-0 right-0 w-0 h-0.5 bg-[#C9A55A] transition-[width] duration-500 group-hover:w-full" />

              {/* Inline label */}
              <div className="absolute bottom-4 left-5 flex items-center gap-3">
                <span className="w-6 h-px bg-[#C9A55A]" />
                <span className="text-white/80 text-[10px] font-semibold tracking-[0.3em] uppercase">
                  Virtus Partners
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
