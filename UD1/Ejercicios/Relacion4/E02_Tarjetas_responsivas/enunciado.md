# E02 · Tarjetas responsivas con Flexbox (3/2/1), igual altura y CTA abajo

**Objetivo (resultado único):**  
Construir una rejilla de tarjetas usando **Flexbox** con estas reglas:

- **Distribución:** 3 tarjetas por fila en ≥ 1024px, 2 por fila entre 768px y 1023px, 1 por fila en < 768px.
- **Igual altura:** Todas las tarjetas de la misma fila deben mantener la **misma altura** visual.
- **CTA al pie:** El botón `.btn` debe quedar pegado a la parte inferior de cada tarjeta, independientemente de la cantidad de texto.

## Instrucciones
Completa los `TODO` en `css/styles.css` para:
1. Convertir `.cards` en contenedor Flex con `wrap` y `gap` de **16px**.
2. Definir `flex-basis` adecuado para obtener 3/2/1 columnas según el ancho.
3. Hacer que `.card` se distribuya como **columna** y que `.btn` se quede abajo usando Flexbox interno.

## Criterios de aceptación
- 3/2/1 columnas según los breakpoints.
- Igual altura por fila visible.
- `.btn` siempre al pie de cada tarjeta.
