import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

export default function FloatingSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(42, 90%, 55%)",
      "hsl(45, 85%, 70%)",
      "hsl(280, 45%, 55%)",
      "hsl(160, 50%, 40%)",
    ];
    const generated: Sparkle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 8,
      duration: 4 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setSparkles(generated);
  }, []);

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: s.color,
            boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
            animation: `sparkle-float ${s.duration}s ${s.delay}s ease-in-out infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
