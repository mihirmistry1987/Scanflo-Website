import { Link } from "wouter";
import scanfloLogo from "@assets/Scanflo_Logo_1778997253423.png";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8" data-testid="footer">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="bg-white rounded px-3 py-2 inline-block">
                <img
                  src={scanfloLogo}
                  alt="Scanflo Valves"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-accent/80 text-sm leading-relaxed">
              Premium industrial knife gate valves engineered for extreme environments. Precision manufacturing from our state-of-the-art foundry in Gujarat, India.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3 text-sm text-accent/80">
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">Industries Served</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Scanflo</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Download Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg tracking-wide uppercase">Categories</h4>
            <ul className="space-y-3 text-sm text-accent/80">
              <li><Link href="/products/sa-series" className="hover:text-primary transition-colors">Uni-Directional Valves</Link></li>
              <li><Link href="/products/sb-series" className="hover:text-primary transition-colors">Bi-Directional Valves</Link></li>
              <li><Link href="/products/pneumatic" className="hover:text-primary transition-colors">Pneumatic Actuated</Link></li>
              <li><Link href="/products/electric" className="hover:text-primary transition-colors">Electric Actuated</Link></li>
              <li><Link href="/products/gearbox" className="hover:text-primary transition-colors">Manual Operated</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg tracking-wide uppercase">Contact</h4>
            <ul className="space-y-3 text-sm text-accent/80">
              <li>Scanflo Valves</li>
              <li>Vapi, Gujarat, India</li>
              <li className="pt-2">info@scanflo.com</li>
              <li>+91-260-2400000</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-accent/60">
          <p>© {new Date().getFullYear()} Scanflo Valves — A Division of Scan Engineering. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
