import { Badge } from "@/components/ui/badge";
import { Clock, ExternalLink, ShoppingBag, Truck, Zap } from "lucide-react";
import { motion } from "motion/react";
import { SiSwiggy } from "react-icons/si";

const trustBadges = [
  {
    icon: Clock,
    label: "30–45 min",
    sub: "Delivery Time",
  },
  {
    icon: Truck,
    label: "Free Delivery",
    sub: "On select orders",
  },
  {
    icon: ShoppingBag,
    label: "₹149+",
    sub: "Min. Order Value",
  },
  {
    icon: Zap,
    label: "Live Tracking",
    sub: "Real-time updates",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function OrderOnlineSection() {
  return (
    <section
      id="order"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.22 0.08 148) 0%, oklch(0.28 0.1 148) 50%, oklch(0.20 0.07 150) 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle circle patterns */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.17 55) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.17 55) 0%, transparent 70%)",
          }}
        />
        {/* Swiggy orange glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-5 blur-3xl rounded-full"
          style={{ background: "oklch(0.72 0.20 45)" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Eyebrow label */}
          <motion.div variants={itemVariants} className="mb-4">
            <Badge
              className="font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full"
              style={{
                background: "oklch(0.72 0.17 55 / 0.2)",
                color: "oklch(0.92 0.1 75)",
                border: "1px solid oklch(0.72 0.17 55 / 0.35)",
              }}
            >
              Order Online
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: "oklch(0.97 0.01 80)" }}
          >
            Craving Kastura Veg{" "}
            <span style={{ color: "oklch(0.82 0.18 55)" }}>at Home?</span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-5"
          >
            <div
              className="w-16 h-0.5 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.32 0.1 145), oklch(0.72 0.17 55))",
              }}
            />
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: "oklch(0.80 0.04 80)" }}
          >
            Get your favourite Kastura Veg dishes delivered fresh to your
            doorstep. Same bold flavours, same generous portions — now right at
            your door.
          </motion.p>

          {/* Swiggy CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-10"
          >
            <motion.a
              href="https://www.swiggy.com/search?query=Kastura+Veg+Mundhwa+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.62 0.20 40) 0%, oklch(0.58 0.22 38) 100%)",
                color: "oklch(0.99 0.005 80)",
                boxShadow:
                  "0 6px 28px 0 oklch(0.62 0.20 40 / 0.4), 0 2px 8px 0 oklch(0.62 0.20 40 / 0.25)",
              }}
              whileHover={{
                scale: 1.04,
                boxShadow:
                  "0 10px 36px 0 oklch(0.62 0.20 40 / 0.55), 0 4px 12px 0 oklch(0.62 0.20 40 / 0.35)",
              }}
              whileTap={{ scale: 0.98 }}
              data-ocid="order.primary_button"
            >
              <SiSwiggy className="w-7 h-7 flex-shrink-0" />
              <span>Order on Swiggy</span>
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {trustBadges.map((badge) => (
              <motion.div
                key={badge.label}
                variants={itemVariants}
                className="flex flex-col items-center gap-1.5 p-4 rounded-xl"
                style={{
                  background: "oklch(0.99 0.005 80 / 0.07)",
                  border: "1px solid oklch(0.99 0.005 80 / 0.12)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "oklch(0.72 0.17 55 / 0.2)",
                  }}
                >
                  <badge.icon
                    className="w-4 h-4"
                    style={{ color: "oklch(0.82 0.16 60)" }}
                  />
                </div>
                <span
                  className="font-bold text-sm"
                  style={{ color: "oklch(0.95 0.01 80)" }}
                >
                  {badge.label}
                </span>
                <span
                  className="text-xs leading-tight text-center"
                  style={{ color: "oklch(0.65 0.04 80)" }}
                >
                  {badge.sub}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Fine print */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-xs"
            style={{ color: "oklch(0.55 0.03 80)" }}
          >
            Delivery availability subject to your location. Powered by Swiggy.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
