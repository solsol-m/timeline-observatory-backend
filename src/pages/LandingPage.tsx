import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Footer } from '../components/Layout/Navigation';
import { Button } from '../components/UI/Button';
import { PageContainer } from '../components/UI/Container';

// Landing Page - matching screenshot 1
export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer className="relative">
      {/* Navigation */}
      <Navbar transparent />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with ancient map texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=1920")',
            filter: 'brightness(0.3)'
          }}
        />
        
        {/* Decorative ancient symbols overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 text-yellow-800 text-6xl">☥</div>
          <div className="absolute top-40 right-20 text-yellow-800 text-6xl">𓂀</div>
          <div className="absolute bottom-20 left-20 text-yellow-800 text-8xl">☸</div>
          <div className="absolute bottom-40 right-10 text-yellow-800 text-6xl">卍</div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-7xl font-display text-yellow-500 mb-4 tracking-wide">
            Chronicles of
            <br />
            Ancient Civilizations
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore the lost worlds, untold stories,
            <br />
            and timeless mysteries.
          </p>

          {/* Globe/Earth visual */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Globe image */}
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800" 
                alt="Ancient Globe"
                className="w-full h-full object-cover rounded-full opacity-80"
                style={{ filter: 'sepia(0.6) hue-rotate(20deg)' }}
              />
              
              {/* Orbital ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full border-4 border-yellow-600/30 rounded-full animate-spin-slow"></div>
              </div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-yellow-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-yellow-500 hover:bg-yellow-600/40 transition-all cursor-pointer">
                  <svg className="w-8 h-8 text-yellow-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-6 justify-center flex-wrap">
            <Button 
              variant="outline"
              onClick={() => navigate('/eras')}
            >
              Begin Your Journey
            </Button>
            <Button onClick={() => navigate('/timeline')}>
              Explore Timeline
            </Button>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Custom animation for slow spin */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </PageContainer>
  );
};
