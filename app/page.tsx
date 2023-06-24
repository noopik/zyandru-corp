import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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
              <div className="_card">
                <div className="flex justify-between">
                  <p>
                    Welcome to{' '}
                    <span className="text-blue-500 font-medium">LOREM</span>
                  </p>
                  <p>
                    No Account ?{' '}
                    <Link href="" className="text-blue-500 font-medium">
                      Sign up
                    </Link>
                  </p>
                </div>
                <h1 className="heading_secondary">Sign in</h1>
                <div className="flex gap-4 rounded-md">
                  <button className="bg-blue-100 text-blue-500 flex justify-center items-center gap-3 p-2 flex-1">
                    <Image
                      src="/assets/icons/ic-google.svg"
                      alt="icon-facebook"
                      width={24}
                      height={24}
                    />
                    Sign in with Google
                  </button>
                  <button className="bg-blue-100 p-4 rounded-md">
                    <Image
                      src="/assets/icons/ic-Facebook.svg"
                      alt="icon-facebook"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
                <div>
                  <div>
                    <label>Enter your username or email address</label>
                    <input
                      type="text"
                      placeholder="Username or email address"
                    />
                  </div>
                  <div>
                    <label>Enter your Password</label>
                    <input type="password" placeholder="Password" />
                  </div>
                  <div>
                    <Link href="#">Forgot Password</Link>
                  </div>
                  <button>Sign in</button>
                </div>
              </div>
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
}
