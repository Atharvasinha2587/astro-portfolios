import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import MapSectionWrapper from "./MapSectionWrapper";

export default function ContactSection() {
  const [form, setForm] = useState({ email: "", message: "" });

  return (
    <MapSectionWrapper
      id="contact"
      title="Send a"
      titleAccent="Message"
      icon="✉"
      locationLabel="Messenger's Guild"
      side="left"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fantasy-card p-8"
        style={{
          boxShadow: "0 0 40px hsl(var(--gold) / 0.06), 0 4px 24px hsl(235 30% 5% / 0.5)",
          borderColor: "hsl(var(--gold) / 0.2)",
        }}
      >
        <p className="text-center text-gold/70 mb-8 font-fantasy text-sm tracking-wide">
          ✦ Let's build something impactful ✦
        </p>

        <div className="space-y-4 mb-6">
          <input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="magic-input"
          />
          <textarea
            placeholder="Your message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="magic-input resize-none"
          />
          <button className="magic-btn">
            ✦ Send Message
          </button>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-colors duration-300">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-colors duration-300">
            <Linkedin size={20} />
          </a>
          <a href="mailto:hello@example.com"
            className="text-muted-foreground hover:text-gold transition-colors duration-300">
            <Mail size={20} />
          </a>
        </div>
      </motion.div>
    </MapSectionWrapper>
  );
}
