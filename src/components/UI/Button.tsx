import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = variant === 'primary' ? 'btn-gold' : 'btn-gold-outline';
  
  return (
    <button 
      className={`${baseStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
