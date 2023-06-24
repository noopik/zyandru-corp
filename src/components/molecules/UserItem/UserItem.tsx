import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './user-item.styles.scss';
const UserItem: React.FC<{
  name: string;
  email: string;
  photoUrl: string;
  id: string;
}> = ({ name, email, photoUrl, id }) => {
  return (
    <Link href={`/users/${id}`} className="_wrapper_user">
      <Image src={photoUrl} alt="user" width={62} height={62} />
      <div>
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-base">{email}</p>
      </div>
    </Link>
  );
};

export default UserItem;
