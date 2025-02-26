"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Detección",
    description: "El sensor detecta la luminosidad ambiental con precisión.",
  },
  {
    title: "Procesamiento",
    description:
      "El microcontrolador procesa la información recibida del sensor.",
  },
  {
    title: "Ajuste",
    description:
      "Se ajusta la intensidad del LED automáticamente según las condiciones.",
  },
  {
    title: "Iluminación Óptima",
    description:
      "El ciclista disfruta de una iluminación perfecta para cada situación.",
  },
];

export function HowItWorksSection() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length);
  const prevStep = () =>
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Cómo Funciona</h2>
        <div className="max-w-4xl mx-auto flex items-center">
          <Button variant="ghost" onClick={prevStep} className="mr-4">
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <div className="flex-grow text-center">
            <h3 className="text-2xl font-bold mb-4">
              {steps[currentStep].title}
            </h3>
            <p className="text-xl text-gray-300">
              {steps[currentStep].description}
            </p>
          </div>
          <Button variant="ghost" onClick={nextStep} className="ml-4">
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
        <div className="flex justify-center mt-8">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentStep ? "bg-blue-500" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
