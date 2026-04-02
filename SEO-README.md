# SkyView Website - SEO & AI-Readability Architecture

## Overview

This website is built with a dual focus on:
1. **Search Engine Optimization (SEO)** - Making the site discoverable and indexable
2. **AI-Readability** - Making content understandable to AI systems and language models

## Key Features

### ✅ Technical SEO Foundation

- **robots.ts** - Search engine crawling configuration
- **sitemap.ts** - Dynamic XML sitemap for search indexing
- **Semantic HTML** - Proper use of heading hierarchy and structural elements
- **Meta tags** - Comprehensive metadata, Open Graph, and Twitter Card tags
- **Canonical URLs** - Prevents duplicate content issues

### ✅ Structured Data (JSON-LD)

The site includes multiple schema types:
- **Organization Schema** - Company information and social profiles
- **LocalBusiness Schema** - Service area and business details
- **FAQPage Schema** - Frequently asked questions
- **Service Schemas** - Individual service descriptions

### ✅ Content Quality

- **Explicit Information** - Clear definitions of technical terms
- **Factual Accuracy** - Specific numbers (3 finishes, 7 lighting types, 10-year warranty)
- **Comprehensive Coverage** - Covers common search queries and pain points
- **AI-Friendly Structure** - Lists, comparisons, and clear categorization

### ✅ Image Semantics

- All images include descriptive alt text
- Images placed near contextual text
- No purely decorative images without context

## File Structure

```
app/
├── layout.tsx          # Global metadata, Organization schema
├── page.tsx            # Homepage with FAQ and LocalBusiness schema
├── robots.ts           # Search engine crawling rules
└── sitemap.ts          # XML sitemap generation

lib/
├── schema.ts           # Reusable schema definitions
├── seo.ts             # SEO metadata helper functions
└── content-structure.ts # Future page structure reference

components/
└── about.tsx          # AI-readable About section with explicit facts
```

## How Search Engines Use This

### Google Search
1. Robots.txt allows crawling of all public pages
2. Sitemap.ts provides a roadmap of all indexable content
3. Metadata and structured data help Google understand context
4. Quality content scores highly for relevant keywords

### AI Systems
1. Semantic HTML makes structure clear
2. JSON-LD provides machine-readable facts
3. Explicit content in About component can be easily extracted
4. Schema markup helps AI systems classify and understand content

## Adding New Pages

### Pattern for Service Pages

Create a new page at `app/[service-slug]/page.tsx`:

```typescript
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Service Title',
  description: 'Service description...',
  keywords: ['keyword1', 'keyword2'],
  url: 'https://skyview.co.il/service-slug',
})

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Service Name",
    description: "Service description...",
    provider: {
      "@type": "Organization",
      name: "SkyView"
    },
    areaServed: "IL"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}} />
      {/* Page content with semantic HTML */}
    </>
  )
}
```

## Content Guidelines for AI-Readability

### ✅ DO:
- Use clear heading hierarchy (h1 → h2 → h3)
- Use lists (ul/ol) for multiple items
- Use semantic HTML elements (section, article, main)
- Include alt text for all images
- Write explicit factual statements
- Use proper schema markup for different content types
- Organize information by category

### ❌ DON'T:
- Use divs instead of semantic elements
- Omit alt text from images
- Mix unrelated concepts in the same section
- Use vague language ("some things", "might be")
- Rely solely on visual design for information hierarchy
- Use decorative images without context

## Monitoring & Maintenance

### Tools to Use
- **Google Search Console** - Monitor indexing and search performance
- **Google PageSpeed Insights** - Check Core Web Vitals
- **Schema.org Validator** - Validate structured data
- **SEO Analyzer Tools** - Check metadata completeness

### Regular Checks
1. Verify sitemap updates when adding new pages
2. Check Search Console for crawl errors
3. Monitor average position for target keywords
4. Verify Core Web Vitals remain in "Good" range
5. Check for broken links

### Keywords to Monitor
- תקרה מתוחה (stretch ceiling)
- תקרה מתוחה מבריק (glossy stretch ceiling)
- תקרה מתוחה אמבטיה (bathroom stretch ceiling)
- תאורה משולבת (integrated lighting)
- תקרה מוארת (illuminated ceiling)
- תקרה vs גבס (stretch ceiling vs drywall)

## Future Enhancements

### Planned Service Pages
Reference `lib/content-structure.ts` for a list of planned pages:
- Stretch ceiling definition and benefits
- Pricing and cost calculator
- Bathroom/wet-space applications
- Lighting options deep-dive
- Comparison with drywall
- Acoustic solutions
- Commercial solutions

### Content Expansion
- Blog posts with long-form content
- Installation guides and how-to articles
- Customer testimonials with Review schema
- Project case studies with breadcrumbs
- Video content with VideoObject schema

### Technical Improvements
- Implement breadcrumb navigation
- Add breadcrumb schema for hierarchical pages
- Implement review/testimonial schema
- Add video schema for any video content
- Implement FAQ schema with more questions

## Troubleshooting

### Schema Not Appearing in Rich Results
1. Validate using https://schema.org/validate
2. Check Google's Rich Results Test
3. Verify JSON-LD is valid (use JSON Validator)
4. Check that schema matches Google's documentation

### Low Search Visibility
1. Check Google Search Console for indexing issues
2. Verify robots.txt isn't blocking important pages
3. Check for noindex tags
4. Ensure sitemap is being read
5. Verify content quality and relevance

### Poor Core Web Vitals
1. Optimize image sizes and formats
2. Reduce JavaScript execution time
3. Implement lazy loading
4. Minimize CSS/JS bundles
5. Use CDN for static assets

## Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org)
- [MDN: Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Next.js SEO Best Practices](https://nextjs.org/learn/seo)

## Questions?

For questions about the SEO implementation, refer to:
1. `SEO-IMPLEMENTATION-GUIDE.md` - Detailed technical guide
2. `lib/schema.ts` - All schema definitions
3. `lib/seo.ts` - Metadata utilities
4. `components/about.tsx` - AI-readable content example
