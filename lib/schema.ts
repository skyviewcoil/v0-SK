export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SkyView",
  description: "ספק תקרות מתוחות יוקרתיות בישראל עם תאורה משולבת ותאימות לחללים רטובים",
  url: "https://skyview.co.il",
  telephone: "+972-722334455",
  email: "info@skyview.co.il",
  foundingDate: "2017",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IL",
    addressRegion: "Tel Aviv",
    addressLocality: "תל אביב",
  },
  areaServed: "IL",
  sameAs: [
    "https://www.facebook.com/skyview",
    "https://www.instagram.com/skyview",
  ],
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SkyView",
  image: "https://skyview.co.il/og-image.jpg",
  description: "ספק תקרות מתוחות יוקרתיות",
  telephone: "+972-722334455",
  email: "info@skyview.co.il",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IL",
    addressLocality: "תל אביב",
  },
  areaServed: "IL",
  serviceType: ["תקרה מתוחה", "תאורה משולבת", "עיצוב פנים"],
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "מהי תקרה מתוחה?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "תקרה מתוחה היא רשת פוליסטר או בד מיוחד המתוחה בפרופילים אלומיניום מסביב החלל. זה יוצר משטח חלק ואחיד בגימור שנבחר, מה שמאפשר להסתיר עמודים ותעלות אוויר, ולשלב תאורה ופתרונות קונפורטיים.",
      },
    },
    {
      "@type": "Question",
      name: "האם תקרה מתוחה מתאימה לאמבטיה?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "כן, תקרות מתוחות עמידות בפני לחות גבוהה ונוזלים, מה שהופכות אותן לאידיאליות לחדרי אמבטיה, מטבחים ותחנות רחצה. הן לא ספוגות, לא מתפיחות, ופשוטות לנקוי.",
      },
    },
    {
      "@type": "Question",
      name: "מה עם אחריות?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "כל התקרות המתוחות שלנו מגיעות עם אחריות של 10 שנים כנגד בעיות ביצוע וכישלון בחומרים. אנחנו גם מספקים שירות תחזוקה וקו תמיכה טכנית.",
      },
    },
  ],
}

export const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "תקרה מתוחה - גימור מבריק",
    description: "משטח זוהר ומחזיר אור המעניק מראה יוקרתי וחדש לחללים מודרניים",
    provider: {
      "@type": "Organization",
      name: "SkyView",
    },
    areaServed: "IL",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "תקרה מתוחה - גימור סאטן",
    description: "משטח חלק עם זוהר עדין המאזן בין משטח שטוח לזוהר סאטן",
    provider: {
      "@type": "Organization",
      name: "SkyView",
    },
    areaServed: "IL",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "תקרה מתוחה - גימור מט",
    description: "משטח לא מחזיר אור המעניק מראה רך ומודרני",
    provider: {
      "@type": "Organization",
      name: "SkyView",
    },
    areaServed: "IL",
  },
]

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})
