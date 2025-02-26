import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Electricaribe Device"
        fill
        className="object-cover object-center brightness-50"
        priority
      />

      {/* Diagonal Overlay */}
      <div className="absolute bottom-0 right-0 w-1/3 h-32 bg-gradient-to-tr from-blue-500 to-transparent transform -skew-y-6" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          ELECTRICARIBE
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Ajuste automático de intensidad de luz para ciclistas basado en la
          luminosidad ambiental
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Tu correo electrónico"
            className="flex-grow"
          />
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
          >
            Suscribirse
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </div>
    </section>
  );
}
