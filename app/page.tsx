import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FormLogin } from '../src/components/organism';

/**
 * Renders the Login page.
 *
 * @returns The Login page component.
 */
const Login: React.FC = (): JSX.Element => {
  return (
    <main className="_main">
      <div className="_row _first">
        <div className="_container h-full flex flex-col">
          <Link href="#" className="_logo">
            Your Logo
          </Link>
          <div className="_wrapper_content">
            <div className="_content_info">
              <div className="_wrapper_text">
                <p className="heading_primary text-white">Sign in to </p>
                <p className="subheading_primary text-white">
                  Lorem Ipsum is simply{' '}
                </p>
                <p className="text_regular text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
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
        <div className="_container py-8">
          <h6 className="heading_secondary">Login as</h6>
        </div>
      </div>
    </main>
  );
};

export default Login;
