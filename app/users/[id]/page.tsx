import { ButtonGoBack } from '@vhiweb/src/components/atoms';
import { UserDetail } from '@vhiweb/src/components/molecules';
import axiosConfig from '@vhiweb/src/config/axios';
import './_page.scss';

export default async function DetailUser({
  params,
}: {
  params: { id: string };
}) {
  const { data: user } = await getDataUser(params.id);

  return (
    <main className="_detail_user_page">
      <div className="_content">
        <UserDetail
          photoUrl={user?.avatar}
          email={user?.email}
          name={`${user.first_name} ${user.last_name}`}
        />
        <ButtonGoBack />
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
