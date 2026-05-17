import { motion } from "framer-motion";
import { Settings, Droplet, Hammer, CheckCircle, Package } from "lucide-react";

const processSteps = [
  { icon: Settings, title: "Design", desc: "CAD/CAM engineering" },
  { icon: Droplet, title: "Casting", desc: "In-house foundry" },
  { icon: Hammer, title: "Machining", desc: "CNC precision" },
  { icon: Settings, title: "Assembly", desc: "Expert fitting" },
  { icon: CheckCircle, title: "Testing", desc: "100% Hydrostatic" },
  { icon: Package, title: "Dispatch", desc: "Global shipping" }
];

export default function Manufacturing() {
  return (
    <section className="py-24 bg-white" data-testid="section-manufacturing">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Manufacturing & Quality</h2>
          <h3 className="text-4xl font-black text-secondary tracking-tight mb-6">
            State-of-the-Art Production
          </h3>
          <p className="text-lg text-muted-foreground">
            From raw material to finished valve, every step is controlled in our advanced Vapi facility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
           <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/factory-floor.png"
              alt="CNC Machining"
              className="w-full h-auto shadow-2xl rounded-sm"
              data-testid="img-cnc"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 p-6 bg-muted/30 border border-border">
              <div className="text-4xl font-black text-primary">100%</div>
              <div className="text-sm font-bold text-secondary uppercase tracking-wider">Hydrostatic<br/>Tested</div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-muted/30 border border-border">
              <div className="text-4xl font-black text-primary">ISO</div>
              <div className="text-sm font-bold text-secondary uppercase tracking-wider">9001:2015<br/>Certified</div>
            </div>
             <div className="flex items-center space-x-4 p-6 bg-muted/30 border border-border">
              <div className="text-4xl font-black text-primary">CNC</div>
              <div className="text-sm font-bold text-secondary uppercase tracking-wider">Precision<br/>Machining</div>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative z-10">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-white border-2 border-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <step.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-bold text-secondary mb-1">{step.title}</h4>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
