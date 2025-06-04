import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  noindex = false,
  nofollow = false,
}) => {
  const siteUrl = 'https://quantumcodesolutions.com';
  const defaultImage = `${siteUrl}/logo.png`;
  
  // Default values
  const seoTitle = title || 'Quantum Code Solutions - Leading Software Development Company';
  const seoDescription = description || 'Transform your business with cutting-edge software solutions. Expert web development, mobile apps, AI/ML, and digital transformation services. Get started today!';
  const seoKeywords = keywords || 'software development, web development, mobile app development, AI solutions, machine learning, digital transformation, custom software, React development, Node.js, Python';
  const seoCanonicalUrl = canonicalUrl || siteUrl;
  const seoOgTitle = ogTitle || seoTitle;
  const seoOgDescription = ogDescription || seoDescription;
  const seoOgImage = ogImage || defaultImage;
  const seoTwitterTitle = twitterTitle || seoTitle;
  const seoTwitterDescription = twitterDescription || seoDescription;
  const seoTwitterImage = twitterImage || defaultImage;

  // Robots meta content
  const robotsContent = `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;

  // Force update document title for better SPA support
  useEffect(() => {
    document.title = seoTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoDescription);
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', seoCanonicalUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', seoCanonicalUrl);
      document.head.appendChild(canonical);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seoOgTitle);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seoOgDescription);
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', seoCanonicalUrl);
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', seoOgImage);
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', seoTwitterTitle);
    
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', seoTwitterDescription);
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute('content', seoTwitterImage);
    
  }, [seoTitle, seoDescription, seoCanonicalUrl, seoOgTitle, seoOgDescription, seoOgImage, seoTwitterTitle, seoTwitterDescription, seoTwitterImage]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="robots" content={robotsContent} />
      <meta name="author" content="Quantum Code Solutions" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoOgTitle} />
      <meta property="og:description" content={seoOgDescription} />
      <meta property="og:image" content={seoOgImage} />
      <meta property="og:url" content={seoCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Quantum Code Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={seoTwitterTitle} />
      <meta name="twitter:description" content={seoTwitterDescription} />
      <meta name="twitter:image" content={seoTwitterImage} />
      <meta name="twitter:site" content="@quantumcodesol" />
      <meta name="twitter:creator" content="@quantumcodesol" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#010C2A" />
      <meta name="msapplication-TileColor" content="#010C2A" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;