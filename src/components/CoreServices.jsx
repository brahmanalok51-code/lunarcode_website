import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Cpu, Cloud, ShieldCheck, Layers, ArrowRight } from 'lucide-react';

export default function CoreServices() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      title: t('services.custom_software.title'),
      desc: t('services.custom_software.desc'),
    },
    {
      icon: Cpu,
      title: t('services.ai_automation.title'),
      desc: t('services.ai_automation.desc'),
    },
    {
      icon: Layers,
      title: t('services.saas_dev.title'),
      desc: t('services.saas_dev.desc'),
    },
    {
      icon: Cloud,
      title: t('services.cloud_infra.title'),
      desc: t('services.cloud_infra.desc'),
    },
    {
      icon: ShieldCheck,
      title: t('services.security.title'),
      desc: t('services.security.desc'),
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#030305] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">
            {t('services.badge')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
            {t('services.title')}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative p-8 rounded-2xl bg-zinc-950/80 border border-purple-950/40 hover:border-purple-500/60 shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] transition-all backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-900/80 group-hover:text-purple-300 transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mt-6 group-hover:text-purple-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-purple-950/30 flex items-center gap-2 text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors cursor-pointer">
                  <span>{t('services.learn_more')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}