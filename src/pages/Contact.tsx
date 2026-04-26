import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import contactBeach from "@/assets/contact-beach.jpg";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={contactBeach} alt="Aerial view of Narragansett coastline near Aqua Blue Hotel" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-display text-primary-foreground">
            Reach Us
          </motion.h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-display text-foreground mb-6">Reach Us</h2>
            <div className="gold-divider !mx-0 !my-4" />
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              Feel free to reach out if you have any questions about your stay, events, or group bookings. We're here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="text-sm font-body font-semibold text-foreground mb-1">Call Us</h4>
                  <a href="tel:+14017836767" className="font-body text-muted-foreground hover:text-primary transition-colors">401-783-6767</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="text-sm font-body font-semibold text-foreground mb-1">Email Us</h4>
                  <a href="mailto:reachus@aquabluehotels.com" className="font-body text-muted-foreground hover:text-primary transition-colors">reachus@aquabluehotels.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="text-sm font-body font-semibold text-foreground mb-1">Visit Us</h4>
                  <p className="font-body text-muted-foreground">1 Beach Street,<br />Narragansett, RI 02882</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="text-sm font-body font-semibold text-foreground mb-1">Hours</h4>
                  <div className="font-body text-muted-foreground text-sm space-y-1">
                    <p>Open 24/7</p>
                    <p className="mt-2">Check-In: 3:00 PM</p>
                    <p>Check-Out: 11:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl font-display text-foreground mb-6">Send Us a Message</h2>
            <div className="gold-divider !mx-0 !my-4" />
            <form className="space-y-5 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <select name="subject" value={form.subject} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
                  <option value="">Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="reservation">Reservation Question</option>
                  <option value="events">Events & Weddings</option>
                  <option value="room-blocks">Room Blocks</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <textarea name="message" placeholder="Your Message" rows={5} value={form.message} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 text-sm font-body font-semibold tracking-widest uppercase rounded hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-secondary">
        <SectionHeading subtitle="Find Us" title="Our Location" />
        <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-[var(--shadow-elevated)] h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.8!2d-71.4559!3d41.4318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e5b8a1c5e3f2d3%3A0x4b7c1f8e6a2d9e0f!2s1+Beach+St%2C+Narragansett%2C+RI+02882!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aqua Blue Hotel Location"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;