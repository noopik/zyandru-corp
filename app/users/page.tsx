import { Header } from '@vhiweb/src/components/molecules';
import { ListUsers } from '@vhiweb/src/components/organism';
import axiosConfig from '@vhiweb/src/config/axios';

const Users = async () => {
  const users = await getDataUsers();

  return (
    <main className="container mx-auto p-6">
      <Header />
      <ListUsers data={users} />
    </main>
  );
};

async function getDataUsers() {
  try {
    const resPage1 = await axiosConfig.get('/users');
    const resPage2 = await axiosConfig.get('/users?page=2');

    const isResponseSuccess = resPage1.status && resPage2.status;

    if (!isResponseSuccess) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    const data = [...resPage1.data.data, ...resPage2.data.data];

    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}

export default Users;
