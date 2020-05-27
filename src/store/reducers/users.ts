import {
  FETCH_USERS_SUCCESS,
  FETCH_TARGET_USERS_SUCCESS,
  DELETE_TARGET_USERS_SUCCESS,
  EDIT_TARGET_USERS_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNOUT,
  CHECK_AUTH_SUCCESS,
  FETCH_MORE_USERS_SUCCESS
} from '../types';

const initialState = {
  users: {} as Record<string, any>,
  loading: true,
  targetUser: {},
  isAuthorized: false,
  userId: null,
  hasMore: true,
};

const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      const usersMap = action.payload.users.reduce((acc: any, user: any) => {
        return { ...acc, [user._id]: user };
      }, {});
      return { ...state, users: usersMap, loading: false, hasMore: true };
    case FETCH_TARGET_USERS_SUCCESS:
      return { ...state, targetUser: action.payload, loading: false };
    case DELETE_TARGET_USERS_SUCCESS:
      const id = action.payload as string;
      delete state.users[id];
      return { ...state, users: { ...state.users }, loading: false };
    case EDIT_TARGET_USERS_SUCCESS:
      const { id: userId, ...rest } = action.payload;
      const updatedUser = {
        ...state.users[userId],
        ...rest,
      };
      state.users = {
        ...state.users,
        [userId]: updatedUser,
      };
      return { ...state };
    case SIGNIN_SUCCESS:
      return { ...state, isAuthorized: action.payload.auth, userId: action.payload.userId , loading: false }
    case SIGNOUT:
      return { ...state, isAuthorized: false}
    case CHECK_AUTH_SUCCESS:
      return { ...state, isAuthorized: true}
    case FETCH_MORE_USERS_SUCCESS:
      const hasMore = action.payload.users === 5;
      const moreUsersMap = action.payload.users.reduce((acc: any, user: any) => {
        return { ...acc, [user._id]: user };
      }, {});
      return { ...state, users: { ...state.users, ...moreUsersMap }, hasMore }
    default:
      return state;
  }
};

export default usersReducer;
