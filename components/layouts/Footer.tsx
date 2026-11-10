"use client"
import {startTransition, useEffect, useState} from "react";

export default function Footer() {
    const links = [
        { name: "Strona główna", href: "#home" },
        { name: "Usługi", href: "#services" },
        { name: "O firmie", href: "#about" },
        { name: "Nasze realizacje", href: "#realizations" },
        { name: "Obszar działania", href: "#area" },
        { name: "Kontakt", href: "#contact" },
    ];

    const [year, setYear] = useState<number>(2026);

    useEffect(() => {
        const currentYear = new Date().getFullYear();

        startTransition(() => {
            setYear(currentYear);
        });
    }, []);

    return (
        <footer className="h-auto px-6 md:px-20 2xl:px-52 pt-12 pb-3 bg-[#171717] text-white">
            <div className="grid grid-cols-5 gap-10 lg:gap-0 items-center">
                <div className="col-span-5 lg:col-span-2">
                    <a href="#home">
                        <img
                            src="/mwilczynski_logo.svg"
                            alt="Logo Michał Wilczyński - Firma Ogólnobudowlana"
                            className="w-40 md:w-60 lg:w-80 cursor-pointer"
                        />
                    </a>
                    <p className="text-white/50 font-medium text-sm lg:text-base mt-2">
                        Firma ogólnobudowlana - Michał Wilczyński <br />
                        ul. Jagodowa 9, 84-300 Lębork <br />
                        NIP: 8411484570
                    </p>
                    <p className="text-white/50 mt-5 text-sm lg:text-base max-w-md">
                        Kompleksowe usługi ogólnobudowlane na terenie Lęborka, Trójmiasta i okolic — od prac
                        dekarskich i elewacyjnych, przez fundamenty i remonty, aż po brukarstwo oraz sezonowe
                        odśnieżanie.
                    </p>
                </div>

                <div className="col-span-5 lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
                    <div className="sm:col-span-2">
                        <h4 className="text-lg lg:text-xl font-bold uppercase text-white/75">Nawigacja</h4>
                        <ul className="mt-4 grid grid-cols-2 grid-flow-col grid-rows-3 gap-x-6 gap-y-3 px-2">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-base lg:text-xl text-white/50 hover:text-primary transition"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sm:col-span-1">
                        <h4 className="text-lg lg:text-xl font-bold uppercase text-white/75">Kontakt</h4>
                        <ul className="mt-4 flex flex-col gap-3 px-2">
                            <li>
                                <a
                                    href="mailto:kontakt@mwilczynski-bud.pl"
                                    className="text-base lg:text-xl text-white/50 hover:text-primary transition break-all"
                                >
                                    kontakt@mwilczynski-bud.pl
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+48502662028"
                                    className="text-base lg:text-xl text-white/50 hover:text-primarytransition"
                                >
                                    +48 502 662 028
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-10 lg:mt-12 h-[3px] w-full rounded-full bg-primary" />
            <p className="mt-3 text-sm lg:text-base text-white/50">
                © {year} Michał Wilczyński - Usługi Ogólnobudowlane. Wszelkie prawa zastrzeżone.
            </p>
            <div className="w-full flex justify-center mt-3">
                <img src="/MatexDevelopment_logo.svg" alt="Stworzone przez: MatexDevelopment"/>
            </div>
        </footer>
    );
}