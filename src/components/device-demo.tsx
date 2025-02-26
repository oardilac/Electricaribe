"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

export function DeviceDemo() {
  const [isOn, setIsOn] = useState(false);
  const [brightness, setBrightness] = useState(50);

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">
        Demostración Interactiva
      </h2>
      <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg space-y-6">
        <div className="flex items-center justify-between">
          <span>Encendido/Apagado</span>
          <Switch checked={isOn} onCheckedChange={setIsOn} />
        </div>
        <div className="space-y-2">
          <span>Luminosidad Ambiental</span>
          <Slider
            value={[brightness]}
            onValueChange={(value) => setBrightness(value[0])}
            max={100}
            step={1}
          />
        </div>
        <div
          className="h-32 rounded-lg flex items-center justify-center"
          style={{
            backgroundColor: isOn
              ? `hsl(220, 100%, ${brightness}%)`
              : "hsl(220, 100%, 5%)",
            transition: "background-color 0.3s ease",
          }}
        >
          <span className="text-xl font-bold">
            {isOn
              ? brightness > 66
                ? "Alta"
                : brightness > 33
                ? "Media"
                : "Baja"
              : "Apagado"}
          </span>
        </div>
      </div>
    </section>
  );
}
