import { ReduxAction } from '../types';
import { SET_USERINFO } from './action';

export default function userInfoReducer(
  state = '',
  action: ReduxAction<string>,
) {
  switch (action.type) {
    case SET_USERINFO:
      return action.payload;

    default:
      return state;
  }
}
