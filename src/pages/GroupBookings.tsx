import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const GroupBookings = () => (
  <Layout>
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img src="https://aquabluehotels.com/wp-content/uploads/2020/03/wedding-1.jpg" alt="Group Bookings" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative z-10 text-center px-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-display text-primary-foreground">
          Group Bookings
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-lg font-body text-primary-foreground/80 mt-4">
          Thoughtfully Planned. Effortlessly Coastal.
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-base md:text-lg font-body text-muted-foreground leading-relaxed">
          At Aqua Blue Hotel, group stays aren't one-size-fits-all — they're carefully structured to give your guests flexibility, comfort, and a true coastal experience. Whether you're planning a wedding weekend, wellness retreat, family gathering, or corporate getaway, our team works closely with you to create a seamless group stay.
        </p>
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <SectionHeading subtitle="A Smarter Way" title="Book Together" />
      <div className="max-w-4xl mx-auto">
        <p className="text-center font-body text-muted-foreground leading-relaxed mb-12">
          Our group bookings are designed around room nights — allowing your guests to choose the room type and length of stay that works best while contributing to your overall group commitment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "More flexibility for your guests",
            "Clear expectations around availability and pricing",
            "A smoother booking experience for everyone",
            "A modern, guest-friendly system",
          ].map((b, i) => (
            <motion.div key={b} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 p-6 bg-background rounded-lg">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-sm font-body text-foreground">{b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Meet Cat */}
    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-accent mb-3">Meet Your Event Sales Manager</p>
        <h3 className="text-3xl font-display text-foreground mb-6">Hi, I'm Cat!</h3>
        <div className="gold-divider" />
        <p className="mt-6 font-body text-muted-foreground leading-relaxed">
          I grew up right here in Narragansett, so Aqua Blue and this coastline have always felt like home to me. I started working at the hotel over ten years ago. Today I serve as the Event Sales & Marketing Manager. My goal is to make the planning process straightforward and enjoyable, while helping each couple or group create a celebration that feels relaxed, welcoming, and true to the spirit of Narragansett.
        </p>
      </div>
    </section>

    <section className="bg-primary py-16 text-center px-6">
      <h3 className="text-2xl md:text-3xl font-display text-primary-foreground mb-4">Ready to Start the Conversation?</h3>
      <p className="font-body text-primary-foreground/80 max-w-xl mx-auto mb-8">
        No pressure, no guesswork — just clear guidance from the start.
      </p>
      <Link to="/contact" className="inline-block border-2 border-primary-foreground text-primary-foreground px-8 py-3 text-sm font-body font-semibold tracking-widest uppercase rounded hover:bg-primary-foreground hover:text-primary transition-colors">
        Get In Touch
      </Link>
    </section>
  </Layout>
);

export default GroupBookings;
