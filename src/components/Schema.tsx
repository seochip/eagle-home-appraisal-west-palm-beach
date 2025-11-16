import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  path: string;
}

const ORGANIZATION_ID = "https://eaglehomeappraisalwestpalmbeach.com/#organization";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ORGANIZATION_ID,
    "name": "Eagle Home Appraisal",
    "description": "Independent real estate appraiser in West Palm Beach specializing in private divorce, estate, tax appeal, and litigation valuations.",
    "url": "https://eaglehomeappraisalwestpalmbeach.com/",
    "telephone": "+1-561-282-5509",
    "email": "marlene@eaglehomeappraisal.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1500 North Congress Ave, Suite 410",
      "addressLocality": "West Palm Beach",
      "addressRegion": "FL",
      "postalCode": "33409",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.7153",
      "longitude": "-80.0534"
    },
    "areaServed": [
      "West Palm Beach",
      "Palm Beach Gardens",
      "Jupiter",
      "Boca Raton",
      "Delray Beach",
      "Palm Beach County",
      "South Florida"
    ],
    "priceRange": "$$$",
    "sameAs": [
      "https://www.facebook.com/eaglehomeappraisalwestpalmbeach",
      "https://www.linkedin.com/company/eaglehomeappraisalwestpalmbeach",
      "https://www.instagram.com/ehawestpalmbeach/",
      "https://x.com/ehapalmbeach",
      "https://www.pinterest.com/ehawestpalmbeach/",
      "https://www.tiktok.com/@ehawestpalmbeach",
      "https://www.youtube.com/@ehawestpalmbeach"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://eaglehomeappraisalwestpalmbeach.com/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": `https://eaglehomeappraisalwestpalmbeach.com${item.path}`
      }))
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface FAQSchemaProps {
  faqs: Array<{ question: string; answer: string }>;
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
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

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface ServicePageSchemaProps {
  name: string;
  description: string;
  url: string;
  breadcrumbs: BreadcrumbItem[];
  faqs?: Array<{ question: string; answer: string }>;
}

export function ServicePageSchema({ name, description, url, breadcrumbs, faqs }: ServicePageSchemaProps) {
  const schemas = [];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": `https://eaglehomeappraisalwestpalmbeach.com${url}`,
    "provider": {
      "@id": ORGANIZATION_ID
    },
    "areaServed": "Palm Beach County, FL"
  };
  schemas.push(serviceSchema);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://eaglehomeappraisalwestpalmbeach.com/"
      },
      ...breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": `https://eaglehomeappraisalwestpalmbeach.com${item.path}`
      }))
    ]
  };
  schemas.push(breadcrumbSchema);

  if (faqs && faqs.length > 0) {
    const faqSchema = {
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
    schemas.push(faqSchema);
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemas)}
      </script>
    </Helmet>
  );
}

interface CollectionPageSchemaProps {
  name: string;
  description: string;
  url: string;
  breadcrumbs: BreadcrumbItem[];
  items: Array<{ name: string; url: string }>;
}

export function CollectionPageSchema({ name, description, url, breadcrumbs, items }: CollectionPageSchemaProps) {
  const schemas = [];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": name,
    "description": description,
    "url": `https://eaglehomeappraisalwestpalmbeach.com${url}`,
    "publisher": {
      "@id": ORGANIZATION_ID
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": items.length,
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "url": `https://eaglehomeappraisalwestpalmbeach.com${item.url}`
      }))
    }
  };
  schemas.push(collectionSchema);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://eaglehomeappraisalwestpalmbeach.com/"
      },
      ...breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": `https://eaglehomeappraisalwestpalmbeach.com${item.path}`
      }))
    ]
  };
  schemas.push(breadcrumbSchema);

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemas)}
      </script>
    </Helmet>
  );
}

export function LocalBusinessSchema({ name = 'Eagle Home Appraisal', description = 'Independent real estate appraiser in West Palm Beach, FL specializing in divorce, estate, tax appeal, and private valuations.' }: { name?: string; description?: string }) {
  return <OrganizationSchema />;
}

export function ServiceSchema({ name, description, serviceType }: { name: string; description: string; serviceType: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "name": name,
    "description": description,
    "provider": {
      "@id": ORGANIZATION_ID
    },
    "areaServed": "Palm Beach County, FL"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface SpeakableSchemaProps {
  cssSelectors?: string[];
  xpaths?: string[];
}

export function SpeakableSchema({ cssSelectors, xpaths }: SpeakableSchemaProps) {
  const speakable: {
    "@type": string;
    cssSelector?: string[];
    xpath?: string[];
  } = {
    "@type": "SpeakableSpecification"
  };

  if (cssSelectors && cssSelectors.length > 0) {
    speakable.cssSelector = cssSelectors;
  }

  if (xpaths && xpaths.length > 0) {
    speakable.xpath = xpaths;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": speakable
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
