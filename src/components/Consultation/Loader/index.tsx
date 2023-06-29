import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './index.scss';

const Loader = ({ loading, children }) => {
  return loading ? (
    <Spin
      className="loader"
      indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
    />
  ) : (
    children
  );
};

export { Loader };
