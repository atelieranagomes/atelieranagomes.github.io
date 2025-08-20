import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-atelier.jpg";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-elegant-gray/80 via-elegant-gray/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left">
        <div className="max-w-2xl lg:max-w-3xl">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 animate-fade-in">
            Ana Gomes
          </h1>
          <p className="font-elegant text-xl md:text-2xl text-gold-light mb-8 animate-fade-in animation-delay-200">
            Diseñadora de Vestidos a Medida
          </p>
          <p className="text-lg text-cream/90 mb-10 max-w-xl leading-relaxed animate-fade-in animation-delay-400">
            Apasionada por el diseño y la confección de vestidos a medida, mi objetivo es ayudarte a crear momentos únicos y especiales. Tras formarme en diseño de moda, inicio este proyecto con toda la dedicación y creatividad para ofrecerte vestidos excepcionales para bodas, eventos y restauraciones vintage. ¡Confía en mi entusiasmo y formación para hacer realidad tu idea!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-600">
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() => setOpen(true)}
            >
              Ver Mi Trabajo
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Button>
            <Button variant="elegant" size="lg" asChild>
              <a href="#contacto">Consulta Personalizada</a>
            </Button>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Próximamente disponible</DialogTitle>
                <DialogDescription>
                  Esta sección estará disponible en el futuro. ¡Gracias por tu
                  interés!
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="elegant" onClick={() => setOpen(false)}>
                  Cerrar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
