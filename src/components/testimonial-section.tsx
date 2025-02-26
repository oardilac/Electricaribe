import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "María G.",
    avatar: "MG",
    text: "Electricaribe ha revolucionado mis viajes nocturnos en bicicleta. Me siento mucho más segura en la carretera.",
  },
  {
    name: "Carlos R.",
    avatar: "CR",
    text: "La adaptación automática de la luz es impresionante. Ya no tengo que preocuparme por ajustar manualmente la intensidad.",
  },
  {
    name: "Laura M.",
    avatar: "LM",
    text: "Como ciclista urbana, Electricaribe me ha dado la confianza para pedalear a cualquier hora del día.",
  },
];

export function TestimonialSection() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Lo que dicen nuestros usuarios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-700 border-gray-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
