# Design Principles

## Radius

Todo raio deve utilizar um token do sistema.

Nunca utilizar valores arbitrários.

✔ radius-sm
✔ radius-md
✔ radius-lg

❌ border-radius: 11px

---

## Espaçamento

Todo espaçamento utiliza a escala do projeto.

✔ space-4
✔ space-8
✔ space-12

❌ margin: 13px

---

## Cores

Nunca utilizar HEX diretamente nos componentes.

✔ color-background-primary

❌ #ffffff

---

## Animações

Toda animação deve utilizar os tokens de motion.

✔ duration-fast

❌ transition: 213ms