import { motion } from "framer-motion";
import { useState } from "react";
import type { DreamCard as DreamCardType } from "./data";

interface Props {
  card: DreamCardType;
  index: number;
  onClick: (card: DreamCardType) => void;
}

export default function DreamCard({ card, index, onClick }: Props) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 800);
    onClick(card);
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl cursor-pointer group"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 5) * 0.08 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={handleClick}
    >
      {/* Glow border on hover */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        style={{ background: `linear-gradient(135deg, rgba(0,255,255,0.1), rgba(99,102,241,0.1))`,
          border: "1px solid rgba(0,255,255,0.3)",
          boxShadow: "0 0 30px rgba(0,255,255,0.15)" }} />

      {/* Top gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} opacity-70 group-hover:opacity-100 transition-opacity`} />

      {/* Floating animation wrapper */}
      <motion.div
        className="p-6 flex flex-col items-center text-center gap-4"
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 3 + (index % 3) * 0.5, ease: "easeInOut" }}
      >
        {/* Icon */}
        <motion.div
          className="text-5xl leading-none"
          whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.4 }}
        >
          {card.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-white font-bold text-base leading-tight"
          style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {card.title}
        </h3>

        {/* Quote */}
        <p className="text-slate-400 text-xs leading-relaxed italic line-clamp-2">
          "{card.quote}"
        </p>

        {/* Learn More button */}
        <motion.button
          className="mt-1 px-5 py-2 rounded-full text-xs font-bold text-black transition-all"
          style={{ background: "linear-gradient(135deg, #00BFFF, #00FFFF)",
            boxShadow: "0 0 16px rgba(0,191,255,0.3)" }}
          whileHover={{ boxShadow: "0 0 24px rgba(0,255,255,0.5)", scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More →
        </motion.button>
      </motion.div>

      {/* Ripple effects */}
      {ripples.map((r) => (
        <motion.div
          key={r.id}
          className="absolute pointer-events-none rounded-full"
          style={{ left: r.x, top: r.y, background: "rgba(0,255,255,0.3)" }}
          initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 0.6 }}
          animate={{ width: 300, height: 300, x: -150, y: -150, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      ))}

      {/* Corner glow dots */}
      <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ boxShadow: "0 0 6px #00FFFF" }} />
    </motion.div>
  );
}
