'use client';

import { Button } from '../../atoms';
import './styles.scss';
import React from 'react';

const ButtonGroupOAuth: React.FC<{ className?: string }> = ({
  className,
}): JSX.Element => {
  const actionSSO = (platform: string) => {
    window.alert(
      `The feature of Single Sign-On (SSO) with ${platform} is currently under development`
    );
  };

  return (
    <div className={`_wrapper ${className}`}>
      <Button
        icon="ic-google.svg"
        alt="icon-google"
        variant="secondary"
        fullWidth
        onClick={() => actionSSO('Google')}
      >
        Sign in with Google
      </Button>
      <Button
        icon="ic-Facebook.svg"
        alt="icon-Facebook"
        variant="secondary"
        onClick={() => actionSSO('Facebook')}
      />
    </div>
  );
};

export default ButtonGroupOAuth;
