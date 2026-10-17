// CustomSoftwareBlog.js
export const getCustomSoftwareBlog = (t) => {
  // Safe array helpers to guarantee no .map errors
  const rawBenefits = t("blog_post.benefits_list", { returnObjects: true });
  const benefitsList = Array.isArray(rawBenefits) ? rawBenefits : [];

  const rawWhenCards = t("blog_post.when_cards", { returnObjects: true });
  const whenCardsList = Array.isArray(rawWhenCards) ? rawWhenCards : [];

  const rawSaasFeatures = t("blog_post.saas_features", { returnObjects: true });
  const saasFeaturesList = Array.isArray(rawSaasFeatures) ? rawSaasFeatures : [];

  const rawConsiderItems = t("blog_post.consider_items", { returnObjects: true });
  const considerItemsList = Array.isArray(rawConsiderItems) ? rawConsiderItems : [];

  return {
    id: "custom-software-saas-platforms",
    slug: "why-businesses-choose-custom-software-development-and-saas-platforms",
    title: `${t("blog_post.hero_title_p1")} ${t("blog_post.hero_title_highlight")} ${t("blog_post.hero_title_p2")}`,
    category: "Software Development",
    readTime: "8 min read",
    date: "October 16, 2026",
    author: {
      name: "LunarCode Insights",
      role: t("blog_post.badge"),
      avatar: "LC"
    },
    excerpt: t("blog_post.hero_p1"),
    tags: ["Custom Software", "SaaS Platforms", "Workflow", "Scalability", "Architecture"],
    featured: false,
    content: {
      lead: t("blog_post.hero_p1"),
      introParagraphs: [
        t("blog_post.hero_p2")
      ],
      sections: [
        // Section 1: What is Custom Software Development?
        {
          id: "what-is-custom-software",
          title: t("blog_post.sec1_title"),
          paragraphs: [
            t("blog_post.sec1_p1"),
            t("blog_post.sec1_p2"),
            t("blog_post.sec1_p3"),
            t("blog_post.sec1_p4")
          ],
          callout: t("blog_post.sec1_quote")
        },

        // Section 2: Why Businesses Invest in Custom Software (Benefits)
        {
          id: "why-invest-in-custom-software",
          title: t("blog_post.benefits_title"),
          paragraphs: [
            t("blog_post.benefits_intro1"),
            t("blog_post.benefits_intro2"),
            t("blog_post.benefits_intro3"),
            t("blog_post.benefits_slider_title")
          ],
          bulletPoints: benefitsList.map((item) => ({
            title: item,
            text: ""
          })),
          conclusionText: t("blog_post.benefits_footer")
        },

        // Section 3: When Is Custom Software a Good Choice?
        {
          id: "when-is-custom-software-good",
          title: t("blog_post.when_title"),
          paragraphs: [
            t("blog_post.when_intro1"),
            t("blog_post.when_intro2"),
            t("blog_post.when_intro3"),
            t("blog_post.when_subtitle")
          ],
          subsections: whenCardsList.map((card, idx) => ({
            id: `when-card-${idx}`,
            number: String(idx + 1),
            title: card.title || "",
            body: card.desc || ""
          })),
          conclusionText: t("blog_post.when_footer")
        },

        // Section 4: What Are SaaS Platforms?
        {
          id: "what-are-saas-platforms",
          title: t("blog_post.saas_title"),
          paragraphs: [
            t("blog_post.saas_p1"),
            t("blog_post.saas_p2"),
            t("blog_post.saas_p3"),
            t("blog_post.saas_p4"),
            t("blog_post.saas_p5")
          ]
        },

        // Section 5: Why Are SaaS Platforms Popular?
        {
          id: "why-saas-platforms-popular",
          title: t("blog_post.saas_pop_title"),
          paragraphs: [
            t("blog_post.saas_pop_p1"),
            t("blog_post.saas_pop_p2"),
            t("blog_post.saas_pop_p3")
          ],
          bulletPoints: saasFeaturesList.map((feat) => ({
            title: feat,
            text: ""
          })),
          conclusionText: t("blog_post.saas_pop_footer")
        },

        // Section 6: Custom Software and SaaS Can Work Together
        {
          id: "custom-software-saas-synergy",
          title: t("blog_post.synergy_title"),
          paragraphs: [
            t("blog_post.synergy_p1"),
            t("blog_post.synergy_p2"),
            t("blog_post.synergy_p3"),
            t("blog_post.synergy_p4")
          ],
          callout: t("blog_post.synergy_highlight")
        },

        // Section 7: Important Things to Consider Before Development
        {
          id: "considerations-before-development",
          title: t("blog_post.consider_title"),
          paragraphs: [
            t("blog_post.consider_intro")
          ],
          subsections: considerItemsList.map((item, idx) => ({
            id: `consider-item-${idx}`,
            number: String(idx + 1),
            title: item.title || "",
            body: item.desc || ""
          }))
        },

        // Section 8: Choosing the Right Development Approach
        {
          id: "choosing-development-approach",
          title: t("blog_post.approach_title"),
          paragraphs: [
            t("blog_post.approach_p1"),
            t("blog_post.approach_p2")
          ],
          callout: t("blog_post.approach_highlight")
        },

        // Section 9: Building Software for Long-Term Growth
        {
          id: "software-for-long-term-growth",
          title: t("blog_post.growth_title"),
          paragraphs: [
            t("blog_post.growth_p1"),
            t("blog_post.growth_p2"),
            t("blog_post.growth_p3"),
            t("blog_post.growth_p4")
          ]
        }
      ]
    }
  };
};