import { motion } from "framer-motion";

interface MapSectionWrapperProps {
  id: string;
  title: string;
  titleAccent: string;
  icon: string;
  locationLabel: string;
  side: "left" | "right";
  children: React.ReactNode;
}

export default function MapSectionWrapper({
  id,
  title,
  titleAccent,
  icon,
  locationLabel,
  side,
  children,
}: MapSectionWrapperProps) {
  return (
    <section id={id} className="relative">
      {/* Quest path connector */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full map-path opacity-40 hidden lg:block" />

      <div className="section-container relative">
        {/* Map node marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, type: "spring" }}
          className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-16 flex-col items-center z-10"
        >
          <div className="quest-node-active" />
          <div className="mt-2 px-3 py-1 rounded-full text-xs font-fantasy text-gold/80 border border-gold/20 bg-background/80 backdrop-blur-sm whitespace-nowrap">
            {icon} {locationLabel}
          </div>
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 pt-8 lg:pt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-fantasy">
            {title} <span className="gradient-text">{titleAccent}</span>
          </h2>
          <div className="w-20 h-0.5 mx-auto rounded-full" style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)"
          }} />
        </motion.div>

        {/* Content with side offset on large screens */}
        <div className={`lg:max-w-[55%] ${side === "right" ? "lg:ml-auto" : "lg:mr-auto"}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
