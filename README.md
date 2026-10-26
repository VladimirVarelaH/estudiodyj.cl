# estudiodyj.cl

Sitio estático de Derecho y Justicia · Estudio Jurídico. HTML, CSS y JS sin dependencias ni paso de build. Diseño según el Manual de Identidad Visual v1.0 (2026): paleta petróleo, marfil y cobre, Schibsted Grotesk + Jost, una línea de cobre fluida.

```
index.html          Portada, áreas de práctica, cómo trabajamos + preguntas frecuentes, video, equipo, contacto
privacidad.html     Política de privacidad (Ley 19.628, modificada por la Ley 21.719) y aviso legal
assets/css/styles.css
assets/js/main.js   Menú móvil, video bajo demanda, áreas → formulario, formulario → WhatsApp
assets/img/         Logo (isotipo.svg, favicon.svg), og-image.png, fotos de portada (tribunales-*) y del equipo
robots.txt, sitemap.xml
CNAME               Dominio de GitHub Pages (lo creó GitHub al configurar estudiodyj.cl)
resources/          Material de trabajo (manual de marca, originales). Ignorado por git
```

## Vista local y publicación

```sh
python3 -m http.server     # http://localhost:8000
```

Se publica en GitHub Pages desde la raíz de la rama `master`: cada `git push` actualiza https://estudiodyj.cl en uno o dos minutos. Antes de hacer push, `git pull --rebase` por si GitHub modificó `CNAME`. `.nojekyll` hace que los archivos se sirvan tal cual.

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

## Pendiente

1. **Revisión legal**: el estudio debe validar el texto completo de `privacidad.html`.
2. **Video de presentación** (previsto para la semana del 2 de noviembre de 2026): la sección `#conocenos` está comentada en `index.html`. Al publicarla, quitar el comentario y reemplazar el id provisorio `IyIjYuF_HUo` en sus tres apariciones (`data-video-id`, enlace y miniatura).
3. **Oficina**: la ubicación en Contacto también está comentada. Al mostrarla, debe coincidir con el domicilio de la política de privacidad (Grajales 2335, Santiago) o indicar dónde se atiende si es otro lugar.
4. **Google Search Console**: verificar el dominio y enviar `https://estudiodyj.cl/sitemap.xml` para que Google indexe el sitio más rápido. Al cambiar contenido, actualizar `<lastmod>` en `sitemap.xml`.

## Notas

- El formulario no guarda datos: arma el mensaje y abre WhatsApp. Pide aceptar la política de privacidad y advierte no incluir datos sensibles.
- Proveedores declarados en la política: WhatsApp (mensajería), Cloudflare (reenvío de correo), Gmail (correo) y GitHub Pages (alojamiento).
- Las tipografías se cargan desde Google Fonts. Para no enviar datos a terceros, se pueden alojar en el mismo sitio.
- Todo el sitio usa el trato de *usted*.
- Textos revisados según las reglas de publicidad del Código de Ética del Colegio de Abogados: no prometen resultados, no usan superlativos ni mencionan clientes.
