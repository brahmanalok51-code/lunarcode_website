import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import BlogComponent from "../components/BlogComponent";
import {
  Terminal,
  Cpu,
  Layers,
  Cloud,
  Shield,
  Zap,
  ChevronLeft,
  ChevronRight,
  Workflow,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Compass,
  Eye,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import MetaTags from "../components/MetaTags";

export default function BlogDetail() {
  const { t } = useTranslation();

  // Interactive selectors
  const [heroIndex, setHeroIndex] = useState(0);
  const [selectedSec1Key, setSelectedSec1Key] = useState("sec1_p1");
  const [showSec1Full, setShowSec1Full] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const [activeWhenIndex, setActiveWhenIndex] = useState(0);
  const [saasStep, setSaasStep] = useState(0);
  const [activeCircle, setActiveCircle] = useState(0);
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [synergyTab, setSynergyTab] = useState(0);
  const [activeCheckpoint, setActiveCheckpoint] = useState(0);
  const [activeApproach, setActiveApproach] = useState(0);

  // Safe translation extraction
  const rawBenefits = t("blog_post.benefits_list", { returnObjects: true });
  const benefitsList = Array.isArray(rawBenefits) ? rawBenefits : [];

  const rawWhenCards = t("blog_post.when_cards", { returnObjects: true });
  const whenCards = Array.isArray(rawWhenCards) ? rawWhenCards : [];

  const rawSaaSFeatures = t("blog_post.saas_features", { returnObjects: true });
  const saasFeatures = Array.isArray(rawSaaSFeatures) ? rawSaaSFeatures : [];

  const rawConsiderItems = t("blog_post.consider_items", { returnObjects: true });
  const considerItems = Array.isArray(rawConsiderItems) ? rawConsiderItems : [];

  const sec1Cards = [
    {
      key: "sec1_p1",
      icon: Terminal,
      title: "Core Definition",
      label: "Foundation",
      content: t("blog_post.sec1_p1"),
    },
    {
      key: "sec1_p2",
      icon: Workflow,
      title: "Process Alignment",
      label: "Architecture",
      content: t("blog_post.sec1_p2"),
    },
    {
      key: "sec1_p3",
      icon: Layers,
      title: "Enterprise Scope",
      label: "Applications",
      content: t("blog_post.sec1_p3"),
    },
    {
      key: "sec1_p4",
      icon: Cpu,
      title: "Limitless Flexibility",
      label: "Advantage",
      content: t("blog_post.sec1_p4"),
    },
  ];

  // Auto-play interval for Strategic Benefits carousel
  useEffect(() => {
    if (!benefitsList.length) return;
    const interval = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % benefitsList.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [benefitsList.length]);

  const handlePrevSlide = () => {
    setSlideIdx((prev) => (prev === 0 ? benefitsList.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setSlideIdx((prev) => (prev + 1) % benefitsList.length);
  };

  const saasParagraphs = [
    { title: "Overview", text: t("blog_post.saas_p1") },
    { title: "Cloud Access", text: t("blog_post.saas_p2") },
    { title: "Common Applications", text: t("blog_post.saas_p3") },
    { title: "Centralized Tech", text: t("blog_post.saas_p4") },
    { title: "Zero Infrastructure", text: t("blog_post.saas_p5") },
  ];

  return (
    <>
    <div className="min-h-screen bg-[#030305] text-zinc-100 pt-24 pb-24 relative overflow-hidden selection:bg-purple-600 selection:text-white">
      <MetaTags page="service" />

      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[35%] -right-40 w-[450px] h-[450px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-16 sm:space-y-24">
        
        {/* ========================================================
            HERO SECTION
        ========================================================= */}
        <section className="text-center max-w-3xl mx-auto pt-2">
      

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t("blog_post.hero_title_p1")}{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
              {t("blog_post.hero_title_highlight")}
            </span>{" "}
            {t("blog_post.hero_title_p2")}
          </h1>

          {/* Compact Pill Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 0, label: "01. Modern Business Landscape" },
              { id: 1, label: "02. The SaaS & Scale Imperative" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setHeroIndex(btn.id)}
                className={`px-3.5 py-1.5 rounded-xl text-[11px] font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  heroIndex === btn.id
                    ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold"
                    : "bg-zinc-900/60 text-zinc-400 hover:text-white"
                }`}
              >
                <Eye className="w-3 h-3" />
                <span>{btn.label}</span>
              </button>
            ))}
          </div>

          {/* Compact Animated Paragraph Box */}
          <div className="mt-4 rounded-2xl bg-zinc-950/60 p-5 sm:p-6 backdrop-blur-xl min-h-[90px] flex items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={heroIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-zinc-300 text-sm sm:text-base leading-relaxed"
              >
                {heroIndex === 0 ? t("blog_post.hero_p1") : t("blog_post.hero_p2")}
              </motion.p>
            </AnimatePresence>
          </div>
        </section>

        {/* ========================================================
            SECTION 1: WHAT IS CUSTOM SOFTWARE DEVELOPMENT?
        ========================================================= */}
        <section>
          <div className="rounded-2xl bg-zinc-950/50 p-6 sm:p-10 backdrop-blur-xl space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-orange-400 font-mono flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                {t("blog_post.sec1_badge")}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                {t("blog_post.sec1_title")}
              </h2>
            </div>

            {/* 4 Clickable Small Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {sec1Cards.map((card, idx) => {
                const Icon = card.icon;
                const isSelected = selectedSec1Key === card.key;

                return (
                  <motion.button
                    key={card.key}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedSec1Key(card.key)}
                    className={`text-left p-3.5 rounded-xl transition-all cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-br from-purple-950/90 to-orange-950/50 text-white"
                        : "bg-zinc-900/40 text-zinc-400 hover:bg-zinc-900/80"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Icon className={`w-4 h-4 ${isSelected ? "text-orange-400" : "text-purple-400"}`} />
                      <span className="text-[9px] font-mono text-zinc-500">0{idx + 1}</span>
                    </div>
                    <div className="text-xs font-bold text-white mt-2 leading-tight">{card.title}</div>
                    <div className="text-[10px] text-zinc-500 font-mono mt-0.5">{card.label}</div>
                  </motion.button>
                );
              })}
            </div>

            {/* Dynamic Reader Box */}
            <div className="rounded-xl bg-purple-950/20 p-4 sm:p-5 min-h-[85px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSec1Key}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-1 w-full"
                >
                  <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest flex items-center gap-1.5">
                    
                    {sec1Cards.find((c) => c.key === selectedSec1Key)?.title}
                  </span>
                  <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                    {sec1Cards.find((c) => c.key === selectedSec1Key)?.content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Full Narrative Drawer (Zero Content Loss) */}
            <div>
              <button
                onClick={() => setShowSec1Full(!showSec1Full)}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-purple-400 hover:text-orange-400 transition-colors cursor-pointer py-1"
              >
                <span>{showSec1Full ? "Hide Complete Text" : "Read Full Section Narrative"}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showSec1Full ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {showSec1Full && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pt-3 space-y-2 text-zinc-400 text-xs sm:text-sm leading-relaxed"
                  >
                    <p className="text-zinc-300 font-medium">{t("blog_post.sec1_p1")}</p>
                    <p>{t("blog_post.sec1_p2")}</p>
                    <p>{t("blog_post.sec1_p3")}</p>
                    <p>{t("blog_post.sec1_p4")}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Callout Quote */}
            <div className="p-4 rounded-xl bg-purple-950/20 flex items-start gap-3">
              <Compass className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
              <blockquote className="text-xs sm:text-sm font-medium text-purple-200 italic">
                "{t("blog_post.sec1_quote")}"
              </blockquote>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: WHY BUSINESSES INVEST & CAROUSEL
        ========================================================= */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-purple-400 font-mono">
              {t("blog_post.benefits_badge")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t("blog_post.benefits_title")}
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{t("blog_post.benefits_intro1")}</p>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{t("blog_post.benefits_intro2")}</p>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{t("blog_post.benefits_intro3")}</p>
          </div>

          <div className="rounded-2xl bg-zinc-950/50 p-5 sm:p-7 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm sm:text-base font-bold text-white">
                {t("blog_post.benefits_slider_title")}
              </h3>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevSlide}
                  className="p-1.5 rounded-lg bg-zinc-900 text-purple-300 hover:text-white cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="p-1.5 rounded-lg bg-zinc-900 text-purple-300 hover:text-white cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Carousel Item */}
            <div className="min-h-[70px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {benefitsList.length > 0 && (
                  <motion.div
                    key={slideIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full p-4 rounded-xl bg-purple-950/20 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <div>
                        <span className="text-[10px] font-mono text-purple-400 uppercase">
                          0{slideIdx + 1} / 0{benefitsList.length}
                        </span>
                        <div className="text-sm sm:text-base font-semibold text-white">
                          {benefitsList[slideIdx]}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {benefitsList.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIdx(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    i === slideIdx ? "w-5 bg-orange-500" : "w-1.5 bg-zinc-800"
                  }`}
                />
              ))}
            </div>

            <p className="mt-4 text-center text-zinc-400 text-xs leading-relaxed">
              {t("blog_post.benefits_footer")}
            </p>
          </div>
        </section>

        {/* ========================================================
            SECTION 3: WHEN IS CUSTOM SOFTWARE A GOOD CHOICE?
        ========================================================= */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-orange-400 font-mono">
              {t("blog_post.when_badge")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t("blog_post.when_title")}
            </h2>
            <div className="text-zinc-400 text-xs sm:text-sm leading-relaxed space-y-1">
              <p>{t("blog_post.when_intro1")}</p>
              <p>{t("blog_post.when_intro2")}</p>
              <p className="text-zinc-200">{t("blog_post.when_intro3")}</p>
            </div>
            <div className="text-xs font-mono text-purple-300 pt-1 font-semibold">
              {t("blog_post.when_subtitle")}
            </div>
          </div>

          {/* Compact Pill Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {whenCards.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveWhenIndex(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeWhenIndex === i
                    ? "bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold"
                    : "bg-zinc-900/60 text-zinc-400 hover:text-white"
                }`}
              >
                0{i + 1}. {c.title}
              </button>
            ))}
          </div>

          {/* Active Scenario Card Preview */}
          <div className="rounded-2xl bg-zinc-950/60 p-5 sm:p-6 text-center max-w-2xl mx-auto min-h-[90px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWhenIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-1"
              >
                <div className="text-sm font-bold text-orange-300">
                  {whenCards[activeWhenIndex]?.title}
                </div>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {whenCards[activeWhenIndex]?.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-center text-xs font-mono text-purple-300">
            {t("blog_post.when_footer")}
          </p>
        </section>

        {/* ========================================================
            SECTION 4: WHAT ARE SAAS PLATFORMS?
        ========================================================= */}
        <section>
          <div className="rounded-2xl bg-zinc-950/50 p-6 sm:p-10 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content with Micro-Step Reader */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] uppercase tracking-widest text-purple-400 font-mono flex items-center gap-1.5">
                <Cloud className="w-3.5 h-3.5" />
                {t("blog_post.saas_badge")}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {t("blog_post.saas_title")}
              </h2>

              {/* Step Navigation Tabs */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {saasParagraphs.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSaasStep(idx)}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                      saasStep === idx
                        ? "bg-purple-600 text-white font-bold"
                        : "bg-zinc-900 text-zinc-400 hover:text-white"
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>

              {/* Dynamic Step Text */}
              <div className="rounded-xl bg-purple-950/20 p-4 min-h-[90px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={saasStep}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-1"
                  >
                    <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest">
                      {saasParagraphs[saasStep].title}
                    </span>
                    <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed">
                      {saasParagraphs[saasStep].text}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Interactive Core Orb */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-orange-500/40"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-3 rounded-full border border-purple-500/30"
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCircle((prev) => (prev + 1) % 3)}
                  className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-950 to-orange-950 flex flex-col items-center justify-center text-center p-3 cursor-pointer group"
                >
                  <Layers className="w-5 h-5 text-orange-400 mb-1" />
                  <span className="text-[10px] font-mono font-bold text-white uppercase">
                    {activeCircle === 0 && "CLOUD HOSTED"}
                    {activeCircle === 1 && "MULTI-TENANT"}
                    {activeCircle === 2 && "SECURE SYNC"}
                  </span>
                  <span className="text-[8px] text-zinc-400 font-mono mt-0.5">Click to cycle</span>
                </motion.button>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 mt-2">
                Multi-Tenant Architecture
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 5: WHY ARE SAAS PLATFORMS POPULAR?
        ========================================================= */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-orange-400 font-mono">
              {t("blog_post.saas_pop_badge")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t("blog_post.saas_pop_title")}
            </h2>
            <div className="text-zinc-400 text-xs sm:text-sm leading-relaxed space-y-1">
              <p className="text-zinc-200">{t("blog_post.saas_pop_p1")}</p>
              <p>{t("blog_post.saas_pop_p2")}</p>
              <p className="text-purple-300 font-mono">{t("blog_post.saas_pop_p3")}</p>
            </div>
          </div>

          {/* 8 Compact Feature Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {saasFeatures.map((feat, idx) => {
              const isSelected = activePillarIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`p-3 rounded-xl transition-all text-left flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-purple-900 to-orange-950 text-white"
                      : "bg-zinc-900/40 text-zinc-400 hover:bg-zinc-900/80"
                  }`}
                >
                  <Zap className={`w-3.5 h-3.5 flex-shrink-0 ${isSelected ? "text-orange-400" : "text-purple-400"}`} />
                  <span className="text-xs font-medium leading-tight">{feat}</span>
                </button>
              );
            })}
          </div>

          <p className="text-center text-zinc-400 text-xs max-w-xl mx-auto leading-relaxed pt-2">
            {t("blog_post.saas_pop_footer")}
          </p>
        </section>

        {/* ========================================================
            SECTION 6: CUSTOM SOFTWARE AND SAAS CAN WORK TOGETHER
        ========================================================= */}
        <section>
          <div className="rounded-2xl bg-zinc-950/50 p-6 sm:p-8 backdrop-blur-xl space-y-4">
            <span className="text-[11px] uppercase tracking-widest text-purple-400 font-mono">
              {t("blog_post.synergy_badge")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t("blog_post.synergy_title")}
            </h2>

            <div className="flex gap-2">
              {["Core Concept", "Industry Example"].map((lbl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSynergyTab(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    synergyTab === idx
                      ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold"
                      : "bg-zinc-900 text-zinc-400"
                  }`}
                >
                  {lbl}
                </button>
              ))}
            </div>

            <div className="rounded-xl bg-purple-950/20 p-4 min-h-[85px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={synergyTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="space-y-1 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                >
                  {synergyTab === 0 ? (
                    <>
                      <p className="text-white font-semibold">{t("blog_post.synergy_p1")}</p>
                      <p>{t("blog_post.synergy_p2")}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-zinc-400">{t("blog_post.synergy_p3")}</p>
                      <p className="text-white">{t("blog_post.synergy_p4")}</p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="p-3.5 rounded-xl bg-orange-950/30 text-xs font-medium text-orange-200">
              ✨ {t("blog_post.synergy_highlight")}
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 7: IMPORTANT THINGS TO CONSIDER BEFORE DEVELOPMENT
        ========================================================= */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-orange-400 font-mono">
              {t("blog_post.consider_badge")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t("blog_post.consider_title")}
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {t("blog_post.consider_intro")}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {considerItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCheckpoint(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeCheckpoint === idx
                    ? "bg-purple-600 text-white font-semibold"
                    : "bg-zinc-900 text-zinc-400 hover:text-white"
                }`}
              >
                0{idx + 1}. {item.title}
              </button>
            ))}
          </div>

          {/* Active Checkpoint Detail Box */}
          <div className="rounded-2xl bg-zinc-950/60 p-5 sm:p-6 text-center max-w-2xl mx-auto min-h-[90px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCheckpoint}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-1"
              >
                <div className="text-sm font-bold text-orange-300">
                  {considerItems[activeCheckpoint]?.title}
                </div>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {considerItems[activeCheckpoint]?.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ========================================================
            SECTION 8: CHOOSING THE RIGHT DEVELOPMENT APPROACH
        ========================================================= */}
        <section>
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/50 space-y-4">
            <span className="text-[11px] uppercase tracking-widest text-purple-400 font-mono">
              {t("blog_post.approach_badge")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t("blog_post.approach_title")}
            </h2>

            <div className="flex gap-2">
              {["Core Principles", "Strategic Perspective"].map((lbl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveApproach(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeApproach === idx
                      ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold"
                      : "bg-zinc-900 text-zinc-400"
                  }`}
                >
                  {lbl}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-purple-950/20 min-h-[75px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeApproach}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="text-zinc-300 text-xs sm:text-sm leading-relaxed"
                >
                  {activeApproach === 0 ? t("blog_post.approach_p1") : t("blog_post.approach_p2")}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="p-3.5 rounded-xl bg-purple-950/40 text-purple-200 text-xs font-medium">
              {t("blog_post.approach_highlight")}
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 9: BUILDING SOFTWARE FOR LONG-TERM GROWTH (CTA)
        ========================================================= */}
        <section>
          <div className="rounded-2xl bg-gradient-to-b from-purple-950/40 to-zinc-950/80 p-8 sm:p-12 text-center space-y-4">
            <span className="text-[11px] uppercase tracking-widest text-orange-400 font-mono">
              {t("blog_post.growth_badge")}
            </span>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {t("blog_post.growth_title")}
            </h2>

            <div className="space-y-2 text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              <p className="font-bold text-white">{t("blog_post.growth_p1")}</p>
              <p>{t("blog_post.growth_p2")}</p>
              <p>{t("blog_post.growth_p3")}</p>
              <p className="text-zinc-400">{t("blog_post.growth_p4")}</p>
            </div>

            <div className="pt-3 flex justify-center">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
                >
                  <span>{t("blog_post.cta_button")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

      </main>
    </div>
    <BlogComponent/>
     </> 
  );
}