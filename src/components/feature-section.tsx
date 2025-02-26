import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, SunMedium, SunDim, Power } from "lucide-react";

const features = [
  {
    title: "Iluminación Alta",
    icon: Sun,
    description: "Máxima visibilidad en condiciones de oscuridad extrema.",
  },
  {
    title: "Iluminación Media",
    icon: SunMedium,
    description:
      "Equilibrio perfecto para la mayoría de las situaciones nocturnas.",
  },
  {
    title: "Iluminación Baja",
    icon: SunDim,
    description: "Ahorro de energía en entornos con iluminación ambiental.",
  },
  {
    title: "Apagado",
    icon: Power,
    description: "Conserva la batería cuando no se necesita iluminación.",
  },
];

export function FeatureSection() {
  return (
    <section className="space-y-12 py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Nuestro MVP</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardHeader>
              <feature.icon className="w-12 h-12 mb-4 text-blue-500" />
              <CardTitle className="text-2xl font-semibold text-white">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
