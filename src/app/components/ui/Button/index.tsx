// Button.tsx
import { ButtonSize, ButtonVariant } from '@/app/types';
import { getSizeClasses, getVariantClasses } from '@/app/utils';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  isLoading?: boolean;
  icon?: { iconReference: string; position: 'left' | 'right' } | null;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = ButtonVariant.PRIMARY,
  isLoading = false,
  icon,
  size = ButtonSize.LG,
  ...otherProps
}) => {
  const buttonClasses = classNames(
    'flex items-center justify-center rounded-md focus:outline-none',
    getVariantClasses(variant),
    getSizeClasses(size),
    { 'opacity-50 cursor-not-allowed': isLoading }
  );

  return (
    <button {...otherProps} className={buttonClasses}>
      {isLoading && <span className="mr-2 animate-spin">&#10227;</span>}
      {icon && icon.position === 'left' && <Icon icon={icon} />}
      {children}
      {icon && icon.position === 'right' && <Icon icon={icon} />}
    </button>
  );
};

export default Button;