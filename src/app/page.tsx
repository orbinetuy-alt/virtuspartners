import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Somos from "@/components/Somos";
import Servicios from "@/components/Servicios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <Somos />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  );
}

