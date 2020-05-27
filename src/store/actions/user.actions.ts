import {
  FETCH_USERS,
  FETCH_TARGET_USERS,
  DELETE_TARGET_USERS,
  EDIT_TARGET_USERS,
  SIGNIN,
  SIGNOUT,
  CHECK_AUTH,
  FETCH_MORE_USERS
} from '../types';

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const fetchTargetUser = (id: number) => ({
  type: FETCH_TARGET_USERS,
  payload: id,
});

export const deleteTargetUser = (id: number) => ({
  type: DELETE_TARGET_USERS,
  payload: id,
});

export const editUser = (
  id: number,
  name?: string,
  empActive?: string,
  empDepartment?: string,
) => ({
  type: EDIT_TARGET_USERS,
  payload: { id, name, empActive, empDepartment },
});

export const signin = (email: string, password: string) => ({
  type: SIGNIN,
  payload: { email, password }
});

export const signout = () => ({
  type: SIGNOUT
})

export const checkAuthToken = () => ({
  type: CHECK_AUTH,
})

export const fetchMoreUsers = (page: number) => ({
  type: FETCH_MORE_USERS,
  payload: page
})
