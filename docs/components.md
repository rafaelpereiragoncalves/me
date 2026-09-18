# Components Guide


# Component Philosophy

Componentes devem ser:

- pequenos
- reutilizáveis
- previsíveis
- acessíveis


Nunca criar componentes apenas para abstrair.


---

# Component Structure


Cada componente:


Button/

├── Button.tsx

├── Button.types.ts

├── Button.styles.ts

└── index.ts



---

# Naming


Utilizar PascalCase:


✅ ProjectCard

✅ SkillBadge


Evitar:


❌ cardProject

❌ boxSkill



---

# Component Categories


## UI Components

Componentes básicos:


Button

Input

Badge

Card

Tooltip



## Layout Components


Container

Stack

Grid

Section

Panel



## Feature Components


ProjectCard

ExperienceCard

SkillGroup

ProfileCard



---

# Variants


Componentes devem utilizar variantes.


Exemplo:


Button:


primary

secondary

ghost



Card:


default

interactive

highlight



---

# States


Todo componente interativo possui:


Default

Hover

Focus

Active

Disabled

Loading



---

# Animation Rules


Animações devem seguir:

Motion Tokens


Nunca:


transition: 347ms


Sempre:


duration-fast



---

# Card Rules


Cards devem possuir:


- radius consistente
- padding padrão
- borda sutil
- conteúdo organizado


Nunca criar cards apenas para preencher espaço.



---

# Navigation Rules


A navegação deve:


- ser compacta
- ser intuitiva
- desaparecer quando não necessária



---

# Component Checklist


Antes de criar:


[ ] Esse componente será reutilizado?


[ ] Existe um componente parecido?


[ ] Está usando tokens?


[ ] Possui estados?


[ ] É acessível?

