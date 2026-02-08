import { motion } from "framer-motion";
import MapSectionWrapper from "./MapSectionWrapper";

export default function AboutSection() {
  return (
    <MapSectionWrapper
      id="about"
      title="The"
      titleAccent="Origin"
      icon="🏠"
      locationLabel="Village of Beginnings"
      side="left"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="fantasy-card-hover p-8 md:p-10"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
            style={{ background: "hsl(var(--gold) / 0.1)", border: "1px solid hsl(var(--gold) / 0.2)" }}>
            📜
          </div>
          <h3 className="font-fantasy text-gold text-lg">Character Profile</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          I am a developer focused on modern frontend and full-stack web development. 
          I build responsive, aesthetic, and practical applications using JavaScript, React, 
          Tailwind, and related technologies. I enjoy creating interactive tools, AI-powered apps, 
          and productivity platforms. I focus on real-world projects and continuous skill growth.
        </p>
        <div className="mt-6 flex gap-4 text-sm text-gold/60 font-fantasy">
          <span>Class: Developer</span>
          <span>·</span>
          <span>Level: Rising</span>
          <span>·</span>
          <span>Rank: Builder</span>
        </div>
      </motion.div>
    </MapSectionWrapper>
  );
}
