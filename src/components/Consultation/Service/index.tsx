import React from 'react';
import { Empty } from 'antd';
import { Tribute } from '../Tribute';
import './index.scss';

const Service = ({ service }) => {
  const getTributesByPresentationOrder = () => {
    return (
      service?.tributos?.sort((t1, t2) => {
        return t1.ordem_apresentacao < t2.ordem_apresentacao ? -1 : 1;
      }) || []
    );
  };

  return service ? (
    <div className="servico">
      <p>Nome: {service.nome || '-'}</p>
      <p>Informações do serviço: {service.informacao_geral || '-'}</p>

      <div>Tributos:</div>
      {getTributesByPresentationOrder().map(t => (
        <Tribute key={t.id} tribute={t} />
      ))}
    </div>
  ) : (
    <Empty description="Não há dados" />
  );
};

export { Service };
