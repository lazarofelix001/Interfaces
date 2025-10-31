# Relacion 2

## Ejercicio 1: `flex-direction`
Crea un contenedor con 4 cajas (`div.col`) y prueba estas variantes:
1. `flex-direction: row;` → Las cajas deben alinearse en fila (por defecto).
2. `flex-direction: row-reverse;` → Las cajas se invierten horizontalmente.
3. `flex-direction: column;` → Las cajas deben apilarse en columna.
4. `flex-direction: column-reverse;` → Las cajas se apilan en columna invertida.

---

## Ejercicio 2: `align-items`
Crea un contenedor con altura fija (por ejemplo, `300px`) y 3 cajas de diferentes alturas. Aplica:
1. `align-items: stretch;` → Todas las cajas se estiran a la altura del contenedor.
2. `align-items: flex-start;` → Todas las cajas se alinean arriba.
3. `align-items: center;` → Todas las cajas se centran verticalmente.
4. `align-items: flex-end;` → Todas las cajas se alinean abajo.
5. `align-items: baseline;` → Todas las cajas se alinean por su línea base del texto.

---

## Ejercicio 3: `order`
Crea un contenedor con 3 cajas numeradas (1, 2 y 3). Modifica el orden visual aplicando:
1. `order: 3;` en la primera caja → ahora aparece al final.
2. `order: -1;` en la tercera caja → ahora aparece la primera.
3. Diferentes valores de `order` para reorganizar las tres cajas como quieras.

---

## Ejercicio 4: `align-self`
Crea un contenedor con `align-items: center;` y 3 cajas. Cambia la alineación de cada caja individualmente:
1. A la primera caja → `align-self: flex-start;`
2. A la segunda caja → `align-self: flex-end;`
3. A la tercera caja → `align-self: stretch;`
4. Prueba también `align-self: baseline;` en una de ellas.

---

## Ejercicio 5: `flex-wrap`
Crea un contenedor con ancho fijo (por ejemplo, `500px`) y 6 cajas grandes (200px de ancho cada una). Aplica:
1. `flex-wrap: nowrap;` → Las cajas se desbordan en una sola fila.
2. `flex-wrap: wrap;` → Las cajas se ajustan en varias filas automáticamente.
3. `flex-wrap: wrap-reverse;` → Igual que el anterior, pero las filas aparecen en orden inverso.

---

## Ejercicio 6: Combinado
Crea un contenedor con 5 cajas y aplica:
- `flex-direction: row;`
- `flex-wrap: wrap;`
- `align-items: center;`
- Cambia el `order` de una caja para que aparezca la primera.
- Modifica el `align-self` de otra caja para que se alinee al final.
