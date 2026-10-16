// Derecho y Justicia · interacciones del sitio (sin dependencias)

// Menú móvil
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

if (navToggle && nav) {
  const setOpen = (open) => {
    navToggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  };

  navToggle.addEventListener('click', () => {
    setOpen(navToggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      navToggle.focus();
    }
  });
}

// Video: el iframe de YouTube se carga solo cuando la persona hace clic
document.querySelectorAll('.video[data-video-id]').forEach((wrap) => {
  const trigger = wrap.querySelector('.video-trigger');
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      autoplay: '1',      // solo tras el clic de la persona
      rel: '0',
      cc_load_policy: '1', // subtítulos activados
      cc_lang_pref: 'es',
      hl: 'es',
    });
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${wrap.dataset.videoId}?${params}`;
    iframe.title = 'Video de presentación de Derecho y Justicia';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    wrap.replaceChildren(iframe);
    iframe.focus();
  });
});

// Formulario de contacto: no envía datos a ningún servidor, arma el mensaje y abre WhatsApp
const form = document.getElementById('contact-form');

// Enlaces de las áreas: llevan al formulario con el tema preseleccionado
document.querySelectorAll('[data-tema]').forEach((link) => {
  link.addEventListener('click', () => {
    const select = form?.elements.tema;
    if (select) select.value = link.dataset.tema;
  });
});

if (form) {
  const fields = () => form.querySelectorAll('input, select, textarea');

  // Mantiene aria-invalid sincronizado con el estado visual :user-invalid
  const syncAria = (el) => {
    if (!el.willValidate) return;
    if (el.matches(':user-invalid')) el.setAttribute('aria-invalid', 'true');
    else el.removeAttribute('aria-invalid');
  };
  form.addEventListener('blur', (e) => syncAria(e.target), true);
  form.addEventListener('input', (e) => {
    if (e.target.hasAttribute('aria-invalid')) syncAria(e.target);
  });
  form.addEventListener('change', (e) => syncAria(e.target));

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      // requestSubmit/submit marca los campos como :user-invalid; esperamos un frame para leerlo
      requestAnimationFrame(() => {
        fields().forEach((el) => {
          if (el.willValidate) el.toggleAttribute('aria-invalid', !el.checkValidity());
        });
        form.querySelector(':invalid')?.focus();
      });
      return;
    }

    const data = new FormData(form);
    const text = [
      `Hola, mi nombre es ${data.get('nombre').trim()}.`,
      `Tema: ${data.get('tema')}.`,
      `Prefiero una reunión ${data.get('modalidad')}.`,
      '',
      data.get('mensaje').trim(),
    ].join('\n');

    const url = `https://wa.me/${form.dataset.whatsapp}?text=${encodeURIComponent(text)}`;
    const link = Object.assign(document.createElement('a'), { href: url, target: '_blank', rel: 'noopener' });
    link.click();
  });
}

// Año del pie de página
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});
