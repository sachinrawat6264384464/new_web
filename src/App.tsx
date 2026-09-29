import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { KrackerzFeatures } from './components/KrackerzFeatures';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { SareeComparisonTable } from './components/SareeComparisonTable';
import { InstagramReelsSection } from './components/InstagramReelsSection';
import { HowToOrder } from './components/HowToOrder';
import { FabricGuide } from './components/FabricGuide';
import { StoreLocation } from './components/StoreLocation';
import { Testimonials } from './components/Testimonials';
import { InquiryDrawer } from './components/InquiryDrawer';
import { Footer } from './components/Footer';
import { TokensModal } from './components/TokensModal';

import { SAREE_COLLECTION, STORE_DETAILS } from './data/sareesData';
import { SareeProduct, CategoryFilterType, InquiryItem } from './types';
import { Instagram, Sparkles, MessageCircle, Heart, Check, X } from 'lucide-react';

export function App() {
  // State variables
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilterType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'reels'>('grid');

  // Interactive Modals & Drawers state
  const [quickViewProduct, setQuickViewProduct] = useState<SareeProduct | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isTokensModalOpen, setIsTokensModalOpen] = useState(false);

  // User state arrays
  const [wishlist, setWishlist] = useState<SareeProduct[]>([]);
  const [inquiryItems, setInquiryItems] = useState<InquiryItem[]>([]);

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Toggle Wishlist handler
  const handleToggleWishlist = (product: SareeProduct) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from Wishlist.`);
        return prev.filter((item) => item.id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to Wishlist! ❤️`);
        return [...prev, product];
      }
    });
  };

  // Toggle Inquiry Bag handler
  const handleToggleInquiry = (product: SareeProduct) => {
    setInquiryItems((prev) => {
      const exists = prev.some((item) => item.product.id === product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from Inquiry Bag.`);
        return prev.filter((item) => item.product.id !== product.id);
      } else {
        showToast(`Added "${product.name}" to Inquiry Bag! 🛍️`);
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  // Remove single item from inquiry
  const handleRemoveInquiryItem = (productId: string) => {
    setInquiryItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Clear inquiry bag
  const handleClearInquiry = () => {
    setInquiryItems([]);
    showToast('Inquiry bag cleared.');
  };

  // Filtered Sarees computation
  const filteredSarees = useMemo(() => {
    return SAREE_COLLECTION.filter((saree) => {
      const matchesCategory = selectedCategory === 'All' || saree.category === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        saree.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        saree.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        saree.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
        saree.craft.toLowerCase().includes(searchQuery.toLowerCase()) ||
        saree.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#161616] flex flex-col font-sans">
      
      {/* Navigation Header */}
      <Header
        wishlistCount={wishlist.length}
        inquiryCount={inquiryItems.length}
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onToggleTokensModal={() => setIsTokensModalOpen(true)}
      />

      {/* Krackerz-style Hero Section */}
      <Hero 
        onExploreClick={() => {
          const collectionElem = document.getElementById('collection');
          if (collectionElem) collectionElem.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Krackerz 4-Column Value Proposition Features Grid */}
      <KrackerzFeatures />

      {/* Main Saree Catalog Section */}
      <main id="collection" className="flex-1 pb-16">
        
        {/* Category & View Mode Controls */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          totalCount={filteredSarees.length}
          viewMode={viewMode}
          onToggleViewMode={setViewMode}
        />

        {/* Product Grid / Empty State */}
        <div className="container-custom">
          
          {filteredSarees.length === 0 ? (
            <div className="text-center py-20 bg-[#F7F6F0] rounded-3xl border border-neutral-200 p-8 space-y-4 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto text-amber-800">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-token-xl font-bold text-[#161616]">
                No Sarees Match Your Search
              </h3>
              <p className="text-token-xs text-neutral-600 font-sans">
                We couldn't find any saree matching "{searchQuery}". Try clearing search or choosing another category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="token-btn-primary text-token-xs py-2 px-6 font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredSarees.map((saree) => (
                <ProductCard
                  key={saree.id}
                  product={saree}
                  isWishlisted={wishlist.some((item) => item.id === saree.id)}
                  isInInquiry={inquiryItems.some((item) => item.product.id === saree.id)}
                  onToggleWishlist={handleToggleWishlist}
                  onToggleInquiry={handleToggleInquiry}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </div>
          )}

        </div>

        {/* Krackerz-style Saree Comparison Table */}
        <SareeComparisonTable />

        {/* Instagram Video Reels Section */}
        <InstagramReelsSection />

        {/* How To Order from Instagram / WhatsApp Section */}
        <HowToOrder />

        {/* Fabric & Craft Knowledge Section */}
        <FabricGuide />

        {/* Store Location in Indore */}
        <StoreLocation />

        {/* Customer Reviews & Testimonials */}
        <Testimonials />

      </main>

      {/* Footer */}
      <Footer onToggleTokensModal={() => setIsTokensModalOpen(true)} />

      {/* Modals & Drawers */}
      
      {/* Quick View Product Modal */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        isWishlisted={quickViewProduct ? wishlist.some((item) => item.id === quickViewProduct.id) : false}
        isInInquiry={quickViewProduct ? inquiryItems.some((item) => item.product.id === quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onToggleInquiry={handleToggleInquiry}
      />

      {/* Bulk Inquiry Drawer */}
      <InquiryDrawer
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        items={inquiryItems}
        onRemoveItem={handleRemoveInquiryItem}
        onClearInquiry={handleClearInquiry}
      />

      {/* Saved Wishlist Drawer Modal */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fade-in flex justify-end">
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-neutral-200 font-sans">
            <div className="p-6 bg-[#161616] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#CF2B09] fill-current" />
                <h2 className="font-serif text-token-xl font-bold text-white">Saved Wishlist</h2>
              </div>
              <button onClick={() => setIsWishlistOpen(false)} className="p-2 text-neutral-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {wishlist.length === 0 ? (
                <div className="text-center py-16 space-y-3 text-neutral-500">
                  <Heart className="w-12 h-12 mx-auto text-neutral-300" />
                  <p className="text-token-xs">Your wishlist is empty. Click the heart icon on any saree to save it!</p>
                </div>
              ) : (
                wishlist.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 rounded-xl bg-[#F7F6F0] border border-neutral-200">
                    <img src={item.image} alt={item.name} className="w-14 h-18 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono text-amber-900 bg-amber-100 px-1.5 py-0.5 rounded">{item.code}</span>
                      <h4 className="font-serif text-token-xs font-semibold text-[#161616] truncate mt-0.5">{item.name}</h4>
                      <span className="font-serif text-token-sm font-bold block">₹{item.price.toLocaleString('en-IN')}</span>
                    </div>
                    <button onClick={() => setQuickViewProduct(item)} className="text-token-xs font-semibold text-[#0000EE] hover:underline">
                      View
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Krackerz Design System Tokens Inspector Modal */}
      <TokensModal
        isOpen={isTokensModalOpen}
        onClose={() => setIsTokensModalOpen(false)}
      />

      {/* Toast Floating Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#161616] text-[#F7F6F0] px-4 py-3 rounded-2xl shadow-2xl border border-amber-400/40 flex items-center gap-3 animate-fade-in text-token-xs font-sans font-medium">
          <Sparkles className="w-4 h-4 text-[#C8FF2E]" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
export default App;
