import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HomeRoutes } from './HomeRoutes';
import { LoginRoutes } from './LoginRoutes';
import { ConsultationRoutes } from './ConsultationRoutes';

export const Routes = () => {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <LoginRoutes />
      <ConsultationRoutes />
    </BrowserRouter>
  );
};
