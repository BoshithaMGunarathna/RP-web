import { Link } from 'react-router-dom';
import { Beaker, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Beaker size={24} className="text-primary-400" />
              <span className="font-serif font-bold text-xl">Research Project</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Innovative research project exploring new frontiers in our domain,
              with a focus on creating impactful solutions for real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/domain" className="text-gray-400 hover:text-white transition-colors">
                  Domain
                </Link>
              </li>
              <li>
                <Link to="/milestones" className="text-gray-400 hover:text-white transition-colors">
                  Milestones
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/documents" className="text-gray-400 hover:text-white transition-colors">
                  Documents
                </Link>
              </li>
              <li>
                <Link to="/presentations" className="text-gray-400 hover:text-white transition-colors">
                  Presentations
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gray-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">123 Research Way, Science Park, University Campus</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400 shrink-0" />
                <a href="mailto:info@researchproject.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                  info@researchproject.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-400 shrink-0" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-white text-sm transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>

            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Research Project. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;