import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone, PhoneCall } from "lucide-react";
import catPhoto from "@/assets/cat-gray.jpg";

const GroupBookings = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    groupSize: "",
    comments: "",
    contactMethod: "email",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero – no large image, clean header like PDF */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-display text-foreground text-center"
          >
            Room Blocks
          </motion.h1>
        </div>
      </section>

      {/* Intro – text left, room image right */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4 italic">
              Thoughtfully Planned. Effortlessly Coastal.
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              At Aqua Blue Hotel, group stays aren't one-size-fits-all — they're carefully structured to give your guests flexibility, comfort, and a true coastal experience in the heart of Narragansett, Rhode Island. Whether you're planning a wedding weekend, wellness retreat, a family gathering, or a corporate getaway, our team works closely with you to create a seamless group stay that feels elevated, intentional, and easy from start to finish.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-[var(--shadow-elevated)]"
          >
            <img
              src="https://aquabluehotels.com/wp-content/uploads/2024/02/IMG_4016-Edit-scaled.jpg"
              alt="Aqua Blue Hotel Suite"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Smarter Way – image left, text right */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-[var(--shadow-elevated)] order-2 lg:order-1"
          >
            <img
              src="https://aquabluehotels.com/wp-content/uploads/2024/02/IMG_3980-Edit-scaled.jpg"
              alt="Hotel Room"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4 italic">
              A Smarter Way to Book Together
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Rather than focusing only on a fixed number of rooms, our group bookings are designed around room nights — allowing your guests to choose the room type and length of stay that works best for them while still contributing to your overall group commitment.
            </p>
            <p className="font-body text-muted-foreground mb-3">This approach gives you:</p>
            <ul className="space-y-2 font-body text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                More flexibility for your guests
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                Clear expectations around availability and pricing
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                A smoother booking experience for everyone involved
              </li>
            </ul>
            <p className="font-body text-muted-foreground mt-4 italic">
              It's a modern, guest-friendly system — and one we've found works best for real-life group travel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <SectionHeading subtitle="Get Started" title="Ready to Start the Conversation?" />
          <p className="text-center font-body text-muted-foreground mb-10">
            Use the form below to tell us a bit about your group — Once submitted, our Events Sales & Marketing Manager will be in touch to review availability, answer questions, and walk you through next steps.
          </p>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="">Event Type</option>
                <option value="room-block">Room Block</option>
                <option value="event-space">Event Space Rental</option>
              </select>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="text"
                name="groupSize"
                placeholder="Estimated Group Size"
                value={form.groupSize}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <textarea
              name="comments"
              placeholder="Special Requests / Comments"
              rows={3}
              value={form.comments}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
            <div className="flex items-center gap-6">
              <span className="font-body text-sm text-muted-foreground">Preferred Method of Contact:</span>
              <label className="flex items-center gap-2 font-body text-sm text-foreground cursor-pointer">
                <input
                  type="radio"
                  name="contactMethod"
                  value="phone"
                  checked={form.contactMethod === "phone"}
                  onChange={handleChange}
                  className="accent-primary"
                />
                Phone
              </label>
              <label className="flex items-center gap-2 font-body text-sm text-foreground cursor-pointer">
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={form.contactMethod === "email"}
                  onChange={handleChange}
                  className="accent-primary"
                />
                Email
              </label>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-3 text-sm font-body font-semibold tracking-widest uppercase rounded hover:bg-primary/90 transition-colors"
              >
                Send Now
              </button>
              <p className="font-body text-sm text-muted-foreground italic">
                No pressure, no guesswork — just clear guidance from the start.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Meet Cat */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display text-foreground text-center mb-10">
            Meet Your Event Sales Manager
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center bg-accent/10 rounded-xl p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Hi, I'm Cat!</strong> I grew up right here in Narragansett, so Aqua Blue and this coastline have always felt like home to me. I started working at the hotel over ten years ago and have had the opportunity to learn many parts of the property along the way.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                After spending some time exploring other professional opportunities, I eventually found my way back to Aqua Blue — the place where my hospitality career began.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Today I serve as the Event Sales & Marketing Manager. Even though I now live in Maine and work remotely, I stay closely connected with the hotel and our team to help plan and support the events hosted here.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                My goal is to make the planning process straightforward and enjoyable, while helping each couple or group create a celebration that feels relaxed, welcoming, and true to the spirit of Narragansett.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <img
                src={catPhoto}
                alt="Catherine Gray - Event Sales Manager"
                className="w-48 h-56 object-cover rounded-lg shadow-md"
              />
              <div className="text-center space-y-1.5">
                <p className="font-display text-lg text-foreground">Catherine Gray</p>
                <a href="mailto:cgray@aquabluehotels.com" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-3.5 h-3.5" /> cgray@aquabluehotels.com
                </a>
                <a href="tel:+14015564214" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-3.5 h-3.5" /> 401-556-4214
                </a>
                <a href="tel:+14017836767" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  <PhoneCall className="w-3.5 h-3.5" /> 401-783-6767
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GroupBookings;
