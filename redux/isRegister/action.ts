import { SET_IS_REGISTER } from '../actionType';
import { StateTree } from '../types';

export const setIsRegister = (isRegister: boolean) => ({
  type: SET_IS_REGISTER,
  payload: isRegister,
});

export const selectIsRegister = (state: StateTree) => state.isRegister;
