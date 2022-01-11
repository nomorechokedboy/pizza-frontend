import {
  createStore,
  combineReducers,
  applyMiddleware,
  CombinedState,
} from 'redux';
import countReducer from './count/reducer';
import isLoginReducer from './isLogin/reducer';
import isRegisterReducer from './isRegister/reducer';
import userInfoReducer from './userInfo/reducer';

const rootReducer = combineReducers({
  count: countReducer,
  isLogin: isLoginReducer,
  isRegister: isRegisterReducer,
  userInfo: userInfoReducer,
});

const store = createStore(rootReducer);

export default store;
