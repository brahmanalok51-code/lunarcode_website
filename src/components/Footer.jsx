import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code2, ArrowRight, ShieldCheck, Cpu, Terminal, Sparkles, Send } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-[#020204] border-t border-purple-950/40 pt-16 pb-8 overflow-hidden">
      {/* Background Neon Glow Spheres */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-80 h-80 bg-fuchsia-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-purple-950 border border-purple-500/40 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                <Code2 className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-xl font-extrabold text-white font-mono tracking-wider">
                LUNAR<span className="text-purple-400">CODE</span>
              </span>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              {t('footer.tagline')}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-950/50 border border-purple-800/40 text-purple-300">
                <Cpu className="w-3 h-3 text-purple-400" /> AI Automation
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300">
                <ShieldCheck className="w-3 h-3 text-purple-400" /> Cloud & Security
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300">
              {t('footer.quick_links')}
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors flex items-center gap-1">
                  <span>{t('nav.home')}</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors flex items-center gap-1">
                  <span>{t('nav.about')}</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-purple-400 transition-colors flex items-center gap-1">
                  <span>{t('nav.services')}</span>
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-purple-400 transition-colors flex items-center gap-1">
                  <span>{t('nav.products')}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Core Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300">
              {t('footer.services_heading')}
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="hover:text-purple-400 cursor-pointer transition-colors">
                {t('footer.services_items.custom_software')}
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">
                {t('footer.services_items.ai_automation')}
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">
                {t('footer.services_items.saas_dev')}
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">
                {t('footer.services_items.cloud_infra')}
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">
                {t('footer.services_items.api_security')}
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              {t('footer.newsletter_title')}
            </h4>
            <p className="text-xs text-zinc-400">
              {t('footer.newsletter_sub')}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder={t('footer.placeholder_email')}
                  className="w-full px-3 py-2 text-xs bg-zinc-950 border border-purple-900/50 rounded-lg text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-purple-500 transition-all"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-purple-700 hover:bg-purple-600 text-white transition-all shadow-[0_0_15px_rgba(147,51,234,0.3)]"
              >
                <span>{t('footer.btn_subscribe')}</span>
                <Send className="w-3 h-3" />
              </motion.button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} LunarCode. {t('footer.rights')}</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-purple-400 transition-colors">{t('footer.privacy')}</a>
            <span>•</span>
            <a href="#" className="hover:text-purple-400 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}