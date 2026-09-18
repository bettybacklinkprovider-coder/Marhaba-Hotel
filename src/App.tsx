/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute, Room } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RoomDetailModal } from './components/RoomDetailModal';

import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Helper to parse current location hash into PageRoute
  const getRouteFromHash = (): PageRoute => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash === 'rooms' || hash === 'rooms-and-suites') return 'rooms';
    if (hash === 'gallery') return 'gallery';
    if (hash === 'contact' || hash === 'contact-us') return 'contact';
    return 'home';
  };

  const [activeRoute, setActiveRoute] = useState<PageRoute>(getRouteFromHash);
  const [modalRoom, setModalRoom] = useState<Room | null>(null);

  // Sync state with URL Hash
  useEffect(() => {
    const handleHashChange = () => {
      setActiveRoute(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setActiveRoute(route);
    window.location.hash = route === 'home' ? '' : route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
      {/* Header Navigation */}
      <Header
        activeRoute={activeRoute}
        onNavigate={handleNavigate}
      />

      {/* Main Page Body Render */}
      <main className="flex-1">
        {activeRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectRoomModal={(room) => setModalRoom(room)}
          />
        )}

        {activeRoute === 'rooms' && (
          <RoomsPage
            onNavigate={handleNavigate}
            onSelectRoomModal={(room) => setModalRoom(room)}
          />
        )}

        {activeRoute === 'gallery' && (
          <GalleryPage />
        )}

        {activeRoute === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={modalRoom}
        onClose={() => setModalRoom(null)}
        onContactClick={() => {
          setModalRoom(null);
          handleNavigate('contact');
        }}
      />
    </div>
  );
}
