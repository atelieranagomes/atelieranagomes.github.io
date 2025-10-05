import React, { useState } from "react";

const dresses = [
  {
    image: "/src/assets/IMG_4149.jpg",
    title: "Vestido de Novia ",
    description: "Diseño personalizado en seda y encaje, inspirado en la elegancia atemporal."
  },
  {
    image: "/src/assets/IMG_4201.jpg",
    title: "Vestido de Fiesta a Medida",
    description: "Un vestido de encaje lila, suave y elegante, que refleja delicadeza en cada detalle y guarda, además de belleza, un pedacito de nuestra historia.
"
  },
  {
    image: "/src/assets/IMG_20250829_182654.jpg",
    title: "Mono Plissado",
    description: " Este mono plisado en fucsia, acompañado de un delicado cinturón de flores, une elegancia y frescura en una sola pieza."
  },
  {
    image: "/src/assets/IMG_2860.jpg",
    title: "Vestido Preboda",
    description: "Vestido blanco midi con abertura lateral, diseñado especialmente para una preboda llena de estilo, frescura y elegancia. Un look que refleja amor, luz y feminidad en cada detalle,"
  },
  {
    image: "/src/assets/IMG_4748",
    title: "Velos",
    description: "Bordado personalizado en velos de novia."
  },
  {
    image: "/src/assets/IMG_20250813_192101.jpg",
    title: "Vestido Corto Moderno",
    description: "Vestido de vuelo en tejido brillante, escote en V y delicado fruncido rematado con cuatro flores que realzan su encanto. "
  }
];

const INITIAL_COUNT = 3;
const INCREMENT = 3;

const Portfolio: React.FC = () => {
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const [zoomImg, setZoomImg] = useState<{image: string, title: string, description: string} | null>(null);
  const showMore = () => setVisible((v) => v + INCREMENT);
  const hasMore = visible < dresses.length;
  return (
    <section id="portfolio" className="py-20 bg-elegant-gray text-cream">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-10 text-center text-gold">Mi Trabajo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dresses.slice(0, visible).map((dress, idx) => (
            <div key={idx} className="bg-cream/10 rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6">
              <div className="w-full h-64 mb-4 overflow-hidden rounded cursor-zoom-in" onClick={() => setZoomImg(dress)}>
                <img src={dress.image} alt={dress.title} className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105" />
              </div>
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
        {zoomImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setZoomImg(null)}>
            <img src={zoomImg.image} alt="Zoom" className="max-w-3xl max-h-[80vh] rounded-xl shadow-2xl scale-100 transition-transform duration-700" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
