### **Unidad Didáctica 2: Animaciones y Transiciones en CSS**  

---

### **1. Introducción a las Transiciones en CSS**

En el desarrollo web moderno, la capacidad de añadir dinamismo y fluidez en las interfaces es crucial para mejorar la experiencia del usuario (UX) y hacer que las interacciones sean más naturales e intuitivas. Las transiciones en CSS ofrecen una solución sencilla y efectiva para animar cambios en las propiedades de los elementos sin necesidad de recurrir a JavaScript u otros lenguajes de programación. Las transiciones permiten modificar gradualmente los valores de una o más propiedades CSS a lo largo de un periodo de tiempo especificado, en lugar de que el cambio sea inmediato.

La principal ventaja de las transiciones en CSS es su simplicidad, ya que solo requieren especificar la propiedad a modificar, la duración del cambio, y opcionalmente, la velocidad y el retraso del mismo. Esto facilita a los diseñadores web añadir efectos visuales más atractivos sin sobrecargar el rendimiento del sitio.

##### **1.1. Propiedades que pueden animarse**

No todas las propiedades en CSS son aptas para ser animadas. Las transiciones solo funcionan con aquellas propiedades que pueden cambiar sus valores de forma continua. Esto significa que propiedades que involucran una escala numérica, como la opacidad o el ancho, son ideales para las transiciones, ya que CSS puede interpolar entre los valores inicial y final sin interrupciones. Las propiedades como `display`, por ejemplo, no son animables, ya que no existe una representación intermedia entre `block` y `none`.

Algunas de las propiedades más comunes que se utilizan en las transiciones son:

- **`color`**: Cambio suave entre dos colores de texto.
- **`background-color`**: Transición fluida entre colores de fondo.
- **`width`** y **`height`**: Modificación gradual de dimensiones de un contenedor o imagen.
- **`opacity`**: Cambio progresivo en la visibilidad de un elemento.
- **`transform`**: Aplicación de transformaciones como rotación, escalado y traslación.

**Ejemplo práctico 1:** Cambiar el color de fondo de un botón cuando se activa el estado `hover`.

```css
button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #2ecc71;
}
```

En este ejemplo, cuando el cursor del usuario pasa sobre el botón, el color de fondo cambia gradualmente de azul (`#3498db`) a verde (`#2ecc71`) en 0.3 segundos. El uso de la transición hace que el cambio de color se vea suave y fluido.

##### **1.2. Sintaxis de la propiedad `transition`**

La propiedad `transition` en CSS es un **shorthand** o abreviatura que permite definir en una sola línea todas las configuraciones necesarias para una transición. Aunque es posible especificar las propiedades de la transición por separado, el uso del shorthand es preferible por su simplicidad y legibilidad.

La sintaxis básica de la propiedad `transition` es la siguiente:

```css
transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];
```

Veamos cada uno de los componentes de este shorthand con más detalle:

- **`transition-property`**: Especifica cuál o cuáles propiedades CSS serán afectadas por la transición. Si no se define, el valor predeterminado es `all`, lo que significa que todas las propiedades que cambien se animarán. Sin embargo, es más eficiente especificar solo las propiedades que realmente necesiten transición para mejorar el rendimiento.

    **Ejemplo**:
    ```css
    transition-property: background-color;
    ```

- **`transition-duration`**: Define la duración total de la transición. Se puede especificar en segundos (`s`) o milisegundos (`ms`). Un valor de `0s` implica que no habrá transición, y el cambio ocurrirá instantáneamente.

    **Ejemplo**:
    ```css
    transition-duration: 0.5s;
    ```

- **`transition-timing-function`**: Controla cómo se distribuye la velocidad del cambio en el tiempo. Existen varias funciones predefinidas que permiten modificar la aceleración o desaceleración de la transición:
  
  - **`ease`**: Inicia lento, acelera en el medio y desacelera hacia el final (valor por defecto).
  - **`linear`**: Cambio a una velocidad constante.
  - **`ease-in`**: Comienza lento y luego acelera.
  - **`ease-out`**: Comienza rápido y desacelera hacia el final.
  - **`ease-in-out`**: Combinación de `ease-in` y `ease-out`.
  - **`cubic-bezier`**: Permite definir curvas personalizadas para el cambio, especificando puntos de control.

    **Ejemplo**:
    ```css
    transition-timing-function: ease-in-out;
    ```

- **`transition-delay`**: Retrasa el inicio de la transición por un tiempo determinado. Se expresa en segundos o milisegundos. Si no se define, el valor predeterminado es `0`, lo que significa que la transición comenzará inmediatamente.

    **Ejemplo**:
    ```css
    transition-delay: 0.2s;
    ```

##### **1.3. Transición usando múltiples propiedades**

Es posible aplicar una transición a varias propiedades al mismo tiempo, especificándolas en una lista separada por comas. Cada propiedad puede tener su propia duración, función de temporización y retraso. Esto permite crear efectos visuales más complejos en los cuales diferentes propiedades cambian en momentos distintos.

**Ejemplo práctico 2:**

```css
.box {
  width: 100px;
  height: 100px;
  background-color: #e74c3c;
  transition: width 0.5s ease, background-color 1s ease-in-out, transform 0.7s ease-out;
}

.box:hover {
  width: 200px;
  background-color: #2ecc71;
  transform: rotate(45deg);
}
```

En este caso, al pasar el cursor sobre la caja, se generan tres transiciones:
1. El ancho cambia de 100px a 200px en 0.5 segundos con una función de suavizado `ease`.
2. El color de fondo cambia de rojo a verde en 1 segundo, utilizando una función `ease-in-out`.
3. Se aplica una rotación de 45 grados con un retraso de 0.7 segundos y una función `ease-out` que desacelera al final.

##### **1.4. Rendimiento y buenas prácticas**

Las transiciones en CSS, cuando se usan correctamente, son extremadamente eficientes, ya que son gestionadas por el motor de renderizado del navegador y pueden aprovechar la aceleración por hardware en la GPU. Sin embargo, es importante tener en cuenta algunas recomendaciones para evitar problemas de rendimiento, especialmente en dispositivos con menos recursos (como dispositivos móviles o navegadores antiguos):

1. **Limitar las propiedades animadas**: Es preferible usar transiciones en propiedades que puedan ser optimizadas por la GPU, como `transform` y `opacity`. Propiedades como `left`, `top`, `height` y `width` suelen afectar el flujo del documento y pueden implicar recalculaciones costosas en el layout (repaint y reflow).

2. **Uso de `will-change`**: En casos donde se prevea una animación compleja o frecuente en ciertos elementos, se puede utilizar la propiedad `will-change` para advertir al navegador qué propiedades se van a modificar. Esto permite optimizar el rendimiento, aunque se debe usar con moderación ya que puede aumentar el uso de recursos.

    **Ejemplo**:
    ```css
    .animated-box {
      will-change: transform, opacity;
    }
    ```

3. **Evitar transiciones innecesarias**: Aplicar transiciones solo a los elementos y propiedades que realmente necesiten dinamismo. Transicionar muchas propiedades simultáneamente o sobrecargar el uso de transiciones en un sitio puede afectar negativamente la experiencia de usuario, especialmente en entornos de baja potencia.


---

### **2. Creación de Transiciones Básicas**

Las transiciones en CSS son una herramienta fundamental para mejorar la experiencia de usuario mediante la adición de efectos visuales suaves. Dos elementos clave en cualquier transición son **el tiempo** y **el efecto de suavizado** (o curva de tiempo). Estas características determinan cómo y cuándo una transición se lleva a cabo, lo que puede influir de manera significativa en la percepción de la interacción. Un uso adecuado de las transiciones puede mejorar la claridad visual y la interactividad de un sitio, proporcionando señales intuitivas al usuario sobre los cambios de estado de los elementos en la interfaz.

#### **2.1. Duración (`transition-duration`)**

La duración es un parámetro crucial en las transiciones. Define el tiempo que tarda la propiedad en ir de su valor inicial a su valor final. Este tiempo puede expresarse en segundos (`s`) o milisegundos (`ms`). La duración tiene un impacto directo en cómo percibe el usuario el cambio visual: una transición demasiado rápida puede pasar desapercibida, mientras que una demasiado lenta puede sentirse torpe o molesta. Encontrar el equilibrio adecuado es clave para ofrecer una experiencia fluida.

##### **Sintaxis**

```css
transition-duration: [valor];
```

Donde el valor puede expresarse en segundos (`s`) o milisegundos (`ms`). Por ejemplo, `0.5s` indica que la transición durará medio segundo.

##### **Ejemplo básico de duración**

```css
.element {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transition: width 0.5s;
}

.element:hover {
  width: 200px;
}
```

En este ejemplo, el `div` cambia su ancho de 100px a 200px cuando el usuario coloca el cursor sobre el elemento. La transición dura 0.5 segundos, lo que produce un efecto suave y gradual en lugar de un cambio brusco. El tiempo de transición debe ajustarse en función del contexto: si la animación involucra un pequeño cambio visual, un tiempo corto puede ser más apropiado, mientras que transiciones más complejas pueden requerir una duración mayor.

##### **Consideraciones para definir la duración**

- **Duraciones cortas (menos de 0.2s)**: Son útiles para pequeñas interacciones o efectos que deben pasar rápidamente, como el cambio de color de un botón al pasar el ratón.
- **Duraciones medias (0.3s a 0.5s)**: Ideales para la mayoría de las interacciones, ofreciendo un equilibrio entre rapidez y visibilidad.
- **Duraciones largas (más de 0.5s)**: Se emplean en transiciones donde el cambio debe percibirse de manera lenta o deliberada, como una animación de deslizamiento o una transformación compleja de varios elementos.

#### **2.2. Función de Timing (`transition-timing-function`)**

La **función de temporización** controla la velocidad en la que una transición progresa a lo largo de su duración. En otras palabras, define cómo la propiedad va cambiando de un estado a otro a lo largo del tiempo. Sin este parámetro, las transiciones ocurrirían a una velocidad constante, lo cual puede no ser ideal en ciertos contextos visuales.

CSS proporciona varias funciones predefinidas para controlar el "ritmo" de la transición, además de la posibilidad de crear curvas personalizadas usando la función `cubic-bezier`.

##### **Principales funciones de temporización**

- **`ease`**: Es la opción por defecto. Inicia la transición lentamente, acelera en el medio y desacelera al final. Es útil para la mayoría de las interacciones, ya que simula una transición más natural.
  
  **Ejemplo**:
  ```css
  .element {
    transition-timing-function: ease;
  }
  ```

- **`linear`**: Mantiene una velocidad constante desde el inicio hasta el final. Se utiliza cuando es necesario que el cambio sea uniforme en todo el proceso.

  **Ejemplo**:
  ```css
  .element {
    transition-timing-function: linear;
  }
  ```

- **`ease-in`**: Comienza lentamente y luego acelera. Esta función es útil cuando se quiere dar la impresión de un arranque gradual, como en el caso de un objeto que se mueve desde una posición en reposo.

  **Ejemplo**:
  ```css
  .element {
    transition-timing-function: ease-in;
  }
  ```

- **`ease-out`**: Comienza rápidamente y luego desacelera hacia el final. Es ideal para situaciones en las que un elemento debe detenerse de manera suave, como un botón que cambia de color al hacer clic.

  **Ejemplo**:
  ```css
  .element {
    transition-timing-function: ease-out;
  }
  ```

- **`ease-in-out`**: Combina ambos efectos, comenzando lentamente, acelerando en el medio, y desacelerando hacia el final. Es ideal para transiciones que deben ser más fluidas y naturales.

  **Ejemplo**:
  ```css
  .element {
    transition-timing-function: ease-in-out;
  }
  ```

##### **Curvas personalizadas (`cubic-bezier`)**

CSS también permite definir transiciones personalizadas usando la función `cubic-bezier`, la cual se basa en un sistema de coordenadas que determina la velocidad de la transición en diferentes puntos de tiempo. Una curva `cubic-bezier` se define con cuatro valores, los dos primeros definen el punto de control inicial, y los dos últimos, el punto de control final.

```css
transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
```

En este ejemplo, se crea una curva que emula el comportamiento de `ease-in-out`, pero puede personalizarse para ajustar la aceleración o desaceleración según el caso.

##### **Ejemplo de transición con `ease-in-out`**

```css
.box {
  width: 100px;
  height: 100px;
  background-color: #e74c3c;
  transition: transform 1s ease-in-out;
}

.box:hover {
  transform: rotate(45deg);
}
```

En este ejemplo, el elemento gira 45 grados sobre su eje Z cuando el usuario pasa el ratón sobre él. La función `ease-in-out` asegura que la transición comience lenta, acelere en el medio y desacelere hacia el final, proporcionando una sensación fluida y controlada.

#### **2.3. Retraso (`transition-delay`)**

El parámetro `transition-delay` define el tiempo que se espera antes de que comience una transición después de que se active. Se puede usar para sincronizar efectos entre diferentes elementos, o para crear una expectativa visual en el usuario antes de que ocurra un cambio.

##### **Sintaxis**

```css
transition-delay: [valor];
```

El valor puede expresarse en segundos (`s`) o milisegundos (`ms`). Un valor de `0s` indica que la transición comienza inmediatamente.

##### **Ejemplo básico de uso de `transition-delay`**

```css
.card {
  width: 200px;
  height: 200px;
  background-color: #f1c40f;
  transition: background-color 1s ease, transform 1s ease 0.5s;
}

.card:hover {
  background-color: #e67e22;
  transform: rotate(10deg);
}
```

En este ejemplo, la tarjeta cambia de color inmediatamente al activarse el estado `hover`, pero la rotación de 10 grados ocurre con un retraso de 0.5 segundos. Este uso de `transition-delay` crea un efecto visual secuencial, en el que el color cambia primero y luego el movimiento ocurre más tarde.

##### **Consideraciones al usar `transition-delay`**

- **Efecto de anticipación**: Un pequeño retraso puede crear una sensación de expectativa en el usuario, haciendo que la transición sea más interesante o interactiva. Por ejemplo, un botón que cambia de color inmediatamente pero cuyo tamaño se ajusta después de un breve retraso.
- **Sincronización de múltiples efectos**: En diseños complejos, `transition-delay` es útil para coordinar efectos de animación entre varios elementos. Por ejemplo, en un menú desplegable, los elementos pueden aparecer de forma escalonada, proporcionando una sensación de fluidez.

##### **Ejemplo avanzado**

```css
.button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease 0.1s;
}

.button:hover {
  background-color: #2ecc71;
  transform: scale(1.1);
}
```

En este ejemplo, cuando el usuario pasa el ratón sobre el botón, el color de fondo cambia inmediatamente, pero el botón crece ligeramente (`scale(1.1)`) con un retraso de 0.1 segundos, creando una sensación visual de "rebote" suave.

---

### **3. Animaciones en CSS**

Las **animaciones en CSS** son una poderosa herramienta que permite crear efectos visuales avanzados y controlar de manera precisa el comportamiento de los elementos a lo largo del tiempo. A diferencia de las transiciones, que son limitadas a los cambios entre dos estados (por ejemplo, `hover` y `normal`), las animaciones permiten definir múltiples etapas o frames en los que una propiedad CSS puede cambiar progresivamente. Esto las convierte en la opción ideal para crear secuencias complejas y ciclos de animación que pueden repetirse indefinidamente o ejecutarse una única vez.

Una de las características más importantes de las animaciones en CSS es que se pueden ejecutar de forma automática, sin la necesidad de una interacción del usuario, lo que las hace útiles para animaciones como loaders, sliders, carouseles de imágenes, y mucho más.

#### **3.1. La regla `@keyframes`**

La regla `@keyframes` es fundamental en la definición de una animación en CSS. Con `@keyframes`, se describe cómo deben evolucionar las propiedades de un elemento durante la duración de la animación. En lugar de cambiar de un estado inicial a un estado final, como ocurre en las transiciones, con `@keyframes` podemos definir múltiples etapas o "frames" intermedios para una propiedad.

Cada punto clave en una animación se define mediante porcentajes, donde `0%` representa el inicio de la animación y `100%` su final. También es posible usar palabras clave como `from` (equivalente a `0%`) y `to` (equivalente a `100%`), aunque los porcentajes proporcionan mayor control y flexibilidad al permitir la creación de animaciones complejas que involucren múltiples estados.

##### **Ejemplo básico con `@keyframes`**

```css
@keyframes move {
  0% { transform: translateX(0); }
  50% { transform: translateX(100px); }
  100% { transform: translateX(0); }
}

.moving-element {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  animation: move 2s infinite;
}
```

En este ejemplo, la regla `@keyframes` define un movimiento horizontal del elemento. El elemento comienza en su posición original (`0%`), se desplaza 100px a la derecha cuando alcanza el 50% del tiempo de animación, y regresa a su posición original al final (`100%`). Esta animación se ejecuta en un ciclo infinito, repetido cada 2 segundos.

##### **Estructura de `@keyframes`**
La regla `@keyframes` sigue la siguiente estructura general:

```css
@keyframes nombre_animacion {
  0% { propiedad: valor_inicial; }
  50% { propiedad: valor_mitad; }
  100% { propiedad: valor_final; }
}
```

El cuerpo de `@keyframes` incluye las declaraciones de propiedad-valor en diferentes porcentajes de progreso de la animación. A medida que el tiempo avanza en la duración total de la animación, CSS interpola los valores de las propiedades especificadas entre los porcentajes definidos.

##### **Interpolación de propiedades**

No todas las propiedades CSS pueden ser animadas con la misma fluidez, ya que algunas no admiten interpolación. Las propiedades que se pueden interpolar de manera continua, como `color`, `background-color`, `opacity`, `transform`, `width` y `height`, permiten cambios graduales entre dos valores. Otras propiedades, como `display`, no son interpolables, lo que significa que no pueden ser animadas a través de `@keyframes`.

##### **Uso avanzado de `@keyframes` con múltiples propiedades**

Se pueden definir múltiples propiedades dentro de un solo `@keyframes` para crear efectos más complejos. Por ejemplo, podemos cambiar el tamaño, la posición y el color de un elemento a lo largo de una animación.

```css
@keyframes complex-animation {
  0% {
    background-color: #3498db;
    transform: translateX(0) scale(1);
    opacity: 1;
  }
  50% {
    background-color: #e74c3c;
    transform: translateX(150px) scale(1.5);
    opacity: 0.5;
  }
  100% {
    background-color: #2ecc71;
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}

.complex-element {
  animation: complex-animation 3s infinite;
}
```

En este caso, la animación cambia el color de fondo, la posición y el tamaño del elemento, además de modificar su opacidad durante los 3 segundos de duración. Estos cambios se repiten de manera indefinida.

---

#### **3.2. Propiedades de animación**

El comportamiento de una animación en CSS se controla mediante la propiedad `animation`, que es un shorthand que agrupa varias propiedades individuales que determinan cómo, cuándo y en qué dirección se ejecutará la animación.

##### **Propiedades clave de `animation`**

1. **`animation-name`**: El nombre de la animación que hace referencia a un bloque `@keyframes` previamente definido.

    ```css
    animation-name: bounce;
    ```

2. **`animation-duration`**: La duración total de la animación. Se puede especificar en segundos (`s`) o milisegundos (`ms`).

    ```css
    animation-duration: 1s;
    ```

3. **`animation-timing-function`**: Controla cómo se distribuye el tiempo de la animación. Funciona de manera similar a `transition-timing-function`, con valores como `ease`, `linear`, `ease-in`, `ease-out` y `cubic-bezier` para crear curvas personalizadas.

    ```css
    animation-timing-function: ease-in-out;
    ```

4. **`animation-delay`**: Especifica el tiempo que debe esperar antes de comenzar la animación. También se puede definir en segundos o milisegundos.

    ```css
    animation-delay: 0.5s;
    ```

5. **`animation-iteration-count`**: Define cuántas veces se ejecutará la animación. El valor `infinite` se utiliza para animaciones en bucle.

    ```css
    animation-iteration-count: infinite;
    ```

6. **`animation-direction`**: Define la dirección en la que se ejecuta la animación. Puede tomar los siguientes valores:
   - **`normal`**: La animación se ejecuta de manera estándar desde el 0% hasta el 100%.
   - **`reverse`**: La animación se ejecuta de manera inversa desde el 100% hasta el 0%.
   - **`alternate`**: La animación alterna entre ejecutar de adelante hacia atrás y de atrás hacia adelante.
   - **`alternate-reverse`**: Similar a `alternate`, pero comienza en reversa.

    ```css
    animation-direction: alternate;
    ```

7. **`animation-fill-mode`**: Determina qué estilos se aplican al elemento antes y después de que la animación se ejecute. Los valores incluyen:
   - **`none`**: No aplica ningún estilo fuera del tiempo de la animación.
   - **`forwards`**: Mantiene el estado final de la animación cuando esta termina.
   - **`backwards`**: Aplica el primer estado de la animación desde el inicio, incluso durante el período de retraso.
   - **`both`**: Combina `forwards` y `backwards`, aplicando el primer y el último estado de la animación.

    ```css
    animation-fill-mode: forwards;
    ```

8. **`animation-play-state`**: Controla si la animación está corriendo o en pausa. Se puede alternar entre los valores `running` y `paused`.

    ```css
    animation-play-state: paused;
    ```

##### **Ejemplo completo de animación con varias propiedades**

```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
}

.bouncing-box {
  width: 100px;
  height: 100px;
  background-color: #e74c3c;
  animation: bounce 1s infinite alternate ease-in-out;
}
```

En este ejemplo, la animación de rebote hace que el elemento suba y baje indefinidamente, alternando direcciones con una curva de temporización `ease-in-out` para suavizar el inicio y el fin de cada ciclo de animación.

---

#### **3.3. Control avanzado de animaciones**

Además de los controles básicos proporcionados por las propiedades `animation`, CSS permite el manejo avanzado de animaciones para casos de uso más complejos. Algunos de estos controles avanzados incluyen la creación de animaciones basadas en eventos, la sincronización de varias animaciones y la manipulación de animaciones mediante JavaScript.

##### **Animaciones basadas en eventos**

Se puede usar la propiedad `animation-play-state` en combinación con eventos para pausar o reanudar una animación. Esto es útil para crear animaciones que reaccionen a la interacción del usuario, como un efecto de hover que detenga una animación en un punto específico.

```css
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(

360deg);
  }
}

.rotating-element {
  animation: rotate 2s infinite linear;
}

.rotating-element:hover {
  animation-play-state: paused;
}
```

En este caso, la animación de rotación continúa indefinidamente hasta que el usuario pasa el cursor sobre el elemento, lo que detiene la animación temporalmente.

##### **Animación sincronizada con múltiples elementos**

CSS también permite sincronizar varias animaciones para que diferentes elementos se animen en secuencia o simultáneamente. Esto es útil para interfaces más complejas donde diferentes partes de la interfaz requieren estar en sincronía visual.

```css
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slide-in {
  0% { transform: translateX(-100px); }
  100% { transform: translateX(0); }
}

.element-one {
  animation: fade-in 1s forwards;
}

.element-two {
  animation: slide-in 1s 0.5s forwards; /* Inicia después de 0.5s */
}
```

En este ejemplo, el primer elemento se desvanece (`fade-in`) durante 1 segundo, mientras que el segundo elemento se desliza desde la izquierda (`slide-in`) con un retraso de 0.5 segundos. Esto permite crear animaciones secuenciales que mejoran la percepción de orden y continuidad visual.


---

### **4. Propiedades Avanzadas de Animación**

Las animaciones en CSS no solo permiten crear transiciones visuales entre diferentes estados de un elemento, sino que también ofrecen un nivel avanzado de control sobre cómo, cuándo y en qué condiciones se ejecutan. Existen varias propiedades avanzadas de animación que proporcionan una mayor personalización y flexibilidad, permitiendo a los desarrolladores definir comportamientos complejos y optimizar las animaciones para mejorar la experiencia del usuario.

#### **4.1. `animation-fill-mode`**

La propiedad **`animation-fill-mode`** define cómo se comportará un elemento animado **antes** y **después** de que se ejecute la animación. Por defecto, una animación solo afecta a un elemento mientras está en ejecución. Cuando termina, el estilo del elemento vuelve a su estado original, lo que puede dar lugar a una experiencia visual inconsistente o poco natural. `animation-fill-mode` soluciona este problema al especificar qué estilos deben aplicarse al elemento fuera de los intervalos de la animación, es decir, antes de que comience y después de que termine.

##### **Valores de `animation-fill-mode`**

1. **`none`** (valor por defecto):
   - No se aplica ningún estilo relacionado con la animación antes de que comience o después de que termine. El elemento retorna a su estado original una vez finalizada la animación.
   - Uso: Este valor es útil cuando no es necesario mantener el estilo aplicado por la animación y se prefiere que el elemento vuelva a su configuración original.

   ```css
   .example {
     animation-fill-mode: none;
   }
   ```

2. **`forwards`**:
   - Al final de la animación, el elemento retiene los estilos del último keyframe definido en `@keyframes`. Es ideal cuando el estado final del elemento es parte del diseño deseado, y no se quiere que el elemento vuelva a su estado inicial.
   - Uso: `forwards` se utiliza cuando la animación finaliza en un estado que queremos conservar, como en el caso de un menú desplegable que debe mantenerse visible después de haberse desplegado.

   ```css
   .example {
     animation-fill-mode: forwards;
   }
   ```

3. **`backwards`**:
   - Este valor aplica los estilos del primer keyframe desde el inicio de la animación, incluso **antes** de que comience su ejecución. Es útil para asegurar que el estilo inicial se aplique inmediatamente, incluso si la animación tiene un `delay`.
   - Uso: `backwards` se utiliza principalmente en animaciones con un retraso (`animation-delay`). Por ejemplo, si un elemento tiene un `delay` antes de animarse, `backwards` garantiza que adopte el estilo del primer keyframe inmediatamente, en lugar de esperar hasta que comience la animación.

   ```css
   .example {
     animation-fill-mode: backwards;
   }
   ```

4. **`both`**:
   - Combina el comportamiento de `forwards` y `backwards`. Esto significa que el elemento adopta los estilos del primer keyframe antes de que comience la animación (si hay un retraso) y mantiene los estilos del último keyframe después de que la animación finaliza. Es la opción más completa y comúnmente usada cuando se necesita controlar los estilos durante todo el ciclo de vida de la animación.
   - Uso: `both` se utiliza cuando es necesario asegurar que el estilo del elemento refleje el estado inicial y final de la animación, tanto antes como después de su ejecución.

   ```css
   .example {
     animation-fill-mode: both;
   }
   ```

##### **Ejemplo Práctico con `animation-fill-mode`**

Supongamos que tenemos un elemento que necesita desvanecerse para aparecer en pantalla y queremos que su opacidad final se mantenga una vez que la animación haya terminado. Si no aplicamos `animation-fill-mode: forwards;`, el elemento volvería a su estado inicial (es decir, opacidad 0) después de completarse la animación, lo que no es deseable.

```css
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.fade-in-element {
  opacity: 0;
  animation: fadeIn 2s forwards;
}
```

En este ejemplo:

- La animación de `fadeIn` hace que el elemento pase de una opacidad de `0` (completamente transparente) a `1` (completamente visible) en 2 segundos.
- El valor de `animation-fill-mode: forwards;` asegura que, una vez que la animación termine, el elemento permanezca visible con `opacity: 1`.

Si no hubiéramos usado `forwards`, el elemento volvería a su opacidad original (`0`) al finalizar la animación, lo cual podría generar confusión en el usuario.

##### **Usos comunes de `animation-fill-mode`**

1. **Carga de contenido**: Cuando se animan elementos que deben permanecer visibles una vez que la animación finalice, como un modal o un tooltip que aparece en pantalla.
2. **Interfaces que cambian de estado**: Por ejemplo, en animaciones de apertura o cierre de menús o paneles, donde se necesita que el estado final (abierto o cerrado) se mantenga una vez completada la animación.
3. **Animaciones con retraso**: `backwards` se utiliza en combinación con `animation-delay` para evitar un estado visual inconsistente antes de que comience la animación.

#### **4.2. `animation-direction`**

La propiedad **`animation-direction`** permite definir la dirección en la que se ejecuta la animación. Este control es útil cuando queremos alternar entre dos direcciones de animación (por ejemplo, de izquierda a derecha y luego de derecha a izquierda) o simplemente invertir la dirección de la animación una vez que ha sido completada.

##### **Valores de `animation-direction`**

1. **`normal`** (valor por defecto):
   - La animación se ejecuta en el orden especificado en `@keyframes`, desde `0%` hasta `100%`. Este es el comportamiento estándar.

   ```css
   .example {
     animation-direction: normal;
   }
   ```

2. **`reverse`**:
   - La animación se ejecuta en el sentido inverso, es decir, desde `100%` hasta `0%`. Es útil cuando se desea que un elemento vuelva a su estado original siguiendo el camino opuesto al de la animación inicial.

   ```css
   .example {
     animation-direction: reverse;
   }
   ```

3. **`alternate`**:
   - Alterna la dirección de la animación en cada ciclo. En el primer ciclo, la animación sigue la dirección normal (`0%` a `100%`), pero en el segundo ciclo se ejecuta en sentido inverso (`100%` a `0%`), y así sucesivamente. Esto es ideal para animaciones de ida y vuelta, como un elemento que se balancea o rebota.

   ```css
   .example {
     animation-direction: alternate;
   }
   ```

4. **`alternate-reverse`**:
   - Similar a `alternate`, pero el primer ciclo de la animación comienza en la dirección inversa (`100%` a `0%`) y luego alterna hacia adelante (`0%` a `100%`) en el siguiente ciclo.

   ```css
   .example {
     animation-direction: alternate-reverse;
   }
   ```

##### **Ejemplo Práctico con `animation-direction`**

En este ejemplo, creamos una animación que alterna entre dos direcciones usando `alternate`, lo que permite que el elemento se mueva de un lado a otro de la pantalla indefinidamente.

```css
@keyframes move {
  0% { transform: translateX(0); }
  100% { transform: translateX(200px); }
}

.moving-box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  animation: move 3s infinite alternate;
}
```

- En este caso, el elemento `moving-box` se mueve de su posición original (0px) a 200px en 3 segundos. 
- Gracias a `animation-direction: alternate;`, la animación se ejecuta de ida en el primer ciclo y de vuelta en el segundo ciclo, repitiéndose indefinidamente.

Este patrón de animación es útil para efectos repetitivos donde el comportamiento debe alternarse entre dos estados, como una pelota que rebota o un carrusel que se desliza hacia adelante y luego hacia atrás.

#### **4.3. `animation-play-state`**

La propiedad **`animation-play-state`** permite controlar si una animación está en ejecución o pausada. Esto es especialmente útil en escenarios donde se desea pausar o reanudar una animación en función de la interacción del usuario, como en efectos `hover` o en combinación con eventos de JavaScript.

##### **Valores de `animation-play-state`**

1. **`running`** (valor por defecto):
   - La animación está en ejecución. Este es el comportamiento normal.

   ```css
   .example {
     animation-play-state: running;
   }
   ```

2. **`paused`**:
   - La animación está pausada. En este estado, la animación se detiene en el punto exacto donde se encuentra y se reanuda desde ese mismo punto cuando se cambia el valor a `running`.

   ```css
   .example{
     animation-play-state: paused;
   }
   ```

##### **Ejemplo práctico con `animation-play-state`**

Este ejemplo muestra cómo usar `animation-play-state` para pausar y reanudar una animación en función de la interacción del usuario.

```css
@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.rotating-element {
  animation: rotate 5s infinite linear;
}

.rotating-element:hover {
  animation-play-state: paused;
}
```

En este caso, el elemento `rotating-element` gira indefinidamente, pero cuando el usuario pasa el cursor sobre él, la animación se detiene gracias a `animation-play-state: paused;`. Una vez que el cursor se retira, la animación continúa desde el punto donde se pausó.

---

### **5. Aplicación de Animaciones a Componentes Web**

Las animaciones en CSS tienen un impacto significativo en la creación de interfaces web modernas. No solo contribuyen a la estética visual de una página, sino que también mejoran la **usabilidad**, la **navegabilidad** y la **experiencia de usuario**. Mediante el uso de animaciones, los desarrolladores pueden comunicar cambios en el estado de la interfaz de manera fluida, guiar la atención del usuario a elementos clave, y proporcionar feedback inmediato sobre interacciones.

Las animaciones aplicadas correctamente pueden hacer que una interfaz sea más intuitiva y responda de forma más natural a las expectativas del usuario. Sin embargo, es importante recordar que las animaciones deben ser funcionales y no una distracción; su propósito es mejorar la interacción del usuario, no sobrecargar la página con efectos innecesarios. 

#### **5.1. Aplicaciones comunes de animaciones en componentes web**

Existen varios componentes y patrones de diseño que se benefician enormemente del uso de animaciones. A continuación, se describen algunas de las aplicaciones más comunes:

1. **Menús desplegables**:
   - Los menús desplegables son uno de los ejemplos más clásicos donde las animaciones añaden valor. Sin animación, un menú que aparece o desaparece instantáneamente puede sentirse abrupto. Con animación, se puede suavizar la transición de apertura y cierre, mejorando la fluidez del diseño y la accesibilidad del contenido.
   - Además, el uso de efectos de deslizamiento puede proporcionar una pista visual clara de que algo está ocurriendo, especialmente si el menú es parte de una navegación más compleja.
   
2. **Elementos de navegación con `hover`**:
   - Al interactuar con los elementos de navegación, ya sean botones o enlaces, las animaciones pueden proporcionar feedback inmediato, confirmando que el usuario ha seleccionado o está sobre un determinado elemento. Esto no solo mejora la estética, sino que también aporta claridad a la interacción.
   - Cambios suaves de color, deslizamientos de subrayado, o ampliaciones de los elementos pueden ser implementados utilizando animaciones que mejoren la accesibilidad.

3. **Sliders de contenido**:
   - Los sliders son una excelente forma de mostrar múltiples piezas de contenido en el mismo espacio sin saturar la pantalla. Animar el desplazamiento entre los distintos elementos dentro del slider puede mejorar la percepción de fluidez en la navegación entre el contenido.
   - Las animaciones de transición, como el deslizamiento de imágenes o la transición de texto, ayudan a que el cambio de un contenido a otro sea más natural y menos brusco, guiando la vista del usuario a lo que viene después.

4. **Galerías de imágenes con transiciones**:
   - Las galerías de imágenes pueden beneficiarse enormemente del uso de transiciones animadas. Al moverse de una imagen a otra, en lugar de un cambio instantáneo, una transición suave (como desvanecimiento o desplazamiento) puede hacer que el contenido sea más agradable y fácil de consumir.
   - Los efectos de zoom y el enfoque gradual también pueden añadir un elemento de profundidad a las imágenes, mejorando la experiencia visual en general.

#### **5.2. Ejemplo de animación en un menú desplegable**

Un componente típico en muchas interfaces web es el **menú desplegable**. Este es un componente clave en la navegación de muchos sitios, ya que permite ocultar y mostrar contenido de manera eficiente en términos de espacio. Sin embargo, mostrar y ocultar un menú sin animación puede dar la impresión de ser abrupto, mientras que añadir una animación de deslizamiento mejora la suavidad de la interacción.

##### **Implementación básica de un menú desplegable animado**

El siguiente ejemplo utiliza la propiedad `height` y la opacidad (`opacity`) para animar un menú que se despliega cuando se activa un evento, como `hover` o `click`. Este patrón es útil para menús de navegación que requieren una transición suave para ser desplegados y posteriormente ocultados.

```css
@keyframes slideDown {
  0% { 
    height: 0; 
    opacity: 0; 
  }
  100% { 
    height: 200px; 
    opacity: 1; 
  }
}

.menu {
  overflow: hidden;
  height: 0;
  background-color: #2980b9;
  transition: height 0.5s ease, opacity 0.5s ease;
}

.menu:hover {
  height: 200px;
  opacity: 1;
}
```

**Análisis del código**:

1. **`@keyframes slideDown`**:
   - Esta animación define dos etapas principales (`0%` y `100%`). En el estado inicial (`0%`), la altura es `0`, lo que hace que el menú esté completamente colapsado, y la opacidad también es `0`, lo que significa que es completamente invisible.
   - En el estado final (`100%`), la altura aumenta a `200px` y la opacidad a `1`, haciendo que el menú esté completamente desplegado y visible.

2. **Propiedades del menú**:
   - La propiedad `overflow: hidden;` asegura que el contenido dentro del menú no se desborde cuando su altura es `0`. 
   - Se utiliza `transition` para que las propiedades `height` y `opacity` cambien suavemente en un período de 0.5 segundos cuando el menú se despliega o se contrae.

3. **Estado `hover`**:
   - Cuando el usuario pasa el ratón sobre el menú (`:hover`), las propiedades `height` y `opacity` cambian a sus valores finales. Este cambio no es inmediato gracias a la transición que suaviza el proceso, proporcionando una experiencia visual más agradable.

##### **Uso avanzado con `animation-fill-mode`**

Para casos más avanzados, se puede mejorar la interacción usando la propiedad `animation-fill-mode` para controlar cómo se mantiene el estado del menú antes y después de la animación.

```css
@keyframes slideDown {
  0% { 
    height: 0; 
    opacity: 0; 
  }
  100% { 
    height: 200px; 
    opacity: 1; 
  }
}

.menu {
  overflow: hidden;
  height: 0;
  background-color: #2980b9;
  animation: slideDown 0.5s forwards;
}

.menu:hover {
  animation-play-state: running;
}
```

**Análisis del código mejorado**:

- En este caso, el menú utiliza `animation-fill-mode: forwards`, lo que significa que una vez que la animación se haya completado, el menú mantendrá su estado final (altura de `200px` y opacidad de `1`). Esto asegura que el menú permanezca desplegado hasta que ocurra un nuevo evento que lo cierre.
- Este patrón es particularmente útil cuando se necesitan animaciones más persistentes, como en menús o paneles que deben quedarse abiertos después de ser activados.

#### **5.3. Otras aplicaciones de animaciones en componentes**

Las animaciones no solo mejoran la estética de un sitio web, sino que también pueden ser una herramienta poderosa para mejorar la usabilidad. Aquí se detallan otras áreas clave donde las animaciones pueden aplicarse con éxito:

1. **Indicadores de carga (Loaders)**:
   - Los loaders o indicadores de carga son animaciones simples, generalmente circulares o lineales, que indican al usuario que el contenido está siendo cargado. Estas animaciones no solo mejoran la experiencia visual, sino que también proporcionan feedback visual inmediato sobre el estado de carga de la página o recurso.

   ```css
   @keyframes spin {
     0% { transform: rotate(0deg); }
     100% { transform: rotate(360deg); }
   }

   .loader {
     border: 4px solid #f3f3f3;
     border-top: 4px solid #3498db;
     border-radius: 50%;
     width: 40px;
     height: 40px;
     animation: spin 2s linear infinite;
   }
   ```

   - En este ejemplo, se crea un loader que gira indefinidamente utilizando una simple animación `@keyframes` que rota un círculo.

2. **Efectos de desplazamiento (Scroll animations)**:
   - Las animaciones que se activan cuando un usuario desplaza la página hacia abajo son populares en sitios con mucho contenido. Estas animaciones permiten que los elementos aparezcan de manera progresiva en la pantalla a medida que el usuario se desplaza, lo que no solo mejora la presentación del contenido, sino que también optimiza la carga de la página al renderizar elementos solo cuando son visibles.

   ```css
   @keyframes fadeInUp {
     0% { 
       opacity: 0; 
       transform: translateY(30px); 
     }
     100% { 
       opacity: 1; 
       transform: translateY(0); 
     }
   }

   .scroll-animation {
     opacity: 0;
     animation: fadeInUp 1s forwards;
   }
   ```

   - En este caso, la clase `scroll-animation` define un elemento que aparecerá deslizándose hacia arriba cuando se active la animación, lo que proporciona una transición visual atractiva para el contenido en movimiento.