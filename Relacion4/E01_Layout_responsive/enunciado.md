# E01 · Layout responsive con Flexbox (header, sidebar, main, footer)

**Objetivo (resultado único):**  
Construye un layout responsive usando **solo Flexbox** con estas reglas:

- **Móvil (< 768px):** disposición en **columna**: Cabecera → Contenido → Lateral → Pie.
- **Escritorio (≥ 768px):** disposición en **fila** para el bloque central: el **lateral** (ancho fijo 280px) a la izquierda y el **contenido** ocupando el resto. Cabecera y pie a anchura completa arriba y abajo.
- Separación uniforme entre bloques internos del layout mediante `gap`.

## Instrucciones
Completa los `TODO` en `css/styles.css` para:
1. Convertir `.layout` en contenedor Flex.
2. En móvil, apilar en columna.
3. En escritorio (≥768px), pasar a **fila** y fijar el ancho del `.sidebar` a **280px** mientras `.content` ocupa el espacio restante.
4. Añadir `gap` de **16px** entre `.sidebar` y `.content`.
5. Asegurar que `header` y `footer` se muestran a 100% de ancho.

## Criterios de aceptación
- Móvil: orden **Cabecera → Contenido → Lateral → Pie** en columna.
- Escritorio: `.layout` en fila con **sidebar** (280px) a la izquierda y **content** creciendo para ocupar el resto.
- `gap` de 16px entre columna lateral y contenido.
 