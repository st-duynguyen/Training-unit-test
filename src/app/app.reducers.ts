import { combineReducers } from 'redux';

import authReducer from '@app/core/auth/auth.reducers';
import {userListReducer, userDetailReducer} from '@app/pages/home/home.reducers';

const appReducer = combineReducers({
  authReducer,
  userListReducer,
  userDetailReducer
});

export default appReducer;
