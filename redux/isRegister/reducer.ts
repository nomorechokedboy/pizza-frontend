import { SET_IS_REGISTER } from '../actionType';
import { BooleanAction } from '../types';

export default function isRegisterReducer(
  state = false,
  action: BooleanAction,
) {
  switch (action.type) {
    case SET_IS_REGISTER:
      return state;
    default:
      return state;
  }
}
