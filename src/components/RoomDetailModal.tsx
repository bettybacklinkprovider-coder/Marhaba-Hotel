import React from 'react';
import { X, Phone, Users, BedDouble, Maximize2, Check, Sparkles } from 'lucide-react';
import { Room } from '../types';
import { HOTEL_INFO } from '../data/hotelData';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onContactClick
}) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/70 text-slate-300 hover:text-white hover:bg-slate-950 transition-colors border border-slate-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Room Cover Photo */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-semibold uppercase tracking-wider mb-1">
                Marhaba Accommodation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
                {room.name}
              </h2>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-slate-950/80 border border-amber-500/30 text-amber-400 font-semibold text-sm">
              {room.priceNotice}
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 space-y-6">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {room.description}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider">Capacity</span>
                <span className="text-sm font-semibold text-white">{room.capacity}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <BedDouble className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider">Bed Type</span>
                <span className="text-sm font-semibold text-white">{room.bedType}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 col-span-2 sm:col-span-1">
              <Maximize2 className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider">Room Area</span>
                <span className="text-sm font-semibold text-white">{room.size}</span>
              </div>
            </div>
          </div>

          {/* Key Facilities List */}
          <div>
            <h3 className="text-white font-serif-luxury text-base font-semibold mb-3 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Room Amenities & Amenities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.facilities.map((facility, index) => (
                <div key={index} className="flex items-center space-x-2.5 text-sm text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{facility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bathroom Info */}
          <div className="p-3.5 rounded-lg bg-slate-950/40 border border-slate-800 text-xs text-slate-400">
            <strong className="text-amber-400 font-semibold block mb-0.5">Bathroom & Hygiene:</strong>
            {room.bathroom}. Daily fresh towels, sanitized toilet, and toiletries included.
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="w-full sm:flex-1 inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-transform active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Contact for Booking ({HOTEL_INFO.phone})</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="w-full sm:w-auto py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-colors border border-slate-700"
            >
              Send Online Inquiry
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
