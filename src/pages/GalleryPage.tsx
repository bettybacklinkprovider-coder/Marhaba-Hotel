import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { GALLERY_ITEMS } from '../data/hotelData';
import { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'exterior', label: 'Hotel Exterior' },
    { id: 'lobby', label: 'Lobby' },
    { id: 'rooms', label: 'Guest Rooms' },
    { id: 'beds', label: 'Beds & Comfort' },
    { id: 'bathrooms', label: 'Bathrooms' },
    { id: 'common', label: 'Common Areas' },
    { id: 'surroundings', label: 'Surroundings' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handlePrevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        activeLightboxIndex === 0 ? filteredItems.length - 1 : activeLightboxIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        activeLightboxIndex === filteredItems.length - 1 ? 0 : activeLightboxIndex + 1
      );
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
      
      {/* Page Hero Banner */}
      <PageHero
        badge="Hotel Showcase"
        title="Photo Gallery"
        subtitle="Explore our hotel exterior, reception lobby, comfortable guest bedrooms, modern bathrooms, and common facilities."
        bgImage="https://i.pinimg.com/1200x/8e/2c/9a/8e2c9aaa5f4015a70e2985101bee260f.jpg"
      />

      {/* Category Tabs Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleOpenLightbox(index)}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 hover:border-amber-500/50 shadow-xl"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="text-white font-serif-luxury text-sm font-semibold mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-1 text-amber-300 text-xs font-medium">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to expand photo</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-8"
          >
            {/* Top Toolbar */}
            <div className="w-full max-w-6xl flex items-center justify-between z-10 text-white">
              <div>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block">
                  {filteredItems[activeLightboxIndex].categoryLabel}
                </span>
                <h3 className="text-sm sm:text-base font-semibold font-serif-luxury">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-xs text-slate-400 font-mono">
                  {activeLightboxIndex + 1} / {filteredItems.length}
                </span>
                <button
                  onClick={() => setActiveLightboxIndex(null)}
                  className="p-2.5 rounded-full bg-slate-900 text-slate-300 hover:text-white hover:bg-amber-500 hover:text-slate-950 transition-colors border border-slate-700"
                  aria-label="Close Lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Main Image Stage with Next/Prev Controls */}
            <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4">
              <button
                onClick={handlePrevImage}
                className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors border border-slate-700"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <img
                src={filteredItems[activeLightboxIndex].imageUrl}
                alt={filteredItems[activeLightboxIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-slate-800"
              />

              <button
                onClick={handleNextImage}
                className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors border border-slate-700"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="text-center text-xs text-slate-400 max-w-xl">
              Marhaba Hotel, Committee Chowk, Murree Road, Rawalpindi
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
