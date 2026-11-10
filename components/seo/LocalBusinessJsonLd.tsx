const siteUrl = "https://mwilczynski-bud.pl";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${siteUrl}/#business`,
    name: "Usługi Ogólnobudowlane Michał Wilczyński",
    url: siteUrl,
    logo: `${siteUrl}/mwilczynski_logo.svg`,
    image: `${siteUrl}/og-image.jpg`,
    telephone: "+48502662028",
    email: "kontakt@mwilczynski-bud.pl",
    foundingDate: "2007-04-10",
    vatID: "PL8411484570",
    address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Jagodowa 9",
        postalCode: "84-300",
        addressLocality: "Lębork",
        addressRegion: "pomorskie",
        addressCountry: "PL",
    },
    geo: { "@type": "GeoCoordinates", latitude: 54.5394, longitude: 17.7497 }, // podmień na dokładne z Map Google
    areaServed: ["Lębork", "Gdynia", "Gdańsk", "Sopot"].map((name) => ({
        "@type": "City",
        name,
    })),
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Usługi ogólnobudowlane",
        itemListElement: [
            "Dekarstwo – pełny zakres",
            "Elewacje",
            "Renowacja elewacji",
            "Remonty klatek schodowych",
            "Kostka brukowa i schody",
            "Odśnieżanie dachów i posesji",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
    // sameAs: ["https://g.page/...", "https://www.facebook.com/..."],
    // openingHoursSpecification: [...],
};

export default function LocalBusinessJsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
    );
}