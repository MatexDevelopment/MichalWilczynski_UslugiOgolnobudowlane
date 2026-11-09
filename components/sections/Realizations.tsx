"use client";

import RealizationCard from "@/components/ui/RealizationCard";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

interface Realization {
    name: string;
    image: string;
    description: string;
}

export default function Realizations() {
    const realizationsTab: Realization[] = [
        {
            name: "Dach Marii Skłodowskiej",
            image: "/img/realizations/zdjecie1.png",
            description: "Kompleksowe prace dekarskie i wykonanie pokrycia dachowego.",
        },
        {
            name: "Elewacja budynku mieszkalnego",
            image: "/img/realizations/zdjecie1.png",
            description: "Prace elewacyjne i poprawa estetyki budynku.",
        },
        {
            name: "Renowacja klatki schodowej",
            image: "/img/realizations/zdjecie1.png",
            description: "Kompleksowa renowacja i prace wykończeniowe.",
        },
        {
            name: "Remont dachu",
            image: "/img/realizations/zdjecie1.png",
            description: "Modernizacja i odnowienie pokrycia dachowego.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % realizationsTab.length);
    };

    const prevSlide = () => {
        setActiveIndex(
            (prev) => (prev - 1 + realizationsTab.length) % realizationsTab.length
        );
    };

    const getRealization = (offset: number) => {
        return realizationsTab[
        (activeIndex + offset + realizationsTab.length) % realizationsTab.length
            ];
    };

    return (
        <section
            id="realizations"
            className="h-auto  px-6 md:px-20 2xl:px-52 pt-2 pb-16 md:pb-28 text-white"
        >
            <section className="2xl:px-52 xl:px-20 px-2 mt-10 lg:mt-20 flex flex-col gap-3 lg:gap-5">

                <SectionHeading title="Nasze realizacje" dark={true} />

                <p className="text-white px-4 text-base text-lg lg:text-2xl">
                    Zobacz nasze realizacje i przekonaj się, jak wygląda
                    solidne wykonanie w praktyce.
                </p>

                {/* Karuzela */}
                <div className="relative mt-10 lg:mt-14 flex items-center justify-center">

                    {/* Poprzedni */}
                    <button
                        onClick={prevSlide}
                        aria-label="Poprzednia realizacja"
                        className="absolute left-0 lg:-left-10 z-20 text-white/50 hover:text-primary transition-colors cursor-pointer"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="w-8 h-8 md:w-12 md:h-12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    {/* Karty */}
                    <div className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-10 w-full overflow-hidden py-6">

                        {[-1, 0, 1].map((offset) => {
                            const realization = getRealization(offset);
                            const active = offset === 0;

                            return (
                                <motion.div
                                    key={realization.name}
                                    layout
                                    initial={false}
                                    transition={{
                                        layout: {
                                            type: "spring",
                                            stiffness: 180,
                                            damping: 26,
                                        },
                                    }}
                                    className={`
                                        shrink-0
                                        ${active
                                        ? "w-[75%] md:w-[36%] max-w-[340px] z-10"
                                        : "hidden md:block w-[28%] max-w-[300px]"
                                    }
                                    `}
                                    animate={{
                                        scale: active ? 1 : 0.92,
                                        opacity: active ? 1 : 0.5,
                                    }}
                                    style={{
                                        transformOrigin: "center",
                                    }}
                                >
                                    <RealizationCard
                                        realization={realization}
                                        active={active}
                                    />
                                </motion.div>
                            );
                        })}

                    </div>

                    {/* Następny */}
                    <button
                        onClick={nextSlide}
                        aria-label="Następna realizacja"
                        className="absolute right-0 lg:-right-10 z-20 text-white/50 hover:text-primary transition-colors cursor-pointer"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="w-8 h-8 md:w-12 md:h-12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>

                </div>

                {/* Wskaźniki */}
                <div className="flex justify-center items-center gap-2 mt-5">
                    {realizationsTab.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Przejdź do realizacji ${index + 1}`}
                            className={`
                                h-2 rounded-full transition-all duration-300 cursor-pointer
                                ${activeIndex === index
                                ? "w-8 bg-primary"
                                : "w-2 bg-white/30 hover:bg-white/60"
                            }
                            `}
                        />
                    ))}
                </div>

            </section>

        </section>
    );
}


