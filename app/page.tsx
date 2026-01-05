'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
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
      <section id="home" className="py-12 md:py-20 bg-gradient-to-r from-purple-600 to-black text-white animate-fade-in-up">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Elevate Your Digital Presence</h2>
          <p className="text-lg md:text-xl mb-8">Transform your business with cutting-edge digital marketing strategies and innovative web solutions. Our expert team delivers results that drive growth and success.</p>
          <Link href="/contact" className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition">Get Started</Link>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-12 md:py-20 bg-white animate-slide-in-left">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-black">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow-lg rounded-lg border-l-4 border-purple-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-black">Digital Marketing</h4>
              <p className="text-gray-700">Boost your online presence with our comprehensive digital marketing strategies, including targeted campaigns and performance tracking.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow-lg rounded-lg border-l-4 border-purple-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-black">SEO</h4>
              <p className="text-gray-700">Improve your search engine rankings and drive organic traffic with advanced SEO techniques and keyword optimization.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow-lg rounded-lg border-l-4 border-purple-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-black">Web Development</h4>
              <p className="text-gray-700">Build modern, responsive websites tailored to your needs, ensuring optimal user experience and functionality.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow-lg rounded-lg border-l-4 border-purple-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-black">Graphic Designing</h4>
              <p className="text-gray-700">Create stunning visuals that capture your brand's essence, from logos to marketing materials that engage audiences.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow-lg rounded-lg border-l-4 border-purple-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-black">Data Analysis</h4>
              <p className="text-gray-700">Analyze data to make informed decisions, providing insights that optimize performance and drive business growth.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 shadow-lg rounded-lg border-l-4 border-purple-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-black">Social Media Management</h4>
              <p className="text-gray-700">Manage and grow your social media presence with strategic content, engagement, and community building.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-white animate-bounce-in">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-black">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <p className="text-gray-700 mb-4">"Marklix transformed our online presence. Their strategies are innovative and results-driven."</p>
              <p className="font-semibold text-black">- John Doe, CEO of TechCorp</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <p className="text-gray-700 mb-4">"Professional service and outstanding results. Highly recommend for any business."</p>
              <p className="font-semibold text-black">- Jane Smith, Marketing Director at Innovate Ltd</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <p className="text-gray-700 mb-4">"Their SEO strategies boosted our traffic significantly. Excellent team to work with."</p>
              <p className="font-semibold text-black">- Alex Johnson, Founder of StartupXYZ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-gray-100 to-purple-100 animate-zoom-in">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-black">Why Choose Marklix?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="text-4xl text-purple-600 mb-4">🚀</div>
              <h4 className="text-xl font-semibold mb-2 text-black">Proven Results</h4>
              <p className="text-gray-700">Our strategies deliver measurable growth and ROI for your business.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="text-4xl text-purple-600 mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-2 text-black">Targeted Approach</h4>
              <p className="text-gray-700">We focus on your specific goals and audience for maximum impact.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="text-4xl text-purple-600 mb-4">💡</div>
              <h4 className="text-xl font-semibold mb-2 text-black">Innovative Solutions</h4>
              <p className="text-gray-700">Cutting-edge techniques and tools to stay ahead of the competition.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="text-4xl text-purple-600 mb-4">🤝</div>
              <h4 className="text-xl font-semibold mb-2 text-black">Dedicated Support</h4>
              <p className="text-gray-700">24/7 support and transparent communication throughout our partnership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-12 md:py-20 bg-white animate-fade-in-up">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-black">Our Recent Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-black">E-commerce Platform</h4>
              <p className="text-gray-700 mb-4">Complete digital transformation for a retail business, increasing online sales by 150%.</p>
              <span className="text-purple-600 font-medium">View Case Study</span>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-black">SEO Campaign</h4>
              <p className="text-gray-700 mb-4">Comprehensive SEO strategy that boosted organic traffic by 300% in 6 months.</p>
              <span className="text-purple-600 font-medium">View Case Study</span>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-black">Brand Identity</h4>
              <p className="text-gray-700 mb-4">Complete rebranding project including logo design, website, and marketing materials.</p>
              <span className="text-purple-600 font-medium">View Case Study</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-600 to-black text-white animate-slide-in-left">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 animate-pulse">500+</div>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 animate-pulse">98%</div>
              <p className="text-lg">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 animate-pulse">2M+</div>
              <p className="text-lg">Leads Generated</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 animate-pulse">24/7</div>
              <p className="text-lg">Support Available</p>
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
