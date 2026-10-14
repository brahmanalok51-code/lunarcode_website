import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  Zap,
  Layers,
  HeartHandshake,
  Globe2,
  CheckCircle2,
  ArrowUpRight,
  Server,
  TrendingUp,
  Languages
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogComponent() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  // Safe splitting for dynamic headline gradient
  const heroTitleString = t('web_app_guide.heroTitle') || 'How Web Applications Help Businesses Work Smarter and Grow Faster';
  const titleWords = heroTitleString.split(' ');
  const part1 = titleWords.slice(0, 4).join(' ');
  const part2 = titleWords.slice(4, 7).join(' ');
  const part3 = titleWords.slice(7).join(' ');

  // Factors mapping from i18n
  const factorsObject = t('web_app_guide.agency.factors', { returnObjects: true });
  const factorsList = typeof factorsObject === 'object' && factorsObject !== null ? Object.entries(factorsObject) : [];

  return (
    <div className="min-h-screen bg-black text-[#f1f1f5] selection:bg-[#8b5cf6]/30 selection:text-[#fb923c] font-sans antialiased relative overflow-hidden -mt-10">
      {/* Background Decorative Ambient Glows */}
      <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#8b5cf6]/20 via-[#f97316]/10 to-transparent blur-[140px] rounded-full -z-10" />
      <div className="pointer-events-none absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-[#f97316]/10 blur-[150px] rounded-full -z-10" />
      <div className="pointer-events-none absolute top-[70%] left-[-10%] w-[650px] h-[650px] bg-[#8b5cf6]/15 blur-[160px] rounded-full -z-10" />

     

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-5 pb-28 space-y-28">
        
        {/* ========================================================= */}
        {/* HERO SECTION                                              */}
        {/* ========================================================= */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center pt-8 space-y-7"
        >
        

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.12]">
            {part1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] via-[#c084fc] to-[#f97316]">
              {part2}
            </span>{' '}
            {part3}
          </h1>

          {/* Intro Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left pt-6">
            <div className="p-6 rounded-2xl bg-[#0f0c18] border border-white/5 hover:border-[#8b5cf6]/30 transition-colors shadow-lg">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">{t('web_app_guide.intro.p1')}</p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{t('web_app_guide.intro.p2')}</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0f0c18] border border-white/5 hover:border-[#f97316]/30 transition-colors shadow-lg flex flex-col justify-between">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">{t('web_app_guide.intro.p3')}</p>
              <div className="p-3.5 rounded-xl bg-[#171226] border border-[#8b5cf6]/20 text-[#e9d5ff] font-medium text-sm">
                {t('web_app_guide.intro.p4')}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ========================================================= */}
        {/* WHAT IS A WEB APPLICATION?                                */}
        {/* ========================================================= */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#120e20] to-[#0c0914] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#8b5cf6]/10 blur-[100px] pointer-events-none" />

            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="lg:w-7/12 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#f97316] font-bold">
                  {t('web_app_guide.whatIs.tag')}
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  {t('web_app_guide.whatIs.title')}
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{t('web_app_guide.whatIs.p1')}</p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{t('web_app_guide.whatIs.p2')}</p>

                <div className="pt-2">
                  <div className="inline-block px-4 py-2.5 rounded-xl bg-[#1d1630] border border-[#8b5cf6]/40 text-[#d8b4fe] font-semibold text-sm">
                    {t('web_app_guide.whatIs.purpose')}
                  </div>
                </div>
              </div>

              {/* Real World Scenario Card */}
              <div className="lg:w-5/12 w-full p-6 rounded-2xl bg-[#08060d] border border-white/10 relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f97316]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    {t('web_app_guide.whatIs.exampleTitle')}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{t('web_app_guide.whatIs.example')}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ========================================================= */}
        {/* 4 CORE BENEFITS BENTO GRID                                */}
        {/* ========================================================= */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#a855f7] font-bold">
              {t('web_app_guide.benefits.tag')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t('web_app_guide.benefits.title')}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">{t('web_app_guide.benefits.subtitle')}</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Benefit 1 */}
            <motion.div
              variants={fadeInUp}
              className="p-7 rounded-3xl bg-[#0f0c18] border border-white/10 hover:border-[#f97316]/50 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1c1224] border border-[#f97316]/30 flex items-center justify-center text-[#f97316] group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#f97316] transition-colors">
                  {t('web_app_guide.benefits.b1.title')}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t('web_app_guide.benefits.b1.p1')}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{t('web_app_guide.benefits.b1.p2')}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-[#c084fc] font-medium">
                {t('web_app_guide.benefits.b1.p3')}
              </div>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div
              variants={fadeInUp}
              className="p-7 rounded-3xl bg-[#0f0c18] border border-white/10 hover:border-[#8b5cf6]/50 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1a142e] border border-[#8b5cf6]/30 flex items-center justify-center text-[#a855f7] group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#a855f7] transition-colors">
                  {t('web_app_guide.benefits.b2.title')}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t('web_app_guide.benefits.b2.p1')}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{t('web_app_guide.benefits.b2.p2')}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-[#fb923c] font-medium">
                {t('web_app_guide.benefits.b2.p3')}
              </div>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div
              variants={fadeInUp}
              className="p-7 rounded-3xl bg-[#0f0c18] border border-white/10 hover:border-[#8b5cf6]/50 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1a142e] border border-[#8b5cf6]/30 flex items-center justify-center text-[#c084fc] group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#c084fc] transition-colors">
                  {t('web_app_guide.benefits.b3.title')}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t('web_app_guide.benefits.b3.p1')}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{t('web_app_guide.benefits.b3.p2')}</p>
                <p className="text-gray-400 text-sm leading-relaxed italic">{t('web_app_guide.benefits.b3.p3')}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-[#d8b4fe] font-medium">
                {t('web_app_guide.benefits.b3.p4')}
              </div>
            </motion.div>

            {/* Benefit 4 */}
            <motion.div
              variants={fadeInUp}
              className="p-7 rounded-3xl bg-[#0f0c18] border border-white/10 hover:border-[#f97316]/50 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1f1322] border border-[#f97316]/30 flex items-center justify-center text-[#f97316] group-hover:scale-110 transition-transform">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#f97316] transition-colors">
                  {t('web_app_guide.benefits.b4.title')}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t('web_app_guide.benefits.b4.p1')}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{t('web_app_guide.benefits.b4.p2')}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-[#fed7aa] font-medium">
                {t('web_app_guide.benefits.b4.p3')}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ========================================================= */}
        {/* CHOOSING THE RIGHT DEV COMPANY                            */}
        {/* ========================================================= */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-8"
        >
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#f97316] font-bold">
              {t('web_app_guide.agency.tag')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t('web_app_guide.agency.title')}
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">{t('web_app_guide.agency.p1')}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{t('web_app_guide.agency.p2')}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{t('web_app_guide.agency.p3')}</p>
          </div>

          <p className="text-white font-semibold text-sm pt-2">{t('web_app_guide.agency.criteriaIntro')}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {factorsList.map(([key, item], idx) => (
              <div
                key={key}
                className="p-5 rounded-2xl bg-[#0f0c18] border border-white/10 hover:border-[#8b5cf6]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#a855f7]">
                    <CheckCircle2 className="w-4 h-4 text-[#f97316]" />
                    <h4 className="font-bold text-white text-base">{item.name}</h4>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-[10px] text-gray-600 font-mono mt-4 block">0{idx + 1} / 05</span>
              </div>
            ))}

            {/* Summary Philosophy Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1a112c] to-[#120a1c] border border-[#8b5cf6]/40 sm:col-span-2 lg:col-span-1 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f97316] mb-2">
                Core Philosophy
              </span>
              <p className="text-sm font-medium text-purple-200 leading-relaxed">
                {t('web_app_guide.agency.summary')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* ========================================================= */}
        {/* CLOUD INFRASTRUCTURE & SCALABILITY                         */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cloud Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="p-8 rounded-3xl bg-[#0f0c18] border border-white/10 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#1b142c] text-[#a855f7] flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#a855f7] font-bold">
                {t('web_app_guide.cloud.tag')}
              </span>
              <h3 className="text-2xl font-bold text-white">{t('web_app_guide.cloud.title')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{t('web_app_guide.cloud.p1')}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{t('web_app_guide.cloud.p2')}</p>

              <div className="pt-2 space-y-2.5">
                <p className="text-xs font-semibold text-white uppercase tracking-wider">
                  {t('web_app_guide.cloud.advTitle')}
                </p>
                <div className="p-3 rounded-xl bg-[#130f21] border border-white/5 text-xs text-gray-300">
                  {t('web_app_guide.cloud.adv1')}
                </div>
                <div className="p-3 rounded-xl bg-[#130f21] border border-white/5 text-xs text-gray-300">
                  {t('web_app_guide.cloud.adv2')}
                </div>
                <div className="p-3 rounded-xl bg-[#130f21] border border-white/5 text-xs text-gray-300">
                  {t('web_app_guide.cloud.adv3')}
                </div>
              </div>

              <p className="text-xs text-amber-200/80 bg-amber-950/20 p-3 rounded-xl border border-amber-500/20 leading-relaxed">
                {t('web_app_guide.cloud.warning')}
              </p>
            </div>

            <p className="text-xs text-gray-400 border-t border-white/5 pt-4">{t('web_app_guide.cloud.footer')}</p>
          </motion.div>

          {/* Scalability Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="p-8 rounded-3xl bg-[#0f0c18] border border-white/10 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#231215] text-[#f97316] flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#f97316] font-bold">
                {t('web_app_guide.scalability.tag')}
              </span>
              <h3 className="text-2xl font-bold text-white">{t('web_app_guide.scalability.title')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{t('web_app_guide.scalability.p1')}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{t('web_app_guide.scalability.p2')}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#170e17] border border-[#f97316]/20 text-xs text-orange-200/90 leading-relaxed">
                  {t('web_app_guide.scalability.scenarios.s1')}
                </div>
                <div className="p-3.5 rounded-xl bg-[#170e17] border border-[#f97316]/20 text-xs text-orange-200/90 leading-relaxed">
                  {t('web_app_guide.scalability.scenarios.s2')}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold text-white">{t('web_app_guide.scalability.archTitle')}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{t('web_app_guide.scalability.p3')}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{t('web_app_guide.scalability.p4')}</p>
              </div>
            </div>

            <p className="text-xs text-gray-300 border-t border-white/5 pt-4 font-medium text-[#fb923c]">
              {t('web_app_guide.scalability.summary')}
            </p>
          </motion.div>
        </section>

        {/* ========================================================= */}
        {/* HOW LUNARCODE CAN HELP (FINAL CTA)                        */}
        {/* ========================================================= */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#170f2a] via-[#100a1c] to-[#1a0e1a] border border-[#8b5cf6]/40 shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f97316]/10 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#f97316] font-bold">
              {t('web_app_guide.lunar.tag')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {t('web_app_guide.lunar.title')}
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">{t('web_app_guide.lunar.p1')}</p>
            <p className="text-gray-300 text-base leading-relaxed">{t('web_app_guide.lunar.p2')}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{t('web_app_guide.lunar.p3')}</p>

            <div className="p-4 rounded-2xl bg-[#0b0814]/80 border border-white/10 text-[#d8b4fe] text-sm leading-relaxed">
              {t('web_app_guide.lunar.p4')}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f97316] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#f97316]/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{t('web_app_guide.lunar.btnCta')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}