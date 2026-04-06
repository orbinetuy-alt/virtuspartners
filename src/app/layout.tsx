import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://www.virtuspartners.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Virtus Partners | Consultoría Estratégica y Financiera",
    template: "%s | Virtus Partners",
  },
  description:
    "Virtus Partners ofrece consultoría estratégica, auditoría contable y fiscal, asesoramiento impositivo, logística, régimen maquila y despachos aduaneros para impulsar el crecimiento de tu empresa.",
  keywords: [
    "consultoría empresarial",
    "auditoría contable",
    "asesoramiento fiscal",
    "proyectos de inversión",
    "régimen maquila",
    "despachos aduaneros",
    "logística empresarial",
    "inteligencia comercial",
    "Virtus Partners",
    "consultoría Paraguay",
  ],
  authors: [{ name: "Virtus Partners", url: siteUrl }],
  creator: "Virtus Partners",
  publisher: "Virtus Partners",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Virtus Partners",
    title: "Virtus Partners | Consultoría Estratégica y Financiera",
    description:
      "Soluciones estratégicas para impulsar el crecimiento y la competitividad de tu empresa. Auditoría, asesoramiento contable e impositivo, logística y más.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtus Partners | Consultoría Estratégica y Financiera",
    description:
      "Soluciones estratégicas para impulsar el crecimiento y la competitividad de tu empresa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
