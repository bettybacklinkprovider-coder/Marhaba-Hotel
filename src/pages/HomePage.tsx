import React from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  Bed,
  Wifi,
  Users,
  Car,
  Coffee,
  CheckCircle2,
  ChevronRight,
  Hotel,
  Calendar
} from 'lucide-react';
import { PageRoute, Room } from '../types';
import { HOTEL_INFO, ROOMS, FACILITIES, GALLERY_ITEMS } from '../data/hotelData';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onSelectRoomModal: (room: Room) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectRoomModal }) => {
  // Helper to map facility icon name to Lucide Icon component
  const renderFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bed':
        return <Bed className="w-6 h-6 text-amber-400" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-amber-400" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-amber-400" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-amber-400" />;
      case 'Car':
        return <Car className="w-6 h-6 text-amber-400" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-amber-400" />;
      default:
        return <Hotel className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* =========================================================
          SECTION 1 — HERO SECTION
         ========================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('https://i.pinimg.com/1200x/8e/2c/9a/8e2c9aaa5f4015a70e2985101bee260f.jpg')`,
          }}
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-3xl">
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium tracking-wide mb-6 backdrop-blur-md"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Committee Chowk, Murree Road, Rawalpindi</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-luxury text-white leading-tight tracking-wide mb-4"
            >
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
                Marhaba Hotel
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-2xl text-amber-200/90 font-serif-luxury font-medium mb-4"
            >
              {HOTEL_INFO.tagline}
            </motion.p>

            {/* Short Introductory Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl"
            >
              Experience unmatched hospitality, pristine hygiene, and restful rooms situated in the central commercial heart of Rawalpindi. Perfect for business, family, and leisure visits.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Primary Button: Explore Rooms */}
              <button
                onClick={() => onNavigate('rooms')}
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Rooms</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Secondary Button: Contact Us */}
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-100 font-semibold text-base border border-slate-700 backdrop-blur-md transition-all duration-200 hover:border-amber-500/50"
              >
                <span>Contact Us</span>
              </button>

              {/* Clickable Phone Button */}
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-semibold text-base border border-amber-500/30 transition-colors"
                title="Call Marhaba Hotel directly"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>{HOTEL_INFO.phone}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2 — ABOUT MARHABA HOTEL
         ========================================================= */}
      <section className="py-20 bg-slate-900 border-t border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-500/20 group">
                <img
                  src="https://i.pinimg.com/1200x/8e/2c/9a/8e2c9aaa5f4015a70e2985101bee260f.jpg"
                  alt="Marhaba Hotel Rawalpindi Building"
                  className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-amber-500/30">
                  <span className="text-amber-400 font-bold text-sm block">Central Rawalpindi Address</span>
                  <span className="text-slate-300 text-xs">Murree Road, Committee Chowk, Rawalpindi</span>
                </div>
              </div>

              {/* Floating Highlight Card */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 p-5 rounded-2xl bg-amber-500 text-slate-950 shadow-2xl border border-amber-300 max-w-xs items-center space-x-3">
                <ShieldCheck className="w-8 h-8 shrink-0 text-slate-950" />
                <div>
                  <span className="font-bold text-sm block">Clean & Welcoming</span>
                  <span className="text-xs font-medium text-slate-900">Dedicated 24/7 hospitality team</span>
                </div>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
                  About Marhaba Hotel
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white mt-2 mb-4">
                  Warm Hospitality & Modern Comfort in Rawalpindi
                </h2>
                <div className="w-20 h-1 bg-amber-500 rounded-full mb-6" />
              </div>

              <p className="text-slate-300 leading-relaxed text-base">
                {HOTEL_INFO.aboutShort}
              </p>

              <p className="text-slate-400 leading-relaxed text-sm">
                Whether you are visiting Rawalpindi for business, family occasions, or shopping, Marhaba Hotel guarantees a peaceful retreat with pristine room hygiene, instant check-in, and reliable staff.
              </p>

              {/* Key Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Comfortable Accommodation</h4>
                    <p className="text-xs text-slate-400">Plush bedding & quiet rooms</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Convenient Location</h4>
                    <p className="text-xs text-slate-400">On Committee Chowk Murree Rd</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Friendly Hospitality</h4>
                    <p className="text-xs text-slate-400">Respectful & attentive staff</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Clean & Welcoming Environment</h4>
                    <p className="text-xs text-slate-400">Daily sanitized rooms</p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 font-bold text-sm group"
                >
                  <span>Learn More About Our Stay</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3 — ROOMS & ACCOMMODATION
         ========================================================= */}
      <section className="py-20 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Rooms & Accommodation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white mt-2 mb-4">
              Explore Our Comfortable Rooms
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-300 text-base">
              Choose from our selection of well-maintained rooms tailored for solo guests, couples, business visitors, and families.
            </p>
          </div>

          {/* 4 Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROOMS.map((room, idx) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/40 shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Room Image */}
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-950/80 border border-amber-500/30 text-amber-300 font-semibold text-xs">
                    {room.priceNotice}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-serif-luxury text-white group-hover:text-amber-400 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {room.tagline}
                    </p>

                    {/* Key Facilities Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {room.facilities.slice(0, 3).map((fac, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-medium"
                        >
                          {fac}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Room Button -> Navigates to Rooms & Suites page */}
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('rooms')}
                      className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 font-semibold text-xs transition-colors border border-amber-500/30"
                    >
                      <span>View Room</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section Footer Link */}
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('rooms')}
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-sm border border-amber-500/30 hover:border-amber-500 transition-all shadow-lg"
            >
              <span>View All Rooms & Full Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 4 — HOTEL FACILITIES
         ========================================================= */}
      <section className="py-20 bg-slate-900 border-t border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Hotel Amenities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white mt-2 mb-4">
              Facilities Designed for Your Ease
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-300 text-base">
              At Marhaba Hotel, we offer standard hotel features to ensure a comfortable and stress-free stay.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES.map((facility, idx) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 overflow-hidden flex flex-col"
              >
                {facility.imageUrl ? (
                  <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                    <img
                      src={facility.imageUrl}
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    <div className="absolute bottom-3 left-4 w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg border border-amber-300">
                      {renderFacilityIcon(facility.iconName)}
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-0">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      {renderFacilityIcon(facility.iconName)}
                    </div>
                  </div>
                )}

                <div className="p-6 pt-4 flex-1">
                  <h3 className="text-lg font-bold font-serif-luxury text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {facility.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 5 — GALLERY PREVIEW
         ========================================================= */}
      <section className="py-20 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
                Visual Tour
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white mt-2">
                Gallery Preview
              </h2>
              <div className="w-20 h-1 bg-amber-500 rounded-full mt-3" />
            </div>

            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold text-sm border border-amber-500/30 transition-all self-start md:self-auto"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Gallery Preview Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_ITEMS.slice(0, 8).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => onNavigate('gallery')}
                className="group relative h-48 sm:h-56 rounded-xl overflow-hidden cursor-pointer border border-slate-800 bg-slate-900"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                  <h4 className="text-white text-xs font-semibold font-serif-luxury line-clamp-1">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 6 — CONTACT / BOOKING CTA
         ========================================================= */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-amber-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-bold uppercase tracking-widest inline-block">
                  Direct Reservations & Inquiries
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white">
                  Plan Your Stay at Marhaba Hotel
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Contact our 24/7 reception desk for immediate room availability, rates, and special accommodation requests.
                </p>

                {/* Address Display */}
                <div className="flex items-start space-x-3 pt-2 text-slate-300 text-sm">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{HOTEL_INFO.address}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col space-y-3">
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center space-x-3 py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/20 transition-all transform active:scale-95"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: {HOTEL_INFO.phone}</span>
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm border border-slate-700 transition-colors text-center"
                >
                  Contact Us Page
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
