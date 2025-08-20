import { Card, CardContent } from "@/components/ui/card";
import weddingImage from "@/assets/wedding-service.jpg";
import vintageImage from "@/assets/vintage-restoration.jpg";
import customImage from "@/assets/custom-fitting.jpg";

const Services = () => {
  const services = [
    {
      title: "Vestidos de Novia",
      description: "Diseños únicos para el día más especial de tu vida. Cada vestido se crea especialmente para ti, reflejando tu personalidad y estilo.",
      image: weddingImage,
      features: ["Diseño personalizado", "Múltiples pruebas", "Entrega garantizada"]
    },
    {
      title: "Eventos Especiales",
      description: "Vestidos elegantes para galas, cocktails, graduaciones y celebraciones importantes. Confeccionados con los mejores materiales.",
      image: customImage,
      features: ["Alta costura", "Tejidos premium", "Ajuste perfecto"]
    },
    {
      title: "Restauración Vintage",
      description: "Devolvemos la vida a vestidos con historia. Restauramos con técnicas tradicionales respetando el diseño original.",
      image: vintageImage,
      features: ["Técnicas tradicionales", "Materiales auténticos", "Preservación histórica"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-luxury">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-elegant-gray mb-6">
            Servicios Exclusivos
          </h2>
          <p className="text-lg text-soft-gray max-w-2xl mx-auto">
            Cada pieza es una obra de arte única, diseñada y confeccionada con la máxima atención al detalle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-luxe transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm">
              <div className="overflow-hidden rounded-t-xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-2xl font-semibold text-elegant-gray mb-4">
                  {service.title}
                </h3>
                <p className="text-soft-gray mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-elegant-gray">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;