Proyecto Semana 5 - Astro + GitHub Pages

Este proyecto es el resultado del trabajo realizado durante la Semana 5 del curso. Consiste en una página web estática construida con [Astro](https://astro.build/) y desplegada con éxito en [GitHub Pages](https://pages.github.com/).

Características

- Sitio estático hecho con “Astro”
- Estructura de componentes con layouts reutilizables
- Estilos personalizados con CSS
- Navegación entre páginas (`Inicio`, `Sobre mí`, `Contacto`)
- Deploy en “GitHub Pages”

Tecnologías utilizadas

- [Astro](https://astro.build/)
- HTML5 y CSS3
- Git Bash y GitHub
- GitHub Pages

Estructura del proyecto

/semana5
│
├── public/
│   ├── favicon.svg
│   └── styles/
│       └── global.css
│
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       └── contact.astro
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md

Sitio en producción
https://carlossolvas.github.io/semana5/

Cómo ejecutar en local

# Instalar dependencias
npm install
# Ejecutar el servidor de desarrollo
npm run dev
# Generar la versión para producción
npm run build
