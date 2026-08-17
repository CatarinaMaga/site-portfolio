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
      default: "Desenvolvedora e Analista de Sistemas | Catarina Magalhães",
      template: "%s",
    },
    description:
      "Catarina Magalhães é desenvolvedora, programadora e analista de sistemas. Desenvolvimento de sistemas, sites, UI/UX, integrações e automações para negócios.",
    authors: [{ name: "Catarina Magalhães", url: "https://github.com/CatarinaMaga" }],
    creator: "Catarina Magalhães",
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      title: "Desenvolvedora e Analista de Sistemas | Catarina Magalhães",
      description:
        "Desenvolvimento de sistemas, sites, UI/UX, integrações e automações com comunicação simples e foco no seu negócio.",
      siteName: "Catarina Magalhães · Soluções Digitais",
      images: [{ url: "/og.png", width: 1728, height: 907, alt: "Catarina Magalhães — Analista e Desenvolvedora de Sistemas" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Desenvolvedora e Analista de Sistemas | Catarina Magalhães",
      description: "Sistemas, sites e automações pensados para pessoas e negócios.",
      images: ["/og.png"],
    },
    icons: { icon: "/logo-catarina.png", shortcut: "/logo-catarina.png" },
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
