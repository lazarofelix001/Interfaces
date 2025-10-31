## 1) Landing “Portfolio Junior”

### Objetivo  
Crear una landing personal con hero, bloque “sobre mí”, grid de proyectos y contacto.

### Entregables  
- index.html, styles.css (y carpeta img/).  
- Texto y recursos de tu elección (pueden ser placeholders).  

### Requisitos
- Mobile-first. Breakpoints sugeridos: min-width: 640px y 1024px.  
- Hero con `<picture>` (art direction): imagen vertical para móvil y horizontal para escritorio.  
- Grid de proyectos con `repeat(auto-fit, minmax())`:  
  - 1 columna en móvil → 2 columnas en tablet → 3 columnas en escritorio.  
- Imágenes fluidas (`img { max-width: 100%; height: auto; }`).  
- Miniaturas de proyectos con `srcset` + `sizes`.  
- Sección contacto con mapa embed (iframe) responsivo (16:9 con `aspect-ratio` o técnica del padding).  
- Tipografía y espaciados en `rem`; contenedor ancho en `%/vw`.  
- Incluir `<meta name="viewport" content="width=device-width, initial-scale=1">`.

### Criterios de aceptación
- Sin scroll horizontal en ningún breakpoint.  
- En Network → Img se observa que cambian los archivos servidos según `sizes`.  
- El iframe mantiene la relación de aspecto y no se deforma.

### Retos extra
- Modo oscuro con `@media (prefers-color-scheme: dark)`.  
- Transiciones suaves en hover/focus y foco accesible.

---

## 2) Restaurante “La Buena Mesa” (con menú hamburguesa)

### Objetivo  
Página one-page con nav fijo con hamburguesa, hero, carta, galería y ubicación.

### Entregables  
- index.html, styles.css, menu.js (mínimo para abrir/cerrar).  

### Requisitos
- Menú hamburguesa en móvil:  
  - Botón con `aria-controls` y `aria-expanded`, abre/cierra el `<nav>`.  
  - En escritorio (≥1024px) el menú se muestra horizontal sin hamburguesa.  
- Hero con título y CTA; imagen con `<picture>` (vertical móvil / horizontal desktop).  
- Carta en CSS Grid usando áreas (`grid-template-areas`): `entrantes`, `principales`, `postres`.  
- Galería responsive con `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));` y `srcset`/`sizes` en las fotos.  
- Mapa de Google (iframe) responsivo 16:9.  
- Unidades: mezcla de `rem`, `%`, `vw`. Botones con área táctil mínima de 44×44px.

### Criterios de aceptación
- El menú hamburguesa es operable con teclado (foco visible) y anuncia su estado con `aria-expanded`.  
- El layout cambia correctamente entre móvil, tablet y escritorio.  
- Imágenes fluidas sin distorsión; galería sin desbordes.

### Pista mínima del hamburguesa (opcional)
```html
<button class="burger" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span></button>
<nav id="menu" class="menu">…</nav>
```
```js
// menu.js
const b = document.querySelector('.burger');
const m = document.querySelector('#menu');
b.addEventListener('click', () => {
  const open = m.classList.toggle('is-open');
  b.setAttribute('aria-expanded', open);
});
```

### Retos extra
- Animación de líneas (giran a “X”).  
- `position: sticky` en el header.

---

## 3) Blog “Artículo Largo con Media”

### Objetivo  
Maquetar un artículo largo legible y rápido con imágenes y vídeo responsivos y aside adaptable.

### Entregables  
- index.html, styles.css (+ carpeta media/).  

### Requisitos
- Tipografía en `rem` (define base en `html`), ancho de columna en `ch` (~65–75 caracteres en desktop).  
- Imágenes dentro del contenido: fluidas + `srcset`/`sizes`.  
- Vídeo local (`<video controls>`) en contenedor 16:9 (`aspect-ratio` o técnica `padding-bottom`).  
- Aside con notas o enlaces:  
  - Móvil: aparece debajo del artículo.  
  - Escritorio (≥1024px): layout de dos columnas con Grid (artículo + aside).  
- Tablas (si las usas) con scroll horizontal en móvil sin romper el layout.

### Criterios de aceptación
- Sin CLS visible al cargar imágenes (define width/height o usa `aspect-ratio`).  
- El vídeo no se deforma ni provoca scroll horizontal.  
- Cambio correcto a dos columnas en escritorio.

### Retos extra
- `loading="lazy"` en imágenes; `font-display: swap` en fuentes.  
- Índice de contenidos con enlaces internos.

---

## 4) Landing “Evento TechConf”

### Objetivo  
Página del evento con agenda, ponentes y ubicación, optimizada para móvil.

### Entregables  
- index.html, styles.css (+ carpeta img/).  

### Requisitos
- Mobile-first con breakpoints a tu elección.  
- Hero con `<picture>` (art direction).  
- Agenda con Grid areas (día/hora/sala) que se reordena en móvil (apilado) y en escritorio (tabla visual).  
- Ponentes en cards: fotos con densidades 1x/2x (`srcset="… 1x, … 2x"`).  
- Mapa (iframe) responsivo y, si quieres, tráiler en `<video>` o YouTube.  
- Usa `gap` y `clamp()`/`min()`/`max()` si te ayudan a escalar tipografías.

### Criterios de aceptación
- El hero cambia de archivo entre móvil y escritorio (verificable en Network).  
- Agenda legible en todos los tamaños, sin overflow.  
- Puntuación Lighthouse móvil ≥ 90 en Performance (optimiza imágenes y evita cargas innecesarias).

### Retos extra
- Filtro por “track” básico con CSS `:has()` (si hay soporte) o JS sencillo.  
- Modo oscuro.

---

## Reglas generales para los 4 ejercicios
- Incluir siempre:  
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ```
- Usar imágenes fluidas y validar `srcset`/`sizes` en Network → Img (prueba DPR 1/2/3 en Device Toolbar).  
- Evitar unidades fijas: priorizar `rem`, `%`, `vw`, `fr` (Grid).  
- Revisar accesibilidad mínima: foco visible, contraste suficiente, `aria-label`/`alt` descriptivos.  
- Sin scroll horizontal en ningún breakpoint.
