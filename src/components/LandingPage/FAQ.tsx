import React from 'react';
import { Collapse, Button } from 'antd';
const { Panel } = Collapse;

export const FAQ = () => {
  return (
    <div id="main-faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <a className="block-anchor" id="faq" href="!#">
            Pseudo anchor
          </a>
          <h2>Dúvidas Frequentes</h2>
          <p>
            Nesta sessão, alguns exemplos das dúvidas mais frequentes
            encontradas sobre retenção de serviços. <br />
            Para mais duvidas Acessar nosso FAQ de Perguntas e Respostas.
          </p>
        </div>

        <Collapse defaultActiveKey={['1']}>
          <Panel
            header="O que é retenção de imposto na nota fiscal de serviço?"
            key="1"
          >
            <p className="">
              A retenção de impostos diz respeito ao recolhimento antecipado de
              vários tipos de tributos, que podem ser municipais, estaduais e
              federais. Na prática, em razão da antecipação de recolhimento, sua
              empresa não receberá o valor total acertado no orçamento ou na
              venda com o cliente. Onde o tomador do serviço fica responsável
              pelo recolhimento no lugar do prestador do serviço.
            </p>
          </Panel>
          <Panel header="Quem é obrigatório recolher o tributo retido?" key="2">
            <p>
              O tomador do serviço, ou seja, o prestador apenas destaca na Nota
              fiscal, mas o tomador que é o responsável.
            </p>
          </Panel>
          <Panel
            header="Quais são os impostos que podem ser retidos na nota fiscal de serviço? "
            key="3"
          >
            <p>IRRF, CSRF que engloba (PIS, COFINS e CSLL), ISS e INSS.</p>
          </Panel>
          <Panel
            header="Os pagamentos de aluguéis efetuados de pessoa jurídica para pessoa física estão sujeitos à retenção de imposto de renda? "
            key="4"
          >
            <p>
              Sim, os pagamentos de aluguéis efetuados por pessoa jurídica para
              pessoa física estão sujeitos a retenção de imposto de renda na
              fonte, calculado de acordo com a tabela progressiva constante no
              Inciso VI do Art. 677 do Decreto 9.580/2018.
            </p>
          </Panel>
          <Panel
            header="A retenção ocorre sempre todos os tributos ou muda de acordo com serviço?"
            key="5"
          >
            <p>
              Não, é sempre de acordo com serviço, tem serviço que não há
              retenção, serviços que retem apenas o IR, outros CSRF, INSS ou
              ISS. No que tange se há retenção ou que tipo de imposto é retido é
              o tipo de serviço especificado na nota fiscal.
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};
