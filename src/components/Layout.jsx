import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaCode, FaJsSquare, FaBox } from 'react-icons/fa';

const Layout = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: FaHome, label: 'Trang chủ' },
    { path: '/event-loop', icon: FaCode, label: 'Event Loop' },
    { path: '/es-features', icon: FaJsSquare, label: 'ES Features' },
    { path: '/bundling', icon: FaBox, label: 'Bundling' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <FaJsSquare className="text-yellow-500 text-3xl" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                JavaScript Learning
              </span>
            </Link>

            <div className="flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'text-gray-700 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="text-lg" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        {children}
      </motion.main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>© 2024 JavaScript Learning Platform - Học JavaScript hiệu quả và thú vị</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

