import { SET_IS_LOGIN } from '../actionType';
import { BooleanAction } from '../types';

export default function isLoginReducer(state = false, action: BooleanAction) {
  switch (action.type) {
    case SET_IS_LOGIN:
      return action.payload;
    default:
      return state;
  }
}
