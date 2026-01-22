export const translations = {
  pt: {
    header: {
      journey: 'Percurso',
      portfolio: 'Portfolio',
      contact: 'Contacto',
      startProject: 'Iniciar Projeto'
    },
    hero: {
      location: 'PORTUGAL',
      heading: 'Da Visão às Chaves',
      subheading: 'Desenvolvimento Integral.',
      subtitle: 'A sua solução chave-na-mão para arquitetura portuguesa excecional.',
      startJourney: 'Inicie o Seu Percurso',
      viewPortfolio: 'Ver Portfolio'
    },
    journey: {
      sectionLabel: 'O Processo',
      sectionTitle: 'O Seu Percurso Connosco',
      sectionSubtitle: 'Desde a primeira conversa até ao momento em que abre a porta de sua casa, estamos consigo em cada etapa da sua nova construção.',
      phases: [
        {
          number: '01',
          title: 'Procura de Terreno',
          subtitle: 'A Fundação',
          description: 'Não encontramos apenas terrenos; encontramos potencial. Utilizamos a nossa rede de elite de agentes imobiliários em Portugal para garantir a fundação perfeita para a sua nova construção.',
          details: ['Análise de Mercado', 'Avaliação do Terreno', 'Due Diligence Legal', 'Apoio na Negociação']
        },
        {
          number: '02',
          title: 'Design e Licenciamento',
          subtitle: 'O Projeto',
          description: 'Os nossos parceiros de arquitetura criam designs únicos para a sua construção, honrando as tradições portuguesas. Tratamos de todas as licenças e burocracia.',
          details: ['Desenvolvimento do Conceito', 'Projetos de Arquitetura', 'Licenças Municipais', 'Visualização 3D']
        },
        {
          number: '03',
          title: 'Construção Verificada',
          subtitle: 'A Arte',
          description: 'Apenas empreiteiros pré-qualificados e rigorosamente verificados trabalham na sua construção. Gerimos cada fase com atualizações semanais e acompanhamento transparente.',
          details: ['Seleção de Empreiteiros', 'Controlo de Qualidade', 'Gestão de Prazos', 'Supervisão do Orçamento']
        },
        {
          number: '04',
          title: 'Entrega',
          subtitle: 'As Suas Chaves',
          description: 'Inspeções finais concluídas, lista de pendências resolvida, documentação entregue. Entregamos-lhe as chaves de uma casa construída exatamente como prometido.',
          details: ['Inspeção Final', 'Documentação', 'Transferência de Garantia', 'Bem-vindo a Casa']
        }
      ]
    },
    portfolio: {
      sectionLabel: 'O Nosso Trabalho',
      sectionTitle: 'Visões Futuras',
      sectionSubtitle: 'Uma seleção curada dos nossos melhores projetos de construção nova em Portugal.',
      filterAll: 'Todos',
      filterCompleted: 'Concluídos',
      filterUpcoming: 'Próximos',
      projects: [
        {
          id: 1,
          title: 'Casa Alentejo',
          location: 'Comporta, Portugal',
          category: 'Concluído',
          year: '2024',
          description: 'Refúgio costeiro minimalista com vistas panorâmicas'
        },
        {
          id: 2,
          title: 'Villa Moderna',
          location: 'Sintra, Portugal',
          category: 'Concluído',
          year: '2023',
          description: 'Casa familiar contemporânea com paisagem montanhosa'
        },
        {
          id: 3,
          title: 'Eco Residence',
          location: 'Algarve, Portugal',
          category: 'Próximo',
          year: '2026',
          description: 'Refúgio sustentável net-zero com telhado verde'
        },
        {
          id: 4,
          title: 'Contemporary Serra',
          location: 'Arrábida, Portugal',
          category: 'Próximo',
          year: '2025',
          description: 'Estrutura ousada de betão e madeira nas colinas'
        }
      ]
    },
    contact: {
      sectionLabel: 'Iniciar o Seu Projeto',
      sectionTitle: 'Descoberta do Projeto',
      sectionSubtitle: 'Conte-nos sobre a sua visão para a sua nova construção em Portugal. Agendaremos uma consulta para explorar como podemos concretizá-la.',
      stepOf: 'de',
      steps: [
        {
          question: 'Onde gostaria de construir em Portugal?',
          options: [
            { value: 'coast', label: 'Região Costeira', description: 'Algarve, Comporta, zona de Cascais' },
            { value: 'interior', label: 'Interior de Portugal', description: 'Montanhas e campo' },
            { value: 'lisbon-area', label: 'Grande Lisboa', description: 'Região da capital e arredores' },
            { value: 'other', label: 'Outro / Flexível', description: 'Aberto a sugestões' }
          ]
        },
        {
          question: 'Já tem um terreno?',
          options: [
            { value: 'yes', label: 'Sim, tenho terreno', description: 'Pronto para iniciar a fase de design' },
            { value: 'no', label: 'Não, preciso de ajuda para encontrar', description: 'Usar o nosso serviço de Concierge de Terrenos' },
            { value: 'searching', label: 'Atualmente a procurar', description: 'Gostaria de orientação' }
          ]
        },
        {
          question: 'Qual é o seu orçamento alvo?',
          options: [
            { value: '250-500k', label: '€250k – €500k', description: 'Construções iniciais de qualidade' },
            { value: '500k-1m', label: '€500k – €1M', description: 'Casas familiares premium' },
            { value: '1m-2m', label: '€1M – €2M', description: 'Residências de luxo' },
            { value: '2m+', label: '€2M+', description: 'Propriedades exclusivas' }
          ]
        },
        {
          question: 'Como podemos contactá-lo?'
        }
      ],
      form: {
        name: 'Nome',
        namePlaceholder: 'O seu nome',
        email: 'Email',
        emailPlaceholder: 'seu@email.com',
        phone: 'Telefone (opcional)',
        phonePlaceholder: '+351...',
        message: 'Conte-nos mais sobre a sua visão',
        messagePlaceholder: 'Descreva o seu projeto de sonho...',
        submit: 'Enviar Pedido',
        back: 'Voltar'
      },
      success: {
        title: 'Obrigado',
        message: 'Recebemos o seu pedido e entraremos em contacto dentro de 24 horas para discutir o seu projeto.'
      }
    },
    footer: {
      description: 'Desenvolvimento de construção nova de ponta a ponta em Portugal. Desde encontrar o terreno perfeito até entregar-lhe as chaves, tornamos a arquitetura excecional acessível.',
      location: 'Portugal · Nacional',
      services: 'Serviços',
      landSourcing: 'Procura de Terreno',
      designPermitting: 'Design e Licenciamento',
      construction: 'Construção',
      projectHandover: 'Entrega do Projeto',
      company: 'Empresa',
      ourJourney: 'O Nosso Percurso',
      portfolio: 'Portfolio',
      contact: 'Contacto',
      getInTouch: 'Contacte-nos',
      startProject: 'Iniciar o Seu Projeto',
      copyright: 'Todos os direitos reservados.',
      privacyPolicy: 'Política de Privacidade',
      termsOfService: 'Termos de Serviço'
    }
  },
  en: {
    header: {
      journey: 'Journey',
      portfolio: 'Portfolio',
      contact: 'Contact',
      startProject: 'Start Project'
    },
    hero: {
      location: 'PORTUGAL',
      heading: 'From Vision to Keys',
      subheading: 'End-to-End Development.',
      subtitle: 'Your key-in-hand solution for exceptional Portuguese architecture.',
      startJourney: 'Start Your Journey',
      viewPortfolio: 'View Portfolio'
    },
    journey: {
      sectionLabel: 'The Process',
      sectionTitle: 'Your Journey With Us',
      sectionSubtitle: "From the first conversation to the moment you unlock your front door, we're with you at every milestone of your new build.",
      phases: [
        {
          number: '01',
          title: 'Land Sourcing',
          subtitle: 'The Foundation',
          description: "We don't just find land; we find the potential. Leveraging our elite realtor network across Portugal to secure the perfect foundation for your new build.",
          details: ['Market Analysis', 'Site Evaluation', 'Legal Due Diligence', 'Negotiation Support']
        },
        {
          number: '02',
          title: 'Design & Permitting',
          subtitle: 'The Blueprint',
          description: 'Our architectural partners craft bespoke designs for your ground-up build, honoring Portuguese traditions. We handle all permits and bureaucracy.',
          details: ['Concept Development', 'Architectural Plans', 'Municipal Permits', '3D Visualization']
        },
        {
          number: '03',
          title: 'Vetted Construction',
          subtitle: 'The Craft',
          description: 'Only pre-qualified, rigorously vetted contractors touch your new build. We manage every phase with weekly updates and transparent milestone tracking.',
          details: ['Contractor Selection', 'Quality Control', 'Timeline Management', 'Budget Oversight']
        },
        {
          number: '04',
          title: 'Handover',
          subtitle: 'Your Keys',
          description: 'Final inspections complete, snag list resolved, documentation delivered. We hand you the keys to a home built exactly as promised.',
          details: ['Final Inspection', 'Documentation', 'Warranty Transfer', 'Welcome Home']
        }
      ]
    },
    portfolio: {
      sectionLabel: 'Our Work',
      sectionTitle: 'Future Visions',
      sectionSubtitle: 'A curated selection of our finest new build projects across Portugal.',
      filterAll: 'All',
      filterCompleted: 'Completed',
      filterUpcoming: 'Upcoming',
      projects: [
        {
          id: 1,
          title: 'Casa Alentejo',
          location: 'Comporta, Portugal',
          category: 'Completed',
          year: '2024',
          description: 'Minimalist coastal retreat with panoramic views'
        },
        {
          id: 2,
          title: 'Villa Moderna',
          location: 'Sintra, Portugal',
          category: 'Completed',
          year: '2023',
          description: 'Contemporary family home with mountain backdrop'
        },
        {
          id: 3,
          title: 'Eco Residence',
          location: 'Algarve, Portugal',
          category: 'Upcoming',
          year: '2026',
          description: 'Net-zero sustainable retreat with green roof'
        },
        {
          id: 4,
          title: 'Contemporary Serra',
          location: 'Arrábida, Portugal',
          category: 'Upcoming',
          year: '2025',
          description: 'Bold concrete and wood structure in the hills'
        }
      ]
    },
    contact: {
      sectionLabel: 'Start Your Project',
      sectionTitle: 'Project Discovery',
      sectionSubtitle: "Tell us about your vision for your new build in Portugal. We'll schedule a consultation to explore how we can bring it to life.",
      stepOf: 'of',
      steps: [
        {
          question: 'Where would you like to build in Portugal?',
          options: [
            { value: 'coast', label: 'Coastal Region', description: 'Algarve, Comporta, Cascais area' },
            { value: 'interior', label: 'Interior Portugal', description: 'Mountains and countryside' },
            { value: 'lisbon-area', label: 'Greater Lisbon', description: 'Capital region and surroundings' },
            { value: 'other', label: 'Other / Flexible', description: 'Open to suggestions' }
          ]
        },
        {
          question: 'Do you already have a plot of land?',
          options: [
            { value: 'yes', label: 'Yes, I have land', description: 'Ready to start the design phase' },
            { value: 'no', label: 'No, I need help finding land', description: 'Use our Land Concierge service' },
            { value: 'searching', label: 'Currently searching', description: 'Would like guidance' }
          ]
        },
        {
          question: 'What is your target budget range?',
          options: [
            { value: '250-500k', label: '€250k – €500k', description: 'Quality starter builds' },
            { value: '500k-1m', label: '€500k – €1M', description: 'Premium family homes' },
            { value: '1m-2m', label: '€1M – €2M', description: 'Luxury residences' },
            { value: '2m+', label: '€2M+', description: 'Bespoke estates' }
          ]
        },
        {
          question: 'How can we reach you?'
        }
      ],
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        phone: 'Phone (optional)',
        phonePlaceholder: '+351...',
        message: 'Tell us more about your vision',
        messagePlaceholder: 'Describe your dream project...',
        submit: 'Submit Inquiry',
        back: 'Back'
      },
      success: {
        title: 'Thank You',
        message: "We've received your inquiry and will be in touch within 24 hours to discuss your project."
      }
    },
    footer: {
      description: 'End-to-end new build development in Portugal. From finding your perfect land to handing you the keys, we make exceptional architecture accessible.',
      location: 'Portugal · Nationwide',
      services: 'Services',
      landSourcing: 'Land Sourcing',
      designPermitting: 'Design & Permitting',
      construction: 'Construction',
      projectHandover: 'Project Handover',
      company: 'Company',
      ourJourney: 'Our Journey',
      portfolio: 'Portfolio',
      contact: 'Contact',
      getInTouch: 'Get In Touch',
      startProject: 'Start Your Project',
      copyright: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service'
    }
  }
} as const;

export type Language = 'pt' | 'en';
export type Translations = typeof translations;
