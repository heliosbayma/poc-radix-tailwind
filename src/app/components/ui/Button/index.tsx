// Button.tsx

import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'text' | 'danger' | 'warning' | 'textWarning';
  isLoading?: boolean;
  icon?: { iconReference: string; position: 'left' | 'right' } | null;
  size?: 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading = false,
  icon = null,
  size = 'lg',
  ...otherProps
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return `bg-secondaryGrey200 text-secondaryGrey400
        hover:bg-secondaryGrey300
        focus:bg-secondaryGrey300
        active:bg-secondaryGrey400
        disabled:bg-secondaryGrey100 disabled:cursor-not-allowed`;
      case 'text':
        return `text-mainBlue500 underline
        hover:text-blue-700
        focus:text-blue-700
        active:text-blue-800`;
      case 'danger':
        return `bg-semanticError500 text-mainWhite
        hover:bg-semanticError600
        focus:bg-semanticError600
        active:bg-semanticError700
        disabled:bg-semanticError100 disabled:cursor-not-allowed`;
      case 'warning':
        return `bg-semanticWarning500 text-mainWhite
        hover:bg-semanticWarning600
        focus:bg-semanticWarning600
        active:bg-semanticWarning700
        disabled:bg-semanticWarning100 disabled:cursor-not-allowed`;
      case 'textWarning':
        return `text-semanticWarning500 underline
        hover:text-semanticWarning600
        focus:text-semanticWarning600
        active:text-semanticWarning700`;
      default:
        return `bg-mainBlack900 text-mainWhite
        hover:bg-mainBlue500
        focus:bg-mainBlue500 focus:border-2 focus:border-brandUranus100
        active:bg-mainBlack900
        disabled:bg-mainBlack200 disabled:cursor-not-allowed`;
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'md':
        return 'text-base px-4 py-2';
      default:
        return 'text-lg px-6 py-3';
    }
  };

  return (
    <button
      {...otherProps}
      className={`flex items-center justify-center rounded-md focus:outline-none ${getVariantClasses()} ${getSizeClasses()} ${
        isLoading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {isLoading && <span className="mr-2 animate-spin">&#10227;</span>}
      {icon && icon.position === 'left' && <span className="mr-2">{icon.iconReference}</span>}
      {children}
      {icon && icon.position === 'right' && <span className="ml-2">{icon.iconReference}</span>}
    </button>
  );
};

export default Button;
