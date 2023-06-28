import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { PATH } from 'src/constants/paths';
import './index.scss';

const LoginForm = ({ title, subtitle }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const redirectToConsultationPage = () => {
    window.location.replace(PATH.CONSULTATION);
  };

  const onLoginSuccess = () => {
    messageApi.success(
      'Sucesso! Por favor, aguarde...',
      2,
      redirectToConsultationPage,
    );
  };

  const showInvalidEmailOrPassword = () => {
    messageApi.error('Usuário e/ou senha inválido(s)');
  };

  const onFinish = values => {
    const { email, password } = values;

    if (email === 'admin@mrv.com.br' && password === 'admin') {
      onLoginSuccess();
    } else {
      showInvalidEmailOrPassword();
    }
  };

  return (
    <div className="login-form-container">
      {contextHolder}
      <div className="login-form-container__title">{title}</div>
      <div className="login-form-container__subtitle">{subtitle}</div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Por favor informe seu email!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Por favor informe sua senha!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Senha"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Lembrar-me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Esqueci a senha
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Ou <a href="">registre-se agora!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export { LoginForm };
