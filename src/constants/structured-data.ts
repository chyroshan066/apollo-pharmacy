interface PostalAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface AggregateRating {
  "@type": "AggregateRating";
  ratingValue: string;
  ratingCount: string;
}

interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: string;
  longitude: string;
}

interface EntryPoint {
  "@type": "EntryPoint";
  urlTemplate: string;
}

interface ContactAction {
  "@type": "ContactAction";
  target: EntryPoint;
}

interface Drug {
  "@type": "Drug";
  name: string;
  description: string;
}

interface MedicalService {
  "@type": "MedicalService";
  name: string;
  description: string;
  serviceType: string;
}

interface ServiceCategory {
  "@type": "MedicalSpecialty";
  name: string;
  description: string;
  includedServices: string[];
}

interface ListItem {
  "@type": "ListItem";
  position: number;
  item: ServiceCategory;
}

interface PharmacyBusinessStructuredData {
  "@context": "https://schema.org";
  "@type": "Pharmacy";
  name: string;
  description: string;
  url: string | undefined;
  address: PostalAddress[];
  telephone: string[];
  email: string;
  openingHours: string[];
  priceRange: string;
  aggregateRating: AggregateRating;
  geo: GeoCoordinates[];
  sameAs: string[];
  potentialAction: ContactAction;
}

interface PharmacyServicesStructuredData {
  "@context": "https://schema.org";
  "@type": "MedicalBusiness";
  name: string;
  description: string;
  availableService: MedicalService[];
}

interface ProductCategoriesStructuredData {
  "@context": "https://schema.org";
  "@type": "ItemList";
  name: string;
  description: string;
  itemListElement: ListItem[];
}

export const pharmacyBusinessStructuredData: PharmacyBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  "name": "Apollo Pharmacy", 
  "description": "Professional pharmaceutical services in Surunga and Damak. Comprehensive healthcare solutions including prescription medicines, OTC medications, health supplements, diabetic care, baby care products, and expert consultation. Quality medicines, experienced pharmacists, and customer-focused approach.", 
  "url": "https://www.apollopharmacy.com.np",
  
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Hospital Road",
      "addressLocality": "Surunga",
      "addressRegion": "Koshi",
      "postalCode": "57200",
      "addressCountry": "NP"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Jaycees Road",
      "addressLocality": "Damak",
      "addressRegion": "Koshi",
      "postalCode": "57217",
      "addressCountry": "NP"
    }
  ],
  
  "telephone": ["+977-9848136691", "+977-023570944"],
  "email": "apollohealthcarecenter0944@gmail.com",
  
  "openingHours": [
    "Su-Sa 7:00-22:00",
  ],
  
  "priceRange": "$$",
  
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "ratingCount": "2"
  },
  
  "geo": [
    {
      "@type": "GeoCoordinates",
      "latitude": "26.66068", 
      "longitude": "87.69849"
    },
    {
      "@type": "GeoCoordinates",
      "latitude": "26.64110", 
      "longitude": "87.89030"
    }
  ],
  
  "sameAs": [
    // "https://www.facebook.com/apollopharmacy.nepal",
  ],
  
  "potentialAction": {
    "@type": "ContactAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.apollopharmacy.com.np/#contact"
    }
  }
};

export const pharmacyServicesStructuredData: PharmacyServicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Pharmacy Services",
  "description": "Comprehensive pharmaceutical services including prescription dispensing, health consultation, wellness products, and specialized care",
  
  "availableService": [
    {
      "@type": "MedicalService",
      "name": "Prescription Dispensing",
      "description": "Professional dispensing of prescription medications with expert guidance and dosage instructions. Quality-assured medicines from trusted manufacturers.",
      "serviceType": "Pharmaceutical Care"
    },
    {
      "@type": "MedicalService",
      "name": "Medication Counseling",
      "description": "Expert pharmacist consultation for proper medication usage, side effects, and drug interactions. Personalized guidance for your health needs.",
      "serviceType": "Consultation"
    },
    {
      "@type": "MedicalService",
      "name": "OTC Medications",
      "description": "Wide range of over-the-counter medicines for common ailments including pain relief, cold and flu, digestive issues, and allergies.",
      "serviceType": "Product Supply"
    },
    {
      "@type": "MedicalService",
      "name": "Health Supplements & Vitamins",
      "description": "Comprehensive selection of multivitamins, minerals, protein supplements, and nutritional products for overall wellness.",
      "serviceType": "Wellness Products"
    },
    {
      "@type": "MedicalService",
      "name": "Diabetic Care Products",
      "description": "Complete diabetic care solutions including glucose meters, test strips, insulin supplies, and diabetic-friendly supplements.",
      "serviceType": "Specialized Care"
    },
    {
      "@type": "MedicalService",
      "name": "Baby Care Products",
      "description": "Full range of baby care essentials including diapers, baby food, milk formula, lotions, and infant health products.",
      "serviceType": "Product Supply"
    },
    {
      "@type": "MedicalService",
      "name": "Ayurvedic Medicines",
      "description": "Traditional ayurvedic remedies and herbal medicines for natural healing and wellness. Quality ayurvedic products from trusted brands.",
      "serviceType": "Alternative Medicine"
    },
    {
      "@type": "MedicalService",
      "name": "Personal Care Products",
      "description": "Wide selection of personal hygiene and care products including sanitizers, face masks, bandages, and first aid supplies.",
      "serviceType": "Product Supply"
    },
    {
      "@type": "MedicalService",
      "name": "Blood Pressure Monitoring",
      "description": "Free blood pressure checking service with accurate digital equipment. Regular monitoring for hypertension management.",
      "serviceType": "Health Monitoring"
    },
    {
      "@type": "MedicalService",
      "name": "Blood Sugar Testing",
      "description": "Quick and accurate blood glucose testing service for diabetes management and monitoring.",
      "serviceType": "Health Monitoring"
    },
    {
      "@type": "MedicalService",
      "name": "Prescription Verification",
      "description": "Professional verification of prescriptions to ensure safety and accuracy before dispensing medications.",
      "serviceType": "Pharmaceutical Care"
    },
    {
      "@type": "MedicalService",
      "name": "Medicine Home Delivery",
      "description": "Convenient home delivery service for medicines and health products. Fast and reliable delivery to your doorstep.",
      "serviceType": "Delivery Service"
    },
    {
      "@type": "MedicalService",
      "name": "Generic Medicine Alternatives",
      "description": "Cost-effective generic medicine alternatives with same efficacy. Expert guidance on quality generic options.",
      "serviceType": "Pharmaceutical Care"
    },
    {
      "@type": "MedicalService",
      "name": "First Aid Supplies",
      "description": "Complete range of first aid products including bandages, antiseptics, wound care, and emergency medical supplies.",
      "serviceType": "Product Supply"
    },
    {
      "@type": "MedicalService",
      "name": "Surgical & Medical Equipment",
      "description": "Medical devices and surgical supplies including thermometers, nebulizers, blood pressure monitors, and mobility aids.",
      "serviceType": "Medical Equipment"
    },
    {
      "@type": "MedicalService",
      "name": "Women's Health Products",
      "description": "Specialized products for women's health including prenatal vitamins, feminine hygiene, and maternal care products.",
      "serviceType": "Specialized Care"
    },
    {
      "@type": "MedicalService",
      "name": "Elderly Care Products",
      "description": "Products designed for elderly care including adult diapers, mobility aids, supplements, and chronic disease management supplies.",
      "serviceType": "Specialized Care"
    },
    {
      "@type": "MedicalService",
      "name": "Vaccination Services",
      "description": "Professional vaccination services including flu shots, tetanus, and other preventive immunizations.",
      "serviceType": "Preventive Care"
    },
    {
      "@type": "MedicalService",
      "name": "Health Screening Packages",
      "description": "Comprehensive health screening services including basic health checkups and diagnostic test coordination.",
      "serviceType": "Preventive Care"
    },
    {
      "@type": "MedicalService",
      "name": "Nutrition Consultation",
      "description": "Expert nutritional guidance and diet planning for weight management, diabetes, and overall wellness.",
      "serviceType": "Consultation"
    }
  ]
};

export const pharmacyProductCategoriesStructuredData: ProductCategoriesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Pharmacy Product Categories and Services",
  "description": "Comprehensive pharmaceutical products and services organized by category",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Prescription Medicines",
        "description": "Quality prescription medications for various health conditions",
        "includedServices": ["Antibiotics", "Chronic Disease Medications", "Pain Management", "Cardiovascular Drugs"]
      }
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Over-The-Counter (OTC)",
        "description": "Common medications available without prescription",
        "includedServices": ["Pain Relief", "Cold & Flu", "Digestive Health", "Allergy Medications"]
      }
    },
    {
      "@type": "ListItem",
      "position": 3, 
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Health Supplements",
        "description": "Vitamins, minerals, and nutritional supplements",
        "includedServices": ["Multivitamins", "Protein Supplements", "Omega-3", "Calcium & Vitamin D"]
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "MedicalSpecialty", 
        "name": "Diabetic Care",
        "description": "Complete diabetic management products and supplies",
        "includedServices": ["Glucose Meters", "Test Strips", "Insulin Supplies", "Diabetic Supplements"]
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Baby & Mother Care", 
        "description": "Products for infants, babies, and maternal health",
        "includedServices": ["Baby Food", "Diapers", "Infant Formula", "Prenatal Vitamins"]
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Ayurvedic & Herbal",
        "description": "Traditional and natural healing products",
        "includedServices": ["Ayurvedic Medicines", "Herbal Supplements", "Natural Remedies", "Traditional Formulations"]
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Personal Care & Hygiene",
        "description": "Daily care and hygiene essentials", 
        "includedServices": ["Sanitizers", "Face Masks", "Hygiene Products", "Skincare"]
      }
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Medical Equipment",
        "description": "Home healthcare and monitoring devices",
        "includedServices": ["BP Monitors", "Thermometers", "Nebulizers", "Mobility Aids"]
      }
    }
  ]
};