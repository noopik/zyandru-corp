'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ImageWithFallback = ({
  src,
  fallbackSrc,
  width,
  height,
  ...rest
}: {
  src: string;
  fallbackSrc: string;
  width: number;
  height: number;
  [key: string]: any;
}): JSX.Element => {
  const [imgSrc, setImgSrc] = useState<string>(src);

  return (
    <div className="relative w-[62px] h-[62px]">
      <Image
        src={imgSrc}
        onError={() => {
          setImgSrc(fallbackSrc);
        }}
        alt={rest.alt}
        placeholder="blur"
        blurDataURL="/assets/images/img-blur.avif"
        className="rounded-lg"
        width={width}
        height={height}
        {...rest}
      />
    </div>
  );
};

export default ImageWithFallback;
