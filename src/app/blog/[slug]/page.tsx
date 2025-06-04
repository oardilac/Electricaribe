/* --- BlogPostPage.tsx --- */
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  MessageSquare,
} from "lucide-react";
import { BlogHeader } from "@/components/blog/blog-header";
import { RelatedPosts } from "@/components/blog/related-posts";

/* ⬇️  NUEVO ARTÍCULO CON FORMATO MEJORADO ⬇️ */
const blogPost = {
  /* Metadatos CMS / SEO */
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

  /* Contenido en HTML (permitido por dangerouslySetInnerHTML) */
  content: `
    <div class="space-y-8">
      
      <!-- Hero Introduction -->
      <div class="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-500/20">
        <div class="flex items-center mb-4">
          <div class="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
          <span class="text-cyan-400 font-semibold text-sm uppercase tracking-wide">Ingeniería Electrónica</span>
        </div>
        <p class="text-lg text-gray-300 leading-relaxed">
          Diseñar un OpAmp desde cero no es solo conectar transistores. Es entender cada señal, 
          cada compensación, cada detalle que puede convertir tu amplificador perfecto en un 
          oscilador descontrolado. Esta es nuestra historia.
        </p>
      </div>

      <!-- OpAmp Completo Section -->
      <section>
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
            <div class="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
              <svg class="w-3 h-3 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-green-400">El OpAmp Completo</h2>
            <p class="text-sm text-gray-400">10 de marzo de 2025</p>
          </div>
        </div>

        <div class="bg-slate-800/50 rounded-xl p-6 mb-6">
          <p class="text-lg text-gray-300 leading-relaxed mb-6">
            Finalmente ensamblamos el <strong class="text-cyan-400">par diferencial AB</strong> 
            con realimentación negativa. En la simulación inyectamos <code class="bg-slate-700 px-2 py-1 rounded text-cyan-300">VCM</code> 
            como entrada inversora y <code class="bg-slate-700 px-2 py-1 rounded text-cyan-300">VDM</code> 
            como no inversora, buscando una ganancia de 2 y un ancho de banda perfecto para nuestra 
            <strong class="text-purple-400">linterna inteligente de bicicletas</strong>.
          </p>
          
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="bg-slate-900/50 rounded-lg p-4 text-center">
              <div class="text-2xl font-bold text-green-400 mb-1">≈ 1.97 V/V</div>
              <div class="text-sm text-gray-400">Ganancia Medida</div>
              <div class="text-xs text-green-300">✓ En línea con simulación</div>
            </div>
            <div class="bg-slate-900/50 rounded-lg p-4 text-center">
              <div class="text-2xl font-bold text-blue-400 mb-1">~40 kHz</div>
              <div class="text-sm text-gray-400">Estabilidad de Fase</div>
              <div class="text-xs text-blue-300">✓ Límite del diseño óptico</div>
            </div>
          </div>
        </div>

        <figure class="mb-8">
          <Image src="/blog/ltspice-opamp.png" alt="Esquemático del OpAmp completo en LTspice con transitorios" width="836" height="524" class="rounded-lg" />
          <figcaption class="text-center mt-3 text-gray-400 text-sm">
            <strong>Fig. 2</strong> – Respuesta AC y estabilidad de fase en la simulación
          </figcaption>
        </figure>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="relative group">
            <Image src="/blog/osc-sine.png" alt="Forma de onda senoidal limpia en el osciloscopio Tektronix" width="768" height="576" class="rounded-lg transition-transform group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <p class="text-white text-sm p-4">Señal limpia en el Tektronix</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Error Section -->
      <section>
        <div class="bg-red-500/10 rounded-xl border border-red-500/30 p-6">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-red-400">El Error que Casi nos Cuesta Todo</h2>
              <p class="text-sm text-gray-400">13 de marzo de 2025</p>
            </div>
          </div>

          <div class="bg-red-900/20 rounded-lg p-5 mb-6">
            <h4 class="text-red-300 font-semibold mb-3 flex items-center">
              <span class="mr-2">🚨</span> El Problema
            </h4>
            <p class="text-gray-300 mb-4">
              Durante las primeras pruebas omitimos el capacitor de compensación y el resultado fue 
              <em class="text-red-400 font-semibold">feedback positivo</em> no deseado: la entrada 
              perdía su forma senoidal y la salida saturaba. Nuestro OpAmp se había convertido en un 
              <strong class="text-red-400">oscilador descontrolado</strong>.
            </p>
            
            <div class="bg-slate-900/50 rounded-lg p-4">
              <p class="text-gray-400 text-sm mb-2">Síntomas identificados:</p>
              <ul class="text-gray-300 text-sm space-y-1">
                <li>• Pérdida de forma senoidal en la entrada</li>
                <li>• Saturación completa en la salida</li>
                <li>• Oscilaciones incontrolables</li>
              </ul>
            </div>
          </div>

          <div class="bg-green-900/20 rounded-lg p-5 mb-6">
            <h4 class="text-green-300 font-semibold mb-4 flex items-center">
              <span class="mr-2">✅</span> La Solución (Paso a Paso)
            </h4>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span class="text-green-400 font-bold text-sm">1</span>
                </div>
                <p class="text-gray-300">
                  <strong class="text-green-400">Resistencias:</strong> Incrementamos de 1 kΩ a 10 kΩ para reducir corrientes parásitas
                </p>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span class="text-green-400 font-bold text-sm">2</span>
                </div>
                <p class="text-gray-300">
                  <strong class="text-green-400">Amplitud:</strong> Ajustamos la amplitud de prueba a 100 mV<sub>pp</sub> para evitar saturación
                </p>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span class="text-green-400 font-bold text-sm">3</span>
                </div>
                <p class="text-gray-300">
                  <strong class="text-green-400">Compensación Miller:</strong> Añadimos un capacitor de 
                  <code class="bg-slate-700 px-2 py-1 rounded text-cyan-300">0.1 µF</code> entre colector y base
                </p>
              </div>
            </div>
          </div>

          <p class="text-gray-300 mb-6">
            Tras la corrección, el osciloscopio mostró una <strong class="text-green-400">señal de salida limpia</strong> 
            y la ganancia se estabilizó, como confirman las lecturas del Fluke.
          </p>

          <figure class="mb-6">
            <Image src="/blog/osc-distortion.png" alt="Forma de onda distorsionada antes de la compensación" width="768" height="576" class="rounded-lg" />
            <figcaption class="text-center mt-3 text-gray-400 text-sm">
              <strong>Fig. 3</strong> – Distorsión (amarillo) vs señal compensada (cian)
            </figcaption>
          </figure>
        </div>
      </section>

      <!-- Key Lesson -->
      <div class="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 border border-cyan-500/30">
        <div class="text-center mb-6">
          <div class="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            La Lección Clave
          </h3>
        </div>
        
        <blockquote class="border-l-4 border-cyan-500 pl-6 italic text-xl text-gray-200 mb-6">
          "Comprender la compensación fue fundamental: sin ella, cualquier OpAmp —por perfecto 
          que parezca en la simulación— puede convertirse en un oscilador no deseado."
        </blockquote>
        
        <div class="bg-slate-900/30 rounded-lg p-6">
          <h4 class="text-cyan-400 font-semibold mb-3 flex items-center">
            <span class="mr-2">💡</span> Aplicación Práctica
          </h4>
          <p class="text-lg font-medium text-gray-200">
            Estas lecciones serán esenciales al integrar el OpAmp definitivo en la 
            <strong class="text-purple-400">linterna automática para bicicleta</strong>: 
            garantizarán un rendimiento robusto y una experiencia de usuario consistente, 
            incluso en condiciones extremas de la carretera.
          </p>
        </div>
      </div>

      <!-- Technical Summary -->
      <div class="bg-slate-800/30 rounded-xl p-6 border border-slate-600">
        <h4 class="text-lg font-semibold text-gray-200 mb-4">📋 Resumen Técnico</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div class="text-center">
            <div class="text-cyan-400 font-bold">Ganancia Final</div>
            <div class="text-gray-300">1.97 V/V</div>
          </div>
          <div class="text-center">
            <div class="text-blue-400 font-bold">Ancho de Banda</div>
            <div class="text-gray-300">40 kHz</div>
          </div>
          <div class="text-center">
            <div class="text-green-400 font-bold">Compensación</div>
            <div class="text-gray-300">0.1 µF Miller</div>
          </div>
        </div>
      </div>
    </div>
  `,
};

/* ---------- NO CAMBIA NADA DE ABAJO ---------- */
export async function generateStaticParams() {
  return [
    { slug: "diseno-opamp-electricaribe" } /* ⬅️ nuevo */,
    { slug: "desarrollo-sensor-luminosidad" },
    { slug: "diseno-circuito-componentes" },
    { slug: "pruebas-campo-validacion" },
    { slug: "impacto-seguridad-ciclista" },
  ];
}

// Fixed: Make the component async and await params
export default async function BlogPostPage({}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <BlogHeader />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-6 hover:bg-gray-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Button>
        </Link>

        {/* Article header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{blogPost.excerpt}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarFallback>{blogPost.authorAvatar}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{blogPost.author}</p>
                <p className="text-sm text-gray-400">{blogPost.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {blogPost.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {blogPost.readTime}
              </div>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
          <Image
            src={blogPost.image || "/placeholder.svg"}
            alt={blogPost.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article content */}
        <article
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        {/* Article footer */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-gray-700">
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
              <Button variant="outline" size="sm" className="border-gray-700">
                <Bookmark className="h-4 w-4 mr-2" />
                Guardar
              </Button>
            </div>

            <Button variant="outline" size="sm" className="border-gray-700">
              <MessageSquare className="h-4 w-4 mr-2" />
              Comentarios (5)
            </Button>
          </div>
        </div>
      </main>

      {/* Related posts */}
      <RelatedPosts />

      <footer className="bg-gray-800 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2025 Electricaribe. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
