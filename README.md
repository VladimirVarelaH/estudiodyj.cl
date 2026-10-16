# estudiodyj.cl

Sitio estático de Derecho y Justicia · Estudio Jurídico. HTML + CSS + JS sin dependencias ni build.

```
index.html          Portada, áreas, cómo trabajamos (+ FAQ), video, equipo, contacto
privacidad.html     Política de privacidad (Ley 19.628 / 21.719) y aviso legal — BORRADOR
assets/css/styles.css
assets/js/main.js   Menú móvil, video bajo demanda, formulario → WhatsApp
assets/img/         isotipo.svg y favicon.svg (extraídos del Manual de Marca), placeholder.png
```

Vista local: `python3 -m http.server` y abrir http://localhost:8000.

## Pendiente del cliente

Buscar `PLACEHOLDER` en los HTML. Además:

- **WhatsApp**: `56900000000` aparece en los enlaces `wa.me`, en `data-whatsapp` del formulario y en el JSON-LD. Lo mismo para `+56 9 0000 0000` en el texto visible.
- **Correos**: `contacto@estudiodyj.cl` y `privacidad@estudiodyj.cl`.
- **Equipo**: las fotos actuales son las de LinkedIn (provisorias, 400×400). Reemplazarlas por retratos de una misma sesión, de al menos 800 px. Formación y experiencia vienen de LinkedIn (oct. 2026): que ellos las validen. Confirmar el cargo "Socio/a fundador/a".
- **Imágenes**: foto de portada, retratos e imagen `og:image` de 1200×630.
- **Primera reunión**: confirmar si es gratuita o pagada (paso 01 de "Cómo trabajamos").
- **Áreas de práctica**: validar los temas y ejemplos de cada tarjeta.
- **Oficina y horario**: comuna/dirección y horario real.
- **Video**: hoy usa `IyIjYuF_HUo` (placeholder). Cambiar el id en `index.html` (atributo `data-video-id`, enlace y miniatura).
- **Privacidad / aviso legal**: razón social, RUT, domicilio, proveedores reales y plazos. Debe revisarlo el estudio antes de publicar.

## Notas

- El formulario no guarda datos: arma el mensaje y abre WhatsApp.
- El iframe de YouTube (`youtube-nocookie.com`) solo se carga al hacer clic. Los subtítulos vienen activados.
- Las tipografías se cargan desde Google Fonts. Para no enviar datos a terceros, se pueden alojar en el mismo sitio.
- Textos revisados según las reglas de publicidad del Código de Ética: no prometen resultados, no usan superlativos ni mencionan clientes.
