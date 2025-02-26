import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, MapPin, Phone, Mail, Globe, ArrowRight, Twitter, Linkedin} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <Cpu className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-semibold">SMILE Lab</span>
            </div>
            <p className="text-gray-400 mb-4">
              Semiconductor and Memory Innovation Lab - Pioneering next-generation technologies for computing systems of the future.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <GitHub className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/research" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Research Areas
                </Link>
              </li>
              <li>
                <Link to="/publications" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/members" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Team Members
                </Link>
              </li>
              <li>
                <Link to="/facility" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/contact/join-us" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Join Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Research Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Research Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/research/neuromorphic-computing" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Neuromorphic Computing
                </Link>
              </li>
              <li>
                <Link to="/research/nano-electronics" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Nano-electronics
                </Link>
              </li>
              <li>
                <Link to="/research/future-logic-devices" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Future Logic Devices
                </Link>
              </li>
              <li>
                <Link to="/research/memory-technologies" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Memory Technologies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  123 University Avenue, Building 4, Room 567, City, State 12345
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  +1 (123) 456-7890
                </span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a href="mailto:contact@smilelab.edu" className="text-gray-400 hover:text-blue-400 transition-colors">
                  contact@smilelab.edu
                </a>
              </li>
              <li className="flex">
                <Globe className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a href="https://www.smilelab.edu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  www.smilelab.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="mb-2">
            &copy; {currentYear} Semiconductor and Memory Innovation Lab. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-blue-400 transition-colors">Terms of Use</Link>
            <Link to="/accessibility" className="hover:text-blue-400 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;