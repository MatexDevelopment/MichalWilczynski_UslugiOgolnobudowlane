import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="
        h-auto
        px-6 md:px-20 2xl:px-30
        pt-2
        pb-16 md:pb-28"
        >
            <div className="2xl:px-52 xl:px-20 px-2 mt-10 lg:mt-20 flex flex-col gap-3 lg:gap-5">
                <SectionHeading id="contact-heading" title="Kontakt" dark={true} />
                <div className="px-4 flex flex-col mt-10 lg:mt-0 lg:grid grid-cols-5">
                    <div className="col-span-2 flex flex-col gap-3 lg:gap-5 justify-center z-40">
                        <h3 className="px-4 text-xl font-bold lg:text-3xl">Jesteśmy bliżej, niż myślisz</h3>
                        <p className="px-4 text-lg lg:text-2xl">
                            Lębork, Gdańsk, Gdynia, Sopot i okolice — niezależnie od tego, gdzie potrzebujesz
                            pomocy, skontaktuj się z nami i porozmawiajmy o realizacji Twojego zlecenia.
                        </p>
                    </div>
                    <div className="col-span-3 mt-10 lg:mt-0 flex justify-center relative">
                        <div
                            className="
        border-primary border rounded-lg
        w-full sm:w-[80%]
        px-4 py-5 sm:px-8 sm:py-8 lg:px-15 lg:py-10
        gap-4 lg:gap-5 flex flex-col
        bg-[#171717]/50"
                        >
                            <div className="flex items-center gap-3 lg:gap-4 min-w-0">
                                <a
                                    href="mailto:kontakt@mwilczynski-bud.pl"
                                    aria-label="Napisz e-mail: kontakt@mwilczynski-bud.pl"
                                    className="shrink-0"
                                >
                                    <div className="border-primary border rounded-lg p-2 w-10 h-10 lg:w-[50px] lg:h-[50px] bg-primary/10 flex items-center justify-center hover:bg-primary/30 transition">
                                        <img
                                            src="/icons/borderEmail.svg"
                                            alt=""
                                            aria-hidden="true"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </a>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-xs sm:text-sm lg:text-lg text-white/50 font-medium">
                                        E-MAIL
                                    </span>
                                    <a
                                        href="mailto:kontakt@mwilczynski-bud.pl"
                                        className="text-sm sm:text-lg lg:text-2xl font-bold break-all hover:text-primary transition"
                                    >
                                        kontakt@mwilczynski-bud.pl
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 lg:gap-4 min-w-0">
                                <a
                                    href="tel:+48502662028"
                                    aria-label="Zadzwoń: +48 502 662 028"
                                    className="shrink-0"
                                >
                                    <div className="border-primary border rounded-lg p-2 w-10 h-10 lg:w-[50px] lg:h-[50px] bg-primary/10 flex items-center justify-center hover:bg-primary/30 transition">
                                        <img
                                            src="/icons/borderTel.svg"
                                            alt=""
                                            aria-hidden="true"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </a>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-xs sm:text-sm lg:text-lg text-white/50 font-medium">
                                        TELEFON
                                    </span>
                                    <a
                                        href="tel:+48502662028"
                                        className="text-base sm:text-lg lg:text-2xl font-bold hover:text-primary transition"
                                    >
                                        +48 502 662 028
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}