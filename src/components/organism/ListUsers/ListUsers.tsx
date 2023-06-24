import { UserItem } from '../../molecules';
import './list-user.style.scss';
const ListUsers = () => {
  return (
    <div className="_wrapper_list_user">
      {Array(10)
        .fill()
        .map((users) => (
          <UserItem
            name={`Joko`}
            email={`Joko@mail`}
            photoUrl={`/assets/images/img-dummy-user.png`}
            id={`2`}
          />
        ))}
    </div>
  );
};

export default ListUsers;
