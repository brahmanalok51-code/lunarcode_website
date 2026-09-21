import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2, Orbit } from 'lucide-react';

export default function OurMission() {
  const { t } = useTranslation();

  const points = [
    t('mission.point_1'),
    t('mission.point_2'),
    t('mission.point_3'),
  ];

  return (
    <section id="about" className="py-24 bg-[#020204] relative overflow-hidden border-t border-purple-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
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

          {/* Right Interactive Radar/Orb Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center p-8 rounded-3xl bg-zinc-950/60 border border-purple-900/40 shadow-[0_0_50px_rgba(147,51,234,0.15)]"
          >
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-purple-500/20 flex items-center justify-center relative animate-pulse-slow">
              <div className="w-56 h-56 rounded-full border border-purple-500/30 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-purple-900/50 to-fuchsia-800/30 border border-purple-400/40 flex items-center justify-center shadow-[0_0_35px_rgba(168,85,247,0.4)]">
                  <Orbit className="w-16 h-16 text-purple-300 animate-spin-slow" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}