import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function Products() {
  return (
    <section className="py-24 bg-muted/30" data-testid="section-products">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Our Products</h2>
          <h3 className="text-4xl font-black text-secondary tracking-tight mb-6">
            Engineered for Extreme Environments
          </h3>
          <p className="text-lg text-muted-foreground">
            Our comprehensive range of Knife Gate Valves covers every application, from basic manual isolation to precise automated control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              data-testid={`card-product-${product.id}`}
            >
              <div className="aspect-square bg-muted/20 p-8 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-bold text-primary mb-2">{product.series}</div>
                <h4 className="text-xl font-bold text-secondary mb-4 line-clamp-2 min-h-[3.5rem]">{product.name}</h4>
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={`/products/${product.id}`}>
                  <Button variant="outline" className="w-full rounded-none border-secondary text-secondary hover:bg-secondary hover:text-white group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-colors">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
