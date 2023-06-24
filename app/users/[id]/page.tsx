import { Button } from '@vhiweb/src/components/atoms';
import { UserDetail } from '@vhiweb/src/components/molecules';
import Image from 'next/image';

export default function DetailUser({ params }: { params: { id: string } }) {
  // User: {params.id}
  return (
    <main className="h-screen">
      <div className="bg-gray-100 h-full flex justify-center items-center">
        <div>
          <UserDetail />
          <Button variant="primary" fullWidth>
            Kembali
          </Button>
        </div>
      </div>
    </main>
  );
}
