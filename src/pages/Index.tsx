import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import Layout from "@/components/Layout";

const HERO_VIDEO = "https://dl.dropboxusercontent.com/scl/fi/kz6ui5tsjie59o1th1xvk/AquaBlue_Summary_Video.mp4?rlkey=73muxa5s0djnso75c1dz8fd6e&st=vbp83x3s";

const rooms = [
  { name: "The Blue", desc: "Oceanfront King with Balcony", img: "https://aquabluehotels.com/wp-content/uploads/IMG_3651-Edit-2.jpg" },
  { name: "The Surf", desc: "King with Balcony & Partial Ocean View", img: "https://aquabluehotels.com/wp-content/uploads/IMG_3816-Edit-2-479x378.jpg" },
  { name: "The Aqua", desc: "Two Queens with Balcony", img: "https://aquabluehotels.com/wp-content/uploads/IMG_3541-Edit-479x378.jpg" },
  { name: "The Wave", desc: "King Room", img: "https://aquabluehotels.com/wp-content/uploads/IMG_3954-Edit-Edit-479x378.jpg" },
];

const Index = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  return (
  <Layout>
    {/* Hero */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center px-6"
      >
        <p className="text-sm md:text-base font-body font-semibold tracking-[0.25em] uppercase text-gold mb-4">
          Narragansett, Rhode Island
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-primary-foreground leading-tight mb-6">
          Aqua Blue Hotel
        </h1>
        <p className="text-lg md:text-xl font-body text-primary-foreground/80 max-w-xl mx-auto mb-10">
          Relaxed coastal comfort, thoughtfully designed
        </p>
        <a
          href="https://aquabluehotels.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm font-body font-semibold tracking-widest uppercase rounded hover:bg-aegean-light transition-colors"
        >
          Book Your Stay
        </a>
      </motion.div>
    </section>

    {/* Rooms Preview */}
    <section className="section-padding">
      <SectionHeading
        subtitle="Accommodations"
        title="The Rooms with a Soul"
        description="Each guest room is designed to offer a comfortable and uncomplicated coastal stay in the heart of Narragansett."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {rooms.map((room, i) => (
          <motion.div
            key={room.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Link to="/rooms" className="group block">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 shadow-[var(--shadow-card)]">
                <img
                  src={room.img}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
                {room.name}
              </h3>
              <p className="text-sm font-body text-muted-foreground mt-1">{room.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          to="/rooms"
          className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-body font-semibold tracking-widest uppercase rounded hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          View All Rooms
        </Link>
      </div>
    </section>

    {/* Events CTA */}
    <section className="relative py-32 overflow-hidden">
      <img
        src="https://aquabluehotels.com/wp-content/uploads/2020/03/wedding-0.jpg"
        alt="Grand Ocean Ballroom"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 text-center px-6">
        <SectionHeading
          subtitle="Events & Weddings"
          title="Coastal Celebrations, Thoughtfully Hosted"
          description="Our Grand Ocean Ballroom provides sweeping ocean views, natural light, and a flexible layout for weddings and private events."
          light
        />
        <Link
          to="/events"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm font-body font-semibold tracking-widest uppercase rounded hover:bg-aegean-light transition-colors"
        >
          Plan Your Event
        </Link>
      </div>
    </section>

    {/* Amenities Strip */}
    <section className="section-padding bg-secondary">
      <SectionHeading
        subtitle="Hotel Amenities"
        title="Everything You Need"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto text-center">
        {["Pool", "Free Wi-Fi", "Hot Tub", "24hr Front Desk", "Complimentary Coffee", "Business Center", "Patio Furniture", "Convenience Store", "Closest to Beach"].map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="py-6 px-4 rounded-lg"
          >
            <p className="text-sm font-body font-semibold text-foreground">{a}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Discover Narragansett */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-accent mb-3">
            Explore
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight mb-6">
            In the Heart of Narragansett
          </h2>
          <div className="gold-divider !mx-0" />
          <p className="mt-6 text-base font-body text-muted-foreground leading-relaxed mb-8">
            From morning walks along the seawall to sunset views over the Atlantic, there's always something to explore just moments from Aqua Blue Hotel.
          </p>
          <Link
            to="/discover"
            className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-body font-semibold tracking-widest uppercase rounded hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Discover More
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="aspect-[4/3] rounded-lg overflow-hidden shadow-[var(--shadow-elevated)]"
        >
          <img
            src="https://aquabluehotels.com/wp-content/uploads/IMG_3994-Edit.jpg"
            alt="Narragansett coastline"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>

    {/* Bottom Booking Bar */}
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="bg-background/95 backdrop-blur-md shadow-lg rounded-full px-8 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wide">Check-in</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="bg-transparent border-b border-border text-sm font-body text-foreground px-2 py-1 focus:outline-none focus:border-primary"
          />
        </div>
        <div className="w-px h-8 bg-border" />
        <div className="flex items-center gap-2">
          <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wide">Check-out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="bg-transparent border-b border-border text-sm font-body text-foreground px-2 py-1 focus:outline-none focus:border-primary"
          />
        </div>
        <a
          href="https://aquabluehotels.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-body font-semibold tracking-wide rounded-full hover:bg-aegean-light transition-colors ml-2"
        >
          Book Now
        </a>
      </div>
    </div>
  </Layout>
  );
};

export default Index;
