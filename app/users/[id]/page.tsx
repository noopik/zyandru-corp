import { ButtonGoBack } from '@vhiweb/src/components/atoms';
import { UserDetail } from '@vhiweb/src/components/molecules';
import axiosConfig from '@vhiweb/src/config/axios';

export default async function DetailUser({
  params,
}: {
  params: { id: string };
}) {
  const { data: user } = await getDataUser(params.id);

  return (
    <main className="h-screen">
      <div className="bg-gray-100 h-full flex justify-center items-center">
        <div>
          <UserDetail
            photoUrl={user?.avatar}
            email={user?.email}
            name={`${user.first_name} ${user.last_name}`}
          />
          <ButtonGoBack />
        </div>
      </div>
    </main>
  );
}

async function getDataUser(idUser: string) {
  const res = await axiosConfig.get(`/users/${idUser}`);

  if (!res.status) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.data;
}
