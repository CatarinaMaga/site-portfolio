import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: {
      default: "Catarina Magalhães | Analista e Desenvolvedora de Sistemas",
      template: "%s",
    },
    description:
      "Sistemas, sites, automações e melhorias digitais para simplificar processos e fazer seu negócio avançar.",
    keywords: [
      "desenvolvimento de sistemas",
      "analista de sistemas",
      "desenvolvedora de sistemas",
      "automação de processos",
      "sites profissionais",
      "soluções digitais",
    ],
    authors: [{ name: "Catarina Magalhães", url: "https://github.com/CatarinaMaga" }],
    creator: "Catarina Magalhães",
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      title: "Catarina Magalhães | Analista e Desenvolvedora de Sistemas",
      description:
        "Tecnologia explicada de forma simples e transformada em soluções que facilitam o seu negócio.",
      siteName: "Catarina Magalhães · Soluções Digitais",
      images: [{ url: "/og.png", width: 1728, height: 907, alt: "Catarina Magalhães — Analista e Desenvolvedora de Sistemas" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Catarina Magalhães | Analista e Desenvolvedora de Sistemas",
      description: "Soluções digitais claras, úteis e feitas para pessoas.",
      images: ["/og.png"],
    },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#172f2b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
