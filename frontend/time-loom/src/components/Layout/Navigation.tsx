import React from 'react';
import { Link } from 'react-router-dom';

// Logo/Icon component matching the screenshots
export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="w-12 h-12 border-4 border-yellow-600 transform rotate-45 flex items-center justify-center">
        <div className="w-6 h-6 bg-yellow-600 transform -rotate-45"></div>
      </div>
    </Link>
  );
};

// Navigation bar component
interface NavbarProps {
  transparent?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${transparent ? 'bg-transparent' : 'bg-black/80 backdrop-blur-md'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        
        <div className="flex items-center gap-8">
          <Link to="/" className="text-white hover:text-yellow-500 transition-colors">
            Home
          </Link>
          <Link to="/eras" className="text-white hover:text-yellow-500 transition-colors">
            Eras
          </Link>
          <Link to="/gallery" className="text-white hover:text-yellow-500 transition-colors">
            Gallery
          </Link>
          <Link to="/explorer" className="text-white hover:text-yellow-500 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Footer component
export const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-900/30 py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-yellow-700/60 text-sm">
          © 2025 Chronicles, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
