import React from 'react';

import { PageRoute } from '@core/modules/custom-router-dom/router.interface';

const UserList = React.lazy(() => import('./containers/UserList'));
const UserDetail = React.lazy(() => import('./containers/UserDetail'));

const homeRoutes: PageRoute[] = [
  {
    path: '/',
    element: UserList
  },
  {
    path: '/user-info/:id',
    element: UserDetail
  }
];

export default homeRoutes;
