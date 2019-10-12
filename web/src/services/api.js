export function loadLists() {
  return [
    {
      title: 'Tarefas',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/167/abott@adorable.png'
        },
        {
          id: 2,
          content: 'Montar projeto para a conclusão do curso de NodeJS',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/167/abott@adorable.png'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/167/abott@adorable.png'
        },
        {
          id: 4,
          content: 'Montar projeto para a conclusão do curso de React Native',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/167/abott@adorable.png'
        },
        {
          id: 5,
          content: 'Automatizar Pipefy com criação do backend',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/167/abott@adorable.png'
        },
      ]
    },
    {
      title: 'Fazendo',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://api.adorable.io/avatars/167/abott@adorable.png'
        }
      ]
    },
    {
      title: 'Pausado',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Testar sobre Geolocalização e mapas com React Native',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/167/abott@adorable.png'
        },
        {
          id: 8,
          content: 'Realizar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/167/abott@adorable.png'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca',
          labels: [],
        }
      ]
    },
    {
      title: 'Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Criar aplicativo AirCnC',
          labels: [],
        },
        {
          id: 12,
          content: 'Criar interface do Nubank',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Baixar documentação CSS no DevDocs',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}