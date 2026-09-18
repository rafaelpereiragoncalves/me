# Design System

> Engineered Simplicity

Version: 1.0.0

This document defines the visual standards, tokens, and implementation rules for the portfolio.

The goal is to ensure a consistent, precise, and simple experience.

---

# 1. Design Identity

## Name

Engineered Simplicity

## Concept

An interface that demonstrates how complex systems can be presented simply.

The design should convey:

- precision
- clarity
- trust
- engineering
- attention to detail

---

# 2. Design Principles

### Precision

Every element must have intentional alignment, spacing, and proportion.

Nothing should seem accidental.



### Clarity

The interface should communicate quickly.

The user should find any important information in a few seconds.



### Simplicity

The simplest solution should always be prioritized.

Less elements.

More meaning.



### Consistency

Similar components should have the same visual behavior.



### Craftsmanship

Small details are important:

- spacing
- typography
- animations
- alignment
- component states



---

# 3. Visual Language

## Characteristics

The design uses:

- clean surfaces
- generous negative space
- strong typography
- neutral colors
- one accent color
- soft edges
- discrete animations



---

# 4. Color System

### Philosophy

Color should organize information.

Never just decorate.

The interface uses:

- dominant neutral colors
- one action color
- semantic states



---

# Light Theme

## Background

background-primary

#FAFAFA



background-secondary

#F4F4F5



surface-primary

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

### Font Family

Priority:

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

Use: Hero main

Size: 64px

Line-height: 72px

Weight: 600



---

## Heading XL

Use: Main titles

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

All distances use the scale:

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

Never use arbitrary values.



---

# 7. Layout System

### Container

Desktop: 1280px



Large Desktop: 1440px



---

### Grid

Desktop: 12 columns



---

Tablet: 8 columns



---

Mobile: 4 columns



Gap: 16px



---

# 8. Border Radius

### Tokens

radius-sm: 8px



radius-md: 12px



radius-lg: 20px



radius-xl: 28px



radius-full: 999px



---

# 9. Elevation System

Shadows should be discreet.

Depth comes primarily from:

- contrast
- borders
- transparency



---

## Shadow Small

Small elements.



---

## Shadow Medium

Cards.



---

## Shadow Large

Modals and elevated elements.



---

# 10. Surface System

Components can have levels:



### Level 0

Background



### Level 1

Cards



### Level 2

Elevated elements



### Level 3

Overlays



---

# 11. Motion System

### Philosophy

Movement should explain.

Never distract.



---

## Duration

Fast: 150ms

Normal: 250ms

Slow: 400ms



---

## Easing

Standard: ease-out

Smooth: cubic-bezier

Spring: for physical interactions



---

# 12. Components

All components should follow:

- color tokens
- spacing tokens
- radius tokens
- motion tokens



---

## Button

Variants:

Primary

Secondary

Ghost

States:

Default

Hover

Active

Disabled

Loading



---

## Card

Characteristics:

- consistent padding
- soft border
- elevated background
- subtle hover



---

## Badge

Used for:

- technologies
- status
- categories



---

## Navigation

Characteristics:

- compact
- discreet
- integrated into the layout



---

# 13. Iconography

Library: Lucide Icons

Rules:

- same visual weight
- consistent size
- never use decorative icons without purpose



Sizes:

16px

20px

24px



---

# 14. Accessibility

All components must have:

- adequate contrast
- visible focus
- keyboard navigation
- clear states



---

# 15. Responsive Rules

The design must preserve:

- hierarchy
- simplicity
- speed

Never solve lack of space by adding scroll.

Prefer:

- reduce content
- reorganize elements
- create new screen



---

# 16. Portfolio Specific Rules

## Zero Scroll

Each page must fit in: 100vh



---

## Information Speed

Main information should be accessible in a few seconds.



---

## No Decoration Without Purpose

Every visual element must improve:

- understanding
- navigation
- perception of quality



---

# 17. Quality Checklist

Before finalizing any screen:



[ ] Are all elements aligned?



[ ] Do spacings follow tokens?



[ ] Is there any unnecessary element?



[ ] Does the user understand the screen quickly?



[ ] Do animations have purpose?



[ ] Does the interface look light?



[ ] Does the code follow the same standard as the design?



---

# 18. Final Principle

An excellent interface does not call attention to itself.

It makes the experience inevitable.

The user simply knows where to go.