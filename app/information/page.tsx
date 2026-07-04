"use client";

import * as motion from "motion/react-client";
import { FileText, ExternalLink } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mainDocuments = [
  { label: "VWPC Certified Bylaws", href: "/documents/Certified-Bylaws.pdf" },
  { label: "Code of Conduct", href: "/documents/code-of-conduct.pdf", comingSoon: true },
  { label: "Volunteer Policy and Opportunities", href: "/volunteer-policy", comingSoon: true },
];

const formDocuments = [
  { label: "Conflict of Interest Form", href: "#", comingSoon: true },
];

export default function ClubInfo() {
  return (
    <section className="py-24 px-4 bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black font-heading mb-4">
            Club <span className="text-primary">Information</span> & Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Victoria Water Polo Club
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-3 mb-12"
        >
          {mainDocuments.map((doc) => (
            <li key={doc.label}>
              {doc.comingSoon ? (
                <div className="flex items-center gap-3 px-5 py-4 rounded-md border border-input text-muted-foreground">
                  <FileText className="w-5 h-5 shrink-0" />
                  <span>
                    {doc.label}{" "}
                    <span className="italic text-sm">(Coming soon)</span>
                  </span>
                </div>
              ) : (
                <Link
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 px-5 py-4 rounded-md border border-input hover:border-primary hover:bg-primary/5 transition-colors duration-300 group"
                >
                  <span className="flex items-center gap-3 font-medium">
                    <FileText className="w-5 h-5 text-primary shrink-0" />
                    {doc.label}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              )}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="border-t border-input mb-12"
        />

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="space-y-3"
        >
          {formDocuments.map((doc) => (
             <li key={doc.label}>
              {doc.comingSoon ? (
                <div className="flex items-center gap-3 px-5 py-4 rounded-md border border-input text-muted-foreground">
                  <FileText className="w-5 h-5 shrink-0" />
                  <span>
                    {doc.label}{" "}
                    <span className="italic text-sm">(Coming soon)</span>
                  </span>
                </div>
              ) : (
                <Link
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 px-5 py-4 rounded-md border border-input hover:border-primary hover:bg-primary/5 transition-colors duration-300 group"
                >
                  <span className="flex items-center gap-3 font-medium">
                    <FileText className="w-5 h-5 text-primary shrink-0" />
                    {doc.label}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              )}
            </li>
          ))}
        </motion.ul>
      </div>
      <Footer />
    </section>
  );
}