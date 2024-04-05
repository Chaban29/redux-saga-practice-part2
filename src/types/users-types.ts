export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export type TypeUsers = IUser[];

export const enum UsersActions {
  GETUSERS = 'users/GET',
}

export type TypeUsersAction = { type: UsersActions.GETUSERS; payload: IUser[] };
