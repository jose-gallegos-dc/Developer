# DESIGN.md

CV en línea de José Gallegos, desarrollador web. El público principal son reclutadores
y empresas; la acción principal es contactar (correo o formulario). El tono es sobrio
y profesional: la jerarquía la dan la tipografía y el espacio, no la decoración.

## Tokens (`src/style.css`, `@theme`)

| Token | Valor | Uso |
|---|---|---|
| `paper` | `#fbfbfa` | Fondo general |
| `mist` | `#eef1f0` | Fondo de servicios y tarjeta del formulario |
| `ink` | `#15201d` | Titulares y texto principal; líneas en `ink/10` y `ink/20` |
| `ink-soft` | `#4a5753` | Texto secundario y etiquetas |
| `accent` | `#2337a6` | Único acento: rol, tipo de proyecto, enlaces, botón primario, foco |
| `accent-dark` | `#18277a` | Hover del botón primario |

## Tipografía

**Archivo**, familia única con eje de ancho (`wdth`):
- `.type-display`: `wdth 74`, peso 800. Solo para el nombre y los títulos de sección y de proyecto.
- `.type-label`: 0.75rem, mayúsculas, peso 600. Solo para términos de datos (`<dt>`, `<th>`).
- Texto corrido con ancho normal y una medida máxima de 65ch.

## Componentes

- **Datos clave**: listas de definición con filas separadas por líneas finas (hero, herramientas, contacto).
- **Proyectos**: captura grande con bordes redondeados y sombra suave, alternando lados en escritorio.
- **Servicios**: tabla (concepto, descripción, incluye) que se apila en móvil.
- **Botón primario**: `accent` sólido con `rounded-md`.
- **Campos**: borde `ink/20`, fondo blanco; en foco, borde `accent` y anillo `accent/20`.

## Movimiento

Discreto, con curvas `expo.out` y duraciones cortas. Todo es visible por defecto y se
desactiva con `prefers-reduced-motion`.

- **Hero:** entrada escalonada al cargar (`.rise`, solo CSS).
- **Scroll (GSAP + ScrollTrigger, `src/composables/useReveal.js`):** `data-reveal` sube
  24px y aparece; los elementos que entran juntos se escalonan 0.08s.
  `data-reveal-image` descubre las capturas de proyectos desde un recorte y las asienta.
  Cada elemento se anima una sola vez.
- **Cabecera:** gana sombra al dejar la parte superior (`data-scroll-shadow`).
- **Botón primario (`.btn-primary`):** se eleva 2px con sombra azul al pasar el cursor y
  cede al presionarlo. El color de hover va como clase (`hover:bg-accent-dark`), porque
  los utilities de Tailwind tienen prioridad sobre la capa de componentes.
- **Enlace secundario (`.link-grow`):** el subrayado se dibuja de izquierda a derecha.
- **Proyectos:** al pasar el cursor, la captura crece 2% y la sombra se profundiza.
- **Menú móvil y envío del formulario:** transiciones de Vue (`menu`, `swap`); el check de
  confirmación aparece con un pequeño rebote.

## Lo que no se usa

Etiquetas encima de los títulos, números de sección, tarjetas iguales con ícono,
filas de métricas grandes, degradados, brillos, neón, monoespaciada decorativa y
muros de logos.
