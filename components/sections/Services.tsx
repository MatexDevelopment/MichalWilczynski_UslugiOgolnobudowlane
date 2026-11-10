import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

interface Service {
    title: string;
    description: string;
    image: string;
    alt: string;
    href?: string; // uzupełnij, gdy dodasz podstronę usługi, np. "/dekarstwo-lebork"
}

export default function Services() {
    const servicesTab: Service[] = [
        {
            title: "Dekarstwo – pełny zakres",
            description:
                "Wykonujemy kompleksowe prace dekarskie związane z budową, remontem i modernizacją dachów w Lęborku i Trójmieście. Zajmujemy się zarówno naprawami i wymianą pokryć dachowych, jak i obróbkami blacharskimi, montażem elementów dachowych oraz pracami wykończeniowymi. Dbamy o trwałość, szczelność i prawidłowe wykonanie każdego etapu prac.",
            image: "/img/services/dekarstwo.png",
            alt: "Dekarz podczas prac na dachu – dekarstwo Lębork i Trójmiasto",
            // href: "/dekarstwo-lebork",
        },
        {
            title: "Elewacje",
            description:
                "Wykonujemy kompleksowe prace związane z wykonywaniem i wykańczaniem elewacji budynków. Zajmujemy się przygotowaniem powierzchni, ociepleniem, wykonaniem warstw elewacyjnych oraz ich estetycznym wykończeniem. Stosujemy sprawdzone rozwiązania zapewniające trwałość i odporność elewacji na warunki atmosferyczne.",
            image: "/img/services/elewacje.png",
            alt: "Wykonywanie elewacji budynku na rusztowaniu – elewacje Lębork",
            // href: "/elewacje-lebork",
        },
        {
            title: "Renowacja elewacji",
            description:
                "Przywracamy budynkom estetyczny wygląd i właściwy stan techniczny poprzez kompleksową renowację elewacji. Wykonujemy naprawy uszkodzonych powierzchni, uzupełnianie ubytków, przygotowanie podłoża oraz odnowienie warstw wykończeniowych. Zakres prac dobieramy do stanu technicznego budynku i oczekiwanego efektu.",
            image: "/img/services/renowacja.png",
            alt: "Renowacja elewacji budynku – prace na rusztowaniu",
            // href: "/renowacja-elewacji-lebork",
        },
        {
            title: "Remonty klatek schodowych",
            description:
                "Realizujemy kompleksowe remonty i modernizacje klatek schodowych w budynkach mieszkalnych oraz użytkowych. Wykonujemy prace przygotowawcze, naprawcze, tynkarskie, malarskie i wykończeniowe, poprawiając zarówno estetykę, jak i funkcjonalność całej przestrzeni.",
            image: "/img/services/klatkiSchodowe.png",
            alt: "Wyremontowana klatka schodowa w budynku mieszkalnym",
            // href: "/remonty-klatek-schodowych-lebork",
        },
        {
            title: "Kostka brukowa i schody",
            description:
                "Wykonujemy nawierzchnie z kostki brukowej wraz z kompleksową realizacją schodów zewnętrznych. Przygotowujemy podłoże, wykonujemy odpowiednią podbudowę, układamy kostkę oraz wykonujemy obrzeża i elementy wykończeniowe. Realizujemy podjazdy, chodniki, dojścia do budynków, tarasy i schody.",
            image: "/img/services/kostkaBrukowa.png",
            alt: "Ułożona kostka brukowa i schody zewnętrzne – brukarstwo Lębork",
            // href: "/kostka-brukowa-lebork",
        },
        {
            title: "Odśnieżanie dachów i posesji",
            description:
                "Zapewniamy odśnieżanie dachów oraz posesji w okresie zimowym. Usuwamy zalegający śnieg z dachów, podjazdów, chodników i innych powierzchni, pomagając ograniczyć ryzyko przeciążenia konstrukcji oraz zapewniając bezpieczne korzystanie z posesji.",
            image: "/img/services/odsniezanie.png",
            alt: "Odśnieżanie dachu – usuwanie śniegu z dachów i posesji",
            // href: "/odsniezanie-dachow-lebork",
        },
    ];

    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className="
        h-auto
        bg-[#F3EDE1]
        px-6 md:px-20 2xl:px-30
        pt-2
        pb-16 md:pb-28"
        >
            <div className="2xl:px-52 xl:px-20 px-2 mt-10 lg:mt-20 flex flex-col gap-3 lg:gap-5">
                <SectionHeading id="services-heading" title="Usługi" dark={false} />
                <p className="text-black px-4 text-lg lg:text-2xl">
                    Kompleksowe usługi ogólnobudowlane na terenie Lęborka, Trójmiasta i okolic — od prac
                    dekarskich i elewacyjnych, przez fundamenty i remonty, aż po brukarstwo oraz sezonowe
                    odśnieżanie.
                </p>
                <div className="py-5 lg:p-5 grid md:grid-cols-2 3xl:grid-cols-3 gap-3 lg:gap-5">
                    {servicesTab.map((service) => (
                        <article
                            key={service.title}
                            className="bg-secondary grid grid-cols-5 min-h-[220px] rounded-md border-2 border-primary hover:scale-[1.01] transition hover:shadow-primary-hover hover:shadow-md overflow-hidden"
                        >
                            <div className="col-span-2 relative min-h-[220px]">
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    fill
                                    sizes="(max-width: 768px) 40vw, 20vw"
                                    className="object-cover object-center"
                                />
                            </div>

                            <div className="col-span-3 px-4 py-3">
                                <h3 className="text-xl xl:text-2xl font-semibold">{service.title}</h3>

                                <div className="h-[5px] xl:h-[8px] bg-primary rounded-full w-20 mt-1" />

                                <p className="my-2 md:my-4 text-[12px] md:text-sm xl:text-lg">
                                    {service.description}
                                </p>

                                {service.href && (
                                    <Link
                                        href={service.href}
                                        className="inline-block text-primary font-semibold hover:underline"
                                    >
                                        Dowiedz się więcej →
                                    </Link>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}