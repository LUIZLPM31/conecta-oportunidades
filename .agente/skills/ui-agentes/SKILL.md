---
name: ui-agentes
description: Use sempre que for criar ou estilizar interface web. Foco em Tailwind CSS e Lucide React para design profissional e moderno.
---

# UI Design System e Estilização Avançada

## Objetivo
Definir o padrão visual do projeto com design moderno, espaçamento consistente, cores harmoniosas, microanimações e responsividade de altíssima qualidade (premium feel).

## Tecnologias Base
- **Tailwind CSS**: Framework principal para estilização (evitar CSS vanilla sem necessidade, evitar style inline).
- **Lucide React**: Biblioteca padrão obrigatória para ícones.

## Regras de Ouro (Core Principles)

1. **Estética Premium e Dinâmica (WOW Factor)**
   - O design deve impressionar à primeira vista. Evite designs genéricos ou MVPs básicos.
   - Use fundos com gradientes sutis ou texturas discretas (ex: `bg-gradient-to-br from-slate-900 to-slate-800`). **NUNCA use branco puro (`bg-white`) ou preto puro (`bg-black`) como fundo principal de uma página inteira**, prefira tons de cinza super claros (ex: `bg-slate-50`) ou escuros (ex: `bg-slate-900`).
   - Aplique Glassmorphism sutil onde apropriado para dar um ar moderno (ex: `bg-white/10 backdrop-blur-md border border-white/20`).

2. **Tipografia Moderna e Hierarquia**
   - Utilize fontes modernas (Inter, Roboto, Outfit).
   - Mantenha hierarquia clara: Títulos expressivos (ex: `text-3xl font-extrabold tracking-tight text-slate-900`), corpo de texto legível (ex: `text-base text-slate-600 leading-relaxed`).

3. **Paleta de Cores (Max 3 Cores Principais)**
   - **Primária**: Cor de destaque para ações principais (ex: Indigo, Violet, Emerald).
   - **Secundária / Base**: Tons neutros para estrutura (ex: Slate, Zinc, Gray).
   - **Acento**: Cor complementar para alertas, badges ou destaques sutis.
   - Evite cores primárias "puras" ou muito vibrantes de forma exagerada (ex: `red-500`, `blue-500` genéricos). Use tons da paleta estendida do Tailwind de forma equilibrada.

4. **Formas e Sombras (Soft UI)**
   - **Bordas**: Aplique bordas arredondadas suaves em TODOS os elementos interativos (`rounded-xl` ou `rounded-2xl` para cards e modais, `rounded-lg` ou `rounded-full` para botões).
   - **Sombras**: Use sombras suaves e difusas para criar profundidade e separar camadas. Ex: `shadow-lg shadow-slate-200/50` (light mode) ou sombras coloridas sutis para destacar elementos importantes (`shadow-indigo-500/20`).

5. **Microinterações e Animações (Crucial para sensação Premium)**
   - Todo elemento interativo (botões, links, cards) DEVE ter efeitos de `hover` e `focus` suaves.
   - Use as classes de transição do Tailwind em todo elemento interativo: `transition-all duration-300 ease-in-out`.
   - Efeitos recomendados: `hover:scale-105`, `hover:-translate-y-1`, `hover:shadow-xl`, mudanças graduais de cor (`hover:bg-indigo-600`).
   - Use `group` e `group-hover` do Tailwind para animar elementos filhos (como ícones) quando o pai recebe hover.

6. **Ícones (Lucide React)**
   - Importe ícones sempre do pacote `lucide-react`.
   - Mantenha tamanhos consistentes (`w-5 h-5` para botões padrão, `w-6 h-6` ou maiores para destaques/cards).
   - Aplique cores aos ícones usando as classes de texto do Tailwind (ex: `text-indigo-500`).
   - Adicione animações sutis aos ícones durante interações (ex: `group-hover:-rotate-12` ou `group-hover:translate-x-1`).

7. **Responsividade Absoluta**
   - Mobile-first approach: Defina o estilo padrão para mobile e use prefixos `sm:`, `md:`, `lg:`, `xl:` para adaptar a telas maiores.
   - Use extensivamente Flexbox (`flex`, `flex-col`, `items-center`, `justify-between`) e CSS Grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) para layouts limpos.
   - Garanta padding adequado e respiro (whitespace) generoso, especialmente em telas maiores (ex: `p-4 md:p-8`).

## Snippets Práticos - Padrões de Referência

### Botão Primário Dinâmico
\`\`\`tsx
import { ArrowRight } from 'lucide-react';

<button className="group flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
  Começar Agora
  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
</button>
\`\`\`

### Card Moderno Interativo
\`\`\`tsx
import { Zap } from 'lucide-react';

<div className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-100">
  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
    <Zap className="h-6 w-6" />
  </div>
  <h3 className="mb-2 text-xl font-bold text-slate-800">Alta Performance</h3>
  <p className="text-slate-500 leading-relaxed">
    Experiência fluida e responsiva com animações de interface sutis que encantam o usuário.
  </p>
</div>
\`\`\`

### Seção Hero com Fundo Suave
\`\`\`tsx
<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50 px-6 py-24">
  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" /> {/* Padrão opcional */}
  <div className="relative z-10 text-center max-w-4xl mx-auto">
    {/* Conteúdo do hero */}
  </div>
</section>
\`\`\`