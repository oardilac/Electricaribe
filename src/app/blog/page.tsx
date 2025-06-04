import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { BlogHeader } from "@/components/blog/blog-header";
import { BlogCard } from "@/components/blog/blog-card";
import { FeaturedPost } from "@/components/blog/featured-post";

// Datos de los 4 blogs del proyecto
const featuredPost = {
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
};

const blogPosts = [
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

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <BlogHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Blog de Electricaribe</h1>
            <p className="text-xl text-gray-300">
              Descubre el proceso de desarrollo y el impacto de nuestro proyecto
            </p>
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar artículos..."
              className="pl-10 bg-gray-800 border-gray-700 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Featured post */}
        <FeaturedPost post={featuredPost} />

        {/* Other blog posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Más Artículos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2025 Electricaribe. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
