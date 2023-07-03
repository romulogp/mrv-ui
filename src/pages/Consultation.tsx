import React, { useState } from 'react';
import { IHelmet, MainLayout } from 'src/layouts/MainLayout';
import { Consultation } from 'src/components/Consultation';
import 'src/assets/scss/home.scss';
import 'src/assets/scss/consultation.scss';

const initHelmet: IHelmet = {
  isRoot: true,
  description: 'Demo using Ant design in React',
};

const _ConsultationPage = () => {
  const [helmet] = useState(initHelmet);
  return (
    <MainLayout helmet={helmet}>
      <div className="container-fluid consultation-page">
        <h1 className="consultation-page__title">Consulta por Código</h1>
        <Consultation />
      </div>
    </MainLayout>
  );
};

const ConsultationPage = React.memo(_ConsultationPage);
export default ConsultationPage;
