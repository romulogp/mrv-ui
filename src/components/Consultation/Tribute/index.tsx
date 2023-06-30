import React from 'react';
import { Card, Descriptions } from 'antd';
import './index.scss';

const { Item } = Descriptions;

const Tribute = ({ tribute }) => {
  const {
    nome,
    informacao_tributaria = {},
    base_legal = {},
    retencao = {},
  } = tribute;
  return (
    <Card title={nome} bordered className="tribute" type="inner" size="small">
      <Descriptions>
        <Item label="Descrição">{informacao_tributaria.descricao}</Item>
      </Descriptions>
      <Descriptions>
        <Item label="Natureza">{informacao_tributaria?.natureza.nome}</Item>
      </Descriptions>

      <Descriptions title="Base Legal"></Descriptions>
      <Descriptions>
        <Item label="Descrição">{base_legal?.descricao}</Item>
      </Descriptions>
      <Descriptions>
        <Item label="Natureza">{base_legal?.natureza.nome}</Item>
      </Descriptions>

      <Descriptions title="Retenção"></Descriptions>
      <Descriptions>
        <Item label="Alíquota">{retencao?.aliquota}</Item>
      </Descriptions>
      <Descriptions>
        <Item label="Fato Gerador">{retencao?.fato_gerador}</Item>
      </Descriptions>
      <Descriptions>
        <Item label="Observação">{retencao?.observacao}</Item>
      </Descriptions>
    </Card>
  );
};

export { Tribute };
