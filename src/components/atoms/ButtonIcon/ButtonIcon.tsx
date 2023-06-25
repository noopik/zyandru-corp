import Image from 'next/image';
import React from 'react';

interface ButtonIconInterface {
  icon: 'cross';
  className?: string;
  onClick: () => void;
}

const ButtonIcon = ({
  icon,
  className,
  onClick,
}: ButtonIconInterface): JSX.Element => {
  const iconsList: { [key: string]: string } = {
    cross: 'ic-cross.svg',
  };
  return (
    <button className={className} onClick={onClick}>
      <Image
        src={`/assets/icons/${iconsList[icon]}`}
        alt="zyandru cross icon"
        width={24}
        height={24}
      />
    </button>
  );
};

export default ButtonIcon;
