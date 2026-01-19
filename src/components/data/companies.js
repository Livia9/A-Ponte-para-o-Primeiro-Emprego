export const companiesData = [
  {
    id: 1,
    name: "EcoTech Soluções",
    segment: "Tecnologia Sustentável",
    size: "Média empresa (100-500 funcionários)",
    location: "São Paulo, SP",
    description: "Empresa focada em soluções tecnológicas para sustentabilidade empresarial",
    logo: "/logos/ecotech.png",
    openVacancies: 3,
    vacancies: [
      {
        id: 1,
        title: "Assistente de Comunicação Jr.",
        area: "Marketing e Comunicação",
        type: "CLT",
        level: "Júnior",
        requirements: [
          "Comunicação efetiva",
          "Trabalho em equipe",
          "Conhecimento básico em sustentabilidade"
        ],
        description: "Buscamos jovem talento para apoiar nossa equipe de comunicação na criação de conteúdo sobre sustentabilidade."
      },
      {
        id: 2,
        title: "Analista de Projetos Jr.",
        area: "Gestão de Projetos",
        type: "CLT",
        level: "Júnior",
        requirements: [
          "Gestão de tempo",
          "Organização",
          "Pensamento crítico"
        ],
        description: "Oportunidade para atuar em projetos de sustentabilidade empresarial."
      }
    ],
    benefits: [
      "Vale alimentação",
      "Vale transporte",
      "Plano de saúde",
      "Home office híbrido",
      "Programa de desenvolvimento"
    ]
  },
  {
    id: 2,
    name: "Verde Futuro ONG",
    segment: "Terceiro Setor",
    size: "Pequena organização (10-50 funcionários)",
    location: "Rio de Janeiro, RJ",
    description: "ONG dedicada a projetos de educação ambiental e sustentabilidade comunitária",
    logo: "/logos/verdefuturo.png",
    openVacancies: 2,
    vacancies: [
      {
        id: 3,
        title: "Coordenador de Projetos Sociais",
        area: "Gestão de Projetos",
        type: "CLT",
        level: "Júnior",
        requirements: [
          "Liderança",
          "Inteligência emocional",
          "Trabalho em equipe"
        ],
        description: "Coordenar projetos sociais de impacto ambiental em comunidades."
      }
    ],
    benefits: [
      "Vale alimentação",
      "Vale transporte",
      "Flexibilidade de horários",
      "Ambiente colaborativo"
    ]
  },
  {
    id: 3,
    name: "Sustenta Corp",
    segment: "Consultoria ESG",
    size: "Grande empresa (500+ funcionários)",
    location: "São Paulo, SP",
    description: "Consultoria especializada em práticas ESG e sustentabilidade corporativa",
    logo: "/logos/sustentacorp.png",
    openVacancies: 5,
    vacancies: [
      {
        id: 4,
        title: "Assistente de Consultoria ESG",
        area: "Consultoria",
        type: "CLT",
        level: "Júnior",
        requirements: [
          "Pensamento crítico",
          "Comunicação efetiva",
          "Gestão de tempo"
        ],
        description: "Apoiar consultores sênior em projetos de ESG para grandes empresas."
      },
      {
        id: 5,
        title: "Analista de Comunicação Interna",
        area: "Recursos Humanos",
        type: "CLT",
        level: "Júnior",
        requirements: [
          "Comunicação efetiva",
          "Inteligência emocional",
          "Criatividade"
        ],
        description: "Desenvolver estratégias de comunicação interna focadas em cultura ESG."
      }
    ],
    benefits: [
      "Salário competitivo",
      "Vale alimentação e refeição",
      "Plano de saúde e odontológico",
      "Seguro de vida",
      "Programa de trainee",
      "Gympass"
    ]
  },
  {
    id: 4,
    name: "Impact Hub Brasil",
    segment: "Inovação Social",
    size: "Média empresa (50-100 funcionários)",
    location: "Belo Horizonte, MG",
    description: "Espaço de coworking e aceleradora de negócios de impacto social",
    logo: "/logos/impacthub.png",
    openVacancies: 2,
    vacancies: [
      {
        id: 6,
        title: "Community Manager Jr.",
        area: "Gestão de Comunidade",
        type: "CLT",
        level: "Júnior",
        requirements: [
          "Comunicação efetiva",
          "Trabalho em equipe",
          "Organização"
        ],
        description: "Gerenciar comunidade de empreendedores sociais e facilitar networking."
      }
    ],
    benefits: [
      "Vale alimentação",
      "Espaço de coworking gratuito",
      "Networking com empreendedores",
      "Mentorias",
      "Ambiente criativo"
    ]
  },
  {
    id: 5,
    name: "GreenTech Startups",
    segment: "Startup - Tecnologia Verde",
    size: "Startup (5-20 funcionários)",
    location: "Florianópolis, SC",
    description: "Startup desenvolvendo soluções tecnológicas para economia circular",
    logo: "/logos/greentech.png",
    openVacancies: 3,
    vacancies: [
      {
        id: 7,
        title: "Estagiário de Marketing Digital",
        area: "Marketing",
        type: "Estágio",
        level: "Estágio",
        requirements: [
          "Comunicação efetiva",
          "Criatividade",
          "Conhecimento em redes sociais"
        ],
        description: "Apoiar estratégias de marketing digital focadas em sustentabilidade."
      },
      {
        id: 8,
        title: "Assistente Administrativo",
        area: "Administrativo",
        type: "CLT",
        level: "Júnior",
        requirements: [
          "Gestão de tempo",
          "Organização",
          "Comunicação"
        ],
        description: "Suporte administrativo e organizacional para equipe enxuta de startup."
      }
    ],
    benefits: [
      "Vale alimentação",
      "Ambiente startup",
      "Aprendizado acelerado",
      "Equity (CLT)",
      "Flexibilidade"
    ]
  }
];

export const partnerOrganizations = [
  {
    id: 1,
    name: "Ministério do Trabalho",
    type: "Governo Federal",
    description: "Parceiro governamental para programas de primeiro emprego"
  },
  {
    id: 2,
    name: "SENAI",
    type: "Instituição de Ensino",
    description: "Parceria para desenvolvimento de cursos técnicos"
  },
  {
    id: 3,
    name: "Instituto Sustentabilidade",
    type: "ONG",
    description: "Colaboração em projetos de sustentabilidade e ESG"
  },
  {
    id: 4,
    name: "Pacto Global ONU",
    type: "Organização Internacional",
    description: "Alinhamento com ODS 4 e princípios de sustentabilidade"
  }
];