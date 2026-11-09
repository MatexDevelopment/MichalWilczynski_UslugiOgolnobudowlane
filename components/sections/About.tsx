"use client"
import Digit from "@/components/ui/Digit";
import SectionHeading from "@/components/ui/SectionHeading";
import {useState, useEffect, startTransition} from "react";

export default function About() {
    const startYear=2007;
    const [year, setYear] = useState<string>("00");

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const result = (currentYear - startYear).toString();

        const formattedResult = result.padStart(2, "0");

        startTransition(() => {
            setYear(formattedResult);
        });
    }, []);



    return (
        <section
            id="about"
            className="px-6 md:px-20 2xl:px-52
        pt-2
        pb-16 md:pb-28"
        >
            <section className="2xl:px-52 xl:px-20 px-2 mt-10 lg:mt-20 flex flex-col gap-3 lg:gap-5">

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 sm:gap-x-8 lg:gap-x-16 max-w-5xl w-full mx-auto">

                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl text-primary flex font-bold tracking-tight">
                        <Digit value={2} />
                        <Digit value={0} />
                        <Digit value={0} />
                        <Digit value={7} />
                    </h2>
                    <h4 className="text-sm sm:text-base lg:text-xl mt-2 text-center md:text-left">
                        Rok założenia
                    </h4>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl text-primary flex font-bold tracking-tight">
                        <Digit value={Number(year.substring(0,1))} />
                        <Digit value={Number(year.substring(1,2))} />
                        <span className="ml-1">+</span>
                        <span className="ml-2">lat</span>
                    </h2>
                    <h4 className="text-sm sm:text-base lg:text-xl mt-2 text-center md:text-left">
                        Doświadczenia
                    </h4>
                </div>

                <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl text-primary font-bold tracking-tight">
                        Lębork
                    </h2>
                    <h4 className="text-sm sm:text-base lg:text-xl mt-2">
                        i Trójmiasto
                    </h4>
                </div>
            </div>

            <section className="mt-10 lg:mt-16">
                <SectionHeading title="O firmie" dark={true} />

                <div className="mt-8 text-md md:text-xl leading-relaxed text-justify px-4">

                    <a href="#home">
                    <img
                        src="/mwilczynski_logo.svg"
                        alt="Logo firmy Michał Wilczyński"
                        className="
                            float-left sm:w-1/2 lg:w-[28%]
                            max-h-64
                            object-contain
                            rounded-xl
                            mr-6 mb-4
                            sm:mr-8 sm:mb-5
                            cursor-pointer
                        "
                    />
                    </a>

                    <p className="text-xl md:text-2xl font-semibold  mb-4 text-left">
                        Solidność, na której możesz polegać.
                    </p>

                    <p>
                        Firma Usługi Ogólnobudowlane Michał Wilczyński
                        to kompleksowe usługi związane z budową,
                        remontem i modernizacją budynków. Stawiamy
                        na solidne wykonanie, rzetelne podejście
                        oraz indywidualne dopasowanie usług do potrzeb
                        każdego klienta.
                    </p>

                    <p className="mt-3">
                        Specjalizujemy się między innymi w dekarstwie
                        oraz kompleksowych pracach związanych
                        z dachami. Dbamy o każdy szczegół realizacji,
                        wykorzystując sprawdzone rozwiązania
                        i materiały.
                    </p>

                    <p className="mt-3">
                        Działamy na terenie Lęborka, Trójmiasta
                        i okolic. Zależy nam na tym, aby każda
                        realizacja była wykonana starannie,
                        a współpraca przebiegała sprawnie
                        i w atmosferze wzajemnego zaufania.
                    </p>

                    <p className="mt-3">
                        Stawiamy na jakość, solidność i bezpieczeństwo
                        — bo dobry efekt zaczyna się od dobrego
                        wykonania.
                    </p>

                    <p className="mt-3">
                        Masz pytania lub potrzebujesz fachowej pomocy?
                        Skontaktuj się z nami!
                    </p>

                    <div className="clear-both" />
                </div>
            </section>
        </section>
        </section>

    );
}