'use client';

import Link from 'next/link';
import React from 'react';
import { Button, TextInput } from '../../atoms';
import { ButtonGroupOAuth } from '../../molecules';
import './form-login.style.scss';
import { useFormLogin } from '@vhiweb/src/hooks';
import { useStoreFormLogin } from '@vhiweb/src/store';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const FormLogin = () => {
  const { actionSignIn, handleInputChange, isLoading } = useFormLogin();
  const { form, isFormInvalid } = useStoreFormLogin((state) => state);

  return (
    <>
      <div className="_card">
        <div className="_head">
          <p className="hidden sm:block md:hidden lg:block">
            Welcome to <span className="text_color_primary">Zyandru Corp</span>
          </p>
          <p>
            No Account ?{' '}
            <Link href="" className="text_color_primary">
              Sign up
            </Link>
          </p>
        </div>
        <h1 className="_title_sign_in">Sign in</h1>
        <ButtonGroupOAuth />
        <TextInput
          id="email"
          name="email"
          label="Enter your username or email address"
          type="text"
          placeholder="Username or email address"
          onChange={handleInputChange}
          value={form['email']}
          isError={isFormInvalid && !form['email']}
        />
        <TextInput
          id="password"
          name="password"
          label="Enter your Password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          value={form['password']}
          isError={isFormInvalid && !form['password']}
        />
        <div className="_forgot_password">
          <Link href="#">Forgot Password</Link>
        </div>
        <Button
          variant="primary"
          fullWidth
          onClick={actionSignIn}
          disabled={isLoading}
        >
          Sign in
        </Button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default FormLogin;
