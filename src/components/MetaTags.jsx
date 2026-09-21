import React from 'react';
import { Helmet } from 'react-helmet-async';

const metaConfig = {
  home: {
    title: "Custom Software Development Company | LunarCode",
    description: "Build intelligent software systems with LunarCode. We develop custom software, SaaS platforms, AI automation, and scalable cloud solutions for businesses.",
    keywords: "custom software development company, software development company, SaaS development company, AI automation services, AI software development, custom software solutions, cloud infrastructure services",
    canonical: "https://lunarcode.tech/",
    robots: "index, follow",
    ogTitle: "Custom Software Development Company | LunarCode",
    ogDesc: "Build intelligent software systems with LunarCode. We develop custom software, SaaS platforms, AI automation, and scalable cloud solutions for businesses.",
    ogUrl: "https://lunarcode.tech/",
    ogImage: "https://lunarcode.tech/og-image.jpg",
    ogAlt: "LunarCode custom software and AI automation solutions"
  },
  about: {
    title: "IT Solutions & Software Development Company | AI & SaaS Experts",
    description: "LunarCode Tech is a leading IT solutions and software development company offering AI automation, SaaS platforms, cloud infrastructure, and custom digital solutions to help businesses grow faster.",
    keywords: "IT Solutions Company, Software Development Company, AI & Automation Services, SaaS Development Company, Custom Software Development",
    canonical: "https://lunarcode.tech/about",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    ogTitle: "IT Solutions & Software Development Company | AI & SaaS Experts",
    ogDesc: "LunarCode Tech is a leading IT solutions and software development company offering AI automation, SaaS platforms, cloud infrastructure, and custom digital solutions to help businesses grow faster.",
    ogUrl: "https://lunarcode.tech/about",
    ogImage: "https://lunarcode.tech/og-image.jpg",
    ogAlt: "LunarCode About Us"
  },
  service: {
    title: "Software Development, AI Automation & SaaS Solutions",
    description: "Explore LunarCode Tech services including custom software development, AI automation, SaaS platforms, and cloud infrastructure solutions designed to scale modern businesses.",
    keywords: "software development services, custom software development, SaaS development company, AI automation services, cloud infrastructure services, web application development, enterprise software solutions",
    canonical: "https://lunarcode.tech/service",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    ogTitle: "Software Development, AI Automation & SaaS Solutions",
    ogDesc: "Explore LunarCode Tech services including custom software development, AI automation, SaaS platforms, and cloud infrastructure solutions designed to scale modern businesses.",
    ogUrl: "https://lunarcode.tech/service",
    ogImage: "https://lunarcode.tech/og-image.jpg",
    ogAlt: "LunarCode Services"
  },
  product: {
    title: "Software Products & SaaS Solutions | LunarCode",
    description: "LunarCode software products and custom SaaS solutions built for security, automation, scalability, and smarter business operations.",
    keywords: "SaaS Products, Software Solutions, Custom Software Solutions, Business Software Solutions, Enterprise Software Solutions, SaaS Solutions, Custom SaaS Development, Scalable Software Solutions, Digital Solutions, Business Automation Software, AI Automation Solutions, API Security Solutions, SAP Security Solutions, Enterprise Security Solutions, Custom Digital Products",
    canonical: "https://lunarcode.tech/product",
    robots: "index, follow, max-image-preview:large",
    ogTitle: "Software Products & SaaS Solutions | LunarCode",
    ogDesc: "LunarCode software products and custom SaaS solutions built for security, automation, scalability, and smarter business operations.",
    ogUrl: "https://lunarcode.tech/product",
    ogImage: "https://lunarcode.tech/og-image.jpg",
    ogAlt: "LunarCode Products"
  }
};

export default function MetaTags({ page = "home" }) {
  const meta = metaConfig[page] || metaConfig.home;

  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="author" content="LunarCode" />
      <meta name="robots" content={meta.robots} />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <link rel="canonical" href={meta.canonical} />

      {/* Open Graph / Social */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.ogTitle} />
      <meta property="og:description" content={meta.ogDesc} />
      <meta property="og:url" content={meta.ogUrl} />
      <meta property="og:site_name" content="LunarCode" />
      <meta property="og:image" content={meta.ogImage} />
      <meta property="og:image:alt" content={meta.ogAlt} />
    </Helmet>
  );
}