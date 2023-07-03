import React, { useEffect, useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

export const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [targetOffset, setTargetOffset] = useState<number | undefined>(
    undefined,
  );
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <a href="/">MRV</a> <br />
          <h1>Consultoria Tributária</h1>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset={targetOffset}>
            <Link href="#home" title="Home" />
            <Link href="#about" title="Sobre" />
            <Link href="#faq" title="FAQ" />
            <Link href="/consultation" title="Consultas" />
            <Link href="/login" title="Login" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset={targetOffset}>
              <Link href="#home" title="Home" />
              <Link href="#about" title="Sobre" />

              <Link href="#faq" title="FAQ" />

              <Link href="/consultation" title="Consultas" />
              <Link href="/login" title="Login" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
};
