'use client';

import Link from 'next/link';
import React from 'react';
import { Button, TextInput } from '../../atoms';
import { ButtonGroupOAuth } from '../../molecules';
import './form-login.style.scss';
import { useFormLogin } from '@vhiweb/src/hooks';

const FormLogin = () => {
  const { actionSignIn } = useFormLogin();
  return (
    <>
      <div className="_card">
        <div className="_head">
          <p>
            Welcome to <span className="text_color_primary">LOREM</span>
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
        <div>
          <TextInput
            label="Enter your username or email address"
            type="text"
            placeholder="Username or email address"
            id="email"
            name="email"
          />
          <TextInput
            label="Enter your Password"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          <div className="_forgot_password">
            <Link href="#">Forgot Password</Link>
          </div>
          {/* <button className="signIn">Sign in</button> */}
          <Button variant="primary" fullWidth onClick={actionSignIn}>
            Sign in
          </Button>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
