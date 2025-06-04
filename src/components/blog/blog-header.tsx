import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BlogHeader() {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-500">
            Electricaribe
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white">
              Inicio
            </Link>
            <Link href="/blog" className="text-white font-medium">
              Blog
            </Link>
          </nav>

          <Button className="bg-blue-600 hover:bg-blue-700">
            Comprar Ahora
          </Button>
        </div>
      </div>
    </header>
  );
}
