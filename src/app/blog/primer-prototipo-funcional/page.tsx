import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { BlogHeader } from "@/components/blog/blog-header";
import { RelatedPosts } from "@/components/blog/related-posts";

const blogPost = {
  title: "Primer Prototipo Funcional – Arduino Uno, LED y LDR",
  excerpt:
    "El experimento que cambió todo: nuestro primer montaje exitoso con Arduino Uno, un simple LED y LDR.",
  date: "30 Abril 2025",
  readTime: "8 min",
  author: "Jorge Diaz",
  authorRole: "R & F Manager",
  authorAvatar: "JD",
  image: "/blog/primer-prototipo.png",
};

export default function PrimerPrototipoPage() {
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
            El <strong>primer experimento exitoso</strong> marcó un hito
            fundamental en el desarrollo de Electricaribe. Después de múltiples
            intentos y ajustes, finalmente logramos crear un sistema funcional
            que respondía automáticamente a los cambios de luminosidad
            ambiental.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Componentes del Montaje Inicial
          </h2>

          <p className="mb-6">
            El montaje minimalista que cambió todo consistía únicamente en:
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>
              <strong>Arduino Uno</strong> conectado al portátil vía USB (5 V)
            </li>
            <li>
              Un <strong>LDR (Light Dependent Resistor)</strong> y resistencia
              de 10 kΩ formando divisor en <strong>A0</strong>
            </li>
            <li>
              Un <strong>LED blanco de 5 mm</strong> pilotado desde{" "}
              <strong>D9</strong> mediante PWM
            </li>
          </ul>

          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Configuración del Circuito:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Sensor de Luz (LDR)</h4>
                <ul className="text-sm space-y-1">
                  <li>• Conexión en divisor de voltaje</li>
                  <li>• Resistencia fija: 10 kΩ</li>
                  <li>• Entrada analógica: A0</li>
                  <li>• Rango de lectura: 0-1023</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Control de LED</h4>
                <ul className="text-sm space-y-1">
                  <li>• Salida PWM: Pin D9</li>
                  <li>• LED blanco estándar 5mm</li>
                  <li>• Resistencia limitadora incluida</li>
                  <li>• Control de intensidad: 0-255</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Hallazgos Clave del Experimento
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">
                1. Calibración Dinámica Necesaria
              </h3>
              <p>
                Ajustamos los umbrales varias veces durante las pruebas.
                Concluimos que la <strong>fuente de luz y el ambiente</strong>
                cambian significativamente la calibración. Esto nos llevó a
                desarrollar un sistema de calibración automática en versiones
                posteriores.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">
                2. Viabilidad del Control PWM
              </h3>
              <p>
                Esta fase demostró la{" "}
                <strong>viabilidad del control PWM</strong> para regular la
                intensidad luminosa. Logramos hacer oscilar el LED sin flicker
                perceptible, estableciendo las bases técnicas para escalar a LED
                Cree y control mediante MOSFET.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">
                3. Respuesta en Tiempo Real
              </h3>
              <p>
                El sistema respondía instantáneamente a los cambios de luz
                ambiental. Cubrir el LDR con la mano resultaba en un aumento
                inmediato de la intensidad del LED, validando el concepto
                fundamental de Electricaribe.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Código del Prototipo</h2>

          <div className="bg-gray-900 p-6 rounded-lg mb-8 overflow-x-auto">
            <pre className="text-sm">
              <code>{`// Código básico del primer prototipo
const int ldrPin = A0;      // Pin del sensor LDR
const int ledPin = 9;       // Pin PWM para el LED

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int ldrValue = analogRead(ldrPin);
  
  // Mapear valor del LDR a intensidad del LED (invertido)
  int ledBrightness = map(ldrValue, 0, 1023, 255, 0);
  
  // Aplicar PWM al LED
  analogWrite(ledPin, ledBrightness);
  
  // Debug por serial
  Serial.print("LDR: ");
  Serial.print(ldrValue);
  Serial.print(" | LED: ");
  Serial.println(ledBrightness);
  
  delay(100);
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Lecciones Aprendidas</h2>

          <p className="mb-4">
            Este primer prototipo nos enseñó lecciones fundamentales que guiaron
            todo el desarrollo posterior:
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>
              <strong>Simplicidad funcional:</strong> Un concepto simple pero
              bien ejecutado puede ser muy efectivo
            </li>
            <li>
              <strong>Importancia de la calibración:</strong> Los sensores
              requieren ajustes según el entorno de uso
            </li>
            <li>
              <strong>Control PWM efectivo:</strong> La modulación por ancho de
              pulsos es ideal para control de intensidad
            </li>
            <li>
              <strong>Necesidad de escalabilidad:</strong> El concepto
              funcionaba, pero necesitábamos más potencia lumínica
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            El Camino Hacia el Prototipo Final
          </h2>

          <p className="mb-6">
            Este experimento exitoso fue nuestra{" "}
            <strong>prueba de concepto</strong> definitiva. Demostró que la idea
            central de Electricaribe era viable y nos dio la confianza para
            invertir en componentes de mayor calidad y desarrollar un sistema
            más robusto.
          </p>

          <p className="text-lg font-medium">
            Sin este primer paso crucial, Electricaribe nunca habría
            evolucionado hacia el sistema sofisticado que conocemos hoy. Fue el
            momento en que una idea se convirtió en realidad tangible.
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
