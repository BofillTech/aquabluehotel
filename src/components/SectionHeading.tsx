import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7 }}
    className="text-center max-w-2xl mx-auto mb-16"
  >
    {subtitle && (
      <p className={`text-sm font-body font-semibold tracking-[0.2em] uppercase mb-3 ${light ? "text-gold" : "text-accent"}`}>
        {subtitle}
      </p>
    )}
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    <div className="gold-divider mt-6" />
    {description && (
      <p className={`mt-6 text-base md:text-lg font-body leading-relaxed ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
