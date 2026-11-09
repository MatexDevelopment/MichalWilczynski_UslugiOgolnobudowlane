import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import OperationArea from "@/components/sections/OperationArea";
import Realizations from "@/components/sections/Realizations";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div>
      <Hero />
        <Services />
        <About/>
      <Realizations />
        <OperationArea/>
    </div>
  );
}
