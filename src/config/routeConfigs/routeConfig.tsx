import React from 'react';
import loadable from '@loadable/component';
import { useRoutes, Outlet } from 'react-router-dom';

const FirstComponent = loadable(() => import('../../pages/first'));
const SecondComponent = loadable(() => import('../../pages/second'));
const ErrorPage = loadable(() => import('../../pages/error'));
const HomePage = loadable(() => import('../../pages/homePage'));

export const Routes = () => {
  const routes = useRoutes([
    {
      element: <HomePage />,
      path: '/',
    },

    {
      element: <Outlet />,
      path: 'customer',
      children: [
        {
          element: <SecondComponent />,
          path: 'second',
        },
        {
          element: <FirstComponent />,
          path: 'first',
        },
      ],
    },
    {
      element: <Outlet />,
      path: 'admin',
      children: [
        {
          element: <SecondComponent />,
          path: 'second',
        },
        {
          element: <FirstComponent />,
          path: 'first',
        },
      ],
    },
    {
      element: <ErrorPage />,
      path: '*',
    },
  ]);

  return routes;
};
