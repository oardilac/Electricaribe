import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
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

export function BlogCard({ post }: BlogCardProps) {
  // Extraer las iniciales del autor para el avatar
  const authorInitials = post.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full bg-gray-800 border-gray-700 hover:border-blue-500 transition-all hover:shadow-md hover:shadow-blue-900/20 overflow-hidden group">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>

        <CardHeader className="pb-2">
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
        </CardHeader>

        <CardContent>
          <p className="text-gray-300 line-clamp-3 mb-4">{post.excerpt}</p>
        </CardContent>

        <CardFooter className="flex justify-between border-t border-gray-700 pt-4">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarFallback className="text-xs">
                {authorInitials}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm">{post.author}</span>
          </div>

          <div className="flex items-center space-x-3 text-gray-400 text-xs">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {post.readTime}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
