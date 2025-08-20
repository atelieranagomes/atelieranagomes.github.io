const About = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-elegant-gray mb-6">
              La Pasión por los Detalles
            </h2>
            <div className="space-y-6 text-soft-gray leading-relaxed">
              <p className="text-lg">
                Mi vocación por la moda y los detalles me llevó a formarme en diseño y confección de vestidos. Ahora inicio este camino profesional con la ilusión de crear piezas únicas que cuenten tu historia y acompañen tus momentos más especiales.
              </p>
              <p>
                Me inspiro en cada persona que confía en mí, escuchando sus ideas y sueños para convertirlos en vestidos que reflejen su esencia. Mi proceso es cercano, creativo y personalizado, cuidando cada puntada y cada elección de tela.
              </p>
              <p>
                Si buscas alguien que te acompañe en cada paso y aporte frescura y dedicación, estaré encantada de ayudarte a crear el vestido perfecto para ti.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 gap-6">
              <div className="text-center">
                <div className="text-lg font-display font-bold text-gold mb-2">Tu vestido, mi compromiso</div>
                <div className="text-sm text-soft-gray">Diseño joven, trato cercano y dedicación total en cada proyecto</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-elegant rounded-2xl p-8 shadow-luxe">
              <blockquote className="text-elegant-gray italic text-lg leading-relaxed">
                "Creo que cada vestido es una oportunidad para descubrir y expresar tu estilo propio. Mi mayor satisfacción es ver cómo una idea se transforma en una prenda que te hace sentir única y segura."
              </blockquote>
              <footer className="mt-6 font-elegant text-elegant-gray">
                — Ana Gomes, Diseñadora
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;