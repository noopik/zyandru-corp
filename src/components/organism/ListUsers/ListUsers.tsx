import { UserItem } from '../../molecules';
import './list-user.style.scss';

const ListUsers: React.FC<{ data: User[] }> = ({ data }) => {
  return (
    <div className="_wrapper_list_user">
      {data.map((user: User) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={`${user.first_name} ${user.last_name}`}
          email={user.email}
          photoUrl={user.avatar}
        />
      ))}
    </div>
  );
};

interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default ListUsers;
