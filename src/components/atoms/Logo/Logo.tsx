import Link from 'next/link';
import React from 'react';
import './logo.style.scss';

const Logo = () => {
  return (
    <Link href="/" className="_logo">
      Zyandru Corp
    </Link>
  );
};

export default Logo;
