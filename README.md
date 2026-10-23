# estudiodyj.cl

Sitio estático de Derecho y Justicia · Estudio Jurídico. HTML, CSS y JS sin dependencias ni paso de build. Diseño según el Manual de Identidad Visual v1.0 (2026): paleta petróleo, marfil y cobre, Schibsted Grotesk + Jost, una línea de cobre fluida.

```
index.html          Portada, áreas de práctica, cómo trabajamos + preguntas frecuentes, video, equipo, contacto
privacidad.html     Política de privacidad (Ley 19.628, modificada por la Ley 21.719) y aviso legal
assets/css/styles.css
assets/js/main.js   Menú móvil, video bajo demanda, áreas → formulario, formulario → WhatsApp
assets/img/         Logo (isotipo.svg, favicon.svg), og-image.png, fotos de portada (tribunales-*) y del equipo
resources/          Material de trabajo (manual de marca, originales). Ignorado por git
```

## Vista local y publicación

```sh
python3 -m http.server     # http://localhost:8000
```

Se publica en GitHub Pages desde la raíz de la rama `master`: cada `git push` actualiza https://vladimirvarelah.github.io/estudiodyj.cl/ en uno o dos minutos. `.nojekyll` hace que los archivos se sirvan tal cual.

## Cómo editar lo más común

- **Teléfono de WhatsApp** (`56989190133`): enlaces `wa.me` de ambas páginas, `data-whatsapp` del formulario, `telephone` del JSON-LD y el número visible en Contacto.
- **Áreas de práctica**: cada tarjeta en `#areas` tiene un enlace con `data-tema="…"`, que debe coincidir con una `<option>` del campo Tema del formulario. Al agregar o renombrar un área, hay que actualizar las dos cosas.
- **Fotos del equipo**: se sirven en WebP a varios anchos con la JPEG original como respaldo. Para reemplazar una foto:
  ```sh
  cd assets/img
  for w in 480 800 1200 1600; do convert foto.jpg -resize ${w}x -strip -quality 80 nombre-$w.webp; done
  ```
  El atributo `style="--focus-x: 43%"` del `<img>` centra el recorte en el rostro.
- **Video**: el id de YouTube aparece tres veces en `index.html` (`data-video-id`, el enlace y la miniatura). El iframe solo se carga al hacer clic, en `youtube-nocookie.com` y con subtítulos activados.
- **Imagen para redes** (`og-image.png`, 1200×630): logo vertical centrado, para que sobreviva al recorte cuadrado de WhatsApp.

## Antes de lanzar

1. **Quitar `noindex`**: ambas páginas llevan `<meta name="robots" content="noindex">` mientras el sitio sea vista previa.
2. **Conectar el dominio**: crear registros `A` hacia 185.199.108.153, 185.199.109.153, 185.199.110.153 y 185.199.111.153, y luego:
   ```sh
   gh api -X PUT repos/VladimirVarelaH/estudiodyj.cl/pages -f cname=estudiodyj.cl
   ```
   Activar HTTPS en la configuración de Pages. `canonical`, `og:url` y `og:image` ya apuntan a `https://estudiodyj.cl/`, así que las vistas previas al compartir solo funcionarán con el dominio conectado.
3. **Revisión legal**: el estudio debe validar el texto completo de `privacidad.html`.
4. **Secciones ocultas**: el video de presentación (`#conocenos`) y la ubicación de la oficina en Contacto están comentados en `index.html`. Al reactivar el video, reemplazar el id provisorio `IyIjYuF_HUo`. La oficina debe coincidir con el domicilio de la política de privacidad, o indicar dónde se atiende si es otro lugar.

## Notas

- El formulario no guarda datos: arma el mensaje y abre WhatsApp. Pide aceptar la política de privacidad y advierte no incluir datos sensibles.
- Proveedores declarados en la política: WhatsApp (mensajería), Cloudflare (reenvío de correo), Gmail (correo) y GitHub Pages (alojamiento).
- Las tipografías se cargan desde Google Fonts. Para no enviar datos a terceros, se pueden alojar en el mismo sitio.
- Todo el sitio usa el trato de *usted*.
- Textos revisados según las reglas de publicidad del Código de Ética del Colegio de Abogados: no prometen resultados, no usan superlativos ni mencionan clientes.
