import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const resources = {
  en: {
    translation: {

      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        products: "Products",
        contact: "Contact",
        launch_project: "Launch Project"
      },
      blog: {
        brand_subtitle: "Engineering & Cloud",
        nav_all_articles: "All Articles",
        nav_featured_story: "Featured Story",
        about_lunarcode: "About LunarCode",
        featured_nav_mobile: "Featured: Web Apps For Business",
        share_toast_title: "Separate Link Copied!",
        share_toast_desc: "Unique blog URL is ready to share.",
        footer_copyright: "© {{year}} LunarCode. Software development, SaaS engineering & cloud infrastructure.",
        footer_preserved: "All Content Preserved",
        footer_articles: "Articles",
        footer_web_apps: "Web Applications",
        
        feed: {
          badge: "Digital Transformation & Systems Architecture",
          hero_title_1: "Engineering",
          hero_title_highlight: "Smarter Solutions",
          hero_title_2: "for Rapid Growth.",
          hero_desc: "Explore in-depth technical blueprints, scalable architecture guides, and strategic insights curated by the LunarCode team.",
          featured_badge: "Featured Publication",
          read_full_article: "Read Full Article",
          special_report: "SPECIAL REPORT",
          special_report_sub: "Comprehensive 6-Section Breakdown",
          sr_item_1: "Task Automation & Data Flow",
          sr_item_2: "Partner Selection Criteria",
          sr_item_3: "Cloud Infrastructure & Scaling",
          sr_item_4: "LunarCode Capabilities",
          sr_footer: "Includes full verbatim editorial & implementation steps.",
          search_placeholder: "Search topics, keywords, tags...",
          no_articles_title: "No articles match your search",
          no_articles_desc: "Try another keyword or reset the category filter.",
          reset_filters: "Reset Filters"
        },

        single: {
          back_to_all: "Back to All Articles",
          bookmark_save: "Save Article",
          bookmark_remove: "Remove Bookmark",
          share_link_btn: "Share Link",
          cta_badge: "Work With LunarCode",
          cta_title: "Ready to Build a Smarter, Scalable Web Application?",
          cta_desc: "LunarCode provides end-to-end software development, SaaS engineering, AI and workflow automation, cloud infrastructure, and enterprise system integration.",
          cta_share_guide: "Share Architecture Guide",
          cta_browse_more: "Browse More Topics",
          toc_title: "Table of Contents",
          routing_title: "Separate Link & Routing",
          routing_desc: "This article is accessible at its own distinct URL hash:",
          copy_perm_url: "Copy Permanent URL",
          editorial_title: "LunarCode Editorial",
          editorial_role: "Engineering & Cloud",
          editorial_desc: "Focusing on cloud infrastructure, workflow automation, and custom web software solutions."
        },

        categories: {
          all: "All",
          software_dev: "Software Development",
          cloud_infra: "Cloud Infrastructure",
          ai_automation: "Automation & AI"
        },

        posts: {
          web_apps: {
            title: "How Web Applications Help Businesses Work Smarter and Grow Faster",
            category: "Software Development",
            readTime: "7 min read",
            date: "October 16, 2026",
            author_name: "LunarCode Insights",
            author_role: "Engineering & Cloud Architecture",
            excerpt: "Running a business involves managing customers, organizing information, handling daily tasks, and making decisions that support growth. Discover how web apps and cloud architecture automate workflows and drive scalability.",
            lead: "Running a business involves managing customers, organizing information, handling daily tasks, and making decisions that support growth. When these activities depend on spreadsheets, manual work, or disconnected tools, even simple processes can become time-consuming.",
            intro1: "This is where web applications can make a difference. They help businesses manage their operations, improve customer experiences, and bring important activities together in one place.",
            intro2: "For businesses looking to improve their digital operations, working with a reliable Web Application Development Company can be a practical step toward building software that meets their specific needs.",
            intro3: "But how do web applications actually help a business work smarter? Let's explore their benefits, the role of cloud technology, and why planning for future growth matters.",
            
            sec1_title: "What Is a Web Application?",
            sec1_p1: "A web application is a software program that users access through a web browser. Unlike a basic website that mainly shares information, a web application allows users to complete tasks and interact with different features.",
            sec1_p2: "Common examples include online booking systems, customer management platforms, employee dashboards, inventory management tools, and e-commerce applications.",
            sec1_p3: "For example, a service business might use a web application to manage appointments, store customer details, track payments, and organize employee schedules. Instead of switching between several tools, the team can access the information it needs from one platform.",
            sec1_p4: "The main purpose is simple: make everyday work easier, more organized, and more efficient.",
            
            sec2_title: "How Web Applications Help Businesses Work Smarter",
            sec2_p1: "Every business has processes that take time but could be managed more efficiently. A well-designed web application can help simplify these activities.",
            
            sub1_title: "Automate Repetitive Tasks",
            sub1_body: "Many businesses spend hours handling routine activities such as entering data, preparing reports, updating records, and sending notifications.\n\nA web application can automate suitable tasks and reduce the amount of manual work required. For example, an online booking system can confirm appointments automatically, while an inventory application can update stock records when orders are processed.\n\nThis allows employees to spend more time on customer service, planning, and other important responsibilities.",
            
            sub2_title: "Keep Business Information Organized",
            sub2_body: "When information is spread across multiple spreadsheets and applications, finding the correct details can be difficult.\n\nA custom web application can bring relevant business information into a centralized system. Depending on its features, employees may be able to check orders, view customer records, monitor projects, and prepare reports from a single dashboard.\n\nOrganized information also helps business owners understand their operations and make better-informed decisions.",
            
            sub3_title: "Improve the Customer Experience",
            sub3_body: "Customers value convenience. They want to find information, access services, and complete transactions without unnecessary delays.\n\nWeb applications can provide features such as customer accounts, online payments, appointment scheduling, order tracking, and self-service portals.\n\nFor example, a customer who can book a service online without making several phone calls may find the overall experience much easier.\n\nWhen applications are designed around real customer needs, they can help businesses deliver more convenient and consistent services.",
            
            sub4_title: "Support Remote Teams",
            sub4_body: "Many businesses have employees working from different locations. Web applications can give authorized team members access to the information and tools they need through an internet connection.\n\nProject dashboards, shared workspaces, and online reporting tools can help teams coordinate their activities and keep track of progress.\n\nWith appropriate access controls and security measures, businesses can support flexible working arrangements without losing visibility into important operations.",
            
            sec3_title: "Why Choosing the Right Web Application Development Company Matters",
            sec3_p1: "Every business operates differently. A solution that works well for an online retailer may not be suitable for a manufacturing company or a professional service provider.",
            sec3_p2: "A reliable Web Application Development Company takes the time to understand these differences before recommending a solution.",
            sec3_p3: "The process usually begins with identifying business goals, understanding user requirements, and deciding which features are essential. Developers then plan the application, design its interface, build the required functionality, and test it before launch.",
            sec3_p4: "When choosing a development partner, consider the following factors:",
            bp1_title: "Business understanding",
            bp1_text: "The team should understand the problem you want to solve rather than simply suggest technical features.",
            bp2_title: "User-friendly design",
            bp2_text: "The application should be easy to navigate and work well across relevant devices.",
            bp3_title: "Security",
            bp3_text: "User permissions, secure authentication, and appropriate data protection measures should be part of the development process.",
            bp4_title: "Integration",
            bp4_text: "The application may need to connect with existing tools, payment systems, or third-party services.",
            bp5_title: "Ongoing support",
            bp5_text: "Updates, maintenance, bug fixes, and future improvements should be considered from the beginning.",
            sec3_conclusion: "The best solution is not necessarily the one with the most features. It is the one that solves your business problems effectively and remains practical to maintain.",
            
            sec4_title: "The Role of Cloud Infrastructure Services",
            sec4_p1: "A web application needs a suitable environment to operate. This environment includes computing resources, storage, networking, and the supporting systems required to deliver the application to users.",
            sec4_p2: "Cloud Infrastructure Services help businesses access these resources without having to manage all the underlying physical infrastructure themselves.",
            sec4_p3: "Cloud infrastructure can offer several advantages.",
            sec4_p4: "First, businesses can adjust resources as their application requirements change. This can be useful when traffic increases during busy periods or when a company expands its digital services.",
            sec4_p5: "Second, cloud environments can support automated deployment, monitoring, backups, and recovery processes when these capabilities are configured appropriately.",
            sec4_p6: "Third, cloud infrastructure can make it easier for development teams to release updates and manage applications across different environments.",
            sec4_p7: "However, moving an application to the cloud does not automatically guarantee better performance or security. The infrastructure must be designed properly, monitored regularly, and managed according to the application's needs.",
            sec4_p8: "For businesses building new digital products, selecting an appropriate cloud setup can help establish a reliable foundation.",
            
            sec5_title: "Why Scalable Software Solutions Are Important",
            sec5_p1: "Business growth often brings new requirements. An application that works well for a small team today may need additional capacity and functionality as the number of users increases.",
            sec5_p2: "This is why Scalable Software Solutions are important.",
            sec5_p3: "Scalable software is designed to accommodate changing requirements without forcing a complete rebuild every time the business grows.",
            sec5_p4: "For example, an online store may need to handle more customers during seasonal sales. A SaaS business may introduce new subscription plans, while a service company may need to support additional locations.",
            sec5_p5: "A well-planned software architecture can make these changes easier to manage.",
            sec5_p6: "Scalability may involve optimizing databases, improving application performance, adding infrastructure capacity, or organizing software into components that can be maintained independently.",
            sec5_p7: "It also means thinking carefully about future needs without making the initial application unnecessarily complicated.",
            sec5_p8: "By planning for realistic growth, businesses can reduce avoidable technical limitations and make future improvements more manageable.",
            
            sec6_title: "How LunarCode Can Help Your Business",
            sec6_p1: "Choosing the right technology starts with understanding what your business needs to achieve.",
            sec6_p2: "LunarCode works across software development, SaaS engineering, AI and workflow automation, cloud infrastructure, and system integration. These capabilities can support businesses that want to develop digital products, improve existing systems, or make their operations more efficient.",
            sec6_p3: "Whether you are planning a new web application or improving an existing platform, it helps to begin with a clear goal. You might want to reduce manual work, improve customer access, connect separate systems, or prepare your software for a growing user base.",
            sec6_p4: "A practical development approach focuses on the most important requirements first, tests the solution carefully, and leaves room for improvements as the business evolves."
          },

          cloud_sec: {
            title: "Building Resilient Enterprise Systems: Cloud Security & Scalability",
            category: "Cloud Infrastructure",
            readTime: "5 min read",
            date: "October 10, 2026",
            author_name: "LunarCode Security Team",
            author_role: "DevSecOps Division",
            excerpt: "Explore foundational tenets of modern cloud environments: zero-trust principles, containerization, microservice decoupling, and automated CI/CD pipelines.",
            lead: "Security and scalability are not post-launch add-ons; they are architectural decisions made on day one.",
            intro1: "In a distributed software environment, safeguarding customer data while sustaining low-latency performance demands proactive infrastructure configuration.",
            intro2: "By orchestrating container clusters, applying dynamic access tokens, and automating backup snapshots, modern companies establish long-term digital resilience.",
            sec1_title: "Key Cloud Pillars",
            sec1_p1: "Continuous monitoring, least privilege authorization, and automated regression testing safeguard services as user loads expand.",
            sec1_p2: "Partnering with seasoned architects guarantees that each software tier scales independently without incurring downtime or spiraling operational overhead."
          },

          ai_workflow: {
            title: "Automating Complex Workflows: Moving Beyond Spreadsheets",
            category: "Automation & AI",
            readTime: "4 min read",
            date: "September 28, 2026",
            author_name: "LunarCode AI Lab",
            author_role: "Automation Engineers",
            excerpt: "How intelligent agents and automated pipelines reduce human error, streamline customer queries, and harmonize disconnected enterprise SaaS tools.",
            lead: "Manual copy-pasting between disparate portals degrades employee morale and introduces systemic data discrepancies.",
            intro1: "Modern workflow automation bridges siloed databases, ERPs, and client portals with event-driven endpoints and smart pipelines.",
            intro2: "Teams recover hundreds of productive hours monthly by handing predictable processing over to automated background services.",
            sec1_title: "The Transformative Impact of Automation",
            sec1_p1: "Smart notification triggers, instantaneous inventory adjustments, and real-time ledger updates create a frictionless business rhythm.",
            sec1_p2: "LunarCode specializes in building custom integrations that transform repetitive chores into autonomous competitive advantages."
          }
        }
      }
        ,

      "web_app_guide": {
  "badge": "LUNARCODE INSIGHTS // SOFTWARE ARCHITECTURE",
  "heroTitle": "How Web Applications Help Businesses Work Smarter and Grow Faster",
  "intro": {
    "p1": "Running a business involves managing customers, organizing information, handling daily tasks, and making decisions that support growth. When these activities depend on spreadsheets, manual work, or disconnected tools, even simple processes can become time-consuming.",
    "p2": "This is where web applications can make a difference. They help businesses manage their operations, improve customer experiences, and bring important activities together in one place.",
    "p3": "For businesses looking to improve their digital operations, working with a reliable Web Application Development Company can be a practical step toward building software that meets their specific needs.",
    "p4": "But how do web applications actually help a business work smarter? Let's explore their benefits, the role of cloud technology, and why planning for future growth matters."
  },
  "whatIs": {
    "tag": "DEFINITION & SCOPE",
    "title": "What Is a Web Application?",
    "p1": "A web application is a software program that users access through a web browser. Unlike a basic website that mainly shares information, a web application allows users to complete tasks and interact with different features.",
    "p2": "Common examples include online booking systems, customer management platforms, employee dashboards, inventory management tools, and e-commerce applications.",
    "purpose": "The main purpose is simple: make everyday work easier, more organized, and more efficient.",
    "exampleTitle": "Real-World Operational Scenario",
    "example": "For example, a service business might use a web application to manage appointments, store customer details, track payments, and organize employee schedules. Instead of switching between several tools, the team can access the information it needs from one platform."
  },
  "benefits": {
    "tag": "STRATEGIC ADVANTAGES",
    "title": "How Web Applications Help Businesses Work Smarter",
    "subtitle": "Every business has processes that take time but could be managed more efficiently. A well-designed web application can help simplify these activities.",
    "b1": {
      "title": "1. Automate Repetitive Tasks",
      "p1": "Many businesses spend hours handling routine activities such as entering data, preparing reports, updating records, and sending notifications.",
      "p2": "A web application can automate suitable tasks and reduce the amount of manual work required. For example, an online booking system can confirm appointments automatically, while an inventory application can update stock records when orders are processed.",
      "p3": "This allows employees to spend more time on customer service, planning, and other important responsibilities."
    },
    "b2": {
      "title": "2. Keep Business Information Organized",
      "p1": "When information is spread across multiple spreadsheets and applications, finding the correct details can be difficult.",
      "p2": "A custom web application can bring relevant business information into a centralized system. Depending on its features, employees may be able to check orders, view customer records, monitor projects, and prepare reports from a single dashboard.",
      "p3": "Organized information also helps business owners understand their operations and make better-informed decisions."
    },
    "b3": {
      "title": "3. Improve the Customer Experience",
      "p1": "Customers value convenience. They want to find information, access services, and complete transactions without unnecessary delays.",
      "p2": "Web applications can provide features such as customer accounts, online payments, appointment scheduling, order tracking, and self-service portals. For example, a customer who can book a service online without making several phone calls may find the overall experience much easier.",
      "p3": "When applications are designed around real customer needs, they can help businesses deliver more convenient and consistent services.",
      "p4": "Frictionless self-service bridges customer retention directly with business credibility."
    },
    "b4": {
      "title": "4. Support Remote Teams",
      "p1": "Many businesses have employees working from different locations. Web applications can give authorized team members access to the information and tools they need through an internet connection.",
      "p2": "Project dashboards, shared workspaces, and online reporting tools can help teams coordinate their activities and keep track of progress.",
      "p3": "With appropriate access controls and security measures, businesses can support flexible working arrangements without losing visibility into important operations."
    }
  },
  "agency": {
    "tag": "DEVELOPMENT PARTNERSHIP",
    "title": "Why Choosing the Right Web Application Development Company Matters",
    "p1": "Every business operates differently. A solution that works well for an online retailer may not be suitable for a manufacturing company or a professional service provider.",
    "p2": "A reliable Web Application Development Company takes the time to understand these differences before recommending a solution.",
    "p3": "The process usually begins with identifying business goals, understanding user requirements, and deciding which features are essential. Developers then plan the application, design its interface, build the required functionality, and test it before launch.",
    "criteriaIntro": "When choosing a development partner, consider the following factors:",
    "factors": {
      "f1": {
        "name": "Business understanding",
        "desc": "The team should understand the problem you want to solve rather than simply suggest technical features."
      },
      "f2": {
        "name": "User-friendly design",
        "desc": "The application should be easy to navigate and work well across relevant devices."
      },
      "f3": {
        "name": "Security",
        "desc": "User permissions, secure authentication, and appropriate data protection measures should be part of the development process."
      },
      "f4": {
        "name": "Integration",
        "desc": "The application may need to connect with existing tools, payment systems, or third-party services."
      },
      "f5": {
        "name": "Ongoing support",
        "desc": "Updates, maintenance, bug fixes, and future improvements should be considered from the beginning."
      }
    },
    "summary": "The best solution is not necessarily the one with the most features. It is the one that solves your business problems effectively and remains practical to maintain."
  },
  "cloud": {
    "tag": "CLOUD INFRASTRUCTURE",
    "title": "The Role of Cloud Infrastructure Services",
    "p1": "A web application needs a suitable environment to operate. This environment includes computing resources, storage, networking, and the supporting systems required to deliver the application to users.",
    "p2": "Cloud Infrastructure Services help businesses access these resources without having to manage all the underlying physical infrastructure themselves.",
    "advTitle": "Key Advantages of Cloud Architecture:",
    "adv1": "First, businesses can adjust resources as their application requirements change. This can be useful when traffic increases during busy periods or when a company expands its digital services.",
    "adv2": "Second, cloud environments can support automated deployment, monitoring, backups, and recovery processes when these capabilities are configured appropriately.",
    "adv3": "Third, cloud infrastructure can make it easier for development teams to release updates and manage applications across different environments.",
    "warning": "However, moving an application to the cloud does not automatically guarantee better performance or security. The infrastructure must be designed properly, monitored regularly, and managed according to the application's needs.",
    "footer": "For businesses building new digital products, selecting an appropriate cloud setup can help establish a reliable foundation."
  },
  "scalability": {
    "tag": "SYSTEM LONGEVITY",
    "title": "Why Scalable Software Solutions Are Important",
    "p1": "Business growth often brings new requirements. An application that works well for a small team today may need additional capacity and functionality as the number of users increases. This is why Scalable Software Solutions are important.",
    "p2": "Scalable software is designed to accommodate changing requirements without forcing a complete rebuild every time the business grows.",
    "scenarios": {
      "s1": "For example, an online store may need to handle more customers during seasonal sales.",
      "s2": "A SaaS business may introduce new subscription plans, while a service company may need to support additional locations."
    },
    "archTitle": "Strategic Architectural Planning:",
    "p3": "A well-planned software architecture can make these changes easier to manage. Scalability may involve optimizing databases, improving application performance, adding infrastructure capacity, or organizing software into components that can be maintained independently.",
    "p4": "It also means thinking carefully about future needs without making the initial application unnecessarily complicated.",
    "summary": "By planning for realistic growth, businesses can reduce avoidable technical limitations and make future improvements more manageable."
  },
  "lunar": {
    "tag": "FULL-CYCLE ENGINEERING",
    "title": "How LunarCode Can Help Your Business",
    "p1": "Choosing the right technology starts with understanding what your business needs to achieve.",
    "p2": "LunarCode works across software development, SaaS engineering, AI and workflow automation, cloud infrastructure, and system integration. These capabilities can support businesses that want to develop digital products, improve existing systems, or make their operations more efficient.",
    "p3": "Whether you are planning a new web application or improving an existing platform, it helps to begin with a clear goal. You might want to reduce manual work, improve customer access, connect separate systems, or prepare your software for a growing user base.",
    "p4": "A practical development approach focuses on the most important requirements first, tests the solution carefully, and leaves room for improvements as the business evolves.",
    "btnCta": "Start Building Smarter"
  }
},

"blog_post": {
  "badge": "LUNARCODE INSIGHTS // ARCHITECTURE & STRATEGY",
  "hero_title_p1": "Why Businesses Choose",
  "hero_title_highlight": "Custom Software Development",
  "hero_title_p2": "& SaaS Platforms",
  "hero_p1": "Technology has become an important part of running a modern business. From managing customers and employees to handling data, sales, communication, and daily operations, businesses now depend on software for many important tasks. However, not every business can work efficiently with the same ready-made software.",
  "hero_p2": "As a company grows, its requirements can become more specific. It may need a system that follows its own workflow, connects different tools, or provides features that are not available in standard applications. This is one of the main reasons businesses consider Custom Software Development. At the same time, companies building digital products are increasingly choosing SaaS Platforms to deliver their services online. These platforms can make software easier to access while giving businesses the flexibility to serve a growing number of users.",
  
  "sec1_badge": "CUSTOM SOFTWARE DEVELOPMENT",
  "sec1_title": "What Is Custom Software Development?",
  "sec1_p1": "Custom Software Development is the process of creating software according to the specific requirements of a business.",
  "sec1_p2": "Instead of changing business processes to match an existing application, custom development allows the software to be planned around those processes.",
  "sec1_p3": "For example, a business may need a customer management system, internal dashboard, inventory solution, employee portal, automated workflow, or a platform that connects several existing applications.",
  "sec1_p4": "When standard software cannot provide the right combination of features, a custom solution can offer more flexibility.",
  "sec1_quote": "The main idea is simple: the software should solve the business's actual problems rather than create new limitations.",

  "benefits_badge": "STRATEGIC VALUE",
  "benefits_title": "Why Businesses Invest in Custom Software",
  "benefits_intro1": "One of the biggest reasons businesses choose Custom Software is flexibility.",
  "benefits_intro2": "Ready-made applications are designed to serve a wide range of users. This makes them useful for common requirements, but they may not always fit a company's unique way of working.",
  "benefits_intro3": "With custom software, businesses can decide what features they need and how those features should work together.",
  "benefits_slider_title": "Some Common Benefits Include:",
  "benefits_list": [
    "Better alignment with business processes",
    "Automation of repetitive tasks",
    "Easier integration with existing systems",
    "Greater control over features",
    "Improved employee productivity",
    "Better customer experiences",
    "Easier adaptation to changing requirements",
    "Support for long-term business growth"
  ],
  "benefits_footer": "For a growing company, having software that can evolve with the business can be more useful than constantly searching for workarounds in a standard application.",

  "when_badge": "DECISION FRAMEWORK",
  "when_title": "When Is Custom Software a Good Choice?",
  "when_intro1": "Not every business needs custom software.",
  "when_intro2": "If an existing application already provides everything a company needs, using that solution may be the practical choice.",
  "when_intro3": "Custom development becomes more valuable when a business has requirements that are difficult to handle with standard tools.",
  "when_subtitle": "For example, a company may consider custom development when it needs:",
  "when_cards": [
    {
      "title": "A unique workflow",
      "desc": "The business operates differently from typical companies in its industry."
    },
    {
      "title": "Multiple integrations",
      "desc": "Different software systems need to communicate with each other."
    },
    {
      "title": "Automation",
      "desc": "Employees spend too much time completing repetitive manual tasks."
    },
    {
      "title": "Scalability",
      "desc": "The business expects its software requirements to increase as it grows."
    },
    {
      "title": "A unique digital product",
      "desc": "The company wants to create software that it can offer to its own customers."
    }
  ],
  "when_footer": "In these situations, building a solution specifically for the business can provide greater control.",

  "saas_badge": "SOFTWARE AS A SERVICE",
  "saas_title": "What Are SaaS Platforms?",
  "saas_p1": "SaaS stands for Software as a Service.",
  "saas_p2": "Instead of purchasing software and installing it on individual computers, users can access SaaS products through the internet. Most SaaS products are accessed through a web browser or application.",
  "saas_p3": "You may already use SaaS products for activities such as accounting, project management, communication, customer relationship management, marketing, or file management.",
  "saas_p4": "SaaS Platforms allow software companies to provide their products to multiple customers while managing the underlying technology centrally.",
  "saas_p5": "Users can log in to their accounts and access the features they need without managing the entire software infrastructure themselves.",

  "saas_pop_badge": "POPULARITY & CAPABILITIES",
  "saas_pop_title": "Why Are SaaS Platforms Popular?",
  "saas_pop_p1": "Convenience is one of the major reasons behind the popularity of SaaS.",
  "saas_pop_p2": "Businesses want software that is easy to access, simple to update, and capable of supporting their changing requirements.",
  "saas_pop_p3": "A well-designed SaaS platform can provide features such as:",
  "saas_features": [
    "Online access from different locations",
    "User accounts and permissions",
    "Automated software updates",
    "Secure data management",
    "Subscription and billing management",
    "Third-party integrations",
    "Analytics and reporting",
    "Scalable infrastructure"
  ],
  "saas_pop_footer": "For software companies, the SaaS model can also make it easier to serve customers in different locations without creating separate installations for every user.",

  "synergy_badge": "STRATEGIC CONVERGENCE",
  "synergy_title": "Custom Software and SaaS Can Work Together",
  "synergy_p1": "Custom Software and SaaS are not competing ideas. In many cases, they work together.",
  "synergy_p2": "A company may have a unique business idea and decide to turn it into an online product. Custom Software Development can be used to build the product according to its specific requirements, while the SaaS model can be used to deliver that product to customers.",
  "synergy_p3": "For example, imagine a company identifies a common problem faced by businesses in a particular industry.",
  "synergy_p4": "Instead of creating an internal tool that only its employees can use, the company could develop a complete SaaS product that solves the problem for other businesses as well.",
  "synergy_highlight": "This approach can turn a business idea into a scalable digital product.",

  "consider_badge": "PLANNING & ROADMAP",
  "consider_title": "Important Things to Consider Before Development",
  "consider_intro": "Choosing custom development or building a SaaS product requires proper planning.",
  "consider_items": [
    {
      "title": "Understand the Business Problem",
      "desc": "Before starting development, clearly define what the software needs to solve. A clear problem usually leads to a more focused product."
    },
    {
      "title": "Identify the Users",
      "desc": "Think about who will use the software. Employees, customers, administrators, and business owners may all have different requirements."
    },
    {
      "title": "Plan for Future Growth",
      "desc": "Your software may need additional features in the future. Building with scalability in mind can make future improvements easier."
    },
    {
      "title": "Consider Integrations",
      "desc": "Modern businesses often use several digital tools. Your software may need to connect with payment gateways, CRM systems, databases, APIs, or other applications."
    },
    {
      "title": "Focus on Security",
      "desc": "Software can handle important business and customer information. Security, access controls, and reliable infrastructure should therefore be considered from the beginning."
    },
    {
      "title": "Keep User Experience Simple",
      "desc": "A software product can have powerful technology behind it, but users should not have to struggle to understand how it works. A clear and simple experience can make adoption much easier."
    }
  ],

  "approach_badge": "TACTICAL ALIGNMENT",
  "approach_title": "Choosing the Right Development Approach",
  "approach_p1": "The best technology solution depends on the business.",
  "approach_p2": "A small company with straightforward requirements may be perfectly comfortable using existing software. Another company with specialized processes may benefit from Custom Software. Similarly, a company that wants to build and sell its own online software product may find SaaS Platforms a suitable approach.",
  "approach_highlight": "The important thing is to start with the business requirement rather than choosing technology simply because it is popular.",

  "growth_badge": "ENTERPRISE LONGEVITY",
  "growth_title": "Building Software for Long-Term Growth",
  "growth_p1": "Good software should do more than solve today's problem.",
  "growth_p2": "It should give a business room to improve and grow. This is where thoughtful Custom Software Development can make a difference. A well-planned system can be designed around current requirements while keeping future changes in mind.",
  "growth_p3": "For companies building digital products, scalable SaaS Platforms can provide the foundation needed to support more users, new features, and changing customer expectations.",
  "growth_p4": "The combination of good planning, reliable technology, strong security, and a user-friendly experience can make software a valuable part of business growth.",
  "cta_button": "Consult Engineering Team"
},
      contact_page: {
        badge: "GET IN TOUCH",

        hero_title_start: "Partner with",
        hero_title_highlight: "LunarCode",

        hero_subtitle:
          "Ready to accelerate your digital transformation? From custom software and AI-powered solutions to scalable SaaS platforms and cloud-native ecosystems, LunarCode helps businesses turn ideas into reliable digital products.",

        contact_options_heading: "Connect with LunarCode",

        global_badge: "GLOBAL DIGITAL PARTNER",

        global_desc:
          "Our mission is to translate complex business requirements into elegant, scalable, and reliable digital solutions that help businesses grow.",

        hq_title: "HQ / OFFICE",
        hq_address: "Noida, Uttar Pradesh, India",

        corp_title: "PHONE",
        support_title: "EMAIL",

        call_us: "Call Us",
        whatsapp: "WhatsApp",

        response_note:
          "You can contact us by phone, WhatsApp, email, or through our project form. Share your requirements with us and our team will get back to you with the next steps.",

        form_badge: "START A CONVERSATION",

        form_heading: "Consult with Our Experts",

        form_subtitle:
          "Tell us about your project, technical goals, timeline, and business requirements. Our team will help you identify the right technology and development approach.",

        name_label: "Full Name",
        name_placeholder: "e.g. Alexander Vance",

        email_label: "Work Email",
        email_placeholder: "alex@enterprise.com",

        desc_label: "Project Description",
        desc_placeholder:
          "Tell us about your technical goals, timeline, business requirements, and architectural needs...",

        btn_submit: "Request a Proposal",

        sending: "Sending Request...",

        success_msg:
          "Message sent successfully! Our technical team will review your requirements and get back to you within 24 hours.",

        error_msg:
          "Failed to send your message. Please try again or contact us directly by phone, WhatsApp, or email.",

        map_title: "OUR LOCATION",

        map_subtitle: "LunarCode is based in Noida, Uttar Pradesh, India.",

        final_cta_title: "Ready to Build Something Great?",

        final_cta_desc:
          "Let's discuss your idea, business challenge, or digital transformation requirements. Connect with the LunarCode team directly on WhatsApp.",

        final_cta_button: "Chat on WhatsApp",
      },

      product_page: {
        badge: "Production-Ready Ecosystems",

        hero_title_start: "Products Built for",
        hero_title_highlight: "Real Impact",
        hero_subtitle:
          "We design and build scalable digital products, business platforms, and custom software solutions that solve real-world problems.",

        btn_explore: "Explore Projects",
        btn_demo: "Discuss a Project",

        status_badge: "System Deployment: Active",
        uptime_label: "Uptime 99.9%",
        scalability_label: "Scalability: Auto",

        projects: {
          badge: "OUR PROJECTS",
          title: "Projects We've Built",
          subtitle:
            "A selection of digital products, business platforms, and custom solutions developed by LunarCode.",

          view_project: "View Project",

          hexawash: {
            tag: "ACTIVE DEPLOYMENT",
            title: "HexaWash",
            subtitle: "Smart Laundry Management Platform",

            desc: "A cloud-connected laundry management ecosystem designed for student accommodations and shared living spaces with digital payments, machine monitoring, and real-time availability.",

            impact:
              "Transforms traditional laundry rooms into automated and digitally managed smart infrastructure.",

            f1: "IoT-powered machine control and smart plug integration",
            f2: "Real-time machine availability and timers",
            f3: "Digital wallet and payment integration",
            f4: "Admin dashboard for monitoring and control",

            status: "ACTIVE",
          },

          kasa: {
  tag: "BUSINESS WEBSITE",
  title: "Business Websites",
  subtitle: "Modern Corporate Web Experience",

  desc:
    "A professionally designed website focused on delivering a clean, modern, and responsive digital experience with well-structured content and intuitive navigation.",

  impact:
    "Provides a polished online presence with a strong visual identity, clear content structure, and a seamless experience across devices.",

  f1: "Modern and responsive user interface",
  f2: "Clean and professional visual design",
  f3: "Structured content and navigation",
  f4: "Optimized desktop and mobile experience",

  status: "LIVE",
},

         modern_websites: {
  tag: "WEB EXPERIENCE",
  title: "Modern Websites",
  subtitle: "Modern Digital Presence",
  desc:
    "A modern website experience designed with a clean interface, responsive layouts, smooth interactions, and a strong visual identity.",
  impact:
    "A polished digital experience focused on usability, performance, and responsive design.",
  f1: "Modern and responsive user interface",
  f2: "Clean visual hierarchy and navigation",
  f3: "Optimized experience across devices",
  f4: "Scalable structure for future improvements",
  status: "LIVE",
},

loco_snap: {
  tag: "DIGITAL PLATFORM",
  title: "LocoSnap",
  subtitle: "Interactive Digital Platform",
  desc:
    "A modern digital platform built with a responsive interface, interactive workflows, location-based experiences, and a scalable application structure.",
  impact:
    "A feature-rich digital experience designed for performance, usability, and future scalability.",
  f1: "Responsive and modern application interface",
  f2: "Interactive user workflows",
  f3: "Location-based digital experiences",
  f4: "Scalable application architecture",
  status: "LIVE",
},

          clinic: {
            tag: "HEALTHCARE MANAGEMENT",
            title: "Clinic Management System",
            subtitle: "Patient & Document Management",

            desc: "A digital clinic management system designed to manage patients, unique patient records, and medical documents through a centralized platform.",

            impact:
              "Simplifies the digital management of patient information and medical documents while providing clinics with a centralized and structured workflow.",

            f1: "Unique patient ID and patient management",
            f2: "Fast patient and record search",
            f3: "Medical document upload and management",
            f4: "Centralized and structured document workflow",

            status: "LIVE",
          },

          billing: {
            tag: "BUSINESS MANAGEMENT",
            title: "Billing System",
            subtitle: "Digital Billing & Invoice Management",

            desc: "A digital billing system designed to simplify invoicing, billing processes, and everyday business operations through a centralized platform.",

            impact:
              "Brings essential billing operations into one digital system and reduces repetitive manual work.",

            f1: "Digital billing workflow",
            f2: "Invoice and receipt management",
            f3: "Structured business data management",
            f4: "Simple and responsive user interface",

            status: "ACTIVE",
          },
        },

        custom_solutions: {
          badge: "CUSTOM ENGINEERING",
          title: "Custom Solutions for Your Operational DNA",
          subtitle:
            "When your business faces a unique challenge, we build the right digital system to solve it.",

          c1_title: "Full-Stack Web Development",
          c1_desc: "MERN / React / Next.js / Node.js / Cloud Systems",

          c2_title: "IoT Integration",
          c2_desc: "Hardware, sensor, and device integrations",

          c3_title: "AI Automation",
          c3_desc: "AI-powered automation, agents, and LLM solutions",

          c4_title: "SaaS Products",
          c4_desc: "Scalable and multi-tenant-ready platforms",

          c5_title: "API & Data Security",
          c5_desc: "Secure APIs, data isolation, and access control",
        },

        approach: {
          badge: "ENGINEERING PHILOSOPHY",
          title: "Our Methodical Approach",

          a1_title: "Scalable",
          a1_desc:
            "Built to grow with your business requirements and user base.",

          a2_title: "Secure",
          a2_desc:
            "Secure backend architectures, data isolation, and controlled access.",

          a3_title: "Practical",
          a3_desc:
            "No unnecessary features — we focus on solving real business problems.",

          a4_title: "Efficient",
          a4_desc:
            "High-performance systems, low latency, and cost-conscious technical architecture.",
        },

        why_choose: {
          badge: "WHY LUNARCODE",
          title: "Built by Engineers Who Understand Systems",

          p1: "Experience with real digital products and production-ready systems",

          p2: "Focused on robust backends and scalable system architectures",

          p3: "Fast execution and agile development cycles",

          p4: "Technology backed by a clear understanding of business requirements",
        },

        cta_banner: {
          title: "Ready for Powerful Digital Systems?",

          subtitle:
            "LunarCode helps you transform your ideas into modern, reliable, and scalable digital products.",

          btn_call: "Schedule a Conversation",
          btn_contact: "Contact Engineering Team",
        },
      },

     service_page: {
  badge: "ENGINEERING RELIABILITY",

  phase: "SERVICE PHASE",

  node_synced: "NODE SYNCED",

  services_heading: "Our Software Development Services",

  hero_title_start: "Comprehensive Technical",

  hero_title_highlight: "Expertise",

  hero_subtitle:
    "LunarCode delivers custom software, AI-powered solutions, SaaS platforms, and cloud infrastructure designed to support modern digital transformation. We combine reliable engineering with scalable technology to solve complex business challenges.",

  cta_audit: "Request a Technical Consultation",

  custom_software: {
    title: "Custom Software Development",

    p1:
      "We design and develop custom software solutions around your business processes, users, and operational requirements. Instead of forcing your business into standard software, we build technology that fits the way you work.",

    p2:
      "Our engineering approach focuses on maintainable architecture, secure development, reliable performance, and scalable systems that can evolve as your business grows.",

    tag_label: "DEVELOPMENT LIFECYCLE",

    tags:
      "React • Node.js • APIs • Agile • Secure Development",

    image_alt:
      "Custom software development and modern programming technology",
  },

  ai_automation: {
    title: "AI & Automation",

    p1:
      "We integrate artificial intelligence and intelligent automation into business workflows to reduce repetitive tasks, improve productivity, and help teams make better use of their data.",

    p2:
      "From AI assistants and intelligent workflows to machine learning integrations and LLM-powered applications, we build practical AI solutions around real business requirements.",

    tag_label: "INTELLIGENCE ENGINE",

    tags:
      "AI • LLMs • Machine Learning • Automation • AI APIs",

    image_alt:
      "Artificial intelligence and business automation technology",
  },

  saas_dev: {
    title: "SaaS Development",

    p1:
      "We build scalable SaaS applications for businesses that need reliable platforms capable of supporting multiple users, workflows, and growing customer demand.",

    p2:
      "Our SaaS development approach covers product architecture, authentication, APIs, databases, multi-tenant systems, performance, and production-ready deployment.",

    tag_label: "PLATFORM RELIABILITY",

    tags:
      "Multi-Tenant • APIs • Authentication • Scalable Architecture",

    image_alt:
      "SaaS application development and digital product platform",

  },

  cloud_infra: {
    title: "Cloud Infrastructure",

    p1:
      "We design cloud-ready infrastructure that helps applications remain reliable, scalable, secure, and easier to manage as usage and business requirements increase.",

    p2:
      "Our cloud solutions cover deployment, application infrastructure, storage, APIs, monitoring, security, and scalable backend environments tailored to your application.",

    tag_label: "SCALE ENGINE",

    tags:
      "Cloud • Deployment • Storage • APIs • Monitoring",

    image_alt:
      "Cloud infrastructure and scalable server technology",
  },

  bottom_title: "Have a Digital Product in Mind?",

  bottom_subtitle:
    "Tell us about your idea, business challenge, or technical requirements. Our team can help you choose the right technology, architecture, and development approach for your project.",

  bottom_cta: "Start a Conversation",
},

about_page: {
  hero_badge: "Pioneering Software Architecture",

  hero_title_start: "Empowering Businesses Through",
  hero_title_highlight: "LunarCode Innovation",

  hero_subtitle:
    "LunarCode is a modern software development and IT solutions company focused on building custom software, AI-powered applications, SaaS platforms, and scalable digital solutions for modern businesses.",

  overview_badge: "COMPANY OVERVIEW",

  overview_title:
    "Reliable Technology Solutions for a Rapidly Evolving Digital World",

  overview_p1:
    "In today's rapidly evolving digital landscape, businesses need technology partners who understand their challenges and can turn complex requirements into practical, reliable solutions.",

  overview_p2:
    "From startups and growing businesses to established organizations, LunarCode builds secure, high-performance, and user-focused digital products tailored to specific business goals and operational requirements.",

  story_badge: "OUR STORY",

  story_title:
    "Curiosity, Passion & Continuous Evolution",

  story_p1:
    "LunarCode was founded with a simple vision: to make technology more practical, accessible, and valuable for businesses. What started with a passion for software development has grown into a technology-focused team dedicated to building modern digital solutions.",

  story_p2:
    "We believe technology should do more than solve today's problems. It should create new opportunities, improve business processes, and provide a strong foundation for long-term innovation and growth.",

  mission_title: "Our Mission",

  mission_desc:
    "Our mission is to empower businesses through innovative and reliable technology solutions that improve efficiency, enhance customer experiences, simplify operations, and support sustainable digital growth.",

  vision_title: "Our Vision",

  vision_desc:
    "Our vision is to become a globally trusted technology partner known for thoughtful engineering, innovation, quality, and long-term collaboration, helping businesses unlock the full potential of modern technology.",

  values_badge: "OUR CORE VALUES",

  values_heading:
    "The Principles Guiding Every Solution We Build",

  values: {
    val_1_title: "Innovation",

    val_1_desc:
      "We explore modern technologies and practical ideas to create smarter digital solutions that help businesses adapt, improve, and grow.",

    val_2_title: "Quality",

    val_2_desc:
      "We focus on clean architecture, reliable performance, security, usability, and maintainable code across every project.",

    val_3_title: "Collaboration",

    val_3_desc:
      "We work closely with our clients to understand their goals, challenges, and requirements, ensuring every solution is aligned with their business needs.",

    val_4_title: "Integrity",

    val_4_desc:
      "Transparency, honesty, accountability, and trust are at the foundation of the relationships we build with our clients and partners.",

    val_5_title: "Continuous Learning",

    val_5_desc:
      "Technology evolves continuously, so we keep improving our skills, exploring new tools, and adopting better engineering practices.",

      "val_6_title": "Reliability & Scalability",
"val_6_desc": "We build fault-tolerant architectures engineered to handle surging user traffic with zero downtime and stable throughput."
  },

  expertise_badge: "TECHNICAL EXPERTISE",

  expertise_heading:
    "Specialized Engineering for Modern Digital Products",

  expertise_sub:
    "We combine modern development frameworks, scalable architectures, cloud technologies, and intelligent automation to build reliable digital products for businesses.",

  expertise_items: {
    e1: "Custom Software Development",
    e2: "Full-Stack Web Development",
    e3: "AI & Intelligent Automation",
    e4: "SaaS Product Development",
    e5: "Cloud Infrastructure & Deployment",
    e6: "API & System Integration",
  },

  approach_badge: "OUR DEVELOPMENT PROCESS",

  approach_heading:
    "A Structured Approach From Idea to Production",

  steps: {
    s1_title: "1. Understanding Requirements",

    s1_desc:
      "We understand your business objectives, users, technical requirements, challenges, and project scope before development begins.",

    s2_title: "2. Strategic Planning",

    s2_desc:
      "We define the technology stack, architecture, features, development roadmap, and priorities required to build the right solution.",

    s3_title: "3. Agile Development",

    s3_desc:
      "We develop the product in focused iterations, allowing continuous feedback, improvements, and transparent progress throughout the project.",

    s4_title: "4. Testing & Quality Assurance",

    s4_desc:
      "We test functionality, performance, security, usability, and reliability to ensure the product is ready for real-world use.",

    s5_title: "5. Deployment & Support",

    s5_desc:
      "We deploy the solution using reliable infrastructure and provide ongoing technical support and improvements as your business evolves.",
  },

  why_badge: "WHY LUNARCODE",

  why_heading:
    "Technology Built Around Your Business",

  why_points: {
    w1: "Business-Focused Solutions",
    w2: "Modern Technology Stack",
    w3: "Scalable & Secure Architecture",
    w4: "Client-Centered Development",
    w5: "Clear & Transparent Communication",
    w6: "Reliable Technical Support",
  },

  commitment_title: "Technology With a Purpose",

  commitment_desc:
    "Technology is constantly evolving, and so are the opportunities it creates. We continuously explore modern frameworks, cloud platforms, AI technologies, and better development practices to build solutions that deliver real business value. Our goal is not simply to deliver software, but to create reliable digital products and long-term technology partnerships.",

  final_cta_title:
    "Have an Idea or Business Challenge?",

  final_cta_desc:
    "Tell us what you want to build, improve, or automate. Our team can help you explore the right technology and turn your idea into a practical digital solution.",

  final_cta_button: "Start a Conversation",
},

      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        products: "Products",
        contact: "Contact Us",
        launch_project: "Launch Project",
      },
      hero: {
        badge: "Next-Gen Lunar Innovation",
        title_start: "Architecting the Future with",
        title_highlight: "LunarCode",
        subtitle:
          "We engineer scalable full-stack applications, intelligent AI workflows, SaaS platforms, and enterprise cloud solutions designed to launch your business into orbit.",
        cta_primary: "Launch Project",
        cta_secondary: "Explore Services",
        stat_uptime: "99.9% Uptime Architecture",
        stat_projects: "50+ Enterprise Deployments",
        stat_satisfaction: "100% Client Satisfaction",
      },
      collaboration: {
        badge: "Partnership & Ecosystem",
        heading: "Collaborating with Leading Tech Giants & Innovators",
      },
      services: {
        badge: "Our Core Services",
        title: "High-Performance Digital Solutions",
        subtitle:
          "From automated neural workflows to high-throughput cloud infrastructure, we build software that drives exponential growth.",
        custom_software: {
          title: "Custom Software Development",
          desc: "Tailor-made full-stack architectures engineered for scale, zero downtime, and seamless performance.",
        },
        ai_automation: {
          title: "AI & Workflow Automation",
          desc: "Intelligent multi-agent systems, automated workflows, and custom LLM integrations for enterprises.",
        },
        saas_dev: {
          title: "SaaS Platform Engineering",
          desc: "Scalable multi-tenant cloud platforms designed for rapid user onboarding, security, and global distribution.",
        },
        cloud_infra: {
          title: "Cloud Infrastructure & DevOps",
          desc: "Reliable CI/CD pipelines, containerized orchestration, and cost-efficient cloud engineering.",
        },
        security: {
          title: "API & Enterprise Security",
          desc: "End-to-end vulnerability scanning, hardened microservices, and airtight compliance protocols.",
        },
        
      "api_integration": {
  "title": "API & System Integration",
  "desc": "Seamless connectivity across distributed systems, secure data pipelines, and high-performance API gateways."
},
        
        learn_more: "Learn More",
      },
      mission: {
        badge: "Our Mission",
        title: "Bridging Deep Tech and Infinite Business Potential",
        desc_1:
          "At LunarCode, we believe software shouldn't just run processes—it should actively propel organizations forward into new frontiers.",
        desc_2:
          "Our mission is to arm visionary enterprises with resilient codebases, predictive intelligence, and bulletproof infrastructure.",
        point_1: "Radical Code Reliability",
        point_2: "Hyper-Scalable Architectures",
        point_3: "Autonomous AI Acceleration",
      },
      trusted: {
        badge: "Proof of Excellence",
        title: "Trusted by Innovators Worldwide",
        subtitle:
          "Powering production systems with enterprise-grade reliability and top-tier engineering standards.",
        metric_1_val: "99.99%",
        metric_1_label: "System Reliability",
        metric_2_val: "10M+",
        metric_2_label: "API Transmissions Daily",
        metric_3_val: "4.9/5",
        metric_3_label: "Client Rating",
        metric_4_val: "15ms",
        metric_4_label: "Average Global Latency",
      },
      team: {
        badge: "Our Visionaries",
        title: "The Minds Behind LunarCode",
        subtitle:
          "The engineers, system architects, and creative strategists dedicated to delivering digital perfection.",
        role_founder: "Chief Technology Officer & Lead Architect",
        role_ai: "Head of AI Automation & Neural Systems",
        role_cloud: "Principal Cloud Infrastructure Architect",
      },
      footer: {
        tagline:
          "Building intelligent software systems, SaaS platforms, AI automation, and scalable cloud solutions.",
        quick_links: "Quick Navigation",
        services_heading: "Core Solutions",
        services_items: {
          custom_software: "Custom Software",
          ai_automation: "AI Automation",
          saas_dev: "SaaS Development",
          cloud_infra: "Cloud Infrastructure",
          api_security: "API & Enterprise Security",
        },
        newsletter_title: "Stay Ahead in Tech",
        newsletter_sub:
          "Subscribe for deep-dives into AI architecture and SaaS engineering.",
        placeholder_email: "Enter your email",
        btn_subscribe: "Subscribe",
        rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
  },
  // hi: {
  //   translation: {
  //     contact_page: {
  //       badge: "संपर्क करें",
  //       hero_title_start: "साझेदारी करें",
  //       hero_title_highlight: "लूनरकोड के साथ",
  //       hero_subtitle:
  //         "क्या आप अपने डिजिटल ट्रांसफॉर्मेशन को गति देने के लिए तैयार हैं? कस्टम एंटरप्राइज सॉफ्टवेयर से लेकर क्लाउड-नेnative इकोसिस्टम्स तक।",
  //       global_badge: "वैश्विक उपस्थिति",
  //       global_desc:
  //         "हमारा मिशन जटिल व्यावसायिक आवश्यकताओं को सुरुचिपूर्ण, स्केलेबल डिजिटल समाधानों में बदलना है।",
  //       hq_title: "मुख्यालय का पता",
  //       hq_address:
  //         "804, ओम टॉवर, अल्फा कमर्शियल बेल्ट, सेक्टर-अल्फा 1, 8वीं मंजिल, ग्रेटर नोएडा",
  //       corp_title: "कॉर्पोरेट पूछताछ",
  //       support_title: "आधिकारिक सहायता",
  //       form_heading: "हमारे विशेषज्ञों से परामर्श करें",
  //       name_label: "पूरा नाम",
  //       name_placeholder: "उदा. आलोक कुमार",
  //       email_label: "कार्य ईमेल",
  //       email_placeholder: "alok@enterprise.com",
  //       desc_label: "प्रोजेक्ट का विवरण",
  //       desc_placeholder:
  //         "हमें अपने तकनीकी लक्ष्यों, समयसीमा और प्रोजेक्ट की आवश्यकताओं के बारे में बताएं...",
  //       btn_submit: "प्रस्ताव का अनुरोध करें",
  //       sending: "संदेश भेजा जा रहा है...",
  //       success_msg:
  //         "संदेश सफलतापूर्वक भेजा गया! हमारी टीम 24 घंटों के भीतर आपसे संपर्क करेगी।",
  //       error_msg:
  //         "संदेश भेजने में त्रुटि हुई। कृपया पुनः प्रयास करें या contact@lunarcode.tech पर संपर्क करें।",
  //     },

  //     product_page: {
  //       badge: "प्रोडक्शन-ग्रेड इकोसिस्टम्स",
  //       hero_title_start: "वास्तविक प्रभाव के लिए",
  //       hero_title_highlight: "निर्मित उत्पाद",
  //       hero_subtitle:
  //         "लूनरकोड में, हम केवल सॉफ़्टवेयर नहीं बनाते - हम ऐसे सिस्टम तैयार करते हैं जो वास्तविक समस्याओं को हल करते हैं, मांग के साथ स्केल होते हैं और मापने योग्य मूल्य प्रदान करते हैं।",
  //       btn_explore: "उत्पाद देखें",
  //       btn_demo: "डेमो का अनुरोध करें",
  //       status_badge: "सिस्टम परिनियोजन: सक्रिय",
  //       uptime_label: "अपटाइम 99.9%",
  //       scalability_label: "स्केलेबिलिटी: ऑटो",
  //       hexawash: {
  //         tag: "सक्रिय परिनियोजन",
  //         title: "HexaWash",
  //         subtitle: "स्मार्ट लॉन्ड्री प्रबंधन प्लेटफॉर्म",
  //         desc: "हॉस्टल, डॉर्मिटरी और शेयर्ड जगहों के लिए क्लाउड-कनेक्टेड लॉन्ड्री इकोसिस्टम। यह सहज मशीन उपयोग, डिजिटल भुगतान और रीयल-टाइम मॉनिटरिंग सक्षम करता है।",
  //         impact:
  //           "पारंपरिक लॉन्ड्री सिस्टम को स्वचालित, राजस्व-उत्पादक स्मार्ट इंफ्रास्ट्रक्चर में बदलता है।",
  //         f1: "IoT-सक्षम मशीन नियंत्रण (स्मार्ट प्लग एकीकरण)",
  //         f2: "रीयल-टाइम मशीन उपलब्धता और टाइमर",
  //         f3: "डिजिटल वॉलेट और भुगतान (UPI / स्ट्राइप तैयार)",
  //         f4: "निगरानी और नियंत्रण के लिए व्यवस्थापक डैशबोर्ड",
  //         f5: "मल्टी-टेनेंट आर्किटेक्चर (विभिन्न स्थानों पर स्केलिंग)",
  //       },
  //       sapsecurity: {
  //         tag: "एंटरप्राइज गवर्नेंस",
  //         title: "SAP Security Suite",
  //         subtitle: "एक्सेस गवर्नेंस और ऑडिट प्लेटफॉर्म",
  //         desc: "महत्वपूर्ण एक्सेस, फायरफाइटर आईडी और रोल री-सर्टिफिकेशन को बेहतर दृश्यता और अनुपालन के साथ प्रबंधित करने के लिए एंटरप्राइज-ग्रेड समाधान।",
  //         impact:
  //           "प्राधिकरण जोखिमों को समाप्त करता है और कॉर्पोरेट SAP सिस्टम के ऑडिट को स्वचालित करता है।",
  //         f1: "फायरफाइटर आईडी आपातकालीन मॉनिटरिंग और लॉग्स",
  //         f2: "रोल री-सर्टिफिकेशन स्वचालित डैशबोर्ड",
  //         f3: "हाई-परफॉर्मेंस SAP OData API एकीकरण",
  //         f4: "ऑडिट-तैयार लॉग्स और त्वरित रिपोर्टिंग",
  //       },
  //       custom_solutions: {
  //         badge: "कस्टम इंजीनियरिंग",
  //         title: "आपकी ज़रूरतों के अनुसार कस्टम समाधान",
  //         subtitle:
  //           "यदि आपके व्यवसाय में कोई समस्या है, तो हम उसे हल करने के लिए सिस्टम बनाते हैं। विशिष्ट संचालन के लिए तैयार किया गया डेवलपमेंट।",
  //         c1_title: "फुल स्टैक वेब",
  //         c1_desc: "MERN / Next.js / क्लाउड सिस्टम",
  //         c2_title: "IoT एकीकरण",
  //         c2_desc: "हार्डवेयर और सेंसर ब्रिज",
  //         c3_title: "AI ऑटोमेशन",
  //         c3_desc: "ऑटोनॉमस एजेंट्स और LLM",
  //         c4_title: "SaaS उत्पाद",
  //         c4_desc: "मल्टी-टेनेंट स्केलेबल कोर",
  //         c5_title: "API और डेटा सुरक्षा",
  //         c5_desc: "ज़ीरो-ट्रस्ट एन्क्रिप्शन और ऑडिटिंग",
  //       },
  //       approach: {
  //         badge: "इंजीनियरिंग दर्शन",
  //         title: "हमारा डेवलपमेंट दृष्टिकोण",
  //         a1_title: "स्केलेबल",
  //         a1_desc:
  //           "व्यावसायिक मांग के साथ आसानी से विकसित होने के लिए डिज़ाइन किया गया।",
  //         a2_title: "सुरक्षित",
  //         a2_desc: "मजबूत बैकएंड डेटा सुरक्षा और एन्क्रिप्शन प्रोटोकॉल।",
  //         a3_title: "व्यावहारिक",
  //         a3_desc: "बिना किसी दिखावे के — सीधे वास्तविक समस्याओं को हल करना।",
  //         a4_title: "कुशल",
  //         a4_desc: "उच्च गति, कम लेटेंसी और अनुकूलित क्लाउड लागत।",
  //       },
  //       why_choose: {
  //         badge: "लूनरकोड को क्यों चुनें",
  //         title: "इंजीनियरों द्वारा निर्मित, सिर्फ फ्रीलांसिंग नहीं",
  //         p1: "वास्तविक दुनिया का उत्पाद अनुभव (सिर्फ सामान्य प्रोजेक्ट्स नहीं)",
  //         p2: "मजबूत बैकएंड + सिस्टम डिज़ाइन पर गहरा ध्यान",
  //         p3: "तेज़ निष्पादन और पुनरावृत्त (Agile) विकास",
  //         p4: "ऐसे इंजीनियरों द्वारा निर्मित जो तकनीक और व्यापार दोनों समझते हैं",
  //       },
  //       cta_banner: {
  //         title: "कुछ शक्तिशाली बनाने के लिए तैयार हैं?",
  //         subtitle:
  //           "लूनरकोड आपको तेज़ी से आगे बढ़ने और पहले दिन से सही तकनीक बनाने में मदद करने के लिए तैयार है।",
  //         btn_call: "कॉल शेड्यूल करें",
  //         btn_contact: "इंजीनियरिंग टीम से संपर्क करें",
  //       },
  //     },
  //     service_page: {
  //       badge: "विश्वसनीय इंजीनियरिंग",
  //       hero_title_start: "व्यापक तकनीकी",
  //       hero_title_highlight: "विशेषज्ञता",
  //       hero_subtitle:
  //         "लूनरकोड टेक आधुनिक डिजिटल ट्रांसफॉर्मेशन के लिए आवश्यक हाई-परफॉर्मेंस इंफ्रास्ट्रक्चर और कस्टम सॉफ्टवेयर सिस्टम प्रदान करता है। हम विश्वसनीयता विकसित करने में माहिर हैं।",
  //       cta_audit: "तकनीकी ऑडिट का अनुरोध करें",
  //       custom_software: {
  //         title: "कस्टम सॉफ्टवेयर डेवलपमेंट",
  //         p1: "हम आपके ऑपरेशनल डीएनए के अनुकूल विशेष समाधान डिज़ाइन और विकसित करते हैं। मानक समाधान अक्सर रुकावटें पैदा करते हैं; हम तीव्र विकास के मार्ग बनाते हैं।",
  //         p2: "हमारा इंजीनियरिंग फोकस यह सुनिश्चित करता है कि कोड की प्रत्येक पंक्ति एक व्यावसायिक उद्देश्य की पूर्ति करे।",
  //         tag_label: "डेवलपमेंट लाइफसाइकिल",
  //         tags: "एजाइल • CI/CD • सिक्योर ऑप्स",
  //       },
  //       ai_automation: {
  //         title: "AI और ऑटोमेशन",
  //         p1: "हम आपके ऑपरेशनल डीएनए के अनुकूल विशेष समाधान डिज़ाइन और विकसित करते हैं। मानक समाधान अक्सर रुकावटें पैदा करते हैं; हम तीव्र विकास के मार्ग बनाते हैं।",
  //         p2: "हमारा इंजीनियरिंग फोकस यह सुनिश्चित करता है कि कोड की प्रत्येक पंक्ति एक व्यावसायिक उद्देश्य की पूर्ति करे।",
  //         tag_label: "इंटेलिजेंस इंजन",
  //         tags: "न्यूरल नेटवर्क्स • ML ऑप्स",
  //       },
  //       saas_dev: {
  //         title: "SaaS डेवलपमेंट",
  //         p1: "हम आपके ऑपरेशनल डीएनए के अनुकूल विशेष समाधान डिज़ाइन और विकसित करते हैं। मानक समाधान अक्सर रुकावटें पैदा करते हैं; हम तीव्र विकास के मार्ग बनाते हैं।",
  //         p2: "हमारा इंजीनियरिंग फोकस यह सुनिश्चित करता है कि कोड की प्रत्येक पंक्ति एक व्यावसायिक उद्देश्य की पूर्ति करे।",
  //         tag_label: "प्लेटफ़ॉर्म विश्वसनीयता",
  //         tags: "मल्टी-टेनेंट • 99.9% अपटाइम",
  //       },
  //       cloud_infra: {
  //         title: "क्लाउड इंफ्रास्ट्रक्चर",
  //         p1: "हम आपके ऑपरेशनल डीएनए के अनुकूल विशेष समाधान डिज़ाइन और विकसित करते हैं। मानक समाधान अक्सर रुकावटें पैदा करते हैं; हम तीव्र विकास के मार्ग बनाते हैं।",
  //         p2: "हमारा इंजीनियरिंग फोकस यह सुनिश्चित करता है कि कोड की प्रत्येक पंक्ति एक व्यावसायिक उद्देश्य की पूर्ति करे।",
  //         tag_label: "स्केल इंजन",
  //         tags: "कुबेरनेट्स • ज़ीरो-ट्रस्ट क्लाउड",
  //       },
  //     },

  //     about_page: {
  //       badge: "अग्रणी सॉफ्टवेयर आर्किटेक्चर",
  //       hero_title_start: "व्यवसायों को सशक्त बनाएं",
  //       hero_title_highlight: "लूनरकोड इनोवेशन के साथ",
  //       hero_subtitle:
  //         "लूनरकोड टेक एक आधुनिक आईटी समाधान कंपनी है जो इनोवेटिव डिजिटल प्रोडक्ट्स और एडवांस टेक्नोलॉजी सेवाएं प्रदान करने के लिए समर्पित है।",

  //       overview_badge: "कंपनी ओवरव्यू",
  //       overview_title:
  //         "तीव्र गति से विकसित होते डिजिटल युग के लिए विश्वसनीय समाधान",
  //       overview_p1:
  //         "आज के तेजी से बदलते डिजिटल युग में संगठनों को ऐसे तकनीकी भागीदारों की आवश्यकता है जो उनकी चुनौतियों को समझें और भरोसेमंद समाधान दें।",
  //       overview_p2:
  //         "स्टार्टअप्स से लेकर बड़े उद्यमों तक, हम उनकी अनूठी आवश्यकताओं के अनुसार सुरक्षित, उच्च-प्रदर्शन और सहज ऐप्लिकेशन्स बनाकर उनका समर्थन करते हैं।",

  //       story_badge: "हमारी कहानी",
  //       story_title: "जिज्ञासा, जुनून और निरंतर विकास",
  //       story_p1:
  //         "तकनीक को सरल बनाने के विजन के साथ स्थापित, लूनरकोड टेक उत्साही डेवलपर्स की एक छोटी टीम के रूप में शुरू हुआ था। आज हम जिज्ञासा और सीखने की ललक से प्रेरित एक समर्पित तकनीकी भागीदार बन चुके हैं।",
  //       story_p2:
  //         "हमारा मानना है कि तकनीक को सिर्फ समस्याओं का समाधान ही नहीं करना चाहिए, बल्कि नवाचार और विकास की नई संभावनाएं भी खोलनी चाहिए।",

  //       mission_title: "हमारा मिशन",
  //       mission_desc:
  //         "इनोवेटिव टेक्नोलॉजी समाधानों के माध्यम से व्यवसायों को सशक्त बनाना जो कार्यकुशलता में सुधार करें, ग्राहक अनुभव को बढ़ाएं और सतत विकास का समर्थन करें।",

  //       vision_title: "हमारा विजन",
  //       vision_desc:
  //         "नवाचार, गुणवत्ता और तकनीकी उत्कृष्टता के लिए विश्व स्तर पर पहचाना जाने वाला आईटी समाधान प्रदाता बनना और संगठनों को उनकी पूरी क्षमता तक पहुँचने में मदद करना।",

  //       values_badge: "हमारे मूल मूल्य",
  //       values_heading:
  //         "वे सिद्धांत जो हमारे द्वारा लिखे गए कोड की हर लाइन का मार्गदर्शन करते हैं",
  //       values: {
  //         val_1_title: "नवाचार (Innovation)",
  //         val_1_desc:
  //           "हम आधुनिक समाधान तैयार करने के लिए लगातार नई तकनीकों और रचनात्मक दृष्टिकोणों का पता लगाते हैं जो व्यवसायों को आगे रखते हैं।",
  //         val_2_title: "गुणवत्ता (Quality)",
  //         val_2_desc:
  //           "दीर्घकालिक सफलता सुनिश्चित करने के लिए प्रत्येक प्रोजेक्ट डिज़ाइन, प्रदर्शन और विश्वसनीयता के उच्च मानकों का पालन करता है।",
  //         val_3_title: "सहयोग (Collaboration)",
  //         val_3_desc:
  //           "हम ग्राहकों के लक्ष्यों और चुनौतियों को समझने और उनकी आवश्यकताओं को पूरा करने वाले समाधान बनाने के लिए उनके साथ मिलकर काम करते हैं।",
  //         val_4_title: "सत्यनिष्ठा (Integrity)",
  //         val_4_desc:
  //           "पारदर्शिता, ईमानदारी और भरोसा हमारे द्वारा ग्राहकों के साथ बनाए गए प्रत्येक साझेदारी की नींव हैं।",
  //         val_5_title: "निरंतर सीखना (Continuous Learning)",
  //         val_5_desc:
  //           "प्रौद्योगिकी तेजी से विकसित हो रही है, और हम उद्योग में आगे रहने के लिए अपने कौशल को लगातार अपग्रेड करते रहते हैं।",
  //       },

  //       expertise_badge: "हमारा तकनीकी डोमेन",
  //       expertise_heading: "आधुनिक आवश्यकताओं के लिए विशेष इंजीनियरिंग",
  //       expertise_sub:
  //         "हम आधुनिक फ्रेमवर्क और स्केलेबल आर्किटेक्चर का उपयोग करके अत्याधुनिक तकनीक समाधान विकसित करने में विशेषज्ञ हैं।",
  //       expertise_items: {
  //         e1: "कस्टम सॉफ्टवेयर डेवलपमेंट",
  //         e2: "फुल स्टैक वेब डेवलपमेंट",
  //         e3: "AI और मशीन लर्निंग",
  //         e4: "SaaS ऐप्लिकेशन डेवलपमेंट",
  //         e5: "क्लाउड इंफ्रास्ट्रक्चर",
  //         e6: "API और सिस्टम इंटीग्रेशन",
  //       },

  //       approach_badge: "एक्ज़ीक्यूशन पाइपलाइन",
  //       approach_heading: "हमारा डेवलपमेंट दृष्टिकोण",
  //       steps: {
  //         s1_title: "1. आवश्यकताओं को समझना",
  //         s1_desc:
  //           "व्यावसायिक आवश्यकताओं का विश्लेषण करना और प्रोजेक्ट के दायरे को स्पष्ट रूप से परिभाषित करना।",
  //         s2_title: "2. रणनीतिक योजना",
  //         s2_desc:
  //           "कुशल परियोजना निष्पादन सुनिश्चित करने के लिए एक विस्तृत डेवलपमेंट रोडमैप तैयार करना।",
  //         s3_title: "3. एजाइल डेवलपमेंट",
  //         s3_desc:
  //           "सॉफ़्टवेयर को पुनरावृत्त (iterative) चरणों में विकसित करने के लिए आधुनिक एजाइल कार्यप्रणाली का उपयोग करना।",
  //         s4_title: "4. टेस्टिंग और QA",
  //         s4_desc:
  //           "विश्वसनीयता, सुरक्षा और प्रदर्शन सुनिश्चित करने के लिए कठोर परीक्षण।",
  //         s5_title: "5. डिप्लॉयमेंट और सपोर्ट",
  //         s5_desc:
  //           "निर्बाध डिप्लॉयमेंट और दीर्घकालिक सफलता के लिए निरंतर सहायता व सपोर्ट।",
  //       },

  //       why_badge: "हमारा लाभ",
  //       why_heading: "व्यवसाय हमें क्यों चुनते हैं",
  //       why_points: {
  //         w1: "नवाचारी समाधान",
  //         w2: "अनुभवी टीम",
  //         w3: "स्केलेबल और सुरक्षित",
  //         w4: "ग्राहक-केंद्रित",
  //         w5: "पारदर्शी संचार",
  //         w6: "विश्वसनीय सपोर्ट",
  //       },

  //       commitment_title: "नवाचार के प्रति हमारी प्रतिबद्धता",
  //       commitment_desc:
  //         "तकनीक निरंतर बदल रही है। हम क्लाउड कंप्यूटिंग और AI जैसे नवीनतम उपकरणों और फ्रेमवर्क को अपनाकर आगे रहते हैं। हमारा लक्ष्य केवल सॉफ्टवेयर वितरित करना नहीं बल्कि दीर्घकालिक साझेदारी बनाना है।",
  //     },

  //     nav: {
  //       home: "होम",
  //       about: "हमारे बारे में",
  //       services: "सेवाएं",
  //       products: "उत्पाद",
  //       contact: "संपर्क करें",
  //       launch_project: "प्रोजेक्ट शुरू करें",
  //     },
  //     hero: {
  //       badge: "नेक्स्ट-जेन लूनर इनोवेशन",
  //       title_start: "भविष्य का निर्माण करें",
  //       title_highlight: "लूनरकोड के साथ",
  //       subtitle:
  //         "हम अत्याधुनिक स्केलेबल वेब ऐप्लिकेशन्स, AI सिस्टम्स, SaaS प्लेटफॉर्म और क्लाउड सॉल्यूशन्स तैयार करते हैं जो आपके बिज़नेस को नई ऊंचाइयों तक पहुंचाते हैं।",
  //       cta_primary: "प्रोजेक्ट शुरू करें",
  //       cta_secondary: "सेवाएं देखें",
  //       stat_uptime: "99.9% अपटाइम आर्किटेक्चर",
  //       stat_projects: "50+ एंटरप्राइज डिप्लॉयमेंट्स",
  //       stat_satisfaction: "100% क्लाइंट संतुष्टि",
  //     },
  //     collaboration: {
  //       badge: "पार्टनरशिप और इकोसिस्टम",
  //       heading: "अग्रणी टेक दिग्गजों और इनोवेटर्स के साथ सहयोग",
  //     },
  //     services: {
  //       badge: "हमारी प्रमुख सेवाएं",
  //       title: "उच्च-प्रदर्शन डिजिटल समाधान",
  //       subtitle:
  //         "स्वचालित न्यूरल वर्कफ़्लो से लेकर हाई-स्पीड क्लाउड इंफ्रास्ट्रक्चर तक, हम ऐसा सॉफ़्टवेयर बनाते हैं जो तीव्र विकास को गति देता है।",
  //       custom_software: {
  //         title: "कस्टम सॉफ्टवेयर डेवलपमेंट",
  //         desc: "उच्च स्केलेबिलिटी, शून्य डाउनटाइम और सहज प्रदर्शन के लिए तैयार की गई फुल-स्टैक आर्किटेक्चर।",
  //       },
  //       ai_automation: {
  //         title: "AI और ऑटोमेशन सेवाएं",
  //         desc: "उद्यमों के लिए बुद्धिमान मल्टी-एजेंट सिस्टम, स्वचालित वर्कफ़्लो और कस्टम LLM एकीकरण।",
  //       },
  //       saas_dev: {
  //         title: "SaaS प्लेटफॉर्म इंजीनियरिंग",
  //         desc: "तेज़ यूज़र ऑनबोर्डिंग, सुरक्षा और वैश्विक पहुंच के लिए डिज़ाइन किए गए मल्टी-टेनेंट क्लाउड प्लेटफ़ॉर्म।",
  //       },
  //       cloud_infra: {
  //         title: "क्लाउड इंफ्रास्ट्रक्चर और DevOps",
  //         desc: "विश्वसनीय CI/CD पाइपलाइन, कंटेनराइज़्ड ऑर्केस्ट्रेशन और लागत प्रभावी क्लाउड इंजीनियरिंग।",
  //       },
  //       security: {
  //         title: "API और एंटरप्राइज सुरक्षा",
  //         desc: "एंड-टू-एंड सुरक्षा परीक्षण, मजबूत माइक्रोसर्विसेज और कड़े अनुपालन मानक।",
  //       },
  //       learn_more: "और जानें",
  //     },
  //     mission: {
  //       badge: "हमारा मिशन",
  //       title: "डीप टेक और असीमित व्यावसायिक क्षमता का संयोजन",
  //       desc_1:
  //         "लूनरकोड में, हमारा मानना ​​है कि सॉफ़्टवेयर को केवल प्रक्रियाएं नहीं चलानी चाहिए—इसे संगठनों को नई सीमाओं की ओर ले जाना चाहिए।",
  //       desc_2:
  //         "हमारा उद्देश्य दूरदर्शी व्यवसायों को सशक्त कोडबेस, प्रेडिक्टिव इंटेलिजेंस और सुरक्षित इंफ्रास्ट्रक्चर प्रदान करना है।",
  //       point_1: "अत्यधिक विश्वसनीय कोड",
  //       point_2: "हाइपर-स्केलेबल आर्किटेक्चर",
  //       point_3: "स्वायत्त AI गतिशीलता",
  //     },
  //     trusted: {
  //       badge: "उत्कृष्टता का प्रमाण",
  //       title: "दुनिया भर के इनोवेटर्स का भरोसा",
  //       subtitle:
  //         "एंटरप्राइज-ग्रेड विश्वसनीयता और शीर्ष इंजीनियरिंग मानकों के साथ प्रोडक्शन सिस्टम को सशक्त बनाना।",
  //       metric_1_val: "99.99%",
  //       metric_1_label: "सिस्टम विश्वसनीयता",
  //       metric_2_val: "10M+",
  //       metric_2_label: "दैनिक API ट्रांसमिशन",
  //       metric_3_val: "4.9/5",
  //       metric_3_label: "क्लाइंट रेटिंग",
  //       metric_4_val: "15ms",
  //       metric_4_label: "औसत वैश्विक लेटेंसी",
  //     },
  //     team: {
  //       badge: "हमारे विज़नरी",
  //       title: "द माइंड्स बिहाइंड लूनरकोड",
  //       subtitle:
  //         "इंजीनियर्स, सिस्टम आर्किटेक्ट्स और स्ट्रैटजिस्ट्स जो डिजिटल परफेक्शन देने के लिए समर्पित हैं।",
  //       role_founder: "चीफ टेक्नोलॉजी ऑफिसर और लीड आर्किटेक्ट",
  //       role_ai: "हेड ऑफ AI ऑटोमेशन और न्यूरल सिस्टम्स",
  //       role_cloud: "प्रिंसिपल क्लाउड इंफ्रास्ट्रक्चर आर्किटेक्ट",
  //     },
  //     footer: {
  //       tagline:
  //         "बुद्धिमान सॉफ्टवेयर सिस्टम, SaaS प्लेटफॉर्म, AI ऑटोमेशन और स्केलेबल क्लाउड समाधानों का निर्माण।",
  //       quick_links: "त्वरित नेविगेशन",
  //       services_heading: "प्रमुख समाधान",
  //       services_items: {
  //         custom_software: "कस्टम सॉफ्टवेयर",
  //         ai_automation: "AI ऑटोमेशन",
  //         saas_dev: "SaaS डेवलपमेंट",
  //         cloud_infra: "क्लाउड इन्फ्रास्ट्रक्चर",
  //         api_security: "API और एंटरप्राइज सुरक्षा",
  //       },
  //       newsletter_title: "तकनीक में आगे रहें",
  //       newsletter_sub:
  //         "AI आर्किटेक्चर और SaaS इंजीनियरिंग अपडेट के लिए सब्सक्राइब करें।",
  //       placeholder_email: "अपना ईमेल दर्ज करें",
  //       btn_subscribe: "सब्सक्राइब करें",
  //       rights: "सर्वाधिकार सुरक्षित।",
  //       privacy: "गोपनीयता नीति",
  //       terms: "सेवा की शर्तें",
  //     },
  //   },
  // },
  de: {
    translation: {


      nav: {
        home: "Startseite",
        about: "Über uns",
        services: "Dienstleistungen",
        products: "Produkte",
        contact: "Kontakt",
        launch_project: "Projekt starten"
      },
      blog: {
        brand_subtitle: "Engineering & Cloud",
        nav_all_articles: "Alle Artikel",
        nav_featured_story: "Top-Beitrag",
        about_lunarcode: "Über LunarCode",
        featured_nav_mobile: "Fokus: Web-Apps für Unternehmen",
        share_toast_title: "Separater Link kopiert!",
        share_toast_desc: "Eindeutige Blog-URL kann geteilt werden.",
        footer_copyright: "© {{year}} LunarCode. Softwareentwicklung, SaaS-Engineering & Cloud-Infrastruktur.",
        footer_preserved: "Vollständiger Inhalt unverändert",
        footer_articles: "Artikel",
        footer_web_apps: "Webanwendungen",

        feed: {
          badge: "Digitale Transformation & Systemarchitektur",
          hero_title_1: "Entwicklung",
          hero_title_highlight: "intelligenter Lösungen",
          hero_title_2: "für schnelles Wachstum.",
          hero_desc: "Entdecken Sie detaillierte technische Leitfäden, skalierbare Architekturen und strategische Einblicke des LunarCode-Teams.",
          featured_badge: "Ausgewählte Publikation",
          read_full_article: "Vollständigen Artikel lesen",
          special_report: "SONDERBERICHT",
          special_report_sub: "Umfassende 6-teilige Analyse",
          sr_item_1: "Aufgabenautomatisierung & Datenfluss",
          sr_item_2: "Kriterien zur Partnerauswahl",
          sr_item_3: "Cloud-Infrastruktur & Skalierung",
          sr_item_4: "Kompetenzen von LunarCode",
          sr_footer: "Enthält den vollständigen redaktionellen Text & Umsetzungsschritte.",
          search_placeholder: "Themen, Stichwörter, Tags suchen...",
          no_articles_title: "Keine Artikel entsprechen Ihrer Suche",
          no_articles_desc: "Versuchen Sie einen anderen Begriff oder setzen Sie den Kategoriefilter zurück.",
          reset_filters: "Filter zurücksetzen"
        },

        single: {
          back_to_all: "Zurück zu allen Artikeln",
          bookmark_save: "Artikel merken",
          bookmark_remove: "Lesezeichen entfernen",
          share_link_btn: "Link teilen",
          cta_badge: "Zusammenarbeit mit LunarCode",
          cta_title: "Bereit für den Aufbau einer intelligenteren, skalierbaren Webanwendung?",
          cta_desc: "LunarCode bietet ganzheitliche Softwareentwicklung, SaaS-Engineering, KI- und Workflow-Automatisierung, Cloud-Infrastruktur und nahtlose Systemintegration.",
          cta_share_guide: "Architektur-Guide teilen",
          cta_browse_more: "Weitere Themen entdecken",
          toc_title: "Inhaltsverzeichnis",
          routing_title: "Separater Link & Routing",
          routing_desc: "Dieser Artikel ist unter seinem eigenen URL-Hash abrufbar:",
          copy_perm_url: "Permanente URL kopieren",
          editorial_title: "LunarCode Redaktion",
          editorial_role: "Engineering & Cloud",
          editorial_desc: "Spezialisiert auf Cloud-Infrastruktur, Workflow-Automatisierung und individuelle Websoftware-Lösungen."
        },

        categories: {
          all: "Alle",
          software_dev: "Softwareentwicklung",
          cloud_infra: "Cloud-Infrastruktur",
          ai_automation: "Automatisierung & KI"
        },

        posts: {
          web_apps: {
            title: "Wie Webanwendungen Unternehmen dabei helfen, intelligenter zu arbeiten und schneller zu wachsen",
            category: "Softwareentwicklung",
            readTime: "7 Min. Lesezeit",
            date: "16. Oktober 2026",
            author_name: "LunarCode Insights",
            author_role: "Engineering & Cloud-Architektur",
            excerpt: "Ein Unternehmen zu führen bedeutet, Kunden zu betreuen, Informationen zu strukturieren, tägliche Aufgaben abzuwickeln und Entscheidungen zu treffen. Erfahren Sie, wie Web-Apps und Cloud-Architektur Abläufe automatisieren und Skalierbarkeit fördern.",
            lead: "Running a business involves managing customers, organizing information, handling daily tasks, and making decisions that support growth. When these activities depend on spreadsheets, manual work, or disconnected tools, even simple processes can become time-consuming.",
            intro1: "Hier können Webanwendungen den entscheidenden Unterschied machen. Sie helfen Unternehmen, ihre Abläufe zu steuern, das Kundenerlebnis zu verbessern und zentrale Aktivitäten an einem einzigen Ort zu bündeln.",
            intro2: "Für Unternehmen, die ihre digitalen Abläufe optimieren möchten, ist die Zusammenarbeit mit einem zuverlässigen Webentwicklungsunternehmen ein praktischer Schritt zum Aufbau von Software, die genau ihren individuellen Anforderungen entspricht.",
            intro3: "Doch wie genau helfen Webanwendungen einem Unternehmen dabei, intelligenter zu arbeiten? Lassen Sie uns die Vorteile, die Rolle der Cloud-Technologie und die Bedeutung vorausschauender Wachstumsplanung genauer betrachten.",

            sec1_title: "Was ist eine Webanwendung?",
            sec1_p1: "Eine Webanwendung ist ein Softwareprogramm, auf das Benutzer über einen Webbrowser zugreifen. Im Gegensatz zu einer einfachen Website, die überwiegend Informationen darstellt, ermöglicht eine Webanwendung das Ausführen interaktiver Aufgaben und den Zugriff auf spezifische Funktionen.",
            sec1_p2: "Typische Beispiele sind Online-Buchungssysteme, Kundenmanagement-Plattformen, Mitarbeiter-Dashboards, Lagerverwaltungssysteme und E-Commerce-Plattformen.",
            sec1_p3: "Ein Dienstleistungsunternehmen könnte eine Webanwendung beispielsweise nutzen, um Termine zu verwalten, Kundendaten zu sichern, Zahlungen nachzuverfolgen und Dienstpläne zu koordinieren. Statt zwischen vielen verschiedenen Werkzeugen zu wechseln, greift das Team zentral auf alle benötigten Daten zu.",
            sec1_p4: "Das Hauptziel ist einfach: die tägliche Arbeit einfacher, strukturierter und effizienter zu gestalten.",

            sec2_title: "Wie Webanwendungen Unternehmen helfen, intelligenter zu arbeiten",
            sec2_p1: "Jedes Unternehmen besitzt Prozesse, die viel Zeit kosten, sich jedoch weitaus effizienter steuern ließen. Eine durchdachte Webanwendung vereinfacht diese Aktivitäten spürbar.",

            sub1_title: "Wiederkehrende Aufgaben automatisieren",
            sub1_body: "Viele Unternehmen verwenden viele Stunden auf Routineaufgaben wie Dateneingabe, Berichtserstellung, Datenaktualisierung und Benachrichtigungen.\n\nEine Webanwendung kann geeignete Prozesse automatisieren und den manuellen Aufwand deutlich reduzieren. So bestätigt ein Online-Buchungssystem Termine vollautomatisch, während eine Warenwirtschaft den Lagerbestand bei Bestelleingang in Echtzeit anpasst.\n\nDadurch gewinnen Mitarbeiter wertvolle Zeit für Kundenservice, strategische Planung und andere Kernaufgaben.",

            sub2_title: "Unternehmensdaten strukturiert organisieren",
            sub2_body: "Sind Daten über diverse Tabellen und Anwendungen verteilt, wird das Auffinden relevanter Details oft mühsam.\n\nEine maßgeschneiderte Webanwendung führt alle geschäftsrelevanten Daten in einem zentralen System zusammen. Mitarbeiter können je nach Berechtigung Aufträge prüfen, Kundenakten einsehen, Projekte verfolgen und Berichte direkt über ein einziges Dashboard abrufen.\n\nStrukturierte Daten helfen auch der Geschäftsleitung, betriebliche Abläufe transparent zu analysieren und fundierte Entscheidungen zu treffen.",

            sub3_title: "Das Kundenerlebnis verbessern",
            sub3_body: "Kunden schätzen Komfort. Sie möchten Informationen schnell finden, Dienstleistungen unkompliziert nutzen und Transaktionen ohne Verzögerung abschließen.\n\nWebanwendungen bieten Funktionen wie Kundenkonten, Online-Zahlungen, Terminbuchungen, Sendungsverfolgung und intuitive Self-Service-Portale.\n\nEin Kunde, der eine Dienstleistung online bucht, ohne mehrere Telefonate führen zu müssen, erlebt einen deutlich reibungsloseren Ablauf.\n\nWenn Anwendungen auf echte Kundenbedürfnisse zugeschnitten sind, schaffen sie gleichbleibend verlässliche und komfortable Services.",

            sub4_title: "Dezentrale und Remote-Teams unterstützen",
            sub4_body: "Viele Unternehmen beschäftigen Mitarbeiter an verschiedenen Standorten. Webanwendungen bieten berechtigten Teammitgliedern über eine gesicherte Internetverbindung flexiblen Zugriff auf alle benötigten Daten und Arbeitsmittel.\n\nProjekt-Dashboards, geteilte Arbeitsbereiche und Online-Reporting-Tools helfen Teams, Aufgaben präzise zu koordinieren und Fortschritte verlässlich im Blick zu behalten.\n\nDank passender Zugriffssteuerungen und Sicherheitsmaßnahmen können Unternehmen flexible Arbeitsmodelle unterstützen, ohne die Transparenz über zentrale Abläufe zu verlieren.",

            sec3_title: "Warum die Wahl des richtigen Entwicklungspartners entscheidend ist",
            sec3_p1: "Jedes Unternehmen arbeitet unterschiedlich. Eine Lösung, die für einen Online-Händler ideal ist, eignet sich oft nicht für einen produzierenden Betrieb oder einen professionellen Dienstleister.",
            sec3_p2: "Ein verlässliches Webentwicklungsunternehmen nimmt sich die Zeit, diese Unterschiede im Detail zu verstehen, bevor eine Empfehlung ausgesprochen wird.",
            sec3_p3: "Der Prozess beginnt mit der Definition der Geschäftsziele, der Analyse der Nutzeranforderungen und der Auswahl wesentlicher Features. Anschließend planen, gestalten und programmieren Entwickler die Anwendung und testen sie gründlich vor dem Rollout.",
            sec3_p4: "Beachten Sie bei der Auswahl eines Entwicklungspartners folgende Faktoren:",
            bp1_title: "Geschäftliches Verständnis",
            bp1_text: "Das Team sollte die eigentliche geschäftliche Herausforderung verstehen, anstatt lediglich technische Funktionen vorzuschlagen.",
            bp2_title: "Benutzerfreundliches Design",
            bp2_text: "Die Anwendung muss intuitiv bedienbar sein und auf allen relevanten Endgeräten reibungslos funktionieren.",
            bp3_title: "Sicherheit",
            bp3_text: "Rollenbasierte Berechtigungen, sichere Authentifizierung und standardkonforme Datenschutzmaßnahmen müssen von Anfang an integriert sein.",
            bp4_title: "Integrationsfähigkeit",
            bp4_text: "Die Anwendung sollte sich flexibel an bestehende Werkzeuge, Bezahlsysteme oder Drittanbieter-Schnittstellen anbinden lassen.",
            bp5_title: "Kontinuierlicher Support",
            bp5_text: "Regelmäßige Updates, vorausschauende Wartung, Fehlerbehebungen und Erweiterungen sollten von Beginn an fest eingeplant werden.",
            sec3_conclusion: "Die beste Lösung ist nicht zwangsläufig die mit den meisten Features – sondern jene, die Ihre individuellen Herausforderungen nachhaltig löst und wartungsfreundlich bleibt.",

            sec4_title: "Die Rolle moderner Cloud-Infrastruktur",
            sec4_p1: "Eine Webanwendung benötigt eine stabile Betriebsumgebung. Dazu gehören Rechenressourcen, Speicherplatz, Netzwerkanbindung und alle unterstützenden Systeme zur Bereitstellung der Software.",
            sec4_p2: "Cloud-Infrastruktur-Services ermöglichen es Unternehmen, diese Ressourcen flexibel zu nutzen, ohne die physische Serverhardware selbst betreiben zu müssen.",
            sec4_p3: "Cloud-Infrastruktur kann mehrere entscheidende Vorteile bieten.",
            sec4_p4: "Erstens können Ressourcen dynamisch angepasst werden, wenn sich die Anforderungen ändern – etwa bei Lastspitzen oder wenn ein Unternehmen seine Services erweitert.",
            sec4_p5: "Zweitens unterstützt die Cloud automatisierte Deployments, kontinuierliches Monitoring, Backups und schnelle Wiederherstellungsprozesse.",
            sec4_p6: "Drittens erleichtert Cloud-Infrastruktur Entwicklungsteams die Veröffentlichung von Updates und das Management separater Umgebungen.",
            sec4_p7: "Dennoch garantiert die Verlagerung in die Cloud nicht automatisch mehr Leistung oder Sicherheit. Die Infrastruktur muss sauber konzipiert, überwacht und an den konkreten Bedarf angepasst werden.",
            sec4_p8: "Für Unternehmen, die neue Digitalprodukte entwickeln, bildet ein fundiertes Cloud-Setup das unverzichtbare Fundament.",

            sec5_title: "Warum skalierbare Softwarelösungen unverzichtbar sind",
            sec5_p1: "Geschäftswachstum bringt stets veränderte Anforderungen mit sich. Eine Anwendung, die heute für ein kleines Team ausreicht, benötigt mit steigenden Nutzerzahlen mehr Kapazität und erweiterte Funktionen.",
            sec5_p2: "Deshalb sind skalierbare Softwarelösungen so wichtig.",
            sec5_p3: "Skalierbare Software ist so konzipiert, dass sie wachsende Anforderungen bewältigt, ohne bei jedem Entwicklungsschritt komplett neu gebaut werden zu müssen.",
            sec5_p4: "Beispielsweise muss ein Webshop saisonale Besucheranstürme abfangen können. Ein SaaS-Unternehmen führt neue Tarife ein, während ein Dienstleister neue Standorte anbindet.",
            sec5_p5: "Eine vorausschauend geplante Softwarearchitektur vereinfacht all diese Anpassungen spürbar.",
            sec5_p6: "Skalierbarkeit umfasst optimierte Datenbanken, performanten Anwendungscode, erweiterbare Serverkapazitäten und eine modulare Softwarestruktur.",
            sec5_p7: "Es geht darum, zukünftiges Wachstum mitzudenken, ohne die initiale Anwendung unnötig zu überfrachten.",
            sec5_p8: "Durch realistische Planung können Unternehmen vermeidbare technische Barrieren minimieren und spätere Upgrades wirtschaftlich gestalten.",

            sec6_title: "Wie LunarCode Ihr Unternehmen unterstützen kann",
            sec6_p1: "Die Wahl der richtigen Technologie beginnt mit dem klaren Verständnis Ihrer unternehmerischen Ziele.",
            sec6_p2: "LunarCode ist spezialisiert auf Softwareentwicklung, SaaS-Engineering, KI- und Workflow-Automatisierung, Cloud-Infrastruktur und Systemintegration. Diese Kompetenzen unterstützen Unternehmen bei der Entwicklung digitaler Produkte, der Systemoptimierung und effizienteren Abläufen.",
            sec6_p3: "Ganz gleich, ob Sie eine neue Webanwendung planen oder eine bestehende Plattform modernisieren möchten: Ein klares Ziel ist der beste Ausgangspunkt – sei es manuelle Arbeit abzubauen, den Kundenzugang zu vereinfachen, Silos zu verbinden oder Software auf Wachstum vorzubereiten.",
            sec6_p4: "Ein pragmatischer Entwicklungsansatz konzentriert sich zuerst auf die wichtigsten Kernanforderungen, testet Lösungen sorgfältig und lässt gezielten Raum für kontinuierliche Weiterentwicklung."
          },

          cloud_sec: {
            title: "Aufbau resilienter Enterprise-Systeme: Cloud-Sicherheit & Skalierbarkeit",
            category: "Cloud-Infrastruktur",
            readTime: "5 Min. Lesezeit",
            date: "10. Oktober 2026",
            author_name: "LunarCode Security Team",
            author_role: "DevSecOps Division",
            excerpt: "Entdecken Sie fundamentale Säulen moderner Cloud-Umgebungen: Zero-Trust-Prinzipien, Containerisierung, Microservices und automatisierte CI/CD-Pipelines.",
            lead: "Sicherheit und Skalierbarkeit sind keine nachträglichen Erweiterungen, sondern grundlegende Architekturentscheidungen am ersten Tag.",
            intro1: "In einer verteilten Softwarelandschaft erfordert der Schutz von Kundendaten bei gleichbleibend niedrigen Latenzen eine vorausschauende Infrastruktur.",
            intro2: "Durch Cluster-Orchestrierung, dynamische Zugriffstoken und automatisierte Backups schaffen moderne Unternehmen langfristige digitale Resilienz.",
            sec1_title: "Zentrale Cloud-Säulen",
            sec1_p1: "Kontinuierliches Monitoring, minimale Rechtevergabe und automatisierte Tests sichern Services auch bei stark steigender Nutzerlast ab.",
            sec1_p2: "Die Zusammenarbeit mit erfahrenen Architekten stellt sicher, dass jede Softwareebene ohne Ausfallzeiten unabhängig skaliert."
          },

          ai_workflow: {
            title: "Komplexe Workflows automatisieren: Mehr als Tabellenkalkulationen",
            category: "Automatisierung & KI",
            readTime: "4 Min. Lesezeit",
            date: "28. September 2026",
            author_name: "LunarCode AI Lab",
            author_role: "Automation Engineers",
            excerpt: "Wie intelligente Agenten und automatisierte Pipelines Fehler reduzieren, Kundenanfragen beschleunigen und isolierte SaaS-Tools harmonisieren.",
            lead: "Manuelles Kopieren zwischen getrennten Portalen belastet Teams und führt zu wiederkehrenden Datenfehlern.",
            intro1: "Moderne Workflow-Automatisierung verbindet Datensilos, ERPs und Kundenportale über ereignisgesteuerte Schnittstellen und intelligente Pipelines.",
            intro2: "Teams gewinnen monatlich hunderte produktive Stunden zurück, indem sie planbare Routineprozesse an Hintergrunddienste übergeben.",
            sec1_title: "Die transformative Kraft der Automatisierung",
            sec1_p1: "Intelligente Benachrichtigungen, automatische Bestandsanpassungen und Echtzeit-Updates schaffen einen reibungslosen Betriebsablauf.",
            sec1_p2: "LunarCode realisiert individuelle Integrationen, die zeitraubende Routinearbeiten in echte Wettbewerbsvorteile verwandeln."
          }
        }
      },

      "web_app_guide": {
  "badge": "LUNARCODE INSIGHTS // SOFTWARE-ARCHITEKTUR",
  "heroTitle": "Wie Webanwendungen Unternehmen helfen, intelligenter zu arbeiten und schneller zu wachsen",
  "intro": {
    "p1": "Die Führung eines Unternehmens erfordert die Betreuung von Kunden, die Organisation von Informationen, die Bewältigung täglicher Aufgaben und das Treffen von Entscheidungen, die das Wachstum unterstützen. Wenn diese Aktivitäten von Tabellenkalkulationen, manueller Arbeit oder unverbundenen Werkzeugen abhängen, können selbst einfache Prozesse sehr zeitaufwendig werden.",
    "p2": "Hier können Webanwendungen einen entscheidenden Unterschied machen. Sie helfen Unternehmen dabei, ihre Abläufe zu steuern, das Kundenerlebnis zu verbessern und wichtige Aktivitäten an einem zentralen Ort zusammenzuführen.",
    "p3": "Für Unternehmen, die ihre digitalen Betriebsabläufe verbessern möchten, kann die Zusammenarbeit mit einem zuverlässigen Unternehmen für Webanwendungsentwicklung ein praktischer Schritt sein, um Software zu entwickeln, die genau ihren spezifischen Anforderungen entspricht.",
    "p4": "Aber wie genau helfen Webanwendungen einem Unternehmen dabei, intelligenter zu arbeiten? Lassen Sie uns deren Vorteile, die Rolle der Cloud-Technologie und die Bedeutung einer vorausschauenden Wachstumsplanung untersuchen."
  },
  "whatIs": {
    "tag": "DEFINITION & UMFANG",
    "title": "Was ist eine Webanwendung?",
    "p1": "Eine Webanwendung ist ein Softwareprogramm, auf das Benutzer über einen Webbrowser zugreifen. Im Gegensatz zu einer einfachen Website, die hauptsächlich Informationen vermittelt, ermöglicht eine Webanwendung den Benutzern, Aufgaben zu erledigen und mit verschiedenen Funktionen zu interagieren.",
    "p2": "Typische Beispiele sind Online-Buchungssysteme, Kundenverwaltungsplattformen, Mitarbeiter-Dashboards, Tools zur Bestandsverwaltung und E-Commerce-Anwendungen.",
    "purpose": "Der Hauptzweck ist einfach: die tägliche Arbeit einfacher, organisierter und effizienter zu gestalten.",
    "exampleTitle": "Praxisnahes Anwendungsszenario",
    "example": "Beispielsweise könnte ein Dienstleistungsunternehmen eine Webanwendung nutzen, um Termine zu verwalten, Kundendaten zu speichern, Zahlungen nachzuverfolgen und Mitarbeiterpläne zu organisieren. Anstatt zwischen mehreren Tools hin- und herzuwechseln, kann das Team von einer einzigen Plattform aus auf alle benötigten Informationen zugreifen."
  },
  "benefits": {
    "tag": "STRATEGISCHE VORTEILE",
    "title": "Wie Webanwendungen Unternehmen helfen, intelligenter zu arbeiten",
    "subtitle": "Jedes Unternehmen hat Prozesse, die viel Zeit in Anspruch nehmen, sich jedoch weitaus effizienter gestalten lassen. Eine gut konzipierte Webanwendung kann helfen, diese Aktivitäten spürbar zu vereinfachen.",
    "b1": {
      "title": "1. Wiederkehrende Aufgaben automatisieren",
      "p1": "Viele Unternehmen verbringen Stunden mit Routineaufgaben wie Dateneingabe, Berichterstellung, Aktualisierung von Datensätzen und dem Versenden von Benachrichtigungen.",
      "p2": "Eine Webanwendung kann geeignete Aufgaben automatisieren und den manuellen Arbeitsaufwand drastisch reduzieren. Beispielsweise kann ein Online-Buchungssystem Termine automatisch bestätigen, während eine Bestandsanwendung die Lagerbestände bei Auftragsabwicklung eigenständig aktualisiert.",
      "p3": "Dadurch können Mitarbeiter mehr Zeit für Kundenservice, strategische Planung und andere Kernaufgaben aufwenden."
    },
    "b2": {
      "title": "2. Unternehmensdaten organisiert und zentral halten",
      "p1": "Wenn Informationen über mehrere Tabellenkalkulationen und Anwendungen verstreut sind, kann es mühsam sein, die richtigen Details schnell zu finden.",
      "p2": "Eine maßgeschneiderte Webanwendung kann relevante Unternehmensdaten in einem zentralisierten System zusammenführen. Je nach Funktionsumfang können Mitarbeiter Bestellungen prüfen, Kundendatensätze einsehen, Projekte überwachen und Berichte über ein einziges Dashboard vorbereiten.",
      "p3": "Strukturierte Informationen helfen Geschäftsinhabern zudem, ihre Abläufe besser zu verstehen und fundiertere Entscheidungen zu treffen."
    },
    "b3": {
      "title": "3. Das Kundenerlebnis nachhaltig verbessern",
      "p1": "Kunden schätzen Bequemlichkeit. Sie möchten Informationen schnell finden, unkompliziert auf Dienstleistungen zugreifen und Transaktionen ohne unnötige Verzögerungen abschließen.",
      "p2": "Webanwendungen können Funktionen wie Kundenkonten, Online-Zahlungen, Terminplanung, Sendungsverfolgung und Self-Service-Portale bereitstellen. Beispielsweise empfindet ein Kunde, der eine Dienstleistung online buchen kann, ohne mehrere Telefonate zu führen, den Gesamtablauf als wesentlich angenehmer.",
      "p3": "Wenn Anwendungen an realen Kundenbedürfnissen ausgerichtet sind, helfen sie Unternehmen dabei, bequemere und konsistentere Services bereitzustellen.",
      "p4": "Reibungsloser Self-Service verbindet Kundenbindung direkt mit unternehmerischer Glaubwürdigkeit."
    },
    "b4": {
      "title": "4. Remote-Teams und dezentrales Arbeiten unterstützen",
      "p1": "In vielen Unternehmen arbeiten Mitarbeiter von unterschiedlichen Standorten aus. Webanwendungen ermöglichen autorisierten Teammitgliedern über eine sichere Internetverbindung den Zugriff auf alle benötigten Informationen und Tools.",
      "p2": "Projekt-Dashboards, geteilte Arbeitsbereiche und Online-Reporting-Tools helfen Teams dabei, ihre Aktivitäten zu koordinieren und Fortschritte transparent im Auge zu behalten.",
      "p3": "Mit geeigneten Zugriffskontrollen und Sicherheitsmaßnahmen können Unternehmen flexible Arbeitsmodelle unterstützen, ohne den Überblick über wichtige Kernprozesse zu verlieren."
    }
  },
  "agency": {
    "tag": "ENTWICKLUNGSPARTNERSCHAFT",
    "title": "Warum die Wahl des richtigen Entwicklungspartners entscheidend ist",
    "p1": "Jedes Unternehmen arbeitet unterschiedlich. Eine Lösung, die für einen Online-Händler hervorragend funktioniert, ist für einen Fertigungsbetrieb oder einen freiberuflichen Dienstleister möglicherweise ungeeignet.",
    "p2": "Ein zuverlässiges Unternehmen für Webanwendungsentwicklung nimmt sich die Zeit, diese Unterschiede im Detail zu verstehen, bevor eine technologische Lösung empfohlen wird.",
    "p3": "Der Prozess beginnt in der Regel mit der Definition von Unternehmenszielen, der Analyse von Benutzeranforderungen und der Festlegung essenzieller Funktionen. Anschließend planen Entwickler die Softwarearchitektur, gestalten die Benutzeroberfläche, programmieren die Logik und testen die Lösung vor dem Rollout gründlich.",
    "criteriaIntro": "Beachten Sie bei der Auswahl eines Entwicklungspartners folgende Faktoren:",
    "factors": {
      "f1": {
        "name": "Geschäftsverständnis",
        "desc": "Das Team sollte das konkrete Problem verstehen, das Sie lösen möchten, anstatt lediglich isolierte technische Features vorzuschlagen."
      },
      "f2": {
        "name": "Benutzerfreundliches Design",
        "desc": "Die Anwendung sollte intuitiv zu bedienen sein und auf allen relevanten Endgeräten reibungslos funktionieren."
      },
      "f3": {
        "name": "Sicherheit",
        "desc": "Benutzerberechtigungen, sichere Authentifizierung und angemessene Datenschutzmaßnahmen müssen von Anfang an integraler Bestandteil sein."
      },
      "f4": {
        "name": "Integration",
        "desc": "Die Anwendung muss sich möglicherweise nahtlos mit bestehenden internen Tools, Zahlungssystemen oder Drittanbieter-Schnittstellen verbinden."
      },
      "f5": {
        "name": "Laufender Support",
        "desc": "Regelmäßige Updates, Wartung, Fehlerbehebungen und künftige Systemoptimierungen sollten von Beginn an fest eingeplant werden."
      }
    },
    "summary": "Die beste Lösung ist nicht zwingend diejenige mit den meisten Funktionen. Es ist diejenige, die Ihre geschäftlichen Probleme effektiv löst und im Alltag wirtschaftlich wartbar bleibt."
  },
  "cloud": {
    "tag": "CLOUD-INFRASTRUKTUR",
    "title": "Die Rolle moderner Cloud-Infrastruktur-Dienste",
    "p1": "Eine Webanwendung benötigt eine geeignete Betriebsumgebung. Diese umfasst Rechenressourcen, Speicher, Netzwerke und die unterstützenden Systeme, die erforderlich sind, um die Anwendung zuverlässig für Benutzer bereitzustellen.",
    "p2": "Cloud-Infrastruktur-Dienste helfen Unternehmen dabei, flexibel auf diese Ressourcen zuzugreifen, ohne die gesamte physische Hardware selbst anschaffen und verwalten zu müssen.",
    "advTitle": "Wesentliche Vorteile einer Cloud-Architektur:",
    "adv1": "Erstens können Unternehmen Ressourcen dynamisch anpassen, wenn sich die Anwendungsanforderungen ändern. Dies ist besonders wertvoll bei Verkehrsspitzen oder bei der Erweiterung digitaler Dienste.",
    "adv2": "Zweitens unterstützen Cloud-Umgebungen automatisierte Bereitstellungen, Systemüberwachung, regelmäßige Backups und Desaster-Recovery-Prozesse, sofern diese fachgerecht konfiguriert sind.",
    "adv3": "Drittens erleichtert Cloud-Infrastruktur den Entwicklerteams das Ausrollen von Software-Updates und die Verwaltung der Anwendung über verschiedene Test- und Produktivumgebungen hinweg.",
    "warning": "Das bloße Verschieben einer Anwendung in die Cloud garantiert jedoch nicht automatisch bessere Leistung oder Sicherheit. Die Infrastruktur muss sorgfältig konzipiert, regelmäßig überwacht und an den tatsächlichen Anforderungen ausgerichtet werden.",
    "footer": "Für Unternehmen, die neue digitale Produkte aufbauen, schafft eine passende Cloud-Architektur ein solides und zukunftssicheres Fundament."
  },
  "scalability": {
    "tag": "SYSTEM-LANGLEBIGKEIT",
    "title": "Warum skalierbare Softwarelösungen unverzichtbar sind",
    "p1": "Unternehmenswachstum bringt neue Anforderungen mit sich. Eine Anwendung, die heute für ein kleines Team perfekt funktioniert, benötigt mit steigender Benutzerzahl zusätzliche Kapazitäten und erweiterte Funktionen. Genau deshalb sind skalierbare Softwarelösungen so wichtig.",
    "p2": "Skalierbare Software ist so konzipiert, dass sie wachsende Anforderungen bewältigen kann, ohne dass bei jedem Wachstumsschub eine vollständige Neuentwicklung erforderlich wird.",
    "scenarios": {
      "s1": "Beispielsweise muss ein Online-Shop bei saisonalen Verkaufsaktionen deutlich mehr Kundenanfragen gleichzeitig verarbeiten können.",
      "s2": "Ein SaaS-Unternehmen führt neue Abonnementmodelle ein, während ein Dienstleister zusätzliche Niederlassungen digital anbinden muss."
    },
    "archTitle": "Strategische Architekturplanung:",
    "p3": "Eine vorausschauend geplante Softwarearchitektur macht solche Veränderungen beherrschbar. Skalierbarkeit umfasst die Optimierung von Datenbanken, die Steigerung der Rechenleistung, das Hinzufügen von Serverkapazitäten oder die modulare Aufteilung der Software in unabhängig wartbare Komponenten.",
    "p4": "Dazu gehört auch, künftige Anforderungen mit Augenmaß zu bedenken, ohne die ursprüngliche Anwendung unnötig komplex zu überfrachten.",
    "summary": "Durch die Planung mit Blick auf realistisches Wachstum können Unternehmen vermeidbare technische Grenzen umgehen und künftige Erweiterungen planbar gestalten."
  },
  "lunar": {
    "tag": "FULL-CYCLE ENGINEERING",
    "title": "Wie LunarCode Ihr Unternehmen unterstützen kann",
    "p1": "Die Wahl der passenden Technologie beginnt mit dem Verständnis darüber, welche konkreten Ziele Ihr Unternehmen erreichen möchte.",
    "p2": "LunarCode arbeitet in den Bereichen individuelle Softwareentwicklung, SaaS-Engineering, KI- und Workflow-Automatisierung, Cloud-Infrastruktur und Systemintegration. Diese Kompetenzen unterstützen Unternehmen dabei, digitale Produkte zu entwickeln, bestehende Systeme zu modernisieren oder ihre betrieblichen Abläufe effizienter zu gestalten.",
    "p3": "Ganz gleich, ob Sie eine neue Webanwendung planen oder eine bestehende Plattform verbessern möchten: Es hilft, mit einem klaren Ziel zu starten. Sei es, manuelle Arbeit zu reduzieren, den Kundenzugang zu vereinfachen, getrennte Systeme zu verbinden oder Software auf eine wachsende Nutzerbasis vorzubereiten.",
    "p4": "Ein praxisorientierter Entwicklungsansatz konzentriert sich zunächst auf die wichtigsten Anforderungen, testet die Lösung sorgfältig und lässt Raum für kontinuierliche Verbesserungen im Zuge der Unternehmensentwicklung.",
    "btnCta": "Intelligenter entwickeln mit LunarCode"
  }
},

"blog_post": {
  "badge": "LUNARCODE INSIGHTS // ARCHITEKTUR & STRATEGIE",
  "hero_title_p1": "Warum Unternehmen auf",
  "hero_title_highlight": "Individuelle Softwareentwicklung",
  "hero_title_p2": "& SaaS-Plattformen setzen",
  "hero_p1": "Technologie ist zu einem wesentlichen Bestandteil der Führung eines modernen Unternehmens geworden. Von der Kunden- und Mitarbeiterverwaltung über die Datenverarbeitung bis hin zu Vertrieb, Kommunikation und dem täglichen Geschäftsbetrieb – Unternehmen verlassen sich heute bei vielen wichtigen Aufgaben auf Software. Allerdings kann nicht jedes Unternehmen mit derselben Standardsoftware effizient arbeiten.",
  "hero_p2": "Wenn ein Unternehmen wächst, werden seine Anforderungen spezifischer. Es benötigt möglicherweise ein System, das seinen eigenen Arbeitsabläufen folgt, unterschiedliche Tools miteinander verbindet oder Funktionen bereitstellt, die in Standardanwendungen nicht verfügbar sind. Dies ist einer der Hauptgründe, warum Unternehmen individuelle Softwareentwicklung in Betracht ziehen. Gleichzeitig entscheiden sich Unternehmen, die digitale Produkte entwickeln, zunehmend für SaaS-Plattformen, um ihre Dienste online bereitzustellen. Diese Plattformen erleichtern den Zugriff auf Software und bieten Unternehmen die Flexibilität, eine wachsende Zahl von Nutzern zu bedienen.",
  
  "sec1_badge": "INDIVIDUELLE SOFTWAREENTWICKLUNG",
  "sec1_title": "Was ist individuelle Softwareentwicklung?",
  "sec1_p1": "Individuelle Softwareentwicklung ist der Prozess der Erstellung von Software gemäß den spezifischen Anforderungen eines Unternehmens.",
  "sec1_p2": "Anstatt die Geschäftsprozesse an eine bestehende Anwendung anzupassen, ermöglicht die individuelle Entwicklung, dass die Software genau um diese Prozesse herum geplant wird.",
  "sec1_p3": "Beispielsweise benötigt ein Unternehmen möglicherweise ein Kundenverwaltungssystem, ein internes Dashboard, eine Inventarlösung, ein Mitarbeiterportal, einen automatisierten Workflow oder eine Plattform, die mehrere bestehende Anwendungen miteinander verbindet.",
  "sec1_p4": "Wenn Standardsoftware nicht die richtige Funktionskombination bieten kann, bietet eine individuelle Lösung deutlich mehr Flexibilität.",
  "sec1_quote": "Der Grundgedanke ist einfach: Die Software sollte die tatsächlichen Probleme des Unternehmens lösen, anstatt neue Einschränkungen zu schaffen.",

  "benefits_badge": "STRATEGISCHER MEHRWERT",
  "benefits_title": "Warum Unternehmen in individuelle Software investieren",
  "benefits_intro1": "Einer der größten Gründe, warum sich Unternehmen für Individualsoftware entscheiden, ist Flexibilität.",
  "benefits_intro2": "Standardanwendungen sind für ein breites Nutzerspektrum konzipiert. Das macht sie für allgemeine Anforderungen nützlich, passt jedoch möglicherweise nicht immer zur einzigartigen Arbeitsweise eines Unternehmens.",
  "benefits_intro3": "Mit individueller Software können Unternehmen entscheiden, welche Funktionen sie benötigen und wie diese Funktionen zusammenarbeiten sollen.",
  "benefits_slider_title": "Zu den häufigsten Vorteilen gehören:",
  "benefits_list": [
    "Bessere Ausrichtung an den Geschäftsprozessen",
    "Automatisierung von Routineaufgaben",
    "Einfachere Integration in bestehende Systeme",
    "Größere Kontrolle über Funktionen",
    "Verbesserte Produktivität der Mitarbeiter",
    "Bessere Kundenerlebnisse",
    "Einfachere Anpassung an sich ändernde Anforderungen",
    "Unterstützung für langfristiges Unternehmenswachstum"
  ],
  "benefits_footer": "Für ein wachsendes Unternehmen kann es weitaus nützlicher sein, eine Software zu haben, die sich mit dem Unternehmen weiterentwickelt, als ständig nach Notlösungen in einer Standardanwendung zu suchen.",

  "when_badge": "ENTSCHEIDUNGSMATRIX",
  "when_title": "Wann ist individuelle Software eine gute Wahl?",
  "when_intro1": "Nicht jedes Unternehmen benötigt individuelle Software.",
  "when_intro2": "Wenn eine vorhandene Anwendung bereits alles bietet, was ein Unternehmen benötigt, ist die Nutzung dieser Lösung meist die praktischere Wahl.",
  "when_intro3": "Die individuelle Entwicklung wird dann wertvoller, wenn ein Unternehmen Anforderungen hat, die mit Standardwerkzeugen nur schwer zu bewältigen sind.",
  "when_subtitle": "Ein Unternehmen kann beispielsweise eine individuelle Entwicklung in Betracht ziehen, wenn es Folgendes benötigt:",
  "when_cards": [
    {
      "title": "Einen einzigartigen Workflow",
      "desc": "Das Unternehmen arbeitet anders als typische Unternehmen in seiner Branche."
    },
    {
      "title": "Mehrere Integrationen",
      "desc": "Verschiedene Softwaresysteme müssen nahtlos miteinander kommunizieren."
    },
    {
      "title": "Automatisierung",
      "desc": "Mitarbeiter verbringen zu viel Zeit mit sich wiederholenden manuellen Aufgaben."
    },
    {
      "title": "Skalierbarkeit",
      "desc": "Das Unternehmen erwartet, dass seine Softwareanforderungen mit dem Wachstum zunehmen."
    },
    {
      "title": "Ein einzigartiges digitales Produkt",
      "desc": "Das Unternehmen möchte Software erstellen, die es seinen eigenen Kunden anbieten kann."
    }
  ],
  "when_footer": "In diesen Situationen bietet die Entwicklung einer speziell auf das Unternehmen zugeschnittenen Lösung eine größere Kontrolle.",

  "saas_badge": "SOFTWARE AS A SERVICE",
  "saas_title": "Was sind SaaS-Plattformen?",
  "saas_p1": "SaaS steht für Software as a Service.",
  "saas_p2": "Anstatt Software zu kaufen und auf einzelnen Computern zu installieren, können Benutzer über das Internet auf SaaS-Produkte zugreifen. Die meisten SaaS-Produkte werden über einen Webbrowser oder eine Anwendung aufgerufen.",
  "saas_p3": "Möglicherweise nutzen Sie SaaS-Produkte bereits für Aktivitäten wie Buchhaltung, Projektmanagement, Kommunikation, Kundenbeziehungsmanagement (CRM), Marketing oder Dateiverwaltung.",
  "saas_p4": "SaaS-Plattformen ermöglichen es Softwareunternehmen, ihre Produkte mehreren Kunden bereitzustellen und gleichzeitig die zugrunde liegende Technologie zentral zu verwalten.",
  "saas_p5": "Benutzer können sich bei ihren Konten anmelden und auf die benötigten Funktionen zugreifen, ohne die gesamte Softwareinfrastruktur selbst verwalten zu müssen.",

  "saas_pop_badge": "BELIEBTHEIT & FUNKTIONEN",
  "saas_pop_title": "Warum sind SaaS-Plattformen so beliebt?",
  "saas_pop_p1": "Bequemlichkeit ist einer der Hauptgründe für die Popularität von SaaS.",
  "saas_pop_p2": "Unternehmen wünschen sich Software, die leicht zugänglich, einfach zu aktualisieren und in der Lage ist, ihre sich ändernden Anforderungen zu unterstützen.",
  "saas_pop_p3": "Eine gut konzipierte SaaS-Plattform kann Funktionen bieten wie:",
  "saas_features": [
    "Online-Zugriff von verschiedenen Standorten aus",
    "Benutzerkonten und Berechtigungen",
    "Automatisierte Software-Updates",
    "Sichere Datenverwaltung",
    "Abonnement- und Abrechnungsverwaltung",
    "Integrationen von Drittanbietern",
    "Analysen und Berichte",
    "Skalierbare Infrastruktur"
  ],
  "saas_pop_footer": "Für Softwareunternehmen kann das SaaS-Modell es zudem erleichtern, Kunden an verschiedenen Standorten zu bedienen, ohne für jeden Benutzer separate Installationen erstellen zu müssen.",

  "synergy_badge": "STRATEGISCHE SYNERGIE",
  "synergy_title": "Individuelle Software und SaaS können zusammenarbeiten",
  "synergy_p1": "Individuelle Software und SaaS sind keine konkurrierenden Ideen. In vielen Fällen arbeiten sie Hand in Hand.",
  "synergy_p2": "Ein Unternehmen verfügt möglicherweise über eine einzigartige Geschäftsidee und beschließt, diese in ein Online-Produkt umzuwandeln. Mithilfe der individuellen Softwareentwicklung kann das Produkt genau nach den jeweiligen Anforderungen erstellt werden, während das SaaS-Modell genutzt werden kann, um dieses Produkt den Kunden bereitzustellen.",
  "synergy_p3": "Stellen Sie sich beispielsweise vor, ein Unternehmen erkennt ein häufiges Problem von Betrieben in einer bestimmten Branche.",
  "synergy_p4": "Anstatt ein internes Werkzeug zu entwickeln, das nur die eigenen Mitarbeiter nutzen können, könnte das Unternehmen ein vollständiges SaaS-Produkt entwickeln, das das Problem auch für andere Unternehmen löst.",
  "synergy_highlight": "Dieser Ansatz kann eine Geschäftsidee in ein skalierbares digitales Produkt verwandeln.",

  "consider_badge": "PLANUNG & VORBEREITUNG",
  "consider_title": "Wichtige Punkte vor der Entwicklung",
  "consider_intro": "Die Entscheidung für eine individuelle Entwicklung oder der Aufbau eines SaaS-Produkts erfordert eine sorgfältige Planung.",
  "consider_items": [
    {
      "title": "Das Geschäftsproblem verstehen",
      "desc": "Definieren Sie vor Beginn der Entwicklung klar, was die Software lösen muss. Ein klares Problem führt in der Regel zu einem zielgerichteteren Produkt."
    },
    {
      "title": "Die Benutzer identifizieren",
      "desc": "Überlegen Sie, wer die Software nutzen wird. Mitarbeiter, Kunden, Administratoren und Geschäftsinhaber können völlig unterschiedliche Anforderungen haben."
    },
    {
      "title": "Zukünftiges Wachstum planen",
      "desc": "Ihre Software benötigt in Zukunft möglicherweise zusätzliche Funktionen. Ein Entwurf mit Blick auf Skalierbarkeit erleichtert spätere Verbesserungen erheblich."
    },
    {
      "title": "Integrationen berücksichtigen",
      "desc": "Moderne Unternehmen nutzen häufig mehrere digitale Werkzeuge. Ihre Software muss sich möglicherweise mit Zahlungsgateways, CRM-Systemen, Datenbanken, APIs oder anderen Anwendungen verbinden."
    },
    {
      "title": "Fokus auf Sicherheit legen",
      "desc": "Software kann wichtige Geschäfts- und Kundendaten verarbeiten. Sicherheit, Zugriffskontrollen und eine zuverlässige Infrastruktur sollten daher von Beginn an berücksichtigt werden."
    },
    {
      "title": "Benutzererlebnis einfach halten",
      "desc": "Ein Softwareprodukt kann über eine leistungsstarke Technologie verfügen, aber Benutzer sollten sich nicht anstrengen müssen, um zu verstehen, wie es funktioniert. Ein klares und einfaches Erlebnis erleichtert die Einführung erheblich."
    }
  ],

  "approach_badge": "STRATEGIEWAHL",
  "approach_title": "Den richtigen Entwicklungsansatz wählen",
  "approach_p1": "Die beste Technologielösung hängt vom jeweiligen Unternehmen ab.",
  "approach_p2": "Ein kleines Unternehmen mit unkomplizierten Anforderungen kann mit vorhandener Software vollkommen zufrieden sein. Ein anderes Unternehmen mit spezialisierten Prozessen kann von individueller Software profitieren. Ebenso kann für ein Unternehmen, das sein eigenes Online-Softwareprodukt entwickeln und verkaufen möchte, eine SaaS-Plattform der geeignete Ansatz sein.",
  "approach_highlight": "Wichtig ist, von den geschäftlichen Anforderungen auszugehen, anstatt eine Technologie nur deshalb zu wählen, weil sie gerade populär ist.",

  "growth_badge": "LANGFRISTIGER ERFOLG",
  "growth_title": "Software für langfristiges Wachstum entwickeln",
  "growth_p1": "Gute Software sollte mehr tun, als nur das Problem von heute zu lösen.",
  "growth_p2": "Sie sollte einem Unternehmen Raum für Verbesserungen und Wachstum geben. Hier kann eine durchdachte individuelle Softwareentwicklung den Unterschied machen. Ein gut geplantes System kann um aktuelle Anforderungen herum entworfen werden und künftige Änderungen berücksichtigen.",
  "growth_p3": "Für Unternehmen, die digitale Produkte entwickeln, können skalierbare SaaS-Plattformen die Grundlage bilden, die erforderlich ist, um mehr Benutzer, neue Funktionen und veränderte Kundenerwartungen zu unterstützen.",
  "growth_p4": "Die Kombination aus guter Planung, zuverlässiger Technologie, starker Sicherheit und einem benutzerfreundlichen Erlebnis kann Software zu einem wertvollen Teil des Unternehmenswachstums machen.",
  "cta_button": "Ingenieurteam kontaktieren"
},
      contact_page: {
        badge: "KONTAKT AUFNEHMEN",

        hero_title_start: "Gemeinsam mit",
        hero_title_highlight: "LunarCode",

        hero_subtitle:
          "Sie möchten Ihre digitale Transformation beschleunigen? Von individueller Software und KI-Lösungen bis hin zu skalierbaren SaaS-Plattformen und cloudbasierten Systemen unterstützt LunarCode Unternehmen bei der Entwicklung moderner digitaler Produkte.",

        contact_options_heading: "LunarCode kontaktieren",

        global_badge: "GLOBALER DIGITALER PARTNER",

        global_desc:
          "Unsere Mission ist es, komplexe geschäftliche Anforderungen in elegante, skalierbare und zuverlässige digitale Lösungen zu verwandeln, die Unternehmen beim Wachstum unterstützen.",

        hq_title: "HAUPTSITZ / BÜRO",
        hq_address: "Noida, Uttar Pradesh, Indien",

        corp_title: "TELEFON",
        support_title: "E-MAIL",

        call_us: "Anrufen",
        whatsapp: "WhatsApp",

        response_note:
          "Sie können uns telefonisch, per WhatsApp, E-Mail oder über unser Projektformular kontaktieren. Teilen Sie uns Ihre Anforderungen mit und unser Team meldet sich mit den nächsten Schritten bei Ihnen.",

        form_badge: "GESPRÄCH STARTEN",

        form_heading: "Sprechen Sie mit unseren Experten",

        form_subtitle:
          "Erzählen Sie uns von Ihrem Projekt, Ihren technischen Zielen, Ihrem Zeitplan und Ihren geschäftlichen Anforderungen. Unser Team unterstützt Sie bei der Auswahl der passenden Technologie und Entwicklungsstrategie.",

        name_label: "Vollständiger Name",
        name_placeholder: "z. B. Alexander Vance",

        email_label: "Geschäftliche E-Mail",
        email_placeholder: "alex@enterprise.com",

        desc_label: "Projektbeschreibung",
        desc_placeholder:
          "Erzählen Sie uns von Ihren technischen Zielen, Ihrem Zeitplan, Ihren geschäftlichen Anforderungen und Ihrer gewünschten Architektur...",

        btn_submit: "Angebot anfragen",

        sending: "Anfrage wird gesendet...",

        success_msg:
          "Nachricht erfolgreich gesendet! Unser technisches Team prüft Ihre Anforderungen und meldet sich innerhalb von 24 Stunden bei Ihnen.",

        error_msg:
          "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per Telefon, WhatsApp oder E-Mail.",

        map_title: "UNSER STANDORT",

        map_subtitle:
          "LunarCode befindet sich in Noida, Uttar Pradesh, Indien.",

        final_cta_title: "Bereit, etwas Großartiges zu entwickeln?",

        final_cta_desc:
          "Lassen Sie uns über Ihre Idee, Ihre geschäftliche Herausforderung oder Ihre digitale Transformation sprechen. Kontaktieren Sie das LunarCode-Team direkt über WhatsApp.",

        final_cta_button: "Auf WhatsApp schreiben",
      },

      product_page: {
        badge: "Produktionsreife Ökosysteme",

        hero_title_start: "Produkte entwickelt für",
        hero_title_highlight: "echte Wirkung",

        hero_subtitle:
          "Bei LunarCode entwickeln wir nicht nur Software – wir schaffen digitale Systeme, die reale Probleme lösen, mit der Nachfrage skalieren und messbaren Mehrwert liefern.",

        btn_explore: "Projekte entdecken",
        btn_demo: "Projekt besprechen",

        status_badge: "System-Bereitstellung: Aktiv",
        uptime_label: "Uptime 99.9%",
        scalability_label: "Skalierbarkeit: Auto",

        /* =====================================================
     PROJECTS
  ====================================================== */

        projects: {
          badge: "UNSERE PROJEKTE",

          title: "Projekte, die wir entwickelt haben",

          subtitle:
            "Eine Auswahl digitaler Produkte, Business-Plattformen und individueller Lösungen, die von LunarCode entwickelt wurden.",

          view_project: "Projekt ansehen",

          /* ================= HEXAWASH ================= */

          hexawash: {
            tag: "AKTIVER EINSATZ",

            title: "HexaWash",

            subtitle: "Smarte Wäsche-Management-Plattform",

            desc: "Ein cloud-vernetztes Wäsche-Ökosystem für Studentenwohnheime und Gemeinschaftsräume mit digitaler Bezahlung, Maschinenüberwachung und Echtzeit-Status.",

            impact:
              "Verwandelt traditionelle Waschräume in automatisierte und digital verwaltete Smart-Infrastrukturen.",

            f1: "IoT-gestützte Maschinensteuerung und Smart-Plug-Integration",

            f2: "Echtzeit-Maschinenverfügbarkeit und Timer",

            f3: "Digitale Geldbörse und Zahlungsintegration",

            f4: "Admin-Dashboard für Monitoring und Kontrolle",

            status: "ACTIVE",
          },

          /* ================= KASA OVERSEAS ================= */

   kasa: {
  tag: "BUSINESS-WEBSITE",
  title: "Business Websites",
  subtitle: "Modernes Corporate-Web-Erlebnis",

  desc:
    "Eine professionell gestaltete Website mit einem klaren, modernen und responsiven digitalen Erlebnis, einer strukturierten Inhaltsdarstellung und einer intuitiven Navigation.",

  impact:
    "Schafft eine professionelle Online-Präsenz mit einer starken visuellen Identität, klarer Inhaltsstruktur und einem nahtlosen Erlebnis auf verschiedenen Geräten.",

  f1: "Moderne und responsive Benutzeroberfläche",
  f2: "Klares und professionelles visuelles Design",
  f3: "Strukturierte Inhalte und Navigation",
  f4: "Optimierte Desktop- und Mobile-Darstellung",

  status: "LIVE",
},

          /* ================= VENUS RAYS ================= */

         modern_websites: {
  tag: "WEB-ERLEBNIS",
  title: "Moderne Websites",
  subtitle: "Moderne Digitale Präsenz",
  desc:
    "Eine moderne Website mit einer klaren Benutzeroberfläche, responsivem Layout, flüssigen Interaktionen und einer starken visuellen Identität.",
  impact:
    "Ein professionelles digitales Erlebnis mit Fokus auf Benutzerfreundlichkeit, Performance und responsives Design.",
  f1: "Moderne und responsive Benutzeroberfläche",
  f2: "Klare visuelle Struktur und Navigation",
  f3: "Optimierte Darstellung auf verschiedenen Geräten",
  f4: "Skalierbare Struktur für zukünftige Erweiterungen",
  status: "LIVE",
},

loco_snap: {
  tag: "DIGITALE PLATTFORM",
  title: "LocoSnap",
  subtitle: "Interaktive Digitale Plattform",
  desc:
    "Eine moderne digitale Plattform mit responsiver Benutzeroberfläche, interaktiven Workflows, standortbezogenen Funktionen und einer skalierbaren Anwendungsstruktur.",
  impact:
    "Ein vielseitiges digitales Erlebnis mit Fokus auf Performance, Benutzerfreundlichkeit und zukünftige Skalierbarkeit.",
  f1: "Responsive und moderne Anwendungsoberfläche",
  f2: "Interaktive Benutzer-Workflows",
  f3: "Standortbezogene digitale Erlebnisse",
  f4: "Skalierbare Anwendungsarchitektur",
  status: "LIVE",
},
          /* ================= CLINIC MANAGEMENT ================= */

          clinic: {
            tag: "GESUNDHEITSMANAGEMENT",

            title: "Clinic Management System",

            subtitle: "Patienten- & Dokumentenverwaltung",

            desc: "Ein digitales Klinikmanagementsystem zur Verwaltung von Patienten, eindeutigen Patientenakten und medizinischen Dokumenten über eine zentrale Plattform.",

            impact:
              "Vereinfacht die digitale Verwaltung von Patienteninformationen und medizinischen Dokumenten und schafft einen zentralisierten Workflow für Kliniken.",

            f1: "Eindeutige Patienten-ID und Patientenverwaltung",

            f2: "Schnelle Patienten- und Akten-Suche",

            f3: "Upload und Verwaltung medizinischer Dokumente",

            f4: "Zentralisierter und strukturierter Dokumenten-Workflow",

            status: "LIVE",
          },

          /* ================= BILLING SYSTEM ================= */

          billing: {
            tag: "BUSINESS-MANAGEMENT",

            title: "Billing System",

            subtitle: "Digitale Abrechnungs- & Rechnungsverwaltung",

            desc: "Ein digitales Abrechnungssystem zur Vereinfachung von Rechnungsprozessen, Abrechnungen und alltäglichen Geschäftsabläufen.",

            impact:
              "Bündelt wichtige Abrechnungsprozesse in einem zentralen digitalen System und reduziert manuelle Arbeit.",

            f1: "Digitaler Abrechnungsworkflow",

            f2: "Rechnungs- und Belegverwaltung",

            f3: "Strukturierte Verwaltung von Geschäftsdaten",

            f4: "Einfache und responsive Benutzeroberfläche",

            status: "ACTIVE",
          },
        },

        /* =====================================================
     CUSTOM SOLUTIONS
  ====================================================== */

        custom_solutions: {
          badge: "MAßGESCHNEIDERTE ENTWICKLUNG",

          title: "Individuelle Lösungen für Ihre operative DNA",

          subtitle:
            "Wenn Ihr Unternehmen vor einer Herausforderung steht, entwickeln wir das passende digitale System zur Lösung.",

          c1_title: "Full-Stack-Webentwicklung",

          c1_desc: "MERN / React / Next.js / Node.js / Cloud-Systeme",

          c2_title: "IoT-Integration",

          c2_desc: "Hardware-, Sensor- und Geräte-Schnittstellen",

          c3_title: "KI-Automatisierung",

          c3_desc: "KI-gestützte Automatisierung, Agenten und LLMs",

          c4_title: "SaaS-Produkte",

          c4_desc: "Skalierbare und Multi-Tenant-fähige Plattformen",

          c5_title: "API- & Datensicherheit",

          c5_desc: "Sichere APIs, Datenisolierung und Zugriffskontrolle",
        },

        /* =====================================================
     APPROACH
  ====================================================== */

        approach: {
          badge: "ENGINEERING-PHILOSOPHIE",

          title: "Unser methodischer Ansatz",

          a1_title: "Skalierbar",

          a1_desc:
            "Entwickelt, um mit Ihren geschäftlichen Anforderungen und Ihrer Nutzerbasis zu wachsen.",

          a2_title: "Sicher",

          a2_desc:
            "Sichere Backend-Architekturen, Datenisolierung und kontrollierter Zugriff.",

          a3_title: "Praxisorientiert",

          a3_desc:
            "Keine unnötigen Funktionen – wir konzentrieren uns auf Lösungen für reale Geschäftsprobleme.",

          a4_title: "Effizient",

          a4_desc:
            "Leistungsstarke Systeme, geringe Latenz und kostenbewusste technische Architektur.",
        },

        /* =====================================================
     WHY CHOOSE LUNARCODE
  ====================================================== */

        why_choose: {
          badge: "WARUM LUNARCODE",

          title: "Entwickelt von Ingenieuren mit Systemverständnis",

          p1: "Erfahrung mit echten digitalen Produkten und produktionsnahen Systemen",

          p2: "Fokus auf robuste Backends und skalierbare Systemarchitekturen",

          p3: "Schnelle Umsetzung und agile Entwicklungsschritte",

          p4: "Technologie mit einem klaren Verständnis für geschäftliche Anforderungen",
        },

        /* =====================================================
     CTA
  ====================================================== */

        cta_banner: {
          title: "Bereit für leistungsstarke digitale Systeme?",

          subtitle:
            "LunarCode hilft Ihnen, Ihre Ideen in moderne, zuverlässige und skalierbare digitale Produkte zu verwandeln.",

          btn_call: "Gespräch vereinbaren",

          btn_contact: "Engineering-Team kontaktieren",
        },
      },

   service_page: {
  badge: "ZUVERLÄSSIGE SOFTWAREENTWICKLUNG",

  phase: "SERVICE-PHASE",

  node_synced: "NODE SYNCHRONISIERT",

  services_heading: "Unsere Softwareentwicklungsleistungen",

  hero_title_start: "Umfassende technische",

  hero_title_highlight: "Expertise",

  hero_subtitle:
    "LunarCode entwickelt individuelle Software, KI-gestützte Lösungen, SaaS-Plattformen und Cloud-Infrastrukturen für die moderne digitale Transformation. Wir verbinden zuverlässige Softwareentwicklung mit skalierbarer Technologie, um komplexe geschäftliche Herausforderungen zu lösen.",

  cta_audit: "Technische Beratung anfragen",

  custom_software: {
    title: "Individuelle Softwareentwicklung",

    p1:
      "Wir entwickeln individuelle Softwarelösungen, die auf Ihre Geschäftsprozesse, Benutzer und operativen Anforderungen zugeschnitten sind. Statt Ihr Unternehmen an Standardsoftware anzupassen, entwickeln wir Technologie, die zu Ihrer Arbeitsweise passt.",

    p2:
      "Unser Entwicklungsansatz konzentriert sich auf wartbare Architekturen, sichere Entwicklung, zuverlässige Performance und skalierbare Systeme, die mit Ihrem Unternehmen wachsen können.",

    tag_label: "ENTWICKLUNGSZYKLUS",

    tags:
      "React • Node.js • APIs • Agile • Sichere Entwicklung",

    image_alt:
      "Individuelle Softwareentwicklung und moderne Programmiertechnologie",
  },

  ai_automation: {
    title: "KI & Automatisierung",

    p1:
      "Wir integrieren künstliche Intelligenz und intelligente Automatisierung in Geschäftsprozesse, um repetitive Aufgaben zu reduzieren, die Produktivität zu steigern und Daten effizienter zu nutzen.",

    p2:
      "Von KI-Assistenten und intelligenten Workflows bis hin zu Machine-Learning-Integrationen und LLM-basierten Anwendungen entwickeln wir praktische KI-Lösungen für reale Geschäftsanforderungen.",

    tag_label: "INTELLIGENCE ENGINE",

    tags:
      "KI • LLMs • Machine Learning • Automatisierung • KI-APIs",

    image_alt:
      "Künstliche Intelligenz und Technologie zur Geschäftsautomatisierung",
  },

  saas_dev: {
    title: "SaaS-Entwicklung",

    p1:
      "Wir entwickeln skalierbare SaaS-Anwendungen für Unternehmen, die zuverlässige Plattformen benötigen, die mehrere Benutzer, Geschäftsprozesse und wachsende Anforderungen unterstützen können.",

    p2:
      "Unser SaaS-Ansatz umfasst Produktarchitektur, Authentifizierung, APIs, Datenbanken, Multi-Tenant-Systeme, Performance und produktionsbereites Deployment.",

    tag_label: "PLATTFORM-ZUVERLÄSSIGKEIT",

    tags:
      "Multi-Tenant • APIs • Authentifizierung • Skalierbare Architektur",

    image_alt:
      "SaaS-Anwendungsentwicklung und digitale Produktplattform",
  },

  cloud_infra: {
    title: "Cloud-Infrastruktur",

    p1:
      "Wir entwickeln cloudbasierte Infrastrukturen, die Anwendungen zuverlässig, skalierbar, sicher und einfacher verwaltbar machen, wenn Nutzung und geschäftliche Anforderungen wachsen.",

    p2:
      "Unsere Cloud-Lösungen umfassen Deployment, Anwendungsinfrastruktur, Speicher, APIs, Monitoring, Sicherheit und skalierbare Backend-Umgebungen.",

    tag_label: "SCALE ENGINE",

    tags:
      "Cloud • Deployment • Storage • APIs • Monitoring",

    image_alt:
      "Cloud-Infrastruktur und skalierbare Servertechnologie",
  },

  bottom_title: "Haben Sie ein digitales Produkt im Sinn?",

  bottom_subtitle:
    "Erzählen Sie uns von Ihrer Idee, Ihrer geschäftlichen Herausforderung oder Ihren technischen Anforderungen. Unser Team unterstützt Sie bei der Auswahl der passenden Technologie, Architektur und Entwicklungsstrategie.",

  bottom_cta: "Gespräch starten",
},

     about_page: {
  hero_badge: "INNOVATIVE SOFTWAREARCHITEKTUR",

  hero_title_start: "Unternehmen stärken durch",
  hero_title_highlight: "Innovation von LunarCode",

  hero_subtitle:
    "LunarCode ist ein modernes Softwareentwicklungs- und IT-Unternehmen, das sich auf individuelle Software, KI-gestützte Anwendungen, SaaS-Plattformen und skalierbare digitale Lösungen für moderne Unternehmen spezialisiert.",

  overview_badge: "UNTERNEHMENSÜBERBLICK",

  overview_title:
    "Zuverlässige Technologielösungen für eine sich schnell entwickelnde digitale Welt",

  overview_p1:
    "In der sich schnell entwickelnden digitalen Welt benötigen Unternehmen Technologiepartner, die ihre Herausforderungen verstehen und komplexe Anforderungen in praktische und zuverlässige Lösungen verwandeln können.",

  overview_p2:
    "Von Start-ups und wachsenden Unternehmen bis hin zu etablierten Organisationen entwickelt LunarCode sichere, leistungsstarke und benutzerorientierte digitale Produkte, die auf individuelle Geschäftsziele und operative Anforderungen zugeschnitten sind.",

  story_badge: "UNSERE GESCHICHTE",

  story_title:
    "Neugier, Leidenschaft & kontinuierliche Weiterentwicklung",

  story_p1:
    "LunarCode wurde mit einer einfachen Vision gegründet: Technologie für Unternehmen praktischer, zugänglicher und wertvoller zu machen. Aus der Leidenschaft für Softwareentwicklung ist ein technologieorientiertes Team entstanden, das sich auf die Entwicklung moderner digitaler Lösungen konzentriert.",

  story_p2:
    "Wir glauben, dass Technologie mehr leisten sollte, als nur aktuelle Probleme zu lösen. Sie sollte neue Möglichkeiten schaffen, Geschäftsprozesse verbessern und eine starke Grundlage für langfristige Innovation und Wachstum bieten.",

  mission_title: "Unsere Mission",

  mission_desc:
    "Unsere Mission ist es, Unternehmen durch innovative und zuverlässige Technologielösungen zu unterstützen, die Effizienz steigern, Kundenerlebnisse verbessern, Prozesse vereinfachen und nachhaltiges digitales Wachstum ermöglichen.",

  vision_title: "Unsere Vision",

  vision_desc:
    "Unsere Vision ist es, ein weltweit vertrauenswürdiger Technologiepartner zu werden, der für durchdachte Softwareentwicklung, Innovation, Qualität und langfristige Zusammenarbeit bekannt ist und Unternehmen dabei unterstützt, das volle Potenzial moderner Technologie auszuschöpfen.",

  values_badge: "UNSERE KERNWERTE",

  values_heading:
    "Die Prinzipien hinter jeder Lösung, die wir entwickeln",

  values: {
    val_1_title: "Innovation",

    val_1_desc:
      "Wir nutzen moderne Technologien und praktische Ideen, um intelligente digitale Lösungen zu entwickeln, die Unternehmen bei Anpassung, Verbesserung und Wachstum unterstützen.",

    val_2_title: "Qualität",

    val_2_desc:
      "Wir legen Wert auf saubere Architektur, zuverlässige Performance, Sicherheit, Benutzerfreundlichkeit und wartbaren Code in jedem Projekt.",

    val_3_title: "Zusammenarbeit",

    val_3_desc:
      "Wir arbeiten eng mit unseren Kunden zusammen, um ihre Ziele, Herausforderungen und Anforderungen zu verstehen und Lösungen zu entwickeln, die zu ihrem Unternehmen passen.",

    val_4_title: "Integrität",

    val_4_desc:
      "Transparenz, Ehrlichkeit, Verantwortungsbewusstsein und Vertrauen bilden die Grundlage unserer Beziehungen zu Kunden und Partnern.",

    val_5_title: "Kontinuierliches Lernen",

    val_5_desc:
      "Technologie entwickelt sich ständig weiter. Deshalb erweitern wir kontinuierlich unsere Fähigkeiten, entdecken neue Werkzeuge und verbessern unsere Entwicklungsprozesse.",
      "val_6_title": "Zuverlässigkeit & Skalierbarkeit",
"val_6_desc": "Wir entwickeln fehlertolerante Architekturen, die hohe Datenmengen und wachsenden Benutzerverkehr ohne Ausfallzeiten bewältigen."
  },

  expertise_badge: "TECHNISCHE EXPERTISE",

  expertise_heading:
    "Spezialisierte Softwareentwicklung für moderne digitale Produkte",

  expertise_sub:
    "Wir kombinieren moderne Entwicklungsframeworks, skalierbare Architekturen, Cloud-Technologien und intelligente Automatisierung, um zuverlässige digitale Produkte für Unternehmen zu entwickeln.",

  expertise_items: {
    e1: "Individuelle Softwareentwicklung",
    e2: "Full-Stack-Webentwicklung",
    e3: "KI & intelligente Automatisierung",
    e4: "SaaS-Produktentwicklung",
    e5: "Cloud-Infrastruktur & Deployment",
    e6: "API- & Systemintegration",
  },

  approach_badge: "UNSER ENTWICKLUNGSPROZESS",

  approach_heading:
    "Ein strukturierter Prozess von der Idee bis zur Produktion",

  steps: {
    s1_title: "1. Anforderungen verstehen",

    s1_desc:
      "Wir analysieren Ihre Geschäftsziele, Benutzer, technischen Anforderungen, Herausforderungen und den Projektumfang, bevor die Entwicklung beginnt.",

    s2_title: "2. Strategische Planung",

    s2_desc:
      "Wir definieren Technologie-Stack, Architektur, Funktionen, Entwicklungsplan und Prioritäten für die passende Lösung.",

    s3_title: "3. Agile Entwicklung",

    s3_desc:
      "Wir entwickeln das Produkt in fokussierten Iterationen und ermöglichen kontinuierliches Feedback, Verbesserungen und transparente Fortschritte.",

    s4_title: "4. Testing & Qualitätssicherung",

    s4_desc:
      "Wir testen Funktionen, Performance, Sicherheit, Benutzerfreundlichkeit und Zuverlässigkeit, damit das Produkt für den praktischen Einsatz bereit ist.",

    s5_title: "5. Deployment & Support",

    s5_desc:
      "Wir führen das Deployment mit zuverlässiger Infrastruktur durch und bieten laufenden technischen Support sowie kontinuierliche Verbesserungen.",
  },

  why_badge: "WARUM LUNARCODE",

  why_heading:
    "Technologie, die auf Ihr Unternehmen zugeschnitten ist",

  why_points: {
    w1: "Geschäftsorientierte Lösungen",
    w2: "Moderner Technologie-Stack",
    w3: "Skalierbare & sichere Architektur",
    w4: "Kundenorientierte Entwicklung",
    w5: "Klare & transparente Kommunikation",
    w6: "Zuverlässiger technischer Support",
  },

  commitment_title:
    "Technologie mit einem klaren Ziel",

  commitment_desc:
    "Technologie entwickelt sich ständig weiter und schafft neue Möglichkeiten für Unternehmen. Wir beschäftigen uns kontinuierlich mit modernen Frameworks, Cloud-Plattformen, KI-Technologien und besseren Entwicklungspraktiken, um Lösungen mit echtem geschäftlichem Mehrwert zu entwickeln. Unser Ziel ist nicht nur die Bereitstellung von Software, sondern der Aufbau zuverlässiger digitaler Produkte und langfristiger Technologiepartnerschaften.",

  final_cta_title:
    "Haben Sie eine Idee oder geschäftliche Herausforderung?",

  final_cta_desc:
    "Erzählen Sie uns, was Sie entwickeln, verbessern oder automatisieren möchten. Unser Team unterstützt Sie dabei, die passende Technologie zu finden und Ihre Idee in eine praktische digitale Lösung zu verwandeln.",

  final_cta_button: "Gespräch starten",
},

      nav: {
        home: "Startseite",
        about: "Über uns",
        services: "Dienstleistungen",
        products: "Produkte",
        contact: "Kontakt",
        launch_project: "Projekt starten",
      },
      hero: {
        badge: "Next-Gen Lunar Innovation",
        title_start: "Die Zukunft gestalten mit",
        title_highlight: "LunarCode",
        subtitle:
          "Wir entwickeln hochgradig skalierbare Full-Stack-Anwendungen, intelligente KI-Workflows, SaaS-Plattformen und Cloud-Lösungen für maximale Effizienz.",
        cta_primary: "Projekt starten",
        cta_secondary: "Dienstleistungen erkunden",
        stat_uptime: "99,9% Betriebszeit-Architektur",
        stat_projects: "50+ Enterprise-Einsätze",
        stat_satisfaction: "100% Kundenzufriedenheit",
      },
      collaboration: {
        badge: "Partnerschaft & Ökosystem",
        heading: "Zusammenarbeit mit führenden Technologieunternehmen",
      },
      services: {
        badge: "Unsere Kernlösungen",
        title: "Hochleistungsfähige digitale Lösungen",
        subtitle:
          "Von automatisierten neuronalen Workflows bis hin zu skalierbarer Cloud-Infrastruktur entwickeln wir Software für exponentielles Wachstum.",
        custom_software: {
          title: "Individuelle Softwareentwicklung",
          desc: "Maßgeschneiderte Full-Stack-Architekturen für Skalierbarkeit, Ausfallsicherheit und nahtlose Performance.",
        },
        ai_automation: {
          title: "KI & Workflow-Automatisierung",
          desc: "Intelligente Multi-Agenten-Systeme, automatisierte Prozesse und individuelle LLM-Integrationen.",
        },
        saas_dev: {
          title: "SaaS-Plattformentwicklung",
          desc: "Skalierbare Multi-Tenant-Cloud-Plattformen für schnelles Onboarding, Sicherheit und weltweiten Zugriff.",
        },
        cloud_infra: {
          title: "Cloud-Infrastruktur & DevOps",
          desc: "Zuverlässige CI/CD-Pipelines, containerisierte Orchestrierung und kosteneffizientes Cloud-Engineering.",
        },
        security: {
          title: "API- & Unternehmenssicherheit",
          desc: "Umfassende Sicherheitsaudits, gehärtete Microservices und strikte Sicherheitsstandards.",
        },
        "api_integration": {
  "title": "API- & Systemintegration",
  "desc": "Nahtlose Konnektivität für verteilte Systeme, sichere Datenpipelines und hochperformante API-Gateways."
},
        learn_more: "Mehr erfahren",
      },
      mission: {
        badge: "Unsere Mission",
        title: "Deep Tech mit unbegrenztem Unternehmenspotenzial verbinden",
        desc_1:
          "Bei LunarCode glauben wir, dass Software nicht nur Prozesse ausführen sollte – sie sollte Unternehmen aktiv voranbringen.",
        desc_2:
          "Unsere Mission ist es, visionäre Unternehmen mit zukunftssicheren Codebases, prädiktiver Intelligenz und robuster Infrastruktur auszustatten.",
        point_1: "Höchste Code-Zuverlässigkeit",
        point_2: "Hyperskalierbare Architekturen",
        point_3: "Autonome KI-Beschleunigung",
      },
      trusted: {
        badge: "Nachgewiesene Exzellenz",
        title: "Weltweit geschätzt von Innovatoren",
        subtitle:
          "Unterstützung kritischer Produktionssysteme mit erstklassigen Engineering-Standards.",
        metric_1_val: "99,99%",
        metric_1_label: "Systemzuverlässigkeit",
        metric_2_val: "10M+",
        metric_2_label: "Tägliche API-Aufrufe",
        metric_3_val: "4.9/5",
        metric_3_label: "Kundenbewertung",
        metric_4_val: "15ms",
        metric_4_label: "Durchschnittliche globale Latenz",
      },
      team: {
        badge: "Unsere Visionäre",
        title: "Die Köpfe hinter LunarCode",
        subtitle:
          "Ingenieure, Systemarchitekten und Strategen, die sich der digitalen Perfektion widmen.",
        role_founder: "Chief Technology Officer & Lead Architect",
        role_ai: "Leiter KI-Automatisierung & Neuronale Systeme",
        role_cloud: "Principal Cloud Infrastructure Architect",
      },
      footer: {
        tagline:
          "Entwicklung intelligenter Softwaresysteme, SaaS-Plattformen, KI-Automatisierung und skalierbarer Cloud-Lösungen.",
        quick_links: "Schnellnavigation",
        services_heading: "Kernlösungen",
        services_items: {
          custom_software: "Individuelle Software",
          ai_automation: "KI-Automatisierung",
          saas_dev: "SaaS-Entwicklung",
          cloud_infra: "Cloud-Infrastruktur",
          api_security: "API- & Unternehmenssicherheit",
        },
        newsletter_title: "Technologisch voraus sein",
        newsletter_sub:
          "Abonnieren Sie Einblicke in KI-Architektur und SaaS-Entwicklung.",
        placeholder_email: "E-Mail-Adresse eingeben",
        btn_subscribe: "Abonnieren",
        rights: "Alle Rechte vorbehalten.",
        privacy: "Datenschutz",
        terms: "Nutzungsbedingungen",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    lng: "en", // Explicit default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
