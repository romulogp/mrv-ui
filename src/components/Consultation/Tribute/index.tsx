import React from 'react';
import './index.scss';

const Tribute = ({ tribute }) => {
  console.log('BOOM', tribute);
  const {
    informacao_tributaria = {},
    base_legal = {},
    retencao = {},
  } = tribute;
  return (
    <div className="tribute">
      <p className="tribute__name">{tribute.nome}</p>

      <p className="tribute__info">Informação Tributária:</p>
      <p className="tribute__description">
        Descrição: {informacao_tributaria.descricao || ''}
      </p>
      <p className="tribute__nature">
        Natureza: {informacao_tributaria.natureza.nome || ''}
      </p>

      <p className="tribute__legal-base">Base Legal:</p>
      <p className="tribute__description">Descrição: {base_legal.descricao}</p>
      <p className="tribute__nature">
        Natureza: {informacao_tributaria.natureza.nome || ''}
      </p>

      <p className="tribute__retention">Retenção:</p>
      <p className="tribute__aliquot">Alíquota: {retencao.aliquota || ''}</p>
      <p className="tribute__fact-generator">
        Fato Gerador: {retencao.fato_gerador || ''}
      </p>
      <p className="tribute__observation">
        Observação: {retencao.observacao || ''}
      </p>
    </div>
  );
};

export { Tribute };
