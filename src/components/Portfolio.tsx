import React, { useState } from "react";

const dresses = [
  {
    image: "/src/assets/wedding-service.jpg",
    title: "Vestido de Novia Clásico",
    description: "Diseño personalizado en seda y encaje, inspirado en la elegancia atemporal."
  },
  {
    image: "/src/assets/vintage-restoration.jpg",
    title: "Restauración Vintage",
    description: "Vestido restaurado de los años 60, manteniendo la esencia original y añadiendo detalles modernos."
  },
  {
    image: "/src/assets/custom-fitting.jpg",
    title: "Vestido de Fiesta a Medida",
    description: "Creación exclusiva para eventos especiales, con ajuste perfecto y detalles únicos."
  },
  {
    image: "/src/assets/hero-atelier.jpg",
    title: "Vestido Boho Chic",
    description: "Vestido bohemio con telas ligeras y detalles artesanales, ideal para bodas al aire libre."
  },
  {
    image: "/src/assets/wedding-service.jpg",
    title: "Vestido Minimalista",
    description: "Diseño limpio y moderno, con líneas sencillas y tejidos de alta calidad."
  },
  {
    image: "/src/assets/vintage-restoration.jpg",
    title: "Vestido Vintage Floral",
    description: "Vestido inspirado en los años 50, con estampado floral y corte clásico."
  },
  {
    image: "/src/assets/custom-fitting.jpg",
    title: "Vestido de Fiesta Largo",
    description: "Vestido elegante para galas, confeccionado en terciopelo y detalles de pedrería."
  },
  {
    image: "/src/assets/hero-atelier.jpg",
    title: "Vestido Corto Moderno",
    description: "Vestido juvenil y fresco, perfecto para celebraciones informales."
  }
];

const INITIAL_COUNT = 3;
const INCREMENT = 3;

const Portfolio: React.FC = () => {
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const showMore = () => setVisible((v) => v + INCREMENT);
  const hasMore = visible < dresses.length;
  return (
    <section id="portfolio" className="py-20 bg-elegant-gray text-cream">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-10 text-center text-gold">Mi Trabajo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dresses.slice(0, visible).map((dress, idx) => (
            <div key={idx} className="bg-cream/10 rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6">
              <img src={dress.image} alt={dress.title} className="w-full h-64 object-cover rounded mb-4" />
              <h3 className="text-2xl font-semibold text-gold mb-2">{dress.title}</h3>
              <p className="text-cream/80 text-center">{dress.description}</p>
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-3 bg-gold text-elegant-gray rounded hover:bg-gold-light transition-colors font-semibold text-lg"
              onClick={showMore}
            >Ver más</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
