import { Leaf, Moon, TreePine, UtensilsCrossed } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  { icon: Leaf, label: "100% Vegetarian", color: "text-primary" },
  { icon: UtensilsCrossed, label: "All You Can Eat", color: "text-secondary" },
  { icon: TreePine, label: "Outdoor Seating", color: "text-primary" },
  { icon: Moon, label: "Open till 11:30 PM", color: "text-secondary" },
];

export function HighlightsBar() {
  return (
    <section className="bg-k-green-deep py-5 shadow-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="flex items-center gap-3 justify-center"
            >
              <item.icon className="w-5 h-5 text-amber-300 flex-shrink-0" />
              <span className="text-white/90 text-sm md:text-base font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
