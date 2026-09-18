export type PageRoute = 'home' | 'rooms' | 'gallery' | 'contact';

export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capacity: string;
  bedType: string;
  bathroom: string;
  size: string;
  image: string;
  galleryImages: string[];
  facilities: string[];
  priceNotice: string; // "Contact for Price"
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  iconName: string;
  imageUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'lobby' | 'rooms' | 'beds' | 'bathrooms' | 'common' | 'surroundings';
  categoryLabel: string;
  imageUrl: string;
  aspectRatio?: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message: string;
}
