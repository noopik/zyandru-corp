'use client';

import { UserLoginHistory } from '../../molecules';

const LoginAs = () => {
  return (
    <div className="_container p-8 md:px-0 xl:p-8">
      <h6 className="heading_secondary">Login as</h6>
      <UserLoginHistory />
    </div>
  );
};

export default LoginAs;
