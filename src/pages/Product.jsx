import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  ArrowUpRight,
  PhoneCall,
  Mail,
  Activity,
  Zap,
  Lock,
  Globe,
  ExternalLink,
  Receipt,
  Stethoscope,
  CalendarDays,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import MetaTags from "../components/MetaTags";

export default function Products() {
  const { t } = useTranslation();

  const customSolutions = [
    {
      icon: Globe,
      title: t("product_page.custom_solutions.c1_title"),
      desc: t("product_page.custom_solutions.c1_desc"),
    },
    {
      icon: Cpu,
      title: t("product_page.custom_solutions.c2_title"),
      desc: t("product_page.custom_solutions.c2_desc"),
    },
    {
      icon: Sparkles,
      title: t("product_page.custom_solutions.c3_title"),
      desc: t("product_page.custom_solutions.c3_desc"),
    },
    {
      icon: Layers,
      title: t("product_page.custom_solutions.c4_title"),
      desc: t("product_page.custom_solutions.c4_desc"),
    },
    {
      icon: Lock,
      title: t("product_page.custom_solutions.c5_title"),
      desc: t("product_page.custom_solutions.c5_desc"),
    },
  ];

  const approaches = [
    {
      title: t("product_page.approach.a1_title"),
      desc: t("product_page.approach.a1_desc"),
    },
    {
      title: t("product_page.approach.a2_title"),
      desc: t("product_page.approach.a2_desc"),
    },
    {
      title: t("product_page.approach.a3_title"),
      desc: t("product_page.approach.a3_desc"),
    },
    {
      title: t("product_page.approach.a4_title"),
      desc: t("product_page.approach.a4_desc"),
    },
  ];

  const whyChoosePoints = [
    t("product_page.why_choose.p1"),
    t("product_page.why_choose.p2"),
    t("product_page.why_choose.p3"),
    t("product_page.why_choose.p4"),
  ];

const projects = [
  {
    icon: Sparkles,
    key: "hexawash",
    image:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1200&auto=format&fit=crop",
    link: null,
    external: false,
    reverse: false,
  },
  {
    icon: Building2,
    key: "kasa",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
   
    external: true,
    reverse: true,
  },
  {
    icon: Globe,
    key: "modern_websites",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1200&auto=format&fit=crop",

    external: true,
    reverse: false,
  },
  {
    icon: Sparkles,
    key: "loco_snap",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    
    external: true,
    reverse: true,
  },
  {
    icon: Stethoscope,
    key: "clinic",
    image:
      "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=1200&auto=format&fit=crop",
    
    external: true,
    reverse: false,
  },
  {
    icon: Receipt,
    key: "billing",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    link: null,
    external: false,
    reverse: true,
  },
];

  return (
    <div className="min-h-screen bg-[#030305] text-zinc-100 pt-28 pb-24 relative overflow-hidden">
      <MetaTags page="product" />

      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[550px] bg-purple-600/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="absolute top-[35%] -left-40 w-[450px] h-[450px] bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28">

        {/* ================= HERO ================= */}

        <section className="text-center max-w-4xl mx-auto pt-4">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t("product_page.hero_title_start")}{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
              {t("product_page.hero_title_highlight")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            {t("product_page.hero_subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(147,51,234,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all"
            >
              {t("product_page.btn_explore")}
            </a>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-zinc-950/80 border border-purple-900/50 hover:border-purple-500/50 text-zinc-300 hover:text-white font-medium text-xs tracking-wider uppercase backdrop-blur-md transition-all"
            >
              {t("product_page.btn_demo")}
            </Link>
          </motion.div>

          {/* Status Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 max-w-2xl mx-auto p-3.5 rounded-2xl bg-[#090714] border border-purple-900/40 shadow-[0_0_30px_rgba(0,0,0,0.8)] flex flex-wrap items-center justify-around gap-4 text-xs font-mono text-zinc-300"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t("product_page.status_badge")}</span>
            </div>

            <div className="flex items-center gap-1.5 text-purple-400">
              <Activity className="w-3.5 h-3.5" />
              <span>{t("product_page.uptime_label")}</span>
            </div>

            <div className="flex items-center gap-1.5 text-zinc-400">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span>{t("product_page.scalability_label")}</span>
            </div>
          </motion.div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section id="projects" className="space-y-12">

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">
              {t("product_page.projects.badge")}
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              {t("product_page.projects.title")}
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
              {t("product_page.projects.subtitle")}
            </p>
          </div>

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                }}
                className="p-6 sm:p-8 lg:p-12 rounded-3xl bg-zinc-950/90 border border-purple-900/40 hover:border-purple-500/50 shadow-[0_10px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center transition-all"
              >

                {/* Content */}

                <div
                  className={`lg:col-span-7 space-y-5 ${
                    project.reverse ? "lg:order-2" : ""
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/40 text-[11px] font-mono text-purple-300">
                    <Icon className="w-3.5 h-3.5 text-purple-400" />

                    <span>
                      {t(`product_page.projects.${project.key}.tag`)}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white">
                      {t(`product_page.projects.${project.key}.title`)}
                    </h2>

                    <p className="text-sm font-semibold text-purple-400 font-mono mt-1">
                      {t(`product_page.projects.${project.key}.subtitle`)}
                    </p>
                  </div>

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {t(`product_page.projects.${project.key}.desc`)}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[#090714] border border-purple-950/60 text-xs sm:text-sm text-purple-200">
                    {t(`product_page.projects.${project.key}.impact`)}
                  </div>

                  {/* Features */}

                  <div className="space-y-2.5 pt-2">
                    {[1, 2, 3, 4].map((number) => {
                      const feature = t(
                        `product_page.projects.${project.key}.f${number}`
                      );

                      if (
                        !feature ||
                        feature.includes(
                          `product_page.projects.${project.key}.f${number}`
                        )
                      ) {
                        return null;
                      }

                      return (
                        <div
                          key={number}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />

                          <span>{feature}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Visit Project */}

                  {project.link && (
                    <div className="pt-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600/10 border border-purple-500/40 text-purple-300 hover:text-white hover:bg-purple-600 hover:border-purple-400 transition-all text-xs font-semibold uppercase tracking-wider"
                      >
                        <span>
                          {t("product_page.projects.view_project")}
                        </span>

                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Image */}

                <div
                  className={`lg:col-span-5 ${
                    project.reverse ? "lg:order-1" : ""
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-purple-800/40 shadow-[0_0_40px_rgba(147,51,234,0.25)] group">

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 z-10 pointer-events-none" />

                    <img
                      src={project.image}
                      alt={t(
                        `product_page.projects.${project.key}.title`
                      )}
                      className="w-full h-[260px] sm:h-[320px] object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-purple-500/30 text-xs font-mono text-purple-300">
                      {t(
                        `product_page.projects.${project.key}.status`
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* ================= CUSTOM SOLUTIONS ================= */}

        <section className="p-8 sm:p-12 rounded-3xl bg-zinc-950/70 border border-purple-900/40 shadow-[0_0_50px_rgba(0,0,0,0.85)]">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">
              {t("product_page.custom_solutions.badge")}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              {t("product_page.custom_solutions.title")}
            </h2>

            <p className="text-zinc-400 text-sm mt-3">
              {t("product_page.custom_solutions.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {customSolutions.map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={idx}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}
                  className="p-5 rounded-2xl bg-[#090714] border border-purple-950/70 hover:border-purple-500/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-white mb-1">
                      {item.title}
                    </h3>

                    <p className="text-xs text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ================= APPROACH ================= */}

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-purple-950/50 shadow-xl flex flex-col justify-between"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">
                {t("product_page.approach.badge")}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-6">
                {t("product_page.approach.title")}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {approaches.map((app, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#090714] border border-purple-950/50"
                  >
                    <div className="text-sm font-bold text-purple-300 font-mono mb-1">
                      {app.title}
                    </div>

                    <div className="text-xs text-zinc-400">
                      {app.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Why Choose */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-purple-950/50 via-zinc-950 to-zinc-950 border border-purple-600/40 shadow-[0_0_40px_rgba(168,85,247,0.2)] flex flex-col justify-between"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">
                {t("product_page.why_choose.badge")}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-6">
                {t("product_page.why_choose.title")}
              </h2>

              <div className="space-y-3">
                {whyChoosePoints.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-black/60 border border-purple-900/40"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />

                    <span className="text-xs sm:text-sm font-medium text-zinc-200">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ================= CTA ================= */}

        <section>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-purple-950/80 via-zinc-950 to-purple-950/80 border border-purple-500/50 shadow-[0_0_50px_rgba(147,51,234,0.3)] text-center relative overflow-hidden"
          >
            <div className="relative z-10 max-w-3xl mx-auto space-y-4">

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                {t("product_page.cta_banner.title")}
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {t("product_page.cta_banner.subtitle")}
              </p>

              <div className="pt-6 flex flex-wrap items-center justify-center gap-4">

                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(147,51,234,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all"
                >
                  <Mail className="w-4 h-4" />

                  <span>
                    {t("product_page.cta_banner.btn_contact")}
                  </span>
                </Link>

                <a
                  href="tel:+919818865380"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-purple-900/50 hover:border-purple-500/60 text-zinc-300 hover:text-white font-medium text-xs tracking-wider uppercase transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-purple-400" />

                  <span>
                    {t("product_page.cta_banner.btn_call")}
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}