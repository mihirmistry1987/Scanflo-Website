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
    image: "/images/product-sa-series.png",
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
    id: "pneumatic",
    name: "Pneumatic Actuated Valve",
    series: "PA Series",
    description: "Automated control valve with spring-return cylinder for fail-safe operations in critical environments.",
    features: ["Spring-Return Cylinder", "Fail-Safe Operation", "Automated Control"],
    image: "/images/product-pneumatic.png",
    category: "Automated"
  },
  {
    id: "electric",
    name: "Electric Actuated Valve",
    series: "EA Series",
    description: "Motorized valve designed for precise positioning and reliable remote control capabilities.",
    features: ["Motorized Operation", "Precise Positioning", "Remote Control"],
    image: "/images/product-sa-series.png", // placeholder
    category: "Automated"
  },
  {
    id: "hydraulic",
    name: "Hydraulic Actuated Valve",
    series: "HA Series",
    description: "Heavy-duty high-torque hydraulic cylinder valve engineered for the most demanding applications.",
    features: ["High-Torque Cylinder", "Heavy-Duty", "Robust Construction"],
    image: "/images/product-sb-series.png", // placeholder
    category: "Automated"
  },
  {
    id: "chain-wheel",
    name: "Chain Wheel Operated Valve",
    series: "CW Series",
    description: "Large bore manual operation valve featuring a chain wheel operator for hard-to-reach installations.",
    features: ["Large Bore", "Manual Operation", "Chain Wheel Operator"],
    image: "/images/product-sa-series.png", // placeholder
    category: "Manual"
  },
  {
    id: "gearbox",
    name: "Gearbox Operated Valve",
    series: "GB Series",
    description: "High-torque manual operation valve utilizing worm gear reduction for smooth and controlled flow management.",
    features: ["Worm Gear Reduction", "High-Torque", "Smooth Operation"],
    image: "/images/product-sb-series.png", // placeholder
    category: "Manual"
  }
];
