import React, { useEffect, useState } from 'react';
import { Button, Carousel } from 'antd';

const initItems = [
  {
    key: '1',
    title: 'Precisando realizar um consultoria tributária?',
    content:
      'Venha ser parceiro de quem entende do assunto, temos um time especializado para te ajudar.',
  
    
    },
  {
    key: '2',
    title: 'Tem algumas duvidas sobre Retenção de serviços?',
    content:
      'Consulte nosso nosso material das principais dúvidas encontradas a respeito de retenção de serviços. Venha conferir  .',
  },
];

export const Home = () => {
  const [items, setItems] = useState(initItems);

  useEffect(() => {
    setItems(initItems);
  }, [items]);

  return (
    <div id="home" className="homeBlock">
      <Carousel autoplay>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">
                    Faça uma consulta tributária
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
