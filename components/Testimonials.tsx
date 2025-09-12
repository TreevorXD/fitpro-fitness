import { testimonials } from "@/lib/constants";
import * as motion from "motion/react-client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  const MAX_STARS = 5;

  return (
    <section className="py-20 bg-foreground/4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black font-heading mb-4 text-foreground"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Real transformations from real people who chose to change their
            lives with our programs.
          </motion.p>
        </div>

        {/* Testimonials grid */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3, delay: 0 },
              }}
              key={t.name}
              className="group"
            >
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="relative mb-6 h-30 w-24 mx-auto"
                  >
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="rounded-full object-cover border-4 border-primary/20 group-hover:border-primary transition-colors duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="flex justify-center mb-4 gap-1"
                  >
                    {Array.from({ length: MAX_STARS }).map((_, i) => {
                      const filled = i < t.rating;
                      return (
                        <Star
                          key={i}
                          className={
                            filled
                              ? "w-5 h-5 text-yellow-300"
                              : "w-5 h-5 text-neutral-300"
                          }
                          fill={filled ? "currentcolor" : "none"}
                        />
                      );
                    })}
                  </motion.div>

                  <motion.blockquote
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="text-lg font-semibold font-heading text-foreground mb-4"
                  >
                    &quote;{t.story}&quote;
                  </motion.blockquote>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="text-muted-foreground mb-4 leading-relaxed"
                  >
                    {t.details}
                  </motion.p>

                  <motion.cite
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="font-bold text-primary italic"
                  >
                    - {t.name}
                  </motion.cite>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
