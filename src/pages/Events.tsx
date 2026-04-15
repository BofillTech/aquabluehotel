import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone, PhoneCall } from "lucide-react";
import catPhoto from "@/assets/cat-gray.jpg";

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
      </section>

      {/* Inquiry Form */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <SectionHeading subtitle="Get Started" title="Ready to Plan Your Event?" />
          <p className="text-center font-body text-muted-foreground mb-10">
            Use the form below to tell us about your event — once submitted, our team will be in touch to review availability, answer questions, and walk you through next steps.
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
                We'll be in touch within 24–48 hours.
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
                <span className="text-5xl font-display text-primary">M</span>
              </div>
              <div className="text-center space-y-1.5">
                <p className="font-display text-lg text-foreground">Mohammed</p>
                <p className="text-xs font-body text-muted-foreground italic">Aqua Blue Hotel Manager</p>
                <a href="mailto:info@aquabluehotels.com" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-3.5 h-3.5" /> info@aquabluehotels.com
                </a>
                <a href="tel:+14013639800" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-3.5 h-3.5" /> (401) 363-9800
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Mohammed</strong> is the on-site manager at Aqua Blue Hotel. He oversees day-to-day operations and ensures every event runs smoothly from setup to breakdown.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                With deep knowledge of the property and a hands-on approach, Mohammed works closely with Cat and the events team to coordinate logistics, manage vendor access, and make sure your guests have an exceptional experience throughout their stay.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Whether it's a last-minute detail or a complex multi-day event, Mohammed is the person on the ground making it all come together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
