export type Industry = {
  id: string;
  name: string;
  icon: string;
};

export const industries: Industry[] = [
  { id: "paper", name: "Paper Industry", icon: "FileText" },
  { id: "pulp", name: "Pulp Industry", icon: "Trees" },
  { id: "wastewater", name: "Wastewater", icon: "Droplets" },
  { id: "mining", name: "Mining", icon: "Pickaxe" },
  { id: "chemical", name: "Chemical Plants", icon: "FlaskConical" },
  { id: "power", name: "Power Plants", icon: "Zap" },
  { id: "sugar", name: "Sugar Industry", icon: "Candy" },
  { id: "slurry", name: "Slurry Applications", icon: "Waves" }
];
