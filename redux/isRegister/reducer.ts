import { SET_IS_REGISTER } from '../actionType';
import { ReduxAction } from '../types';

export default function isRegisterReducer(
  state = false,
  action: ReduxAction<boolean>,
) {
  switch (action.type) {
    case SET_IS_REGISTER:
      return action.payload;
    default:
      return state;
  }
}
