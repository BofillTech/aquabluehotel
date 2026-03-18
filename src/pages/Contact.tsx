import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img src="https://aquabluehotels.com/wp-content/uploads/IMG_3651-Edit-2.jpg" alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative z-10 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-display text-primary-foreground">
          Contact Us
        </motion.h1>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <h2 className="text-3xl font-display text-foreground mb-6">Get in Touch</h2>
          <div className="gold-divider !mx-0 !my-4" />
          <p className="font-body text-muted-foreground leading-relaxed mb-10">
            Feel free to reach out if you have any questions about your stay, events, or group bookings. We're here to help.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="text-sm font-body font-semibold text-foreground mb-1">Call Us</h4>
                <a href="tel:+14013639800" className="font-body text-muted-foreground hover:text-primary transition-colors">(401) 363-9800</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="text-sm font-body font-semibold text-foreground mb-1">Email Us</h4>
                <a href="mailto:info@aquabluehotels.com" className="font-body text-muted-foreground hover:text-primary transition-colors">info@aquabluehotels.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="text-sm font-body font-semibold text-foreground mb-1">Visit Us</h4>
                <p className="font-body text-muted-foreground">1208 Ocean Road,<br />Narragansett, Rhode Island 02882</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="text-sm font-body font-semibold text-foreground mb-1">Hours</h4>
                <div className="font-body text-muted-foreground text-sm space-y-1">
                  <p>Weekdays: 8 AM – 9 PM</p>
                  <p>Weekends: 8 AM – 10 PM</p>
                  <p className="mt-2">Check-In: 3:00 PM</p>
                  <p>Check-Out: 11:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-lg overflow-hidden shadow-[var(--shadow-elevated)] h-[400px] md:h-full min-h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.123!2d-71.454!3d41.432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e5b8f9a1b2c3d4%3A0x1234567890abcdef!2s1208+Ocean+Rd%2C+Narragansett%2C+RI+02882!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aqua Blue Hotel Location"
          />
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Contact;
