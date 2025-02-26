import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to construct metadata for a page
export function constructMetadata({
  title = "Electricaribe: Iluminación",
  description = "Ilumina tu camino con Electricaribe, la solución de iluminación automática para ciclistas. Mejora tu visibilidad y seguridad en cualquier condición de luz.",
  image = "/hero.jpg", // Default image
  icons = "/favicon.ico", // Default favicon
  noIndex = false, // Default indexing option
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    metadataBase: new URL("https://www.electricaribe.me/"), // Base URL for metadata
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website", // Open Graph type
      url: "https://www.electricaribe.me", // Canonical URL
      siteName: "electricaribe", // Site name for Open Graph
      images: [
        {
          url: image, // Image URL for Open Graph
        },
      ],
    },
    twitter: {
      card: "summary_large_image", // Twitter card type
      site: "@oardilac", // Twitter handle of the site
      title,
      description,
      images: [image], // Image for Twitter card
      creator: "@oardilac", // Creator's Twitter handle
    },
    icons,
    applicationName: "electricaribe", // Name of the application
    authors: [{ name: "Oliver Ardila", url: "https://www.electricaribe.me" }], // Author information
    generator: "Next.js", // Generator used
    referrer: "origin", // Referrer policy
    creator: "Oliver Ardila", // Creator's name
    publisher: "electricaribe", // Publisher information
    robots: noIndex ? "noindex, nofollow" : "index, follow", // Robots meta tag based on noIndex flag
    manifest: "https://www.electricaribe.me/manifest.json", // Web app manifest URL
    verification: {
      google: "nu89Oy6CNw8drpQRvc3jPobUcxt7xd4wkjmIr7_T1bE", // Google site verification code
      yandex: "2f2bd53bfa136f72", // Yandex site verification code
    },
    appleWebApp: {
      capable: true, // Indicates if the site is capable of running as a web app on Apple devices
      title:
        "Alquiler de Maquinaria Amarilla y Pesada en Colombia | electricaribe", // Title for Apple Web App
      statusBarStyle: "black-translucent", // Status bar style for Apple Web App
    },
    formatDetection: { telephone: false }, // Disable automatic phone number detection
    abstract:
      "Ilumincacion", // Abstract of the page content
    category: "Producto", // Categories for the page
    classification:
      "E-commerce, Servicios B2C", // Classification for the page
    other: {
      customMeta:
        "Iluminacion.", // Custom metadata
    },
  };
}
