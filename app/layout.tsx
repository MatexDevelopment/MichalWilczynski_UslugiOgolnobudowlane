import Footer from "@/components/layouts/Footer";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";
import type { Metadata, Viewport } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
    subsets: ["latin", "latin-ext"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-barlow",
    display: "swap",
});

const siteUrl = "https://mwilczynski-bud.pl";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Usługi ogólnobudowlane Lębork i Trójmiasto | Michał Wilczyński",
        template: "%s | Michał Wilczyński",
    },
    description:
        "Firma ogólnobudowlana z Lęborka od 2007 r. Dekarstwo, elewacje, kostka brukowa, remonty klatek schodowych. Lębork, Gdynia, Gdańsk, Sopot. Tel. 502 662 028",
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        locale: "pl_PL",
        url: siteUrl,
        siteName: "Michał Wilczyński – Usługi Ogólnobudowlane",
        title: "Usługi ogólnobudowlane Lębork i Trójmiasto",
        description:
            "Dekarstwo, elewacje, kostka brukowa, remonty klatek schodowych, odśnieżanie dachów. Działamy w Lęborku, Gdyni, Gdańsku i Sopocie.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Usługi ogólnobudowlane Michał Wilczyński – Lębork",
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    // verification: { google: "KOD_Z_SEARCH_CONSOLE" },
};

export const viewport: Viewport = {
    themeColor: "#1E1E1E",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pl" className={`${barlow.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
        <LocalBusinessJsonLd />
        {children}
        <Footer />
        </body>
        </html>
    );
}