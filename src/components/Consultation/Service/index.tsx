import React from 'react';
import { Card, Descriptions, Empty } from 'antd';
import { Tribute } from '../Tribute';
import './index.scss';

const { Item } = Descriptions;

const Service = ({ services = [] }) => {
  const getTributesByPresentationOrder = service => {
    return (
      service?.tributos?.sort((t1, t2) => {
        return t1.ordem_apresentacao < t2.ordem_apresentacao ? -1 : 1;
      }) || []
    );
  };

  const renderTributes = service =>
    getTributesByPresentationOrder(service).map(t => (
      <Tribute key={t.id} tribute={t} />
    ));

  const renderService = service => (
    <Card key={service.id} className="service">
      <Descriptions
        title={`${service.codigo} - ${service.nome}`}
      ></Descriptions>
      <Descriptions>
        <Item label="Código">{service.codigo}</Item>
      </Descriptions>
      <Descriptions>
        <Item label="Nome">{service.nome}</Item>
      </Descriptions>
      <Descriptions>
        <Item label="Informações">{service.informacao_geral}</Item>
      </Descriptions>

      <Descriptions title="Tributações:"></Descriptions>
      <div className="service__tribute-container">
        {renderTributes(service)}
      </div>
    </Card>
  );

  const renderServices = services => {
    return (
      <div className="services-container">{services.map(renderService)}</div>
    );
  };

  return services?.length ? (
    renderServices(services)
  ) : (
    <Empty description="Não há dados" />
  );
};

export { Service };
