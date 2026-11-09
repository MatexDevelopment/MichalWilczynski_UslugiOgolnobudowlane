import Digit from "@/components/ui/Digit";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
    return (
        <section
            id="about"
            className="h-auto px-5 sm:px-8 md:px-12 lg:px-20 2xl:px-52 pt-6 pb-16 md:pb-24"
        >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 sm:gap-x-8 lg:gap-x-16 max-w-5xl mx-auto mt-8 md:mt-12">

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
                        <Digit value={1} />
                        <Digit value={9} />
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

            <section className="mt-16 md:mt-24 lg:mt-28 flex flex-col gap-4 lg:gap-5">
                <SectionHeading title="O firmie" dark={true} />
            </section>

        </section>
    );
}