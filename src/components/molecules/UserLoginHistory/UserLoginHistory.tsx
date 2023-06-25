'use client';

import { useStoreAuthUsers } from '@vhiweb/src/store';
import moment from 'moment';
import UserLogin from './UserLogin';

const UserLoginHistory = () => {
  const { users } = useStoreAuthUsers((state) => state);

  return (
    <div className="lg:grid grid-rows-2 grid-cols-2 gap-4 max-w-fit lg:max-w-[500px]">
      {users.length > 0 ? (
        users.map((user) => (
          <UserLogin
            key={user.id}
            isUserLoggedIn
            id={user.id}
            name={user.name}
            lastLoggedAt={moment(user.lastLogedAt).fromNow()}
          />
        ))
      ) : (
        <UserLogin
          isUserLoggedIn={false}
          name="Show user account"
          lastLoggedAt="on login section API"
        />
      )}
    </div>
  );
};

export default UserLoginHistory;
