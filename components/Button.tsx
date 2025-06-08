import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'outline-dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string; // For link-like buttons
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className,
  ...props
}) => {
  const baseStyle = "font-inter font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm hover:shadow-md";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary: "bg-[#1a1a1a] text-white hover:bg-opacity-90 focus:ring-[#1a1a1a]",
    secondary: "bg-gray-100 text-[#1a1a1a] hover:bg-gray-200 focus:ring-gray-400 border border-gray-200",
    accent: "accent-gradient-bg text-white hover:opacity-95 focus:ring-[#F3A3A4] transform hover:scale-[1.02]", // Using new gradient class
    outline: "bg-transparent border border-gray-300 text-[#1a1a1a] hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-300",
    "outline-dark": "bg-transparent border-gray-300/70 text-white hover:bg-white/10 hover:border-white/90 focus:ring-white/70", // For dark backgrounds
  };

  const combinedClassName = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className || ''}`;

  if (href) {
    return (
      <a href={href} className={`${combinedClassName} inline-block text-center`} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;