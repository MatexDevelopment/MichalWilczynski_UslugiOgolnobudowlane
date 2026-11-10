"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Digit({ value }: { value: number }) {
    const [height, setHeight] = useState(70);
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        amount: 0.5,
    });

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
        <div ref={ref} className="overflow-hidden" style={{ height }} aria-hidden="true">
            <motion.div
                initial={{ y: 0 }}
                animate={{
                    y: isInView ? -value * height : 0,
                }}
                transition={{
                    duration: 1.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} style={{ height }} className="flex items-center justify-center">
                        {i}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Digit;