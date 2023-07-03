import { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { searchService } from 'src/utils/mock/api.mock';
import { Loader } from './Loader';
import { Service } from './Service';
import './index.scss';

const Consultation = () => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);

  const showErrorMessage = () => {
    Modal.error({
      title: 'Não foi possível carregar os dados',
      content:
        'Ocorreu um erro durante o carregamento dos serviços. Tente novamente mais tarde.',
    });
  };

  const handleSearch = e => {
    e.preventDefault();
    setLoading(true);

    const code = document.querySelector('.consultation__input-code')?.['value'];
    const name = document.querySelector('.consultation__input-name')?.['value'];

    setTimeout(() => {
      searchService(code, name)
        .then(data => {
          console.log('OIOIOI', data);
          setServices(data.content);
        })
        .catch(showErrorMessage)
        .finally(() => setLoading(false));
    }, 2000);
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
          <Service services={services} />
        </Loader>
      </div>
    </div>
  );
};

export { Consultation };
