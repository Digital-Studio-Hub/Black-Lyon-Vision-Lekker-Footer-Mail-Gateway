import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export function SEO({ title, description, keywords }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Black Lyon Power Holdings`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", `${title} | Black Lyon Power Holdings`);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      }
    }
  }, [title, description, keywords]);

  return null;
}
