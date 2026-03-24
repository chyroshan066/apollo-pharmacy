import { MEDIA_ITEMS } from '@/constants/gallery';
import Gallery from './_components/Gallery/Gallery';
import { Metadata } from 'next';
import { baseURL } from '@/constants';

export const metadata: Metadata = {
  title: "Apollo Pharmacy Gallery - Modern Pharmacy Facilities in Surunga & Damak",
  description: "Explore Apollo Pharmacy's well-organized facilities in Surunga and Damak, Nepal. View our comprehensive medicine inventory, comfortable consultation areas, organized product displays, and hygienic environment designed for quality pharmaceutical care.",
  keywords: [
    "Apollo Pharmacy gallery",
    "pharmacy photos Surunga",
    "pharmacy photos Damak",
    "modern pharmacy facilities",
    "pharmacy interior Surunga",
    "pharmacy interior Damak",
    "organized medicine display",
    "pharmacy consultation area",
    "clean pharmacy environment",
    "pharmacy facilities Nepal",
    "medicine inventory photos",
    "professional pharmacy setup",
    "hygienic pharmacy",
    "customer-friendly pharmacy",
    "pharmacy store tour",
    "pharmacy atmosphere",
    "medicine storage facilities",
    "quality assured pharmacy",
    "pharmacy amenities Jhapa",
    "Surunga pharmacy facilities",
    "Damak pharmacy facilities"
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Apollo Pharmacy Gallery - Modern Facilities in Surunga & Damak",
    description: "Take a virtual tour of Apollo Pharmacy's modern facilities in Surunga and Damak. See our well-stocked medicine inventory, organized displays, and customer-centered environment.",
    type: "website",
    locale: "en_US",
    url: `${baseURL}/gallery`,
    siteName: "Apollo Pharmacy",
    images: [
      {
        url: `${baseURL}/images/preview.webp`,
        width: 1200,
        height: 630,
        alt: "Apollo Pharmacy Facilities and Medicine Inventory Gallery",
      },
    ],
  },
  other: {
    "og:image:type": "image/webp",
    "twitter:card": "summary_large_image",
    "twitter:title": "Apollo Pharmacy Gallery - Modern Facilities",
    "twitter:description": "Explore our well-organized pharmacy facilities and comprehensive medicine inventory in Surunga and Damak, Nepal",
    "twitter:image": `${baseURL}/images/preview.webp`,
  },
  classification: "Pharmacy Gallery",
};

export default function GalleryPage() {
  return (
    <main>
      <Gallery
        mediaItems={MEDIA_ITEMS}
      />
    </main>
  );
}