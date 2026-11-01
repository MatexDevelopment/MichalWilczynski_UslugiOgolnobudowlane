import SectionHeading from "@/components/ui/SectionHeading";

interface Service{
    title:string;
    description:string;
    image:string;
}

export default function Services(){
    const servicesTab:Service[]=[
        {title: "Dekarstwo – pełny zakres", description: "Wykonujemy kompleksowe prace dekarskie związane z budową, remontem i modernizacją dachów. Zajmujemy się zarówno naprawami i wymianą pokryć dachowych, jak i obróbkami blacharskimi, montażem elementów dachowych oraz pracami wykończeniowymi. Dbamy o trwałość, szczelność i prawidłowe wykonanie każdego etapu prac.", image: "/img/services/dekarstwo.png" },
        {title: "Elewacje", description: "Wykonujemy kompleksowe prace związane z wykonywaniem i wykańczaniem elewacji budynków. Zajmujemy się przygotowaniem powierzchni, ociepleniem, wykonaniem warstw elewacyjnych oraz ich estetycznym wykończeniem. Stosujemy sprawdzone rozwiązania zapewniające trwałość i odporność elewacji na warunki atmosferyczne.", image: "/img/services/elewacje.png" },
        {title: "Renowacja elewacji", description: "Przywracamy budynkom estetyczny wygląd i właściwy stan techniczny poprzez kompleksową renowację elewacji. Wykonujemy naprawy uszkodzonych powierzchni, uzupełnianie ubytków, przygotowanie podłoża oraz odnowienie warstw wykończeniowych. Zakres prac dobieramy do stanu technicznego budynku i oczekiwanego efektu.", image: "/img/services/renowacja.png" },
        {title: "Remonty klatek schodowych", description: "Realizujemy kompleksowe remonty i modernizacje klatek schodowych w budynkach mieszkalnych oraz użytkowych. Wykonujemy prace przygotowawcze, naprawcze, tynkarskie, malarskie i wykończeniowe, poprawiając zarówno estetykę, jak i funkcjonalność całej przestrzeni.", image: "/img/services/klatkiSchodowe.png" },
        {title: "Kostka brukowa i schody", description: "Wykonujemy nawierzchnie z kostki brukowej wraz z kompleksową realizacją schodów zewnętrznych. Przygotowujemy podłoże, wykonuję odpowiednią podbudowę, układam kostkę oraz wykonuję obrzeża i elementy wykończeniowe. Realizujemy podjazdy, chodniki, dojścia do budynków, tarasy i schody.", image: "/img/services/kostkaBrukowa.png" },
        {title: "Odśnieżanie dachów i posesji", description: "Zapewniamy odśnieżanie dachów oraz posesji w okresie zimowym. Usuwamy zalegający śnieg z dachów, podjazdów, chodników i innych powierzchni, pomagając ograniczyć ryzyko przeciążenia konstrukcji oraz zapewniając bezpieczne korzystanie z posesji.", image: "/img/services/odsniezanie.png" },

    ];
    return(
        <section
            id="services"
            className="
        h-auto
        bg-[#F3EDE1]
        px-6 md:px-20 2xl:px-52
        pt-2
        pb-16 md:pb-28"

        >
            <section className="2xl:px-52 xl:px-20 px-2 mt-10 lg:mt-20 flex flex-col gap-3 lg:gap-5">
            <SectionHeading title="Usługi" dark={false} />
                <p className="text-black px-4 text-lg lg:text-2xl">Kompleksowe usługi ogólnobudowlane na terenie Lęborka, Trójmiasta i okolic — od prac dekarskich i elewacyjnych, przez fundamenty i remonty, aż po brukarstwo oraz sezonowe odśnieżanie.</p>
                <div className="py-5 lg:p-5 grid md:grid-cols-2 3xl:grid-cols-3 gap-3 lg:gap-5">
                    {servicesTab.map((service, i) => (
                        <div
                            key={i}
                            className="bg-secondary grid grid-cols-5 min-h-[220px] rounded-md border-2 border-primary hover:scale-[1.01] transition cursor-pointer hover:shadow-primary-hover hover:shadow-md overflow-hidden"
                        >
                            <div className="col-span-2 relative min-h-[220px]">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                />
                            </div>

                            <div className="col-span-3 px-4 py-3">
                                <h2 className="text-xl xl:text-2xl font-semibold">
                                    {service.title}
                                </h2>

                                <div className="h-[5px] xl:h-[8px] bg-primary rounded-full w-20 mt-1" />

                                <p className="my-2 md:my-4 text-[12px] md:text-sm xl:text-lg">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}