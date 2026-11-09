import SectionHeading from "@/components/ui/SectionHeading";

export default function OperationArea() {
    const cities:string=["Lębork", "Gdynia", "Sopot", "Gdańsk","i okolice..."]

    return(
        <section
            id="area"
            className="
        h-auto
        px-6 md:px-20 2xl:px-52
        pt-2
        pb-16 md:pb-28"

        >
            <section className="2xl:px-52 xl:px-20 px-2 mt-10 lg:mt-20 flex flex-col gap-3 lg:gap-5">
                <SectionHeading title="Obszar działania" dark={true} />
                <p className=" px-4 text-lg lg:text-2xl">Świadczymy usługi kominiarskie i ogólnobudowlane na terenie Lęborka, Trójmiasta i okolic. Skontaktuj się z nami, aby omówić zakres prac i ustalić szczegóły realizacji.</p>
                <div className="px-4 flex flex-col mt-10 lg:mt-0 lg:grid grid-cols-5">
                    <div className="col-span-2 flex flex-col gap-3 lg:gap-5 items-center justify-center z-40">
                        {cities.map((city) => (
                            <div key={city} className="w-80 lg:w-90 flex items-center  gap-2  bg-[#171717] border-primary border-1 rounded-2xl py-3 px-4 font-bold text-xl lg:text-2xl cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition">
                                <img src="/icons/location.svg" alt={`${city} lokalizacja`}/>
                                {city}
                            </div>
                        ))}
                    </div>
                    <div className="col-span-3 mt-10 lg:mt-0 flex justify-center relative">
                        <img src="/img/map.svg" alt="Obszar działania" className="h-full object-contain z-40" />
                        <span
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
                            style={{ boxShadow: "0 0 150px 100px #C2542A", opacity: 0.3 }}
                        />
                    </div>
                </div>

            </section>
        </section>
    );
}