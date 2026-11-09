// Pojedyncza karta realizacji
export default function RealizationCard({
                             realization,
                             active,
                         }: {
    realization: Realization;
    active: boolean;
}) {
    return (
        <div
            className={`
                relative overflow-hidden rounded-2xl border-2
                ${active
                ? "border-primary shadow-lg shadow-primary/20"
                : "border-primary/50"
            }
            `}
        >
            <div
                className={`
        relative
        ${active
                    ? "h-[390px] sm:h-[430px]"
                    : "h-[350px] sm:h-[390px]"
                }
    `}
            >

                <img
                    src={realization.image}
                    alt={realization.name}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                {/* Opis */}
                <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-xl sm:text-2xl font-semibold leading-tight">
                        {realization.name}
                    </h3>

                    <div className="h-[5px] w-16 bg-primary rounded-full mt-2" />

                    {active && (
                        <p className="text-md text-white/80 mt-3">
                            {realization.description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}