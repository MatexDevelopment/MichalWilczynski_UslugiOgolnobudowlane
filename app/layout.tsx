import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";


const barlow = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-barlow",
    display: "swap",
});

export const metadata: Metadata = {
  title: "Michał Wilczyński | Firma Ogólnobudowlana",
  description: "Usługi ogólnobudowlane — Lębork, Trójmiasto i okolice.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html
          lang="pl"
          className={`${barlow.variable}  h-full antialiased`}
      >
      <body className="min-h-full flex flex-col">{children}</body>
      </html>
  );
}