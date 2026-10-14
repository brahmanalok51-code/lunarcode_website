import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Terminal } from 'lucide-react';

export default function OurMission() {
  const { t } = useTranslation();

  const points = [
    t('mission.point_1'),
    t('mission.point_2'),
    t('mission.point_3'),
  ];

  return (
    <section id="about" className="py-24 bg-[#020204] relative overflow-hidden border-t border-purple-950/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">
              {t('mission.badge')}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 leading-tight">
              {t('mission.title')}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-6 leading-relaxed">
              {t('mission.desc_1')}
            </p>
            <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
              {t('mission.desc_2')}
            </p>

            <div className="mt-8 space-y-3">
              {points.map((pt, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-zinc-200 text-sm font-medium">{pt}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Card with High-Contrast Purple & Neon Orange Rotating Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center p-[2px] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,106,0,0.25)] max-w-lg mx-auto w-full group"
          >
            {/* Vivid Purple & Neon Orange Rotating Conic Gradient */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,#ff6a00_0deg,#ff3d00_60deg,#9333ea_180deg,#c084fc_240deg,#ff6a00_360deg)] opacity-100"
            />

            {/* Inner Content Container */}
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-[22px] overflow-hidden bg-[#07050d] z-10">
              {/* Premium Futuristic AI Data Mesh Image */}
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop"
                alt="LunarCode Neural Mission Architecture"
                className="w-full h-full object-cover filter brightness-[0.85] contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Glowing Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/30 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-purple-950/20 mix-blend-color pointer-events-none" />

              {/* Top Tech Floating Chip */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-orange-500/40 text-[11px] font-mono text-orange-300 shadow-[0_0_15px_rgba(255,106,0,0.3)]">
                <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
                <span>MISSION_CORE_INITIALIZED</span>
              </div>

              {/* Bottom Holographic HUD Info */}
              <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-purple-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-950/90 border border-purple-500/40 flex items-center justify-center text-purple-400">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-white tracking-wide">ARCHITECTURE ACTIVE</div>
                    <div className="text-[10px] text-purple-300/80 font-mono">0.00ms FAILSAFE TOLERANCE</div>
                  </div>
                </div>
            
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}