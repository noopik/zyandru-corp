'use client';

import React from 'react';
import Button from '../Button/Button';
import { useRouter } from 'next/navigation';

const ButtonGoBack = () => {
  const router = useRouter();

  const handleBack = () => router.back();

  return (
    <Button variant="primary" fullWidth onClick={handleBack}>
      Back
    </Button>
  );
};

export default ButtonGoBack;
