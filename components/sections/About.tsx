import SectionHeading from "@/components/ui/SectionHeading";

export default function About(){
    return(
        <section
            id="about"
            className="
        h-auto
        px-6 md:px-20 2xl:px-52
        pt-2
        pb-16 md:pb-28"

        >
            <section className="2xl:px-52 md:px-20 px-2 mt-10 lg:mt-20 flex flex-col gap-3 lg:gap-5">
                <SectionHeading title="O firmie" dark={true} />
            </section>

        </section>
    );
}