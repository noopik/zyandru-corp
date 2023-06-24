'use client';

import Image from 'next/image';
import React from 'react';
import './user-detail.styles.scss';
import { ImageWithFallback } from '../../atoms';
import { defaultImageNotFound } from '@vhiweb/src/constants/common';

const UserDetail: React.FC<{
  photoUrl: string;
  name: string;
  email: string;
}> = ({ photoUrl, name, email }) => {
  const onLoad = () => photoUrl;
  return (
    <div className="_user_detail_wrapper">
      <ImageWithFallback
        loader={onLoad}
        priority
        src={photoUrl}
        alt={photoUrl}
        fallbackSrc={defaultImageNotFound}
        width={200}
        height={200}
      />
      <div className="_description">
        <h3 className="_name">{name}</h3>
        <p className="_email">{email}</p>
      </div>
    </div>
  );
};

export default UserDetail;
