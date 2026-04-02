import type { Metadata } from 'next'

export interface PageMetadataProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  url?: string
}

export function generatePageMetadata(props: PageMetadataProps): Metadata {
  const { title, description, keywords = [], ogImage, url = 'https://skyview.co.il' } = props

  return {
    title: `${title} | SkyView`,
    description,
    keywords,
    openGraph: {
      title: `${title} | SkyView`,
      description,
      url,
      type: 'website',
      siteName: 'SkyView',
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | SkyView`,
      description,
    },
  }
}
