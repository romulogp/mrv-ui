const users = [
  {
    email: 'user_01@gmail.com',
    senha: 'user_01',
  },
  {
    email: 'user_02@gmail.com',
    senha: 'user_02',
  },
];

const services = [
  {
    id: 1,
    codigo: '1.01',
    nome: 'Análise e desenvolvimento de sistemas.',
    informacao_geral:
      'Se enquadra serviços profissionais de desenvolvimento de sistemas, software gerais ou exclusivos, podendo haver retenção de IRRF e CSRF, se enquadrado como serviço profissional e software exclusivo.',
    tributos: [
      {
        id: 2,
        nome: 'IRRF',
        ordem_apresentacao: 1,
        informacao_tributaria: {
          id: 2,
          descricao:
            'Valores pagos a outras PJ, referente a serviços profissionais na elaboração e customização de programas de softwares exclusivos, há retenção de IRRF e CSRF, exclui-se aqui os softwares e customização gerais chamados de prateleiras.',
          natureza: {
            id: 14,
            nome: 'Serviços profissionais',
          },
        },
        base_legal: {
          id: 2,
          descricao:
            'Art. 2º do Decreto-Lei nº 2.030/1983; Art. 1º, inciso III, do Decreto-Lei nº 2.065/1983; Art. 52 da Lei nº 7.450/1985; 11.196/2005. Art. 714 do RIR/2018.',
          natureza: {
            id: 11,
            nome: 'N/A',
          },
        },
        retencao: {
          id: 2,
          aliquota: '1.5%',
          fato_gerador: 'Entrada ou pagamento',
          observacao: '',
        },
      },
      {
        id: 3,
        nome: 'CSRF',
        ordem_apresentacao: 2,
        informacao_tributaria: {
          id: 3,
          descricao:
            'Nos casos que só há armazenagem de dados onde não precisa de um serviço profissional envolvido não há retenção. Porém caso tenha serviço professional envolvido como assessoria e consultoria técnica e publicidade há retenção de IRRF',
          natureza: {
            id: 11,
            nome: 'N/A',
          },
        },
        base_legal: {
          id: 3,
          descricao:
            'Art. 30 a 36 da Lei nº 10.833/2003; Instrução Normativa SRF nº 459/2004 e Solução de Consulta COSIT nº 407/2017.',
          natureza: {
            id: 11,
            nome: 'N/A',
          },
        },
        retencao: {
          id: 3,
          aliquota: '4.65%',
          fato_gerador: 'Pagamento',
          observacao: '',
        },
      },
      {
        id: 39,
        nome: 'INSS',
        ordem_apresentacao: 3,
        informacao_tributaria: {
          id: 1,
          descricao: 'Não há previsão para retenção tributos',
          natureza: {
            id: 14,
            nome: 'Serviços profissionais',
          },
        },
        base_legal: {
          id: 1,
          descricao:
            'Não há previsão na legislação para a retenção, As legislações que tratam de quando há retenção não mencionam este serviço.',
          natureza: {
            id: 14,
            nome: 'Serviços profissionais',
          },
        },
        retencao: {
          id: 1,
          aliquota: '',
          fato_gerador: '',
          observacao: 'Sem retenção',
        },
      },
      {
        id: 40,
        nome: 'ISS',
        ordem_apresentacao: 4,
        informacao_tributaria: {
          id: 1,
          descricao: 'Não há previsão para retenção tributos',
          natureza: {
            id: 14,
            nome: 'Serviços profissionais',
          },
        },
        base_legal: {
          id: 1,
          descricao:
            'Não há previsão na legislação para a retenção, As legislações que tratam de quando há retenção não mencionam este serviço.',
          natureza: {
            id: 14,
            nome: 'Serviços profissionais',
          },
        },
        retencao: {
          id: 1,
          aliquota: '',
          fato_gerador: '',
          observacao: 'Sem retenção',
        },
      },
    ],
  },
];

const DATABASE = {
  users,
  services,
};

export { DATABASE };
