'use client';

import { defaultImageNotFound } from '@vhiweb/src/constants/common';
import React from 'react';
import { ImageWithFallback } from '../../atoms';
import './user-detail.styles.scss';

const UserDetail: React.FC<{
  photoUrl: string;
  name: string;
  email: string;
}> = ({ photoUrl, name, email }) => {
  const onLoad = () => photoUrl;
  return (
    <div className="_user_detail_wrapper">
      <div className="_wrapper_image">
        <ImageWithFallback
          loader={onLoad}
          priority
          src={photoUrl}
          alt={photoUrl}
          fallbackSrc={defaultImageNotFound}
          fill={true}
        />
      </div>
      <div className="_description">
        <h3 className="_name">{name}</h3>
        <p className="_email">{email}</p>
      </div>
    </div>
  );
};

export default UserDetail;
