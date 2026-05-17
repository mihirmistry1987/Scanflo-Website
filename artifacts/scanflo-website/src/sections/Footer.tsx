import { Link } from "wouter";
import scanfloLogo from "@assets/Scanflo_Logo_1778997253423.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8" data-testid="footer">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-border pb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <img
                src={scanfloLogo}
                alt="Scanflo Valves"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium industrial knife gate valves engineered for extreme environments. Precision manufacturing from our state-of-the-art foundry in Gujarat, India.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-base tracking-wide uppercase text-secondary">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">Industries Served</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Scanflo</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-base tracking-wide uppercase text-secondary">Categories</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/products/sa-series" className="hover:text-primary transition-colors">Uni-Directional Valves</Link></li>
              <li><Link href="/products/sb-series" className="hover:text-primary transition-colors">Bi-Directional Valves</Link></li>
              <li><Link href="/products/pneumatic" className="hover:text-primary transition-colors">Pneumatic Actuated</Link></li>
              <li><Link href="/products/electric" className="hover:text-primary transition-colors">Electric Actuated</Link></li>
              <li><Link href="/products/gearbox" className="hover:text-primary transition-colors">Manual Operated</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-base tracking-wide uppercase text-secondary">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="font-semibold text-secondary">Scanflo Valves</li>
              <li>Plot no. 763/764, 40 Shed Area,</li>
              <li>GIDC Vapi, Gujarat - 396195, India</li>
              <li className="pt-2">info@scanengg.com</li>
              <li>+91 9825097587</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Scanflo Valves — A Division of Scan Engineering. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
