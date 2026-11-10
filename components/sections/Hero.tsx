import Navbar from "@/components/layouts/Navbar";

export default function Hero() {
    return (
        <section
            id="home"
            className="
        relative
        h-auto
        bg-cover
        bg-center
        bg-no-repeat
        px-6 md:px-20 2xl:px-30
        pt-2
        pb-16 md:pb-28
      "
            style={{ backgroundImage: "url('/img/heroImage.svg')" }}
        >
            <Navbar />

            <div className="2xl:px-52 md:px-20 px-2 mt-10 lg:mt-20 flex flex-col gap-3 lg:gap-5">
                <h1 className="text-3xl md:text-5xl font-semibold font-heading">
                    Usługi ogólnobudowlane<br />
                    Lębork, Trójmiasto i okolice
                </h1>

                <div className="w-25 bg-primary h-[8px] md:h-[12px] rounded-full" />

                <p className="text-lg md:text-2xl">
                    Buduj solidnie. Remontuj bez kompromisów.<br />
                    Skontaktuj się z nami i zadbaj o swój dom już dziś.
                </p>

                <div className="flex mt-6 md:mt-10 flex-col md:flex-row items-start gap-4">
                    <a
                        href="tel:+48502662028"
                        aria-label="Zadzwoń: +48 502 662 028"
                        className="bg-primary hover:bg-primary-hover py-2 lg:py-3 px-4 lg:px-5 rounded-xl flex items-center justify-center text-lg lg:text-2xl gap-2 font-bold whitespace-nowrap transition"
                    >
                        <img src="/icons/telWhite.svg" alt="" aria-hidden="true" className="w-5 md:w-7" />
                        502 662 028
                    </a>

                    <a
                        href="mailto:kontakt@mwilczynski-bud.pl"
                        aria-label="Napisz e-mail: kontakt@mwilczynski-bud.pl"
                        className="bg-secondary hover:bg-secondary-hover py-2 lg:py-3 px-4 lg:px-5 rounded-xl flex items-center justify-center text-lg lg:text-2xl gap-2 font-bold whitespace-nowrap transition"
                    >
                        <img src="/icons/emailWhite.svg" alt="" aria-hidden="true" className="w-5 md:w-7" />
                        kontakt@mwilczynski-bud.pl
                    </a>
                </div>
            </div>
        </section>
    );
}