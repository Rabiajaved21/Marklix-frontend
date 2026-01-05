'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Services() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Marklix</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-purple-400">Home</Link></li>
              <li><Link href="/services" className="hover:text-purple-400">Services</Link></li>
              <li><Link href="/about" className="hover:text-purple-400">About</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400">Contact</Link></li>
              <li><Link href="/login" className="hover:text-purple-400">Login</Link></li>
              <li><Link href="/admin" className="hover:text-purple-400">Admin</Link></li>
            </ul>
          </nav>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black text-white py-4">
            <ul className="flex flex-col space-y-2 px-6">
              <li><Link href="/" className="hover:text-purple-400" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link href="/services" className="hover:text-purple-400" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
              <li><Link href="/about" className="hover:text-purple-400" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
              <li><Link href="/login" className="hover:text-purple-400" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
              <li><Link href="/admin" className="hover:text-purple-400" onClick={() => setIsMenuOpen(false)}>Admin</Link></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-600 to-black text-white animate-fade-in-up">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg md:text-xl mb-8">Comprehensive digital marketing solutions tailored to your business needs. From SEO to web development, we cover it all.</p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-12 md:py-20 bg-white animate-slide-in-left">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow rounded border-l-4 border-purple-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-black">Digital Marketing</h4>
              <p className="text-gray-700 mb-4">Boost your online presence with our comprehensive digital marketing strategies, including PPC, social media ads, and email campaigns.</p>
              <p className="text-sm text-gray-600">Our team analyzes market trends and competitors to create targeted campaigns that drive conversions and increase ROI.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow rounded border-l-4 border-purple-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-black">SEO</h4>
              <p className="text-gray-700 mb-4">Improve your search engine rankings and drive organic traffic with our expert SEO services.</p>
              <p className="text-sm text-gray-600">We use the latest techniques, including keyword research, on-page optimization, and link building to ensure your site ranks higher.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow rounded border-l-4 border-purple-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-black">Web Development</h4>
              <p className="text-gray-700 mb-4">Build modern, responsive websites tailored to your needs using the latest technologies.</p>
              <p className="text-sm text-gray-600">From e-commerce platforms to custom web apps, we deliver scalable solutions that enhance user experience and functionality.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow rounded border-l-4 border-purple-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-black">Graphic Designing</h4>
              <p className="text-gray-700 mb-4">Create stunning visuals that capture your brand's essence and engage your audience.</p>
              <p className="text-sm text-gray-600">Our designers craft logos, banners, and marketing materials that align with your brand identity and stand out in the market.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow rounded border-l-4 border-purple-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-black">Data Analysis</h4>
              <p className="text-gray-700 mb-4">Analyze data to make informed decisions and optimize performance across all channels.</p>
              <p className="text-sm text-gray-600">Using advanced analytics tools, we provide insights that help you understand customer behavior and improve business outcomes.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow rounded border-l-4 border-purple-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-black">Social Media Management</h4>
              <p className="text-gray-700 mb-4">Manage and grow your social media presence effectively with strategic content and engagement.</p>
              <p className="text-sm text-gray-600">We handle posting, community management, and analytics to build a loyal following and increase brand awareness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black to-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Marklix</h3>
              <p className="text-gray-300 mb-4">
                Empowering businesses with innovative digital marketing solutions. We help you thrive in the digital world.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  <span className="text-2xl">📘</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  <span className="text-2xl">🐦</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  <span className="text-2xl">📷</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  <span className="text-2xl">💼</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Home</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">About Us</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Services</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
              <ul className="space-y-2">
                <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Digital Marketing</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">SEO</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Web Development</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Graphic Design</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                 <p>📍 Shahrah E Faisal<br />Karachi, TC 7000</p>
                <p>📞 +92 3353093229</p>
                <p>✉️ hello@marklix.com</p>
                <p>🕒 Mon-Fri: 9AM-6PM</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h4 className="text-lg font-semibold mb-2 text-white">Stay Updated</h4>
                <p className="text-gray-300">Subscribe to our newsletter for the latest digital marketing insights.</p>
              </div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-l-lg focus:outline-none focus:border-purple-400"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">&copy; 2024 Marklix. All rights reserved. | <Link href="/admin" className="hover:text-purple-400 transition-colors duration-300">Admin</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}