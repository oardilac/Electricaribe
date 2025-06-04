import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface FeaturedPostProps {
  post: {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    author: string;
    authorRole: string;
    slug: string;
    image: string;
  };
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  // Extraer las iniciales del autor para el avatar
  const authorInitials = post.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-64 lg:h-full">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent lg:bg-gradient-to-r" />
        </div>

        <div className="p-8 lg:p-10 relative">
          <div className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-4">
            Artículo Destacado
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{post.title}</h2>

          <p className="text-gray-300 mb-6">{post.excerpt}</p>

          <div className="flex items-center mb-6">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarFallback>{authorInitials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-sm text-gray-400">{post.authorRole}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            <Link href={`/blog/${post.slug}`}>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Leer artículo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
