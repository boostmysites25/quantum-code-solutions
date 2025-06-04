// SEO Utility Functions

/**
 * Updates the page title dynamically
 * @param {string} title - The new page title
 */
export const updatePageTitle = (title) => {
  if (typeof document !== 'undefined') {
    document.title = title;
  }
};

/**
 * Updates meta description dynamically
 * @param {string} description - The new meta description
 */
export const updateMetaDescription = (description) => {
  if (typeof document !== 'undefined') {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
  }
};

/**
 * Updates canonical URL dynamically
 * @param {string} url - The canonical URL
 */
export const updateCanonicalUrl = (url) => {
  if (typeof document !== 'undefined') {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }
  }
};

/**
 * Updates Open Graph meta tags
 * @param {Object} ogData - Object containing OG data
 */
export const updateOpenGraphTags = (ogData) => {
  if (typeof document !== 'undefined') {
    Object.entries(ogData).forEach(([property, content]) => {
      let ogTag = document.querySelector(`meta[property="og:${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', `og:${property}`);
        ogTag.setAttribute('content', content);
        document.head.appendChild(ogTag);
      }
    });
  }
};

/**
 * Updates Twitter Card meta tags
 * @param {Object} twitterData - Object containing Twitter Card data
 */
export const updateTwitterCardTags = (twitterData) => {
  if (typeof document !== 'undefined') {
    Object.entries(twitterData).forEach(([name, content]) => {
      let twitterTag = document.querySelector(`meta[name="twitter:${name}"]`);
      if (twitterTag) {
        twitterTag.setAttribute('content', content);
      } else {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', `twitter:${name}`);
        twitterTag.setAttribute('content', content);
        document.head.appendChild(twitterTag);
      }
    });
  }
};

/**
 * Adds structured data to the page
 * @param {Object} structuredData - JSON-LD structured data
 * @param {string} id - Unique identifier for the script tag
 */
export const addStructuredData = (structuredData, id = 'structured-data') => {
  if (typeof document !== 'undefined') {
    // Remove existing structured data with the same ID
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
};

/**
 * Removes structured data from the page
 * @param {string} id - Unique identifier for the script tag
 */
export const removeStructuredData = (id = 'structured-data') => {
  if (typeof document !== 'undefined') {
    const script = document.getElementById(id);
    if (script) {
      script.remove();
    }
  }
};

/**
 * Updates all SEO meta tags at once
 * @param {Object} seoData - Complete SEO data object
 */
export const updateAllSEOTags = (seoData) => {
  const {
    title,
    description,
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterTitle,
    twitterDescription,
    twitterImage,
    structuredData
  } = seoData;

  // Update basic meta tags
  if (title) updatePageTitle(title);
  if (description) updateMetaDescription(description);
  if (canonicalUrl) updateCanonicalUrl(canonicalUrl);

  // Update Open Graph tags
  if (ogTitle || ogDescription || ogImage || ogUrl) {
    updateOpenGraphTags({
      ...(ogTitle && { title: ogTitle }),
      ...(ogDescription && { description: ogDescription }),
      ...(ogImage && { image: ogImage }),
      ...(ogUrl && { url: ogUrl })
    });
  }

  // Update Twitter Card tags
  if (twitterTitle || twitterDescription || twitterImage) {
    updateTwitterCardTags({
      ...(twitterTitle && { title: twitterTitle }),
      ...(twitterDescription && { description: twitterDescription }),
      ...(twitterImage && { image: twitterImage })
    });
  }

  // Update structured data
  if (structuredData) {
    addStructuredData(structuredData);
  }
};

/**
 * Generates breadcrumb structured data
 * @param {Array} breadcrumbs - Array of breadcrumb items
 * @returns {Object} Breadcrumb structured data
 */
export const generateBreadcrumbStructuredData = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

/**
 * Generates FAQ structured data
 * @param {Array} faqs - Array of FAQ items
 * @returns {Object} FAQ structured data
 */
export const generateFAQStructuredData = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Preloads critical resources
 * @param {Array} resources - Array of resource URLs to preload
 */
export const preloadCriticalResources = (resources) => {
  if (typeof document !== 'undefined') {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.url;
      link.as = resource.as || 'image';
      if (resource.type) link.type = resource.type;
      document.head.appendChild(link);
    });
  }
};

/**
 * Lazy loads non-critical CSS
 * @param {string} href - CSS file URL
 */
export const loadCSSAsync = (href) => {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = function() {
      this.media = 'all';
    };
    document.head.appendChild(link);
  }
};