import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { BlogHeader } from "@/components/blog/blog-header";
import { RelatedPosts } from "@/components/blog/related-posts";

const blogPost = {
  title: "Funcionamiento Detallado del Prototipo Final",
  excerpt:
    "Análisis técnico completo del sistema final: desde la alimentación con celdas de litio hasta el control PWM del LED Cree.",
  date: "23 Mayo 2025",
  readTime: "12 min",
  author: "Santiago Ureche",
  authorRole: "Design Leader",
  authorAvatar: "SU",
  image: "/blog/prototipo-final.png",
};

export default function FuncionamientoDetalladoPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <BlogHeader />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6 hover:bg-gray-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Button>
        </Link>

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

        <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
          <Image
            src={blogPost.image || "/placeholder.svg"}
            alt={blogPost.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          <p className="text-lg mb-6">
            El sistema final de Electricaribe representa la culminación de meses
            de iteración y refinamiento. Cada componente ha sido cuidadosamente
            seleccionado y optimizado para ofrecer el máximo rendimiento y
            confiabilidad en condiciones reales de uso.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Sistema de Alimentación
          </h2>

          <p className="mb-6">
            El sistema se alimenta mediante un portapilas de dos{" "}
            <strong>celdas de Litio</strong>, cuyo voltaje nominal ronda los{" "}
            <strong>7.4V</strong> recién cargadas. Esta configuración
            proporciona la energía necesaria para alimentar tanto los circuitos
            lógicos como el LED de alta potencia.
          </p>

          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Cadena de Alimentación:
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <span>
                  <strong>Celdas de Litio:</strong> 7.4V nominales (2 × 3.7V)
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <span>
                  <strong>DIP-switch:</strong> Interruptor maestro del
                  dispositivo
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                <span>
                  <strong>Regulador KA7805:</strong> Salida estable de +5V DC
                </span>
              </div>
            </div>
          </div>

          <p className="mb-8">
            Dicho paquete pasa primero por un <strong>DIP-switch</strong> que
            actúa como interruptor maestro del dispositivo. Inmediatamente
            después, la línea positiva ingresa a un{" "}
            <strong>regulador lineal KA7805</strong>, garantizando un riel{" "}
            <strong>+5V DC</strong> estable y seguro para los circuitos lógicos:
            microcontrolador, sensor de luz y referencia analógica.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Sistema de Sensado de Luz
          </h2>

          <p className="mb-6">
            Para medir la iluminancia empleamos una <strong>LDR</strong> en
            configuración de <strong>divisor de voltaje</strong>
            junto con una resistencia fija de <strong>10 kΩ</strong>. El nodo
            intermedio del divisor se conecta al pin
            <strong>A1</strong> del <strong>Arduino Nano</strong>.
          </p>

          <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold mb-3 text-red-400">
              Problema Crítico Resuelto
            </h3>
            <p>
              Originalmente se planeó usar <strong>A0</strong>, pero esta
              entrada resultó defectuosa. La migración a<strong>A1</strong> fue
              la clave para recuperar mediciones coherentes y depurar el fallo
              de encendido del LED. Este problema nos enseñó la importancia de
              tener pines de respaldo en el diseño.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Amplificador Operacional Discreto
          </h2>

          <p className="mb-6">
            El tren PWM no se aplica directamente a la puerta del MOSFET:
            primero atraviesa un{" "}
            <strong>amplificador operacional discreto</strong> que construimos a
            base de <strong>BJTs NPN-PNP</strong>. Este bloque se comporta como{" "}
            <strong>buffer</strong> (ganancia unitaria), proporcionando:
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>
              <strong>Aislamiento</strong> entre la lógica de 5V y la etapa de
              potencia
            </li>
            <li>
              Capacidad de corriente suficiente para cargar la puerta del MOSFET
              sin retardo apreciable
            </li>
            <li>Protección del microcontrolador contra picos de corriente</li>
            <li>Mejora en la velocidad de conmutación del MOSFET</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Control de Potencia del LED
          </h2>

          <p className="mb-6">
            El dispositivo luminoso es un{" "}
            <strong>LED Cree alta potencia</strong>. Para gobernar su corriente
            se seleccionó un <strong>MOSFET canal N IRF748N</strong> con las
            siguientes características:
          </p>

          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Especificaciones del MOSFET IRF748N:
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">R_DS(on):</span> ≈ 23 mΩ @ V_GS =
                10V
              </li>
              <li>
                <span className="font-medium">Voltaje de puerta:</span> 0-5V
                (señal bufferizada)
              </li>
              <li>
                <span className="font-medium">Corriente máxima:</span> Limitada
                por el regulador KA7805
              </li>
              <li>
                <span className="font-medium">Disipación térmica:</span>{" "}
                Optimizada para operación continua
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Solución al Problema de Sobrecalentamiento
          </h2>

          <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold mb-3 text-red-400">
              Problema Inicial
            </h3>
            <p className="mb-4">
              Cuando el proyecto se alimentaba directamente con 7V, la caída
              total se aplicaba al LED, resultando en:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Picos de corriente de <strong>950 mA</strong>
              </li>
              <li>Sobrecalentamiento del encapsulado MOSFET</li>
              <li>Degradación prematura del LED Cree</li>
              <li>Inestabilidad térmica del sistema</li>
            </ul>
          </div>

          <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold mb-3 text-green-400">
              Solución Implementada
            </h3>
            <p className="mb-4">
              La introducción del <strong>regulador KA7805</strong> mitigó
              completamente el riesgo:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Corriente pico limitada a <strong>≈ 350 mA</strong>
              </li>
              <li>Operación dentro de la hoja de datos del LED Cree</li>
              <li>Temperatura de operación estable</li>
              <li>Mayor vida útil de todos los componentes</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Diagrama de Bloques del Sistema
          </h2>

          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <div className="text-center">
              <div className="inline-block">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="bg-blue-600 px-4 py-2 rounded">
                      Celdas Li-ion 7.4V
                    </div>
                    <span>→</span>
                    <div className="bg-green-600 px-4 py-2 rounded">
                      DIP Switch
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <span>↓</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="bg-yellow-600 px-4 py-2 rounded">
                      Regulador KA7805
                    </div>
                    <span>→</span>
                    <div className="bg-purple-600 px-4 py-2 rounded">
                      +5V Estable
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <span>↓</span>
                  </div>
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <div className="bg-orange-600 px-3 py-2 rounded mb-2">
                        LDR + 10kΩ
                      </div>
                      <div className="text-sm">Pin A1</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-red-600 px-3 py-2 rounded mb-2">
                        Arduino Nano
                      </div>
                      <div className="text-sm">Procesamiento</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-indigo-600 px-3 py-2 rounded mb-2">
                        PWM Pin D9
                      </div>
                      <div className="text-sm">Control</div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <span>↓</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="bg-pink-600 px-4 py-2 rounded">
                      OpAmp Discreto
                    </div>
                    <span>→</span>
                    <div className="bg-cyan-600 px-4 py-2 rounded">
                      MOSFET IRF748N
                    </div>
                    <span>→</span>
                    <div className="bg-white text-black px-4 py-2 rounded">
                      LED Cree
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Rendimiento y Eficiencia
          </h2>

          <p className="mb-6">
            El sistema final de Electricaribe logra un equilibrio óptimo entre
            rendimiento lumínico y eficiencia energética:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Rendimiento Lumínico</h4>
              <ul className="text-sm space-y-1">
                <li>• Flujo luminoso máximo: 350 lúmenes</li>
                <li>• Control PWM: 0-100% intensidad</li>
                <li>• Tiempo de respuesta: &lt;50ms</li>
                <li>• Uniformidad del haz: 95%</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Eficiencia Energética</h4>
              <ul className="text-sm space-y-1">
                <li>• Consumo en standby: 15mA</li>
                <li>• Consumo máximo: 380mA</li>
                <li>• Autonomía típica: 8-12 horas</li>
                <li>• Eficiencia del sistema: 87%</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Conclusiones del Desarrollo
          </h2>

          <p className="mb-6">
            El desarrollo del prototipo final de Electricaribe ha demostrado que
            es posible crear un sistema de iluminación adaptativa robusto y
            eficiente utilizando componentes accesibles y técnicas de ingeniería
            bien fundamentadas.
          </p>

          <p className="text-lg font-medium">
            La clave del éxito residió en la iteración constante, la resolución
            metódica de problemas técnicos y la optimización continua del
            diseño. Cada desafío superado nos acercó más a un producto final que
            realmente mejora la seguridad de los ciclistas.
          </p>
        </article>

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
          </div>
        </div>
      </main>

      <RelatedPosts />

      <footer className="bg-gray-800 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2025 Electricaribe. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
