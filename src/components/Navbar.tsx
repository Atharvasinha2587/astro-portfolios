import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const links = [
  { label: "Origin", href: "#about", icon: "🏠" },
  { label: "Skills", href: "#skills", icon: "⚡" },
  { label: "Quests", href: "#projects", icon: "⚔" },
  { label: "Journey", href: "#experience", icon: "🗺" },
  { label: "Contact", href: "#contact", icon: "✉" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-gold" />
          <span className="text-xl font-bold font-fantasy gradient-text">A.</span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300 flex items-center gap-1.5"
            >
              <span className="text-xs">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
