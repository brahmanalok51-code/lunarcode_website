import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Lightbulb, 
  Award, 
  Users, 
  ShieldCheck, 
  GraduationCap, 
  Code, 
  Layers, 
  Cpu, 
  Cloud, 
  Workflow, 
  Compass, 
  FileCode2, 
  Kanban, 
  CheckCircle, 
  Rocket, 
  Handshake, 
  Zap,
  ArrowRight
} from 'lucide-react';
import MetaTags from '../components/MetaTags';

export default function About() {
  const { t } = useTranslation();

  const values = [
    { icon: Lightbulb, title: t('about_page.values.val_1_title'), desc: t('about_page.values.val_1_desc') },
    { icon: Award, title: t('about_page.values.val_2_title'), desc: t('about_page.values.val_2_desc') },
    { icon: Users, title: t('about_page.values.val_3_title'), desc: t('about_page.values.val_3_desc') },
    { icon: ShieldCheck, title: t('about_page.values.val_4_title'), desc: t('about_page.values.val_4_desc') },
    { icon: GraduationCap, title: t('about_page.values.val_5_title'), desc: t('about_page.values.val_5_desc') },
  ];

  const expertise = [
    { icon: Code, name: t('about_page.expertise_items.e1') },
    { icon: Layers, name: t('about_page.expertise_items.e2') },
    { icon: Cpu, name: t('about_page.expertise_items.e3') },
    { icon: Rocket, name: t('about_page.expertise_items.e4') },
    { icon: Cloud, name: t('about_page.expertise_items.e5') },
    { icon: Workflow, name: t('about_page.expertise_items.e6') },
  ];

  const steps = [
    { icon: Compass, title: t('about_page.steps.s1_title'), desc: t('about_page.steps.s1_desc') },
    { icon: FileCode2, title: t('about_page.steps.s2_title'), desc: t('about_page.steps.s2_desc') },
    { icon: Kanban, title: t('about_page.steps.s3_title'), desc: t('about_page.steps.s3_desc') },
    { icon: CheckCircle, title: t('about_page.steps.s4_title'), desc: t('about_page.steps.s4_desc') },
    { icon: Rocket, title: t('about_page.steps.s5_title'), desc: t('about_page.steps.s5_desc') },
  ];

  const whyPoints = [
    t('about_page.why_points.w1'),
    t('about_page.why_points.w2'),
    t('about_page.why_points.w3'),
    t('about_page.why_points.w4'),
    t('about_page.why_points.w5'),
    t('about_page.why_points.w6'),
  ];

  return (
    <div className="min-h-screen bg-[#030305] text-zinc-100 pt-28 pb-20 relative overflow-hidden">
      {/* Exact About SEO Meta Tags */}
      <MetaTags page="about" />

      {/* Background Animated Neon Mesh Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[45%] -left-32 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28">

        {/* 1. Hero Header */}
        <section className="text-center max-w-4xl mx-auto pt-4">
       

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t('about_page.hero_title_start')}{' '}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
              {t('about_page.hero_title_highlight')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            {t('about_page.hero_subtitle')}
          </motion.p>
        </section>

        {/* 2. Company Overview & Our Story (Two Column Card) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-purple-950/50 hover:border-purple-500/50 shadow-[0_8px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl relative group transition-all"
          >
            <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">
              {t('about_page.overview_badge')}
            </span>
            <h2 className="text-2xl font-bold text-white mt-2 mb-4 group-hover:text-purple-300 transition-colors">
              {t('about_page.overview_title')}
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              {t('about_page.overview_p1')}
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {t('about_page.overview_p2')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-purple-950/50 hover:border-purple-500/50 shadow-[0_8px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl relative group transition-all"
          >
            <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">
              {t('about_page.story_badge')}
            </span>
            <h2 className="text-2xl font-bold text-white mt-2 mb-4 group-hover:text-purple-300 transition-colors">
              {t('about_page.story_title')}
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              {t('about_page.story_p1')}
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {t('about_page.story_p2')}
            </p>
          </motion.div>
        </section>

        {/* 3. Mission & Vision Glowing Banners */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-950/40 via-zinc-950 to-zinc-950 border border-purple-800/40 shadow-[0_0_40px_rgba(147,51,234,0.15)] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-6 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">
                {t('about_page.mission_title')}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {t('about_page.mission_desc')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-fuchsia-950/40 via-zinc-950 to-zinc-950 border border-fuchsia-800/40 shadow-[0_0_40px_rgba(217,70,239,0.15)] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-900/60 border border-fuchsia-400/30 flex items-center justify-center text-fuchsia-300 mb-6 shadow-[0_0_20px_rgba(217,70,239,0.4)]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">
                {t('about_page.vision_title')}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {t('about_page.vision_desc')}
              </p>
            </div>
          </motion.div>
        </section>

        {/* 4. Our Core Values (5 Principles) */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">
              {t('about_page.values_badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              {t('about_page.values_heading')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-7 rounded-2xl bg-zinc-950/70 border border-purple-950/50 hover:border-purple-500/60 shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{v.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 5. Our Expertise Grid */}
        <section className="p-8 sm:p-12 rounded-3xl bg-zinc-950/60 border border-purple-900/30 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">
              {t('about_page.expertise_badge')}
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              {t('about_page.expertise_heading')}
            </h2>
            <p className="text-zinc-400 text-sm mt-3">{t('about_page.expertise_sub')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {expertise.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.04 }}
                  className="flex items-center gap-3 p-4 sm:p-5 rounded-xl bg-[#090812] border border-purple-950/60 hover:border-purple-500/60 text-zinc-200 transition-all cursor-default"
                >
                  <Icon className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">{item.name}</span>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 6. Development Approach (1 to 5 Step Pipeline) */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">
              {t('about_page.approach_badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              {t('about_page.approach_heading')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((st, i) => {
              const Icon = st.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative p-6 rounded-2xl bg-zinc-950/80 border border-purple-950/40 hover:border-purple-500/50 flex flex-col justify-between shadow-md"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 font-mono font-bold text-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{st.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{st.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 7. Why Businesses Choose Us & Commitment to Innovation */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Why choose points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-purple-950/50 shadow-xl flex flex-col justify-between"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">
                {t('about_page.why_badge')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-6">
                {t('about_page.why_heading')}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#090812] border border-purple-950/50">
                    <Zap className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-zinc-300">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Commitment to Innovation Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-purple-950/50 via-zinc-950 to-zinc-950 border border-purple-600/40 shadow-[0_0_40px_rgba(168,85,247,0.2)] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-purple-900/60 border border-purple-400/40 flex items-center justify-center text-purple-300 mb-6 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {t('about_page.commitment_title')}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                {t('about_page.commitment_desc')}
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="relative z-10 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs tracking-wide shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all cursor-pointer"
            >
              <span>{t('nav.launch_project')}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

        </section>

      </div>
    </div>
  );
}