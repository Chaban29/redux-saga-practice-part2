import {
  IUser,
  TypeUsers,
  TypeUsersAction,
  UsersActions,
} from '../../types/users-types';

export const initialState: TypeUsers = [];

export const usersReducer = (
  state = initialState,
  { type, payload }: TypeUsersAction
) => {
  switch (type) {
    case UsersActions.GETUSERS:
      return [...state, ...payload];
    default:
      return state;
  }
};

export const getUsersAction = (payload: IUser[]) => ({
  type: UsersActions.GETUSERS,
  payload,
});
