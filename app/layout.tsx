import type { Metadata } from "next";
import { Poppins, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "To Eat Chap Chap | Gestion Restaurant",
  description: "Système de gestion de restaurant To Eat Chap Chap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="light" suppressHydrationWarning>
      <head>
        <style>{`
            :root {
                --font-sans: ${poppins.style.fontFamily};
                --font-montserrat: ${montserrat.style.fontFamily};
                --font-serif: ${playfair.style.fontFamily};
            }
          `}</style>
      </head>
      <body className={`${poppins.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
