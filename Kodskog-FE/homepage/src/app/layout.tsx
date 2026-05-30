import ClientShell from "@/components/ClientShell";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hadi Saghir | KodSkog",
  description:
    "Hadi Saghir — Syrian-Swedish software developer at AWS in Dublin. Articles, projects, and more.",
  metadataBase: new URL("https://kodskog.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hadi Saghir | KodSkog",
    description:
      "Syrian-Swedish software developer at AWS in Dublin. Articles, projects, and more.",
    url: "https://kodskog.com",
    siteName: "KodSkog",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientShell />
        {children}
      </body>
    </html>
  );
}
