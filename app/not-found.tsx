import { ImagePageNotFound } from '@vhiweb/src/components/molecules';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="_container  h-screen flex justify-center items-center">
      <div className="flex flex-col marker:justify-center items-center">
        <ImagePageNotFound />
        <h1 className="text-4xl font-bold mb-4 text-blue-500">
          Page not found
        </h1>
        <Link
          href="/"
          className="bg-blue-200 p-2 min-w-[100px] rounded-md text-center text-lg font-medium hover:text-blue-500 hover:cursor-pointer"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
