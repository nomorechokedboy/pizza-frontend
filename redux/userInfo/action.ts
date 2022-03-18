import { CombinedState } from 'redux';
import { StateTree } from '../types';

export const SET_USERINFO = 'SET_USERINFO';

export const setUserInfo = (info: string) => ({
  type: SET_USERINFO,
  payload: info,
});

export const selectUserInfo = (state: CombinedState<StateTree>) =>
  state.userInfo;
