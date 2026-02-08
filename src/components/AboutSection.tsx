import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="glass-card-hover max-w-3xl mx-auto p-8 md:p-12"
      >
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          I am a developer focused on modern frontend and full-stack web development. 
          I build responsive, aesthetic, and practical applications using JavaScript, React, 
          Tailwind, and related technologies. I enjoy creating interactive tools, AI-powered apps, 
          and productivity platforms. I focus on real-world projects and continuous skill growth.
        </p>
      </motion.div>
    </section>
  );
}
