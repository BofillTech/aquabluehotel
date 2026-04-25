import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const beaches = [
  {
    name: "Narragansett Town Beach",
    desc: "Known as the \"crown jewel,\" this popular spot offers soft sand, consistent surfing, and a mile-long walking space.",
    img: "",
  },
  {
    name: "Roger Wheeler & Salty Brine",
    desc: "These state beaches offer calmer, protected waters ideal for families with young children.",
    img: "",
  },
  {
    name: "Scarborough State Beach",
    desc: "Known for its large size, scenic boardwalk, and recent pavilion renovations. A favorite for surfers and sunset watchers.",
    img: "",
  },
];

const Discover = () => (
  <Layout>
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img src="https://aquabluehotels.com/wp-content/uploads/IMG_3994-Edit.jpg" alt="Narragansett" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative z-10 text-center px-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-display text-primary-foreground">
          Discover Narragansett
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-lg font-body text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
          Coastal experiences just steps from Aqua Blue
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-base md:text-lg font-body text-muted-foreground leading-relaxed">
          Narragansett is defined by its beaches. From the Town Beach just steps away to nearby state beaches with calmer coves and wide stretches of sand, Aqua Blue puts the coast within easy reach.
        </p>
      </div>
    </section>

    {/* Beaches */}
    <section className="section-padding bg-secondary">
      <SectionHeading subtitle="Sun & Sand" title="Narragansett Beaches" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {beaches.map((b, i) => (
          <motion.div key={b.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-background rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-[16/10] overflow-hidden">
              {b.img ? <img src={b.img} alt={b.name} className="w-full h-full object-cover" loading="lazy" /> : <div className="w-full h-full bg-background flex items-center justify-center text-sm font-body text-muted-foreground">Photo coming soon</div>}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-display text-foreground mb-3">{b.name}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="section-padding text-center">
      <p className="font-body text-muted-foreground max-w-xl mx-auto">
        Our team is always happy to share favorite restaurants, beaches, and hidden local gems. Just ask the front desk during your stay!
      </p>
      <a href="https://www.narragansettri.gov/9/Visitors" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 border-2 border-primary text-primary px-8 py-3 text-sm font-body font-semibold tracking-widest uppercase rounded hover:bg-primary hover:text-primary-foreground transition-colors">
        Official Visitor Guide
      </a>
    </section>
  </Layout>
);

export default Discover;