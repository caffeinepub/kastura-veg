import type { Review } from "@/backend.d";
import { Skeleton } from "@/components/ui/skeleton";
import { usePublishedReviews } from "@/hooks/useQueries";
import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

const FALLBACK_REVIEWS: Review[] = [
  {
    reviewer: "Priya Sharma",
    rating: BigInt(5),
    text: "Good food, great service and great people to serve at this place. The paneer dishes are absolutely delicious!",
    published: true,
  },
  {
    reviewer: "Rahul Deshmukh",
    rating: BigInt(4),
    text: "Loved the all-you-can-eat setup! Great variety of vegetarian dishes. Will definitely come back with family.",
    published: true,
  },
  {
    reviewer: "Anjali Patil",
    rating: BigInt(4),
    text: "Masala Papad and Mango Mastani are must-tries. Cozy ambiance with outdoor seating.",
    published: true,
  },
  {
    reviewer: "Sanjay Kumar",
    rating: BigInt(5),
    text: "Authentic flavours, reasonable prices. This has become our go-to family restaurant in Mundhwa.",
    published: true,
  },
  {
    reviewer: "Meena Joshi",
    rating: BigInt(3),
    text: "Food quality is good but the service can be a little slow during peak hours. Overall a nice place.",
    published: true,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-4 h-4 ${s <= rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const initials = review.reviewer
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="flex-shrink-0 w-72 md:w-80 bg-card rounded-xl p-5 shadow-card border border-border"
      data-ocid={`review.item.${index + 1}`}
    >
      <Quote className="w-6 h-6 text-primary/30 mb-3" />
      <p className="text-foreground/80 text-sm leading-relaxed mb-4 line-clamp-4">
        {review.text}
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <span className="text-primary-foreground text-xs font-bold">
            {initials}
          </span>
        </div>
        <div>
          <div className="font-semibold text-sm text-foreground">
            {review.reviewer}
          </div>
          <StarRating rating={Number(review.rating)} />
        </div>
      </div>
    </motion.article>
  );
}

export function ReviewsSection() {
  const { data: reviews, isLoading } = usePublishedReviews();
  const displayReviews =
    reviews && reviews.length > 0 ? reviews : FALLBACK_REVIEWS;

  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-k-green-deep overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-amber-300 font-bold text-sm uppercase tracking-widest mb-2">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Guests Say
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-white/70 max-w-xl mx-auto">
            Over 850 guests have shared their experience — here's what they love
            about Kastura Veg.
          </p>
        </motion.div>

        {/* Scrollable reviews */}
        <div className="overflow-x-auto pb-4 reviews-scroll -mx-4 px-4">
          <div className="flex gap-5 w-max pb-2">
            {isLoading
              ? ["rsk1", "rsk2", "rsk3", "rsk4"].map((k) => (
                  <div
                    key={k}
                    className="flex-shrink-0 w-72 md:w-80 bg-white/10 rounded-xl p-5 space-y-3"
                    data-ocid="review.loading_state"
                  >
                    <Skeleton className="h-4 w-full bg-white/20" />
                    <Skeleton className="h-4 w-3/4 bg-white/20" />
                    <Skeleton className="h-4 w-5/6 bg-white/20" />
                  </div>
                ))
              : displayReviews.map((review, i) => (
                  <ReviewCard
                    key={`${review.reviewer}-${i}`}
                    review={review}
                    index={i}
                  />
                ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-6 gap-2 items-center"
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4].map((s) => (
              <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <Star className="w-5 h-5 fill-amber-400/50 text-amber-400/50" />
          </div>
          <span className="text-white/80 text-sm">
            3.9 average from 850+ Google reviews
          </span>
        </motion.div>
      </div>
    </section>
  );
}
