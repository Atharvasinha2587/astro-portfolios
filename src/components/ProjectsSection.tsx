import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import MapSectionWrapper from "./MapSectionWrapper";

const projects = [
  {
    title: "Space Encyclopedia",
    description: "Informational space-focused platform with structured planet data and modern UI.",
    tech: ["React", "CSS", "API"],
    icon: "🌌",
    rarity: "Legendary",
  },
  {
    title: "Currency Converter",
    description: "Real-time currency conversion web app using APIs and dynamic UI.",
    tech: ["JavaScript", "REST API", "CSS"],
    icon: "💰",
    rarity: "Epic",
  },
  {
    title: "Image to PDF Converter",
    description: "Utility web tool for converting images into PDF files.",
    tech: ["JavaScript", "HTML", "CSS"],
    icon: "📄",
    rarity: "Rare",
  },
  {
    title: "Finance Tracker App",
    description: "Practical expense tracking app with clean interface and functionality.",
    tech: ["React", "Tailwind", "LocalStorage"],
    icon: "📊",
    rarity: "Epic",
  },
  {
    title: "Weather Forecast App",
    description: "Interactive weather app with dynamic visuals and city-based forecasts.",
    tech: ["React", "API", "Tailwind"],
    icon: "🌤",
    rarity: "Rare",
  },
];

const rarityColors: Record<string, string> = {
  Legendary: "text-gold golden-text",
  Epic: "text-mystic",
  Rare: "text-emerald",
};

export default function ProjectsSection() {
  return (
    <MapSectionWrapper
      id="projects"
      title="Quest"
      titleAccent="Log"
      icon="⚔"
      locationLabel="Quest Board"
      side="left"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="fantasy-card-hover p-5 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl">{project.icon}</span>
              <span className={`text-xs font-fantasy ${rarityColors[project.rarity]}`}>
                ✦ {project.rarity}
              </span>
            </div>

            <h3 className="text-base font-semibold text-foreground mb-1.5 font-fantasy">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-xs rounded skill-orb"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-2 border-t border-gold/10">
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-gold transition-colors">
                <ExternalLink size={13} /> Live Demo
              </button>
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-gold transition-colors">
                <Github size={13} /> GitHub
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </MapSectionWrapper>
  );
}
