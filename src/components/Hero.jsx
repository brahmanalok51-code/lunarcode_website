import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Terminal,
  Shield,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Zap,
      title: t("hero.stat_uptime"),
      label: t("hero.stat_uptime_label"),
    },
    {
      icon: Terminal,
      title: t("hero.stat_projects"),
      label: t("hero.stat_projects_label"),
    },
    {
      icon: Shield,
      title: t("hero.stat_satisfaction"),
      label: t("hero.stat_satisfaction_label"),
    },
  ];

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030305] px-4 pt-24 pb-16 sm:px-6 lg:px-8"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Dot Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(#9333ea_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.10] pointer-events-none"
      />

      {/* Main Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px] sm:h-[550px] sm:w-[550px] sm:blur-[150px] lg:h-[650px] lg:w-[650px]"
      />

      {/* Right Glow */}
      <div
        aria-hidden="true"
        className="absolute right-[-120px] top-[30%] h-[280px] w-[280px] rounded-full bg-fuchsia-600/10 blur-[110px] sm:h-[380px] sm:w-[380px]"
      />

      {/* Bottom Glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-[-160px] left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]"
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
        {/* Main Heading */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-5xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t("hero.title_start")}{" "}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]">
            {t("hero.title_highlight")}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8 lg:text-lg"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* ================= CTA BUTTONS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          {/* Primary CTA */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(147,51,234,0.35)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(168,85,247,0.55)] sm:w-auto"
            >
              <span>{t("hero.cta_primary")}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/service"
              className="inline-flex w-full items-center justify-center rounded-xl border border-purple-900/40 bg-zinc-900/70 px-7 py-3.5 text-sm font-medium text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-950/20 hover:text-white sm:w-auto"
            >
              {t("hero.cta_secondary")}
            </Link>
          </motion.div>
        </motion.div>

        {/* ================= TRUST / STATS CARDS WITH PURPLE + ORANGE GRADIENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-14 max-w-4xl border-t border-purple-900/30 pt-8 sm:mt-16"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-purple-900/40 bg-zinc-950/80 p-5 shadow-[0_4px_25px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(255,106,0,0.2)]"
                >
                  {/* Internal Animated Purple & Orange Fluid Mesh */}
                  <motion.div
                    animate={{
                      scale: [1, 1.25, 1],
                      rotate: [0, 90, 0],
                      x: [0, 20, 0],
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.7,
                    }}
                    className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-gradient-to-tr from-purple-600/30 via-orange-500/25 to-transparent blur-2xl group-hover:from-purple-500/40 group-hover:via-orange-500/35"
                  />

                  {/* Corner Accent Wave */}
                  <motion.div
                    animate={{
                      opacity: [0.15, 0.4, 0.15],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.4,
                    }}
                    className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-gradient-to-br from-orange-500/20 via-purple-600/20 to-transparent blur-xl"
                  />

                  {/* Card Content */}
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-950/60 shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-transform duration-300 group-hover:scale-105 group-hover:border-orange-500/40 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.3)]">
                      <Icon className="h-5 w-5 text-purple-400 transition-colors duration-300 group-hover:text-orange-300" />
                    </div>

                    <div className="text-left">
                      <p className="text-sm font-bold text-zinc-100 transition-colors duration-300 group-hover:text-white">
                        {stat.title}
                      </p>
                      <p className="mt-0.5 text-[10px] font-mono uppercase tracking-wider text-zinc-400 group-hover:text-orange-200/80">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 hidden flex-col items-center gap-2 sm:flex"
        >
          <div className="h-8 w-px bg-gradient-to-b from-purple-500/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}