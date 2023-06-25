import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { create } from 'zustand';
import axiosConfig from '../config/axios';
import { toast } from 'react-toastify';
import useStoreAuthUsers from './useStoreAuthUsers';

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
    const { addUser } = useStoreAuthUsers.getState();

    setIsLoading(true);
    axiosConfig
      .post('/login', data)
      .then((res) => {
        addUser(data['email'], data['password']);
        router.replace('/users');
      })
      .catch((err) => {
        const message = err?.response?.data?.error ?? 'Server error';

        return toast.error(message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  },
}));

export default useStoreFormLogin;
