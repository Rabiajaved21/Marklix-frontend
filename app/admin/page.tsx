'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Admin() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Marklix Admin</h1>
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

      {/* Admin Dashboard */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center text-black">Admin Dashboard</h2>
          <p className="text-lg text-gray-700 mb-10 text-center">Manage your digital marketing campaigns, view analytics, and oversee client projects from this centralized dashboard.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow rounded">
              <h4 className="text-xl font-semibold mb-4 text-black">Campaign Management</h4>
              <p className="text-gray-700 mb-4">Create, edit, and monitor your marketing campaigns in real-time.</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Manage Campaigns</button>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow rounded">
              <h4 className="text-xl font-semibold mb-4 text-black">Analytics Overview</h4>
              <p className="text-gray-700 mb-4">View detailed analytics and performance metrics for all your projects.</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">View Analytics</button>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow rounded">
              <h4 className="text-xl font-semibold mb-4 text-black">Client Management</h4>
              <p className="text-gray-700 mb-4">Manage client information, projects, and communication history.</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Manage Clients</button>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow rounded">
              <h4 className="text-xl font-semibold mb-4 text-black">Content Creation</h4>
              <p className="text-gray-700 mb-4">Plan and create content for social media and marketing materials.</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Create Content</button>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow rounded">
              <h4 className="text-xl font-semibold mb-4 text-black">SEO Tools</h4>
              <p className="text-gray-700 mb-4">Access advanced SEO tools to optimize website performance.</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">SEO Tools</button>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow rounded">
              <h4 className="text-xl font-semibold mb-4 text-black">Reports</h4>
              <p className="text-gray-700 mb-4">Generate and download detailed reports for stakeholders.</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Generate Reports</button>
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
                <p>📍 123 Digital Street<br />Tech City, TC 12345</p>
                <p>📞 +1 (555) 123-4567</p>
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