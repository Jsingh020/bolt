import { Link, useLocation } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-blue-500" />
            <span className="font-semibold text-lg text-gray-900">ClearInsure</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition ${
                isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/why-early"
              className={`text-sm font-medium transition ${
                isActive('/why-early') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Why Early?
            </Link>
            <Link
              to="/compare"
              className={`text-sm font-medium transition ${
                isActive('/compare') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Compare
            </Link>
            <Link
              to="/how-we-work"
              className={`text-sm font-medium transition ${
                isActive('/how-we-work') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              How We Work
            </Link>
            <Link
              to="/for-parents"
              className={`text-sm font-medium transition ${
                isActive('/for-parents') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              For Parents
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <Link
              to="/contact"
              className="text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
            >
              Start
            </Link>
          </div>
        </div>

        <div className="md:hidden flex space-x-4 pb-3 overflow-x-auto">
          <Link
            to="/"
            className={`text-xs font-medium whitespace-nowrap transition ${
              isActive('/') ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            Home
          </Link>
          <Link
            to="/why-early"
            className={`text-xs font-medium whitespace-nowrap transition ${
              isActive('/why-early') ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            Why Early?
          </Link>
          <Link
            to="/compare"
            className={`text-xs font-medium whitespace-nowrap transition ${
              isActive('/compare') ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            Compare
          </Link>
          <Link
            to="/how-we-work"
            className={`text-xs font-medium whitespace-nowrap transition ${
              isActive('/how-we-work') ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            How We Work
          </Link>
          <Link
            to="/for-parents"
            className={`text-xs font-medium whitespace-nowrap transition ${
              isActive('/for-parents') ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            For Parents
          </Link>
        </div>
      </div>
    </nav>
  );
}
