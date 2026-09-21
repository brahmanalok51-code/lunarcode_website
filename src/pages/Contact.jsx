import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  Globe2
} from 'lucide-react';
import MetaTags from '../components/MetaTags';

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Apni EmailJS credentials daalein: service_id, template_id, public_key
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      formRef.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setLoading(false);
      setStatus({
        type: 'success',
        message: t('contact_page.success_msg')
      });
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setLoading(false);
      setStatus({
        type: 'error',
        message: t('contact_page.error_msg')
      });
    });
  };

  return (
    <div className="min-h-screen bg-[#030305] text-zinc-100 pt-28 pb-24 relative overflow-hidden">
      {/* Home / Base SEO Meta Tags */}
      <MetaTags page="home" />

      {/* Atmospheric Neon Purple Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[550px] bg-purple-600/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-[50%] -left-40 w-[450px] h-[450px] bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Header */}
        <section className="text-center max-w-4xl mx-auto pt-4">
       

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t('contact_page.hero_title_start')}{' '}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
              {t('contact_page.hero_title_highlight')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            {t('contact_page.hero_subtitle')}
          </motion.p>
        </section>

        {/* Contact Grid: Details + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Presence & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Global Presence Banner */}
            <div className="p-8 rounded-3xl bg-zinc-950/80 border border-purple-950/50 shadow-[0_8px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-mono mb-2">
                <Globe2 className="w-4 h-4 text-purple-400" />
                <span>{t('contact_page.global_badge')}</span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {t('contact_page.global_desc')}
              </p>
            </div>

            {/* HQ Address Card */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-purple-950/50 hover:border-purple-500/50 shadow-md transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider text-purple-400 font-mono font-semibold">
                  {t('contact_page.hq_title')}
                </h3>
                <p className="text-sm text-zinc-300 mt-1 leading-relaxed">
                  {t('contact_page.hq_address')}
                </p>
              </div>
            </div>

            {/* Inquiries & Support Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-zinc-950/80 border border-purple-950/50 hover:border-purple-500/50 shadow-md transition-all">
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase tracking-wider">{t('contact_page.corp_title')}</span>
                </div>
                <a href="tel:+919818865380" className="text-sm font-semibold text-white hover:text-purple-300 transition-colors">
                  +91 9818865380
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-950/80 border border-purple-950/50 hover:border-purple-500/50 shadow-md transition-all">
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase tracking-wider">{t('contact_page.support_title')}</span>
                </div>
                <a href="mailto:contact@lunarcode.tech" className="text-sm font-semibold text-white hover:text-purple-300 transition-colors break-all">
                  contact@lunarcode.tech
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: EmailJS Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-zinc-950/90 border border-purple-900/40 shadow-[0_10px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              {t('contact_page.form_heading')}
            </h2>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-purple-300 mb-2">
                  {t('contact_page.name_label')}
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder={t('contact_page.name_placeholder')}
                  className="w-full px-4 py-3 text-sm bg-[#090714] border border-purple-950/70 focus:border-purple-500 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-purple-300 mb-2">
                  {t('contact_page.email_label')}
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder={t('contact_page.email_placeholder')}
                  className="w-full px-4 py-3 text-sm bg-[#090714] border border-purple-950/70 focus:border-purple-500 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none transition-all"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-purple-300 mb-2">
                  {t('contact_page.desc_label')}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={t('contact_page.desc_placeholder')}
                  className="w-full px-4 py-3 text-sm bg-[#090714] border border-purple-950/70 focus:border-purple-500 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Status Banner */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3.5 rounded-xl text-xs flex items-center gap-2 ${
                    status.type === 'success'
                      ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300'
                      : 'bg-rose-950/60 border border-rose-500/40 text-rose-300'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  )}
                  <span>{status.message}</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(147,51,234,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>{t('contact_page.sending')}</span>
                ) : (
                  <>
                    <span>{t('contact_page.btn_submit')}</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>

        {/* 3. Greater Noida Location Interactive Map */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-purple-400" />
            <h3 className="text-sm font-mono uppercase tracking-wider text-purple-300">
              Greater Noida HQ Satellite Coordinates
            </h3>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-purple-900/40 shadow-[0_0_40px_rgba(0,0,0,0.85)] relative"
          >
            <iframe
              title="LunarCode Greater Noida HQ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3877991901366!2d77.5108422!3d28.4716499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea7ef4dbbbf1%3A0xe54d24606ea22d64!2sAlpha%201%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </section>

      </div>
    </div>
  );
}