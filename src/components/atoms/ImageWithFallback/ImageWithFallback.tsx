'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ImageWithFallback = ({
  src,
  fallbackSrc,
  width,
  height,
  className,
  ...rest
}: {
  src: string;
  fallbackSrc: string;
  className?: string;
  width?: number;
  height?: number;
  [key: string]: any;
}): JSX.Element => {
  const [imgSrc, setImgSrc] = useState<string>(src);

  return (
    <Image
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      alt={rest.alt}
      placeholder="blur"
      blurDataURL="/assets/images/img-blur.avif"
      className={className}
      width={width}
      height={height}
      {...rest}
    />
  );
};

export default ImageWithFallback;
