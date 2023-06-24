import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { create } from 'zustand';
import axiosConfig from '../config/axios';

interface FormLoginInterface {
  form: {
    email: string;
    password: string;
  };
  isFormInvalid: boolean;
  handleFormData: (field: string, value: string) => void;
  setIsFormInvalid: (value: boolean) => void;
  actionPostLogin: (
    data: any,
    router: AppRouterInstance,
    setIsLoading: (value: boolean) => void
  ) => void;
}

const useStoreFormLogin = create<FormLoginInterface>((set) => ({
  form: {
    email: '',
    password: '',
  },
  isFormInvalid: false,
  handleFormData: (field, value) => {
    set((prevState) => ({
      form: {
        ...prevState.form,
        [field]: value,
      },
    }));
  },
  setIsFormInvalid: (value) => {
    set((prevState) => ({
      isFormInvalid: value,
    }));
  },
  actionPostLogin: (data, router, setIsLoading) => {
    setIsLoading(true);
    axiosConfig
      .post('/users', data)
      .then((res) => {
        router.replace('/users');
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  },
}));

export default useStoreFormLogin;
