# Guía para añadir nuevos vestidos al portfolio

Esta guía explica cómo subir imágenes y añadir nuevos vestidos a la web del atelier usando solo GitHub, sin necesidad de programar.

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

Si tienes dudas, puedes pedir ayuda o consultar esta guía en cualquier momento.
