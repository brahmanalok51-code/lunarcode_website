import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function TrustedInnovators() {
  const { t } = useTranslation();

  const metrics = [
    { val: t('trusted.metric_1_val'), label: t('trusted.metric_1_label') },
    { val: t('trusted.metric_2_val'), label: t('trusted.metric_2_label') },
    { val: t('trusted.metric_3_val'), label: t('trusted.metric_3_label') },
    { val: t('trusted.metric_4_val'), label: t('trusted.metric_4_label') },
  ];

  return (
    <section className="py-20 bg-[#030305] border-y border-purple-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">
          {t('trusted.badge')}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
          {t('trusted.title')}
        </h2>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto mt-2">
          {t('trusted.subtitle')}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-950/60 border border-purple-900/30 hover:border-purple-500/50 shadow-[0_0_20px_rgba(0,0,0,0.7)] transition-all"
            >
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                {item.val}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 mt-2 font-medium">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}