import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-elegant-gray text-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Comencemos Tu Proyecto
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Agenda una consulta personalizada para discutir tu visión y crear el vestido de tus sueños
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card className="bg-cream/10 border-cream/20 h-full">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-semibold mb-8 text-gold">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-cream/5">
                  <MapPin className="text-gold w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-cream">Atelier</h4>
                    <p className="text-cream/70">Calle de la Moda 123, Madrid 28001</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-cream/5">
                  <Phone className="text-gold w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-cream">Teléfono</h4>
                    <p className="text-cream/70">+34 91 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-cream/5">
                  <Mail className="text-gold w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-cream">Email</h4>
                    <p className="text-cream/70">ana@ateliergomes.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-cream/5">
                  <Clock className="text-gold w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-cream">Horario</h4>
                    <p className="text-cream/70">Lunes a Viernes: 10:00 - 18:00</p>
                    <p className="text-cream/70">Sábados: Solo con cita previa</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-cream/20">
                <p className="text-cream/60 text-sm text-center">
                  Visitas al atelier solo con cita previa
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-cream/10 border-cream/20 h-full" id="consulta-directa">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-semibold mb-8 text-gold">
                Consulta Directa
              </h3>
              
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <p className="text-cream/80">
                    Ponte en contacto directamente conmigo para discutir tu proyecto personalizado
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-cream/5 border border-cream/10">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <Mail className="text-gold w-6 h-6" />
                    <h4 className="font-semibold text-cream text-lg">Email Directo</h4>
                  </div>
                  <div className="text-center">
                    <a 
                      href="mailto:ana@ateliergomes.com?subject=Consulta sobre diseño de vestidos"
                      className="text-gold hover:text-gold-light transition-colors text-lg font-medium"
                    >
                      ana@ateliergomes.com
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-cream/5 border border-cream/10">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <h4 className="font-semibold text-cream text-lg">Instagram</h4>
                  </div>
                  <div className="text-center">
                    <a 
                      href="https://instagram.com/ateliergomes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold-light transition-colors text-lg font-medium"
                    >
                      @ateliergomes
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-cream/20">
                <p className="text-cream/60 text-sm text-center">
                  Respondo todos los emails en menos de 24 horas
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;