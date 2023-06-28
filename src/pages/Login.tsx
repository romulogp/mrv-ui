import React from 'react';
import { LoginForm } from 'src/components/LoginForm';
import { Content } from 'antd/lib/layout/layout';
import { Helmet } from 'react-helmet-async';
import 'src/assets/scss/login.scss';

const _LoginPage = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{'MRV - Login'}</title>
        <meta name="description" content={'MRV - Login'} />
      </Helmet>

      <Content>
        <LoginForm title="MRV" subtitle="Consultas Tributárias" />
      </Content>
    </>
  );
};

const LoginPage = React.memo(_LoginPage);
export default LoginPage;
