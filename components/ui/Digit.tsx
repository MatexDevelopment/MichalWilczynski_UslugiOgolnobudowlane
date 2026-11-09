"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Digit({ value }: { value: number }) {
    const [height, setHeight] = useState(70);

    useEffect(() => {
        const updateHeight = () => {
            setHeight(window.innerWidth < 768 ? 50 : 70);
        };

        updateHeight();

        window.addEventListener("resize", updateHeight);

        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    return (
        <div className="overflow-hidden" style={{ height }}>
            <motion.div
                animate={{ y: -value * height }}
                transition={{
                    duration: 1.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        style={{ height }}
                        className="flex items-center justify-center"
                    >
                        {i}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Digit;