const destinos = {
    'machu-picchu': {
        title: 'Machu Picchu',
        country: 'Perú · Sudamérica',
        img: 'https://picsum.photos/seed/machupicchu/1200/600',
        imgAlt: 'Vista panorámica de Machu Picchu al amanecer con niebla entre las montañas',
        galleryImg: 'https://picsum.photos/seed/machu2/800/450',
        galleryAlt: 'Detalle de la arquitectura inca en Machu Picchu',
        description: 'Machu Picchu es la joya de la corona del Imperio Inca, enclavada entre dos picos andinos a 2.430 metros de altitud. Declarada Patrimonio de la Humanidad por la UNESCO en 1983, esta ciudad sagrada deslumbra con su arquitectura sin mortero y sus terrazas escalonadas que parecen desafiar la gravedad.',
        highlights: [
            'Explorar la Puerta del Sol (Intipunku) al amanecer',
            'Trekking por el Camino Inca de 4 días',
            'Visitar el Templo del Sol y la Intihuatana',
            'Excursión a Huayna Picchu con vistas de vértigo',
            'Tour nocturno bajo el cielo estrellado andino',
        ],
        info: {
            'País': 'Perú',
            'Altitud': '2.430 msnm',
            'Mejor época': 'Abril – Octubre',
            'Duración recomendada': '2-3 días',
            'Dificultad': 'Moderada',
            'Moneda': 'Sol peruano (PEN)',
        }
    },
    'patagonia': {
        title: 'Patagonia',
        country: 'Argentina · Sudamérica',
        img: 'https://picsum.photos/seed/patagonia456/1200/600',
        imgAlt: 'Torres del Paine en la Patagonia bajo un cielo dramático con nubes',
        galleryImg: 'https://picsum.photos/seed/patagonia2/800/450',
        galleryAlt: 'Glaciar Perito Moreno desprendiendo bloques de hielo en el Lago Argentino',
        description: 'La Patagonia argentina es uno de los territorios más salvajes e intactos del planeta. Desde el Glaciar Perito Moreno hasta las Torres del Paine, pasando por la Ruta 40 y los lagos glaciares, este destino ofrece una experiencia de naturaleza extrema que redefine el concepto de aventura.',
        highlights: [
            'Navegación al glaciar Perito Moreno en El Calafate',
            'Trekking en el Parque Nacional Los Glaciares',
            'Avistamiento de pingüinos en Punta Tombo',
            'Ruta panorámica por la Carretera Austral',
            'Kayak entre iceberg en el lago Argentino',
        ],
        info: {
            'País': 'Argentina',
            'Temperatura': '-5°C a 15°C',
            'Mejor época': 'Noviembre – Marzo',
            'Duración recomendada': '7-10 días',
            'Dificultad': 'Exigente',
            'Moneda': 'Peso argentino (ARS)',
        }
    },
    'cartagena': {
        title: 'Cartagena de Indias',
        country: 'Colombia · Caribe',
        img: 'https://picsum.photos/seed/cartagena789/1200/600',
        imgAlt: 'Ciudad amurallada de Cartagena de Indias con casas coloniales de colores vibrantes',
        galleryImg: 'https://picsum.photos/seed/cartagena2/800/450',
        galleryAlt: 'Puesta de sol sobre las murallas coloniales de Cartagena con el Caribe al fondo',
        description: 'Cartagena de Indias es una ciudad donde el tiempo parece haberse detenido entre sus murallas del siglo XVI. Sus calles empedradas, balcones floridos y arquitectura colonial conservada impecablemente conviven con playas de aguas cristalinas, gastronomía caribeña explosiva y una vida nocturna vibrante.',
        highlights: [
            'Paseo por el casco histórico amurallado (Patrimonio UNESCO)',
            'Excursión a las Islas del Rosario con snorkel',
            'Tour gastronómico por el Getsemaní',
            'Atardecer en las Murallas con vista al Caribe',
            'Visita al Castillo de San Felipe de Barajas',
        ],
        info: {
            'País': 'Colombia',
            'Temperatura': '28-32°C',
            'Mejor época': 'Todo el año',
            'Duración recomendada': '3-5 días',
            'Dificultad': 'Fácil',
            'Moneda': 'Peso colombiano (COP)',
        }
    },
    'amazonas': {
        title: 'Amazonas',
        country: 'Brasil · Sudamérica',
        img: 'https://picsum.photos/seed/amazon101/1200/600',
        imgAlt: 'Vista aérea de la selva amazónica con el río Amazonas serpenteando entre los árboles',
        galleryImg: 'https://picsum.photos/seed/amazon2/800/450',
        galleryAlt: 'Fauna amazónica: guacamayo rojo posado en una palmera de la selva tropical',
        description: 'El Amazonas es el mayor sistema fluvial y forestal del planeta, hogar de más de 30.000 especies de plantas y 3.000 especies de peces. Una expedición por sus ríos y selvas es sumergirse en la biodiversidad más intensa del mundo, con comunidades indígenas, avistamiento de animales exóticos y noches estrelladas bajo el dosel forestal.',
        highlights: [
            'Avistamiento de delfines rosados en el río Negro',
            'Canopy walk sobre el dosel de la selva',
            'Pesca de pirañas con guías locales',
            'Visita a comunidades indígenas ribereñas',
            'Tour nocturno para ver caimanes y fauna nocturna',
        ],
        info: {
            'País': 'Brasil',
            'Temperatura': '25-35°C',
            'Mejor época': 'Junio – Noviembre',
            'Duración recomendada': '5-7 días',
            'Dificultad': 'Aventura',
            'Moneda': 'Real brasileño (BRL)',
        }
    },
    'uyuni': {
        title: 'Salar de Uyuni',
        country: 'Bolivia · Sudamérica',
        img: 'https://picsum.photos/seed/uyuni202/1200/600',
        imgAlt: 'Reflejo perfecto del cielo en el Salar de Uyuni durante la temporada de lluvias',
        galleryImg: 'https://picsum.photos/seed/uyuni2/800/450',
        galleryAlt: 'Cactus gigantes en la Isla Incahuasi en medio del Salar de Uyuni al atardecer',
        description: 'El Salar de Uyuni, con sus más de 10.000 km², es el mayor desierto de sal del mundo y uno de los paisajes más sobreales del planeta. En la temporada de lluvias, una fina lámina de agua convierte el salar en el espejo natural más grande de la Tierra, reflejando el cielo de manera perfecta.',
        highlights: [
            'Amanecer sobre el espejo de sal en temporada de lluvias',
            'Visita a la Isla Incahuasi con cactus centenarios',
            'Tour en 4x4 por los géiseres Sol de Mañana',
            'Stargazing nocturno con cielos despejados a 3.600m',
            'Lagunas de colores y flamencos en el altiplano',
        ],
        info: {
            'País': 'Bolivia',
            'Altitud': '3.656 msnm',
            'Mejor época': 'Enero – Marzo (con agua)',
            'Duración recomendada': '3-4 días',
            'Dificultad': 'Fácil',
            'Moneda': 'Boliviano (BOB)',
        }
    },
    'rio': {
        title: 'Río de Janeiro',
        country: 'Brasil · Sudamérica',
        img: 'https://picsum.photos/seed/rio303/1200/600',
        imgAlt: 'Vista panorámica de Río de Janeiro con el Cristo Redentor, la bahía de Guanabara y el Pan de Azúcar',
        galleryImg: 'https://picsum.photos/seed/rio2/800/450',
        galleryAlt: 'Playa de Ipanema al atardecer con la silueta de las montañas de Río de Janeiro',
        description: 'Río de Janeiro, la "Cidade Maravilhosa", seduce con la combinación única de montañas, bosque atlántico y playas urbanas icónicas. El Cristo Redentor, el Pan de Azúcar, Ipanema y el Carnaval más famoso del mundo hacen de esta ciudad un destino que entra por los ojos y se queda en el alma.',
        highlights: [
            'Subida al Cristo Redentor en el tren del Corcovado',
            'Teleférico al Pão de Açúcar al atardecer',
            'Tarde en las playas de Ipanema y Copacabana',
            'Samba en directo en el Lapa',
            'Visita a la favela Santa Marta con guía local',
        ],
        info: {
            'País': 'Brasil',
            'Temperatura': '22-30°C',
            'Mejor época': 'Mayo – Septiembre',
            'Duración recomendada': '4-6 días',
            'Dificultad': 'Fácil',
            'Moneda': 'Real brasileño (BRL)',
        }
    }
};

let lastTrigger = null;

function showDetail(id, trigger = null) {
  const d = destinos[id];
  if (!d) return;

  lastTrigger = trigger;

  document.getElementById('detail-title').textContent = d.title;
  document.getElementById('detail-country').textContent = d.country;

  const heroImg = document.getElementById('detail-hero-img');
  heroImg.setAttribute('src', d.img);
  heroImg.alt = d.imgAlt;

  document.getElementById('detail-description').textContent = d.description;

  const ul = document.getElementById('detail-highlights');
  ul.innerHTML = d.highlights.map(h => `<li>${h}</li>`).join('');

  const gallImg = document.getElementById('detail-gallery-img');
  gallImg.setAttribute('src', d.galleryImg);
  gallImg.alt = d.galleryAlt;

  const dl = document.getElementById('detail-info');
  dl.innerHTML = Object.entries(d.info).map(([k, v]) =>
    `<div class="info-row"><dt>${k}</dt><dd>${v}</dd></div>`
  ).join('');

  const pageMain = document.getElementById('page-main');
  const pageDetail = document.getElementById('page-detail');

  pageMain.style.display = 'none';
  pageMain.setAttribute('aria-hidden', 'true');

  pageDetail.style.display = 'block';
  pageDetail.setAttribute('aria-hidden', 'false');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('detail-title').focus();
}

function goBack() {
  const pageMain = document.getElementById('page-main');
  const pageDetail = document.getElementById('page-detail');

  pageDetail.style.display = 'none';
  pageDetail.setAttribute('aria-hidden', 'true');

  pageMain.style.display = 'block';
  pageMain.removeAttribute('aria-hidden');

  if (lastTrigger) {
    lastTrigger.focus();
  } else {
  const el = document.getElementById('destinos-titulo');
  if (el) {
    el.setAttribute('tabindex', '-1');
    el.focus();
    el.scrollIntoView({ behavior: 'smooth' });
  }
    }
}

function clearFieldErrors(form) {
  const fields = form.querySelectorAll('input, textarea');
  fields.forEach(field => field.removeAttribute('aria-invalid'));
}

function submitPostal(e) {
  e.preventDefault();

  const form = e.target;
  const errEl = document.getElementById('form-error');
  const successEl = document.getElementById('form-success');

  errEl.style.display = 'none';
  errEl.textContent = '';
  successEl.style.display = 'none';

  clearFieldErrors(form);

  const nombre = form['nombre-remitente'];
  const email = form['email-destinatario'];
  const mensaje = form['mensaje-postal'];
  const imagen = form.querySelector('input[name="imagen-postal"]:checked');

  if (!nombre.value.trim()) {
    errEl.textContent = 'Introduce tu nombre.';
    errEl.style.display = 'block';
    nombre.setAttribute('aria-invalid', 'true');
    nombre.focus();
    return;
  }

  const emailRE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    errEl.textContent = 'Introduce el email del destinatario.';
    errEl.style.display = 'block';
    email.setAttribute('aria-invalid', 'true');
    email.focus();
    return;
  }

  if (!emailRE.test(email.value.trim())) {
    errEl.textContent = 'Introduce un email válido.';
    errEl.style.display = 'block';
    email.setAttribute('aria-invalid', 'true');
    email.focus();
    return;
  }

  if (!mensaje.value.trim()) {
    errEl.textContent = 'Escribe un mensaje para la postal.';
    errEl.style.display = 'block';
    mensaje.setAttribute('aria-invalid', 'true');
    mensaje.focus();
    return;
  }

  if (!imagen) {
    errEl.textContent = 'Selecciona una imagen para la postal.';
    errEl.style.display = 'block';
    form.querySelector('input[name="imagen-postal"]').focus();
    return;
  }

  form.style.display = 'none';
  successEl.style.display = 'block';
  successEl.focus();
}