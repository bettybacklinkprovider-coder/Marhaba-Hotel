import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { PageRoute } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { Logo } from './Logo';

interface HeaderProps {
  activeRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeRoute, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-xl py-3 border-b border-amber-500/20'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left flex items-center focus:outline-none"
            aria-label="Marhaba Hotel Home"
          >
            <Logo size={46} showText={true} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeRoute === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                      : 'text-slate-200 hover:text-amber-300 hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Button: Call Now */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm shadow-lg shadow-amber-500/20 transition-all duration-200 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 sm:hidden">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="p-2 rounded-lg bg-amber-500 text-slate-950 shadow-md"
              aria-label="Call Marhaba Hotel"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-amber-400 hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeRoute === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/15 border-l-4 border-amber-500 font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <ShieldCheck className="w-4 h-4 text-amber-400" />}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-center shadow-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call Marhaba Hotel ({HOTEL_INFO.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
