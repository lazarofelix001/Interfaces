# **1. Combinadores en CSS**

Los combinadores describen la relación entre elementos.

## **1.1. Selector descendiente (espacio)**

Selecciona un elemento dentro de otro, en cualquier nivel.

```css
A B
```

**Ejemplo:**

```css
div p {
  color: blue;
}
```

---

## **1.2. Selector hijo directo ( > )**

Selecciona solo los elementos que son hijos directos.

```css
A > B
```

**Ejemplo:**

```css
ul > li {
  list-style: square;
}
```

---

## **1.3. Selector de hermano adyacente ( + )**

Selecciona un elemento que aparece inmediatamente después de otro.

```css
A + B
```

**Ejemplo:**

```css
h2 + p {
  margin-top: 0;
}
```

---

## **1.4. Selector de hermanos subsiguientes ( ~ )**

Selecciona todos los hermanos posteriores.

```css
A ~ B
```

**Ejemplo:**

```css
h1 ~ span {
  color: red;
}
```

---

# **2. Selectores básicos de CSS**

## **2.1. Selector universal ( * )**

```css
* {
  margin: 0;
  padding: 0;
}
```

---

## **2.2. Selector de tipo (elemento)**

```css
section {
  padding: 20px;
}
```

---

## **2.3. Selector de clase ( .clase )**

```css
.card {
  border: 1px solid #ccc;
}
```

---

## **2.4. Selector de ID ( #id )**

```css
#principal {
  background-color: #eee;
}
```

