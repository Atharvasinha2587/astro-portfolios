import { motion } from "framer-motion";

const items = [
  {
    title: "Full-Stack Development",
    desc: "Building real-world applications with modern JavaScript frameworks and backend integrations.",
  },
  {
    title: "AI Tools & Integration",
    desc: "Exploring and integrating AI-powered tools to create smarter, more intuitive applications.",
  },
  {
    title: "Freelance & Product Development",
    desc: "Working toward freelance and product-based development, focusing on impactful solutions.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Experience & <span className="gradient-text">Goals</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="max-w-2xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />

        <div className="space-y-10">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-12"
            >
              {/* Node */}
              <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary neon-glow" />

              <div className="glass-card-hover p-6">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
