import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Santiago Ureche", role: "Design Leader", avatar: "SU" },
  { name: "Oliver Ardila", role: "COM Officer", avatar: "OA" },
  { name: "Solangie Zuñiga", role: "Archivist", avatar: "SZ" },
  { name: "Jorge Diaz", role: "R & F Manager", avatar: "JD" },
];

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Sobre Electricaribe
        </h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-300 mb-6">
            Electricaribe nació de la necesidad de mejorar la seguridad de los
            ciclistas en condiciones de iluminación variable. Nuestro equipo de
            ingenieros y entusiastas del ciclismo se unió para crear una
            solución innovadora que se adapta automáticamente a las condiciones
            de luz ambiental.
          </p>
          <p className="text-lg text-gray-300">
            Con Electricaribe, los ciclistas pueden concentrarse en el camino,
            sabiendo que su iluminación siempre será óptima, mejorando su
            visibilidad y seguridad en cualquier condición.
          </p>
        </div>
        <h3 className="text-2xl font-bold text-center mb-8">Nuestro Equipo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarFallback>{member.avatar}</AvatarFallback>
              </Avatar>
              <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
