import { Button } from '../../atoms';
import './styles.scss';
import React from 'react';

const ButtonGroupOAuth: React.FC<{ className?: string }> = ({
  className,
}): JSX.Element => {
  return (
    <div className={`_wrapper ${className}`}>
      <Button
        icon="ic-google.svg"
        alt="icon-google"
        variant="secondary"
        className="flex-1"
      >
        Sign in with Google
      </Button>
      <Button icon="ic-Facebook.svg" alt="icon-Facebook" variant="secondary" />
    </div>
  );
};

export default ButtonGroupOAuth;
