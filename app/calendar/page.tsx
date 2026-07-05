import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import * as motion from "motion/react-client";

export default function Calendar() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-black font-heading mb-4 text-foreground"
            >
              Calendar
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Check upcoming events and stay up to date with what&apos;s happening.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-3xl rounded-lg overflow-hidden border border-foreground/10 shadow-sm">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FVancouver&showPrint=0&showTitle=0&showTabs=0&showTz=0&mode=MONTH&src=c291dGhpc2xhbmR3cGFAZ21haWwuY29t&color=%23039be5"
                style={{ border: "solid 1px #777" }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="Google Calendar"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}