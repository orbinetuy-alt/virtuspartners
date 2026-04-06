import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Somos from "@/components/Somos";
import Servicios from "@/components/Servicios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Virtus Partners",
  url: "https://www.virtuspartners.com",
  logo: "https://www.virtuspartners.com/logo-virtus.png",
  description:
    "Consultoría estratégica y financiera: auditoría contable, asesoramiento impositivo, proyectos de inversión, logística, régimen maquila y despachos aduaneros.",
  areaServed: "AR",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Consultoría",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Proyectos de Inversión" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auditoría Contable y Fiscal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Asesoramiento Contable e Impositivo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Asesoramiento en Logística" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Régimen Maquila" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trámites y Despachos Aduaneros" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Análisis de Inteligencia Comercial" } },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen bg-white font-sans">
        <Header />
        <Hero />
        <Somos />
        <Servicios />
        <Contacto />
        <Footer />
      </div>
    </>
  );
}

