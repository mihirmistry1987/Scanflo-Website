import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import NotFound from "./not-found";

export default function ProductDetail() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);

  if (!product) return <NotFound />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-screen pt-24"
    >
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 py-12">
        <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-primary font-medium mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-muted/30 p-12 flex items-center justify-center border border-border">
            <img src={product.image} alt={product.name} className="w-full max-w-md object-contain" />
          </div>
          
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary font-bold px-3 py-1 text-sm tracking-widest uppercase">
              {product.series}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
              {product.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>
            
            <div className="py-6 border-y border-border">
              <h3 className="font-bold text-secondary mb-4 uppercase tracking-wide">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4 flex gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 font-bold h-14">
                  Request Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-none border-secondary text-secondary hover:bg-secondary hover:text-white px-8 font-bold h-14">
                Download Specs
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
