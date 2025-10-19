// src/components/Footer.jsx
import React from 'react';
import { Heart, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              HealthMate
            </h3>
            <p className="text-sm text-gray-400">
              Your personal health companion powered by AI. Manage your medical reports and vitals in one secure place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Dashboard</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">My Reports</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Vitals</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Timeline</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@healthmate.com" className="hover:text-indigo-400 transition-colors">support@healthmate.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+923001234567" className="hover:text-indigo-400 transition-colors">+92 300 123 4567</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 hover:bg-indigo-600 rounded transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-indigo-600 rounded transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-indigo-600 rounded transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-gray-800 rounded-lg">
              <h5 className="text-white font-semibold mb-2">Health Tips</h5>
              <p className="text-sm text-gray-400">Stay hydrated and get regular checkups to maintain good health.</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h5 className="text-white font-semibold mb-2">Privacy First</h5>
              <p className="text-sm text-gray-400">Your health data is encrypted and never shared with third parties.</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h5 className="text-white font-semibold mb-2">AI Powered</h5>
              <p className="text-sm text-gray-400">Gemini AI analyzes your reports and provides easy explanations.</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 HealthMate. All rights reserved. Made with <Heart className="w-4 h-4 inline text-red-500" /> in Pakistan</p>
        </div>
      </div>
    </footer>
  );
}