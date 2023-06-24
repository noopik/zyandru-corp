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
};

const Button: React.FC<ButtonProps> = ({
  icon,
  alt,
  children,
  variant,
  className,
  fullWidth,
  ...props
}): JSX.Element => {
  const variantList: Record<string, string> = {
    primary: '_btn_primary',
    secondary: '_secondary',
  };

  return (
    <button
      className={`flex justify-center items-center gap-3 p-2 ${
        variantList[variant]
      } ${className} ${fullWidth && `_full_width`}`}
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
