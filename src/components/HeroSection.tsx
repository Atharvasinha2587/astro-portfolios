import { motion } from "framer-motion";
import { Sparkles, Sword } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
      {/* Top/bottom gradient fades */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/80 z-[1]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-gold/30"
            style={{ background: "radial-gradient(circle, hsl(42 90% 55% / 0.15), transparent)" }}
          >
            <Sparkles className="w-7 h-7 text-gold" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gold/70 text-sm tracking-[0.35em] uppercase mb-4 font-fantasy"
        >
          ✦ A New Adventure Begins ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 font-fantasy"
        >
          <span className="gradient-text">Atharva</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-3 text-gold-light/80 text-base md:text-lg mb-3"
        >
          <Sword className="w-4 h-4" />
          <span className="font-medium">Full Stack Developer · AI Tools Enthusiast · Web Creator</span>
          <Sword className="w-4 h-4" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 italic"
        >
          "Building modern web experiences with code, design, and intelligent systems."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="magic-btn px-8 py-3 rounded-lg inline-block font-semibold"
          >
            ⚔ View Quests
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-gold/30 text-gold font-semibold hover:bg-gold/10 hover:border-gold/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            ✉ Send Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
