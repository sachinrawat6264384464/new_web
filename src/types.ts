export interface SareeProduct {
  id: string;
  code: string;
  name: string;
  category: 'Banarasi' | 'Bandhani' | 'Kanjivaram' | 'Organza' | 'Chikankari' | 'Chanderi' | 'Ikat';
  price: number;
  originalPrice: number;
  fabric: string;
  craft: string;
  color: string;
  image: string;
  galleryImages: string[];
  isInstagramPost: boolean;
  instagramPostUrl: string;
  instagramPostDate: string;
  likesCount: number;
  commentsCount: number;
  description: string;
  blouseIncluded: boolean;
  sareeLength: string;
  tags: string[];
  isBestSeller?: boolean;
  isNewArrival?: boolean;
}

export interface InstagramReel {
  id: string;
  sareeName: string;
  thumbnail: string;
  videoUrl?: string;
  instagramUrl: string;
  viewsCount: string;
  likesCount: string;
  audioTitle: string;
}

export interface InquiryItem {
  product: SareeProduct;
  quantity: number;
  selectedColor?: string;
  notes?: string;
}

export type CategoryFilterType = 'All' | 'Banarasi' | 'Bandhani' | 'Kanjivaram' | 'Organza' | 'Chikankari' | 'Chanderi' | 'Ikat';
