import { Header } from '@vhiweb/src/components/molecules';
import { ListUsers } from '@vhiweb/src/components/organism';

const Users = () => {
  return (
    <main className="container mx-auto p-6">
      <Header />
      <ListUsers />
    </main>
  );
};

export default Users;
