import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo.jpeg"

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
  ];

  const currentLang = languages.find(l => l.code === (i18n.language?.substring(0, 2) || 'en')) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLangDropdownOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/service' },
    { name: t('nav.products'), path: '/product' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#030305]/90 backdrop-blur-md border-b border-purple-950/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-b border-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Official Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative flex items-center justify-center h-10 w-auto overflow-hidden">
              <img 
                src={logo}
                alt="LunarCode Logo" 
                className="h-30 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(168,85,247,0.55)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-all duration-200 group ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <span>{link.name}</span>
                  {/* Glowing Underline Indicator */}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 ${
                      isActive ? 'w-4/5 shadow-[0_0_10px_rgba(168,85,247,0.8)]' : 'w-0 group-hover:w-3/5'
                    }`} 
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Language Switcher + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-950/80 text-zinc-300 hover:text-white border border-purple-900/40 hover:border-purple-500/50 transition-all cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-purple-400" />
                <span>{currentLang.flag} {currentLang.label}</span>
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-36 rounded-xl bg-[#08060f] border border-purple-900/50 shadow-[0_12px_40px_rgba(0,0,0,0.9)] py-1.5 z-50 backdrop-blur-xl"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => changeLanguage(l.code)}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-purple-950/50 transition-colors cursor-pointer ${
                          currentLang.code === l.code ? 'text-purple-300 font-semibold bg-purple-950/40' : 'text-zinc-400'
                        }`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Launch Project CTA */}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/contact"
                className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-fuchsia-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all"
              >
                <span>{t('nav.launch_project')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => changeLanguage(currentLang.code === 'en' ? 'hi' : currentLang.code === 'hi' ? 'de' : 'en')}
              className="px-2 py-1 text-xs rounded bg-purple-950/60 border border-purple-800/50 text-purple-300"
            >
              {currentLang.flag} {currentLang.code.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white rounded-lg bg-zinc-950 border border-purple-900/40"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#050508]/98 border-b border-purple-950/50 px-6 py-5 overflow-hidden backdrop-blur-xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-1.5 text-base font-medium transition-colors ${
                      isActive ? 'text-purple-400 font-semibold' : 'text-zinc-300 hover:text-purple-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-purple-950/40 flex justify-between items-center">
                <span className="text-xs text-zinc-500">Language</span>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setMobileMenuOpen(false);
                      }}
                      className={`px-2.5 py-1 text-xs rounded-md border ${
                        currentLang.code === lang.code
                          ? 'border-purple-500 bg-purple-950/60 text-purple-300'
                          : 'border-zinc-800 text-zinc-400'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}