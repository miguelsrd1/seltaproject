
# Language Translation Feature - Portuguese (Default) / English

## Overview
Implement a bilingual language system where Portuguese (Portugal) is the default language, with a simple "PT | EN" tab bar in the header to switch to English.

---

## Implementation Approach

### 1. Create a Language Context System
Create a React Context to manage the current language state across the entire application.

**New file: `src/contexts/LanguageContext.tsx`**
- Create a context with `language` state (default: `'pt'`)
- Provide a `setLanguage` function to switch between `'pt'` and `'en'`
- Wrap the entire app with the `LanguageProvider`

---

### 2. Create Translation Files
Store all translatable text in a centralized translations object.

**New file: `src/translations/index.ts`**
- Structure translations by component/section
- Include all text from: Header, Hero, Journey, Portfolio, ContactForm, Footer

Example structure:
```text
translations = {
  pt: {
    header: { journey: 'Percurso', portfolio: 'Portfolio', ... },
    hero: { location: 'PORTUGAL', heading: 'Da Visao as Chaves...', ... },
    journey: { ... },
    portfolio: { ... },
    contact: { ... },
    footer: { ... }
  },
  en: {
    header: { journey: 'Journey', portfolio: 'Portfolio', ... },
    hero: { location: 'PORTUGAL', heading: 'From Vision to Keys...', ... },
    ...
  }
}
```

---

### 3. Create a Translation Hook
Create a custom hook for easy access to translations throughout the app.

**New file: `src/hooks/useTranslation.ts`**
- Hook returns the current translations based on selected language
- Returns a `t()` function for accessing nested translation keys

---

### 4. Add Language Switcher Component
Create a minimal, elegant tab bar for the header.

**New file: `src/components/LanguageSwitcher.tsx`**
- Display "PT | EN" with the active language highlighted
- Match the header's aesthetic (minimal, uppercase, tracking-widest)
- Adapt colors based on scroll state (white when over hero, dark when scrolled)

Design:
```text
[ PT | EN ]  - where PT is bold/active by default
```

---

### 5. Update Components to Use Translations

**Files to modify:**

| Component | Translatable Content |
|-----------|---------------------|
| **Header.tsx** | Nav items (Journey, Portfolio, Contact), "Start Project" button |
| **Hero.tsx** | Location badge, main heading, subtitle, CTA buttons |
| **Journey.tsx** | Section header, all 4 phases (title, subtitle, description, details) |
| **Portfolio.tsx** | Section header, filter labels, project descriptions & categories |
| **ContactForm.tsx** | All questions, options, form labels, success message |
| **Footer.tsx** | Description, service links, company links, CTA, legal links |

---

## Full Translation Content

### Header
| English | Portuguese |
|---------|------------|
| Journey | Percurso |
| Portfolio | Portfolio |
| Contact | Contacto |
| Start Project | Iniciar Projeto |

### Hero
| English | Portuguese |
|---------|------------|
| PORTUGAL | PORTUGAL |
| From Vision to Keys | Da Visao as Chaves |
| End-to-End Development. | Desenvolvimento Integral. |
| Your key-in-hand solution... | A sua solucao chave-na-mao... |
| Start Your Journey | Inicie o Seu Percurso |
| View Portfolio | Ver Portfolio |

### Journey Section
| English | Portuguese |
|---------|------------|
| The Process | O Processo |
| Your Journey With Us | O Seu Percurso Connosco |
| Land Sourcing | Procura de Terreno |
| Design & Permitting | Design e Licenciamento |
| Vetted Construction | Construcao Verificada |
| Handover | Entrega |
| (+ all descriptions and details) | (+ todas as descricoes) |

### Portfolio Section
| English | Portuguese |
|---------|------------|
| Our Work | O Nosso Trabalho |
| Future Visions | Visoes Futuras |
| All | Todos |
| Completed | Concluidos |
| Upcoming | Proximos |
| (+ project descriptions) | (+ descricoes dos projetos) |

### Contact Form
| English | Portuguese |
|---------|------------|
| Start Your Project | Iniciar o Seu Projeto |
| Project Discovery | Descoberta do Projeto |
| Where would you like to build? | Onde gostaria de construir? |
| Do you have a plot? | Ja tem um terreno? |
| Target budget range? | Qual o seu orcamento? |
| How can we reach you? | Como podemos contacta-lo? |
| (+ all options and labels) | (+ todas as opcoes) |

### Footer
| English | Portuguese |
|---------|------------|
| Services | Servicos |
| Company | Empresa |
| Get In Touch | Contacte-nos |
| Start Your Project | Iniciar Projeto |
| Privacy Policy | Politica de Privacidade |
| Terms of Service | Termos de Servico |
| All rights reserved | Todos os direitos reservados |

---

## File Changes Summary

| Action | File |
|--------|------|
| Create | `src/contexts/LanguageContext.tsx` |
| Create | `src/translations/index.ts` |
| Create | `src/hooks/useTranslation.ts` |
| Create | `src/components/LanguageSwitcher.tsx` |
| Modify | `src/App.tsx` (wrap with LanguageProvider) |
| Modify | `src/components/Header.tsx` (add switcher + translations) |
| Modify | `src/components/Hero.tsx` (use translations) |
| Modify | `src/components/Journey.tsx` (use translations) |
| Modify | `src/components/Portfolio.tsx` (use translations) |
| Modify | `src/components/ContactForm.tsx` (use translations) |
| Modify | `src/components/Footer.tsx` (use translations) |

---

## Technical Notes

1. **No external libraries needed** - Using React Context for state management keeps the bundle size small
2. **Persistent language choice** - Can optionally store in localStorage so the preference persists on page reload
3. **SEO consideration** - For a simple bilingual site without routing changes, this client-side approach works well
4. **Smooth transitions** - Text changes can have subtle fade transitions using Framer Motion

---

## Language Switcher Position
The "PT | EN" switcher will be placed in the header navigation, between the nav items and the "Start Project" CTA button, maintaining visual balance.
