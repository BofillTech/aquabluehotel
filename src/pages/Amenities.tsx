import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Waves, Coffee, Clock, Building2, MapPin, Utensils } from "lucide-react";

const amenities = [
  { icon: Waves, name: "Indoor Pool", desc: "Currently under construction" },
  { icon: MapPin, name: "Steps from the Beach", desc: "Just steps from Narragansett Beach" },
  { icon: Building2, name: "Second-Floor Deck", desc: "Relax outdoors in comfort" },
  { icon: Coffee, name: "Coffee Availability", desc: "Complimentary every morning 5am – 11am" },
  { icon: Clock, name: "Front Desk (24/7)", desc: "Always available to assist" },
  { icon: Utensils, name: "Sapphire Restaurant & Bar", desc: "Coming soon" },
];

const Amenities = () => (
  <Layout>
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img src="https://aquabluehotels.com/wp-content/uploads/2020/02/restaurant-1-712x599.png" alt="Amenities" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative z-10 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-display text-primary-foreground">
          Amenities
        </motion.h1>
      </div>
    </section>

    <section className="section-padding">
      <SectionHeading subtitle="Your Comfort" title="Everything You Need for a Relaxing Stay" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {amenities.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="text-center p-8 bg-secondary rounded-lg"
          >
            <a.icon className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-display text-foreground mb-2">{a.name}</h3>
            <p className="text-sm font-body text-muted-foreground">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Restaurant - Coming Soon */}
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="aspect-[4/3] rounded-lg overflow-hidden shadow-[var(--shadow-elevated)]">
          <img src="https://aquabluehotels.com/wp-content/uploads/2020/02/restaurant-1-712x599.png" alt="Restaurant" className="w-full h-full object-cover" loading="lazy" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-accent mb-2">Dining</p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">Sapphire Restaurant & Bar with Full Ocean Views</h2>
          <div className="gold-divider !mx-0 !my-4" />
          <div className="inline-block px-5 py-2 bg-accent/20 border border-accent/40 rounded-full mb-6">
            <span className="text-sm font-body font-semibold text-accent tracking-wide uppercase">Coming Soon! Summer 2026</span>
          </div>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            We're preparing to bring a new dining experience to Aqua Blue Hotel. Stay tuned for updates on our restaurant and bar, featuring a full ocean view experience!
          </p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Amenities;