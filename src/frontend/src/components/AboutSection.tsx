import { BadgeIndianRupee, ChefHat, Sprout } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Sprout,
    title: "Fresh Ingredients",
    desc: "Hand-picked vegetables, freshly prepared every day. No compromises on quality.",
  },
  {
    icon: ChefHat,
    title: "Authentic Recipes",
    desc: "Traditional Indian flavours with a modern twist — recipes passed down through generations.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Great Value",
    desc: "Satisfying, wholesome meals at just ₹200–400 per person. Generous portions, honest prices.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-snug">
              Why Locals Love
              <br />
              Kastura Veg
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nestled in the heart of Keshav Nagar, Mundhwa, Kastura Veg has
              been a beloved destination for pure vegetarian cuisine in Pune.
              With over 850 Google reviews and a loyal local following, we've
              earned our reputation for tasty food, great variety, and genuine
              hospitality.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're coming in for a quick lunch, a family dinner, or an
              all-you-can-eat feast under the open sky, we have something for
              every palate — from street-style starters to comforting Indian
              mains and refreshing desserts.
            </p>
            {/* Key facts */}
            <div className="flex flex-wrap gap-6">
              {[
                { stat: "850+", label: "Happy Guests" },
                { stat: "3.9★", label: "Google Rating" },
                { stat: "₹200-400", label: "Per Person" },
              ].map((fact) => (
                <div key={fact.label} className="text-center">
                  <div className="font-display text-2xl font-bold text-primary">
                    {fact.stat}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature Cards */}
          <div className="grid gap-5">
            {features.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="flex gap-4 p-5 bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-foreground mb-1">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
