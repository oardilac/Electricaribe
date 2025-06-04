import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      <Button variant="outline" size="icon" className="border-gray-700">
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        className="border-gray-700 bg-blue-600 hover:bg-blue-700"
      >
        1
      </Button>

      <Button variant="outline" className="border-gray-700 hover:bg-gray-700">
        2
      </Button>

      <Button variant="outline" className="border-gray-700 hover:bg-gray-700">
        3
      </Button>

      <Button variant="outline" size="icon" className="border-gray-700">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
