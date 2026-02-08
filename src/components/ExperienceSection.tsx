import { motion } from "framer-motion";
import MapSectionWrapper from "./MapSectionWrapper";

const milestones = [
  {
    title: "Full-Stack Development",
    desc: "Building real-world applications with modern JavaScript frameworks and backend integrations.",
    icon: "⚔",
    status: "Active",
  },
  {
    title: "AI Tools & Integration",
    desc: "Exploring and integrating AI-powered tools to create smarter, more intuitive applications.",
    icon: "🧪",
    status: "Exploring",
  },
  {
    title: "Freelance & Product Development",
    desc: "Working toward freelance and product-based development, focusing on impactful solutions.",
    icon: "🏰",
    status: "Next Chapter",
  },
];

export default function ExperienceSection() {
  return (
    <MapSectionWrapper
      id="experience"
      title="The"
      titleAccent="Journey"
      icon="🗺"
      locationLabel="Path of Growth"
      side="right"
    >
      <div className="relative">
        {/* Vertical quest path */}
        <div className="absolute left-[14px] top-3 bottom-3 w-px"
          style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.5), hsl(var(--mystic-purple) / 0.3), hsl(var(--emerald) / 0.3))" }} />

        <div className="space-y-6">
          {milestones.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-10"
            >
              {/* Node */}
              <div className="absolute left-[7px] top-5 quest-node-active" />

              <div className="fantasy-card-hover p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-fantasy text-foreground text-sm font-semibold flex items-center gap-2">
                    <span>{item.icon}</span> {item.title}
                  </h3>
                  <span className="text-xs text-gold/60 font-fantasy">{item.status}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MapSectionWrapper>
  );
}
