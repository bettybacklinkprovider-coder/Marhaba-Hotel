import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  BedDouble,
  Users,
  Maximize2,
  Check,
  Wifi,
  Sparkles,
  ShieldCheck,
  Info
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Room, PageRoute } from '../types';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';

interface RoomsPageProps {
  onNavigate: (route: PageRoute) => void;
  onSelectRoomModal: (room: Room) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onNavigate, onSelectRoomModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredRooms = selectedFilter === 'all'
    ? ROOMS
    : ROOMS.filter(r => r.id === selectedFilter);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
      
      {/* Page Hero Banner */}
      <PageHero
        badge="Marhaba Accommodation"
        title="Rooms & Suites"
        subtitle="Thoughtfully furnished rooms designed for comfort, cleanliness, and peace of mind during your stay in Rawalpindi."
        bgImage="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center max-w-4xl mx-auto shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white mb-3">
            Comfortable Lodging at Marhaba Hotel
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            All rooms at Marhaba Hotel are maintained under strict hygiene standards and feature attached modern bathrooms with hot & cold water, high-speed Wi-Fi, television, and round-the-clock room service.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
              selectedFilter === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All Accommodation
          </button>
          {ROOMS.map(r => (
            <button
              key={r.id}
              onClick={() => setSelectedFilter(r.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                selectedFilter === r.id
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Room List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {filteredRooms.map((room, idx) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 group"
          >
            {/* Image Column */}
            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full overflow-hidden bg-slate-950">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 border border-amber-500/30 text-amber-300 font-semibold text-xs">
                {room.priceNotice}
              </div>
            </div>

            {/* Room Info & Details Column */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider">
                    Marhaba Room Option
                  </span>
                  <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">
                    {room.size}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white mb-2">
                  {room.name}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Spec Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs mb-6">
                  <div className="flex items-center space-x-2 text-slate-300">
                    <Users className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Capacity:</strong> {room.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <BedDouble className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Bed:</strong> {room.bedType}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <Wifi className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Wi-Fi:</strong> High Speed Included</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Bathroom:</strong> {room.bathroom}</span>
                  </div>
                </div>

                {/* Facilities Badges */}
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  In-Room Facilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {room.facilities.map((fac, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="w-full sm:flex-1 inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact for Booking ({HOTEL_INFO.phone})</span>
                </a>

                <button
                  onClick={() => onSelectRoomModal(room)}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
                >
                  Full Specs & Details
                </button>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Booking Notice CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="p-8 rounded-2xl bg-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold font-serif-luxury text-white">
              Ready to Book Your Stay?
            </h3>
            <p className="text-sm text-slate-300">
              Call our front desk directly at {HOTEL_INFO.phone} for instant room confirmation.
            </p>
          </div>
          <a
            href={`tel:${HOTEL_INFO.phoneRaw}`}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shrink-0 flex items-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Reception ({HOTEL_INFO.phone})</span>
          </a>
        </div>
      </div>

    </div>
  );
};
