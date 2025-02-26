"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el email a tu backend
    console.log("Email submitted:", email);
    toast({
      title: "¡Gracias por tu interés!",
      description: "Te mantendremos informado sobre Electricaribe.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-blue-600 rounded-3xl">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">
          Únete a la Revolución de la Iluminación Ciclista
        </h2>
        <p className="text-xl mb-8">
          Sé el primero en conocer cuándo Electricaribe estará disponible y
          recibe ofertas exclusivas para early adopters.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow max-w-md bg-white text-gray-900"
          />
          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold"
          >
            Suscribirse
          </Button>
        </form>
      </div>
    </section>
  );
}
