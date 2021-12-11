export interface ReduxAction<T> {
  type: string;
  payload: T;
}

export type BooleanAction = ReduxAction<boolean>;

export interface StateTree {
  count: number;
  isLogin: boolean;
  isRegister: boolean;
}
