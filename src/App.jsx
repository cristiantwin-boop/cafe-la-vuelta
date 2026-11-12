import { useEffect, useState } from 'react';

const menuItems = [
  {
    number: '01',
    title: 'Café con historia',
    description: 'Espresso de tueste local, notas de cacao y avellana. Solo, con leche o como más te guste.',
    price: 'desde 1,80 €',
    image: '/images/coffee.jpg',
    alt: 'Taza de café con leche y arte latte',
    tag: 'El de siempre',
  },
  {
    number: '02',
    title: 'Algo rico para picar',
    description: 'Bollería horneada cada mañana, tostadas de pan de masa madre y dulces que saben a domingo.',
    price: 'desde 2,50 €',
    image: '/images/pastry.jpg',
    alt: 'Croissants artesanos recién horneados',
    tag: 'Recién horneado',
  },
  {
    number: '03',
    title: 'Desayunos sin prisa',
    description: 'Huevos, yogur con fruta, tostadas y zumo natural. Buenos días que empiezan aún mejor.',
    price: 'desde 5,90 €',
    image: '/images/breakfast.jpg',
    alt: 'Desayuno con tostada, huevo y café',
    tag: 'Hasta las 13 h',
  },
];

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    diagonal: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    menu: <><path d="M4 8h16M4 16h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Flower({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path d="M40 4v72M4 40h72M14.5 14.5l51 51M65.5 14.5l-51 51" stroke="currentColor" strokeWidth="2" />
      <circle cx="40" cy="40" r="9" fill="currentColor" />
    </svg>
  );
}

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Café La Vuelta, volver al inicio">
      <span className="brand-mark"><span>LV</span></span>
      <span className="brand-name">Café<br /><em>La Vuelta</em></span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <header className="site-header">
      <Brand />
      <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Navegación principal">
        <a href="#carta" onClick={() => setOpen(false)}>La carta</a>
        <a href="#historia" onClick={() => setOpen(false)}>Nuestra historia</a>
        <a href="#visitanos" onClick={() => setOpen(false)}>Visítanos</a>
        <a className="nav-contact" href="#contacto" onClick={() => setOpen(false)}>Hablemos <Icon name="diagonal" size={17} /></a>
      </nav>
      <button className="menu-toggle" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)}>
        <Icon name={open ? 'close' : 'menu'} size={25} />
      </button>
    </header>
  );
}

function Hero() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Café de barrio, de verdad</div>
          <h1>Tu rincón<br />de <em>siempre.</em></h1>
          <p className="hero-intro">Buen café, algo rico y una mesa donde el tiempo va un poco más despacio. Ven por el café, quédate por todo lo demás.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#carta">Descubre la carta <Icon name="arrow" /></a>
            <a className="text-link" href="#visitanos"><Icon name="pin" size={18} /> Estamos en Malasaña</a>
          </div>
          <div className="hero-note">
            <div className="avatar-stack" aria-hidden="true">
              <span>M</span><span>J</span><span>A</span>
            </div>
            <p>Hecho para los de aquí.<br /><strong>Y para los que están de paso.</strong></p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img src="/images/hero.jpg" alt="Interior acogedor de una cafetería de barrio con mesas de madera" />
          </div>
          <div className="open-badge"><span className="open-dot" /> Abierto hoy <strong>8:00 — 20:00</strong></div>
          <div className="handwritten">nos vemos<br />en la vuelta</div>
          <Flower className="hero-flower" />
        </div>
        <div className="scroll-cue"><span>Baja un poquito</span><span className="scroll-line" /></div>
      </section>

      <div className="ticker" aria-label="Nuestros valores">
        <div className="ticker-track">
          <span>Café de especialidad</span><Flower /><span>Pan de masa madre</span><Flower /><span>Hecho cerca, hecho con cariño</span><Flower /><span>Café de especialidad</span><Flower /><span>Pan de masa madre</span><Flower /><span>Hecho cerca, hecho con cariño</span><Flower />
        </div>
      </div>

      <section className="menu-section section" id="carta">
        <div className="section-heading">
          <div><div className="eyebrow"><span /> Pequeños grandes placeres</div><h2>Hay cosas que<br /><em>alegran el día.</em></h2></div>
          <p>Una carta corta, honesta y de temporada.<br />Porque lo bueno no necesita complicarse.</p>
        </div>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <article className="menu-card" key={item.number}>
              <div className="menu-image">
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="menu-tag">{item.tag}</span>
              </div>
              <div className="menu-card-heading"><span>{item.number}</span><h3>{item.title}</h3></div>
              <p>{item.description}</p>
              <div className="menu-price">{item.price}</div>
            </article>
          ))}
        </div>
        <div className="menu-footer"><span>Y mucho más, pregúntanos por la pizarra del día.</span><a className="text-link" href="#contacto">¿Tienes alguna alergia? Consúltanos <Icon name="diagonal" size={18} /></a></div>
      </section>

      <section className="story-section" id="historia">
        <div className="story-image">
          <img src="/images/barista.jpg" alt="Barista preparando café con dedicación" loading="lazy" />
          <div className="story-stamp"><span>Desde</span><strong>2018</strong><span>en el barrio</span></div>
        </div>
        <div className="story-copy">
          <div className="eyebrow light"><span /> Detrás de la barra</div>
          <h2>Un café.<br />Mil <em>historias.</em></h2>
          <p className="story-lead">La Vuelta nació con una idea sencilla: abrir ese lugar al que siempre quieres volver.</p>
          <p>Somos Marta y Leo. Creemos en el café bien hecho, en saludar por tu nombre y en que una tostada sabe mejor cuando no tienes prisa. Trabajamos con productores cercanos y gente que, como nosotros, pone cariño en lo que hace.</p>
          <div className="story-signature">Marta & Leo <span>— los de detrás de la barra</span></div>
          <a className="button button-cream" href="#visitanos">Ven a conocernos <Icon name="arrow" /></a>
        </div>
      </section>

      <section className="quote-section section">
        <Flower className="quote-flower" />
        <blockquote>“Aquí el café sabe mejor.<br />Quizá sea por cómo te tratan.”</blockquote>
        <div className="quote-author"><span>★★★★★</span> Lucía, vecina desde el primer día</div>
      </section>

      <section className="visit-section section" id="visitanos">
        <div className="visit-info">
          <div className="eyebrow"><span /> Muy cerca de ti</div>
          <h2>Nos vemos<br /><em>en el barrio.</em></h2>
          <p>En esa esquina donde siempre pasa algo.<br />Tráete un libro, a tu perro o a quien quieras.</p>
          <div className="visit-details">
            <div><Icon name="pin" size={24} /><div><strong>Calle de la Palma, 28</strong><span>28004 Madrid · Malasaña</span><a href="https://www.google.com/maps/search/?api=1&query=Calle+de+la+Palma+28+Madrid" target="_blank" rel="noreferrer">Cómo llegar <Icon name="diagonal" size={15} /></a></div></div>
            <div><Icon name="clock" size={24} /><div><strong>Lun — Vie · 8:00 — 20:00</strong><span>Sáb — Dom · 9:00 — 20:00</span></div></div>
          </div>
        </div>
        <div className="visit-photo">
          <img src="/images/terrace.jpg" alt="Terraza de cafetería en una calle de barrio" loading="lazy" />
          <div className="terrace-note">Terraza todo el año<br /><span>y mantitas para el invierno</span></div>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-copy">
          <div className="eyebrow light"><span /> Escríbenos</div>
          <h2>¿Hablamos?</h2>
          <p>Para reservas de grupos, tartas por encargo, dudas o simplemente para decir hola.</p>
          <a href="mailto:hola@cafelavuelta.es"><Icon name="mail" size={19} /> hola@cafelavuelta.es</a>
          <Flower className="contact-flower" />
        </div>
        <ContactForm />
      </section>
    </main>
  );
}

function ContactForm() {
  const initial = { name: '', email: '', subject: 'Solo quiero saludar', message: '', website: '' };
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    if (status.type === 'error') setStatus({ type: 'idle', text: '' });
  }

  async function submit(event) {
    event.preventDefault();
    setStatus({ type: 'loading', text: 'Enviando tu mensaje…' });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'No hemos podido enviar el mensaje.');
      setStatus({ type: 'success', text: data.message });
      setForm(initial);
    } catch (error) {
      setStatus({ type: 'error', text: `${error.message} Inténtalo de nuevo en un momento.` });
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <label>Tu nombre<input name="name" type="text" value={form.name} onChange={update} placeholder="¿Cómo te llamas?" autoComplete="name" minLength="2" maxLength="80" required /></label>
        <label>Tu email<input name="email" type="email" value={form.email} onChange={update} placeholder="tu@email.com" autoComplete="email" maxLength="120" required /></label>
      </div>
      <label>¿Sobre qué quieres hablar?
        <select name="subject" value={form.subject} onChange={update}>
          <option>Solo quiero saludar</option>
          <option>Reserva para un grupo</option>
          <option>Encargo de tarta</option>
          <option>Alergias e ingredientes</option>
          <option>Otra cosa</option>
        </select>
      </label>
      <label>Tu mensaje<textarea name="message" value={form.message} onChange={update} placeholder="Cuéntanos…" rows="3" minLength="10" maxLength="1500" required /></label>
      <label className="honeypot" aria-hidden="true">Página web<input name="website" type="text" value={form.website} onChange={update} tabIndex="-1" autoComplete="off" /></label>
      <div className="form-bottom">
        <button className="button button-primary" type="submit" disabled={status.type === 'loading'}>
          {status.type === 'loading' ? 'Enviando…' : 'Enviar mensaje'} <Icon name="arrow" />
        </button>
        <span>Te responderemos muy pronto.</span>
      </div>
      {status.text && <div className={`form-status ${status.type}`} role={status.type === 'error' ? 'alert' : 'status'} aria-live="polite">{status.type === 'success' && <Icon name="check" size={18} />}{status.text}</div>}
    </form>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top"><Brand /><p>Café, barrio y buenos momentos.<br />Nada más. Nada menos.</p><a className="social-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram de Café La Vuelta"><Icon name="instagram" size={22} /></a></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Café La Vuelta</span><span>Hecho con calma en Madrid</span><a href="#inicio">Volver arriba ↑</a></div>
    </footer>
  );
}

export default function App() {
  return <><Header /><Hero /><Footer /></>;
}
