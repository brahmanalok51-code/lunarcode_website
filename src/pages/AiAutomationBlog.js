// AiAutomationBlog.js
export const getAiAutomationBlog = (t) => {
  return {
    id: "ai-automation-services-growth",
    slug: "how-ai-automation-services-help-businesses-improve-productivity-and-growth",
    title: t("ai_automation_blog.heroTitle"),
    category: "AI & Automation",
    readTime: "7 min read",
    date: "October 23, 2026",
    author: {
      name: "LunarCode Insights",
      role: t("ai_automation_blog.badge"),
      avatar: "LC"
    },
    excerpt: t("ai_automation_blog.intro.p1"),
    tags: ["Artificial Intelligence", "Workflow Automation", "Productivity", "System Integration", "Scalability"],
    featured: false,
    content: {
      lead: t("ai_automation_blog.intro.p1"),
      introParagraphs: [
        t("ai_automation_blog.intro.p2")
      ],
      sections: [
        // Section 1: What Are AI Automation Services?
        {
          id: "what-are-ai-automation-services",
          tag: t("ai_automation_blog.whatIs.tag"),
          title: t("ai_automation_blog.whatIs.title"),
          paragraphs: [
            t("ai_automation_blog.whatIs.p1"),
            t("ai_automation_blog.whatIs.p2")
          ],
          callout: t("ai_automation_blog.whatIs.strategy")
        },

        // Section 2: Why Choose an AI Software Development Company?
        {
          id: "why-choose-ai-software-company",
          tag: t("ai_automation_blog.whyCompany.tag"),
          title: t("ai_automation_blog.whyCompany.title"),
          paragraphs: [
            t("ai_automation_blog.whyCompany.p1"),
            t("ai_automation_blog.whyCompany.p2"),
            t("ai_automation_blog.whyCompany.p3")
          ]
        },

        // Section 3: Benefits of Working With an AI Automation Company
        {
          id: "benefits-of-ai-automation-company",
          tag: t("ai_automation_blog.benefits.tag"),
          title: t("ai_automation_blog.benefits.title"),
          paragraphs: [
            t("ai_automation_blog.benefits.subtitle")
          ],
          subsections: [
            {
              id: "benefit-1",
              number: "01",
              title: t("ai_automation_blog.benefits.b1.title"),
              body: t("ai_automation_blog.benefits.b1.desc")
            },
            {
              id: "benefit-2",
              number: "02",
              title: t("ai_automation_blog.benefits.b2.title"),
              body: t("ai_automation_blog.benefits.b2.desc")
            },
            {
              id: "benefit-3",
              number: "03",
              title: t("ai_automation_blog.benefits.b3.title"),
              body: t("ai_automation_blog.benefits.b3.desc")
            },
            {
              id: "benefit-4",
              number: "04",
              title: t("ai_automation_blog.benefits.b4.title"),
              body: t("ai_automation_blog.benefits.b4.desc")
            },
            {
              id: "benefit-5",
              number: "05",
              title: t("ai_automation_blog.benefits.b5.title"),
              body: t("ai_automation_blog.benefits.b5.desc")
            }
          ],
          conclusionText: t("ai_automation_blog.benefits.footer")
        },

        // Section 4: How to Choose the Right AI Automation Solutions
        {
          id: "choose-right-ai-automation-solutions",
          tag: t("ai_automation_blog.solutions.tag"),
          title: t("ai_automation_blog.solutions.title"),
          paragraphs: [
            t("ai_automation_blog.solutions.p1"),
            t("ai_automation_blog.solutions.p2")
          ],
          calloutCards: [
            {
              title: "Security & Privacy",
              text: t("ai_automation_blog.solutions.security")
            },
            {
              title: "Performance Tracking",
              text: t("ai_automation_blog.solutions.tracking")
            }
          ]
        },

        // Section 5: How LunarCode Supports Digital Transformation (Final CTA)
        {
          id: "lunarcode-digital-transformation",
          tag: t("ai_automation_blog.lunar.tag"),
          title: t("ai_automation_blog.lunar.title"),
          paragraphs: [
            t("ai_automation_blog.lunar.p1"),
            t("ai_automation_blog.lunar.p2"),
            t("ai_automation_blog.lunar.p3")
          ],
          ctaButton: t("ai_automation_blog.lunar.btnCta")
        }
      ]
    }
  };
};