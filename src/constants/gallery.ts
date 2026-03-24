import { MediaItem } from "@/types";

export const MEDIA_ITEMS: MediaItem[] = [
    // {
    //     id: 1,
    //     src: "",
    //     alt: "Dr. Mukesh Kumar Shah - Lead Orthodontist & Clinic Director",
    //     title: "Dr. Mukesh Kumar Shah - Lead Orthodontist & Clinic Director",
    //     type: "image"
    // },
    // {
    //     id: 2,
    //     src: "",
    //     alt: "Advanced Dental Care at Pradhan Dental Clinic - Where Healthy Smiles Begin",
    //     title: "Advanced Dental Care at Pradhan Dental Clinic - Where Healthy Smiles Begin",
    //     type: "video",
    //     // poster: "/images/gallery/v1-poster.webp" // Optional: thumbnail for the video
    // },
];

// Legacy export for backward compatibility
export const PHOTOS = MEDIA_ITEMS.filter(item => item.type === 'image');

// Helper functions for filtering media
export const getImages = () => MEDIA_ITEMS.filter(item => item.type === 'image');
export const getVideos = () => MEDIA_ITEMS.filter(item => item.type === 'video');
export const getAllMedia = () => MEDIA_ITEMS;