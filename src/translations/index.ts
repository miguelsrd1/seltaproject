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
    topografia: {
      meta: {
        title: 'Topografia em Lisboa, Cascais e Setúbal | SELTA Projects',
        description: 'Empresa de topografia em Lisboa. Levantamentos planimétricos e altimétricos, implantação de projeto e peças para licenciamento. Execução in-house — Cascais, Sintra, Setúbal e Arrábida.',
      },
      hero: {
        label: 'TOPOGRAFIA · LISBOA',
        heading: 'Levantamentos Topográficos',
        subheading: 'em Lisboa, Cascais e Setúbal.',
        body: 'Execução in-house com equipamento de precisão. Levantamentos planimétricos e altimétricos, implantação de projeto e todas as peças necessárias para licenciamento.',
        cta: 'Pedir Orçamento',
      },
      services: {
        label: 'O Que Fazemos',
        heading: 'Serviços de Topografia',
        items: [
          {
            title: 'Levantamento Planimétrico',
            body: 'Representação rigorosa do terreno em planta — limites de propriedade, construções existentes, arruamentos, vegetação e demais elementos. Base essencial para projetos de arquitetura e obras.',
          },
          {
            title: 'Levantamento Altimétrico',
            body: 'Levantamento de cotas e curvas de nível para caracterizar o relevo do terreno. Indispensável para o estudo de implantação, plataformas, movimentos de terra e drenagem.',
          },
          {
            title: 'Implantação de Projeto',
            body: 'Materialização no terreno das coordenadas do projeto aprovado — implantação de muros, alinhamentos, estacas de fundação e demais elementos definidos em projeto.',
          },
          {
            title: 'Peças para Licenciamento',
            body: 'Elaboração de plantas topográficas, perfis e demais peças cartográficas exigidas pela câmara municipal no âmbito do processo de licenciamento de obras e loteamentos.',
          },
        ],
      },
      expertise: {
        label: 'Porquê a SELTA',
        heading: 'Topografia Executada In-House',
        body: 'Ao contrário de muitas empresas de gestão de obra que subcontratam a topografia, a SELTA executa os levantamentos com equipa e equipamento próprios. Isso significa prazos mais curtos, maior controlo de qualidade e uma coordenação mais eficaz entre o levantamento e as fases seguintes do projeto.',
        points: [
          'Equipa de topógrafos qualificados (OA/ANEPC)',
          'Equipamento de precisão próprio (estação total, GNSS)',
          'Ficheiros entregues nos formatos DWG, DXF e PDF',
          'Coordenação direta com o arquiteto e a câmara municipal',
        ],
      },
      usecases: {
        label: 'Quando é Necessário',
        heading: 'Situações que Requerem Topografia',
        items: [
          { title: 'Pedido de Informação Prévia', body: 'A câmara municipal exige levantamento topográfico para avaliar a viabilidade construtiva de um terreno.' },
          { title: 'Licenciamento de Obra Nova', body: 'Projetos de arquitetura e especialidades requerem planta de implantação sobre levantamento topográfico.' },
          { title: 'Loteamentos e Urbanizações', body: 'Divisão de propriedade, definição de lotes e arruamentos exigem levantamento rigoroso e peças cartográficas certificadas.' },
          { title: 'Início de Obra', body: 'Antes do início da construção, a implantação do projeto no terreno garante que as cotas e alinhamentos estão corretos.' },
          { title: 'Litígios de Propriedade', body: 'Demarcação de limites e confrontações para resolução de conflitos de propriedade com base em dados técnicos precisos.' },
          { title: 'Reabilitação e Ampliação', body: 'Levantamento do edificado existente como base para projetos de reabilitação, ampliação ou alteração de uso.' },
        ],
      },
      faq: {
        label: 'Perguntas Frequentes',
        heading: 'Dúvidas sobre Topografia',
        items: [
          {
            q: 'O que é um levantamento topográfico?',
            a: 'Um levantamento topográfico é um conjunto de medições que representa com precisão o terreno — os seus limites, relevo, construções existentes e demais elementos. É a base técnica de qualquer projeto de construção ou licenciamento.',
          },
          {
            q: 'Quando preciso de um levantamento topográfico?',
            a: 'Sempre que pretenda construir, remodelar, lotear ou pedir informação prévia à câmara municipal. O levantamento topográfico é exigido pela maioria dos municípios como peça obrigatória no processo de licenciamento.',
          },
          {
            q: 'Quanto tempo demora um levantamento topográfico?',
            a: 'Dependendo da dimensão e complexidade do terreno, um levantamento típico demora entre 1 e 3 dias de trabalho de campo, mais 2 a 5 dias de gabinete para produção das peças finais. Terrenos maiores ou com acesso difícil podem requerer mais tempo.',
          },
          {
            q: 'O que inclui o levantamento para licenciamento?',
            a: 'As peças exigidas variam consoante o município, mas habitualmente incluem: planta de localização, planta do terreno com curvas de nível, cortes topográficos e levantamento das construções existentes — tudo georeferenciado segundo o sistema de coordenadas nacional (PT-TM06/ETRS89).',
          },
          {
            q: 'Qual é a diferença entre levantamento planimétrico e altimétrico?',
            a: 'O levantamento planimétrico representa o terreno em planta (2D) — limites, construções, caminhos, vegetação. O altimétrico acrescenta as cotas e curvas de nível (3D), caracterizando o relevo. Para licenciamento de obras, é habitualmente exigido o levantamento completo (planimétrico + altimétrico).',
          },
          {
            q: 'Executam trabalhos em toda a área de Lisboa?',
            a: 'Sim. Trabalhamos em todos os municípios da Área Metropolitana de Lisboa — Lisboa, Cascais, Sintra, Oeiras, Almada, Setúbal, Sesimbra e Palmela — bem como na Serra da Arrábida e zonas limítrofes.',
          },
        ],
      },
      cta: {
        heading: 'Precisa de um Levantamento Topográfico?',
        body: 'Diga-nos onde e o que pretende fazer. Enviamos orçamento em 24 horas.',
        button: 'Pedir Orçamento',
      },
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
    topografia: {
      meta: {
        title: 'Topographic Surveys in Lisbon, Cascais & Setúbal | SELTA Projects',
        description: 'Topographic surveying company in Lisbon. Planimetric and altimetric surveys, project setting out and permitting drawings. In-house execution — Cascais, Sintra, Setúbal and Arrábida.',
      },
      hero: {
        label: 'TOPOGRAPHY · LISBON',
        heading: 'Topographic Surveys',
        subheading: 'in Lisbon, Cascais and Setúbal.',
        body: 'In-house execution with precision equipment. Planimetric and altimetric surveys, project setting out and all documentation required for building permits.',
        cta: 'Request a Quote',
      },
      services: {
        label: 'What We Do',
        heading: 'Topography Services',
        items: [
          {
            title: 'Planimetric Survey',
            body: 'Accurate representation of the land in plan view — property boundaries, existing structures, roads, vegetation and other features. The essential base for architecture projects and construction.',
          },
          {
            title: 'Altimetric Survey',
            body: 'Survey of elevations and contour lines to characterise the terrain relief. Essential for building placement studies, earthworks, platforms and drainage design.',
          },
          {
            title: 'Project Setting Out',
            body: 'Materialising the approved project coordinates on the ground — setting out walls, alignments, foundation stakes and other elements defined in the project drawings.',
          },
          {
            title: 'Permitting Drawings',
            body: 'Production of topographic plans, cross-sections and other cartographic documents required by the local council as part of the building and plot division licensing process.',
          },
        ],
      },
      expertise: {
        label: 'Why SELTA',
        heading: 'Topography Carried Out In-House',
        body: 'Unlike many project management companies that subcontract surveying, SELTA carries out all topographic work with its own team and equipment. This means shorter turnaround times, better quality control and more effective coordination between the survey and the subsequent project phases.',
        points: [
          'Qualified surveyors (OA/ANEPC registered)',
          'Own precision equipment (total station, GNSS)',
          'Files delivered in DWG, DXF and PDF formats',
          'Direct coordination with the architect and local council',
        ],
      },
      usecases: {
        label: 'When You Need It',
        heading: 'Situations That Require a Survey',
        items: [
          { title: 'Prior Information Request', body: 'The local council requires a topographic survey to assess the construction viability of a plot.' },
          { title: 'New Build Licensing', body: 'Architecture and engineering projects require a setting-out plan based on a topographic survey.' },
          { title: 'Plot Division & Urbanisation', body: 'Dividing property, defining plots and road alignments requires a precise survey and certified cartographic documents.' },
          { title: 'Start of Construction', body: 'Before construction begins, setting out the project on the ground ensures levels and alignments are correct.' },
          { title: 'Property Boundary Disputes', body: 'Boundary demarcation and verification of property lines for resolving disputes based on accurate technical data.' },
          { title: 'Renovation & Extension', body: 'Survey of existing structures as the basis for renovation, extension or change-of-use projects.' },
        ],
      },
      faq: {
        label: 'FAQ',
        heading: 'Topographic Survey Questions',
        items: [
          {
            q: 'What is a topographic survey?',
            a: 'A topographic survey is a set of measurements that accurately represents the land — its boundaries, relief, existing structures and other features. It is the technical foundation for any construction project or licensing process.',
          },
          {
            q: 'When do I need a topographic survey?',
            a: 'Whenever you intend to build, renovate, divide a plot or submit a prior information request to the local council. Most Portuguese councils require a topographic survey as a mandatory document in the licensing process.',
          },
          {
            q: 'How long does a topographic survey take?',
            a: 'Depending on the size and complexity of the terrain, a typical survey takes 1 to 3 days of fieldwork plus 2 to 5 office days to produce the final documents. Larger plots or those with difficult access may take longer.',
          },
          {
            q: 'What does a permitting survey include?',
            a: 'Requirements vary by council, but typically include: a location plan, a plot plan with contour lines, topographic cross-sections and a survey of existing structures — all georeferenced to the national coordinate system (PT-TM06/ETRS89).',
          },
          {
            q: 'What is the difference between a planimetric and altimetric survey?',
            a: 'A planimetric survey represents the land in plan (2D) — boundaries, structures, paths, vegetation. An altimetric survey adds elevations and contour lines (3D), characterising the relief. For building licensing, a full survey (planimetric + altimetric) is typically required.',
          },
          {
            q: 'Do you cover the full Lisbon area?',
            a: 'Yes. We work across all municipalities in the Lisbon Metropolitan Area — Lisbon, Cascais, Sintra, Oeiras, Almada, Setúbal, Sesimbra and Palmela — as well as Serra da Arrábida and surrounding areas.',
          },
        ],
      },
      cta: {
        heading: 'Need a Topographic Survey?',
        body: 'Tell us where and what you need. We will send a quote within 24 hours.',
        button: 'Request a Quote',
      },
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
