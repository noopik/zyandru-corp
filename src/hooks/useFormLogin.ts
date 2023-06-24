'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { useStoreFormLogin } from '../store';

const useFormLogin = () => {
  const router = useRouter();
  const { form, handleFormData, setIsFormInvalid, actionPostLogin } =
    useStoreFormLogin((state) => state);

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    handleFormData(name, value);
  };

  const actionSignIn = (e: any) => {
    // Validation data
    if (!form['email'] || !form['password']) {
      return setIsFormInvalid(true);
    }

    actionPostLogin(form, router, setIsLoading);
  };

  return { actionSignIn, handleInputChange, isLoading };
};

export default useFormLogin;
