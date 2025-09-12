import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 text-neutral-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black font-heading text-primary mb-4">
              FitPro Fitness
            </h3>
            <p className="mb-6 leading-relaxed max-w-md">
              Transform your life with our comprehensive fitness programs,
              expert trainers, and supportive community.
            </p>

            <div className="flex space-x-4">
              <Link
                href="/"
                className="w-10 h-10 bg-secondary/40 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="w-10 h-10 bg-secondary/40 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="w-10 h-10 bg-secondary/40 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Programs", "Pricing", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <p>
                <strong>Phone:</strong>
                <br />
                (555) 123-4567
              </p>

              <p>
                <strong>Email:</strong>
                <br />
                info@fitprofitness.example
              </p>

              <p>
                <strong>Location:</strong>
                <br />
                123 Fitness Ave
                <br />
                Healthy City, HC 12345
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/40 pt-20 text-center text-neutral-400">
          <p>
            © 2025 FitPro Fitness. All rights reserved. Transform your body,
            transform your life.
          </p>
        </div>
      </div>
    </footer>
  );
}
