import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import LoadingScreen from "./LoadingScreen";
import DreamCardComponent from "./DreamCard";
import Modal from "./Modal";
import { dreams, type DreamCard } from "./data";

// ──────────────────────────────────────────────
// Animated background canvas
// ──────────────────────────────────────────────
function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const shapes: { x: number; y: number; size: number; speed: number; angle: number; color: string; type: "hex" | "tri" }[] = [];
    for (let i = 0; i < 25; i++) {
      shapes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 30 + 10,
        speed: Math.random() * 0.3 + 0.05,
        angle: Math.random() * Math.PI * 2,
        color: Math.random() > 0.5 ? "rgba(0,255,255,0.06)" : "rgba(99,102,241,0.06)",
        type: Math.random() > 0.5 ? "hex" : "tri",
      });
    }

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      shapes.forEach((s) => {
        s.y -= s.speed;
        s.angle += 0.005;
        if (s.y + s.size < 0) { s.y = canvas.height + s.size; s.x = Math.random() * canvas.width; }
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.angle);
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 1;
        if (s.type === "hex") {
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const a = (Math.PI / 3) * i;
            const x = s.size * Math.cos(a), y = s.size * Math.sin(a);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.closePath();
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -s.size);
          ctx.lineTo(s.size * 0.866, s.size * 0.5);
          ctx.lineTo(-s.size * 0.866, s.size * 0.5);
          ctx.closePath();
        }
        ctx.stroke();
        ctx.restore();
      });
      requestAnimationFrame(draw);
    };
    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}

// ──────────────────────────────────────────────
// Navbar
// ──────────────────────────────────────────────
const NAV_LINKS = ["Home", "About Me", "Dream Goals", "Skills", "Projects", "Achievements", "Contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,8,22,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,255,255,0.1)" : "none",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-black text-xl tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors"
          style={{ fontFamily: "'Orbitron', monospace", textShadow: "0 0 20px rgba(0,255,255,0.5)" }}>
          TKSP<span className="text-white">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={link === "Home" ? "/" : link === "Dream Goals" ? "#goals" : `#${link.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors relative group"
                style={{ fontFamily: "'Poppins', sans-serif" }}>
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {[0, 1, 2].map((i) => (
            <motion.span key={i} className="block w-5 h-0.5 bg-cyan-400 rounded"
              animate={menuOpen ? {
                rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                y: i === 0 ? 8 : i === 2 ? -8 : 0,
                opacity: i === 1 ? 0 : 1,
              } : { rotate: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="md:hidden absolute top-full left-0 right-0 p-6 flex flex-col gap-4"
            style={{ background: "rgba(5,8,22,0.97)", backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(0,255,255,0.1)" }}
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            {NAV_LINKS.map((link) => (
              <a key={link} href={link === "Home" ? "/" : "#"}
                className="text-slate-300 hover:text-cyan-400 transition-colors py-1"
                onClick={() => setMenuOpen(false)}>
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ──────────────────────────────────────────────
// Scroll progress bar
// ──────────────────────────────────────────────
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div className="fixed top-0 left-0 right-0 h-0.5 z-50 origin-left"
      style={{ scaleX, background: "linear-gradient(90deg, #6366f1, #00FFFF)",
        boxShadow: "0 0 8px #00FFFF" }} />
  );
}

// ──────────────────────────────────────────────
// Main App
// ──────────────────────────────────────────────
export default function DreamGoals() {
  const [loaded, setLoaded] = useState(false);
  const [selectedCard, setSelectedCard] = useState<DreamCard | null>(null);
  const [showBTT, setShowBTT] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBTT(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selectedCard ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedCard]);

  return (
    <div className="min-h-screen relative" style={{ background: "linear-gradient(135deg, #050816 0%, #0d0d2e 40%, #050816 100%)" }}>
      {/* Loading screen */}
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {/* Background */}
      <Background />

      {/* Aurora glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #00FFFF, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)", filter: "blur(100px)" }} />
      </div>

      {/* Scroll progress */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <AnimatePresence>
        {loaded && (
          <motion.main
            className="relative z-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          >
            {/* HERO / HEADER */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-12">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}>

                {/* Badge */}
                <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 border border-cyan-500/30"
                  style={{ background: "rgba(0,255,255,0.06)", color: "#00FFFF", fontFamily: "monospace" }}
                  animate={{ boxShadow: ["0 0 10px rgba(0,255,255,0.1)", "0 0 20px rgba(0,255,255,0.3)", "0 0 10px rgba(0,255,255,0.1)"] }}
                  transition={{ repeat: Infinity, duration: 3 }}>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  TKSP — My Dream Universe
                </motion.div>

                {/* Title */}
                <h1 className="font-black mb-4 leading-tight"
                  style={{
                    fontFamily: "'Orbitron', monospace",
                    fontSize: "clamp(2.5rem, 7vw, 5rem)",
                    background: "linear-gradient(135deg, #ffffff 0%, #00FFFF 50%, #a855f7 100%)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 30px rgba(0,255,255,0.3))",
                  }}>
                  🚀 My Dream Journey
                </h1>

                {/* Subtitle */}
                <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
                  style={{ fontFamily: "'Poppins', sans-serif" }}>
                  "Every dream represents a goal I am{" "}
                  <span className="text-cyan-400 font-semibold">determined</span> to achieve."
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-6 mb-10">
                  {[
                    { label: "Dream Paths", value: "20" },
                    { label: "Aspirations", value: "∞" },
                    { label: "Determination", value: "100%" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-black text-cyan-400"
                        style={{ fontFamily: "'Orbitron', monospace", textShadow: "0 0 15px rgba(0,255,255,0.5)" }}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Scroll cue */}
                <motion.a href="#goals" className="flex flex-col items-center gap-2 text-slate-500 text-xs hover:text-cyan-400 transition-colors"
                  animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
                  <span>Explore Dreams</span>
                  <div className="w-5 h-8 border border-slate-600 rounded-full flex justify-center pt-1.5">
                    <div className="w-1 h-2 bg-cyan-400 rounded-full" />
                  </div>
                </motion.a>
              </motion.div>
            </section>

            {/* DREAM GOALS GRID */}
            <section id="goals" className="px-4 md:px-8 pb-24 max-w-7xl mx-auto">
              <div className="text-center mb-14">
                <motion.span className="text-xs font-bold tracking-[0.3em] uppercase text-cyan-500 block mb-3"
                  style={{ fontFamily: "'Orbitron', monospace" }}
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  Career Vision
                </motion.span>
                <motion.h2 className="text-4xl md:text-5xl font-black text-white mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  My Dream Goals
                </motion.h2>
                <motion.div className="w-16 h-1 mx-auto rounded-full"
                  style={{ background: "linear-gradient(90deg, #6366f1, #00FFFF)", boxShadow: "0 0 12px #00FFFF" }}
                  initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} />
                <motion.p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  Click any card to explore detailed information about each career path.
                </motion.p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
                {dreams.map((card, index) => (
                  <DreamCardComponent key={card.id} card={card} index={index} onClick={setSelectedCard} />
                ))}
              </div>
            </section>

            {/* FOOTER */}
            <footer className="relative z-10 border-t border-white/5 py-10 text-center px-6"
              style={{ background: "rgba(5,8,22,0.8)" }}>
              <motion.p className="text-2xl font-black mb-2"
                style={{ fontFamily: "'Orbitron', monospace",
                  background: "linear-gradient(135deg, #00FFFF, #6366f1, #a855f7)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                My Dreams. My Journey. My Future.
              </motion.p>
              <p className="text-slate-500 text-xs mt-1">
                © 2025 Thaticherla Kali Someshwaraprasad · Built with passion & purpose
              </p>
              <div className="flex justify-center gap-4 mt-4">
                {["GitHub", "LinkedIn", "Portfolio"].map((link) => (
                  <a key={link} href={link === "Portfolio" ? "/" : "#"}
                    className="text-xs text-slate-600 hover:text-cyan-400 transition-colors">{link}</a>
                ))}
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Modal */}
      <Modal card={selectedCard} onClose={() => setSelectedCard(null)} />

      {/* Back to top */}
      <AnimatePresence>
        {showBTT && loaded && (
          <motion.button
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold z-40"
            style={{ background: "linear-gradient(135deg, #00BFFF, #00FFFF)",
              boxShadow: "0 4px 20px rgba(0,191,255,0.4)" }}
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1, boxShadow: "0 8px 30px rgba(0,255,255,0.5)" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
