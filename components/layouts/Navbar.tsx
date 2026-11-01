"use client";

import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Strona główna", href: "#home" },
        { name: "Usługi", href: "#services" },
        { name: "O firmie", href: "#about" },
        { name: "Nasze realizacje", href: "#about" },
        { name: "Obszar działania", href: "#area" },
        { name: "Kontakt", href: "#about" }

    ];

    return (
        <nav className="relative z-50 flex items-center justify-between ">

            <img src="/mwilczynski_logo.svg" alt="Logo Michał Wilczyński - Firma Ogólnobudowlana" className="w-30 md:w-60 lg:w-80"/>

            <div className="hidden items-center gap-8 xl:flex">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-white transition text-xl font-semibold hover:text-primary"
                    >
                        {link.name}
                    </a>
                ))}


            </div>

            <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Otwórz menu"
                aria-expanded={menuOpen}
                className="text-3xl text-white xl:hidden cursor-pointer"
            >
                ☰
            </button>

            {menuOpen && (
                <button
                    type="button"
                    aria-label="Zamknij menu"
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 z-50 bg-black/65"
                />
            )}

            <div
                className={`fixed right-0 top-0 z-[60] flex h-dvh w-[75%] max-w-[380px] flex-col items-center justify-center bg-black transition-transform duration-300 xl:hidden ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
                aria-hidden={!menuOpen}
            >
                <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Zamknij menu"
                    tabIndex={menuOpen ? 0 : -1}
                    className="absolute right-8 top-8 text-6xl leading-none text-white cursor-pointer"
                >
                    ×
                </button>

                <div className="flex flex-col gap-6 ">
                    <a href="home"><img src="/mwilczynski_logo.svg" alt="Logo Michał Wilczyński - Firma Ogólnobudowlana"  className="w-40"/></a>
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            tabIndex={menuOpen ? 0 : -1}
                            onClick={() => setMenuOpen(false)}
                            className="text-center text-xl font-semibold text-white transition hover:text-primary"
                        >
                            {link.name}
                        </a>
                    ))}


                </div>
            </div>
        </nav>
    );
}
