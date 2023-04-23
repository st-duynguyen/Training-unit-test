import { combineReducers } from 'redux';

import authReducer from '@app/core/auth/auth.reducers';
import homeReducer from '@app/pages/home/home.reducers';

const appReducer = combineReducers({
  authReducer,
  homeReducer
});

export default appReducer;
