export const siteContent = {
  header: {
    logoText: "Technokaizen", // FIXED: Name changed here
    navLinks: [
      { label: "About", href: "#about" },
      { label: "What We Do", href: "#what-we-do" },
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
      { label: "Results", href: "#testimonials" },
      { label: "Team", href: "#team" },
      { label: "FAQ", href: "#faq" },
      { label: "Connect", href: "#connect" }
    ],
    statusText: "System Status: Secure"
  },
  
  about: {
    heading: "Enterprise Infrastructure for AI and Web Applications",
    body: "We are the next-generation infrastructure layer for AI models and modern enterprises. Operating at the intersection of high-performance computing and absolute zero-trust architecture, we fortify and scale the digital brain of your organization.",
    keywords: ["AI models", "zero-trust", "scale"]
  },

  whatWeDo: {
    heading: "NEXT-GEN INFRASTRUCTURE",
    subHeading: "Engineered for speed, built for security.",
    blocks: [
      { id: "1", title: "Website Building", description: "Full-stack UI/Frontend & Backend development. We provide regular performance, security, and update checks, including MySQL database integration." },
      { id: "2", title: "DNS Registration", description: "Secure, cost-efficient, and reliable provider selection. We actively monitor against fake DNS, phishing, DoS attacks, and mirroring." },
      { id: "3", title: "SSL Certification", description: "High-trust encryption implementation with constant monitoring to detect any potential data alteration or breaches." },
      { id: "4", title: "Server Management", description: "Your website lives on secure infrastructure with 24/7 monitoring and automated regular backups." }
    ]
  },

  services: {
    heading: "Enterprise Services & Solutions",
    items: [
      { id: "1", title: "Website Building", description: "We provide comprehensive full-stack development covering bespoke UI/Frontend engineering and robust Backend architecture. Our workflow includes automated CI/CD pipelines, regular performance tuning, multi-layered security hardening, and proactive system updates, with full support for MySQL/PostgreSQL database clusters." },
      { id: "2", title: "DNS Registration", description: "We orchestrate secure, cost-efficient, and highly reliable DNS provider selection. Our proactive management includes active monitoring to shield your domain against sophisticated threats such as DNS spoofing, phishing, volumetric DoS attacks, and unauthorized zone mirroring." },
      { id: "3", title: "SSL Certification", description: "Deployment of enterprise-grade high-trust encryption (TLS/SSL). We implement strict certificate lifecycle management with constant automated checks for configuration alteration, ensuring continuous security compliance and visitor data integrity across all endpoints." },
      { id: "4", title: "Server Management", description: "Hosting your digital assets on hardened, secure infrastructure. Benefit from our 24/7/365 proactive monitoring environment, which includes automated threat mitigation, performance resource balancing, and enterprise-grade automated daily off-site backups." }
    ]
  },

  collaborators: {
    heading: "Trusted by Innovators & Academic Hubs",
    nodes: [
      { id: "node-mnnit", name: "MNNIT Allahabad" },
      { id: "node-bhu", name: "IIT BHU" }
    ]
  },

  faq: {
    heading: "Frequently Asked Questions",
    pairs: [
      { id: "faq-1", question: "How secure is your AI hosting?", answer: "We implement end-to-end zero-trust encryption and hardware-isolated environments." },
      { id: "faq-2", question: "Can we scale dynamically?", answer: "Yes, our architecture allows instantaneous elastic storage scaling." },
      { id: "faq-3", question: "Do you provide academic support?", answer: "Yes, we bridge industry gaps in cybersecurity and AI hardware." },
      { id: "faq-4", question: "Do you perform regular security checks?", answer: "Yes, we perform 24/7 monitoring and security updates." },
      { id: "faq-5", question: "What about DNS security?", answer: "We monitor against phishing, mirroring, and DoS attacks." },
      { id: "faq-6", question: "Is SSL included?", answer: "Yes, we provide full SSL certification with alteration monitoring." },
      { id: "faq-7", question: "Are backups automated?", answer: "Yes, we perform regular backups for all hosted servers." },
      { id: "faq-8", question: "What is the uptime guarantee?", answer: "We guarantee 99.99% uptime with 24/7 server support." }
    ]
  },

  testimonials: {
    heading: "Client Transformation Results",
    list: [
      { id: "test-1", author: "TechCorp Inc.", quote: "Their secure server architecture handled our heavy AI inferencing.", views: "200k+", interactions: "10k+", impressions: "50k+" },
      { id: "test-2", author: "AI Solutions Ltd.", quote: "Latency dropped by 80% after migrating our infrastructure.", views: "40k+", interactions: "10k+", impressions: "20k+" },
      { id: "test-3", author: "Cyber Secure", quote: "Security standards finally met our enterprise requirements.", views: "20k+", interactions: "2k+", impressions: "10k+" }
    ]
  },

  team: {
    heading: "Core Engineering & Leadership",
    members: [
      { id: "deepak", name: "DESH DEEPAK", role: "CEO", image: "/images/team/deepak.png", socials: { linkedin: "https://www.linkedin.com/in/desh-deepak-92425a332/", instagram: "#" } },
      { id: "member-divyanshu", name: "DIVYANSHU MISHRA", role: "CTO", image: "/images/team/Divyanshu.png", socials: { linkedin: "https://www.linkedin.com/in/divyanshu-mishra-09b036345/", instagram: "#" } },
      { id: "member-kritika", name: "KRITIKA OJHA", role: "AI Engineer", image: "/images/team/Kritika.png", socials: { linkedin: "https://www.linkedin.com/in/kritikaojha23", instagram: "#" } }
    ]
  }
};