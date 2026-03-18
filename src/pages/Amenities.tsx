import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Waves, Wifi, Coffee, Clock, ShoppingBag, Armchair, Building2, Umbrella, MapPin } from "lucide-react";

const amenities = [
  { icon: Waves, name: "Pool", desc: "Outdoor pool steps from the beach" },
  { icon: Umbrella, name: "Hot Tub", desc: "Currently under renovation" },
  { icon: Wifi, name: "Free Wi-Fi", desc: "Complimentary throughout the hotel" },
  { icon: Clock, name: "24hr Front Desk", desc: "Always available to assist" },
  { icon: Coffee, name: "Hot Coffee", desc: "Complimentary every morning" },
  { icon: Building2, name: "Business Center", desc: "For work and printing needs" },
  { icon: Armchair, name: "Patio Furniture", desc: "Relax outdoors in comfort" },
  { icon: ShoppingBag, name: "Convenience Store", desc: "On-site essentials" },
  { icon: MapPin, name: "Closest to Beach", desc: "Steps from Narragansett Beach" },
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

    {/* Restaurant */}
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="aspect-[4/3] rounded-lg overflow-hidden shadow-[var(--shadow-elevated)]">
          <img src="https://aquabluehotels.com/wp-content/uploads/2020/02/restaurant-1-712x599.png" alt="Restaurant" className="w-full h-full object-cover" loading="lazy" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-accent mb-2">Dining</p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">Our Restaurant & Bar</h2>
          <div className="gold-divider !mx-0 !my-4" />
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Enjoy a relaxed dining atmosphere with a variety of dishes, continental and American breakfast, and an à la carte menu.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-body text-foreground">
            <span className="px-4 py-2 bg-background rounded-lg">42 Tables</span>
            <span className="px-4 py-2 bg-background rounded-lg">Opens 8 AM</span>
            <span className="px-4 py-2 bg-background rounded-lg">Breakfast Included</span>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Amenities;
