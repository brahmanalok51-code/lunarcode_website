import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const techPartners = [
  "AWS Cloud", "Google Cloud", "OpenAI", "Supabase", "Docker", "Stripe", "MongoDB", "Kubernetes", "Tailwind"
];

export default function OurCollaboration() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-[#020204] border-y border-purple-950/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">
          {t('collaboration.badge')}
        </span>
        <h3 className="text-sm sm:text-base text-zinc-400 mt-1">
          {t('collaboration.heading')}
        </h3>
      </div>

      {/* Infinite scrolling ticker */}
      <div className="flex space-x-12 overflow-hidden select-none">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex space-x-12 items-center flex-shrink-0"
        >
          {techPartners.concat(techPartners).map((partner, index) => (
            <div
              key={index}
              className="px-6 py-2.5 rounded-xl bg-zinc-950/70 border border-purple-900/30 text-zinc-400 hover:text-purple-300 font-mono text-sm tracking-wide shadow-sm hover:border-purple-500/40 transition-colors whitespace-nowrap cursor-default"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}