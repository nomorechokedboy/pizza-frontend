import { StateTree } from '../types';

export const setIsRegister = (isRegister: boolean) => ({
  type: isRegister,
  payload: isRegister,
});

export const selectIsRegister = (state: StateTree) => state.isRegister;
