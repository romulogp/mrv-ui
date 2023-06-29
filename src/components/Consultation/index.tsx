import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Loader } from './Loader';
import { Service } from './Service';
import { DATABASE } from 'src/utils/mock/database.mock';
import './index.scss';

const Consultation = () => {
  const [loading, setLoading] = useState(false);
  const service = DATABASE.services[0];

  const handleSearch = e => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="consultation">
      <div className="consultation__search-fields">
        <Input className="consultation__input-code" placeholder="Código" />
        <Input className="consultation__input-name" placeholder="Nome" />
        <Button
          className="consultation__search-btn"
          type="primary"
          icon={<SearchOutlined />}
          onClick={handleSearch}
        ></Button>
      </div>

      <div className="consultation__result">
        <Loader loading={loading}>
          <Service service={service} />
        </Loader>
      </div>
    </div>
  );
};

export { Consultation };
