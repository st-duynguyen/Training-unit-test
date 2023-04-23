import { all } from 'redux-saga/effects';

import { watchAuth } from '@app/core/auth/auth.middleware';
import { watchGetUser } from './pages/home/home.middleware';

export default function* appMiddleware() {
  yield all([
    watchAuth(),
    watchGetUser()
  ]);
}
