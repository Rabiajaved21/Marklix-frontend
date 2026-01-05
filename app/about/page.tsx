'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Marklix</h2>
          <p className="text-lg md:text-xl mb-8">Empowering businesses with innovative digital solutions since 2020.</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-black">Our Story</h3>
            <p className="text-lg text-gray-700 mb-6">
              At Marklix, we believe that every business deserves to thrive in the digital age. Founded in 2020, our mission is to bridge the gap between traditional businesses and the online world. We specialize in digital marketing, web development, and data-driven strategies that help our clients achieve sustainable growth.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our team consists of passionate professionals with years of experience in the industry. We stay ahead of the curve by continuously learning and adapting to the latest trends and technologies. Whether you're a startup looking to establish your online presence or an established company aiming to optimize your digital strategy, we're here to help.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              What sets us apart is our commitment to results. We don't just provide services; we deliver measurable outcomes. Our data-driven approach ensures that every decision we make is backed by insights, leading to campaigns that not only look good but also perform exceptionally.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-purple-600 mb-2">500+</h4>
                <p className="text-gray-700">Projects Completed</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-purple-600 mb-2">98%</h4>
                <p className="text-gray-700">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-purple-600 mb-2">24/7</h4>
                <p className="text-gray-700">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-50 to-white animate-bounce-in">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">Our Mission, Vision & Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl text-purple-600 mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-4 text-black">Our Mission</h4>
              <p className="text-gray-700">To empower businesses with cutting-edge digital solutions that drive growth, innovation, and success in the ever-evolving online landscape.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl text-purple-600 mb-4">🔭</div>
              <h4 className="text-xl font-semibold mb-4 text-black">Our Vision</h4>
              <p className="text-gray-700">To be the leading digital marketing agency that transforms how businesses connect with their audiences worldwide.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl text-purple-600 mb-4">💎</div>
              <h4 className="text-xl font-semibold mb-4 text-black">Our Values</h4>
              <p className="text-gray-700">Innovation, integrity, collaboration, and excellence drive everything we do. We believe in transparent partnerships and delivering exceptional results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-12 md:py-20 bg-white animate-zoom-in">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img src="/rabiya-jawed.jpg" alt="Rabiya Jawed" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-purple-200" />
              <h4 className="text-xl font-semibold mb-2 text-black">Rabiya Jawed</h4>
              <p className="text-purple-600 mb-4">CEO & Founder</p>
              <p className="text-gray-700">With over 5 years in digital marketing, Rabiya Jawed leads our vision and strategy.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img src="/ahmed.jpeg" alt="Ahmed Raza" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-purple-200" />
              <h4 className="text-xl font-semibold mb-2 text-black">Ahmed Raza</h4>
              <p className="text-purple-600 mb-4">Head of Development</p>
              <p className="text-gray-700">Ahmed ensures our technical solutions are innovative and scalable.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img src="/faiza.jpeg" alt="Faiza Islam" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-purple-200" />
              <h4 className="text-xl font-semibold mb-2 text-black">Faiza Islam</h4>
              <p className="text-purple-600 mb-4">Creative Director</p>
              <p className="text-gray-700">Faiza brings creativity and design excellence to every project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-gray-100 to-purple-100 animate-fade-in-up">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">Our Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">2020</div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-black">Company Founded</h4>
                  <p className="text-gray-700">Marklix was established with a vision to revolutionize digital marketing.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">2021</div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-black">First Major Client</h4>
                  <p className="text-gray-700">Secured our first enterprise client, marking a milestone in our growth.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">2022</div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-black">Team Expansion</h4>
                  <p className="text-gray-700">Grew our team to 20+ experts across various digital disciplines.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">2023</div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-black">Award Recognition</h4>
                  <p className="text-gray-700">Received industry awards for innovative marketing campaigns.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">2024</div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-black">Global Expansion</h4>
                  <p className="text-gray-700">Extended our services to international markets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>+

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-600 to-black text-white animate-slide-in-left">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Work With Us?</h3>
          <p className="text-lg md:text-xl mb-8">Join hundreds of satisfied clients who have transformed their businesses with Marklix.</p>
          <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition font-semibold">Get Started Today</Link>
        </div>
      </section>
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