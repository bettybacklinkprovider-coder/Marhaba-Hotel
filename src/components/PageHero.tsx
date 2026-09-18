import React from 'react';
import { motion } from 'motion/react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  bgImage?: string;
  badge?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  bgImage = 'https://i.pinimg.com/1200x/8e/2c/9a/8e2c9aaa5f4015a70e2985101bee260f.jpg',
  badge
}) => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 scale-105 transform"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {badge && (
            <span className="inline-block px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold text-xs tracking-widest uppercase mb-4">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-luxury text-white tracking-wide mb-4">
            {title}
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
