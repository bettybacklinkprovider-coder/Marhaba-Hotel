import React from 'react';
import { Phone, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { PageRoute } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <button
              onClick={() => handleNavClick('home')}
              className="group text-left focus:outline-none"
            >
              <Logo size={42} showText={true} />
            </button>
            <p className="text-sm text-slate-400 leading-relaxed">
              Providing clean, comfortable, and welcoming hotel accommodation in Rawalpindi. Located centrally near Committee Chowk on Murree Road with round-the-clock service.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="inline-flex items-center space-x-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{HOTEL_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-serif-luxury text-lg font-semibold tracking-wide border-b border-amber-500/30 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-amber-400 transition-colors flex items-center space-x-1"
                >
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('rooms')}
                  className="hover:text-amber-400 transition-colors flex items-center space-x-1"
                >
                  <span>Rooms & Suites</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('gallery')}
                  className="hover:text-amber-400 transition-colors flex items-center space-x-1"
                >
                  <span>Gallery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-amber-400 transition-colors flex items-center space-x-1"
                >
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div className="space-y-4">
            <h3 className="text-white font-serif-luxury text-lg font-semibold tracking-wide border-b border-amber-500/30 pb-2 inline-block">
              Hotel Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="text-amber-300 hover:text-amber-200 font-medium hover:underline"
                >
                  {HOTEL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Direct Desk & Booking Service</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Reservation CTA */}
          <div className="space-y-4 bg-slate-900/60 p-5 rounded-xl border border-slate-800">
            <h3 className="text-white font-serif-luxury text-base font-semibold">
              Reserve Your Room
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Need immediate room availability or group booking assistance? Call our reception desk directly.
            </p>
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-md transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>Call Reception Desk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Marhaba Hotel Rawalpindi. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Committee Chowk, Murree Road</span>
            <span>•</span>
            <span>Rawalpindi 46000, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
