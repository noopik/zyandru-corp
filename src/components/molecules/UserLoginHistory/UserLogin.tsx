'use client';

import { defaultImageNotFound } from '@vhiweb/src/constants/common';
import { useStoreAuthUsers } from '@vhiweb/src/store';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonIcon } from '../../atoms';

interface UserLoginInterface {
  isUserLoggedIn: boolean;
  id?: number;
  name?: string;
  lastLoggedAt?: string;
}

const UserLogin = ({
  id,
  isUserLoggedIn,
  name,
  lastLoggedAt,
}: UserLoginInterface) => {
  const { removeUser } = useStoreAuthUsers((state) => state);
  const types = {
    logged: 'bg-blue-100 hover:bg-blue-200',
    unlogged: 'bg-neutral-300 hover:bg-neutral-200',
  };

  const removeUserLogged = () => {
    removeUser(id);
  };

  return (
    <div className="mt-4 relative">
      {isUserLoggedIn && (
        <ButtonIcon
          icon="cross"
          className="absolute top-[-10px] right-[-10px]"
          onClick={removeUserLogged}
        />
      )}
      <Link
        href={isUserLoggedIn ? '/users' : 'https://reqres.in/'}
        target={isUserLoggedIn ? '_self' : '_blank'}
      >
        <div
          className={`${
            isUserLoggedIn ? types['logged'] : types['unlogged']
          }   flex gap-3 justify-center items-center p-3 rounded-lg`}
        >
          <Image
            src={defaultImageNotFound}
            alt="user-zyandru-corp"
            width={48}
            height={48}
          />
          <div>
            <p className="text-base">{name}</p>
            <p className="text-sm text-gray-400">{lastLoggedAt}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserLogin;
