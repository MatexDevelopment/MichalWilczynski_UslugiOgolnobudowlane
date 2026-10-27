import Navbar from "@/components/layouts/Navbar";


export default function Hero(){
    return(
      <div className="h-[70vh] md:h-[80vh] bg-center bg-cover 2xl:px-52 md:px-20 px-10 pt-2 " style={{backgroundImage:"url('/heroImage.svg')"}}>
          <Navbar />
          <div className="2xl:px-52 md:px-20 px-2 mt-10 lg:mt-20 flex flex-col gap-3 lg:gap-5">
              <h1 className="text-2xl lg:text-5xl font-semibold int">Usługi ogólnobudowlane<br/>
                  Lębork, Trójmiasto i okolice</h1>
              <div className="w-25 bg-primary h-[8px] lg:h-[12px] rounded-full"></div>
              <p className="text-sm lg:text-2xl">Buduj solidnie. Remontuj bez kompromisów.<br/>
                  Skontaktuj się z nami i zadbaj o swój dom już dziś.</p>
              <div className="flex mt-10 flex-col md:flex-row items-start gap-4">
                  <button className="bg-primary hover:bg-primary-hover py-1.5 md:py-3 px-3 md:px-5 rounded-xl flex items-center  justify-centers text-lg md:text-2xl gap-1 md:gap-2 cursor-pointer font-bold"><img src="/icons/telWhite.svg" alt="Skontaktuj się z nami:" className="w-5 md:w-7"/>502 662 028</button>
                  <button className="bg-secondary hover:bg-secondary-hover py-1.5 md:py-3 px-3 md:px-5 rounded-xl flex items-center  justify-centers text-lg md:text-2xl gap-1 md:gap-2 cursor-pointer font-bold"><img src="/icons/emailWhite.svg" alt="Skontaktuj się z nami:" className="w-5 md:w-7"/>kontakt@mwilczynski-bud.pl</button>
              </div>
          </div>
      </div>
    );
}