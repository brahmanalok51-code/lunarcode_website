import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getCustomSoftwareBlog } from './CustomSoftwareBlog';
import { getAiAutomationBlog } from './AiAutomationBlog';
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useSpring 
} from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
  ArrowLeft, 
  Bookmark, 
  BookmarkCheck, 
  Share2, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Cloud, 
  Zap, 
  ChevronRight, 
  Copy, 
  Check, 
  Sparkles, 
  Terminal, 
  Menu, 
  X, 
  Hash, 
  Eye, 
  Rocket, 
  ShieldCheck, 
  TrendingUp, 
  Cpu
} from 'lucide-react';

export default function App() {
  const { t } = useTranslation();

  // --- CLIENT ROUTER & URL RECOGNITION ---
  const [currentRoute, setCurrentRoute] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      return window.location.hash.replace('#', '');
    }
    return '/';
  });
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('lunarcode_bookmarks');
      return saved ? JSON.parse(saved) : ["web-apps-smarter-growth"];
    } catch {
      return ["web-apps-smarter-growth"];
    }
  });
  const [shareToast, setShareToast] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync route on popstate and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      setCurrentRoute(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path) => {
    window.location.hash = path;
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleBookmark = (id) => {
    const next = bookmarks.includes(id) 
      ? bookmarks.filter(item => item !== id)
      : [...bookmarks, id];
    setBookmarks(next);
    try {
      localStorage.setItem('lunarcode_bookmarks', JSON.stringify(next));
    } catch (e) {
      // Storage unavailable in sandbox
    }
  };

  const copyPostUrl = (slug) => {
    const fullUrl = `${window.location.origin}${window.location.pathname}#/blog/${slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullUrl);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 3000);
    }
  };

  // --- TRANSLATED DATA REPOSITORY ---
  const BLOG_POSTS = useMemo(() => [
    {
      id: "web-apps-smarter-growth",
      slug: "web-applications-help-businesses-work-smarter-and-grow-faster",
      title: t("blog.posts.web_apps.title"),
      category: t("blog.posts.web_apps.category"),
      readTime: t("blog.posts.web_apps.readTime"),
      date: t("blog.posts.web_apps.date"),
      author: {
        name: t("blog.posts.web_apps.author_name"),
        role: t("blog.posts.web_apps.author_role"),
        avatar: "LC"
      },
      excerpt: t("blog.posts.web_apps.excerpt"),
      tags: ["Web Applications", "Cloud Infrastructure", "Scalability", "LunarCode", "Automation"],
      featured: true,
      content: {
        lead: t("blog.posts.web_apps.lead"),
        introParagraphs: [
          t("blog.posts.web_apps.intro1"),
          t("blog.posts.web_apps.intro2"),
          t("blog.posts.web_apps.intro3")
        ],
        sections: [
          {
            id: "what-is-a-web-application",
            title: t("blog.posts.web_apps.sec1_title"),
            paragraphs: [
              t("blog.posts.web_apps.sec1_p1"),
              t("blog.posts.web_apps.sec1_p2"),
              t("blog.posts.web_apps.sec1_p3"),
              t("blog.posts.web_apps.sec1_p4")
            ],
            callout: t("blog.posts.web_apps.sec1_p4")
          },
          {
            id: "how-web-applications-help-businesses-work-smarter",
            title: t("blog.posts.web_apps.sec2_title"),
            paragraphs: [
              t("blog.posts.web_apps.sec2_p1")
            ],
            subsections: [
              {
                id: "automate-repetitive-tasks",
                number: "1",
                title: t("blog.posts.web_apps.sub1_title"),
                body: t("blog.posts.web_apps.sub1_body")
              },
              {
                id: "keep-business-information-organized",
                number: "2",
                title: t("blog.posts.web_apps.sub2_title"),
                body: t("blog.posts.web_apps.sub2_body")
              },
              {
                id: "improve-the-customer-experience",
                number: "3",
                title: t("blog.posts.web_apps.sub3_title"),
                body: t("blog.posts.web_apps.sub3_body")
              },
              {
                id: "support-remote-teams",
                number: "4",
                title: t("blog.posts.web_apps.sub4_title"),
                body: t("blog.posts.web_apps.sub4_body")
              }
            ]
          },
          {
            id: "why-choosing-the-right-web-application-development-company-matters",
            title: t("blog.posts.web_apps.sec3_title"),
            paragraphs: [
              t("blog.posts.web_apps.sec3_p1"),
              t("blog.posts.web_apps.sec3_p2"),
              t("blog.posts.web_apps.sec3_p3"),
              t("blog.posts.web_apps.sec3_p4")
            ],
            bulletPoints: [
              {
                title: t("blog.posts.web_apps.bp1_title"),
                text: t("blog.posts.web_apps.bp1_text")
              },
              {
                title: t("blog.posts.web_apps.bp2_title"),
                text: t("blog.posts.web_apps.bp2_text")
              },
              {
                title: t("blog.posts.web_apps.bp3_title"),
                text: t("blog.posts.web_apps.bp3_text")
              },
              {
                title: t("blog.posts.web_apps.bp4_title"),
                text: t("blog.posts.web_apps.bp4_text")
              },
              {
                title: t("blog.posts.web_apps.bp5_title"),
                text: t("blog.posts.web_apps.bp5_text")
              }
            ],
            conclusionText: t("blog.posts.web_apps.sec3_conclusion")
          },
          {
            id: "the-role-of-cloud-infrastructure-services",
            title: t("blog.posts.web_apps.sec4_title"),
            paragraphs: [
              t("blog.posts.web_apps.sec4_p1"),
              t("blog.posts.web_apps.sec4_p2"),
              t("blog.posts.web_apps.sec4_p3"),
              t("blog.posts.web_apps.sec4_p4"),
              t("blog.posts.web_apps.sec4_p5"),
              t("blog.posts.web_apps.sec4_p6"),
              t("blog.posts.web_apps.sec4_p7"),
              t("blog.posts.web_apps.sec4_p8")
            ]
          },
          {
            id: "why-scalable-software-solutions-are-important",
            title: t("blog.posts.web_apps.sec5_title"),
            paragraphs: [
              t("blog.posts.web_apps.sec5_p1"),
              t("blog.posts.web_apps.sec5_p2"),
              t("blog.posts.web_apps.sec5_p3"),
              t("blog.posts.web_apps.sec5_p4"),
              t("blog.posts.web_apps.sec5_p5"),
              t("blog.posts.web_apps.sec5_p6"),
              t("blog.posts.web_apps.sec5_p7"),
              t("blog.posts.web_apps.sec5_p8")
            ]
          },
          {
            id: "how-lunarcode-can-help-your-business",
            title: t("blog.posts.web_apps.sec6_title"),
            paragraphs: [
              t("blog.posts.web_apps.sec6_p1"),
              t("blog.posts.web_apps.sec6_p2"),
              t("blog.posts.web_apps.sec6_p3"),
              t("blog.posts.web_apps.sec6_p4")
            ]
          }
        ]
      }
    },
    getCustomSoftwareBlog(t),
    getAiAutomationBlog(t),
    {
      id: "cloud-security-practices",
      slug: "modern-cloud-security-foundations-enterprise-architecture",
      title: t("blog.posts.cloud_sec.title"),
      category: t("blog.posts.cloud_sec.category"),
      readTime: t("blog.posts.cloud_sec.readTime"),
      date: t("blog.posts.cloud_sec.date"),
      author: {
        name: t("blog.posts.cloud_sec.author_name"),
        role: t("blog.posts.cloud_sec.author_role"),
        avatar: "LC"
      },
      excerpt: t("blog.posts.cloud_sec.excerpt"),
      tags: ["DevSecOps", "Cloud", "Architecture"],
      featured: false,
      content: {
        lead: t("blog.posts.cloud_sec.lead"),
        introParagraphs: [
          t("blog.posts.cloud_sec.intro1"),
          t("blog.posts.cloud_sec.intro2")
        ],
        sections: [
          {
            id: "core-pillars",
            title: t("blog.posts.cloud_sec.sec1_title"),
            paragraphs: [
              t("blog.posts.cloud_sec.sec1_p1"),
              t("blog.posts.cloud_sec.sec1_p2")
            ]
          }
        ]
      }
    },
    {
      id: "ai-workflow-automation",
      slug: "unifying-business-intelligence-with-ai-automation",
      title: t("blog.posts.ai_workflow.title"),
      category: t("blog.posts.ai_workflow.category"),
      readTime: t("blog.posts.ai_workflow.readTime"),
      date: t("blog.posts.ai_workflow.date"),
      author: {
        name: t("blog.posts.ai_workflow.author_name"),
        role: t("blog.posts.ai_workflow.author_role"),
        avatar: "LC"
      },
      excerpt: t("blog.posts.ai_workflow.excerpt"),
      tags: ["AI", "Workflow", "Productivity"],
      featured: false,
      content: {
        lead: t("blog.posts.ai_workflow.lead"),
        introParagraphs: [
          t("blog.posts.ai_workflow.intro1"),
          t("blog.posts.ai_workflow.intro2")
        ],
        sections: [
          {
            id: "automation-impact",
            title: t("blog.posts.ai_workflow.sec1_title"),
            paragraphs: [
              t("blog.posts.ai_workflow.sec1_p1"),
              t("blog.posts.ai_workflow.sec1_p2")
            ]
          }
        ]
      }
    }
  ], [t]);

  // Determine current active post based on route
  const currentPostSlug = useMemo(() => {
    if (currentRoute.startsWith('/blog/')) {
      return currentRoute.replace('/blog/', '');
    }
    return null;
  }, [currentRoute]);

  const activePost = useMemo(() => {
    if (!currentPostSlug) return null;
    return BLOG_POSTS.find(p => p.slug === currentPostSlug) || BLOG_POSTS[0];
  }, [currentPostSlug, BLOG_POSTS]);

  const categories = useMemo(() => {
    return [
      t("blog.categories.all"),
      t("blog.categories.software_dev"),
      t("blog.categories.cloud_infra"),
      t("blog.categories.ai_automation")
    ];
  }, [t]);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = activeCategory === "All" || activeCategory === t("blog.categories.all") || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, BLOG_POSTS, t]);

  return (
    <div className="min-h-screen bg-[#07060A] text-zinc-100 font-sans selection:bg-orange-500 selection:text-black relative overflow-x-hidden">
      {/* Background ambient neon glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-700/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-orange-600/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-900/15 rounded-full blur-[160px]" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)`, 
            backgroundSize: '24px 24px' 
          }} 
        />
      </div>

      {/* Persistent Top Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#09080E]/85 border-b border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-purple-900/40 text-zinc-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-b border-purple-900/40 bg-[#0c0a14] px-4 py-4 space-y-3"
            >
              <button 
                onClick={() => { navigateTo('/'); setMobileMenuOpen(false); }}
                className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-zinc-300 hover:bg-purple-950/40"
              >
                {t("blog.nav_all_articles")}
              </button>
              <button 
                onClick={() => { navigateTo(`/blog/${BLOG_POSTS[0].slug}`); setMobileMenuOpen(false); }}
                className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-orange-400 hover:bg-purple-950/40"
              >
                {t("blog.featured_nav_mobile")}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {activePost ? (
            <motion.div
              key={activePost.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <SinglePostView 
                post={activePost} 
                onBack={() => navigateTo('/')}
                isBookmarked={bookmarks.includes(activePost.id)}
                onToggleBookmark={() => toggleBookmark(activePost.id)}
                onShare={() => copyPostUrl(activePost.slug)}
                onNavigateToPost={(slug) => navigateTo(`/blog/${slug}`)}
              />
            </motion.div>
          ) : (
            <motion.div
              key="feed-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <BlogFeedView 
                posts={filteredPosts}
                allPosts={BLOG_POSTS}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                categories={categories}
                onSelectPost={(slug) => navigateTo(`/blog/${slug}`)}
                bookmarks={bookmarks}
                onToggleBookmark={toggleBookmark}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Share Toast Modal */}
      <AnimatePresence>
        {shareToast && (
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-[#170e28] to-[#1a111b] border border-orange-500/50 shadow-2xl shadow-orange-950/50 text-white text-sm"
          >
            <div className="w-7 h-7 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-zinc-100">{t("blog.share_toast_title")}</p>
              <p className="text-xs text-zinc-400">{t("blog.share_toast_desc")}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

     
    </div>
  );
}

// ----------------------------------------------------
// BLOG FEED VIEW (Index with categories, search, links)
// ----------------------------------------------------
function BlogFeedView({ 
  posts, 
  allPosts,
  activeCategory, 
  setActiveCategory, 
  searchQuery, 
  setSearchQuery, 
  categories, 
  onSelectPost,
  bookmarks,
  onToggleBookmark 
}) {
  const { t } = useTranslation();
  const featuredArticle = allPosts.find(p => p.featured) || allPosts[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 bg-gradient-to-b from-[#130d24] via-[#0d091a] to-[#07050d] p-8 sm:p-12 md:p-16">
        <div className="max-w-3xl space-y-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 border border-purple-500/30 text-purple-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            {t("blog.feed.badge")}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
          >
            {t("blog.feed.hero_title_1")} <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">{t("blog.feed.hero_title_highlight")}</span> {t("blog.feed.hero_title_2")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl"
          >
            {t("blog.feed.hero_desc")}
          </motion.p>
        </div>

        {/* Ambient glow accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Featured Article Card */}
      {featuredArticle && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-2xl p-1 bg-gradient-to-r from-purple-600/50 via-orange-500/40 to-purple-800/40 shadow-2xl group"
        >
          <div className="rounded-[14px] bg-[#0c0915] p-6 sm:p-10 flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/20 border border-orange-500/40 text-orange-400">
                  {t("blog.feed.featured_badge")}
                </span>
                <span className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {featuredArticle.date}
                </span>
                <span className="text-xs text-zinc-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredArticle.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-orange-300 transition-colors cursor-pointer" onClick={() => onSelectPost(featuredArticle.slug)}>
                {featuredArticle.title}
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectPost(featuredArticle.slug)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 text-white font-bold text-sm transition-all shadow-lg shadow-purple-950/60 transform hover:-translate-y-0.5"
                >
                  {t("blog.feed.read_full_article")}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onToggleBookmark(featuredArticle.id)}
                  className="p-3 rounded-xl border border-purple-900/50 bg-purple-950/20 hover:bg-purple-900/40 text-zinc-300 hover:text-white transition-colors"
                  title="Bookmark"
                >
                  {bookmarks.includes(featuredArticle.id) ? (
                    <BookmarkCheck className="w-5 h-5 text-orange-400" />
                  ) : (
                    <Bookmark className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Graphic Representation card */}
            <div className="w-full lg:w-72 rounded-xl bg-gradient-to-br from-purple-900/30 to-orange-950/20 border border-purple-800/30 p-5 space-y-4 self-stretch flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-purple-300 font-mono mb-2">
                  <span>{t("blog.feed.special_report")}</span>
                  <Terminal className="w-4 h-4 text-orange-400" />
                </div>
                <p className="text-sm font-semibold text-zinc-100">
                  {t("blog.feed.special_report_sub")}
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-zinc-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    {t("blog.feed.sr_item_1")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {t("blog.feed.sr_item_2")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    {t("blog.feed.sr_item_3")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {t("blog.feed.sr_item_4")}
                  </li>
                </ul>
              </div>
              <div className="text-[11px] text-zinc-500 border-t border-purple-900/30 pt-3">
                {t("blog.feed.sr_footer")}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-6 border-t border-purple-900/20">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat || (cat === t("blog.categories.all") && activeCategory === "All")
                  ? 'bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-md shadow-purple-900/40'
                  : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-purple-950/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px] sm:min-w-[320px]">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("blog.feed.search_placeholder")}
            className="w-full bg-[#0e0c17] border border-purple-900/40 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="flex flex-col justify-between rounded-2xl bg-[#0b0914] border border-purple-900/30 hover:border-orange-500/50 transition-all duration-300 p-6 group hover:shadow-xl hover:shadow-purple-950/30"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded-md bg-purple-950/60 text-purple-300 border border-purple-800/40 font-medium">
                  {post.category}
                </span>
                <span className="text-zinc-500 flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <h3 
                onClick={() => onSelectPost(post.slug)}
                className="text-lg font-bold text-zinc-100 group-hover:text-orange-400 transition-colors cursor-pointer line-clamp-2 leading-snug"
              >
                {post.title}
              </h3>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-[11px] text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-purple-950/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-700 to-orange-500 flex items-center justify-center text-[10px] font-bold text-white">
                  {post.author.avatar}
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-300">{post.author.name}</p>
                  <p className="text-[10px] text-zinc-500">{post.date}</p>
                </div>
              </div>

              <button
                onClick={() => onSelectPost(post.slug)}
                className="p-2 rounded-lg text-orange-400 group-hover:translate-x-1 transition-transform"
                title="Read Post"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-16 bg-[#0c0a15] rounded-2xl border border-purple-900/30">
          <Search className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-zinc-300">{t("blog.feed.no_articles_title")}</h4>
          <p className="text-sm text-zinc-500 mt-1">{t("blog.feed.no_articles_desc")}</p>
          <button 
            onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
            className="mt-4 px-4 py-2 bg-purple-900/40 hover:bg-purple-900 text-purple-200 text-xs rounded-lg font-semibold transition-colors"
          >
            {t("blog.feed.reset_filters")}
          </button>
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------
// SINGLE BLOG POST VIEW (Includes entire verbatim text)
// ----------------------------------------------------
function SinglePostView({ 
  post, 
  onBack, 
  isBookmarked, 
  onToggleBookmark, 
  onShare,
  onNavigateToPost 
}) {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState("");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <div>
      {/* Dynamic Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-orange-400 to-orange-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Header breadcrumb & back button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-orange-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t("blog.single.back_to_all")}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleBookmark}
              className={`p-2.5 rounded-xl border transition-all ${
                isBookmarked 
                  ? 'bg-orange-500/20 border-orange-500/50 text-orange-400' 
                  : 'bg-zinc-900/80 border-purple-900/40 text-zinc-400 hover:text-white'
              }`}
              title={isBookmarked ? t("blog.single.bookmark_remove") : t("blog.single.bookmark_save")}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>
            <button
              onClick={onShare}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-950/40 border border-purple-800/40 text-purple-300 hover:text-white hover:bg-purple-900/60 transition-all text-xs font-semibold"
              title="Copy share link"
            >
              <Share2 className="w-4 h-4 text-orange-400" />
              <span>{t("blog.single.share_link_btn")}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Article Hero */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-16">
        <header className="space-y-6 pb-8 border-b border-purple-900/30">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-950 text-purple-300 border border-purple-700/50">
              {post.category}
            </span>
            <span className="text-zinc-500 text-xs flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5 text-orange-400" />
              {post.date}
            </span>
            <span className="text-zinc-500 text-xs flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-orange-400" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Author Badge */}
          <div className="flex items-center gap-4 pt-2">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-600 to-orange-500 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-purple-950/60">
              {post.author.avatar}
            </div>
            <div>
              <p className="font-bold text-sm text-zinc-100">{post.author.name}</p>
              <p className="text-xs text-orange-400 font-medium">{post.author.role}</p>
            </div>
          </div>
        </header>

        {/* Content Layout with Table of Contents Drawer on Large Screens */}
        <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Body */}
          <div className="lg:col-span-8 space-y-8 text-zinc-300 leading-relaxed text-base sm:text-lg">
            
            {/* Lead highlight */}
            {post.content.lead && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#130b21] to-orange-950/20 border-l-4 border-orange-500 border-t border-r border-b border-purple-900/30 shadow-lg">
                <p className="font-medium text-zinc-100 text-base sm:text-lg italic">
                  "{post.content.lead}"
                </p>
              </div>
            )}

            {/* Intro Paragraphs */}
            {post.content.introParagraphs && (
              <div className="space-y-4">
                {post.content.introParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            )}

            {/* Structured Sections */}
            {post.content.sections && post.content.sections.map((section) => (
              <section key={section.id} id={section.id} className="pt-8 border-t border-purple-900/20 space-y-5 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                  <span className="w-2.5 h-7 rounded-full bg-gradient-to-b from-purple-500 to-orange-500 inline-block" />
                  {section.title}
                </h2>

                {section.paragraphs && section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}

                {/* Subsections */}
                {section.subsections && (
                  <div className="space-y-6 pt-3">
                    {section.subsections.map((sub) => (
                      <div 
                        key={sub.id} 
                        id={sub.id}
                        className="rounded-2xl p-6 bg-[#0b0914] border border-purple-900/40 hover:border-orange-500/40 transition-colors shadow-sm"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center font-black text-white text-sm">
                            {sub.number}
                          </div>
                          <h3 className="text-xl font-bold text-zinc-100">
                            {sub.title}
                          </h3>
                        </div>
                        <div className="space-y-3 text-zinc-300 text-sm sm:text-base whitespace-pre-line leading-relaxed pl-11">
                          {sub.body}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Points */}
                {section.bulletPoints && (
                  <div className="space-y-3 pt-3">
                    {section.bulletPoints.map((item, bIdx) => (
                      <div 
                        key={bIdx}
                        className="flex items-start gap-3.5 p-4 rounded-xl bg-purple-950/20 border border-purple-900/30 hover:border-purple-600/40 transition-all"
                      >
                        <div className="mt-1 flex-shrink-0 text-orange-400">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <strong className="text-zinc-100 font-bold block sm:inline mr-1">
                            {item.title}:
                          </strong>
                          <span className="text-zinc-300 text-sm sm:text-base">
                            {item.text}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.conclusionText && (
                  <div className="mt-4 p-5 rounded-xl bg-[#110e1d] border border-orange-500/30 text-orange-200 text-sm sm:text-base font-medium">
                    {section.conclusionText}
                  </div>
                )}
              </section>
            ))}

            {/* Special LunarCode Card Section */}
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-purple-950/80 via-[#100a1f] to-orange-950/60 border border-purple-500/40 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/20 text-orange-300 border border-orange-500/40">
                  <Rocket className="w-3.5 h-3.5 text-orange-400" />
                  {t("blog.single.cta_badge")}
                </div>
                <h3 className="text-2xl font-black text-white">
                  {t("blog.single.cta_title")}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {t("blog.single.cta_desc")}
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button 
                    onClick={() => onShare()}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-400 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                  >
                    {t("blog.single.cta_share_guide")}
                  </button>
                  <button 
                    onClick={onBack}
                    className="px-6 py-3 rounded-xl bg-zinc-900 border border-purple-800/40 text-zinc-300 hover:text-white text-xs uppercase tracking-wider font-semibold transition-all"
                  >
                    {t("blog.single.cta_browse_more")}
                  </button>
                </div>
              </div>

              {/* Background gradient decorative glow */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />
            </div>

          </div>

          {/* Sticky Sidebar / Table of Contents */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              {/* Quick TOC */}
              <div className="rounded-2xl bg-[#0b0914] border border-purple-900/40 p-5 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
                  <Hash className="w-3.5 h-3.5 text-orange-400" />
                  {t("blog.single.toc_title")}
                </div>
                <nav className="space-y-1.5 text-xs">
                  {post.content.sections && post.content.sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      className="block w-full text-left py-1.5 px-2.5 rounded-lg text-zinc-400 hover:text-orange-300 hover:bg-purple-950/40 transition-colors truncate"
                    >
                      {sec.title}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Share & Actions Widget */}
              <div className="rounded-2xl bg-[#0b0914] border border-purple-900/40 p-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  {t("blog.single.routing_title")}
                </h4>
                <p className="text-xs text-zinc-500">
                  {t("blog.single.routing_desc")}
                </p>
                <div className="p-2.5 rounded-lg bg-black/60 border border-purple-950 text-[11px] font-mono text-orange-400 break-all select-all">
                  #/blog/{post.slug}
                </div>
                <button
                  onClick={onShare}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-purple-950/50 hover:bg-purple-900/60 border border-purple-700/50 text-xs font-semibold text-purple-200 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5 text-orange-400" />
                  {t("blog.single.copy_perm_url")}
                </button>
              </div>

              {/* Author Highlight */}
              <div className="rounded-2xl bg-gradient-to-br from-[#120b22] to-[#0a0812] border border-purple-900/30 p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center text-black font-extrabold text-xs">
                    LC
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">{t("blog.single.editorial_title")}</h5>
                    <p className="text-[10px] text-zinc-400">{t("blog.single.editorial_role")}</p>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {t("blog.single.editorial_desc")}
                </p>
              </div>

            </div>
          </div>

        </div>
      </article>
    </div>
  );
}