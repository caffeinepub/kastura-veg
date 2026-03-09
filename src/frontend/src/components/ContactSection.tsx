import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  type ReservationFormData,
  useSubmitReservation,
} from "@/hooks/useQueries";
import {
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const EMPTY_FORM: ReservationFormData = {
  name: "",
  phone: "",
  email: "",
  reservedDate: "",
  reservedTime: "",
  partySize: 2,
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<ReservationFormData>(EMPTY_FORM);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const mutation = useSubmitReservation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "partySize" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const id = await mutation.mutateAsync(form);
      setSubmissionId(id.toString());
      setForm(EMPTY_FORM);
    } catch {
      // error shown via mutation.isError
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-k-cream-dark">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reserve Your Table
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to dine with us? Fill in your details below and we'll confirm
            your reservation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <h3 className="font-display font-bold text-lg text-foreground mb-5">
                Contact Details
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      Address
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Keshav Nagar, Mundhwa
                      <br />
                      Pune, Maharashtra 411036
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      Phone
                    </div>
                    <a
                      href="tel:07057427575"
                      className="text-primary font-bold hover:underline"
                      data-ocid="contact.link"
                    >
                      070574 27575
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <MessageCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      WhatsApp
                    </div>
                    <a
                      href="https://wa.me/917057427575"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-bold hover:underline"
                      data-ocid="contact.link"
                    >
                      070574 27575
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      Hours
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Open daily until{" "}
                      <strong className="text-foreground">11:30 PM</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border flex gap-3">
                <a
                  href="tel:07057427575"
                  className="flex-1"
                  data-ocid="contact.primary_button"
                >
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-sm">
                    <Phone className="w-4 h-4" />
                    Call Us
                  </Button>
                </a>
                <a
                  href="https://wa.me/917057427575"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  data-ocid="contact.primary_button"
                >
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white gap-2 text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-xl overflow-hidden border border-border shadow-card">
              <iframe
                title="Kastura Veg Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3282019780817!2d73.93!3d18.535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMyJzA2LjAiTiA3M8KwNTUnNDguMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-ocid="contact.map_marker"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-border">
              {submissionId ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                  data-ocid="reservation.success_state"
                >
                  <CheckCircle2 className="w-14 h-14 text-primary mb-4" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Reservation Confirmed!
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Thank you! We've received your reservation.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Booking ID:{" "}
                    <span className="font-bold text-foreground">
                      #{submissionId}
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    We'll call you at your number to confirm. See you soon!
                  </p>
                  <Button
                    className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => setSubmissionId(null)}
                    data-ocid="reservation.secondary_button"
                  >
                    Make Another Reservation
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-bold text-xl text-foreground mb-1">
                    Book Your Table
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5">
                    We'll confirm your reservation with a call.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="text-sm font-semibold text-foreground"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        data-ocid="reservation.input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-semibold text-foreground"
                      >
                        Phone <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        data-ocid="reservation.input"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-sm font-semibold text-foreground"
                    >
                      Email{" "}
                      <span className="text-muted-foreground font-normal">
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      data-ocid="reservation.input"
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="reservedDate"
                        className="text-sm font-semibold text-foreground"
                      >
                        Date
                      </Label>
                      <Input
                        id="reservedDate"
                        name="reservedDate"
                        type="date"
                        value={form.reservedDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        data-ocid="reservation.input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="reservedTime"
                        className="text-sm font-semibold text-foreground"
                      >
                        Time
                      </Label>
                      <Input
                        id="reservedTime"
                        name="reservedTime"
                        type="time"
                        value={form.reservedTime}
                        onChange={handleChange}
                        data-ocid="reservation.input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="partySize"
                        className="text-sm font-semibold text-foreground"
                      >
                        Party Size
                      </Label>
                      <Input
                        id="partySize"
                        name="partySize"
                        type="number"
                        min={1}
                        max={20}
                        value={form.partySize}
                        onChange={handleChange}
                        data-ocid="reservation.input"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="text-sm font-semibold text-foreground"
                    >
                      Special Requests
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Dietary preferences, seating preferences, celebrations..."
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      data-ocid="reservation.textarea"
                    />
                  </div>

                  {mutation.isError && (
                    <div
                      className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 text-destructive text-sm"
                      data-ocid="reservation.error_state"
                    >
                      Something went wrong. Please try again or call us at{" "}
                      <a
                        href="tel:07057427575"
                        className="underline font-semibold"
                      >
                        070574 27575
                      </a>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base"
                    disabled={mutation.isPending}
                    data-ocid="reservation.submit_button"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Confirming...
                      </>
                    ) : (
                      "Confirm Reservation"
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to be contacted by Kastura Veg
                    regarding your reservation.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
