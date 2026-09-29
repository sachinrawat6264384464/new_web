import { SareeProduct, InstagramReel } from '../types';

export const SAREE_COLLECTION: SareeProduct[] = [
  {
    id: 'ith-ban-01',
    code: 'ITH-BAN-01',
    name: 'Imperial Crimson Banarasi Silk Saree',
    category: 'Banarasi',
    price: 18999,
    originalPrice: 24500,
    fabric: 'Pure Katan Banarasi Silk',
    craft: 'Handwoven Kadwa Zari Weave with Floral Jaal',
    color: 'Royal Crimson Red & Antique Gold',
    image: '/images/hero_banner.png',
    galleryImages: [
      '/images/hero_banner.png',
      '/images/banarasi_bridal.png',
      '/images/kanjivaram.png'
    ],
    isInstagramPost: true,
    instagramPostUrl: 'https://www.instagram.com/ithlaatisarees/?hl=en',
    instagramPostDate: '2 Days Ago',
    likesCount: 1420,
    commentsCount: 184,
    description: 'Directly featured on our Instagram handle @ithlaatisarees. Handcrafted in Varanasi by master weavers, featuring authentic gold kadwa zari embroidery on opulent crimson silk. Designed for royal wedding celebrations and bridal trousseaus.',
    blouseIncluded: true,
    sareeLength: '6.3 Meters (Includes Unstitched Running Blouse)',
    tags: ['Bridal', 'Instagram Hot', 'Banarasi Silk', 'Zari Weave'],
    isBestSeller: true,
    isNewArrival: true
  },
  {
    id: 'ith-bdn-02',
    code: 'ITH-BDN-02',
    name: 'Heritage Royal Bandhani Silk Saree',
    category: 'Bandhani',
    price: 12499,
    originalPrice: 16000,
    fabric: 'Pure Georgette Bandhej Silk',
    craft: 'Traditional Hand Tie-Dye Bandhani with Gota Patti Border',
    color: 'Vibrant Scarlet Red & Saffron Gold',
    image: '/images/bandhani.png',
    galleryImages: [
      '/images/bandhani.png',
      '/images/hero_banner.png'
    ],
    isInstagramPost: true,
    instagramPostUrl: 'https://www.instagram.com/ithlaatisarees/?hl=en',
    instagramPostDate: '4 Days Ago',
    likesCount: 2150,
    commentsCount: 239,
    description: 'Iconic Ithlaati Sarees Bandhani collection post. Intricate manual knotting tie-dye created by Rajasthani artisans, trimmed with heavy hand-stitched gota patti and mirror work.',
    blouseIncluded: true,
    sareeLength: '6.3 Meters with Blouse Piece',
    tags: ['Bandhani', 'Festive', 'Handcrafted', 'Indore Exclusive'],
    isBestSeller: true
  },
  {
    id: 'ith-knj-03',
    code: 'ITH-KNJ-03',
    name: 'Royal Magenta Kanjivaram Temple Silk',
    category: 'Kanjivaram',
    price: 24500,
    originalPrice: 29999,
    fabric: 'Pure Mulberry Silk (Silk Mark Certified)',
    craft: 'Korvai Weave with Pure Gold Zari Temple Pallu',
    color: 'Imperial Magenta & Antique Gold',
    image: '/images/kanjivaram.png',
    galleryImages: [
      '/images/kanjivaram.png',
      '/images/hero_banner.png'
    ],
    isInstagramPost: true,
    instagramPostUrl: 'https://www.instagram.com/ithlaatisarees/?hl=en',
    instagramPostDate: '1 Week Ago',
    likesCount: 3410,
    commentsCount: 312,
    description: 'As requested by hundreds of Instagram DMs! Pure Kanjivaram silk saree featuring traditional temple motif borders and a heavy gold zari pallu with rich luster.',
    blouseIncluded: true,
    sareeLength: '6.3 Meters with Contrast Blouse Piece',
    tags: ['Kanjivaram', 'Heritage', 'Temple Border', 'Silk Mark Certified'],
    isBestSeller: true
  },
  {
    id: 'ith-org-04',
    code: 'ITH-ORG-04',
    name: 'Botanical Mint Floral Sheer Organza',
    category: 'Organza',
    price: 8999,
    originalPrice: 11500,
    fabric: 'Premium Handcrafted Sheer Organza',
    craft: 'Hand-painted Pastel Florals & Scalloped Zari Embroidery',
    color: 'Soft Mint Green & Silver Shimmer',
    image: '/images/organza.png',
    galleryImages: [
      '/images/organza.png',
      '/images/chikankari.png'
    ],
    isInstagramPost: true,
    instagramPostUrl: 'https://www.instagram.com/ithlaatisarees/?hl=en',
    instagramPostDate: '3 Days Ago',
    likesCount: 1890,
    commentsCount: 145,
    description: 'Trending Instagram reel favorite! Lightweight and ethereal mint green organza saree with delicate botanical artwork and intricate scalloped embroidery along the borders.',
    blouseIncluded: true,
    sareeLength: '6.3 Meters (Includes Designer Blouse Piece)',
    tags: ['Organza', 'Pastel Trend', 'Hand Painted', 'Lightweight'],
    isNewArrival: true
  },
  {
    id: 'ith-chk-05',
    code: 'ITH-CHK-05',
    name: 'Lucknowi Pearl Ivory Chikankari Saree',
    category: 'Chikankari',
    price: 14200,
    originalPrice: 18500,
    fabric: 'Pure Modal Chiffon Silk',
    craft: 'Hand Embroidered Bakhiya & Phanda Needlework with Pearls',
    color: 'Ivory White & Delicate Blush',
    image: '/images/chikankari.png',
    galleryImages: [
      '/images/chikankari.png',
      '/images/organza.png'
    ],
    isInstagramPost: true,
    instagramPostUrl: 'https://www.instagram.com/ithlaatisarees/?hl=en',
    instagramPostDate: '5 Days Ago',
    likesCount: 2780,
    commentsCount: 290,
    description: 'Exquisite Lucknowi artistry from our Instagram collection. Master artisans spent over 90 days hand-stitching intricate shadow embroidery and subtle pearl sequins on pure silk.',
    blouseIncluded: true,
    sareeLength: '6.3 Meters with Embroidered Blouse',
    tags: ['Chikankari', 'Lucknow Handloom', 'Ivory Elegance', 'Pearl Work'],
    isBestSeller: true
  },
  {
    id: 'ith-chn-06',
    code: 'ITH-CHN-06',
    name: 'Champagne Tissue Chanderi Zari Saree',
    category: 'Chanderi',
    price: 10800,
    originalPrice: 13900,
    fabric: 'Pure Tissue Chanderi Silk Blend',
    craft: 'Handwoven Metallic Shimmer with Antique Zari Motifs',
    color: 'Champagne Gold & Soft Ivory',
    image: '/images/chanderi.png',
    galleryImages: [
      '/images/chanderi.png',
      '/images/hero_banner.png'
    ],
    isInstagramPost: true,
    instagramPostUrl: 'https://www.instagram.com/ithlaatisarees/?hl=en',
    instagramPostDate: '1 Week Ago',
    likesCount: 1650,
    commentsCount: 118,
    description: 'Subtle metallic sheen tissue Chanderi saree as showcased in our Instagram Indore store tour video. Crisp silhouette with lightweight drape, ideal for festive receptions.',
    blouseIncluded: true,
    sareeLength: '6.3 Meters with Tissue Blouse Piece',
    tags: ['Chanderi', 'Tissue Silk', 'Cocktail Wear', 'Madhya Pradesh Handloom'],
    isNewArrival: true
  },
  {
    id: 'ith-emr-07',
    code: 'ITH-EMR-07',
    name: 'Imperial Emerald Velvet Banarasi Saree',
    category: 'Banarasi',
    price: 28900,
    originalPrice: 35000,
    fabric: 'Royal Micro Velvet & Pure Silk',
    craft: 'Heavy Gold Zari Floral Jaal Embroidery & Sequin Work',
    color: 'Deep Emerald Green & Antique Gold',
    image: '/images/banarasi_bridal.png',
    galleryImages: [
      '/images/banarasi_bridal.png',
      '/images/hero_banner.png'
    ],
    isInstagramPost: true,
    instagramPostUrl: 'https://www.instagram.com/ithlaatisarees/?hl=en',
    instagramPostDate: '6 Days Ago',
    likesCount: 4120,
    commentsCount: 489,
    description: 'Our top viral Instagram post with over 4,000 likes! Royal emerald velvet border combined with intricate gold zari brocade for winter wedding majesty.',
    blouseIncluded: true,
    sareeLength: '6.3 Meters with Heavy Velvet Blouse Piece',
    tags: ['Bridal Velvet', 'Emerald Gold', 'Viral Instagram Saree', 'Royal Luxury'],
    isBestSeller: true
  },
  {
    id: 'ith-ikt-08',
    code: 'ITH-IKT-08',
    name: 'Indigo Geometric Ikat Handloom Silk',
    category: 'Ikat',
    price: 9750,
    originalPrice: 12500,
    fabric: '100% Handloom Ikat Mulberry Silk',
    craft: 'Double Ikat Resham Resist Dye Handloom Weave',
    color: 'Deep Indigo Blue & Rust Terracotta',
    image: '/images/ikat.png',
    galleryImages: [
      '/images/ikat.png',
      '/images/kanjivaram.png'
    ],
    isInstagramPost: true,
    instagramPostUrl: 'https://www.instagram.com/ithlaatisarees/?hl=en',
    instagramPostDate: '1 Week Ago',
    likesCount: 1320,
    commentsCount: 94,
    description: 'Handcrafted precision double ikat silk saree featured in our heritage craft series on Instagram. Distinct geometric motifs and natural dye richness.',
    blouseIncluded: true,
    sareeLength: '6.3 Meters with Contrast Ikat Blouse',
    tags: ['Ikat Handloom', 'Artisanal', 'Natural Dye', 'Handmade'],
    isNewArrival: true
  }
];

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: 'reel-01',
    sareeName: 'Imperial Crimson Banarasi Draping Demo',
    thumbnail: '/images/hero_banner.png',
    instagramUrl: 'https://www.instagram.com/ithlaatisarees/?hl=en',
    viewsCount: '145K',
    likesCount: '12.4K',
    audioTitle: 'Original Audio - Ithlaati Royal Collection'
  },
  {
    id: 'reel-02',
    sareeName: 'Handcrafted Bandhani Tie-Dye Process in Indore',
    thumbnail: '/images/bandhani.png',
    instagramUrl: 'https://www.instagram.com/ithlaatisarees/?hl=en',
    viewsCount: '98K',
    likesCount: '8.9K',
    audioTitle: 'Heritage Folk Strings - Ithlaati Sarees'
  },
  {
    id: 'reel-03',
    sareeName: 'Sheer Organza Pastel Movement Showcase',
    thumbnail: '/images/organza.png',
    instagramUrl: 'https://www.instagram.com/ithlaatisarees/?hl=en',
    viewsCount: '210K',
    likesCount: '18.2K',
    audioTitle: 'Aesthetic Saree Beats - @ithlaatisarees'
  },
  {
    id: 'reel-04',
    sareeName: 'Kanjivaram Pure Gold Zari Shine Under Lights',
    thumbnail: '/images/kanjivaram.png',
    instagramUrl: 'https://www.instagram.com/ithlaatisarees/?hl=en',
    viewsCount: '175K',
    likesCount: '15.1K',
    audioTitle: 'Wedding Season Magic - Ithlaati Sarees'
  }
];

export const STORE_DETAILS = {
  name: 'Ithlaati Sarees',
  instagramHandle: '@ithlaatisarees',
  instagramUrl: 'https://www.instagram.com/ithlaatisarees/?hl=en',
  whatsappPrimary: '+91 8103303181',
  whatsappSecondary: '+91 9111354024',
  whatsappRawPrimary: '918103303181',
  phone: '0731-4064226',
  email: 'ithlaatisaree@gmail.com',
  address: '13, Kanchan Bagh (Banwari Lal Jaju Marg), Opposite S.N.G Hospital, South Tukoganj, Indore, Madhya Pradesh 452001',
  googleMapsUrl: 'https://maps.google.com/?q=Ithlaati+Sarees+Indore+South+Tukoganj',
  openingHours: 'Mon - Sun: 11:00 AM - 9:00 PM',
  followersCount: '50K+',
  postsCount: '1,200+'
};
