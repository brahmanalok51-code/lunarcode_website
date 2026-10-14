import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Globe2,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import MetaTags from "../components/MetaTags";

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: t("contact_page.success_msg"),
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message: t("contact_page.error_msg"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030305] px-4 pt-28 pb-24 text-zinc-100 sm:px-6 lg:px-8">
      {/* ================= SEO ================= */}

      <MetaTags page="contact" />

      {/* ================= BACKGROUND ================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[130px] sm:h-[600px] sm:w-[600px] sm:blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] top-[45%] h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-150px] right-[-150px] h-[450px] w-[450px] rounded-full bg-purple-900/15 blur-[150px]"
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl space-y-20 sm:space-y-24">
        {/* ================= HERO ================= */}

        <section
          aria-labelledby="contact-title"
          className="mx-auto max-w-4xl pt-2 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex justify-center"
          >
            <span className="rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-purple-300 sm:text-xs">
              {t("contact_page.badge")}
            </span>
          </motion.div>

          <motion.h1
            id="contact-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t("contact_page.hero_title_start")}{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
              {t("contact_page.hero_title_highlight")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8 lg:text-lg"
          >
            {t("contact_page.hero_subtitle")}
          </motion.p>
        </section>

        {/* ================= CONTACT AREA ================= */}

        <section
          aria-labelledby="contact-options"
          className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12"
        >
          <h2 id="contact-options" className="sr-only">
            {t("contact_page.contact_options_heading")}
          </h2>

          {/* ================= LEFT COLUMN ================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 lg:col-span-5"
          >
            {/* Global Presence */}

            <article className="relative overflow-hidden rounded-3xl border border-purple-950/50 bg-zinc-950/80 p-7 text-center shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-purple-600/10 blur-3xl"
              />

              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-center gap-2 text-purple-400">
                  <Globe2 className="h-4 w-4" />

                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] sm:text-xs">
                    {t("contact_page.global_badge")}
                  </span>
                </div>

                <p className="mx-auto max-w-md text-sm leading-7 text-zinc-400">
                  {t("contact_page.global_desc")}
                </p>
              </div>
            </article>

            {/* HQ */}

            <article className="rounded-2xl border border-purple-950/50 bg-zinc-950/80 p-6 shadow-md transition-all hover:border-purple-500/50">
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-950/80 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
                  <Building2 className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-purple-400 sm:text-xs">
                    {t("contact_page.hq_title")}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-zinc-300">
                    {t("contact_page.hq_address")}
                  </p>
                </div>
              </div>
            </article>

            {/* Phone + Email */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Phone */}

              <article className="rounded-2xl border border-purple-950/50 bg-zinc-950/80 p-5 text-center shadow-md transition-all hover:border-purple-500/50">
                <div className="mb-3 flex items-center justify-center gap-2 text-purple-400">
                  <Phone className="h-4 w-4" />

                  <span className="text-[10px] font-mono uppercase tracking-wider">
                    {t("contact_page.corp_title")}
                  </span>
                </div>

                <a
                  href="tel:+919818865380"
                  aria-label="Call LunarCode"
                  className="block text-sm font-semibold text-white transition-colors hover:text-purple-300"
                >
                  +91 9818865380
                </a>

                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="tel:+919818865380"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-purple-900/50 bg-purple-950/20 px-3 py-2 text-[11px] font-medium text-zinc-300 transition-all hover:border-purple-500/50 hover:text-white"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {t("contact_page.call_us")}
                  </a>

                  <a
                    href="https://wa.me/919818865380"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with LunarCode on WhatsApp"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-purple-900/50 bg-purple-950/20 px-3 py-2 text-[11px] font-medium text-zinc-300 transition-all hover:border-purple-500/50 hover:text-white"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    {t("contact_page.whatsapp")}
                  </a>
                </div>
              </article>

              {/* Email */}

              <article className="rounded-2xl border border-purple-950/50 bg-zinc-950/80 p-5 text-center shadow-md transition-all hover:border-purple-500/50">
                <div className="mb-3 flex items-center justify-center gap-2 text-purple-400">
                  <Mail className="h-4 w-4" />

                  <span className="text-[10px] font-mono uppercase tracking-wider">
                    {t("contact_page.support_title")}
                  </span>
                </div>

                <a
                  href="mailto:lunarcodetech@gmail.com"
                  aria-label="Email LunarCode"
                  className="block break-all text-sm font-semibold text-white transition-colors hover:text-purple-300"
                >
                  lunarcodetech@gmail.com
                </a>
              </article>
            </div>

            {/* Contact Note */}

            <div className="rounded-2xl border border-purple-900/30 bg-purple-950/10 p-5 text-center">
              <p className="text-xs leading-6 text-zinc-400">
                {t("contact_page.response_note")}
              </p>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN ================= */}

          <motion.article
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-purple-900/40 bg-zinc-950/90 p-6 shadow-[0_10px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-8 lg:col-span-7 lg:p-10"
          >
            <div className="mb-7 text-center sm:text-left">
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-purple-400 sm:text-xs">
                {t("contact_page.form_badge")}
              </span>

              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                {t("contact_page.form_heading")}
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
                {t("contact_page.form_subtitle")}
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-5"
            >
              {/* Name */}

              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-purple-300 sm:text-xs"
                >
                  {t("contact_page.name_label")}
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="user_name"
                  required
                  autoComplete="name"
                  placeholder={t("contact_page.name_placeholder")}
                  className="w-full rounded-xl border border-purple-950/70 bg-[#090714] px-4 py-3.5 text-sm text-zinc-100 outline-none transition-all placeholder:text-zinc-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20"
                />
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-purple-300 sm:text-xs"
                >
                  {t("contact_page.email_label")}
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="user_email"
                  required
                  autoComplete="email"
                  placeholder={t("contact_page.email_placeholder")}
                  className="w-full rounded-xl border border-purple-950/70 bg-[#090714] px-4 py-3.5 text-sm text-zinc-100 outline-none transition-all placeholder:text-zinc-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20"
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-purple-300 sm:text-xs"
                >
                  {t("contact_page.desc_label")}
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder={t("contact_page.desc_placeholder")}
                  className="w-full resize-none rounded-xl border border-purple-950/70 bg-[#090714] px-4 py-3.5 text-sm leading-6 text-zinc-100 outline-none transition-all placeholder:text-zinc-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20"
                />
              </div>

              {/* Status */}

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  aria-live="polite"
                  className={`flex items-start gap-2.5 rounded-xl p-3.5 text-xs ${
                    status.type === "success"
                      ? "border border-emerald-500/40 bg-emerald-950/60 text-emerald-300"
                      : "border border-rose-500/40 bg-rose-950/60 text-rose-300"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  ) : (
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  )}

                  <span>{status.message}</span>
                </motion.div>
              )}

              {/* Submit */}

              <motion.button
                whileHover={{ scale: loading ? 1 : 1.01 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all hover:shadow-[0_0_35px_rgba(168,85,247,0.65)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span>{t("contact_page.sending")}</span>

                    <span
                      aria-hidden="true"
                      className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white"
                    />
                  </>
                ) : (
                  <>
                    <span>{t("contact_page.btn_submit")}</span>

                    <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.article>
        </section>

        {/* ================= LOCATION ================= */}

        <section
          aria-labelledby="location-heading"
          className="space-y-5"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4 text-purple-400" />

              <h2
                id="location-heading"
                className="text-sm font-mono uppercase tracking-[0.15em] text-purple-300"
              >
                {t("contact_page.map_title")}
              </h2>
            </div>

            <p className="mx-auto mt-2 max-w-xl text-xs leading-6 text-zinc-500">
              {t("contact_page.map_subtitle")}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-purple-900/40 shadow-[0_0_40px_rgba(0,0,0,0.85)]"
          >
            <iframe
              title="LunarCode office location in Noida, Uttar Pradesh"
              src="https://www.google.com/maps?q=Noida,+Uttar+Pradesh,+India&output=embed"
              width="100%"
              height="380"
              style={{
                border: 0,
                filter:
                  "invert(90%) hue-rotate(180deg) contrast(100%)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </section>

        {/* ================= FINAL CTA ================= */}

        <section
          aria-labelledby="contact-cta"
          className="pb-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-950/30 via-zinc-950 to-fuchsia-950/20 p-8 text-center sm:p-10"
          >
            <h2
              id="contact-cta"
              className="text-2xl font-extrabold text-white sm:text-3xl"
            >
              {t("contact_page.final_cta_title")}
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
              {t("contact_page.final_cta_desc")}
            </p>

            <a
              href="https://wa.me/919818865380"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
            >
              <MessageCircle className="h-4 w-4" />
              {t("contact_page.final_cta_button")}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </section>
      </div>
    </main>
  );
}