import { Helmet } from 'react-helmet-async';

const ORGANIZATION_ID = 'https://eaglehomeappraisalwestpalmbeach.com/#organization';

interface OrganizationSchemaProps {
  showFull?: boolean;
}

export function OrganizationSchema({ showFull = false }: OrganizationSchemaProps = {}) {
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
    "priceRange": "$$$"
  };

  if (showFull) {
    Object.assign(schema, {
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
    });
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string[];
  provider?: {
    name: string;
    '@id': string;
  };
}

export function ServiceSchema({ name, description, url, serviceType, areaServed, provider }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": `https://eaglehomeappraisalwestpalmbeach.com${url}`,
    "serviceType": serviceType,
    "provider": provider || {
      "@id": ORGANIZATION_ID
    },
    "areaServed": areaServed || [
      {
        "@type": "City",
        "name": "West Palm Beach",
        "containedIn": {
          "@type": "AdministrativeArea",
          "name": "Palm Beach County"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Palm Beach County"
      }
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

interface BreadcrumbItem {
  name: string;
  path?: string;
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
        "item": item.path
          ? `https://eaglehomeappraisalwestpalmbeach.com${item.path}`
          : undefined
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

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
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

interface ItemListItem {
  name: string;
  url: string;
  description?: string;
  position?: number;
}

interface ItemListSchemaProps {
  name: string;
  description: string;
  items: ItemListItem[];
  itemListOrder?: 'Ascending' | 'Descending' | 'Unordered';
}

export function ItemListSchema({ name, description, items, itemListOrder = 'Unordered' }: ItemListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": name,
    "description": description,
    "itemListOrder": `https://schema.org/ItemList${itemListOrder}`,
    "numberOfItems": items.length,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": item.position || index + 1,
      "name": item.name,
      "url": `https://eaglehomeappraisalwestpalmbeach.com${item.url}`,
      "description": item.description
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

interface CollectionPageSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function CollectionPageSchema({ name, description, url }: CollectionPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": name,
    "description": description,
    "url": `https://eaglehomeappraisalwestpalmbeach.com${url}`,
    "isPartOf": {
      "@id": "https://eaglehomeappraisalwestpalmbeach.com/#website"
    },
    "provider": {
      "@id": ORGANIZATION_ID
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

interface BlogPostSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author?: string;
  image?: string;
}

export function BlogPostSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = "Eagle Home Appraisal",
  image = "https://eaglehomeappraisalwestpalmbeach.com/og-image.jpg"
}: BlogPostSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "url": `https://eaglehomeappraisalwestpalmbeach.com${url}`,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      "name": author
    },
    "publisher": {
      "@id": ORGANIZATION_ID
    },
    "image": image,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://eaglehomeappraisalwestpalmbeach.com${url}`
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

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author?: string;
  image?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = "Eagle Home Appraisal",
  image = "https://eaglehomeappraisalwestpalmbeach.com/og-image.jpg"
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": `https://eaglehomeappraisalwestpalmbeach.com${url}`,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      "name": author
    },
    "publisher": {
      "@id": ORGANIZATION_ID
    },
    "image": image,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://eaglehomeappraisalwestpalmbeach.com${url}`
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

interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
}

export function HowToSchema({ name, description, steps, totalTime, estimatedCost }: HowToSchemaProps) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": step.url
    })),
    "provider": {
      "@id": ORGANIZATION_ID
    }
  };

  if (totalTime) schema.totalTime = totalTime;
  if (estimatedCost) schema.estimatedCost = estimatedCost;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface PlaceSchemaProps {
  name: string;
  description: string;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: {
    latitude: string;
    longitude: string;
  };
  containedInPlace?: string;
}

export function PlaceSchema({ name, description, address, geo, containedInPlace }: PlaceSchemaProps) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": name,
    "description": description
  };

  if (address) {
    schema.address = {
      "@type": "PostalAddress",
      ...address
    };
  }

  if (geo) {
    schema.geo = {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    };
  }

  if (containedInPlace) {
    schema.containedInPlace = {
      "@type": "Place",
      "name": containedInPlace
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface ReviewSchemaProps {
  itemName: string;
  itemType?: string;
  author: string;
  datePublished: string;
  reviewBody: string;
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
}

export function ReviewSchema({
  itemName,
  itemType = "LocalBusiness",
  author,
  datePublished,
  reviewBody,
  ratingValue,
  bestRating = 5,
  worstRating = 1
}: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": itemType,
      "@id": ORGANIZATION_ID,
      "name": itemName
    },
    "author": {
      "@type": "Person",
      "name": author
    },
    "datePublished": datePublished,
    "reviewBody": reviewBody,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": ratingValue,
      "bestRating": bestRating,
      "worstRating": worstRating
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

interface VideoObjectSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl?: string;
  embedUrl?: string;
  duration?: string;
}

export function VideoObjectSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  duration
}: VideoObjectSchemaProps) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate
  };

  if (contentUrl) schema.contentUrl = contentUrl;
  if (embedUrl) schema.embedUrl = embedUrl;
  if (duration) schema.duration = duration;

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
  breadcrumbs: Array<{ name: string; path: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export function ServicePageSchema({ name, description, url, breadcrumbs, faqs }: ServicePageSchemaProps) {
  return (
    <>
      <ServiceSchema
        name={name}
        description={description}
        url={url}
        serviceType="Real Estate Appraisal"
      />
      <BreadcrumbSchema
        items={breadcrumbs.map(item => ({ name: item.name, path: item.path }))}
      />
      <FAQSchema faqs={faqs} />
    </>
  );
}
