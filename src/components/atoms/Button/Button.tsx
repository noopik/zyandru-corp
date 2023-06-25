import Image from 'next/image';
import './styles.scss';
import React from 'react';

type ButtonProps = {
  icon?: string;
  alt?: string;
  children?: React.ReactNode;
  variant: 'secondary' | 'primary';
  className?: string;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  icon,
  alt,
  children,
  variant,
  className,
  fullWidth,
  onClick,
  disabled,
  ...props
}): JSX.Element => {
  const variantList: Record<string, string> = {
    primary: '_btn_primary',
    secondary: '_secondary',
  };

  return (
    <button
      className={`_btn ${variantList[variant]} ${className} ${
        fullWidth && `w-full`
      }  ${disabled && '_disabled'}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && (
        <Image
          src={`/assets/icons/${icon}`}
          alt={`${alt}`}
          width={24}
          height={24}
        />
      )}
      {children}
    </button>
  );
};

export default Button;
