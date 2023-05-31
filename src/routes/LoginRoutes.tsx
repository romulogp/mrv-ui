import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PATH } from 'src/constants/paths';
import { Loading } from 'src/components/Loading';
const LoginPage = lazy(() => import('src/pages/Login'));

export const LoginRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path={PATH.MAP}
        component={() => (
          <Suspense fallback={<Loading />}>
            <LoginPage />
          </Suspense>
        )}
      />
    </Switch>
  );
};
