export interface ReduxAction<T> {
  type: string;
  payload: T;
}

export interface StateTree {
  count: number;
  isLogin: boolean;
  isRegister: boolean;
  userInfo: string;
}
