import { Header } from '@vhiweb/src/components/molecules';
import { ListUsers } from '@vhiweb/src/components/organism';
import axiosConfig from '@vhiweb/src/config/axios';

const Users = async () => {
  const { data: users } = await getDataUsers();

  return (
    <main className="container mx-auto p-6">
      <Header />
      <ListUsers data={users} />
    </main>
  );
};

async function getDataUsers() {
  const res = await axiosConfig.get('/users');

  if (!res.status) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.data;
}

export default Users;
