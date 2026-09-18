import { Room, Facility, GalleryItem } from '../types';

export const HOTEL_INFO = {
  name: 'Marhaba Hotel',
  phone: '+92 319 3417373',
  phoneRaw: '+923193417373',
  address: 'Malik Sher Ahmed Street, I, 340 Murree Rd, Committee Chowk, Rawalpindi, 46000, Pakistan',
  tagline: 'Comfort, Convenience & Hospitality in the Heart of Rawalpindi',
  aboutShort: 'Marhaba Hotel offers clean, comfortable, and affordable accommodation in the prime commercial hub of Committee Chowk, Murree Road, Rawalpindi. Designed for families, business travelers, and visitors, we pride ourselves on exceptional hospitality, hygiene, and accessible urban location.',
  aboutFull: 'Located centrally on Murree Road in Rawalpindi, Marhaba Hotel provides guests with easy access to major transport hubs, shopping centers, and local landmarks. Our dedicated team is committed to delivering a warm, hassle-free stay with well-appointed rooms, 24/7 reception service, daily housekeeping, and high-speed Wi-Fi.',
  mapCoordinates: {
    lat: 33.6067,
    lng: 73.0694,
  },
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.253689437149!2d73.06691637637841!3d33.60672197332766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9487c92f7a07%3A0x6b8db7c02b37803!2sCommittee%20Chowk%2C%20Murree%20Rd%2C%20Rawalpindi!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk'
};

export const ROOMS: Room[] = [
  {
    id: 'standard-room',
    name: 'Standard Room',
    tagline: 'Clean, cozy and budget-friendly for essential comfort',
    description: 'Perfect for solo travelers or short business trips, the Standard Room offers a well-furnished space equipped with a comfortable queen or single bed, modern en-suite bathroom, high-speed Wi-Fi, and flat-screen TV.',
    capacity: '1 - 2 Guests',
    bedType: '1 Comfortable Queen Bed or 2 Single Beds',
    bathroom: 'Attached Private Bathroom with Hot/Cold Shower',
    size: '220 sq. ft.',
    image: 'https://i.pinimg.com/1200x/95/76/72/9576725afff8564a13b38f8ca0822d84.jpg',
    galleryImages: [
      'https://i.pinimg.com/1200x/95/76/72/9576725afff8564a13b38f8ca0822d84.jpg',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Free High-Speed Wi-Fi', 'Air Conditioning & Heating', 'Flat Screen LED TV', '24/7 Room Service', 'Daily Housekeeping', 'Clean Towels & Toiletries'],
    priceNotice: 'Contact for Price'
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    tagline: 'Spacious elegance with upgraded amenities and city views',
    description: 'Designed for guests seeking extra space and luxury, our Deluxe Room features premium bedding, stylish decor, a dedicated seating arrangement, climate control, and superior sound isolation.',
    capacity: '2 Guests',
    bedType: '1 King Size Premium Bed',
    bathroom: 'Modern Luxury Bathroom with Premium Amenities',
    size: '310 sq. ft.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Free High-Speed Wi-Fi', 'King Size Deluxe Mattress', 'In-Room Seating & Desk', 'Climate Control AC', 'Electric Kettle & Tea Set', 'Intercom & 24/7 Service'],
    priceNotice: 'Contact for Price'
  },
  {
    id: 'family-room',
    name: 'Family Room',
    tagline: 'Spacious multi-bed accommodation tailored for families',
    description: 'Our Family Room is thoughtfully arranged to comfortably accommodate families or group travelers with multiple beds, ample storage space, relaxing seating area, and pristine family-friendly environment.',
    capacity: '3 - 4 Guests',
    bedType: '2 Double Beds or 1 King + 1 Single Bed',
    bathroom: 'Spacious Bathroom with Hot Water Shower',
    size: '420 sq. ft.',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Free High-Speed Wi-Fi', 'Multiple Bed Options', 'Family Seating Corner', 'Large LED TV', '24/7 Hot Water & Power Backup', 'Daily Housekeeping'],
    priceNotice: 'Contact for Price'
  },
  {
    id: 'executive-room',
    name: 'Executive Room',
    tagline: 'Ultimate luxury with premium furnishings & priority service',
    description: 'The Executive Room delivers a top-tier hospitality experience with elegant interiors, a plush king bed, ergonomic workspace, sofa lounge, and upgraded luxury bath essentials.',
    capacity: '2 Guests',
    bedType: '1 Extra Large King Bed',
    bathroom: 'Executive En-Suite with Rain Shower & Bath Amenities',
    size: '380 sq. ft.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Free High-Speed Wi-Fi', 'Plush King Pillowtop Bed', 'Sofa Lounge & Desk', 'Smart TV with Cable', 'Mini Fridge & Refreshments', 'Priority Room Service'],
    priceNotice: 'Contact for Price'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'comfort-rooms',
    name: 'Comfortable Rooms',
    description: 'Elegantly furnished rooms with plush bedding, clean linen, and sound isolation for a restful sleep.',
    iconName: 'Bed',
    imageUrl: 'https://i.pinimg.com/1200x/95/76/72/9576725afff8564a13b38f8ca0822d84.jpg'
  },
  {
    id: 'free-wifi',
    name: 'Free Wi-Fi',
    description: 'High-speed internet access available across all guest rooms, lobby, and public areas.',
    iconName: 'Wifi',
    imageUrl: 'https://i.pinimg.com/1200x/db/f7/8b/dbf78b3e33f6c370c3ed56a570ac8695.jpg'
  },
  {
    id: 'reception-24-7',
    name: '24/7 Reception',
    description: 'Round-the-clock front desk support for seamless check-in, check-out, and guest assistance.',
    iconName: 'Clock',
    imageUrl: 'https://i.pinimg.com/1200x/3a/23/b0/3a23b0cd19dbb840fd38ad7fd535110c.jpg'
  },
  {
    id: 'housekeeping',
    name: 'Housekeeping',
    description: 'Daily room cleaning, fresh towel replacements, and sanitized living spaces.',
    iconName: 'Sparkles',
    imageUrl: 'https://i.pinimg.com/736x/79/b6/84/79b6849f1a95052542a8406560412989.jpg'
  },
  {
    id: 'family-friendly',
    name: 'Family-Friendly',
    description: 'Welcoming, safe, and respectful environment tailored for families traveling together.',
    iconName: 'Users',
    imageUrl: 'https://i.pinimg.com/736x/64/92/13/64921367b0a61ba8553f607dd6842ad8.jpg'
  },
  {
    id: 'convenient-location',
    name: 'Convenient Location',
    description: 'Situated on Murree Road near Committee Chowk, close to markets and public transport.',
    iconName: 'MapPin',
    imageUrl: 'https://i.pinimg.com/736x/b3/08/7c/b3087cc6714e4208781d2e0bf1db9c82.jpg'
  },
  {
    id: 'parking',
    name: 'Parking Facility',
    description: 'Convenient parking space for hotel guests visiting with private vehicles.',
    iconName: 'Car',
    imageUrl: 'https://i.pinimg.com/736x/d4/ea/77/d4ea7772861641070cf1e5bbb7ffd6aa.jpg'
  },
  {
    id: 'room-service',
    name: 'In-Room Service',
    description: 'Prompt room service for tea, water, and guest requirements right to your door.',
    iconName: 'Coffee',
    imageUrl: 'https://i.pinimg.com/736x/b7/94/4d/b7944d02b60e690e4247a8638223c838.jpg'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'ext-1',
    title: 'Marhaba Hotel Exterior & Building View',
    category: 'exterior',
    categoryLabel: 'Hotel Exterior',
    imageUrl: 'https://i.pinimg.com/1200x/8e/2c/9a/8e2c9aaa5f4015a70e2985101bee260f.jpg'
  },
  {
    id: 'ext-2',
    title: 'Marhaba Hotel Entrance & Murree Road Front',
    category: 'exterior',
    categoryLabel: 'Hotel Exterior',
    imageUrl: 'https://i.pinimg.com/1200x/8e/2c/9a/8e2c9aaa5f4015a70e2985101bee260f.jpg'
  },
  {
    id: 'lobby-1',
    title: 'Welcoming Hotel Reception & Lobby Area',
    category: 'lobby',
    categoryLabel: 'Lobby',
    imageUrl: 'https://i.pinimg.com/1200x/3a/23/b0/3a23b0cd19dbb840fd38ad7fd535110c.jpg'
  },
  {
    id: 'lobby-2',
    title: 'Lobby Seating Lounge for Guests',
    category: 'lobby',
    categoryLabel: 'Lobby',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'room-1',
    title: 'Deluxe Guest Room Interior',
    category: 'rooms',
    categoryLabel: 'Guest Rooms',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'room-2',
    title: 'Executive Suite Room Setup',
    category: 'rooms',
    categoryLabel: 'Guest Rooms',
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'bed-1',
    title: 'Plush Bedding with Clean Linen',
    category: 'beds',
    categoryLabel: 'Beds & Comfort',
    imageUrl: 'https://i.pinimg.com/1200x/95/76/72/9576725afff8564a13b38f8ca0822d84.jpg'
  },
  {
    id: 'bed-2',
    title: 'Twin Beds Setup in Family Room',
    category: 'beds',
    categoryLabel: 'Beds & Comfort',
    imageUrl: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'bath-1',
    title: 'Clean Modern Bathroom',
    category: 'bathrooms',
    categoryLabel: 'Bathrooms',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'bath-2',
    title: 'Hot & Cold Water Shower Amenities',
    category: 'bathrooms',
    categoryLabel: 'Bathrooms',
    imageUrl: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'common-1',
    title: 'Clean Hallway & Elevator Lounge',
    category: 'common',
    categoryLabel: 'Common Areas',
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'surr-1',
    title: 'Committee Chowk Rawalpindi City Vicinity',
    category: 'surroundings',
    categoryLabel: 'Hotel Surroundings',
    imageUrl: 'https://i.pinimg.com/736x/b3/08/7c/b3087cc6714e4208781d2e0bf1db9c82.jpg'
  }
];
