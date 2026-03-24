import "./globals.css"
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import IonicScripts from "@/utils/IonicScripts";
import AnalyticsWrapper from "@/utils/AnalyticsWrapper";
import { Header } from "@/components/Header/Header";
import { BackToTop } from "@/components/BackToTop/BackToTop";
import { Footer } from "@/components/Footer/Footer";
import { baseURL, pharmacyBusinessStructuredData, pharmacyProductCategoriesStructuredData, pharmacyServicesStructuredData } from "@/constants";

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/roboto/Roboto-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-500.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-600.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-700.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-800.woff2",
      weight: "800",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-roboto'
});

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/poppins/Poppins-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-500.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-600.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-700.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-800.woff2",
      weight: "800",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Apollo Pharmacy - Quality Medicines & Healthcare in Surunga & Damak, Nepal",
  description: "Apollo Pharmacy offers comprehensive pharmaceutical services in Surunga and Damak, Nepal. Trusted pharmacists providing prescription medicines, health supplements, OTC medications, diabetic care, baby care products, ayurvedic medicines, and expert health consultation in modern, well-stocked pharmacies.",
  keywords: [
    "Apollo Pharmacy",
    "pharmacy Surunga",
    "pharmacy Damak",
    "best pharmacy Surunga",
    "best pharmacy Damak",
    "medicines Surunga",
    "medicines Damak",
    "prescription drugs Surunga",
    "health supplements Damak",
    "pharmacy Nepal",
    "OTC medicines Surunga",
    "diabetic care Damak",
    "baby care products pharmacy",
    "ayurvedic medicines Surunga",
    "vitamins supplements Damak",
    "pharmacy services Jhapa",
    "affordable medicines Surunga",
    "quality pharmacy Damak",
    "health products Nepal",
    "medical supplies Surunga",
    "Apollo Pharmacy Nepal",
    "pharmacist consultation Damak",
    "wellness products Surunga",
    "24 hour pharmacy Jhapa"
  ],
  authors: [{ name: "Apollo Pharmacy" }],
  creator: "Apollo Pharmacy",
  publisher: "Apollo Pharmacy",
  metadataBase: new URL("https://apollopharmacy.com.np"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon.ico',
        sizes: '32x32'
      },
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    title: "Apollo Pharmacy - Quality Medicines & Healthcare in Surunga & Damak, Nepal",
    description: "Trusted pharmacists in Surunga and Damak offering prescription medicines, health supplements, diabetic care, wellness products, and expert consultation in modern, customer-friendly pharmacies.",
    type: "website",
    locale: "en_US",
    url: `${baseURL}`,
    siteName: "Apollo Pharmacy",
    images: [
      {
        url: `${baseURL}/images/preview.webp`,
        width: 1200,
        height: 630,
        alt: "Apollo Pharmacy Preview",
      }
    ],
  },
  category: "health",
  classification: "Apollo Pharmacy",
  referrer: "origin-when-cross-origin",
  applicationName: "Apollo Pharmacy",
  generator: "Next.js",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <script
          type="application/ld+json"
          // "dangerouslySetInnerHTML" is a way to inject raw HTML content into a React component.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pharmacyBusinessStructuredData),  // "__html" property accepts raw HTML/text
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pharmacyServicesStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pharmacyProductCategoriesStructuredData),
          }}
        />
        {/* Verification tags if needed */}
        {/* <meta name="facebook-domain-verification" content="your-verification-code" /> */}
      </head>

      <body
        className={`${roboto.variable} ${poppins.variable}`}
        suppressHydrationWarning={true}
        id="top"
      >
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <IonicScripts />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
