import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Terminal, 
  Cpu, 
  Layers, 
  Cloud, 
  ArrowUpRight,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/MetaTags';

export default function Services() {
  const { t } = useTranslation();

  const serviceList = [
    {
      id: "custom-software",
      icon: Terminal,
      title: t('service_page.custom_software.title'),
      p1: t('service_page.custom_software.p1'),
      p2: t('service_page.custom_software.p2'),
      tagLabel: t('service_page.custom_software.tag_label'),
      tags: t('service_page.custom_software.tags'),
      status: "OPTIMIZED_PIPELINE",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "ai-automation",
      icon: Cpu,
      title: t('service_page.ai_automation.title'),
      p1: t('service_page.ai_automation.p1'),
      p2: t('service_page.ai_automation.p2'),
      tagLabel: t('service_page.ai_automation.tag_label'),
      tags: t('service_page.ai_automation.tags'),
      status: "NEURAL_ACTIVE",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "saas-development",
      icon: Layers,
      title: t('service_page.saas_dev.title'),
      p1: t('service_page.saas_dev.p1'),
      p2: t('service_page.saas_dev.p2'),
      tagLabel: t('service_page.saas_dev.tag_label'),
      tags: t('service_page.saas_dev.tags'),
      status: "99.9%_UPTIME",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "cloud-infrastructure",
      icon: Cloud,
      title: t('service_page.cloud_infra.title'),
      p1: t('service_page.cloud_infra.p1'),
      p2: t('service_page.cloud_infra.p2'),
      tagLabel: t('service_page.cloud_infra.tag_label'),
      tags: t('service_page.cloud_infra.tags'),
      status: "MULTI_CLOUD_READY",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030305] text-zinc-100 pt-28 pb-24 relative overflow-hidden">
      {/* Exact Service SEO Meta Tags */}
      <MetaTags page="service" />

      {/* Atmospheric Glowing Neon Nebulas */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[40%] -right-36 w-[450px] h-[450px] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-36 w-[450px] h-[450px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 sm:space-y-32">
        
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto pt-4">
   

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t('service_page.hero_title_start')}{' '}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
              {t('service_page.hero_title_highlight')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            {t('service_page.hero_subtitle')}
          </motion.p>
        </section>

        {/* Detailed Service Blocks */}
        <section className="space-y-20 sm:space-y-28">
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isReversed ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content Side (7 columns) */}
                <div className={`space-y-6 lg:col-span-7 ${isReversed ? 'lg:col-start-6' : ''}`}>
                  <div className="flex items-center gap-3">
                    <motion.div 
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <span className="text-xs uppercase font-mono tracking-widest text-purple-400">
                      SERVICE PHASE 0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {service.p1}
                  </p>

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {service.p2}
                  </p>

                  {/* Badge & Technical Specs with neon hover effect */}
                  <div className="pt-2">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-xl bg-gradient-to-r from-zinc-950 to-[#0c0919] border border-purple-900/40 inline-block w-full sm:w-auto shadow-sm"
                    >
                      <div className="text-xs uppercase tracking-wider text-purple-400 font-mono mb-1 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                        {service.tagLabel}
                      </div>
                      <div className="text-sm font-semibold text-zinc-200">
                        {service.tags}
                      </div>
                    </motion.div>
                  </div>

                  <div className="pt-2">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/70 border border-purple-500/40 text-purple-300 hover:text-white transition-all shadow-md group"
                      >
                        <span>{t('service_page.cta_audit')}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Animated Image Showcase Side (5 columns, compact size & float animation) */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    className="relative max-w-sm sm:max-w-md mx-auto group rounded-2xl p-[1px] bg-gradient-to-b from-purple-500/40 via-purple-900/20 to-transparent shadow-[0_0_35px_rgba(147,51,234,0.25)] hover:shadow-[0_0_50px_rgba(168,85,247,0.45)] transition-all duration-500"
                  >
                    <div className="relative rounded-2xl overflow-hidden bg-[#07050d]">
                      {/* Top Ambient Glow overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent opacity-70 z-10 pointer-events-none" />
                      <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />

                      {/* Compact Image */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[240px] sm:h-[280px] object-cover filter brightness-90 contrast-105 group-hover:scale-108 transition-transform duration-700 ease-out"
                      />

                      {/* Top Floating Status Badge */}
                      <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-purple-500/40 text-[10px] font-mono text-purple-300">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        <span>{service.status}</span>
                      </div>

                      {/* Bottom Holographic HUD Bar */}
                      <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-purple-500/30 text-[11px] font-mono text-zinc-300">
                        <span className="text-purple-400 font-bold">LUNAR_{index + 1}</span>
                        <div className="flex items-center gap-1 text-[10px] text-zinc-400">
                          <Activity className="w-3 h-3 text-purple-400" />
                          <span>NODE SYNCED</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </section>

      </div>
    </div>
  );
}