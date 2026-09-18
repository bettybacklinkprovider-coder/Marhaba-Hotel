import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  MapPin,
  Mail,
  Send,
  Calendar,
  Users,
  CheckCircle,
  Clock,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { HOTEL_INFO } from '../data/hotelData';
import { ContactFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
      
      {/* Page Hero Banner */}
      <PageHero
        badge="Reach Out"
        title="Contact Marhaba Hotel"
        subtitle="Our reception desk is open 24 hours a day, 7 days a week. Get in touch for room reservations, location directions, or stay inquiries."
        bgImage="https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=1600&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Contact Information & Direct Call Box (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Main Hotel Contact Box */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-amber-500/30 shadow-xl space-y-6">
              <div>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1">
                  Marhaba Hotel Rawalpindi
                </span>
                <h2 className="text-2xl font-bold font-serif-luxury text-white">
                  Hotel Contact Information
                </h2>
                <div className="w-12 h-1 bg-amber-500 rounded-full mt-2" />
              </div>

              <ul className="space-y-5 text-sm">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 uppercase tracking-wider font-semibold">Phone Number</span>
                    <a
                      href={`tel:${HOTEL_INFO.phoneRaw}`}
                      className="text-amber-300 font-bold text-lg hover:text-amber-200 transition-colors"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                    <span className="block text-[11px] text-slate-400 mt-0.5">Clickable telephone link</span>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 uppercase tracking-wider font-semibold">Hotel Address</span>
                    <p className="text-slate-200 leading-relaxed font-medium mt-0.5">
                      {HOTEL_INFO.address}
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 uppercase tracking-wider font-semibold">Reception Hours</span>
                    <p className="text-slate-200 font-medium">24 Hours / 7 Days a Week</p>
                  </div>
                </li>
              </ul>

              {/* Call Now Button */}
              <div className="pt-2">
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/20 transition-all active:scale-95"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Reception Now</span>
                </a>
              </div>
            </div>

            {/* Quick Assistance Box */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <h3 className="text-white font-serif-luxury font-bold text-base flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Immediate Booking Guidance</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                If you are arriving in Rawalpindi today or require emergency room availability near Murree Road or Committee Chowk, please call us directly for instant verification.
              </p>
            </div>

          </div>

          {/* Column 2: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
              
              <div className="mb-6">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1">
                  Online Inquiry Form
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
                  Send Us a Message / Reservation Request
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your travel details below and our front desk will review your inquiry.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif-luxury text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-amber-300">{formData.fullName}</strong>. Your inquiry for check-in on <strong className="text-amber-300">{formData.checkIn || 'requested date'}</strong> has been recorded.
                  </p>
                  <p className="text-xs text-slate-400">
                    For faster confirmation, you can also call us directly on phone: <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="text-amber-400 underline font-bold">{HOTEL_INFO.phone}</a>.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`tel:${HOTEL_INFO.phoneRaw}`}
                      className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm"
                    >
                      Call Now ({HOTEL_INFO.phone})
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-sm font-semibold hover:bg-slate-700"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Muhammad Ali"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +92 300 1234567"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Email & Number of Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Number of Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                      >
                        <option value="1">1 Guest (Solo)</option>
                        <option value="2">2 Guests (Couple / Double)</option>
                        <option value="3">3 Guests (Family / Group)</option>
                        <option value="4">4+ Guests (Family Room)</option>
                      </select>
                    </div>
                  </div>

                  {/* Check-in & Check-out Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Message / Special Requests
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify room preferences (Standard, Deluxe, Family, Executive) or extra details..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Location Section / Map */}
        <div className="mt-16 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1">
              Google Maps Location
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
              Hotel Location & Access
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Located at Malik Sher Ahmed Street, I, 340 Murree Rd, Committee Chowk, Rawalpindi, 46000, Pakistan.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-96 w-full bg-slate-900">
            <iframe
              title="Marhaba Hotel Location Map"
              src={HOTEL_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Call to Action Box */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/30 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
            Have Questions? Contact Marhaba Hotel Today.
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Our desk staff is available around the clock to respond to your queries, room pricing, and transportation directions.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/20 transition-all active:scale-95"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: {HOTEL_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
