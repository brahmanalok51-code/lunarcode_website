import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const resources = {
  en: {
    translation: {

      contact_page: {
  badge: "Get in Touch",
  hero_title_start: "Partner with",
  hero_title_highlight: "LunarCode",
  hero_subtitle: "Ready to accelerate your digital transformation? From custom enterprise software to cloud-native ecosystems.",
  global_badge: "Global Presence",
  global_desc: "Our mission is to translate complex business requirements into elegant, scalable digital solutions.",
  hq_title: "HQ Address",
  hq_address: "804, OM TOWER, ALPHA COMMERCIAL BELT, SECTOR-ALPHA 1, 8th Floor, Greater Noida",
  corp_title: "Corporate Inquiries",
  support_title: "Official Support",
  form_heading: "Consult with our Experts",
  name_label: "Full Name",
  name_placeholder: "e.g. Alexander Vance",
  email_label: "Work Email",
  email_placeholder: "alex@enterprise.com",
  desc_label: "Project Description",
  desc_placeholder: "Tell us about your technical goals, timeline, and architectural requirements...",
  btn_submit: "Request Proposal",
  sending: "Transmitting Transmission...",
  success_msg: "Message transmitted successfully! Our technical team will reach out within 24 hours.",
  error_msg: "Failed to send message. Please try again or reach out directly at contact@lunarcode.tech."
},

        product_page: {
  badge: "Production-Grade Ecosystems",
  hero_title_start: "Products Built for",
  hero_title_highlight: "Real-World Impact",
  hero_subtitle: "At LunarCode, we don’t just build software — we create systems that solve real problems, scale with demand, and deliver measurable value.",
  btn_explore: "Explore Products",
  btn_demo: "Request Demo",
  status_badge: "System Deployment: Active",
  uptime_label: "Uptime 99.9%",
  scalability_label: "Scalability: Auto",
  hexawash: {
    tag: "Active Deployment",
    title: "HexaWash",
    subtitle: "Smart Laundry Management Platform",
    desc: "A cloud-connected laundry ecosystem designed for hostels, dormitories, and shared spaces. It enables seamless machine usage, digital payments, and real-time monitoring.",
    impact: "Transforms traditional laundry systems into automated, revenue-generating smart infrastructure.",
    f1: "IoT-enabled machine control (Smart Plug Integration)",
    f2: "Real-time machine availability & timers",
    f3: "Digital wallet & payments (UPI / Stripe-ready)",
    f4: "Admin dashboard for monitoring & control",
    f5: "Multi-tenant architecture (scaling across locations)"
  },
  sapsecurity: {
    tag: "Enterprise Governance",
    title: "SAP Security Suite",
    subtitle: "Access Governance & Audit Platform",
    desc: "Enterprise-grade solution designed to manage critical access, firefighter IDs, and role recertification with enhanced visibility and compliance.",
    impact: "Eliminates authorization risks and automates compliance audits for enterprise SAP landscapes.",
    f1: "Firefighter ID emergency monitoring & logging",
    f2: "Role recertification automated dashboards",
    f3: "High-throughput SAP OData API integration",
    f4: "Audit-ready logs & instant SOX reporting"
  },
  custom_solutions: {
    badge: "Bespoke Engineering",
    title: "Custom Solutions Tailored to Your DNA",
    subtitle: "If your business has a problem, we build the system to solve it. Tailored development engineered for specific operational logic.",
    c1_title: "Full Stack Web",
    c1_desc: "MERN / Next.js / Cloud Systems",
    c2_title: "IoT Integration",
    c2_desc: "Hardware & Sensor Bridge",
    c3_title: "AI Automation",
    c3_desc: "Autonomous Agents & LLMs",
    c4_title: "SaaS Products",
    c4_desc: "Multi-Tenant Scalable Core",
    c5_title: "API & Data Security",
    c5_desc: "Zero-Trust Encryption & Auditing"
  },
  approach: {
    badge: "Engineering Philosophy",
    title: "Our Engineering Approach",
    a1_title: "Scalable",
    a1_desc: "Architected to grow effortlessly alongside your enterprise demand.",
    a2_title: "Secure",
    a2_desc: "Hardened backend data isolation and cryptographic safety.",
    a3_title: "Practical",
    a3_desc: "Zero fluff — solving real operational friction points directly.",
    a4_title: "Efficient",
    a4_desc: "High throughput, ultra-low latency, and cost-optimized compute."
  },
  why_choose: {
    badge: "Why Choose LunarCode",
    title: "Engineered by Builders, Not Just Agencies",
    p1: "Real-world product experience (not just freelance gigs)",
    p2: "Strong backend + distributed system design focus",
    p3: "Fast execution & iterative agile development",
    p4: "Built by engineers who understand both deep tech & business"
  },
  cta_banner: {
    title: "Ready to Build Something Powerful?",
    subtitle: "LunarCode is ready to help you move fast, eliminate bottlenecks, and build right from day one.",
    btn_call: "Schedule a Call",
    btn_contact: "Contact Engineering Team"
  }
},

service_page: {
  badge: "Engineering Reliability",
  hero_title_start: "Comprehensive Technical",
  hero_title_highlight: "Expertise",
  hero_subtitle: "Lunarcode Tech provides the high-performance infrastructure and bespoke software systems required for modern digital transformation. We specialize in engineering reliability.",
  cta_audit: "Request Technical Audit",
  custom_software: {
    title: "Custom Software Development",
    p1: "We design and develop solutions tailored specifically to your operational DNA. Standard solutions often create bottlenecks; we create pathways for exponential growth.",
    p2: "Our engineering focus ensures that every line of code serves a business objective.",
    tag_label: "Development Lifecycle",
    tags: "Agile • CI/CD • Secure Ops"
  },
  ai_automation: {
    title: "AI & Automation",
    p1: "We design and develop solutions tailored specifically to your operational DNA. Standard solutions often create bottlenecks; we create pathways for exponential growth.",
    p2: "Our engineering focus ensures that every line of code serves a business objective.",
    tag_label: "Intelligence Engine",
    tags: "Neural Networks • ML Ops"
  },
  saas_dev: {
    title: "SaaS Development",
    p1: "We design and develop solutions tailored specifically to your operational DNA. Standard solutions often create bottlenecks; we create pathways for exponential growth.",
    p2: "Our engineering focus ensures that every line of code serves a business objective.",
    tag_label: "Platform Reliability",
    tags: "Multi-Tenant • 99.9% Uptime"
  },
  cloud_infra: {
    title: "Cloud Infrastructure",
    p1: "We design and develop solutions tailored specifically to your operational DNA. Standard solutions often create bottlenecks; we create pathways for exponential growth.",
    p2: "Our engineering focus ensures that every line of code serves a business objective.",
    tag_label: "Scale Engine",
    tags: "Kubernetes • Zero-Trust Cloud"
  }
}, 


about_page: {
  badge: "Pioneering Software Architecture",
  hero_title_start: "Empowering Businesses Through",
  hero_title_highlight: "LunarCode Innovation",
  hero_subtitle: "LunarCode Tech is a modern IT solutions company dedicated to delivering innovative digital products and advanced technology services.",
  
  overview_badge: "Company Overview",
  overview_title: "Reliable Solutions for a Rapidly Evolving Digital Landscape",
  overview_p1: "In today’s rapidly evolving digital landscape, organizations need technology partners who can understand their challenges and provide reliable solutions.",
  overview_p2: "From startups to established enterprises, we support companies by building secure, high-performance, and user-friendly applications tailored to their unique requirements.",

  story_badge: "Our Story",
  story_title: "Curiosity, Passion & Continuous Evolution",
  story_p1: "Founded with a vision to simplify technology, LunarCode Tech started as a small team of passionate developers. We’ve grown into a dedicated technology partner driven by curiosity and continuous learning.",
  story_p2: "We believe that technology should not only solve problems but also open new possibilities for innovation and growth.",

  mission_title: "Our Mission",
  mission_desc: "To empower businesses through innovative technology solutions that improve efficiency, enhance customer experiences, and support sustainable growth.",
  
  vision_title: "Our Vision",
  vision_desc: "To become a globally recognized IT solutions provider known for innovation, quality, and technological excellence, helping organizations unlock their full potential.",

  values_badge: "Our Core Values",
  values_heading: "The Principles Guiding Every Line of Code We Write",
  values: {
    val_1_title: "Innovation",
    val_1_desc: "We constantly explore new technologies and creative approaches to build modern solutions that keep businesses ahead.",
    val_2_title: "Quality",
    val_2_desc: "Every project follows high standards of design, performance, and reliability to ensure long-term success.",
    val_3_title: "Collaboration",
    val_3_desc: "We work closely with our clients, understanding their goals and challenges to create solutions that truly meet their needs.",
    val_4_title: "Integrity",
    val_4_desc: "Transparency, honesty, and trust are the foundations of every partnership we build with our clients.",
    val_5_title: "Continuous Learning",
    val_5_desc: "Technology evolves rapidly, and we continuously upgrade our skills to stay ahead in the industry."
  },

  expertise_badge: "Our Technical Domain",
  expertise_heading: "Specialized Engineering for Modern Scale",
  expertise_sub: "We specialize in developing cutting-edge technology solutions using modern frameworks and scalable architectures.",
  expertise_items: {
    e1: "Custom Software Development",
    e2: "Full Stack Web Development",
    e3: "AI and Machine Learning",
    e4: "SaaS Application Development",
    e5: "Cloud Infrastructure",
    e6: "API & System Integration"
  },

  approach_badge: "Execution Pipeline",
  approach_heading: "Our Development Approach",
  steps: {
    s1_title: "1. Understanding Requirements",
    s1_desc: "Analyzing business needs and defining the project scope clearly.",
    s2_title: "2. Strategic Planning",
    s2_desc: "Creating a detailed development roadmap to ensure efficient project execution.",
    s3_title: "3. Agile Development",
    s3_desc: "Using modern agile methodologies to develop software in iterative phases.",
    s4_title: "4. Testing & QA",
    s4_desc: "Rigorous testing to ensure reliability, security, and performance.",
    s5_title: "5. Deployment & Support",
    s5_desc: "Seamless deployment and ongoing support for long-term success."
  },

  why_badge: "Competitive Edge",
  why_heading: "Why Businesses Choose Us",
  why_points: {
    w1: "Innovative Solutions",
    w2: "Experienced Team",
    w3: "Scalable & Secure",
    w4: "Client-Focused",
    w5: "Transparent Communication",
    w6: "Reliable Support"
  },

  commitment_title: "Commitment to Innovation",
  commitment_desc: "Technology is constantly evolving. We stay ahead by adopting the latest tools, frameworks, and technologies like cloud computing and AI. Our goal is not just to deliver software but to build long-term partnerships."
},

      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        products: "Products",
        contact: "Contact Us",
        launch_project: "Launch Project"
      },
      hero: {
        badge: "Next-Gen Lunar Innovation",
        title_start: "Architecting the Future with",
        title_highlight: "LunarCode",
        subtitle: "We engineer scalable full-stack applications, intelligent AI workflows, SaaS platforms, and enterprise cloud solutions designed to launch your business into orbit.",
        cta_primary: "Launch Project",
        cta_secondary: "Explore Services",
        stat_uptime: "99.9% Uptime Architecture",
        stat_projects: "50+ Enterprise Deployments",
        stat_satisfaction: "100% Client Satisfaction"
      },
      collaboration: {
        badge: "Partnership & Ecosystem",
        heading: "Collaborating with Leading Tech Giants & Innovators"
      },
      services: {
        badge: "Our Core Services",
        title: "High-Performance Digital Solutions",
        subtitle: "From automated neural workflows to high-throughput cloud infrastructure, we build software that drives exponential growth.",
        custom_software: {
          title: "Custom Software Development",
          desc: "Tailor-made full-stack architectures engineered for scale, zero downtime, and seamless performance."
        },
        ai_automation: {
          title: "AI & Workflow Automation",
          desc: "Intelligent multi-agent systems, automated workflows, and custom LLM integrations for enterprises."
        },
        saas_dev: {
          title: "SaaS Platform Engineering",
          desc: "Scalable multi-tenant cloud platforms designed for rapid user onboarding, security, and global distribution."
        },
        cloud_infra: {
          title: "Cloud Infrastructure & DevOps",
          desc: "Reliable CI/CD pipelines, containerized orchestration, and cost-efficient cloud engineering."
        },
        security: {
          title: "API & Enterprise Security",
          desc: "End-to-end vulnerability scanning, hardened microservices, and airtight compliance protocols."
        },
        learn_more: "Learn More"
      },
      mission: {
        badge: "Our Mission",
        title: "Bridging Deep Tech and Infinite Business Potential",
        desc_1: "At LunarCode, we believe software shouldn't just run processes—it should actively propel organizations forward into new frontiers.",
        desc_2: "Our mission is to arm visionary enterprises with resilient codebases, predictive intelligence, and bulletproof infrastructure.",
        point_1: "Radical Code Reliability",
        point_2: "Hyper-Scalable Architectures",
        point_3: "Autonomous AI Acceleration"
      },
      trusted: {
        badge: "Proof of Excellence",
        title: "Trusted by Innovators Worldwide",
        subtitle: "Powering production systems with enterprise-grade reliability and top-tier engineering standards.",
        metric_1_val: "99.99%",
        metric_1_label: "System Reliability",
        metric_2_val: "10M+",
        metric_2_label: "API Transmissions Daily",
        metric_3_val: "4.9/5",
        metric_3_label: "Client Rating",
        metric_4_val: "15ms",
        metric_4_label: "Average Global Latency"
      },
      team: {
        badge: "Our Visionaries",
        title: "The Minds Behind LunarCode",
        subtitle: "The engineers, system architects, and creative strategists dedicated to delivering digital perfection.",
        role_founder: "Chief Technology Officer & Lead Architect",
        role_ai: "Head of AI Automation & Neural Systems",
        role_cloud: "Principal Cloud Infrastructure Architect"
      },
      footer: {
        tagline: "Building intelligent software systems, SaaS platforms, AI automation, and scalable cloud solutions.",
        quick_links: "Quick Navigation",
        services_heading: "Core Solutions",
        services_items: {
          custom_software: "Custom Software",
          ai_automation: "AI Automation",
          saas_dev: "SaaS Development",
          cloud_infra: "Cloud Infrastructure",
          api_security: "API & Enterprise Security"
        },
        newsletter_title: "Stay Ahead in Tech",
        newsletter_sub: "Subscribe for deep-dives into AI architecture and SaaS engineering.",
        placeholder_email: "Enter your email",
        btn_subscribe: "Subscribe",
        rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    }
  },
  hi: {
    translation: {

      contact_page: {
  badge: "संपर्क करें",
  hero_title_start: "साझेदारी करें",
  hero_title_highlight: "लूनरकोड के साथ",
  hero_subtitle: "क्या आप अपने डिजिटल ट्रांसफॉर्मेशन को गति देने के लिए तैयार हैं? कस्टम एंटरप्राइज सॉफ्टवेयर से लेकर क्लाउड-नेnative इकोसिस्टम्स तक।",
  global_badge: "वैश्विक उपस्थिति",
  global_desc: "हमारा मिशन जटिल व्यावसायिक आवश्यकताओं को सुरुचिपूर्ण, स्केलेबल डिजिटल समाधानों में बदलना है।",
  hq_title: "मुख्यालय का पता",
  hq_address: "804, ओम टॉवर, अल्फा कमर्शियल बेल्ट, सेक्टर-अल्फा 1, 8वीं मंजिल, ग्रेटर नोएडा",
  corp_title: "कॉर्पोरेट पूछताछ",
  support_title: "आधिकारिक सहायता",
  form_heading: "हमारे विशेषज्ञों से परामर्श करें",
  name_label: "पूरा नाम",
  name_placeholder: "उदा. आलोक कुमार",
  email_label: "कार्य ईमेल",
  email_placeholder: "alok@enterprise.com",
  desc_label: "प्रोजेक्ट का विवरण",
  desc_placeholder: "हमें अपने तकनीकी लक्ष्यों, समयसीमा और प्रोजेक्ट की आवश्यकताओं के बारे में बताएं...",
  btn_submit: "प्रस्ताव का अनुरोध करें",
  sending: "संदेश भेजा जा रहा है...",
  success_msg: "संदेश सफलतापूर्वक भेजा गया! हमारी टीम 24 घंटों के भीतर आपसे संपर्क करेगी।",
  error_msg: "संदेश भेजने में त्रुटि हुई। कृपया पुनः प्रयास करें या contact@lunarcode.tech पर संपर्क करें।"
},

        product_page: {
  badge: "प्रोडक्शन-ग्रेड इकोसिस्टम्स",
  hero_title_start: "वास्तविक प्रभाव के लिए",
  hero_title_highlight: "निर्मित उत्पाद",
  hero_subtitle: "लूनरकोड में, हम केवल सॉफ़्टवेयर नहीं बनाते - हम ऐसे सिस्टम तैयार करते हैं जो वास्तविक समस्याओं को हल करते हैं, मांग के साथ स्केल होते हैं और मापने योग्य मूल्य प्रदान करते हैं।",
  btn_explore: "उत्पाद देखें",
  btn_demo: "डेमो का अनुरोध करें",
  status_badge: "सिस्टम परिनियोजन: सक्रिय",
  uptime_label: "अपटाइम 99.9%",
  scalability_label: "स्केलेबिलिटी: ऑटो",
  hexawash: {
    tag: "सक्रिय परिनियोजन",
    title: "HexaWash",
    subtitle: "स्मार्ट लॉन्ड्री प्रबंधन प्लेटफॉर्म",
    desc: "हॉस्टल, डॉर्मिटरी और शेयर्ड जगहों के लिए क्लाउड-कनेक्टेड लॉन्ड्री इकोसिस्टम। यह सहज मशीन उपयोग, डिजिटल भुगतान और रीयल-टाइम मॉनिटरिंग सक्षम करता है।",
    impact: "पारंपरिक लॉन्ड्री सिस्टम को स्वचालित, राजस्व-उत्पादक स्मार्ट इंफ्रास्ट्रक्चर में बदलता है।",
    f1: "IoT-सक्षम मशीन नियंत्रण (स्मार्ट प्लग एकीकरण)",
    f2: "रीयल-टाइम मशीन उपलब्धता और टाइमर",
    f3: "डिजिटल वॉलेट और भुगतान (UPI / स्ट्राइप तैयार)",
    f4: "निगरानी और नियंत्रण के लिए व्यवस्थापक डैशबोर्ड",
    f5: "मल्टी-टेनेंट आर्किटेक्चर (विभिन्न स्थानों पर स्केलिंग)"
  },
  sapsecurity: {
    tag: "एंटरप्राइज गवर्नेंस",
    title: "SAP Security Suite",
    subtitle: "एक्सेस गवर्नेंस और ऑडिट प्लेटफॉर्म",
    desc: "महत्वपूर्ण एक्सेस, फायरफाइटर आईडी और रोल री-सर्टिफिकेशन को बेहतर दृश्यता और अनुपालन के साथ प्रबंधित करने के लिए एंटरप्राइज-ग्रेड समाधान।",
    impact: "प्राधिकरण जोखिमों को समाप्त करता है और कॉर्पोरेट SAP सिस्टम के ऑडिट को स्वचालित करता है।",
    f1: "फायरफाइटर आईडी आपातकालीन मॉनिटरिंग और लॉग्स",
    f2: "रोल री-सर्टिफिकेशन स्वचालित डैशबोर्ड",
    f3: "हाई-परफॉर्मेंस SAP OData API एकीकरण",
    f4: "ऑडिट-तैयार लॉग्स और त्वरित रिपोर्टिंग"
  },
  custom_solutions: {
    badge: "कस्टम इंजीनियरिंग",
    title: "आपकी ज़रूरतों के अनुसार कस्टम समाधान",
    subtitle: "यदि आपके व्यवसाय में कोई समस्या है, तो हम उसे हल करने के लिए सिस्टम बनाते हैं। विशिष्ट संचालन के लिए तैयार किया गया डेवलपमेंट।",
    c1_title: "फुल स्टैक वेब",
    c1_desc: "MERN / Next.js / क्लाउड सिस्टम",
    c2_title: "IoT एकीकरण",
    c2_desc: "हार्डवेयर और सेंसर ब्रिज",
    c3_title: "AI ऑटोमेशन",
    c3_desc: "ऑटोनॉमस एजेंट्स और LLM",
    c4_title: "SaaS उत्पाद",
    c4_desc: "मल्टी-टेनेंट स्केलेबल कोर",
    c5_title: "API और डेटा सुरक्षा",
    c5_desc: "ज़ीरो-ट्रस्ट एन्क्रिप्शन और ऑडिटिंग"
  },
  approach: {
    badge: "इंजीनियरिंग दर्शन",
    title: "हमारा डेवलपमेंट दृष्टिकोण",
    a1_title: "स्केलेबल",
    a1_desc: "व्यावसायिक मांग के साथ आसानी से विकसित होने के लिए डिज़ाइन किया गया।",
    a2_title: "सुरक्षित",
    a2_desc: "मजबूत बैकएंड डेटा सुरक्षा और एन्क्रिप्शन प्रोटोकॉल।",
    a3_title: "व्यावहारिक",
    a3_desc: "बिना किसी दिखावे के — सीधे वास्तविक समस्याओं को हल करना।",
    a4_title: "कुशल",
    a4_desc: "उच्च गति, कम लेटेंसी और अनुकूलित क्लाउड लागत।"
  },
  why_choose: {
    badge: "लूनरकोड को क्यों चुनें",
    title: "इंजीनियरों द्वारा निर्मित, सिर्फ फ्रीलांसिंग नहीं",
    p1: "वास्तविक दुनिया का उत्पाद अनुभव (सिर्फ सामान्य प्रोजेक्ट्स नहीं)",
    p2: "मजबूत बैकएंड + सिस्टम डिज़ाइन पर गहरा ध्यान",
    p3: "तेज़ निष्पादन और पुनरावृत्त (Agile) विकास",
    p4: "ऐसे इंजीनियरों द्वारा निर्मित जो तकनीक और व्यापार दोनों समझते हैं"
  },
  cta_banner: {
    title: "कुछ शक्तिशाली बनाने के लिए तैयार हैं?",
    subtitle: "लूनरकोड आपको तेज़ी से आगे बढ़ने और पहले दिन से सही तकनीक बनाने में मदद करने के लिए तैयार है।",
    btn_call: "कॉल शेड्यूल करें",
    btn_contact: "इंजीनियरिंग टीम से संपर्क करें"
  }
}, 
service_page: {
  badge: "विश्वसनीय इंजीनियरिंग",
  hero_title_start: "व्यापक तकनीकी",
  hero_title_highlight: "विशेषज्ञता",
  hero_subtitle: "लूनरकोड टेक आधुनिक डिजिटल ट्रांसफॉर्मेशन के लिए आवश्यक हाई-परफॉर्मेंस इंफ्रास्ट्रक्चर और कस्टम सॉफ्टवेयर सिस्टम प्रदान करता है। हम विश्वसनीयता विकसित करने में माहिर हैं।",
  cta_audit: "तकनीकी ऑडिट का अनुरोध करें",
  custom_software: {
    title: "कस्टम सॉफ्टवेयर डेवलपमेंट",
    p1: "हम आपके ऑपरेशनल डीएनए के अनुकूल विशेष समाधान डिज़ाइन और विकसित करते हैं। मानक समाधान अक्सर रुकावटें पैदा करते हैं; हम तीव्र विकास के मार्ग बनाते हैं।",
    p2: "हमारा इंजीनियरिंग फोकस यह सुनिश्चित करता है कि कोड की प्रत्येक पंक्ति एक व्यावसायिक उद्देश्य की पूर्ति करे।",
    tag_label: "डेवलपमेंट लाइफसाइकिल",
    tags: "एजाइल • CI/CD • सिक्योर ऑप्स"
  },
  ai_automation: {
    title: "AI और ऑटोमेशन",
    p1: "हम आपके ऑपरेशनल डीएनए के अनुकूल विशेष समाधान डिज़ाइन और विकसित करते हैं। मानक समाधान अक्सर रुकावटें पैदा करते हैं; हम तीव्र विकास के मार्ग बनाते हैं।",
    p2: "हमारा इंजीनियरिंग फोकस यह सुनिश्चित करता है कि कोड की प्रत्येक पंक्ति एक व्यावसायिक उद्देश्य की पूर्ति करे।",
    tag_label: "इंटेलिजेंस इंजन",
    tags: "न्यूरल नेटवर्क्स • ML ऑप्स"
  },
  saas_dev: {
    title: "SaaS डेवलपमेंट",
    p1: "हम आपके ऑपरेशनल डीएनए के अनुकूल विशेष समाधान डिज़ाइन और विकसित करते हैं। मानक समाधान अक्सर रुकावटें पैदा करते हैं; हम तीव्र विकास के मार्ग बनाते हैं।",
    p2: "हमारा इंजीनियरिंग फोकस यह सुनिश्चित करता है कि कोड की प्रत्येक पंक्ति एक व्यावसायिक उद्देश्य की पूर्ति करे।",
    tag_label: "प्लेटफ़ॉर्म विश्वसनीयता",
    tags: "मल्टी-टेनेंट • 99.9% अपटाइम"
  },
  cloud_infra: {
    title: "क्लाउड इंफ्रास्ट्रक्चर",
    p1: "हम आपके ऑपरेशनल डीएनए के अनुकूल विशेष समाधान डिज़ाइन और विकसित करते हैं। मानक समाधान अक्सर रुकावटें पैदा करते हैं; हम तीव्र विकास के मार्ग बनाते हैं।",
    p2: "हमारा इंजीनियरिंग फोकस यह सुनिश्चित करता है कि कोड की प्रत्येक पंक्ति एक व्यावसायिक उद्देश्य की पूर्ति करे।",
    tag_label: "स्केल इंजन",
    tags: "कुबेरनेट्स • ज़ीरो-ट्रस्ट क्लाउड"
  }
},


about_page: {
  badge: "अग्रणी सॉफ्टवेयर आर्किटेक्चर",
  hero_title_start: "व्यवसायों को सशक्त बनाएं",
  hero_title_highlight: "लूनरकोड इनोवेशन के साथ",
  hero_subtitle: "लूनरकोड टेक एक आधुनिक आईटी समाधान कंपनी है जो इनोवेटिव डिजिटल प्रोडक्ट्स और एडवांस टेक्नोलॉजी सेवाएं प्रदान करने के लिए समर्पित है।",
  
  overview_badge: "कंपनी ओवरव्यू",
  overview_title: "तीव्र गति से विकसित होते डिजिटल युग के लिए विश्वसनीय समाधान",
  overview_p1: "आज के तेजी से बदलते डिजिटल युग में संगठनों को ऐसे तकनीकी भागीदारों की आवश्यकता है जो उनकी चुनौतियों को समझें और भरोसेमंद समाधान दें।",
  overview_p2: "स्टार्टअप्स से लेकर बड़े उद्यमों तक, हम उनकी अनूठी आवश्यकताओं के अनुसार सुरक्षित, उच्च-प्रदर्शन और सहज ऐप्लिकेशन्स बनाकर उनका समर्थन करते हैं।",

  story_badge: "हमारी कहानी",
  story_title: "जिज्ञासा, जुनून और निरंतर विकास",
  story_p1: "तकनीक को सरल बनाने के विजन के साथ स्थापित, लूनरकोड टेक उत्साही डेवलपर्स की एक छोटी टीम के रूप में शुरू हुआ था। आज हम जिज्ञासा और सीखने की ललक से प्रेरित एक समर्पित तकनीकी भागीदार बन चुके हैं।",
  story_p2: "हमारा मानना है कि तकनीक को सिर्फ समस्याओं का समाधान ही नहीं करना चाहिए, बल्कि नवाचार और विकास की नई संभावनाएं भी खोलनी चाहिए।",

  mission_title: "हमारा मिशन",
  mission_desc: "इनोवेटिव टेक्नोलॉजी समाधानों के माध्यम से व्यवसायों को सशक्त बनाना जो कार्यकुशलता में सुधार करें, ग्राहक अनुभव को बढ़ाएं और सतत विकास का समर्थन करें।",
  
  vision_title: "हमारा विजन",
  vision_desc: "नवाचार, गुणवत्ता और तकनीकी उत्कृष्टता के लिए विश्व स्तर पर पहचाना जाने वाला आईटी समाधान प्रदाता बनना और संगठनों को उनकी पूरी क्षमता तक पहुँचने में मदद करना।",

  values_badge: "हमारे मूल मूल्य",
  values_heading: "वे सिद्धांत जो हमारे द्वारा लिखे गए कोड की हर लाइन का मार्गदर्शन करते हैं",
  values: {
    val_1_title: "नवाचार (Innovation)",
    val_1_desc: "हम आधुनिक समाधान तैयार करने के लिए लगातार नई तकनीकों और रचनात्मक दृष्टिकोणों का पता लगाते हैं जो व्यवसायों को आगे रखते हैं।",
    val_2_title: "गुणवत्ता (Quality)",
    val_2_desc: "दीर्घकालिक सफलता सुनिश्चित करने के लिए प्रत्येक प्रोजेक्ट डिज़ाइन, प्रदर्शन और विश्वसनीयता के उच्च मानकों का पालन करता है।",
    val_3_title: "सहयोग (Collaboration)",
    val_3_desc: "हम ग्राहकों के लक्ष्यों और चुनौतियों को समझने और उनकी आवश्यकताओं को पूरा करने वाले समाधान बनाने के लिए उनके साथ मिलकर काम करते हैं।",
    val_4_title: "सत्यनिष्ठा (Integrity)",
    val_4_desc: "पारदर्शिता, ईमानदारी और भरोसा हमारे द्वारा ग्राहकों के साथ बनाए गए प्रत्येक साझेदारी की नींव हैं।",
    val_5_title: "निरंतर सीखना (Continuous Learning)",
    val_5_desc: "प्रौद्योगिकी तेजी से विकसित हो रही है, और हम उद्योग में आगे रहने के लिए अपने कौशल को लगातार अपग्रेड करते रहते हैं।"
  },

  expertise_badge: "हमारा तकनीकी डोमेन",
  expertise_heading: "आधुनिक आवश्यकताओं के लिए विशेष इंजीनियरिंग",
  expertise_sub: "हम आधुनिक फ्रेमवर्क और स्केलेबल आर्किटेक्चर का उपयोग करके अत्याधुनिक तकनीक समाधान विकसित करने में विशेषज्ञ हैं।",
  expertise_items: {
    e1: "कस्टम सॉफ्टवेयर डेवलपमेंट",
    e2: "फुल स्टैक वेब डेवलपमेंट",
    e3: "AI और मशीन लर्निंग",
    e4: "SaaS ऐप्लिकेशन डेवलपमेंट",
    e5: "क्लाउड इंफ्रास्ट्रक्चर",
    e6: "API और सिस्टम इंटीग्रेशन"
  },

  approach_badge: "एक्ज़ीक्यूशन पाइपलाइन",
  approach_heading: "हमारा डेवलपमेंट दृष्टिकोण",
  steps: {
    s1_title: "1. आवश्यकताओं को समझना",
    s1_desc: "व्यावसायिक आवश्यकताओं का विश्लेषण करना और प्रोजेक्ट के दायरे को स्पष्ट रूप से परिभाषित करना।",
    s2_title: "2. रणनीतिक योजना",
    s2_desc: "कुशल परियोजना निष्पादन सुनिश्चित करने के लिए एक विस्तृत डेवलपमेंट रोडमैप तैयार करना।",
    s3_title: "3. एजाइल डेवलपमेंट",
    s3_desc: "सॉफ़्टवेयर को पुनरावृत्त (iterative) चरणों में विकसित करने के लिए आधुनिक एजाइल कार्यप्रणाली का उपयोग करना।",
    s4_title: "4. टेस्टिंग और QA",
    s4_desc: "विश्वसनीयता, सुरक्षा और प्रदर्शन सुनिश्चित करने के लिए कठोर परीक्षण।",
    s5_title: "5. डिप्लॉयमेंट और सपोर्ट",
    s5_desc: "निर्बाध डिप्लॉयमेंट और दीर्घकालिक सफलता के लिए निरंतर सहायता व सपोर्ट।"
  },

  why_badge: "हमारा लाभ",
  why_heading: "व्यवसाय हमें क्यों चुनते हैं",
  why_points: {
    w1: "नवाचारी समाधान",
    w2: "अनुभवी टीम",
    w3: "स्केलेबल और सुरक्षित",
    w4: "ग्राहक-केंद्रित",
    w5: "पारदर्शी संचार",
    w6: "विश्वसनीय सपोर्ट"
  },

  commitment_title: "नवाचार के प्रति हमारी प्रतिबद्धता",
  commitment_desc: "तकनीक निरंतर बदल रही है। हम क्लाउड कंप्यूटिंग और AI जैसे नवीनतम उपकरणों और फ्रेमवर्क को अपनाकर आगे रहते हैं। हमारा लक्ष्य केवल सॉफ्टवेयर वितरित करना नहीं बल्कि दीर्घकालिक साझेदारी बनाना है।"
},

      nav: {
        home: "होम",
        about: "हमारे बारे में",
        services: "सेवाएं",
        products: "उत्पाद",
        contact: "संपर्क करें",
        launch_project: "प्रोजेक्ट शुरू करें"
      },
      hero: {
        badge: "नेक्स्ट-जेन लूनर इनोवेशन",
        title_start: "भविष्य का निर्माण करें",
        title_highlight: "लूनरकोड के साथ",
        subtitle: "हम अत्याधुनिक स्केलेबल वेब ऐप्लिकेशन्स, AI सिस्टम्स, SaaS प्लेटफॉर्म और क्लाउड सॉल्यूशन्स तैयार करते हैं जो आपके बिज़नेस को नई ऊंचाइयों तक पहुंचाते हैं।",
        cta_primary: "प्रोजेक्ट शुरू करें",
        cta_secondary: "सेवाएं देखें",
        stat_uptime: "99.9% अपटाइम आर्किटेक्चर",
        stat_projects: "50+ एंटरप्राइज डिप्लॉयमेंट्स",
        stat_satisfaction: "100% क्लाइंट संतुष्टि"
      },
      collaboration: {
        badge: "पार्टनरशिप और इकोसिस्टम",
        heading: "अग्रणी टेक दिग्गजों और इनोवेटर्स के साथ सहयोग"
      },
      services: {
        badge: "हमारी प्रमुख सेवाएं",
        title: "उच्च-प्रदर्शन डिजिटल समाधान",
        subtitle: "स्वचालित न्यूरल वर्कफ़्लो से लेकर हाई-स्पीड क्लाउड इंफ्रास्ट्रक्चर तक, हम ऐसा सॉफ़्टवेयर बनाते हैं जो तीव्र विकास को गति देता है।",
        custom_software: {
          title: "कस्टम सॉफ्टवेयर डेवलपमेंट",
          desc: "उच्च स्केलेबिलिटी, शून्य डाउनटाइम और सहज प्रदर्शन के लिए तैयार की गई फुल-स्टैक आर्किटेक्चर।"
        },
        ai_automation: {
          title: "AI और ऑटोमेशन सेवाएं",
          desc: "उद्यमों के लिए बुद्धिमान मल्टी-एजेंट सिस्टम, स्वचालित वर्कफ़्लो और कस्टम LLM एकीकरण।"
        },
        saas_dev: {
          title: "SaaS प्लेटफॉर्म इंजीनियरिंग",
          desc: "तेज़ यूज़र ऑनबोर्डिंग, सुरक्षा और वैश्विक पहुंच के लिए डिज़ाइन किए गए मल्टी-टेनेंट क्लाउड प्लेटफ़ॉर्म।"
        },
        cloud_infra: {
          title: "क्लाउड इंफ्रास्ट्रक्चर और DevOps",
          desc: "विश्वसनीय CI/CD पाइपलाइन, कंटेनराइज़्ड ऑर्केस्ट्रेशन और लागत प्रभावी क्लाउड इंजीनियरिंग।"
        },
        security: {
          title: "API और एंटरप्राइज सुरक्षा",
          desc: "एंड-टू-एंड सुरक्षा परीक्षण, मजबूत माइक्रोसर्विसेज और कड़े अनुपालन मानक।"
        },
        learn_more: "और जानें"
      },
      mission: {
        badge: "हमारा मिशन",
        title: "डीप टेक और असीमित व्यावसायिक क्षमता का संयोजन",
        desc_1: "लूनरकोड में, हमारा मानना ​​है कि सॉफ़्टवेयर को केवल प्रक्रियाएं नहीं चलानी चाहिए—इसे संगठनों को नई सीमाओं की ओर ले जाना चाहिए।",
        desc_2: "हमारा उद्देश्य दूरदर्शी व्यवसायों को सशक्त कोडबेस, प्रेडिक्टिव इंटेलिजेंस और सुरक्षित इंफ्रास्ट्रक्चर प्रदान करना है।",
        point_1: "अत्यधिक विश्वसनीय कोड",
        point_2: "हाइपर-स्केलेबल आर्किटेक्चर",
        point_3: "स्वायत्त AI गतिशीलता"
      },
      trusted: {
        badge: "उत्कृष्टता का प्रमाण",
        title: "दुनिया भर के इनोवेटर्स का भरोसा",
        subtitle: "एंटरप्राइज-ग्रेड विश्वसनीयता और शीर्ष इंजीनियरिंग मानकों के साथ प्रोडक्शन सिस्टम को सशक्त बनाना।",
        metric_1_val: "99.99%",
        metric_1_label: "सिस्टम विश्वसनीयता",
        metric_2_val: "10M+",
        metric_2_label: "दैनिक API ट्रांसमिशन",
        metric_3_val: "4.9/5",
        metric_3_label: "क्लाइंट रेटिंग",
        metric_4_val: "15ms",
        metric_4_label: "औसत वैश्विक लेटेंसी"
      },
      team: {
        badge: "हमारे विज़नरी",
        title: "द माइंड्स बिहाइंड लूनरकोड",
        subtitle: "इंजीनियर्स, सिस्टम आर्किटेक्ट्स और स्ट्रैटजिस्ट्स जो डिजिटल परफेक्शन देने के लिए समर्पित हैं।",
        role_founder: "चीफ टेक्नोलॉजी ऑफिसर और लीड आर्किटेक्ट",
        role_ai: "हेड ऑफ AI ऑटोमेशन और न्यूरल सिस्टम्स",
        role_cloud: "प्रिंसिपल क्लाउड इंफ्रास्ट्रक्चर आर्किटेक्ट"
      },
      footer: {
        tagline: "बुद्धिमान सॉफ्टवेयर सिस्टम, SaaS प्लेटफॉर्म, AI ऑटोमेशन और स्केलेबल क्लाउड समाधानों का निर्माण।",
        quick_links: "त्वरित नेविगेशन",
        services_heading: "प्रमुख समाधान",
        services_items: {
          custom_software: "कस्टम सॉफ्टवेयर",
          ai_automation: "AI ऑटोमेशन",
          saas_dev: "SaaS डेवलपमेंट",
          cloud_infra: "क्लाउड इन्फ्रास्ट्रक्चर",
          api_security: "API और एंटरप्राइज सुरक्षा"
        },
        newsletter_title: "तकनीक में आगे रहें",
        newsletter_sub: "AI आर्किटेक्चर और SaaS इंजीनियरिंग अपडेट के लिए सब्सक्राइब करें।",
        placeholder_email: "अपना ईमेल दर्ज करें",
        btn_subscribe: "सब्सक्राइब करें",
        rights: "सर्वाधिकार सुरक्षित।",
        privacy: "गोपनीयता नीति",
        terms: "सेवा की शर्तें"
      }
    }
  },
  de: {
    translation: {

      contact_page: {
  badge: "Kontakt aufnehmen",
  hero_title_start: "Partnerschaft mit",
  hero_title_highlight: "LunarCode",
  hero_subtitle: "Bereit für Ihre digitale Transformation? Von maßgeschneiderter Unternehmenssoftware bis hin zu Cloud-nativen Ökosystemen.",
  global_badge: "Globale Präsenz",
  global_desc: "Unsere Mission ist es, komplexe Geschäftsanforderungen in elegante, skalierbare digitale Lösungen umzusetzen.",
  hq_title: "Hauptsitz",
  hq_address: "804, OM TOWER, ALPHA COMMERCIAL BELT, SECTOR-ALPHA 1, 8. Stock, Greater Noida",
  corp_title: "Geschäftsanfragen",
  support_title: "Offizieller Support",
  form_heading: "Beratung durch unsere Experten",
  name_label: "Vollständiger Name",
  name_placeholder: "z.B. Alexander Vance",
  email_label: "Geschäftliche E-Mail",
  email_placeholder: "alex@enterprise.com",
  desc_label: "Projektbeschreibung",
  desc_placeholder: "Beschreiben Sie Ihre technischen Ziele, Zeitpläne und Systemanforderungen...",
  btn_submit: "Angebot anfordern",
  sending: "Nachricht wird übertragen...",
  success_msg: "Nachricht erfolgreich übermittelt! Unser Engineering-Team meldet sich innerhalb von 24 Stunden.",
  error_msg: "Übertragungsfehler. Bitte versuchen Sie es erneut oder kontaktieren Sie uns unter contact@lunarcode.tech."
},

        product_page: {
  badge: "Produktionsreife Ökosysteme",
  hero_title_start: "Produkte entwickelt für",
  hero_title_highlight: "echte Wirkung",
  hero_subtitle: "Bei LunarCode entwickeln wir nicht nur Software – wir schaffen Systeme, die reale Probleme lösen, mit der Nachfrage skalieren und messbaren Mehrwert liefern.",
  btn_explore: "Produkte entdecken",
  btn_demo: "Demo anfordern",
  status_badge: "System-Bereitstellung: Aktiv",
  uptime_label: "Uptime 99.9%",
  scalability_label: "Skalierbarkeit: Auto",
  hexawash: {
    tag: "Aktiver Einsatz",
    title: "HexaWash",
    subtitle: "Smarte Wäsche-Management-Plattform",
    desc: "Ein Cloud-vernetztes Wäsche-Ökosystem für Studentenwohnheime und Gemeinschaftsräume mit digitaler Bezahlung und Echtzeit-Überwachung.",
    impact: "Verwandelt traditionelle Waschräume in automatisierte, umsatzgenerierende Smart-Infrastrukturen.",
    f1: "IoT-gestützte Maschinensteuerung (Smart-Plug-Integration)",
    f2: "Echtzeit-Maschinenverfügbarkeit und Timer",
    f3: "Digitale Geldbörse & Zahlungen (UPI / Stripe)",
    f4: "Admin-Dashboard für Monitoring und Kontrolle",
    f5: "Multi-Tenant-Architektur für standortübergreifende Skalierung"
  },
  sapsecurity: {
    tag: "Unternehmens-Governance",
    title: "SAP Security Suite",
    subtitle: "Access Governance & Audit-Plattform",
    desc: "Lösung auf Unternehmensebene zur Verwaltung kritischer Zugriffe, Firefighter-IDs und Rollen-Rezertifizierungen mit maximaler Transparenz.",
    impact: "Beseitigt Autorisierungsrisiken und automatisiert Compliance-Prüfungen in SAP-Landschaften.",
    f1: "Firefighter-ID Notfallüberwachung und Protokollierung",
    f2: "Dashboards für automatisierte Rollen-Rezertifizierung",
    f3: "Hochperformante SAP OData API-Integration",
    f4: "Audit-fähige Protokolle & sofortige SOX-Berichte"
  },
  custom_solutions: {
    badge: "Maßgeschneiderte Entwicklung",
    title: "Individuelle Lösungen für Ihre operative DNA",
    subtitle: "Wenn Ihr Unternehmen vor einer Herausforderung steht, entwickeln wir das System zu deren Lösung.",
    c1_title: "Full Stack Web",
    c1_desc: "MERN / Next.js / Cloud-Systeme",
    c2_title: "IoT-Integration",
    c2_desc: "Hardware & Sensor-Schnittstellen",
    c3_title: "KI-Automatisierung",
    c3_desc: "Autonome Agenten & LLMs",
    c4_title: "SaaS-Produkte",
    c4_desc: "Multi-Tenant skalierbarer Core",
    c5_title: "API- & Datensicherheit",
    c5_desc: "Zero-Trust-Verschlüsselung & Audits"
  },
  approach: {
    badge: "Engineering-Philosophie",
    title: "Unser methodischer Ansatz",
    a1_title: "Skalierbar",
    a1_desc: "Entwickelt, um mühelos mit Ihren Unternehmensanforderungen zu wachsen.",
    a2_title: "Sicher",
    a2_desc: "Gehärtete Backend-Datenisolation und kryptografischer Schutz.",
    a3_title: "Praxisorientiert",
    a3_desc: "Keine unnötigen Spielereien – direkte Lösung betrieblicher Probleme.",
    a4_title: "Effizient",
    a4_desc: "Hoher Durchsatz, minimale Latenz und kostenoptimierte Cloud-Architektur."
  },
  why_choose: {
    badge: "Warum LunarCode",
    title: "Entwickelt von Ingenieuren mit Systemverständnis",
    p1: "Erfahrung mit echten Produktionsprodukten (kein reines Freelancing)",
    p2: "Fokus auf robuste Backends und verteiltes Systemdesign",
    p3: "Schnelle Umsetzung & agile Entwicklungsschritte",
    p4: "Erbaut von Entwicklern, die Deep Tech & Business verstehen"
  },
  cta_banner: {
    title: "Bereit für leistungsstarke Systeme?",
    subtitle: "LunarCode hilft Ihnen, schnell voranzukommen und vom ersten Tag an skalierbar zu bauen.",
    btn_call: "Gespräch vereinbaren",
    btn_contact: "Engineering-Team kontaktieren"
  }
},  


service_page: {
  badge: "Zuverlässiges Engineering",
  hero_title_start: "Umfassende technische",
  hero_title_highlight: "Expertise",
  hero_subtitle: "Lunarcode Tech liefert die hochperformante Infrastruktur und maßgeschneiderten Softwaresysteme für Ihre digitale Transformation. Wir sind spezialisiert auf Zuverlässigkeit.",
  cta_audit: "Technisches Audit anfragen",
  custom_software: {
    title: "Individuelle Softwareentwicklung",
    p1: "Wir entwerfen und entwickeln Lösungen, die exakt auf Ihre operative DNA abgestimmt sind. Standardlösungen schaffen Engpässe; wir schaffen Wege für exponentielles Wachstum.",
    p2: "Unser technischer Fokus stellt sicher, dass jede Zeile Code ein klares Geschäftsziel erfüllt.",
    tag_label: "Entwicklungszyklus",
    tags: "Agile • CI/CD • Secure Ops"
  },
  ai_automation: {
    title: "KI & Automatisierung",
    p1: "Wir entwerfen und entwickeln Lösungen, die exakt auf Ihre operative DNA abgestimmt sind. Standardlösungen schaffen Engpässe; wir schaffen Wege für exponentielles Wachstum.",
    p2: "Unser technischer Fokus stellt sicher, dass jede Zeile Code ein klares Geschäftsziel erfüllt.",
    tag_label: "Intelligence Engine",
    tags: "Neuronale Netze • ML Ops"
  },
  saas_dev: {
    title: "SaaS-Entwicklung",
    p1: "Wir entwerfen und entwickeln Lösungen, die exakt auf Ihre operative DNA abgestimmt sind. Standardlösungen schaffen Engpässe; wir schaffen Wege für exponentielles Wachstum.",
    p2: "Unser technischer Fokus stellt sicher, dass jede Zeile Code ein klares Geschäftsziel erfüllt.",
    tag_label: "Plattform-Zuverlässigkeit",
    tags: "Multi-Tenant • 99.9% Uptime"
  },
  cloud_infra: {
    title: "Cloud-Infrastruktur",
    p1: "Wir entwerfen und entwickeln Lösungen, die exakt auf Ihre operative DNA abgestimmt sind. Standardlösungen schaffen Engpässe; wir schaffen Wege für exponentielles Wachstum.",
    p2: "Unser technischer Fokus stellt sicher, dass jede Zeile Code ein klares Geschäftsziel erfüllt.",
    tag_label: "Scale Engine",
    tags: "Kubernetes • Zero-Trust Cloud"
  }
},


about_page: {
  badge: "Pionierarbeit in der Softwarearchitektur",
  hero_title_start: "Unternehmen stärken durch",
  hero_title_highlight: "LunarCode Innovation",
  hero_subtitle: "LunarCode Tech ist ein modernes IT-Lösungsunternehmen, das sich der Bereitstellung innovativer digitaler Produkte und fortschrittlicher Technologiedienstleistungen widmet.",
  
  overview_badge: "Unternehmensüberblick",
  overview_title: "Zuverlässige Lösungen für eine dynamische digitale Landschaft",
  overview_p1: "In der sich rasant entwickelnden digitalen Landschaft von heute benötigen Unternehmen Technologiepartner, die ihre Herausforderungen verstehen und verlässliche Lösungen bieten.",
  overview_p2: "Von Start-ups bis hin zu etablierten Unternehmen unterstützen wir Firmen durch sichere, hochperformante und benutzerfreundliche Anwendungen, die exakt auf ihre Bedürfnisse zugeschnitten sind.",

  story_badge: "Unsere Geschichte",
  story_title: "Neugier, Leidenschaft & kontinuierliche Weiterentwicklung",
  story_p1: "Mit der Vision gegründet, Technologie zu vereinfachen, begann LunarCode Tech als kleines Team passionierter Entwickler. Wir haben uns zu einem engagierten Technologiepartner entwickelt, angetrieben von Neugier und lebenslangem Lernen.",
  story_p2: "Wir glauben, dass Technologie nicht nur Probleme lösen, sondern auch neue Möglichkeiten für Innovation und Wachstum eröffnen sollte.",

  mission_title: "Unsere Mission",
  mission_desc: "Unternehmen durch innovative Technologielösungen zu stärken, die Effizienz steigern, Kundenerlebnisse verbessern und nachhaltiges Wachstum fördern.",
  
  vision_title: "Unsere Vision",
  vision_desc: "Ein weltweit anerkannter IT-Lösungsanbieter zu werden, der für Innovation, Qualität und technologische Exzellenz bekannt ist und Organisationen hilft, ihr volles Potenzial auszuschöpfen.",

  values_badge: "Unsere Grundwerte",
  values_heading: "Die Prinzipien, die jede Zeile Code leiten",
  values: {
    val_1_title: "Innovation",
    val_1_desc: "Wir erforschen kontinuierlich neue Technologien und kreative Ansätze, um moderne Lösungen zu entwickeln, die Unternehmen den Vorsprung sichern.",
    val_2_title: "Qualität",
    val_2_desc: "Jedes Projekt folgt strengen Standards in Bezug auf Design, Leistung und Zuverlässigkeit, um langfristigen Erfolg zu garantieren.",
    val_3_title: "Zusammenarbeit",
    val_3_desc: "Wir arbeiten eng mit unseren Kunden zusammen, um deren Ziele und Herausforderungen zu verstehen und maßgeschneiderte Lösungen zu schaffen.",
    val_4_title: "Integrität",
    val_4_desc: "Transparenz, Ehrlichkeit und Vertrauen sind die Grundpfeiler jeder Partnerschaft, die wir mit unseren Kunden aufbauen.",
    val_5_title: "Kontinuierliches Lernen",
    val_5_desc: "Technologie entwickelt sich rasant weiter – wir aktualisieren unser Wissen kontinuierlich, um an der Spitze der Branche zu bleiben."
  },

  expertise_badge: "Unsere Expertise",
  expertise_heading: "Spezialisierte Entwicklung für moderne Skalierbarkeit",
  expertise_sub: "Wir sind spezialisiert auf die Entwicklung modernster Technologielösungen unter Verwendung fortschrittlicher Frameworks und skalierbarer Architekturen.",
  expertise_items: {
    e1: "Individuelle Softwareentwicklung",
    e2: "Full-Stack-Webentwicklung",
    e3: "KI und maschinelles Lernen",
    e4: "SaaS-Anwendungsentwicklung",
    e5: "Cloud-Infrastruktur",
    e6: "API- & Systemintegration"
  },

  approach_badge: "Entwicklungsprozess",
  approach_heading: "Unser methodischer Entwicklungsansatz",
  steps: {
    s1_title: "1. Anforderungsanalyse",
    s1_desc: "Präzise Analyse der Geschäftsanforderungen und Definition des Projektumfangs.",
    s2_title: "2. Strategische Planung",
    s2_desc: "Erstellung einer detaillierten Entwicklungs-Roadmap für eine effiziente Projektdurchführung.",
    s3_title: "3. Agile Entwicklung",
    s3_desc: "Einsatz moderner agiler Methoden zur Entwicklung der Software in iterativen Zyklen.",
    s4_title: "4. Qualitätssicherung & Tests",
    s4_desc: "Umfassende Tests zur Gewährleistung von Zuverlässigkeit, Sicherheit und maximaler Leistung.",
    s5_title: "5. Bereitstellung & Support",
    s5_desc: "Nahtlose Inbetriebnahme und fortlaufende Unterstützung für nachhaltigen Erfolg."
  },

  why_badge: "Wettbewerbsvorteil",
  why_heading: "Warum Unternehmen uns vertrauen",
  why_points: {
    w1: "Innovative Lösungen",
    w2: "Erfahrenes Team",
    w3: "Skalierbar & sicher",
    w4: "Kundenfokussiert",
    w5: "Transparente Kommunikation",
    w6: "Zuverlässiger Support"
  },

  commitment_title: "Verpflichtung zu kontinuierlicher Innovation",
  commitment_desc: "Technologie wandelt sich unaufhörlich. Wir bleiben an der Spitze, indem wir moderne Tools wie Cloud Computing und KI einsetzen. Unser Ziel ist nicht nur die Softwareauslieferung, sondern der Aufbau nachhaltiger Partnerschaften."
},

      nav: {
        home: "Startseite",
        about: "Über uns",
        services: "Dienstleistungen",
        products: "Produkte",
        contact: "Kontakt",
        launch_project: "Projekt starten"
      },
      hero: {
        badge: "Next-Gen Lunar Innovation",
        title_start: "Die Zukunft gestalten mit",
        title_highlight: "LunarCode",
        subtitle: "Wir entwickeln hochgradig skalierbare Full-Stack-Anwendungen, intelligente KI-Workflows, SaaS-Plattformen und Cloud-Lösungen für maximale Effizienz.",
        cta_primary: "Projekt starten",
        cta_secondary: "Dienstleistungen erkunden",
        stat_uptime: "99,9% Betriebszeit-Architektur",
        stat_projects: "50+ Enterprise-Einsätze",
        stat_satisfaction: "100% Kundenzufriedenheit"
      },
      collaboration: {
        badge: "Partnerschaft & Ökosystem",
        heading: "Zusammenarbeit mit führenden Technologieunternehmen"
      },
      services: {
        badge: "Unsere Kernlösungen",
        title: "Hochleistungsfähige digitale Lösungen",
        subtitle: "Von automatisierten neuronalen Workflows bis hin zu skalierbarer Cloud-Infrastruktur entwickeln wir Software für exponentielles Wachstum.",
        custom_software: {
          title: "Individuelle Softwareentwicklung",
          desc: "Maßgeschneiderte Full-Stack-Architekturen für Skalierbarkeit, Ausfallsicherheit und nahtlose Performance."
        },
        ai_automation: {
          title: "KI & Workflow-Automatisierung",
          desc: "Intelligente Multi-Agenten-Systeme, automatisierte Prozesse und individuelle LLM-Integrationen."
        },
        saas_dev: {
          title: "SaaS-Plattformentwicklung",
          desc: "Skalierbare Multi-Tenant-Cloud-Plattformen für schnelles Onboarding, Sicherheit und weltweiten Zugriff."
        },
        cloud_infra: {
          title: "Cloud-Infrastruktur & DevOps",
          desc: "Zuverlässige CI/CD-Pipelines, containerisierte Orchestrierung und kosteneffizientes Cloud-Engineering."
        },
        security: {
          title: "API- & Unternehmenssicherheit",
          desc: "Umfassende Sicherheitsaudits, gehärtete Microservices und strikte Sicherheitsstandards."
        },
        learn_more: "Mehr erfahren"
      },
      mission: {
        badge: "Unsere Mission",
        title: "Deep Tech mit unbegrenztem Unternehmenspotenzial verbinden",
        desc_1: "Bei LunarCode glauben wir, dass Software nicht nur Prozesse ausführen sollte – sie sollte Unternehmen aktiv voranbringen.",
        desc_2: "Unsere Mission ist es, visionäre Unternehmen mit zukunftssicheren Codebases, prädiktiver Intelligenz und robuster Infrastruktur auszustatten.",
        point_1: "Höchste Code-Zuverlässigkeit",
        point_2: "Hyperskalierbare Architekturen",
        point_3: "Autonome KI-Beschleunigung"
      },
      trusted: {
        badge: "Nachgewiesene Exzellenz",
        title: "Weltweit geschätzt von Innovatoren",
        subtitle: "Unterstützung kritischer Produktionssysteme mit erstklassigen Engineering-Standards.",
        metric_1_val: "99,99%",
        metric_1_label: "Systemzuverlässigkeit",
        metric_2_val: "10M+",
        metric_2_label: "Tägliche API-Aufrufe",
        metric_3_val: "4.9/5",
        metric_3_label: "Kundenbewertung",
        metric_4_val: "15ms",
        metric_4_label: "Durchschnittliche globale Latenz"
      },
      team: {
        badge: "Unsere Visionäre",
        title: "Die Köpfe hinter LunarCode",
        subtitle: "Ingenieure, Systemarchitekten und Strategen, die sich der digitalen Perfektion widmen.",
        role_founder: "Chief Technology Officer & Lead Architect",
        role_ai: "Leiter KI-Automatisierung & Neuronale Systeme",
        role_cloud: "Principal Cloud Infrastructure Architect"
      },
      footer: {
        tagline: "Entwicklung intelligenter Softwaresysteme, SaaS-Plattformen, KI-Automatisierung und skalierbarer Cloud-Lösungen.",
        quick_links: "Schnellnavigation",
        services_heading: "Kernlösungen",
        services_items: {
          custom_software: "Individuelle Software",
          ai_automation: "KI-Automatisierung",
          saas_dev: "SaaS-Entwicklung",
          cloud_infra: "Cloud-Infrastruktur",
          api_security: "API- & Unternehmenssicherheit"
        },
        newsletter_title: "Technologisch voraus sein",
        newsletter_sub: "Abonnieren Sie Einblicke in KI-Architektur und SaaS-Entwicklung.",
        placeholder_email: "E-Mail-Adresse eingeben",
        btn_subscribe: "Abonnieren",
        rights: "Alle Rechte vorbehalten.",
        privacy: "Datenschutz",
        terms: "Nutzungsbedingungen"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', // Explicit default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;