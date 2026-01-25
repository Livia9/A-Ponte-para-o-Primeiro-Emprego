// add foto dos alunos
export const studentsData = [
  {
    id: 1,
    name: "Ana Silva",
    age: 22,
    email: "ana.silva@gmail.com",
    phone: "(11) 98765-4321",
    location: "São Paulo, SP",
    photo:  '/students/ana-silva.jpg',
    completedCourses: 2,
    inProgressCourses: 1,
    portfolioProjects: 2,
    totalSkills: 8,
    skills: [
      "Comunicação",
      "Trabalho em equipe",
      "Gestão de tempo",
      "Apresentações",
      "Colaboração",
      "Liderança",
      "Escuta ativa",
      "Resolução de conflitos"
    ],
    portfolio: [
      {
        id: 1,
        title: "Projeto Coleta Seletiva",
        description: "Coordenação de equipe para implementação de sistema de coleta seletiva em comunidade local",
        course: "Trabalho em Equipe",
        date: "Janeiro 2026",
        impact: "Redução de 40% no lixo não reciclado",
        videoUrl: "/videos/portfolio-1.mp4",
        skills: ["Liderança", "Trabalho em equipe", "Gestão de projetos"]
      },
      {
        id: 2,
        title: "Campanha Ambiental",
        description: "Criação de estratégia de comunicação para conscientização ambiental",
        course: "Comunicação Efetiva",
        date: "Janeiro 2026",
        impact: "Alcance de 500+ pessoas na comunidade",
        imageUrl: "/images/portfolio-2.jpg",
        skills: ["Comunicação", "Apresentações", "Marketing social"]
      }
    ],
    availability: "Imediato",
    bio: "Jovem profissional em busca da primeira oportunidade no mercado de trabalho. Apaixonada por sustentabilidade e comunicação.",
    education: "Cursando Administração - 3º semestre",
    certificates: [
      {
        courseId: 1,
        courseName: "Comunicação Efetiva",
        issueDate: "15/01/2026",
        certificateUrl: "/certificates/comunicacao-001.pdf"
      },
      {
        courseId: 2,
        courseName: "Trabalho em Equipe",
        issueDate: "10/01/2026",
        certificateUrl: "/certificates/trabalho-equipe-001.pdf"
      }
    ]
  },
  {
    id: 2,
    name: "Carlos Mendes",
    age: 20,
    email: "carlos.mendes@email.com",
    phone: "(21) 97654-3210",
    location: "Rio de Janeiro, RJ",
    photo: '/students/carlos.jpg',
    completedCourses: 3,
    inProgressCourses: 0,
    portfolioProjects: 1,
    totalSkills: 10,
    skills: [
      "Inteligência emocional",
      "Liderança",
      "Comunicação",
      "Empatia",
      "Resiliência",
      "Trabalho em equipe",
      "Autoconhecimento",
      "Gestão de conflitos",
      "Motivação",
      "Adaptabilidade"
    ],
    portfolio: [
      {
        id: 3,
        title: "Projeto Social Comunitário",
        description: "Liderança de equipe voluntária em projeto de impacto social",
        course: "Inteligência Emocional",
        date: "Dezembro 2025",
        impact: "Atendimento a 100+ famílias",
        videoUrl: "/videos/portfolio-3.mp4",
        skills: ["Liderança", "Empatia", "Gestão de equipe"]
      },
      {
        id: 4,
        title: "Workshop de Comunicação",
        description: "Organização e apresentação de workshop sobre comunicação efetiva",
        course: "Comunicação Efetiva",
        date: "Dezembro 2025",
        impact: "30 participantes capacitados",
        imageUrl: "/images/portfolio-4.jpg",
        skills: ["Comunicação", "Oratória", "Facilitação"]
      }
    ],
    availability: "Em 2 semanas",
    bio: "Estudante dedicado com forte interesse em desenvolvimento pessoal e liderança comunitária.",
    education: "Cursando Psicologia - 2º semestre",
    certificates: [
      {
        courseId: 1,
        courseName: "Comunicação Efetiva",
        issueDate: "20/12/2025",
        certificateUrl: "/certificates/comunicacao-002.pdf"
      },
      {
        courseId: 2,
        courseName: "Trabalho em Equipe",
        issueDate: "15/12/2025",
        certificateUrl: "/certificates/trabalho-equipe-002.pdf"
      },
      {
        courseId: 4,
        courseName: "Inteligência Emocional",
        issueDate: "05/01/2026",
        certificateUrl: "/certificates/ie-001.pdf"
      }
    ]
  },
  {
    id: 3,
    name: "Beatriz Santos",
    age: 21,
    email: "beatriz.santos@email.com",
    phone: "(11) 96543-2109",
    location: "São Paulo, SP",
    photo: '/students/bia.jpg',
    completedCourses: 1,
    inProgressCourses: 2,
    portfolioProjects: 1,
    totalSkills: 6,
    skills: [
      "Gestão de tempo",
      "Organização",
      "Planejamento",
      "Priorização",
      "Produtividade",
      "Análise"
    ],
    portfolio: [
      {
        id: 5,
        title: "Otimização de Recursos",
        description: "Projeto de otimização de recursos em pequena empresa familiar",
        course: "Gestão de Tempo",
        date: "Janeiro 2026",
        impact: "Aumento de 30% na produtividade",
        documentUrl: "/docs/portfolio-5.pdf",
        skills: ["Gestão de tempo", "Organização", "Análise"]
      }
    ],
    availability: "Imediato",
    bio: "Organizada e focada em resultados. Busco oportunidades para aplicar conhecimentos em gestão e organização.",
    education: "Cursando Gestão de RH - 4º semestre",
    certificates: [
      {
        courseId: 3,
        courseName: "Gestão de Tempo",
        issueDate: "12/01/2026",
        certificateUrl: "/certificates/gestao-tempo-001.pdf"
      }
    ]
  },
  {
    id: 4,
    name: "Diego Costa",
    age: 23,
    email: "diego.costa@email.com",
    phone: "(85) 95432-1098",
    location: "Fortaleza, CE",
    photo: '/students/diego.jpg',
    completedCourses: 2,
    inProgressCourses: 1,
    totalSkills: 7,
    skills: [
      "Comunicação",
      "Apresentação pessoal",
      "Confiança",
      "Trabalho em equipe",
      "Adaptabilidade",
      "Proatividade",
      "Networking"
    ],
    portfolio: [
      {
        id: 6,
        title: "Entrevista Simulada ESG",
        description: "Participação em entrevista simulada sobre práticas de sustentabilidade",
        course: "Preparação para Entrevistas",
        date: "Janeiro 2026",
        impact: "Aprovação com nota 9.5/10",
        videoUrl: "/videos/portfolio-6.mp4",
        skills: ["Comunicação", "Confiança", "Conhecimento ESG"]
      },
      {
        id: 7,
        title: "Rede de Colaboração Sustentável",
        description: "Criação de rede colaborativa para projetos ambientais",
        course: "Trabalho em Equipe",
        date: "Dezembro 2025",
        impact: "15 membros ativos",
        imageUrl: "/images/portfolio-7.jpg",
        skills: ["Networking", "Colaboração", "Liderança"]
      }
    ],
    availability: "Em 1 mês",
    bio: "Comunicativo e proativo, com interesse especial em sustentabilidade e práticas ESG.",
    education: "Formado em Técnico em Meio Ambiente",
    certificates: [
      {
        courseId: 2,
        courseName: "Trabalho em Equipe",
        issueDate: "28/12/2025",
        certificateUrl: "/certificates/trabalho-equipe-003.pdf"
      },
      {
        courseId: 5,
        courseName: "Preparação para Entrevistas",
        issueDate: "08/01/2026",
        certificateUrl: "/certificates/entrevistas-001.pdf"
      }
    ]
  },
  {
    id: 5,
    name: "Fernanda Lima",
    age: 19,
    email: "fernanda.lima@email.com",
    phone: "(31) 94321-0987",
    location: "Belo Horizonte, MG",
    photo: '/students/fernanda.jpg',
    completedCourses: 1,
    inProgressCourses: 1,
    portfolioProjects: 1,
    totalSkills: 5,
    skills: [
      "Comunicação",
      "Criatividade",
      "Trabalho em equipe",
      "Flexibilidade",
      "Aprendizado rápido"
    ],
    portfolio: [
      {
        id: 8,
        title: "Campanha Digital Sustentável",
        description: "Desenvolvimento de campanha nas redes sociais sobre consumo consciente",
        course: "Comunicação Efetiva",
        date: "Janeiro 2026",
        impact: "1000+ interações em redes sociais",
        imageUrl: "/images/portfolio-8.jpg",
        skills: ["Comunicação", "Criatividade", "Marketing digital"]
      }
    ],
    availability: "Imediato",
    bio: "Criativa e antenada com as tendências digitais. Apaixonada por comunicação e sustentabilidade.",
    education: "Cursando Marketing - 1º semestre",
    certificates: [
      {
        courseId: 1,
        courseName: "Comunicação Efetiva",
        issueDate: "17/01/2026",
        certificateUrl: "/certificates/comunicacao-003.pdf"
      }
    ]
  }
];