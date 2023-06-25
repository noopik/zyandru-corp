'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './user-item.styles.scss';
import { ImageWithFallback } from '../../atoms';
import { defaultImageNotFound } from '@vhiweb/src/constants/common';

const UserItem: React.FC<{
  name: string;
  email: string;
  photoUrl: string;
  id: string;
}> = ({ name, email, photoUrl, id }) => {
  const onLoad = () => photoUrl;

  return (
    <Link href={`/users/${id}`} className="_wrapper_user _animate">
      <ImageWithFallback
        loader={onLoad}
        priority
        src={photoUrl}
        alt={photoUrl}
        fallbackSrc={defaultImageNotFound}
        width={62}
        height={62}
      />
      <div>
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-base">{email}</p>
      </div>
    </Link>
  );
};

export default UserItem;
