export const translations = {
  pt: {
    header: {
      journey: 'Serviços',
      portfolio: 'Projetos',
      contact: 'Contacto',
      startProject: 'Falar Connosco'
    },
    hero: {
      location: 'LISBOA · CASCAIS · SETÚBAL',
      heading: 'Da Topografia',
      subheading: 'à Entrega das Chaves.',
      subtitle: 'Levantamentos topográficos executados in-house. Projeto, licenciamento e obra coordenados do início ao fim.',
      startJourney: 'Falar Connosco',
      viewPortfolio: 'Ver Projetos'
    },
    journey: {
      sectionLabel: 'O Que Fazemos',
      sectionTitle: 'Do Levantamento à Obra',
      sectionSubtitle: 'Começamos onde tudo começa — no terreno. Executamos a topografia in-house e coordenamos cada fase seguinte até à entrega final.',
      phases: [
        {
          number: '01',
          title: 'Levantamento Topográfico',
          subtitle: 'A Base de Tudo',
          description: 'Executamos levantamentos topográficos in-house com equipamento de precisão. Plantas topográficas, perfis, implantação de projeto e peças para licenciamento — entregues com rigor técnico.',
          details: ['Levantamento Planimétrico', 'Levantamento Altimétrico', 'Implantação de Projeto', 'Peças para Licenciamento']
        },
        {
          number: '02',
          title: 'Projeto e Licenciamento',
          subtitle: 'A Burocracia',
          description: 'Coordenamos a equipa de projeto — arquiteto, engenheiro e especialidades — e acompanhamos o processo de licenciamento junto das câmaras municipais até à emissão do alvará.',
          details: ['Coordenação de Projeto', 'Acompanhamento no Município', 'Gestão de Especialidades', 'Emissão do Alvará']
        },
        {
          number: '03',
          title: 'Coordenação de Obra',
          subtitle: 'A Execução',
          description: 'Selecionamos e gerimos empreiteiros verificados, acompanhamos o estaleiro com visitas regulares e mantemos o cliente informado sobre prazos, custos e qualidade de execução.',
          details: ['Seleção de Empreiteiros', 'Visitas de Acompanhamento', 'Controlo de Prazos', 'Reporte Regular']
        },
        {
          number: '04',
          title: 'Entrega e Fecho',
          subtitle: 'As Suas Chaves',
          description: 'Coordenamos as inspeções finais, resolvemos pendências, tratamos da licença de utilização e entregamos a documentação completa. A sua obra, concluída como combinado.',
          details: ['Inspeções Finais', 'Licença de Utilização', 'Documentação Completa', 'Entrega ao Cliente']
        }
      ]
    },
    portfolio: {
      sectionLabel: 'Tipos de Projeto',
      sectionTitle: 'O Que Fazemos',
      sectionSubtitle: 'Levantamentos topográficos e obras novas na área de Lisboa, Cascais e Setúbal.',
      filterAll: 'Todos',
      filterCompleted: 'Topografia',
      filterUpcoming: 'Obra Nova',
      projects: [
        {
          id: 1,
          title: 'Levantamento Topográfico',
          location: 'Lisboa e Cascais',
          category: 'Topografia',
          year: '',
          description: 'Levantamentos planimétricos e altimétricos para licenciamento, projetos de arquitetura e implantação de obra'
        },
        {
          id: 2,
          title: 'Implantação e Marcação',
          location: 'Sintra e Setúbal',
          category: 'Topografia',
          year: '',
          description: 'Implantação de projeto no terreno e marcação de limites de propriedade para início de obra'
        },
        {
          id: 3,
          title: 'Moradia Unifamiliar',
          location: 'Cascais, Lisboa',
          category: 'Obra Nova',
          year: '',
          description: 'Coordenação completa de moradia nova — levantamento, projeto, licenciamento e obra — na linha de Cascais'
        },
        {
          id: 4,
          title: 'Obra Nova com Licenciamento Especial',
          location: 'Arrábida, Setúbal',
          category: 'Obra Nova',
          year: '',
          description: 'Levantamento e gestão de obra em zona condicionada, com coordenação de licenciamento especial junto da Câmara'
        }
      ]
    },
    contact: {
      sectionLabel: 'Fale Connosco',
      sectionTitle: 'Conte-nos o Seu Projeto',
      sectionSubtitle: 'Diga-nos o que precisa. Respondemos em 24 horas.',
      stepOf: 'de',
      steps: [
        {
          question: 'O que procura?',
          options: [
            { value: 'topo-only', label: 'Só Topografia', description: 'Levantamento, implantação ou peças topográficas' },
            { value: 'design-permit', label: 'Projeto e Licenciamento', description: 'Coordenação de arquiteto e processo camarário' },
            { value: 'full-build', label: 'Gestão de Obra Completa', description: 'Do levantamento à entrega das chaves' },
            { value: 'not-sure', label: 'Ainda não sei', description: 'Gostaria de uma conversa primeiro' }
          ]
        },
        {
          question: 'Onde se localiza o projeto?',
          options: [
            { value: 'cascais-sintra', label: 'Cascais / Sintra', description: 'Linha de Cascais e arredores de Sintra' },
            { value: 'lisbon-city', label: 'Lisboa Cidade', description: 'Município de Lisboa' },
            { value: 'setubal', label: 'Setúbal / Arrábida', description: 'Margem Sul e Serra da Arrábida' },
            { value: 'other', label: 'Outra Localização', description: 'Área metropolitana ou outro distrito' }
          ]
        },
        {
          question: 'Qual o investimento previsto?',
          options: [
            { value: 'topo-only', label: 'Só levantamento', description: 'Serviço de topografia pontual' },
            { value: '200-400k', label: '€200k – €400k', description: 'Moradia de dimensão média' },
            { value: '400k-800k', label: '€400k – €800k', description: 'Moradia maior ou acabamentos especiais' },
            { value: '800k+', label: '€800k+', description: 'Moradia de gama alta ou empreendimento' }
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
        message: 'Conte-nos mais',
        messagePlaceholder: 'Localização, dimensão, prazo pretendido...',
        submit: 'Enviar Mensagem',
        back: 'Voltar'
      },
      success: {
        title: 'Mensagem Recebida',
        message: 'Entraremos em contacto nas próximas 24 horas.'
      }
    },
    footer: {
      description: 'Topografia e gestão de obra nova em Lisboa, Cascais e Setúbal. Levantamentos executados in-house. Projeto, licenciamento e construção coordenados do início ao fim.',
      location: 'Lisboa · Cascais · Setúbal',
      services: 'Serviços',
      landSourcing: 'Levantamento Topográfico',
      designPermitting: 'Projeto e Licenciamento',
      construction: 'Coordenação de Obra',
      projectHandover: 'Entrega e Fecho',
      company: 'Empresa',
      ourJourney: 'O Que Fazemos',
      portfolio: 'Projetos',
      contact: 'Contacto',
      getInTouch: 'Falar Connosco',
      startProject: 'Iniciar Projeto',
      copyright: 'Todos os direitos reservados.',
      privacyPolicy: 'Política de Privacidade',
      termsOfService: 'Termos de Serviço'
    }
  },
  en: {
    header: {
      journey: 'Services',
      portfolio: 'Projects',
      contact: 'Contact',
      startProject: 'Talk to Us'
    },
    hero: {
      location: 'LISBON · CASCAIS · SETÚBAL',
      heading: 'From Survey',
      subheading: 'to Handover.',
      subtitle: 'Topographic surveys carried out in-house. Design, permitting and construction coordinated end to end.',
      startJourney: 'Talk to Us',
      viewPortfolio: 'View Projects'
    },
    journey: {
      sectionLabel: 'What We Do',
      sectionTitle: 'From Survey to Build',
      sectionSubtitle: "We start where everything starts — on the ground. We carry out topography in-house and coordinate every phase through to final handover.",
      phases: [
        {
          number: '01',
          title: 'Topographic Survey',
          subtitle: 'The Foundation',
          description: 'We carry out topographic surveys in-house with precision equipment. Planimetric and altimetric surveys, project setting out and permitting drawings — delivered with technical accuracy.',
          details: ['Planimetric Survey', 'Altimetric Survey', 'Project Setting Out', 'Permitting Drawings']
        },
        {
          number: '02',
          title: 'Design & Permitting',
          subtitle: 'The Paperwork',
          description: 'We coordinate the full project team — architect, structural engineer and specialists — and follow the permitting process with the local council through to building licence approval.',
          details: ['Project Coordination', 'Council Liaison', 'Specialist Management', 'Building Licence']
        },
        {
          number: '03',
          title: 'Construction Management',
          subtitle: 'The Build',
          description: 'We select and manage vetted contractors, conduct regular site visits and keep you informed on timelines, costs and build quality at every stage.',
          details: ['Contractor Selection', 'Site Visits', 'Timeline Control', 'Regular Reporting']
        },
        {
          number: '04',
          title: 'Handover & Close',
          subtitle: 'Your Keys',
          description: 'We coordinate final inspections, resolve any snag items, handle the habitation licence and deliver a complete documentation pack. Your build, finished as agreed.',
          details: ['Final Inspections', 'Habitation Licence', 'Full Documentation', 'Client Handover']
        }
      ]
    },
    portfolio: {
      sectionLabel: 'Project Types',
      sectionTitle: 'What We Do',
      sectionSubtitle: 'Topographic surveys and new build coordination in Lisbon, Cascais and Setúbal.',
      filterAll: 'All',
      filterCompleted: 'Topography',
      filterUpcoming: 'New Build',
      projects: [
        {
          id: 1,
          title: 'Topographic Survey',
          location: 'Lisbon & Cascais',
          category: 'Topography',
          year: '',
          description: 'Planimetric and altimetric surveys for permitting, architecture projects and construction setting out'
        },
        {
          id: 2,
          title: 'Setting Out & Boundary Marking',
          location: 'Sintra & Setúbal',
          category: 'Topography',
          year: '',
          description: 'Project setting out on site and boundary marking for construction start'
        },
        {
          id: 3,
          title: 'Family House',
          location: 'Cascais, Lisbon',
          category: 'New Build',
          year: '',
          description: 'Full coordination of new-build house — survey, design, permitting and construction — on the Cascais line'
        },
        {
          id: 4,
          title: 'Restricted Zone Build',
          location: 'Arrábida, Setúbal',
          category: 'New Build',
          year: '',
          description: 'Survey and build coordination in a protected area, with specialist permitting managed through the local council'
        }
      ]
    },
    contact: {
      sectionLabel: 'Get in Touch',
      sectionTitle: 'Tell Us About Your Project',
      sectionSubtitle: "Tell us what you need. We'll get back to you within 24 hours.",
      stepOf: 'of',
      steps: [
        {
          question: 'What are you looking for?',
          options: [
            { value: 'topo-only', label: 'Topography Only', description: 'Survey, setting out or permitting drawings' },
            { value: 'design-permit', label: 'Design & Permitting', description: 'Architect coordination and council process' },
            { value: 'full-build', label: 'Full Build Management', description: 'From survey to key handover' },
            { value: 'not-sure', label: "Not Sure Yet", description: "I'd like to have a conversation first" }
          ]
        },
        {
          question: 'Where is the project located?',
          options: [
            { value: 'cascais-sintra', label: 'Cascais / Sintra', description: 'Cascais line and Sintra surroundings' },
            { value: 'lisbon-city', label: 'Lisbon City', description: 'Lisbon municipality' },
            { value: 'setubal', label: 'Setúbal / Arrábida', description: 'South bank and Serra da Arrábida' },
            { value: 'other', label: 'Other Location', description: 'Greater Lisbon area or another district' }
          ]
        },
        {
          question: 'What is your estimated investment?',
          options: [
            { value: 'topo-only', label: 'Survey only', description: 'Topography service only' },
            { value: '200-400k', label: '€200k – €400k', description: 'Mid-size family house' },
            { value: '400k-800k', label: '€400k – €800k', description: 'Larger house or premium finishes' },
            { value: '800k+', label: '€800k+', description: 'High-end house or small development' }
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
        message: 'Tell us more',
        messagePlaceholder: 'Location, size, target timeline...',
        submit: 'Send Message',
        back: 'Back'
      },
      success: {
        title: 'Message Received',
        message: "We'll be in touch within 24 hours."
      }
    },
    footer: {
      description: 'Topographic surveys and new build coordination in Lisbon, Cascais and Setúbal. Surveys carried out in-house. Design, permitting and construction managed end to end.',
      location: 'Lisbon · Cascais · Setúbal',
      services: 'Services',
      landSourcing: 'Topographic Survey',
      designPermitting: 'Design & Permitting',
      construction: 'Construction Management',
      projectHandover: 'Handover & Close',
      company: 'Company',
      ourJourney: 'What We Do',
      portfolio: 'Projects',
      contact: 'Contact',
      getInTouch: 'Get in Touch',
      startProject: 'Start Your Project',
      copyright: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service'
    }
  }
} as const;

export type Language = 'pt' | 'en';
export type Translations = typeof translations;
