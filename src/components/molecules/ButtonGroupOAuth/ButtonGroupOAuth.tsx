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
        fullWidth
        onClick={() => console.log('Feature under development')}
      >
        Sign in with Google
      </Button>
      <Button
        icon="ic-Facebook.svg"
        alt="icon-Facebook"
        variant="secondary"
        onClick={() => console.log('Feature under development')}
      />
    </div>
  );
};

export default ButtonGroupOAuth;
