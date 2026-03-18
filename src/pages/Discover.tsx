import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const beaches = [
  { name: "Narragansett Town Beach", desc: "Located directly across from Aqua Blue Hotel. Known for its surf culture, scenic seawall, and expansive shoreline." },
  { name: "Scarborough State Beach", desc: "Wide sandy stretches and beautiful ocean views. A favorite for surfers and sunset watchers. ~10 minutes away." },
  { name: "Roger Wheeler State Beach", desc: "Near Point Judith Harbor with calmer waters and a family-friendly atmosphere." },
];

const adventures = [
  { name: "Narrow River Kayaks", desc: "Explore the Pettaquamscutt River by kayak, canoe, or paddleboard." },
  { name: "Narragansett Surf & Skate", desc: "Surfboard rentals, surf lessons, and beach gear for Narragansett's famous waves." },
  { name: "William C. O'Neill Bike Path", desc: "Scenic path connecting Narragansett and South Kingstown through coastal ponds and historic villages." },
];

const dayTrips = [
  { name: "Newport, RI", desc: "30 minutes away — historic mansions, waterfront dining, sailing, and the iconic Cliff Walk." },
  { name: "Providence, RI", desc: "Art galleries, theaters, award-winning restaurants, and seasonal WaterFire events." },
  { name: "Block Island", desc: "A short ferry ride from Point Judith — dramatic coastal bluffs, biking trails, and beaches." },
  { name: "Westerly & Watch Hill", desc: "Charming seaside village known for boutique shops, oceanfront dining, and a historic carousel." },
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
          Narragansett is known for its beautiful New England coastline, relaxed beach culture, and vibrant summer energy. From morning walks along the seawall to sunset views over the Atlantic, there's always something to explore.
        </p>
      </div>
    </section>

    {/* Beaches */}
    <section className="section-padding bg-secondary">
      <SectionHeading subtitle="Sun & Sand" title="Narragansett Beaches" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {beaches.map((b, i) => (
          <motion.div key={b.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 bg-background rounded-lg">
            <h3 className="text-lg font-display text-foreground mb-3">{b.name}</h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Adventures */}
    <section className="section-padding">
      <SectionHeading subtitle="Get Active" title="Outdoor Adventures" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {adventures.map((a, i) => (
          <motion.div key={a.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 bg-secondary rounded-lg">
            <h3 className="text-lg font-display text-foreground mb-3">{a.name}</h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Day Trips */}
    <section className="section-padding bg-secondary">
      <SectionHeading subtitle="Explore Beyond" title="Easy Day Trips" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {dayTrips.map((d, i) => (
          <motion.div key={d.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 bg-background rounded-lg">
            <h3 className="text-xl font-display text-foreground mb-3">{d.name}</h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">{d.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="section-padding text-center">
      <p className="font-body text-muted-foreground max-w-xl mx-auto">
        Our team is always happy to share favorite restaurants, beaches, and hidden local gems. Just ask the front desk during your stay!
      </p>
      <a href="https://www.narragansettri.gov/visitors" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 border-2 border-primary text-primary px-8 py-3 text-sm font-body font-semibold tracking-widest uppercase rounded hover:bg-primary hover:text-primary-foreground transition-colors">
        Official Visitor Guide
      </a>
    </section>
  </Layout>
);

export default Discover;
