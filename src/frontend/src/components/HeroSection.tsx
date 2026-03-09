import { Button } from "@/components/ui/button";
import { Phone, Star } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onBookTable: () => void;
}

export function HeroSection({ onBookTable }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/kastura-hero.dim_1200x600.jpg"
          alt="Kastura Veg - Fresh Indian Food"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-6"
          >
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-white text-sm font-semibold">3.9</span>
            <span className="text-white/70 text-sm">|</span>
            <span className="text-white/90 text-sm">850+ Reviews</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            Pure Vegetarian.{" "}
            <span className="text-amber-400">Pure Flavour.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/85 text-lg md:text-xl leading-relaxed mb-8"
          >
            Dine in at Keshav Nagar, Mundhwa, Pune —{" "}
            <span className="text-green-300 font-medium">
              Open till 11:30 PM
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="tel:07057427575" data-ocid="hero.primary_button">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-bold text-base px-8 gap-2 shadow-float"
              >
                <Phone className="w-4 h-4" />
                Call Now: 070574 27575
              </Button>
            </a>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base px-8 shadow-float"
              onClick={onBookTable}
              data-ocid="hero.primary_button"
            >
              Book a Table
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {["100% Vegetarian", "₹200–400 per person", "Open Daily"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-white/15 backdrop-blur-sm text-white/90 text-sm px-3 py-1 rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ),
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
