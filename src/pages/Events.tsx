import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const Events = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img src="https://aquabluehotels.com/wp-content/uploads/2020/03/wedding-0.jpg" alt="Events" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative z-10 text-center px-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-display text-primary-foreground">
          Events & Weddings
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-lg font-body text-primary-foreground/80 mt-4">
          Coastal Celebrations, Thoughtfully Hosted
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-base md:text-lg font-body text-muted-foreground leading-relaxed">
          Overlooking Narragansett Town Beach, Aqua Blue Hotel offers a relaxed yet elegant coastal setting for weddings, celebrations, and private events. From your first inquiry to the final toast, our goal is to make the planning process feel clear, comfortable, and collaborative.
        </p>
      </div>
    </section>

    {/* Ballroom */}
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-accent mb-2">The Centerpiece</p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">The Grand Ocean Ballroom</h2>
          <div className="gold-divider !mx-0 !my-4" />
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            With panoramic views of Narragansett Beach and floor-to-ceiling windows, the space offers a bright and inviting coastal setting. A dramatic 16-foot built-in bar, private guest restrooms, and elevator access provide both convenience and comfort.
          </p>
          <div className="space-y-4 mb-8">
            <h4 className="text-sm font-body font-semibold tracking-widest uppercase text-foreground">Capacity</h4>
            <ul className="space-y-2 text-sm font-body text-muted-foreground">
              <li>• Up to 250 guests for ceremonies</li>
              <li>• Up to 150 guests for seated dinners</li>
              <li>• Up to 200 guests for cocktail-style events</li>
            </ul>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="aspect-[4/3] rounded-lg overflow-hidden shadow-[var(--shadow-elevated)]">
          <img src="https://aquabluehotels.com/wp-content/uploads/IMG_3994-Edit.jpg" alt="Grand Ocean Ballroom" className="w-full h-full object-cover" loading="lazy" />
        </motion.div>
      </div>
    </section>

    {/* How Events Work */}
    <section className="section-padding">
      <SectionHeading subtitle="How It Works" title="Planning Your Event" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          { title: "Venue Rental", desc: "Events include private use of the Grand Ocean Ballroom with tables and setup options for a variety of layouts." },
          { title: "Catering & Bar", desc: "We work with trusted partners to provide food and beverage service appropriate for your event style." },
          { title: "Vendors", desc: "Work with your preferred vendors or use our recommended vendor list for catering, florals, photography, and more." },
          { title: "Guest Accommodations", desc: "Our team can help coordinate group room blocks so your guests can easily book rooms for your event weekend." },
        ].map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-8 bg-secondary rounded-lg">
            <h3 className="text-xl font-display text-foreground mb-3">{item.title}</h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Perfect For */}
    <section className="section-padding bg-primary text-center">
      <h3 className="text-2xl md:text-3xl font-display text-primary-foreground mb-8">Perfect for Celebrations of All Kinds</h3>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {["Wedding Receptions", "Corporate Retreats", "Nonprofit Fundraisers", "Anniversary Celebrations", "Bridal & Baby Showers", "Family Reunions"].map(e => (
          <span key={e} className="px-5 py-2.5 border border-primary-foreground/30 rounded-full text-sm font-body text-primary-foreground">{e}</span>
        ))}
      </div>
      <div className="mt-12">
        <Link to="/contact" className="inline-block border-2 border-primary-foreground text-primary-foreground px-8 py-3 text-sm font-body font-semibold tracking-widest uppercase rounded hover:bg-primary-foreground hover:text-primary transition-colors">
          Start the Conversation
        </Link>
      </div>
    </section>
  </Layout>
);

export default Events;
