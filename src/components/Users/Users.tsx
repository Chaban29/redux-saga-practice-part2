import { FC, Fragment } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getUsersAction } from '../../redux/reducers/usersReducer';
import { fetchUsersFromServer } from '../../api';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const Users: FC = () => {
  const dispatch = useAppDispatch();
  const users = useTypedSelector((state) => state.users);

  const handleGetUsersFromServer = async () => {
    try {
      const users = await fetchUsersFromServer();
      dispatch(getUsersAction(users));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <Fragment>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} <br /> Email: {user.email}
            </li>
          ))}
        </ul>
      </div>
      <button
        disabled={users.length === 10 ? true : false}
        onClick={handleGetUsersFromServer}
      >
        Get users
      </button>
    </Fragment>
  );
};
