import { BlogCard } from "@/components/blog/blog-card";

// Datos de los otros 3 artículos para mostrar como relacionados
const relatedPosts = [
  {
    title: "Del Circuito a la Realidad: Nuestro OpAmp Discreto",
    excerpt:
      "La historia completa de cómo diseñamos y validamos nuestro amplificador operacional: desde el primer espejo de corriente hasta los errores que nos enseñaron todo.",
    date: "17 Febrero 2025",
    readTime: "7 min",
    author: "Oliver Ardila",
    authorRole: "COM Officer",
    authorAvatar: "OA",
    slug: "diseno-opamp-electricaribe",
    image: "/blog/hero-opamp.png",
  },
  {
    title: "Primer Prototipo Funcional – Arduino Uno, LED y LDR",
    excerpt:
      "El experimento que cambió todo: nuestro primer montaje exitoso con Arduino Uno, un simple LED y LDR. Los hallazgos clave que sentaron las bases para el desarrollo completo de Electricaribe.",
    date: "30 Abril 2025",
    readTime: "8 min",
    author: "Jorge Diaz",
    authorRole: "R & F Manager",
    slug: "primer-prototipo-funcional",
    image: "/blog/primer-prototipo.png",
  },
  {
    title: "Funcionamiento Detallado del Prototipo Final",
    excerpt:
      "Análisis técnico completo del sistema final: desde la alimentación con celdas de litio hasta el control PWM del LED Cree. Descubre cómo solucionamos los problemas de sobrecalentamiento y optimizamos el rendimiento.",
    date: "23 Mayo 2025",
    readTime: "12 min",
    author: "Santiago Ureche",
    authorRole: "Design Leader",
    slug: "funcionamiento-detallado-prototipo",
    image: "/blog/prototipo-final.png",
  },
];

export function RelatedPosts() {
  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Otros Artículos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
