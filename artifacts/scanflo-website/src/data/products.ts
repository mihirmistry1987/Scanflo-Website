export type Product = {
  id: string;
  name: string;
  series: string;
  description: string;
  features: string[];
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "sa-series",
    name: "Uni-Directional Knife Gate Valve",
    series: "SA Series",
    description: "High-performance unidirectional flow knife gate valve with resilient seat, designed to ANSI/DIN standards.",
    features: ["Unidirectional Flow", "Resilient Seat", "ANSI/DIN Standards"],
    image: "/images/uni-directional-valve.jpg",
    category: "Manual"
  },
  {
    id: "sb-series",
    name: "Bi-Directional Knife Gate Valve",
    series: "SB Series",
    description: "Robust bidirectional shutoff valve featuring a metal seat ideal for slurry applications and heavy-duty usage.",
    features: ["Bidirectional Shutoff", "Metal Seat", "Slurry Applications"],
    image: "/images/product-sb-series.png",
    category: "Manual"
  },
  {
    id: "long-plate",
    name: "Through Going Long Plate Valve",
    series: "ST Series",
    description: "Extended long plate design for through-going installation in pipelines requiring unobstructed bore and minimal flow resistance.",
    features: ["Full Bore Opening", "Through Going Design", "Low Flow Resistance"],
    image: "/images/product-sb-series.png",
    category: "Manual"
  },
  {
    id: "double-knife",
    name: "Double Knife Gate Valve",
    series: "SD Series",
    description: "Dual-blade knife gate valve engineered for demanding isolation duties where positive shutoff on both sides is required.",
    features: ["Dual Blade Design", "Positive Shutoff", "Heavy-Duty Isolation"],
    image: "/images/product-sa-series.png",
    category: "Manual"
  },
  {
    id: "mining",
    name: "Mining Valve",
    series: "SM Series",
    description: "Ruggedised knife gate valve built to withstand the harshest mining environments including abrasive slurries and high solids content.",
    features: ["Abrasion Resistant", "High Solids Handling", "Heavy-Duty Construction"],
    image: "/images/product-pneumatic.png",
    category: "Automated"
  },
  {
    id: "special",
    name: "Specially Engineered Valve",
    series: "SE Series",
    description: "Custom-engineered knife gate valves designed to exact client specifications for unique process conditions and non-standard requirements.",
    features: ["Custom Specifications", "Non-Standard Sizes", "Application-Specific Design"],
    image: "/images/product-sb-series.png",
    category: "Manual"
  },
];
