import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import OperationArea from "@/components/sections/OperationArea";
import Realizations from "@/components/sections/Realizations";
import Services from "@/components/sections/Services";

export default function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <About />
            <Realizations />
            <OperationArea />
            <Contact />
        </main>
    );
}