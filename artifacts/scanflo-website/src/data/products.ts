export type Product = {
  id: string;
  name: string;
  series: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  actuatorOptions: string;
  materials: { part: string; material: string }[];
  ctaSentence: string;
  image: string;
  imageFrame?: "portrait" | "square";
  category: string;
};

export const products: Product[] = [
  {
    id: "sa-series",
    name: "Uni-Directional Knife Gate Valve",
    series: "SA Series",
    description: "High-performance unidirectional flow knife gate valve with resilient seat, designed to ANSI/DIN standards.",
    features: [
      "One piece body design with internal cast in gate wedges and guides for tighter shut off.",
      "Full port design for greater flow capacity & minimal pressure drop.",
      "Stainless steel gate grinded on both sides to avoid jamming and seat damage.",
      "Standard metal to metal seat (Optional: metal to soft seated).",
      "O' port as standard. Other options: V port, special materials, fabricated valves."
    ],
    specs: [
      { label: "Size Range", value: "2″ (50 NB) to 28″ (700 NB)" },
      { label: "Flange Standard", value: "ASME B16.5 CL150 / DIN PN10 / PN16" },
      { label: "Actuation", value: "Manual, Pneumatic, Electric & more" }
    ],
    actuatorOptions: "Manual Handwheel, Pneumatic, Bevel Gearbox, Hand Lever, Hydraulic, Electric, Chainwheel.",
    materials: [
      { part: "Body", material: "CF8, CF8M" },
      { part: "Gate", material: "SS304, SS316" },
      { part: "Seat", material: "Metal Seat / Soft Seat" },
      { part: "Packing", material: "PTFE Impregnated Fibre" },
      { part: "Gland Follower", material: "CF8, CF8M" },
      { part: "Stem", material: "SS304" },
      { part: "Stem Nut", material: "Forged PB" },
      { part: "Yoke", material: "Carbon Steel" },
      { part: "Seat Ring", material: "SS304, SS316" },
      { part: "Actuation", material: "Manual" },
      { part: "Handwheel", material: "SG Iron" },
      { part: "Stem Cover", material: "Carbon Steel" }
    ],
    ctaSentence: "Our engineers can design SA Series valves to your exact process requirements.",
    image: "/images/uni-directional-valve.jpg",
    category: "Manual"
  },
  {
    id: "sb-series",
    name: "Bi-Directional Knife Gate Valve",
    series: "SB Series",
    description: "Robust bidirectional shutoff valve featuring a metal seat ideal for slurry applications and heavy-duty usage.",
    features: [
      "Two-piece body design with internal precision machining for a fully bidirectional seal.",
      "Resilient elastomer U-seal provides bubble-tight shutoff in both flow directions.",
      "Gate passes completely through the seal for smooth, non-clogging operation.",
      "Designed without cavities where media can build up and restrict valve closure.",
      "Ideal for dense slurries, wastewater, and thick media where backflow prevention is critical."
    ],
    specs: [
      { label: "Size Range", value: "2″ (50 NB) to 24″ (600 NB)" },
      { label: "Flange Standard", value: "ASME B16.5 CL150 / EN1092 PN10" },
      { label: "Pressure Rating", value: "150 PSI (10 Bar) max" }
    ],
    actuatorOptions: "Handwheel, Pneumatic Cylinder, Electric Actuator, Hydraulic Cylinder, Bevel Gearbox.",
    materials: [
      { part: "Body", material: "WCB, CF8, CF8M" },
      { part: "Gate", material: "SS304, SS316, SS317L" },
      { part: "U-Seal", material: "EPDM, NBR, Viton, PTFE" },
      { part: "Packing", material: "PTFE / Graphite" },
      { part: "Gland Follower", material: "Cast Steel / Stainless Steel" },
      { part: "Stem", material: "SS304 / SS316" },
      { part: "Stem Nut", material: "Bronze / Brass" },
      { part: "Yoke", material: "Carbon Steel Epoxy Coated" },
      { part: "Support Plates", material: "A36 Carbon Steel" },
      { part: "Handwheel", material: "Cast Iron" }
    ],
    ctaSentence: "Ensure fail-proof bidirectional isolation in your critical slurry lines with the SB Series.",
    image: "/images/bi-directional-valve-150nb.jpg",
    imageFrame: "square",
    category: "Manual"
  },
  {
    id: "long-plate",
    name: "Through Going Long Plate Valve",
    series: "ST Series",
    description: "Extended long plate design for through-going installation in pipelines requiring unobstructed bore and minimal flow resistance.",
    features: [
      "Through-going gate design ensures a 100% full bore, completely eliminating flow resistance.",
      "Two-piece bolted body houses dual elastomer sleeves for bubble-tight shutoff.",
      "When open, the gate hole perfectly aligns with the pipeline, protecting internal parts.",
      "Self-cleaning mechanism expels solids out the bottom during closure, preventing jams.",
      "Perfect for high-density mining slurries, paper pulp, and heavy ash handling systems."
    ],
    specs: [
      { label: "Size Range", value: "3″ (80 NB) to 24″ (600 NB)" },
      { label: "Flange Standard", value: "ASME B16.5 CL150 / PN10" },
      { label: "Face to Face", value: "TAPPI / MSS SP-81" }
    ],
    actuatorOptions: "Pneumatic Double Acting Cylinder, Electric Motor, Hydraulic, Bevel Gearbox.",
    materials: [
      { part: "Body", material: "Ductile Iron, WCB, CF8M" },
      { part: "Gate", material: "SS316, Duplex 2205, 17-4PH" },
      { part: "Sleeves", material: "Natural Rubber, EPDM, Polyurethane" },
      { part: "Packing", material: "PTFE with Silicone Core" },
      { part: "Gland", material: "Ductile Iron / Stainless" },
      { part: "Stem", material: "SS304 / SS316" },
      { part: "Yoke", material: "Structural Carbon Steel" },
      { part: "Scraper", material: "PTFE / Bronze" },
      { part: "Hardware", material: "Zinc Plated Steel / SS304" },
      { part: "Bottom Cover", material: "Blind flange with flush port" }
    ],
    ctaSentence: "Eliminate pipeline turbulence and wear with our zero-resistance long plate valves.",
    image: "/images/long-plate-valve-st-no-bg.png",
    imageFrame: "square",
    category: "Manual"
  },
  {
    id: "double-knife",
    name: "Double Knife Gate Valve",
    series: "SD Series",
    description: "Dual-blade knife gate valve engineered for demanding isolation duties where positive shutoff on both sides is required.",
    features: [
      "Dual independent gates close from opposite sides to provide absolute isolation.",
      "Central purge port allows for bleeding, flushing, or double block-and-bleed verification.",
      "Engineered for hazardous chemicals and critical high-pressure steam applications.",
      "Redundant seating arrangement guarantees zero leakage even in severe cyclic duty.",
      "Compact face-to-face dimension compared to traditional double isolation arrangements."
    ],
    specs: [
      { label: "Size Range", value: "4″ (100 NB) to 36″ (900 NB)" },
      { label: "Flange Standard", value: "ASME B16.5 CL150 / CL300" },
      { label: "Temp Range", value: "Up to 600°C (1112°F)" }
    ],
    actuatorOptions: "Synchronized Dual Pneumatic Cylinders, Tandem Electric Actuators, Hydraulic Systems.",
    materials: [
      { part: "Body", material: "CF8M, CF3M, Alloy 20" },
      { part: "Gates (2x)", material: "SS316, Hastelloy C, Titanium" },
      { part: "Seats", material: "Stellite overlaid metal / PTFE" },
      { part: "Packing", material: "Flexible Graphite" },
      { part: "Gland Follower", material: "SS316" },
      { part: "Stems (2x)", material: "SS316 / Nitronic 50" },
      { part: "Yokes (2x)", material: "Heavy Duty Carbon Steel" },
      { part: "Purge Port", material: "NPT Threaded / Flanged" },
      { part: "Bolting", material: "A193 B8M / A194 8M" },
      { part: "Linkage", material: "SS304 Synchronizing bar" }
    ],
    ctaSentence: "Achieve verifiable zero-leakage isolation with our engineered double gate technology.",
    image: "/images/double-knife-valve-two-way-no-bg.png",
    imageFrame: "square",
    category: "Manual"
  },
  {
    id: "mining",
    name: "Mining Valve",
    series: "SM Series",
    description: "Ruggedised knife gate valve built to withstand the harshest mining environments including abrasive slurries and high solids content.",
    features: [
      "Extra-thick polyurethane or natural rubber sleeves absorb extreme abrasion.",
      "Robust wide-body design withstands severe external piping loads and heavy vibrations.",
      "Hardened stainless steel or alloy gate slices through high-concentration solids and scale.",
      "Fully enclosed lower body prevents environmental discharge during valve cycling.",
      "Easily replaceable wear rings and field-serviceable sleeves minimize plant downtime."
    ],
    specs: [
      { label: "Size Range", value: "2″ (50 NB) to 36″ (900 NB)" },
      { label: "Pressure Rating", value: "150 PSI to 300 PSI" },
      { label: "Slurry Content", value: "Up to 65% by weight" }
    ],
    actuatorOptions: "Heavy-Duty Hydraulic Cylinder, Oversized Pneumatic Cylinder, Bevel Gearbox.",
    materials: [
      { part: "Body", material: "SG Iron / Cast Steel" },
      { part: "Gate", material: "17-4PH Stainless, Duplex, Hard-Chrome Plated" },
      { part: "Sleeves", material: "Natural Rubber, Polyurethane" },
      { part: "Packing", material: "Multi-layer Kevlar/PTFE" },
      { part: "Stem", material: "SS316" },
      { part: "Yoke", material: "Reinforced Welded Steel" },
      { part: "Deflector Cone", material: "Ni-Hard / High Chrome" },
      { part: "Fasteners", material: "Grade 8 Zinc Plated" },
      { part: "Coating", material: "High-build Epoxy (300+ microns)" },
      { part: "Splash Guard", material: "Transparent Lexan" }
    ],
    ctaSentence: "Keep your mineral processing lines running longer with valves built for extreme abrasion.",
    image: "/images/mining-valve-kgd-front-no-bg.png",
    imageFrame: "square",
    category: "Automated"
  },
  {
    id: "special",
    name: "Specially Engineered Valve",
    series: "SE Series",
    description: "Custom-engineered knife gate valves designed to exact client specifications for unique process conditions and non-standard requirements.",
    features: [
      "Customized face-to-face dimensions for drop-in replacement of obsolete valve models.",
      "Exotic metallurgy options including Titanium, Hastelloy, Inconel, and Super Duplex.",
      "Specialized port geometries (V-port, pentagonal) for precise flow throttling.",
      "Extreme temperature extensions, steam-jacketed bodies, and cryogenic configurations.",
      "Full NDE and hydro-testing protocols tailored to your QA specs."
    ],
    specs: [
      { label: "Size Range", value: "Custom up to 60″ (1500 NB)" },
      { label: "Flange Standard", value: "ANSI, DIN, JIS, AS, Custom" },
      { label: "Certification", value: "SIL 2/3, ATEX, NACE MR0175" }
    ],
    actuatorOptions: "Fail-Safe Systems, Smart Positioners, Solar-Powered Actuation, Subsea Hydraulic.",
    materials: [
      { part: "Body", material: "Client Specified (Alloy 20, Duplex, etc.)" },
      { part: "Gate", material: "Client Specified with optional coatings" },
      { part: "Seat", material: "Engineered Polymers or Hard-faced Metal" },
      { part: "Packing", material: "Live-loaded high-temp/cryo graphite" },
      { part: "Yoke", material: "Custom extended or low-profile" },
      { part: "Stem", material: "High-tensile exotic alloys" },
      { part: "Accessories", material: "Limit switches, Solenoids, Air sets" },
      { part: "Testing", material: "PMI, Radiography, Dye Penetrant" },
      { part: "Documentation", material: "Full EN 10204 3.1 / 3.2 certs" }
    ],
    ctaSentence: "Bring us your most challenging process parameters; our design team will engineer the solution.",
    image: "/images/technical-spec.png",
    category: "Manual"
  }
];
