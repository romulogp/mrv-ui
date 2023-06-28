import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PATH } from 'src/constants/paths';
import { Loading } from 'src/components/Loading';
const ConsultationPage = lazy(() => import('src/pages/Consultation'));

export const ConsultationRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path={PATH.CONSULTATION}
        component={() => (
          <Suspense fallback={<Loading />}>
            <ConsultationPage />
          </Suspense>
        )}
      />
    </Switch>
  );
};
