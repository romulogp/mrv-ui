import React from 'react';
import { Card, Descriptions, Empty } from 'antd';
import { Tribute } from '../Tribute';
import './index.scss';

const { Item } = Descriptions;

const Service = ({ service }) => {
  const { nome, codigo, informacao_geral = {} } = service || {};

  const getTributesByPresentationOrder = () => {
    return (
      service?.tributos?.sort((t1, t2) => {
        return t1.ordem_apresentacao < t2.ordem_apresentacao ? -1 : 1;
      }) || []
    );
  };

  const renderTributes = () =>
    getTributesByPresentationOrder().map(t => (
      <Tribute key={t.id} tribute={t} />
    ));

  return service ? (
    <Card className="service">
      <Descriptions title={codigo + ' - ' + nome}></Descriptions>
      <Descriptions>
        <Item label="Informações do serviço">{informacao_geral}</Item>
      </Descriptions>

      <Descriptions title="Tributações:"></Descriptions>
      <div className="service__tribute-container">{renderTributes()}</div>
    </Card>
  ) : (
    <Empty description="Não há dados" />
  );
};

export { Service };
