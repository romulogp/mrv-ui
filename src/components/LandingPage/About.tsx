import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';

const initItems = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'Legislação',
    content:
      'Proporcionar uma ferramenta de consultoria tributária Acessivel quando você mais precisa. Cuide de seu negócio deixe, as rotinas de atualizações tributárias conosco.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Ferramenta',
    content:
      'Não importa a dúvida trabalharemos para lhe ajudar, levando a informação até você, auxiliando no que diz respeito  a duvidas sobre retenções tributárias em notas fiscais de serviço.',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Banco de Dados',
    content:
      'Um Banco de dados sempre atualizado, prevendo situações tributárias sobre retenção de serviços, em breve mais serviços para atender a demanda de nossos parceiros.',
  },
];

export const About = () => {
  const [items, setItems] = useState(initItems);
  useEffect(() => {
    setItems(initItems);
  }, [items]);
  return (
    <div id="main-about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <a className="block-anchor" id="about" href="!#">
            Pseudo anchor
          </a>
          <h2>Quem Somos</h2>
          <h2>Somos uma empresa que acredita na colaboração</h2>
        </div>
        <div className="contentHolder">
          <img
            src="https://static.vecteezy.com/ti/fotos-gratis/p1/5535242-empresas-usando-um-computador-para-completar-individuo-imposto-retorno-formulario-on-line-para-pagamento-de-impostos-governo-estado-taxes-analise-de-dados-papelada-financeira-pesquisa-relatorio-calculo-declaracao-de-imposto-foto.jpg"
            alt="quem somos"
          />
          <p>
            Atender toda a legislação e acompanhar as mundanças, verdadeiramente
            não é uma tarefa facil. Por isso acreditamos na parceiria, onde
            auxiliamos empresas pareceiras a atenderem a legislação, tando dando
            suporte com um banco de dados sempre atualizado, mas também nos
            colocando a disposição para tirar duvidas, e elaborar materias que
            sejam relevantes para propagar informação, auxiliando a atenderem a
            legislação e ajudar em seus treinamentos de funcionários.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};
