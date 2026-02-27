export const translations = {
  pt: {
    header: {
      journey: 'Como Trabalhamos',
      portfolio: 'Projetos',
      contact: 'Contacto',
      startProject: 'Iniciar Projeto'
    },
    hero: {
      location: 'LISBOA · CASCAIS · SETÚBAL',
      heading: 'A Sua Obra Nova,',
      subheading: 'Gerida com Rigor.',
      subtitle: 'Coordenamos arquitetos, empreiteiros e licenças para que se foque no que importa — o resultado final.',
      startJourney: 'Falar Connosco',
      viewPortfolio: 'Ver Projetos'
    },
    journey: {
      sectionLabel: 'Como Trabalhamos',
      sectionTitle: 'O Seu Projeto, do Início ao Fim',
      sectionSubtitle: 'Desde a primeira reunião até à entrega das chaves, a SELTA gere cada detalhe da sua obra nova na área de Lisboa.',
      phases: [
        {
          number: '01',
          title: 'Prospeção e Terreno',
          subtitle: 'A Base',
          description: 'Ajudamos a avaliar terrenos e a identificar o lote certo para o seu projeto. Analisamos condicionantes urbanísticas, PDMs e potencial construtivo antes de qualquer compromisso.',
          details: ['Análise de Condicionantes', 'Consulta de PDM', 'Avaliação do Lote', 'Apoio à Decisão']
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
      sectionTitle: 'O Que Coordenamos',
      sectionSubtitle: 'Obras novas unifamiliares e pequenos empreendimentos na área de Lisboa, Cascais e Setúbal.',
      filterAll: 'Todos',
      filterCompleted: 'Moradias',
      filterUpcoming: 'Empreendimentos',
      projects: [
        {
          id: 1,
          title: 'Moradia Unifamiliar',
          location: 'Cascais, Lisboa',
          category: 'Moradias',
          year: '',
          description: 'Coordenação completa de moradia nova — projeto, licenciamento e obra — em condomínio na linha de Cascais'
        },
        {
          id: 2,
          title: 'Moradia com Piscina',
          location: 'Sintra, Lisboa',
          category: 'Moradias',
          year: '',
          description: 'Gestão de obra nova com piscina e paisagismo em zona de Sintra, do projeto à entrega final'
        },
        {
          id: 3,
          title: 'Pequeno Empreendimento',
          location: 'Setúbal',
          category: 'Empreendimentos',
          year: '',
          description: 'Coordenação de empreendimento de pequena escala na região de Setúbal, da aprovação municipal à comercialização'
        },
        {
          id: 4,
          title: 'Moradia na Serra',
          location: 'Arrábida, Setúbal',
          category: 'Moradias',
          year: '',
          description: 'Obra nova em zona de Reserva Natural, com coordenação de licenciamento especial e empreiteiro qualificado'
        }
      ]
    },
    contact: {
      sectionLabel: 'Fale Connosco',
      sectionTitle: 'Conte-nos o Seu Projeto',
      sectionSubtitle: 'Diga-nos o que tem em mente. Marcamos uma reunião sem compromisso para perceber como podemos ajudar.',
      stepOf: 'de',
      steps: [
        {
          question: 'Onde pretende construir?',
          options: [
            { value: 'cascais-sintra', label: 'Cascais / Sintra', description: 'Linha de Cascais e arredores de Sintra' },
            { value: 'lisbon-city', label: 'Lisboa Cidade', description: 'Município de Lisboa' },
            { value: 'setubal', label: 'Setúbal / Arrábida', description: 'Margem Sul e Serra da Arrábida' },
            { value: 'other', label: 'Outra Localização', description: 'Área metropolitana ou outro distrito' }
          ]
        },
        {
          question: 'Já tem terreno ou imóvel?',
          options: [
            { value: 'yes', label: 'Sim, já tenho', description: 'Pronto para avançar com projeto e obra' },
            { value: 'looking', label: 'Ainda à procura', description: 'Gostaria de ajuda na avaliação de opções' },
            { value: 'no', label: 'Não, preciso de encontrar', description: 'Procura de terreno faz parte do âmbito' }
          ]
        },
        {
          question: 'Qual o investimento previsto?',
          options: [
            { value: '200-400k', label: '€200k – €400k', description: 'Moradia de dimensão média' },
            { value: '400k-800k', label: '€400k – €800k', description: 'Moradia de maior dimensão ou com acabamentos especiais' },
            { value: '800k-1.5m', label: '€800k – €1,5M', description: 'Moradia de gama alta ou pequeno empreendimento' },
            { value: '1.5m+', label: '€1,5M+', description: 'Empreendimento ou projeto de referência' }
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
        message: 'Conte-nos mais sobre o projeto',
        messagePlaceholder: 'Localização, dimensão, prazo pretendido...',
        submit: 'Enviar Mensagem',
        back: 'Voltar'
      },
      success: {
        title: 'Mensagem Recebida',
        message: 'Entraremos em contacto nas próximas 24 horas para marcar uma reunião.'
      }
    },
    footer: {
      description: 'Coordenação e gestão de obras novas em Lisboa, Cascais e Setúbal. Arquitetos, empreiteiros e licenciamento geridos do início ao fim.',
      location: 'Lisboa · Cascais · Setúbal',
      services: 'Serviços',
      landSourcing: 'Prospeção de Terreno',
      designPermitting: 'Projeto e Licenciamento',
      construction: 'Coordenação de Obra',
      projectHandover: 'Entrega e Fecho',
      company: 'Empresa',
      ourJourney: 'Como Trabalhamos',
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
      journey: 'How We Work',
      portfolio: 'Projects',
      contact: 'Contact',
      startProject: 'Start Project'
    },
    hero: {
      location: 'LISBON · CASCAIS · SETÚBAL',
      heading: 'Your New Build,',
      subheading: 'Expertly Coordinated.',
      subtitle: 'We manage architects, contractors and permits so you can focus on what matters — the finished result.',
      startJourney: 'Talk to Us',
      viewPortfolio: 'View Projects'
    },
    journey: {
      sectionLabel: 'How We Work',
      sectionTitle: 'Your Project, Start to Finish',
      sectionSubtitle: "From the first meeting to key handover, SELTA manages every detail of your new build in the Lisbon area.",
      phases: [
        {
          number: '01',
          title: 'Site & Land',
          subtitle: 'The Foundation',
          description: 'We help you assess plots and identify the right site for your project. We review planning constraints, local PDMs and build potential before any commitment is made.',
          details: ['Planning Constraints', 'PDM Review', 'Site Assessment', 'Decision Support']
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
      sectionTitle: 'What We Coordinate',
      sectionSubtitle: 'New build houses and small developments in the Lisbon, Cascais and Setúbal area.',
      filterAll: 'All',
      filterCompleted: 'Houses',
      filterUpcoming: 'Developments',
      projects: [
        {
          id: 1,
          title: 'Family House',
          location: 'Cascais, Lisbon',
          category: 'Houses',
          year: '',
          description: 'Full coordination of new-build house — design, permitting and construction — in a gated community on the Cascais line'
        },
        {
          id: 2,
          title: 'House with Pool',
          location: 'Sintra, Lisbon',
          category: 'Houses',
          year: '',
          description: 'New build with pool and landscaping in the Sintra area, managed from design approval to final handover'
        },
        {
          id: 3,
          title: 'Small Development',
          location: 'Setúbal',
          category: 'Developments',
          year: '',
          description: 'Small-scale residential development in the Setúbal region, coordinated from council approval through to sale'
        },
        {
          id: 4,
          title: 'Nature Reserve Build',
          location: 'Arrábida, Setúbal',
          category: 'Houses',
          year: '',
          description: 'New build in the Arrábida Natural Reserve zone, with specialist permitting coordination and certified contractor management'
        }
      ]
    },
    contact: {
      sectionLabel: 'Get in Touch',
      sectionTitle: 'Tell Us About Your Project',
      sectionSubtitle: "Tell us what you have in mind. We'll arrange a no-obligation meeting to understand how we can help.",
      stepOf: 'of',
      steps: [
        {
          question: 'Where do you want to build?',
          options: [
            { value: 'cascais-sintra', label: 'Cascais / Sintra', description: 'Cascais line and Sintra surroundings' },
            { value: 'lisbon-city', label: 'Lisbon City', description: 'Lisbon municipality' },
            { value: 'setubal', label: 'Setúbal / Arrábida', description: 'South bank and Serra da Arrábida' },
            { value: 'other', label: 'Other Location', description: 'Greater Lisbon area or another district' }
          ]
        },
        {
          question: 'Do you already have a plot or property?',
          options: [
            { value: 'yes', label: 'Yes, I have one', description: 'Ready to move forward with design and build' },
            { value: 'looking', label: 'Still searching', description: 'Would like help evaluating options' },
            { value: 'no', label: 'No, need to find one', description: 'Land search can be part of the scope' }
          ]
        },
        {
          question: 'What is your estimated investment?',
          options: [
            { value: '200-400k', label: '€200k – €400k', description: 'Mid-size family house' },
            { value: '400k-800k', label: '€400k – €800k', description: 'Larger house or premium finishes' },
            { value: '800k-1.5m', label: '€800k – €1.5M', description: 'High-end house or small development' },
            { value: '1.5m+', label: '€1.5M+', description: 'Development or landmark project' }
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
        message: 'Tell us more about your project',
        messagePlaceholder: 'Location, size, target timeline...',
        submit: 'Send Message',
        back: 'Back'
      },
      success: {
        title: 'Message Received',
        message: "We'll be in touch within 24 hours to arrange a meeting."
      }
    },
    footer: {
      description: 'New build coordination and project management in Lisbon, Cascais and Setúbal. Architects, contractors and permitting managed end to end.',
      location: 'Lisbon · Cascais · Setúbal',
      services: 'Services',
      landSourcing: 'Site & Land',
      designPermitting: 'Design & Permitting',
      construction: 'Construction Management',
      projectHandover: 'Handover & Close',
      company: 'Company',
      ourJourney: 'How We Work',
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
