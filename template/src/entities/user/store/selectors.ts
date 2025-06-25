import { createSelector, Selector } from '@reduxjs/toolkit';

import { RootState } from '~/app/store/types';
import { UserState } from '~/entities/user/store/types';

export const selectUser: Selector<RootState, UserState> = state => state.user;

export const selectIsAuth = createSelector(selectUser, state => !!state.auth);

export const selectProfile = createSelector(selectUser, state => {
  if (!state.profile) {
    throw new Error('User is not authenticated');
  }

  return state.profile;
});
