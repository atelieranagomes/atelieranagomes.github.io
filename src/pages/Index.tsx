import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
  <Hero />
  <Services />
  <Portfolio />
  <About />
  <Contact />
    </div>
  );
};

export default Index;