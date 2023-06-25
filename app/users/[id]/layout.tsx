import axiosConfig from '@vhiweb/src/config/axios';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  params: { id: string };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  const res = await axiosConfig.get(`/users/${params.id}`);

  if (!res.status) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const title =
    `${res.data.data.first_name} ${res.data.data.last_name}` ?? 'User';
  return {
    title,
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
