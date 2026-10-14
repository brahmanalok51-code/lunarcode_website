import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
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
  ArrowRight,
} from "lucide-react";
import MetaTags from "../components/MetaTags";

export default function About() {
  const { t } = useTranslation();

 const values = [
  {
    icon: Lightbulb,
    title: t("about_page.values.val_1_title"),
    desc: t("about_page.values.val_1_desc"),
  },
  {
    icon: Award,
    title: t("about_page.values.val_2_title"),
    desc: t("about_page.values.val_2_desc"),
  },
  {
    icon: Users,
    title: t("about_page.values.val_3_title"),
    desc: t("about_page.values.val_3_desc"),
  },
  {
    icon: ShieldCheck,
    title: t("about_page.values.val_4_title"),
    desc: t("about_page.values.val_4_desc"),
  },
  {
    icon: GraduationCap,
    title: t("about_page.values.val_5_title"),
    desc: t("about_page.values.val_5_desc"),
  },
  {
    icon: Zap,
    title: t("about_page.values.val_6_title"),
    desc: t("about_page.values.val_6_desc"),
  },
];
  const expertise = [
    {
      icon: Code,
      name: t("about_page.expertise_items.e1"),
    },
    {
      icon: Layers,
      name: t("about_page.expertise_items.e2"),
    },
    {
      icon: Cpu,
      name: t("about_page.expertise_items.e3"),
    },
    {
      icon: Rocket,
      name: t("about_page.expertise_items.e4"),
    },
    {
      icon: Cloud,
      name: t("about_page.expertise_items.e5"),
    },
    {
      icon: Workflow,
      name: t("about_page.expertise_items.e6"),
    },
  ];

  const steps = [
    {
      icon: Compass,
      title: t("about_page.steps.s1_title"),
      desc: t("about_page.steps.s1_desc"),
    },
    {
      icon: FileCode2,
      title: t("about_page.steps.s2_title"),
      desc: t("about_page.steps.s2_desc"),
    },
    {
      icon: Kanban,
      title: t("about_page.steps.s3_title"),
      desc: t("about_page.steps.s3_desc"),
    },
    {
      icon: CheckCircle,
      title: t("about_page.steps.s4_title"),
      desc: t("about_page.steps.s4_desc"),
    },
    {
      icon: Rocket,
      title: t("about_page.steps.s5_title"),
      desc: t("about_page.steps.s5_desc"),
    },
  ];

  const whyPoints = [
    t("about_page.why_points.w1"),
    t("about_page.why_points.w2"),
    t("about_page.why_points.w3"),
    t("about_page.why_points.w4"),
    t("about_page.why_points.w5"),
    t("about_page.why_points.w6"),
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030305] px-4 pt-28 pb-20 text-zinc-100 sm:px-6 lg:px-8">
      <MetaTags page="about" />

      {/* ================= BACKGROUND ================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[150px] sm:h-[650px] sm:w-[650px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] top-[40%] h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-120px] right-[-150px] h-[400px] w-[400px] rounded-full bg-purple-900/15 blur-[140px]"
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl space-y-24 sm:space-y-28">

        {/* ================= HERO ================= */}

        <section
          aria-labelledby="about-title"
          className="mx-auto max-w-4xl pt-2 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex justify-center"
          >
            <span className="rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-purple-300 sm:text-xs"
            >
              {t("about_page.hero_badge")}
            </span>
          </motion.div>

          <motion.h1
            id="about-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t("about_page.hero_title_start")}{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
              {t("about_page.hero_title_highlight")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8 lg:text-lg"
          >
            {t("about_page.hero_subtitle")}
          </motion.p>
        </section>

        {/* ================= COMPANY OVERVIEW ================= */}

        <section
          aria-labelledby="company-overview"
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          <h2 id="company-overview" className="sr-only">
            {t("about_page.overview_title")}
          </h2>

          {/* Overview */}
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="group rounded-3xl border border-purple-950/50 bg-zinc-950/80 p-7 text-center shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all hover:border-purple-500/50 sm:p-10"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-400 sm:text-xs">
              {t("about_page.overview_badge")}
            </span>

            <h2 className="mt-3 text-2xl font-bold text-white transition-colors group-hover:text-purple-300 sm:text-3xl">
              {t("about_page.overview_title")}
            </h2>

            <div className="mx-auto mt-5 max-w-xl space-y-4">
              <p className="text-sm leading-7 text-zinc-400">
                {t("about_page.overview_p1")}
              </p>

              <p className="text-sm leading-7 text-zinc-400">
                {t("about_page.overview_p2")}
              </p>
            </div>
          </motion.article>

          {/* Story */}
          <motion.article
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="group rounded-3xl border border-purple-950/50 bg-zinc-950/80 p-7 text-center shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all hover:border-purple-500/50 sm:p-10"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-400 sm:text-xs">
              {t("about_page.story_badge")}
            </span>

            <h2 className="mt-3 text-2xl font-bold text-white transition-colors group-hover:text-purple-300 sm:text-3xl">
              {t("about_page.story_title")}
            </h2>

            <div className="mx-auto mt-5 max-w-xl space-y-4">
              <p className="text-sm leading-7 text-zinc-400">
                {t("about_page.story_p1")}
              </p>

              <p className="text-sm leading-7 text-zinc-400">
                {t("about_page.story_p2")}
              </p>
            </div>
          </motion.article>
        </section>

        {/* ================= MISSION & VISION ================= */}

        <section
          aria-labelledby="mission-vision"
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <h2 id="mission-vision" className="sr-only">
            {t("about_page.mission_title")} & {t("about_page.vision_title")}
          </h2>

          {/* Mission */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-purple-800/40 bg-gradient-to-br from-purple-950/40 via-zinc-950 to-zinc-950 p-7 text-center shadow-[0_0_40px_rgba(147,51,234,0.12)] sm:p-10"
          >
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-900/60 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.35)]">
              <Rocket className="h-6 w-6" />
            </div>

            <h3 className="text-2xl font-extrabold text-white">
              {t("about_page.mission_title")}
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-300">
              {t("about_page.mission_desc")}
            </p>
          </motion.article>

          {/* Vision */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-fuchsia-800/40 bg-gradient-to-br from-fuchsia-950/40 via-zinc-950 to-zinc-950 p-7 text-center shadow-[0_0_40px_rgba(217,70,239,0.12)] sm:p-10"
          >
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-400/30 bg-fuchsia-900/60 text-fuchsia-300 shadow-[0_0_20px_rgba(217,70,239,0.35)]">
              <Compass className="h-6 w-6" />
            </div>

            <h3 className="text-2xl font-extrabold text-white">
              {t("about_page.vision_title")}
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-300">
              {t("about_page.vision_desc")}
            </p>
          </motion.article>
        </section>

        {/* ================= CORE VALUES ================= */}

        <section
          aria-labelledby="values-heading"
          className="text-center"
        >
          <div className="mx-auto mb-12 max-w-3xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-400 sm:text-xs">
              {t("about_page.values_badge")}
            </span>

            <h2
              id="values-heading"
              className="mt-3 text-3xl font-extrabold text-white sm:text-4xl"
            >
              {t("about_page.values_heading")}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-purple-950/50 bg-zinc-950/70 p-7 shadow-lg transition-all hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                >
                  <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-950/80 text-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.25)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {value.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-400">
                    {value.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ================= EXPERTISE ================= */}

        <section
          aria-labelledby="expertise-heading"
          className="rounded-3xl border border-purple-900/30 bg-zinc-950/60 p-6 text-center shadow-[0_0_50px_rgba(0,0,0,0.8)] sm:p-10 lg:p-12"
        >
          <div className="mx-auto mb-10 max-w-3xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-400 sm:text-xs">
              {t("about_page.expertise_badge")}
            </span>

            <h2
              id="expertise-heading"
              className="mt-3 text-3xl font-extrabold text-white sm:text-4xl"
            >
              {t("about_page.expertise_heading")}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
              {t("about_page.expertise_sub")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center justify-center gap-3 rounded-xl border border-purple-950/60 bg-[#090812] p-5 text-center transition-all hover:border-purple-500/60 sm:flex-row sm:text-left"
                >
                  <Icon className="h-5 w-5 shrink-0 text-purple-400" />

                  <span className="text-sm font-semibold text-zinc-200">
                    {item.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ================= DEVELOPMENT PROCESS ================= */}

        <section
          aria-labelledby="approach-heading"
          className="text-center"
        >
          <div className="mx-auto mb-12 max-w-3xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-400 sm:text-xs">
              {t("about_page.approach_badge")}
            </span>

            <h2
              id="approach-heading"
              className="mt-3 text-3xl font-extrabold text-white sm:text-4xl"
            >
              {t("about_page.approach_heading")}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="rounded-2xl border border-purple-950/40 bg-zinc-950/80 p-6 text-center shadow-md transition-all hover:border-purple-500/50"
                >
                  <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-950/80 text-purple-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="mb-2 text-[10px] font-mono uppercase tracking-widest text-purple-500">
                    0{index + 1}
                  </div>

                  <h3 className="text-sm font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-zinc-400">
                    {step.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ================= WHY LUNARCODE ================= */}

        <section
          aria-labelledby="why-heading"
          className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2"
        >
          {/* Why Choose Us */}
          <motion.article
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-purple-950/50 bg-zinc-950/80 p-7 shadow-xl sm:p-10"
          >
            <div className="text-center">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-400 sm:text-xs">
                {t("about_page.why_badge")}
              </span>

              <h2
                id="why-heading"
                className="mt-3 text-2xl font-extrabold text-white sm:text-3xl"
              >
                {t("about_page.why_heading")}
              </h2>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {whyPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2.5 rounded-xl border border-purple-950/50 bg-[#090812] p-3 text-center sm:justify-start sm:text-left"
                >
                  <Zap className="h-4 w-4 shrink-0 text-purple-400" />

                  <span className="text-xs font-medium leading-5 text-zinc-300 sm:text-sm">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.article>

          {/* Commitment */}
          <motion.article
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-purple-600/40 bg-gradient-to-br from-purple-950/50 via-zinc-950 to-zinc-950 p-7 text-center shadow-[0_0_40px_rgba(168,85,247,0.15)] sm:p-10"
          >
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/10 blur-3xl"
            />

            <div className="relative z-10">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/40 bg-purple-900/60 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.35)]">
                <Handshake className="h-6 w-6" />
              </div>

              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                {t("about_page.commitment_title")}
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-300">
                {t("about_page.commitment_desc")}
              </p>
            </div>

            <Link
              to="/contact"
              className="relative z-10 mx-auto mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-xs font-semibold tracking-wide text-white shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all hover:bg-purple-500 hover:shadow-[0_0_35px_rgba(147,51,234,0.55)]"
            >
              <span>{t("nav.launch_project")}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.article>
        </section>

        {/* ================= FINAL CTA ================= */}

        <section
          aria-labelledby="about-cta"
          className="pb-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-950/30 via-zinc-950 to-fuchsia-950/20 p-8 text-center sm:p-12"
          >
            <h2
              id="about-cta"
              className="text-2xl font-extrabold text-white sm:text-3xl"
            >
              {t("about_page.final_cta_title")}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              {t("about_page.final_cta_desc")}
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(147,51,234,0.35)] transition-all hover:shadow-[0_0_45px_rgba(168,85,247,0.55)]"
            >
              {t("about_page.final_cta_button")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </section>
      </div>
    </main>
  );
}