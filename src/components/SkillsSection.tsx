import { motion } from "framer-motion";
import MapSectionWrapper from "./MapSectionWrapper";

const categories = [
  {
    title: "⚔ Combat Arts (Frontend)",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    color: "gold",
  },
  {
    title: "🧪 Arcane Knowledge (Programming)",
    skills: ["Java", "Python"],
    color: "mystic",
  },
  {
    title: "🛡 Equipment (Libraries & Tools)",
    skills: ["React", "Tailwind", "Vite", "Git", "GitHub"],
    color: "emerald",
  },
  {
    title: "📖 Ancient Scrolls (Concepts)",
    skills: ["Full-stack Basics", "API Integration", "UI/UX Development"],
    color: "amber",
  },
];

export default function SkillsSection() {
  return (
    <MapSectionWrapper
      id="skills"
      title="Skill"
      titleAccent="Tree"
      icon="⚡"
      locationLabel="Training Grounds"
      side="right"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="fantasy-card-hover p-5"
          >
            <h3 className="text-gold font-fantasy text-sm mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-orb">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </MapSectionWrapper>
  );
}
