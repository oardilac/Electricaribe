import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Del Circuito a la Realidad: Nuestro OpAmp Discreto",
    excerpt:
      "La historia completa de cómo diseñamos y validamos nuestro amplificador operacional: desde el primer espejo de corriente hasta los errores que nos enseñaron todo.",
    date: "17 Febrero 2025",
    readTime: "7 min",
    slug: "diseno-opamp-electricaribe",
  },
  {
    title: "Primer Prototipo Funcional – Arduino Uno, LED y LDR",
    excerpt:
      "El experimento que cambió todo: nuestro primer montaje exitoso con Arduino Uno, un simple LED y LDR. Los hallazgos clave que sentaron las bases para el desarrollo completo de Electricaribe.",
    date: "30 Abril 2025",
    readTime: "8 min",
    slug: "primer-prototipo-funcional",
  },
  {
    title: "Funcionamiento Detallado del Prototipo Final",
    excerpt:
      "Análisis técnico completo del sistema final: desde la alimentación con celdas de litio hasta el control PWM del LED Cree. Descubre cómo solucionamos los problemas de sobrecalentamiento y optimizamos el rendimiento.",
    date: "23 Mayo 2025",
    readTime: "12 min",
    slug: "funcionamiento-detallado-prototipo",
  },
];

export function BlogSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Blog del Proyecto</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre el proceso de desarrollo, las decisiones técnicas y el
            impacto de Electricaribe en la seguridad ciclista
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors group"
            >
              <CardHeader>
                <div className="flex items-center justify-end mb-2">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    {post.readTime} de lectura
                  </span>
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 p-0"
                    >
                      Leer más
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
            >
              Ver todos los artículos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
