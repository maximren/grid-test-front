import { createSelector } from 'reselect';

export const usersSelector = createSelector(
  (state: any) => state.usersReducer,
  (usersReducer) => Object.values(usersReducer.users),
);
