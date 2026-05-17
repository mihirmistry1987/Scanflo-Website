export type Industry = {
  id: string;
  name: string;
  icon: string;
  image: string;
};

export const industries: Industry[] = [
  { id: "paper", name: "Paper Industry", icon: "FileText", image: "/images/industries/paper.jpg" },
  { id: "pulp", name: "Pulp Industry", icon: "Trees", image: "/images/industries/pulp.jpg" },
  { id: "wastewater", name: "Wastewater", icon: "Droplets", image: "/images/industries/wastewater.jpg" },
  { id: "mining", name: "Mining", icon: "Pickaxe", image: "/images/industries/mining.jpg" },
  { id: "chemical", name: "Chemical Plants", icon: "FlaskConical", image: "/images/industries/chemical.jpg" },
  { id: "power", name: "Power Plants", icon: "Zap", image: "/images/industries/power.jpg" },
  { id: "sugar", name: "Sugar Industry", icon: "Candy", image: "/images/industries/sugar.jpg" },
  { id: "slurry", name: "Slurry Applications", icon: "Waves", image: "/images/industries/slurry.jpg" },
];
