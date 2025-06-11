const siteUrl = "https://quantumcodesolutions.com";

export const seoData = {
  home: {
    title:
      "Quantum Code Solutions - Leading Software Development Company | Custom Web & Mobile Apps",
    description:
      "Transform your business with cutting-edge software solutions from Quantum Code Solutions. Expert web development, mobile apps, AI/ML, blockchain, and digital transformation services. Get started today!",
    keywords:
      "software development company, web development services, mobile app development, AI solutions, machine learning, blockchain development, custom software, React development, Node.js, Python, digital transformation, enterprise software",
    canonicalUrl: siteUrl,
    ogImage: `${siteUrl}/logo.png`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Quantum Code Solutions",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description:
        "Leading software development company specializing in web development, mobile apps, AI/ML solutions, and digital transformation services.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-234-567-8900",
        contactType: "customer service",
        email: "info@quantumcodesolutions.com",
      },
      sameAs: [
        "https://www.facebook.com/quantumcodesolutions",
        "https://www.instagram.com/quantum.code.solutions",
        "https://www.linkedin.com/company/quantumcodesolutions/",
      ],
      services: [
        "Web Development",
        "Mobile App Development",
        "AI/ML Solutions",
        "Blockchain Development",
        "UI/UX Design",
        "Digital Transformation",
      ],
    },
  },

  about: {
    title:
      "About Quantum Code Solutions - Expert Software Development Team | Our Story",
    description:
      "Learn about Quantum Code Solutions - a leading software development company with expert developers, innovative solutions, and proven track record. Discover our mission, values, and commitment to excellence.",
    keywords:
      "about quantum code solutions, software development team, company history, expert developers, mission vision values, technology expertise, software company profile",
    canonicalUrl: `${siteUrl}/about-us`,
    ogImage: `${siteUrl}/logo.png`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Quantum Code Solutions",
      description:
        "Learn about our expert software development team, mission, values, and commitment to delivering innovative technology solutions.",
      mainEntity: {
        "@type": "Organization",
        name: "Quantum Code Solutions",
        foundingDate: "2020",
        numberOfEmployees: "50-100",
        industry: "Software Development",
        description:
          "We empower businesses to scale smarter through future-ready technology with innovation at our core.",
      },
    },
  },

  services: {
    title:
      "Software Development Services | Web, Mobile, AI/ML Solutions | Quantum Code Solutions",
    description:
      "Comprehensive software development services including web development, mobile apps, AI/ML solutions, blockchain, UI/UX design, and more. Custom solutions for businesses of all sizes.",
    keywords:
      "software development services, web development, mobile app development, AI ML solutions, blockchain development, UI UX design, custom software development, enterprise solutions",
    canonicalUrl: `${siteUrl}/services`,
    ogImage: `${siteUrl}/logo.png`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Software Development Services",
      provider: {
        "@type": "Organization",
        name: "Quantum Code Solutions",
      },
      serviceType: "Software Development",
      description:
        "Comprehensive software development services including web development, mobile applications, AI/ML solutions, and digital transformation.",
      offers: [
        {
          "@type": "Offer",
          name: "Web Development",
          description:
            "Custom website development, e-commerce solutions, and web applications",
        },
        {
          "@type": "Offer",
          name: "Mobile App Development",
          description:
            "iOS, Android, and cross-platform mobile application development",
        },
        {
          "@type": "Offer",
          name: "AI/ML Solutions",
          description:
            "Artificial intelligence and machine learning implementation services",
        },
      ],
    },
  },

  contact: {
    title:
      "Contact Quantum Code Solutions - Get Free Consultation | Software Development",
    description:
      "Contact Quantum Code Solutions for expert software development services. Get free consultation, project quotes, and discuss your technology needs with our expert team.",
    keywords:
      "contact quantum code solutions, software development consultation, project quote, hire developers, technology consultation, custom software inquiry",
    canonicalUrl: `${siteUrl}/contact-us`,
    ogImage: `${siteUrl}/logo.png`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Quantum Code Solutions",
      description:
        "Get in touch with our expert software development team for free consultation and project quotes.",
      mainEntity: {
        "@type": "Organization",
        name: "Quantum Code Solutions",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-234-567-8900",
          contactType: "customer service",
          email: "info@quantumcodesolutions.com",
          availableLanguage: "English",
        },
      },
    },
  },

  blogs: {
    title:
      "Technology Blog | Software Development Insights | Quantum Code Solutions",
    description:
      "Stay updated with latest technology trends, software development insights, programming tutorials, and industry best practices from Quantum Code Solutions expert team.",
    keywords:
      "technology blog, software development blog, programming tutorials, tech insights, coding tips, development best practices, technology trends",
    canonicalUrl: `${siteUrl}/blogs`,
    ogImage: `${siteUrl}/logo.png`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Quantum Code Solutions Blog",
      description:
        "Technology insights, software development tutorials, and industry best practices.",
      publisher: {
        "@type": "Organization",
        name: "Quantum Code Solutions",
        logo: `${siteUrl}/logo.png`,
      },
    },
  },

  thankYou: {
    title: "Thank You - Quantum Code Solutions | We'll Be In Touch Soon",
    description:
      "Thank you for contacting Quantum Code Solutions. We have received your inquiry and our team will get back to you within 24 hours.",
    keywords:
      "thank you, contact confirmation, quantum code solutions response",
    canonicalUrl: `${siteUrl}/thank-you`,
    noindex: true,
  },
};

// Service-specific SEO data
export const servicesSeoData = {
  "app-development": {
    title:
      "Mobile App Development Services | iOS, Android, Cross-Platform | Quantum Code Solutions",
    description:
      "Professional mobile app development services for iOS, Android, and cross-platform solutions. Custom mobile applications with native performance and exceptional user experience.",
    keywords:
      "mobile app development, iOS app development, Android app development, cross-platform apps, React Native, Flutter, mobile application services",
    canonicalUrl: `${siteUrl}/services/app-development`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Mobile App Development Services",
      description:
        "Professional mobile app development for iOS, Android, and cross-platform solutions.",
      provider: {
        "@type": "Organization",
        name: "Quantum Code Solutions",
      },
    },
  },

  "web-development": {
    title:
      "Web Development Services | Custom Websites, E-commerce | Quantum Code Solutions",
    description:
      "Professional web development services including custom websites, e-commerce platforms, web applications, and responsive design. Modern, fast, and SEO-optimized solutions.",
    keywords:
      "web development services, custom website development, e-commerce development, web applications, responsive design, React development, full-stack development",
    canonicalUrl: `${siteUrl}/services/web-development`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Web Development Services",
      description:
        "Custom website development, e-commerce platforms, and web applications.",
      provider: {
        "@type": "Organization",
        name: "Quantum Code Solutions",
      },
    },
  },

  "machine-learning-solutions": {
    title:
      "AI & Machine Learning Solutions | Custom ML Models | Quantum Code Solutions",
    description:
      "Advanced AI and machine learning solutions including custom ML models, data analytics, predictive analytics, and intelligent automation for business transformation.",
    keywords:
      "AI solutions, machine learning services, custom ML models, data analytics, predictive analytics, artificial intelligence, automation, deep learning",
    canonicalUrl: `${siteUrl}/services/machine-learning-solutions`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI & Machine Learning Solutions",
      description:
        "Custom AI and ML solutions for business intelligence and automation.",
      provider: {
        "@type": "Organization",
        name: "Quantum Code Solutions",
      },
    },
  },
};

// Landing page SEO data
export const landingPageSeoData = {
  "web-development": {
    title:
      "Professional Web Development Services | Custom Websites | Quantum Code Solutions",
    description:
      "Get professional web development services with custom design, responsive layouts, and modern functionality. Transform your online presence with our expert web developers.",
    keywords:
      "web development, custom websites, responsive design, professional web developers, website design, web applications",
    canonicalUrl: `${siteUrl}/web-development`,
  },

  "app-development": {
    title:
      "Mobile App Development Company | iOS & Android Apps | Quantum Code Solutions",
    description:
      "Leading mobile app development company creating innovative iOS and Android applications. Custom mobile solutions with exceptional user experience and performance.",
    keywords:
      "mobile app development company, iOS apps, Android apps, mobile applications, app developers, custom mobile solutions",
    canonicalUrl: `${siteUrl}/app-development`,
  },
};
