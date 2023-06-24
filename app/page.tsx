import { Logo } from '@vhiweb/src/components/atoms';
import Image from 'next/image';
import React from 'react';
import { FormLogin } from '../src/components/organism';
/**
 * Renders the Login page.
 *
 * @returns The Login page component.
 */
const Login: React.FC = (): JSX.Element => {
  return (
    <main className="_main_auth_page">
      <div className="_row _first">
        <div className="_container h-full flex flex-col">
          <Logo />
          <div className="_wrapper_content">
            <div className="_content_info">
              <div className="_wrapper_text">
                <p className="heading_primary text-white">Sign in to </p>
                <p className="subheading_primary text-white">
                  Welcome to Zyandru Corp's login page!
                </p>
                <p className="text_regular text-white">
                  Securely access your account with Zyandru Corp's login page.
                  Thank you for choosing Zyandru Corp! We value your trust and
                  loyalty.
                </p>
              </div>
              <div className="_wrapper_images">
                <Image
                  src="/assets/images/ils-sally.png"
                  alt="sally"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="_content_form">
              <FormLogin />
            </div>
          </div>
        </div>
      </div>
      <div className="_row">
        <div className="_container p-8 md:py-8">
          <h6 className="heading_secondary">Login as</h6>
        </div>
      </div>
    </main>
  );
};

export default Login;
