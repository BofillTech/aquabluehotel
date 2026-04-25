import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="max-w-7xl mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <img src={logo} alt="Aqua Blue Hotel" className="h-10 mb-6 brightness-0 invert" />
          <p className="text-sm opacity-70 leading-relaxed font-body">
            Relaxed coastal comfort in the heart of Narragansett, Rhode Island.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-body font-semibold tracking-widest uppercase mb-6 text-gold">
            Quick Links
          </h4>
          <div className="flex flex-col gap-3">
            {[
              { label: "Room Blocks", path: "/group-bookings" },
              { label: "Events", path: "/events" },
              { label: "Amenities", path: "/amenities" },
            ].map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="text-sm font-body opacity-70 hover:opacity-100 transition-opacity"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-body font-semibold tracking-widest uppercase mb-6 text-gold">
            Contact
          </h4>
          <div className="flex flex-col gap-4 text-sm font-body opacity-70">
            <a href="tel:+14017836767" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <Phone className="w-4 h-4 text-gold" />
              (401) 783-6767
            </a>
            <a href="mailto:reachus@aquabluehotels.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <Mail className="w-4 h-4 text-gold" />
              reachus@aquabluehotels.com
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold mt-0.5" />
              <span>1 Beach Street,<br />Narragansett, RI 02882</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-body font-semibold tracking-widest uppercase mb-6 text-gold">
            Hours
          </h4>
          <div className="text-sm font-body opacity-70 space-y-2">
            <p>Open 24/7</p>
            <p className="pt-2 border-t border-primary-foreground/10">Check-In: 3:00 PM</p>
            <p>Check-Out: 11:00 AM</p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
        <p className="text-xs font-body opacity-50">
          © {new Date().getFullYear()} Aqua Blue Hotel. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
