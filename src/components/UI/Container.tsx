import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen ${className}`}>
      {children}
    </div>
  );
};

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  withBorder?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', withBorder = false }) => {
  return (
    <section className={`py-20 ${withBorder ? 'ancient-border' : ''} ${className}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};
