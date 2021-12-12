import { SET_IS_LOGIN } from '../actionType';
import { ReduxAction } from '../types';

export default function isLoginReducer(
  state = false,
  action: ReduxAction<boolean>,
) {
  switch (action.type) {
    case SET_IS_LOGIN:
      return action.payload;
    default:
      return state;
  }
}
