'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const useFormLogin = () => {
  const router = useRouter();

  const actionSignIn = (e: any) => {
    router.push('/users');
  };

  return { actionSignIn };
};

export default useFormLogin;
