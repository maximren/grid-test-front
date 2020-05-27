import axios from 'axios';
import { put, all, takeLatest } from 'redux-saga/effects';

import { User } from '../../types/user.types';
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_TARGET_USERS,
  FETCH_TARGET_USERS_SUCCESS,
  DELETE_TARGET_USERS,
  DELETE_TARGET_USERS_SUCCESS,
  EDIT_TARGET_USERS,
  EDIT_TARGET_USERS_SUCCESS,
  SIGNIN,
  SIGNIN_SUCCESS,
  CHECK_AUTH,
  CHECK_AUTH_SUCCESS,
  FETCH_MORE_USERS,
  FETCH_MORE_USERS_SUCCESS
} from '../types';
import { instance } from '../../helpers/api';

function* fetchUsersSaga() {
  try {
    const response = yield instance.get(`/users?skip=0&limit=5`);
    const res: User = response.data;

    yield put({ type: FETCH_USERS_SUCCESS, payload: res });
  } catch (error) {
    console.log(error);
  }
}

function* fetchMoreUsersSaga({ type, payload }: any) {
  try {
    const response = yield instance.get(`/users?skip=${payload}&limit=5`);
    const res: User = response.data;

    yield put({ type: FETCH_MORE_USERS_SUCCESS, payload: res });
  } catch (error) {
    console.log(error);
  }
}

function* fetchTargetUserSage({ type, payload }: any) {
  try {
    const data = yield instance.get(`/users/${payload}`);
    const user: User = data.data.user;

    yield put({ type: FETCH_TARGET_USERS_SUCCESS, payload: user });
  } catch (error) {
    console.log(error);
  }
}

function* deleteTargetUserSage({ types, payload }: any) {
  try {
    const data = yield instance.delete(`/users/${payload}`);
    const id = data.data.id;

    yield put({ type: DELETE_TARGET_USERS_SUCCESS, payload: id });
  } catch (error) {
    console.log(error);
  }
}

function* updateTargetUserSage({ types, payload }: any) {
  try {
    const response = yield instance.patch(`/users/${payload.id}`, {
      name: payload.name,
      empActive: payload.empActive,
      empDepartment: payload.empDepartment,
    });

    yield put({ type: EDIT_TARGET_USERS_SUCCESS, payload });
  } catch (error) {
    console.log(error);
  }
}

function* signinSaga({ type, payload }: any) {
  try {
    const response = yield instance.post('/signin', {
      email: payload.email,
      password: payload.password,
    });
    instance.defaults.headers['Authorization'] = response.data.message;

    const isAuth = response.data.status === 200;

    localStorage.setItem('id', response.data.id)
    localStorage.setItem('token', response.data.message);

    if (isAuth) {
      yield put({
        type: SIGNIN_SUCCESS,
        payload: { auth: true, userId: response.data.id },
      });
    } else {
      yield put({ type: SIGNIN_SUCCESS, payload: false });
    }
  } catch (error) {
    console.log(error);
  }
}

function* checkAuthTokenSaga() {
  const token = yield localStorage.getItem('token');
  try {
    if (token) {
      instance.defaults.headers['Authorization'] = token;
      yield put({ type: CHECK_AUTH_SUCCESS })
    }
  } catch (error) {
    console.log(error);
  }
}

export function* usersSaga() {
  return yield all([
    takeLatest(FETCH_USERS, fetchUsersSaga),
    takeLatest(FETCH_TARGET_USERS, fetchTargetUserSage),
    takeLatest(DELETE_TARGET_USERS, deleteTargetUserSage),
    takeLatest(EDIT_TARGET_USERS, updateTargetUserSage),
    takeLatest(SIGNIN, signinSaga),
    takeLatest(CHECK_AUTH, checkAuthTokenSaga),
    takeLatest(FETCH_MORE_USERS, fetchMoreUsersSaga)
  ]);
}
