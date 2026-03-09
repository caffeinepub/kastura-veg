import type { MenuItem } from "@/backend.d";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { usePopularMenuItems } from "@/hooks/useQueries";
import { motion } from "motion/react";

const ITEM_IMAGES: Record<string, string> = {
  "Paneer Chop Masala": "/assets/generated/paneer-chop-masala.dim_600x400.jpg",
  "Masala Papad": "/assets/generated/masala-papad.dim_600x400.jpg",
  "Veg Manchurian Dry": "/assets/generated/veg-manchurian.dim_600x400.jpg",
  "Mango Mastani": "/assets/generated/mango-mastani.dim_600x400.jpg",
};

const FALLBACK_IMAGE = "/assets/generated/kastura-hero.dim_1200x600.jpg";

// Static fallback data for when backend is loading
const FALLBACK_ITEMS: MenuItem[] = [
  {
    name: "Paneer Chop Masala",
    description:
      "Golden fried paneer in rich tomato masala with capsicum and fresh herbs.",
    isPopular: true,
    priceRange: "₹180-220",
    category: "Starters",
  },
  {
    name: "Masala Papad",
    description:
      "Crispy papad topped with fresh onions, tomatoes, green chillies and chaat masala.",
    isPopular: true,
    priceRange: "₹80-100",
    category: "Starters",
  },
  {
    name: "Veg Manchurian Dry",
    description:
      "Crispy vegetable balls in tangy soy-ginger-garlic sauce with spring onions.",
    isPopular: false,
    priceRange: "₹160-200",
    category: "Indo-Chinese",
  },
  {
    name: "Mango Mastani",
    description:
      "Thick creamy mango milkshake topped with ice cream, dry fruits and a cherry.",
    isPopular: false,
    priceRange: "₹120-160",
    category: "Beverages",
  },
  {
    name: "Dal Fry",
    description:
      "Tempered yellow lentils with ghee, cumin, garlic and fresh coriander.",
    isPopular: false,
    priceRange: "₹140-180",
    category: "Mains",
  },
  {
    name: "Paneer Satay",
    description:
      "Marinated paneer cubes grilled on skewers, served with mint chutney.",
    isPopular: false,
    priceRange: "₹200-240",
    category: "Starters",
  },
];

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const imageSrc = ITEM_IMAGES[item.name] || FALLBACK_IMAGE;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -4 }}
      className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
      data-ocid={`menu.item.${index + 1}`}
    >
      <div className="relative overflow-hidden aspect-[3/2]">
        <img
          src={imageSrc}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {item.isPopular && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-secondary text-secondary-foreground font-bold text-xs px-2 py-0.5 shadow">
              ★ Popular
            </Badge>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-base text-foreground leading-tight">
            {item.name}
          </h3>
          <span className="text-primary font-bold text-sm whitespace-nowrap flex-shrink-0">
            {item.priceRange}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
        <div className="mt-3 pt-3 border-t border-border">
          <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
            {item.category}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function MenuSkeleton() {
  return (
    <div
      className="bg-card rounded-xl overflow-hidden shadow-card"
      data-ocid="menu.loading_state"
    >
      <Skeleton className="aspect-[3/2] w-full" />
      <div className="p-4 space-y-3">
        <div className="flex justify-between">
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-5 w-16" />
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}

export function MenuSection() {
  const { data: items, isLoading, isError } = usePopularMenuItems();
  const displayItems = items && items.length > 0 ? items : FALLBACK_ITEMS;

  return (
    <section id="menu" className="py-16 md:py-24 bg-k-cream-dark">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">
            Our Specialties
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Menu Highlights
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            From sizzling starters to indulgent desserts — hand-crafted with
            fresh ingredients every day.
          </p>
        </motion.div>

        {/* Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((k) => (
              <MenuSkeleton key={k} />
            ))}
          </div>
        ) : isError ? (
          <div
            className="text-center py-8 text-muted-foreground"
            data-ocid="menu.error_state"
          >
            <p>
              Menu temporarily unavailable. Please call us at{" "}
              <a href="tel:07057427575" className="text-primary underline">
                070574 27575
              </a>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayItems.map((item, i) => (
              <MenuCard key={item.name} item={item} index={i} />
            ))}
          </div>
        )}

        {/* View Full Menu */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground text-sm">
            Explore our full menu — Order online via{" "}
            <a
              href="https://swiggy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold underline hover:no-underline"
              data-ocid="menu.link"
            >
              Swiggy
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
