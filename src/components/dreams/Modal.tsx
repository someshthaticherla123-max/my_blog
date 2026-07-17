import { motion, AnimatePresence } from "framer-motion";
import type { DreamCard } from "./data";

interface Props {
  card: DreamCard | null;
  onClose: () => void;
}

export default function Modal({ card, onClose }: Props) {
  if (!card) return null;

  return (
    <AnimatePresence>
      {card && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0" style={{ background: "rgba(5,8,22,0.92)", backdropFilter: "blur(20px)" }} />

          {/* Modal Card */}
          <motion.div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(15,15,50,0.95), rgba(5,8,22,0.98))",
              border: "1px solid rgba(0,255,255,0.2)",
              boxShadow: "0 0 60px rgba(0,255,255,0.15), 0 0 120px rgba(99,102,241,0.1)",
            }}
            initial={{ scale: 0.85, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.85, y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`relative p-8 pb-6 bg-gradient-to-br ${card.color} rounded-t-2xl`}
              style={{ opacity: 0.9 }}>
              <div className="absolute inset-0 rounded-t-2xl"
                style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.6))" }} />
              <div className="relative z-10">
                <div className="text-6xl mb-3">{card.icon}</div>
                <h2 className="text-3xl font-black text-white mb-1"
                  style={{ fontFamily: "'Orbitron', monospace" }}>{card.title}</h2>
                <p className="text-white/70 italic text-sm">"{card.quote}"</p>
              </div>
              {/* Close button */}
              <button onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all text-xl z-10">
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">

              {/* Description */}
              <div>
                <SectionLabel>Overview</SectionLabel>
                <p className="text-slate-300 leading-relaxed text-sm">{card.description}</p>
              </div>

              {/* Two columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Education */}
                <InfoBox label="Education Path" icon="🎓">
                  <p className="text-slate-300 text-sm">{card.education}</p>
                </InfoBox>

                {/* Salary */}
                <InfoBox label="Salary Range" icon="💰">
                  <p className="text-emerald-400 font-bold text-lg">{card.salary}</p>
                </InfoBox>

                {/* Eligibility */}
                <InfoBox label="Eligibility" icon="✅">
                  <p className="text-slate-300 text-sm">{card.eligibility}</p>
                </InfoBox>

                {/* Future Scope */}
                <InfoBox label="Future Scope" icon="🔭">
                  <p className="text-cyan-300 text-sm">{card.futureScope}</p>
                </InfoBox>
              </div>

              {/* Skills */}
              <div>
                <SectionLabel>Key Skills</SectionLabel>
                <div className="flex flex-wrap gap-2 mt-2">
                  {card.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 border border-cyan-500/30"
                      style={{ background: "rgba(0,255,255,0.08)" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Roadmap */}
              <div>
                <SectionLabel>Career Roadmap</SectionLabel>
                <div className="relative mt-3 pl-6">
                  <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-transparent" />
                  {card.roadmap.map((step, i) => (
                    <div key={i} className="relative mb-4 last:mb-0">
                      <div className="absolute -left-4 top-1 w-3 h-3 rounded-full border-2 border-cyan-400 bg-slate-900"
                        style={{ boxShadow: "0 0 8px rgba(0,255,255,0.5)" }} />
                      <p className="text-slate-300 text-sm pl-2">
                        <span className="text-cyan-400 font-semibold mr-2">{i + 1}.</span>{step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Institutes */}
              <div>
                <SectionLabel>Top Institutes</SectionLabel>
                <div className="flex flex-wrap gap-2 mt-2">
                  {card.institutes.map((inst) => (
                    <span key={inst} className="px-3 py-1 rounded-lg text-xs text-purple-300 border border-purple-500/30"
                      style={{ background: "rgba(168,85,247,0.08)" }}>
                      🏛️ {inst}
                    </span>
                  ))}
                </div>
              </div>

              {/* Inspiration */}
              <div className="rounded-xl p-5 border border-cyan-500/20"
                style={{ background: "rgba(0,255,255,0.04)" }}>
                <p className="text-cyan-300 italic text-sm leading-relaxed text-center">{card.inspiration}</p>
              </div>

              {/* Back button */}
              <button onClick={onClose}
                className="w-full py-3 rounded-xl font-bold text-black text-sm transition-all hover:scale-[1.02] active:scale-95"
                style={{ background: "linear-gradient(135deg, #00BFFF, #00FFFF)",
                  boxShadow: "0 4px 20px rgba(0,191,255,0.4)" }}>
                ← Back to Goals
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
      <span className="text-xs font-bold tracking-widest uppercase text-cyan-400"
        style={{ fontFamily: "'Orbitron', monospace" }}>{children}</span>
      <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/40 to-transparent" />
    </div>
  );
}

function InfoBox({ label, icon, children }: { label: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl p-4 border border-white/5"
      style={{ background: "rgba(255,255,255,0.03)" }}>
      <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1">
        <span>{icon}</span>{label}
      </p>
      {children}
    </div>
  );
}
