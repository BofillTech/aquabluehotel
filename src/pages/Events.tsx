import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone, PhoneCall } from "lucide-react";
import catPhoto from "@/assets/cat-gray.jpg";
import weddingPhoto from "@/assets/wedding-1.jpg";
import tableSetPhoto from "@/assets/table-set.webp";
import goldChairsPhoto from "@/assets/gold-chairs.jpg";
import clearChairsPhoto from "@/assets/clear-chairs.jpg";
import ceremonyDeckPhoto from "@/assets/ceremony-2nd-floor-deck.jpeg";
import ballroomWindowPhoto from "@/assets/ballroom-window-view.jpg";
import ballroomKitchenPhoto from "@/assets/ballroom-kitchen-entrance.jpg";

const Events = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guestCount: "",
    comments: "",
    contactMethod: "email",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={weddingPhoto} alt="Wedding reception in the Grand Ocean Ballroom" className="absolute inset-0 w-full h-full object-cover" />
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
              With panoramic views of Narragansett Beach, ocean-facing windows, and a flexible layout, the space offers a bright coastal setting that can be shaped around weddings, celebrations, retreats, and private events.
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
            <img src={ballroomWindowPhoto} alt="Grand Ocean Ballroom with ocean-facing windows" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="aspect-[4/3] rounded-lg overflow-hidden shadow-[var(--shadow-elevated)]">
            <img src={ceremonyDeckPhoto} alt="Second-floor deck ceremony setup overlooking the water" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-accent mb-2">Ceremonies</p>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">A Coastal Moment on the Back Deck</h2>
            <div className="gold-divider !mx-0 !my-4" />
            <p className="font-body text-muted-foreground leading-relaxed">
              The back deck creates an open-air setting for ceremonies and gatherings with the coastline close by, offering an effortless transition from vows to celebration.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <SectionHeading subtitle="Gallery" title="Event Spaces & Setups" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: tableSetPhoto, alt: "Elegant event table setting with champagne glasses" },
            { src: goldChairsPhoto, alt: "Ballroom reception setup with gold chairs" },
            { src: clearChairsPhoto, alt: "Ballroom setup with clear chairs and ocean-facing windows" },
            { src: ballroomKitchenPhoto, alt: "Grand Ocean Ballroom dance floor and kitchen entrance" },
          ].map((image, i) => (
            <motion.div key={image.alt} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="aspect-[4/3] rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* How Events Work */}
      <section className="section-padding">
        <SectionHeading subtitle="How It Works" title="Planning Your Event" />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Venue Rental", desc: "Your event includes private use of the Grand Ocean Ballroom, complete with tables, chairs, and flexible layout options to suit your vision. A three-hour minimum rental is required." },
            { title: "Vendors", desc: "We welcome outside vendors for additional elements such as linens, china, décor, and specialty rentals—giving you the freedom to fully customize your event." },
            { title: "Guest Accommodations", desc: "We're here to help coordinate group room blocks, so your guests can easily secure accommodations and enjoy a seamless stay during your event weekend." },
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
      </section>

      {/* Inquiry Form */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <SectionHeading subtitle="Get Started" title="Ready to Plan Your Event?" />
          <p className="text-center font-body text-muted-foreground mb-10">
            Use the form below to tell us about your event — once submitted, our Events Sales & Marketing Manager will be in touch to review availability, answer questions, and walk you through next steps.
          </p>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select name="eventType" value={form.eventType} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
                <option value="">Event Type</option>
                <option value="wedding">Wedding Reception</option>
                <option value="corporate">Corporate Event</option>
                <option value="reunion">Family Reunion</option>
                <option value="fundraiser">Fundraiser / Gala</option>
                <option value="shower">Bridal / Baby Shower</option>
                <option value="other">Other</option>
              </select>
              <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input type="text" name="guestCount" placeholder="Estimated Guest Count" value={form.guestCount} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <textarea name="comments" placeholder="Tell us about your event — style, vision, special requests..." rows={3} value={form.comments} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
            <div className="flex items-center gap-6">
              <span className="font-body text-sm text-muted-foreground">Preferred Method of Contact:</span>
              <label className="flex items-center gap-2 font-body text-sm text-foreground cursor-pointer">
                <input type="radio" name="contactMethod" value="phone" checked={form.contactMethod === "phone"} onChange={handleChange} className="accent-primary" />
                Phone
              </label>
              <label className="flex items-center gap-2 font-body text-sm text-foreground cursor-pointer">
                <input type="radio" name="contactMethod" value="email" checked={form.contactMethod === "email"} onChange={handleChange} className="accent-primary" />
                Email
              </label>
            </div>
            <div className="flex items-center gap-4">
              <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 text-sm font-body font-semibold tracking-widest uppercase rounded hover:bg-primary/90 transition-colors">
                Send Now
              </button>
              <p className="font-body text-sm text-muted-foreground italic">
                No pressure, no guesswork — just clear guidance from the start.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display text-foreground text-center mb-10">
            Meet Your Events Team
          </h2>

          {/* Cat */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center bg-accent/10 rounded-xl p-8 md:p-12 mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-xl font-display text-foreground mb-4">Meet Your Event Sales Manager</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                I grew up right here in Narragansett, so Aqua Blue and this coastline have always felt like home to me. I started working at the hotel over ten years ago and have had the opportunity to learn many parts of the property along the way.
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
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-4">
              <img src={catPhoto} alt="Catherine Gray - Event Sales Manager" className="w-48 h-56 object-cover rounded-lg shadow-md" />
              <div className="text-center space-y-1.5">
                <p className="font-display text-lg text-foreground">Catherine Gray</p>
                <p className="text-xs font-body text-muted-foreground italic">Event Sales & Marketing Manager</p>
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

          {/* Mohammed */}
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-center bg-accent/10 rounded-xl p-8 md:p-12">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-4">
              <div className="w-48 h-56 rounded-lg shadow-md bg-primary/10 flex items-center justify-center">
                <span className="text-5xl font-display text-primary">AM</span>
              </div>
              <div className="text-center space-y-1.5">
                <p className="font-display text-lg text-foreground">Antshawn Muhammad</p>
                <p className="text-xs font-body text-muted-foreground italic">General Manager</p>
                <a href="mailto:amuhammad@aquabluehotels.com" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-3.5 h-3.5" /> amuhammad@aquabluehotels.com
                </a>
                <a href="tel:+14017874274" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-3.5 h-3.5" /> 401-787-4274
                </a>
                <a href="tel:+14017836767" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  <PhoneCall className="w-3.5 h-3.5" /> 401-783-6767
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-xl font-display text-foreground mb-4">Meet Antshawn Muhammad, General Manager</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                I've built my career in hospitality by focusing on what matters most—creating a welcoming experience for every guest who walks through the door. From starting at the front desk to growing into leadership roles across Rhode Island and Boston, I've had the opportunity to work with incredible teams and be part of some truly dynamic properties.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Most recently, I served as Hotel Operations Manager at Encore Boston Harbor, followed by Assistant General Manager at the Residence Inn in Providence. Throughout each role, I've focused on team development, guest satisfaction, and making sure day-to-day operations run smoothly and efficiently.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                At Aqua Blue, I'm excited to bring that experience into a more personalized, coastal setting—where hospitality feels a little more relaxed, but just as intentional. Whether you're here for a weekend getaway or a special event, my goal is to make sure your stay feels easy, comfortable, and memorable.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Outside of the hotel, I'm a proud father and enjoy spending time behind the camera capturing moments through photography, as well as exploring my love for music. While I'm newer to the area, I'm looking forward to continuing to grow with the community and being part of what makes Narragansett such a special place.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;