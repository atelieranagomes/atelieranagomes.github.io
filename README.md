# Guía rápida para añadir vestidos al portfolio

Esta sección explica cómo subir imágenes y añadir nuevos vestidos a la web del atelier usando solo GitHub, sin necesidad de programar.

---

## 1. Subir imágenes

1. Accede al repositorio en GitHub.
2. Ve a la carpeta `src/assets`.
3. Haz clic en `Add file` > `Upload files`.
4. Arrastra o selecciona las imágenes que quieras subir.
5. Haz clic en `Commit changes` para guardar.

---

## 2. Añadir un vestido al portfolio

1. Ve a la carpeta `src/components` y haz clic en el archivo `Portfolio.tsx`.
2. Haz clic en el icono de lápiz (`Edit this file`).
3. Busca el array llamado `dresses` (al principio del archivo).
4. Añade una nueva entrada siguiendo este formato, antes del último corchete `]`:

```js
{
   image: "/src/assets/nombre-de-la-imagen.jpg",
   title: "Título del vestido",
   description: "Descripción del vestido"
},
```

- Cambia `nombre-de-la-imagen.jpg` por el nombre real de la imagen que subiste.
- Escribe el título y la descripción que quieras mostrar.

5. Haz clic en `Commit changes` para guardar.

---

## 3. Ver los cambios

- Espera unos minutos a que GitHub Pages actualice la web.
- Abre la página y verás el nuevo vestido en la sección Portfolio.

---

**Nota sobre el despliegue:**

Si tu web usa Vite y GitHub Pages, después de hacer cambios en el código o subir imágenes, debes ejecutar localmente:

```bash
npm run build
npm run deploy
```

Esto genera la build y la sube a la rama `gh-pages`, actualizando la web pública.

---

Si tienes dudas, puedes pedir ayuda o consultar esta guía en cualquier momento.
# 🪡 Atelier Ana Gomes

¡Bienvenido al repositorio de la página web de Atelier Ana Gomes!

## ✨ ¿Quiénes somos?
Atelier Ana Gomes es un taller de costura especializado en la creación, restauración y personalización de prendas únicas. Nos apasiona la moda, la artesanía y el detalle, ofreciendo servicios personalizados para cada cliente.

## 🚀 ¿Qué encontrarás aquí?
Este repositorio contiene el código fuente de la web oficial de Atelier Ana Gomes, desarrollada con React, TypeScript y Tailwind CSS. Aquí podrás encontrar:
- Página principal con información sobre el atelier
- Sección de servicios: restauración, costura personalizada, arreglos y más
- Galería de trabajos realizados
- Formulario de contacto

## 🛠️ Tecnologías utilizadas
- React
- TypeScript
- Vite
- Tailwind CSS
- PostCSS

## 📦 Instalación y uso
1. Clona el repositorio:
   ```bash
   git clone https://github.com/atelieranagomes/atelieranagomes.github.io.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 📸 Imágenes y recursos
Las imágenes utilizadas en la web están en la carpeta `assets/` y son propiedad de Atelier Ana Gomes.

---

¡Gracias por visitar nuestro repositorio y apoyar la moda artesanal!
