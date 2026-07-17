import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Props {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "welcome">("loading");
  const [visible, setVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number; color: string }[] = [];
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.5 ? "0,255,255" : "100,100,255",
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
        // connect nearby
        particles.forEach((p2) => {
          const dx = p.x - p2.x, dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,255,255,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", resize); };
  }, []);

  // Progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + (p < 60 ? 2 : p < 90 ? 1 : 0.5);
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setPhase("welcome"), 300);
      setTimeout(() => { setVisible(false); setTimeout(onComplete, 600); }, 2800);
    }
  }, [progress, onComplete]);

  const handleClick = () => {
    if (progress >= 100) { setVisible(false); setTimeout(onComplete, 500); }
  };

  const loadingTexts = ["Initializing Portfolio...", "Loading Dream Matrix...", "Calibrating Vision Systems...", "Activating Neural Interface..."];
  const textIndex = Math.floor(progress / 25) % loadingTexts.length;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer select-none"
          style={{ background: "linear-gradient(135deg, #050816 0%, #0a0a2e 50%, #050816 100%)" }}
          onClick={handleClick}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Particle canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

          {/* Scan lines */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.015) 2px, rgba(0,255,255,0.015) 4px)"
          }} />

          {/* Aurora glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 70%)", filter: "blur(50px)" }} />

          <AnimatePresence mode="wait">
            {phase === "loading" ? (
              <motion.div key="loading" className="relative z-10 flex flex-col items-center gap-8 px-8"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}>

                {/* Logo */}
                <motion.div className="relative"
                  animate={{ scale: [1, 1.04, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <div className="text-7xl md:text-8xl font-black tracking-widest"
                    style={{ fontFamily: "'Orbitron', monospace", color: "#00FFFF",
                      textShadow: "0 0 30px #00FFFF, 0 0 60px #00BFFF, 0 0 100px rgba(0,191,255,0.5)" }}>
                    TKSP
                  </div>
                  {/* Corner brackets */}
                  {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
                    <div key={i} className={`absolute ${pos} w-4 h-4`} style={{
                      borderTop: i < 2 ? "2px solid #00FFFF" : "none",
                      borderBottom: i >= 2 ? "2px solid #00FFFF" : "none",
                      borderLeft: i % 2 === 0 ? "2px solid #00FFFF" : "none",
                      borderRight: i % 2 === 1 ? "2px solid #00FFFF" : "none",
                    }} />
                  ))}
                </motion.div>

                {/* Subtitle */}
                <motion.p className="text-sm tracking-[0.3em] uppercase text-cyan-400/70"
                  style={{ fontFamily: "'Orbitron', monospace" }}>
                  Thaticherla Kali Someshwaraprasad
                </motion.p>

                {/* Loading bar */}
                <div className="w-80 md:w-96">
                  <div className="flex justify-between text-xs text-cyan-500/60 mb-2"
                    style={{ fontFamily: "monospace" }}>
                    <span>{loadingTexts[textIndex]}</span>
                    <span>{Math.floor(progress)}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden border border-cyan-500/20">
                    <motion.div className="h-full rounded-full"
                      style={{ width: `${progress}%`, background: "linear-gradient(90deg, #6366f1, #00FFFF)",
                        boxShadow: "0 0 12px #00FFFF" }}
                      transition={{ ease: "linear" }} />
                  </div>
                  {/* Segment ticks */}
                  <div className="flex justify-between mt-1">
                    {[0, 25, 50, 75, 100].map((tick) => (
                      <div key={tick} className="w-px h-1.5 rounded"
                        style={{ background: progress >= tick ? "#00FFFF" : "rgba(255,255,255,0.1)" }} />
                    ))}
                  </div>
                </div>

                {/* Hex grid decorations */}
                <div className="flex gap-3 mt-2">
                  {[...Array(6)].map((_, i) => (
                    <motion.div key={i} className="w-2 h-2 rounded-sm"
                      style={{ background: "#00FFFF", opacity: 0.3 + (i * 0.1) }}
                      animate={{ opacity: [0.2, 0.8, 0.2] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }} />
                  ))}
                </div>

                <p className="text-xs text-white/20 mt-4" style={{ fontFamily: "monospace" }}>
                  Click anywhere to skip
                </p>
              </motion.div>
            ) : (
              <motion.div key="welcome" className="relative z-10 flex flex-col items-center gap-6 text-center px-8"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}>
                <motion.div className="text-5xl md:text-7xl font-black"
                  style={{ fontFamily: "'Orbitron', monospace",
                    background: "linear-gradient(135deg, #6366f1, #00FFFF, #a855f7)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    textShadow: "none", filter: "drop-shadow(0 0 30px rgba(0,255,255,0.4))" }}>
                  Welcome to My
                </motion.div>
                <motion.div className="text-5xl md:text-7xl font-black"
                  style={{ fontFamily: "'Orbitron', monospace",
                    background: "linear-gradient(135deg, #00FFFF, #6366f1, #f472b6)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 30px rgba(99,102,241,0.5))" }}>
                  Dream Universe
                </motion.div>
                <motion.div className="flex gap-2 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div key={i} className="w-3 h-3 rounded-full bg-cyan-400"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }} />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
