# 🧩 Ejercicio 3 — Layout de página con áreas de Grid

## 🎯 Objetivo
Construir un **layout completo de página** usando `grid-template-areas`, con cabecera, navegación, contenido principal, barra lateral y pie de página.  
El layout debe cambiar de disposición según el ancho de pantalla.

---

## 🧠 Disposición deseada

### 📱 Móvil (≤ 640px)
```
header
nav
main
aside
footer
```

### 💻 Escritorio (≥ 1024px)
```
header header
nav    main
nav    aside
footer footer
```

---

## 🧠 Tareas
1. Define las áreas: `header`, `nav`, `main`, `aside`, `footer`.  
2. Crea el layout móvil por defecto (mobile-first).  
3. A partir de 1024px, aplica la cuadrícula de 2 columnas con las áreas indicadas.  
4. Da estilos básicos a cada bloque para distinguirlos visualmente.  

