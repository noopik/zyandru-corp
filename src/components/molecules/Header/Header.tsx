'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../../atoms';
import './header.style.scss';
const Header = () => {
  const router = useRouter();

  const actionLogout = () => router.push('/');

  return (
    <div className="_header_wrapper">
      <h1 className="_text_header">List Users</h1>
      <Button onClick={actionLogout} variant="secondary">
        Logout
      </Button>
    </div>
  );
};

export default Header;
