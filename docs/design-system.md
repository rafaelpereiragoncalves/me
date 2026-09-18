# Design System

> Engineered Simplicity

Versão: 1.0.0

Este documento define os padrões visuais, tokens e regras de implementação do portfólio.

O objetivo é garantir uma experiência consistente, precisa e simples.

---

# 1. Design Identity

## Nome

Engineered Simplicity

## Conceito

Uma interface que demonstra que sistemas complexos podem ser apresentados de forma simples.

O design deve transmitir:

- precisão
- clareza
- confiança
- engenharia
- atenção aos detalhes

---

# 2. Design Principles

## Precision

Cada elemento deve possuir alinhamento, espaçamento e proporção intencional.

Nada deve parecer acidental.

---

## Clarity

A interface deve comunicar rapidamente.

O usuário deve encontrar qualquer informação importante em poucos segundos.

---

## Simplicity

A solução mais simples deve sempre ser priorizada.

Menos elementos.
Mais significado.

---

## Consistency

Componentes semelhantes devem possuir o mesmo comportamento visual.

---

## Craftsmanship

Detalhes pequenos são importantes:

- espaçamento
- tipografia
- animações
- alinhamento
- estados dos componentes

---

# 3. Visual Language

## Características

O design utiliza:

- superfícies limpas
- espaços negativos generosos
- tipografia forte
- cores neutras
- uma cor de destaque
- bordas suaves
- animações discretas

---

# 4. Color System

## Filosofia

A cor deve organizar a informação.

Nunca decorar.

A interface utiliza:

- cores neutras dominantes
- uma cor de ação
- estados semânticos

---

# Light Theme

## Background

background-primary

#FAFAFA


background-secondary

#F4F4F5


surface-primary

#FFFFFF


surface-elevated

#FFFFFF


---

## Text

text-primary

#18181B


text-secondary

#52525B


text-muted

#71717A


text-disabled

#A1A1AA


---

## Border

border-default

#E4E4E7


border-subtle

#F4F4F5


---

## Accent

accent-primary

#2563EB


accent-hover

#1D4ED8


accent-active

#1E40AF


---

# Dark Theme

background-primary

#09090B


background-secondary

#111113


surface-primary

#18181B


surface-elevated

#27272A


text-primary

#FAFAFA


text-secondary

#D4D4D8


text-muted

#A1A1AA


---

# 5. Typography

## Font Family

Prioridade:

1. SF Pro Display (macOS)
2. SF Pro Text
3. Inter
4. Geist


CSS:

```css
font-family:
-apple-system,
BlinkMacSystemFont,
"SF Pro Display",
"SF Pro Text",
Inter,
sans-serif;
```

---

# Typography Scale

## Display

Uso:

Hero principal

Tamanho:

64px

Line-height:

72px

Weight:

600


---

## Heading XL

Uso:

Títulos principais

48px / 56px


---

## Heading Large

32px / 40px


---

## Heading Medium

24px / 32px


---

## Body Large

18px / 28px


---

## Body

16px / 24px


---

## Small

14px / 20px


---

## Caption

12px / 16px

---

# 6. Spacing System

Todas as distâncias utilizam a escala:

```
4
8
12
16
24
32
48
64
80
96
128
```

Nunca utilizar valores arbitrários.

---

# 7. Layout System

## Container

Desktop:

1280px


Large Desktop:

1440px


---

## Grid

Desktop:

12 colunas


Gap:

24px


---

Tablet:

8 colunas


---

Mobile:

4 colunas


Gap:

16px


---

# 8. Border Radius

## Tokens

radius-sm

8px


radius-md

12px


radius-lg

20px


radius-xl

28px


radius-full

999px


---

# 9. Elevation System

Sombras devem ser discretas.

A profundidade vem principalmente de:

- contraste
- bordas
- transparência

---

## Shadow Small

Elementos pequenos.


## Shadow Medium

Cards.


## Shadow Large

Modais e elementos elevados.

---

# 10. Surface System

Componentes podem possuir níveis:

## Level 0

Background


## Level 1

Cards


## Level 2

Elementos elevados


## Level 3

Overlays


---

# 11. Motion System

## Filosofia

Movimento deve explicar.

Nunca distrair.

---

## Duration

Fast

150ms


Normal

250ms


Slow

400ms


---

## Easing

Standard

ease-out


Smooth

cubic-bezier


Spring

para interações físicas

---

# 12. Components

Todos os componentes devem seguir:

- tokens de cor
- tokens de espaçamento
- tokens de radius
- tokens de motion


---

## Button

Variantes:

Primary

Secondary

Ghost


Estados:

Default

Hover

Active

Disabled

Loading


---

## Card

Características:

- padding consistente
- borda suave
- background elevado
- hover discreto


---

## Badge

Usado para:

- tecnologias
- status
- categorias


---

## Navigation

Características:

- compacto
- discreto
- integrado ao layout


---

# 13. Iconography

Biblioteca:

Lucide Icons


Regras:

- mesmo peso visual
- tamanho consistente
- nunca utilizar ícones decorativos sem propósito


Tamanhos:

16px

20px

24px


---

# 14. Accessibility

Todos os componentes devem possuir:

- contraste adequado
- foco visível
- navegação por teclado
- estados claros


---

# 15. Responsive Rules

O design deve preservar:

- hierarquia
- simplicidade
- velocidade


Nunca resolver falta de espaço adicionando scroll.

Preferir:

- reduzir conteúdo
- reorganizar elementos
- criar nova tela


---

# 16. Portfolio Specific Rules

## Zero Scroll

Cada página deve caber em:

100vh


---

## Information Speed

Informações principais devem estar acessíveis em poucos segundos.

---

## No Decoration Without Purpose

Todo elemento visual precisa melhorar:

- entendimento
- navegação
- percepção de qualidade

---

# 17. Quality Checklist

Antes de finalizar qualquer tela:

[ ] Todos os elementos estão alinhados?

[ ] Os espaçamentos seguem tokens?

[ ] Existe algum elemento desnecessário?

[ ] O usuário entende a tela rapidamente?

[ ] As animações possuem propósito?

[ ] A interface parece leve?

[ ] O código segue o mesmo padrão do design?


---

# 18. Final Principle

Uma interface excelente não chama atenção para si.

Ela torna a experiência inevitável.

O usuário simplesmente sabe onde ir.