# Mirador del Rio Santo Domingo

Sitio web del Mirador del Rio Santo Domingo, un glamping en el cañón mágico de Colombia.

## Tecnologías utilizadas

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript

## Requisitos previos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/miradordelriosantodomingo.git
cd miradordelriosantodomingo
```

2. Instala las dependencias:
```bash
npm install
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## Construcción

Para construir el sitio para producción:

```bash
npm run build
```

Los archivos generados estarán en el directorio `dist/`

## Despliegue

El sitio está configurado para ser desplegado en GitHub Pages. Para desplegar:

1. Asegúrate de que el repositorio está en GitHub
2. Ve a la configuración del repositorio
3. En la sección "Pages", selecciona la rama `main` y el directorio `dist/`
4. Guarda los cambios

El sitio estará disponible en `https://tu-usuario.github.io/miradordelriosantodomingo`

## Estructura del proyecto

```
miradordelriosantodomingo/
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
