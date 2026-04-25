import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const rooms = [
  {
    name: "The Blue",
    subtitle: "Oceanfront King with Step-Out Balcony",
    desc: "The Blue Room offers the most direct connection to the ocean, featuring full panoramic views of Narragansett's iconic coastline. With a king bed and a private step-out balcony, this room is a favorite for couples seeking a relaxing coastal escape.",
    features: ["One King bed", "Full oceanfront views", "Private step-out balcony", "Mini-fridge", "Sitting area", "Private bathroom"],
    img: "https://aquabluehotels.com/wp-content/uploads/IMG_3651-Edit-2.jpg",
  },
  {
    name: "The Aqua",
    subtitle: "Two Queen Beds with Step-Out Balcony",
    desc: "Designed with flexibility in mind, the Aqua Room is ideal for friends, families, or small groups traveling together. Two queen beds and a private step-out balcony provide fresh coastal air throughout your stay.",
    features: ["Two Queen beds", "Partial ocean views", "Private step-out balcony", "Mini-fridge", "Private bathroom"],
    img: "https://aquabluehotels.com/wp-content/uploads/IMG_3541-Edit-479x378.jpg",
  },
  {
    name: "The Surf",
    subtitle: "King Room with Step-Out Balcony & Partial Ocean View",
    desc: "The Surf Room offers a comfortable coastal stay with partial views of Narragansett Beach or the Pier Marketplace. Step outside onto your private step-out balcony to enjoy the fresh ocean air.",
    features: ["One King bed", "Partial ocean or village views", "Private step-out balcony", "Mini-fridge", "Private bathroom"],
    img: "https://aquabluehotels.com/wp-content/uploads/IMG_3816-Edit-2-479x378.jpg",
  },
  {
    name: "The Wave",
    subtitle: "King Room",
    desc: "The Wave Room offers a quiet and comfortable space to unwind after a day by the water. Ideal for solo travelers or couples, this room provides simple comfort in a relaxed setting.",
    features: ["One King bed", "Neighborhood or property view", "Mini-fridge", "Private bathroom", "No balcony"],
    img: "",
  },
  {
    name: "The Shell",
    subtitle: "King or Two Queen Beds",
    desc: "The Shell Room offers a comfortable and practical stay for guests looking for a simple place to relax while enjoying Narragansett and the surrounding coastline.",
    features: ["One King or Two Queen beds", "Mini-fridge", "Private bathroom", "Flat-screen television", "No balcony or ocean view"],
    img: "https://aquabluehotels.com/wp-content/uploads/IMG_3954-Edit-Edit-479x378.jpg",
  },
  {
    name: "Bridal Suite",
    subtitle: "Designed for Wedding Day Moments",
    desc: "Our Bridal Suite offers a spacious and private setting for couples preparing for their celebration. Located near the ballroom, the suite provides a comfortable space for getting ready.",
    features: ["One King bedroom", "Separate preparation / sitting area", "1.5 bathrooms", "Mini-fridge"],
    img: "https://aquabluehotels.com/wp-content/uploads/2021/05/abwed.jpg",
  },
  {
    name: "Superior Suite",
    subtitle: "Two-Bedroom Comfort with Space & Privacy",
    desc: "The Superior Suite provides additional space and privacy with two separate bedrooms, making it an excellent option for families, friends, or extended stays.",
    features: ["Two private bedrooms", "One King & One Queen", "Two full bathrooms", "Mini-fridge"],
    img: "https://aquabluehotels.com/wp-content/uploads/DSC08871-479x378.jpg",
  },
];

const Rooms = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        src="https://aquabluehotels.com/wp-content/uploads/IMG_3651-Edit-2.jpg"
        alt="Accommodations"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-display text-primary-foreground"
        >
          Accommodations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg font-body text-primary-foreground/80 mt-4"
        >
          Comfortable Coastal Stays, Steps from the Beach
        </motion.p>
      </div>
    </section>

    {/* Intro */}
    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-base md:text-lg font-body text-muted-foreground leading-relaxed">
          Whether you're visiting for a wedding weekend, a beach getaway, or simply passing along the coast, our rooms provide a welcoming place to relax.
        </p>
      </div>
    </section>

    {/* Included */}
    <section className="bg-secondary py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-center text-sm font-body font-semibold tracking-[0.2em] uppercase text-accent mb-8">Included in Every Stay</h3>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-body text-foreground">
          {["Complimentary Wi-Fi", "Mini-fridge", "Flat-screen television", "Individually controlled A/C", "Steps from the beach"].map(a => (
            <span key={a} className="px-4 py-2 bg-background rounded-lg">{a}</span>
          ))}
        </div>
      </div>
    </section>

    {/* Room List */}
    <section className="section-padding">
      <SectionHeading subtitle="Our Rooms & Suites" title="Find Your Perfect Stay" />
      <div className="max-w-6xl mx-auto space-y-24">
        {rooms.map((room, i) => (
          <motion.div
            key={room.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}
          >
            <div className={`aspect-[4/3] rounded-lg overflow-hidden shadow-[var(--shadow-elevated)] bg-secondary flex items-center justify-center ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
              {room.img ? <img src={room.img} alt={room.name} className="w-full h-full object-cover" loading="lazy" /> : <span className="text-sm font-body text-muted-foreground">Photo coming soon</span>}
            </div>
            <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
              <p className="text-sm font-body font-semibold tracking-[0.15em] uppercase text-accent mb-2">{room.subtitle}</p>
              <h3 className="text-3xl font-display text-foreground mb-4">{room.name}</h3>
              <div className="gold-divider !mx-0 !my-4" />
              <p className="font-body text-muted-foreground leading-relaxed mb-6">{room.desc}</p>
              <ul className="space-y-2 mb-8">
                {room.features.map(f => (
                  <li key={f} className="text-sm font-body text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://aquabluehotels.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-body font-semibold tracking-widest uppercase rounded hover:bg-aegean-light transition-colors"
              >
                Book This Room
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Group CTA */}
    <section className="bg-primary py-16 text-center px-6">
      <h3 className="text-2xl md:text-3xl font-display text-primary-foreground mb-4">Planning a Room Block?</h3>
      <p className="font-body text-primary-foreground/80 max-w-xl mx-auto mb-8">
        Our team can help guide you through setting up a room block so your guests can book within a reserved group.
      </p>
      <Link
        to="/group-bookings"
        className="inline-block border-2 border-primary-foreground text-primary-foreground px-8 py-3 text-sm font-body font-semibold tracking-widest uppercase rounded hover:bg-primary-foreground hover:text-primary transition-colors"
      >
        Explore Group Bookings
      </Link>
    </section>
  </Layout>
);

export default Rooms;