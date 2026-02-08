import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Space Encyclopedia",
    description: "Informational space-focused platform with structured planet data and modern UI.",
    tech: ["React", "CSS", "API"],
  },
  {
    title: "Currency Converter",
    description: "Real-time currency conversion web app using APIs and dynamic UI.",
    tech: ["JavaScript", "REST API", "CSS"],
  },
  {
    title: "Image to PDF Converter",
    description: "Utility web tool for converting images into PDF files.",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Finance Tracker App",
    description: "Practical expense tracking app with clean interface and functionality.",
    tech: ["React", "Tailwind", "LocalStorage"],
  },
  {
    title: "Weather Forecast App",
    description: "Interactive weather app with dynamic visuals and city-based forecasts.",
    tech: ["React", "API", "Tailwind"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="glass-card-hover p-6 flex flex-col"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
              <div className="w-3 h-3 rounded-full bg-primary animate-glow-pulse" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink size={14} /> Live Demo
              </button>
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Github size={14} /> GitHub
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
