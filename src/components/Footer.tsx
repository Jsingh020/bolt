import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-blue-400" />
              <span className="font-semibold text-lg text-white">ClearInsure</span>
            </div>
            <p className="text-sm text-gray-400">
              Insurance advisory built on trust, transparency, and education.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/why-early" className="hover:text-blue-400 transition">
                  Why Insurance Early
                </Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-blue-400 transition">
                  Compare Policies
                </Link>
              </li>
              <li>
                <Link to="/how-we-work" className="hover:text-blue-400 transition">
                  How We Work
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">For You</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/for-parents" className="hover:text-blue-400 transition">
                  For Parents & Families
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Our Promise</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>No spam calls</li>
              <li>No hidden fees</li>
              <li>Complete transparency</li>
              <li>Honest advice always</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 ClearInsure. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition">Disclaimer</a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Licensed Insurance Advisor • IRDAI Registered • All recommendations are provided for
              educational purposes. Please read policy documents carefully before purchasing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
