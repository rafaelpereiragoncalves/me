# Components Guide





# Component Philosophy

Components should be:

- small
- reusable
- predictable
- accessible



Never create components just to abstract.



---

# Component Structure

Each component:



Button/

├── Button.tsx

├── Button.types.ts

├── Button.styles.ts

└── index.ts



---

# Naming

Use PascalCase:



✅ ProjectCard

✅ SkillBadge



Avoid:



❌ cardProject

❌ boxSkill



---

# Component Categories

## UI Components

Basic components:



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

Components should use variants.



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

Every interactive component has:



Default

Hover

Focus

Active

Disabled

Loading



---

# Animation Rules

Animations should follow:



Motion Tokens



Never:



transition: 347ms



Always:



duration-fast



---

# Card Rules

Cards should have:



- consistent radius
- standard padding
- subtle border
- organized content



Never create cards just to fill space.



---

# Navigation Rules

Navigation should:



- be compact
- be intuitive
- disappear when not necessary



---

# Component Checklist

Before creating:



[ ] Will this component be reused?



[ ] Is there a similar component?



[ ] Is it using tokens?



[ ] Does it have states?



[ ] Is it accessible?