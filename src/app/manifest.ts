import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Facilities Management",
    short_name: "Facilities",
    description: "Facilities management and property maintenance in Botswana.",
    start_url: "/",
    display: "standalone",
    background_color: "#245b8f",
    theme_color: "#245b8f",
    orientation: "portrait-primary",
    lang: "en",
    categories: ["business", "productivity", "utilities"],
    icons: [
      { src: "/africhiko-icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/africhiko-icon.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" }
    ]
  };
}
