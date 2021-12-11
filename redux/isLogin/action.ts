import { CombinedState, Dispatch } from 'redux';
import { SET_IS_LOGIN } from '../actionType';
import { StateTree } from '../types';

export const setIsLogin = (isLogin: boolean) => ({
  type: SET_IS_LOGIN,
  payload: isLogin,
});

export const selectIsLogin = (state: CombinedState<StateTree>) => state.isLogin;
