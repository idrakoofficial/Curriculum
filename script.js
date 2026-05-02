/* ============================================================
   DARIO DIDAJ — INTERACTIVE CV
   Animations · Particles · i18n · Tabs · Scroll Reveals
   ============================================================ */

// ============================================================
// LOADER
// ============================================================
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('done');
  }, 1800);
});

// ============================================================
// MINIMAL CURSOR
// ============================================================
const cursor = document.getElementById('cursor');

if (window.matchMedia('(min-width: 1025px)').matches) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Hover state
  document.querySelectorAll('a, button, .skill-block, .video-card, .comm-card, .social-card, .soft-card, .int-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

// ============================================================
// PARTICLES BACKGROUND
// ============================================================
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particles = [];
const PARTICLE_COUNT = window.innerWidth < 768 ? 40 : 80;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() {
    this.reset();
    this.y = Math.random() * canvas.height;
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.size = Math.random() * 2 + 0.5;
    this.speedY = Math.random() * 0.4 + 0.15;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.6 + 0.2;
    this.pulse = Math.random() * Math.PI * 2;
  }
  update() {
    this.y -= this.speedY;
    this.x += this.speedX;
    this.pulse += 0.02;
    if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
      this.reset();
    }
  }
  draw() {
    const op = this.opacity * (0.6 + 0.4 * Math.sin(this.pulse));
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(124, 200, 255, ${op})`;
    ctx.shadowColor = 'rgba(76, 200, 255, 0.8)';
    ctx.shadowBlur = 8;
    ctx.fill();
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ============================================================
// NAV SCROLL EFFECT
// ============================================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// ============================================================
// LANGUAGE SWITCH (IT / EN)
// ============================================================
const translations = {
  it: {
    loading: 'EVOCO IL DRAGO',
    nav_about: 'Chi Sono',
    nav_skills: 'Skills',
    nav_portfolio: 'Portfolio',
    nav_experience: 'Carriera',
    nav_contact: 'Contatti',
    hero_tag: 'AI DIRECTOR · CINEMATIC STORYTELLER · DIGITAL MARKETER',
    hero_tagline: "Dove l'immaginazione incontra l'intelligenza artificiale.",
    hero_tagline_2: 'Costruisco mondi impossibili.',
    hero_cta_1: 'Guarda i Lavori',
    hero_cta_2: 'Contattami',

    sec_about: 'CHI SONO',
    meta_name: 'NOME',
    meta_role: 'RUOLO',
    meta_loc: 'CITTÀ',
    meta_status: 'STATO',
    about_title: 'Non faccio solo video.<br><span class="text-gradient">Dirigo l\'impossibile.</span>',
    about_p1: "Sono uno <strong>studente di Digital Marketing</strong> e <strong>AI Director</strong> con una profonda passione per lo storytelling cinematografico e la creazione visiva. Fondo creatività e intelligenza artificiale all'avanguardia per produrre videoclip, brand film ed esperienze audiovisive che sembrano arrivate da un'altra dimensione.",
    about_p2: "<strong>Idrako</strong> — il mio nome d'arte e progetto musicale AI — è dove tutto ha inizio. Da lì ai lavori commerciali nel settore automotive di lusso, lavoro dove l'arte e la tecnologia si scontrano. Ogni progetto è un'occasione per spingere i limiti del possibile.",

    decoder_label: 'DIETRO IL NOME',
    meaning_dario: 'il mio nome',
    meaning_drako: 'il drago · forza & mito',
    meaning_idra: 'acqua · ghiaccio · fluidità',
    decoder_tagline: "Tre parole, un nome.<br><span class=\"accent\">DARIO</span> incontra il <span class=\"accent\">DRAGO</span> attraverso l'<span class=\"accent\">IDRA</span>.",

    sec_skills: 'ARSENALE',
    skills_title_1: 'Gli strumenti che',
    skills_title_2: "costruiscono l'impossibile.",
    ai_subtitle: 'Strumenti di Intelligenza Artificiale',
    design_subtitle: 'Strumenti di Graphic Design & Editing',
    hf_desc: 'Generazione video cinematografici · Marketing Studio',
    claude_desc: 'Direzione creativa · Codice · Strategia',
    suno_desc: 'Composizione musicale AI per il progetto Idrako',
    seed_desc: 'Generazione video con reference',
    kling_desc: 'Sequenze cinematografiche multi-shot',
    nano_desc: 'Generazione immagini ad alta fedeltà',
    mj_desc: 'Concept art · Moodboard visivi',
    gpt_desc: 'Prompt engineering · Strategia contenuti',
    other_desc: 'Strumenti specializzati per ogni esigenza creativa',
    cc_desc: 'Editing video rapido pronto per i social',
    canva_desc: 'Brand asset · Design social · Template',
    figma_desc: 'UI/UX design · Prototipazione',
    ps_desc: 'Photo editing · Compositing · Ritocco',
    pr_desc: 'Editing video professionale & post-produzione',
    ai_desc: 'Logo design · Illustrazione vettoriale',

    lang_title: 'LINGUE',
    lang_native: 'Madrelingua',
    lang_native2: 'Madrelingua',
    lang_good: 'Buono · B2',

    soft_title: 'SOFT SKILLS',
    soft_1: 'Problem Solving',
    soft_2: 'Multitasking',
    soft_3: 'Lavoro di Squadra',
    soft_4: 'Rispetto Scadenze',
    soft_5: 'Visione Creativa',
    soft_6: 'Adattabilità',

    sec_portfolio: 'PORTFOLIO',
    port_title_1: 'Lavori firmati',
    port_title_2: 'Idrako.',
    tab_music: 'Video Musicali',
    tab_school: 'School Project',
    tab_commercial: 'Lavori Commerciali',
    latest: 'ULTIMA USCITA',
    school_project: 'SCHOOL PROJECT',
    type_music: 'Videoclip AI',
    type_school: 'Spot Cinematografico · Progetto Scolastico',
    watch_yt: 'Guarda su YouTube',
    all_videos: 'Tutti i Video Idrako',
    full_playlist: 'Vedi la Playlist Completa su YouTube',

    reel_1_title: 'Cinematic Reel · Vol. 01',
    reel_1_desc: 'Showreel di sequenze cinematografiche AI. In arrivo come video YouTube non in elenco.',
    reel_2_title: 'AI Director Showcase',
    reel_2_desc: 'Selezione di lavori sperimentali personali — fantasy, sci-fi e mondi astratti.',
    reel_3_title: 'Behind the Magic',
    reel_3_desc: 'Video di processo che mostrano come i mondi AI vengono costruiti dal prompt al cut finale.',
    status_upload: 'IN ATTESA DI UPLOAD',
    port_note: 'Altri lavori cinematografici saranno caricati come video YouTube non in elenco e incorporati qui. Stay tuned.',
    fw_role: 'Graphic Designer',
    fw_desc: 'Agenzia di comunicazione specializzata in eventi e promozioni nel settore automotive di lusso. Ho disegnato gli asset visivi per eventi automotive di alta gamma e campagne brand.',
    rc_role: 'AI & Marketing Specialist',
    rc_desc: 'Piattaforma SaaS che aiuta i ristoranti ad automatizzare marketing, gestione e comunicazione attraverso l\'intelligenza artificiale.',
    gj_role: 'Co-Founder · Designer',
    gj_desc: 'Start-up scolastica per creare un prodotto eco-sostenibile che converte l\'energia cinetica del movimento della bicicletta in energia elettrica.',
    id_role: 'Founder · AI Director · Music Producer',
    id_desc: 'Il mio progetto personale di musica e video AI. Fonde creatività e intelligenza artificiale per produrre canzoni originali e contenuti audiovisivi con un\'estetica fantasy-cinematografica. Distribuito su YouTube, Spotify, Instagram, TikTok, X e Threads.',
    tag_luxury: 'Lusso',
    tag_auto: 'Automotive',
    tag_events: 'Eventi',
    tag_marketing: 'Marketing',
    tag_horeca: 'HoReCa',
    tag_green: 'Green Tech',
    tag_innovation: 'Innovazione',
    tag_aimusic: 'Musica AI',
    tag_cinematic: 'Cinematografico',
    tag_personal: 'Personal Brand',
    visit_site: 'Visita il Sito',

    sec_journey: 'PERCORSO',
    education: 'FORMAZIONE',
    work: 'ESPERIENZE LAVORATIVE',
    present: 'Presente',
    ongoing: 'In corso',
    edu_1_title: 'Laurea Triennale in Comunicazione e Multimedia',
    edu_1_desc: 'Programma integrativo. Corsi: Semiotica generale, Community Management, Arti Visive e Nuove Tecnologie.',
    edu_2_title: 'Digital Marketing per il Made in Italy',
    edu_2_desc: 'Graphic Design, Comunicazione Multimediale, UX/UI, Social Media, E-commerce.',
    edu_3_title: 'Corso AI Automation',
    edu_3_desc: 'Automazione AI no-code, design di workflow, mastery di Make.com.',
    edu_4_title: 'Diploma di Liceo · Scienze Applicate',
    edu_4_org: 'Liceo Scientifico',

    founder: 'Founder & AI Director',
    idrako_org: 'Progetto Personale di Musica AI',
    idrako_work_desc: 'Founder, music producer, AI director e content strategist per il brand Idrako. Dalla composizione musicale alla regia video, ownership creativa totale.',
    rc_position: 'AI & Marketing Specialist',
    rc_work_desc: 'Piattaforma SaaS che aiuta i ristoranti ad automatizzare marketing, gestione e comunicazione attraverso AI.',
    fw_position: 'Graphic Designer',
    fw_work_desc: 'Visual design per il settore automotive di lusso — eventi, brand campaign, social.',
    waiter_position: 'Cameriere',
    waiter_desc: 'Vincitore del programma TV "4 Ristoranti" di Alessandro Borghese. Front-of-house, customer experience.',

    int_1: 'Videogiochi',
    int_1_desc: 'Ispirazione visiva per lo storytelling',
    int_2: 'Intelligenza Artificiale',
    int_2_desc: 'Ricerca e sperimentazione quotidiana',
    int_3: 'Palestra',
    int_3_desc: 'Disciplina e concentrazione',
    int_4: 'Pianoforte · Chitarra',
    int_4_desc: 'La musica come pratica quotidiana',

    sec_contact: 'CONTATTI',
    contact_title_1: 'Costruiamo',
    contact_title_2: 'qualcosa di epico.',
    contact_sub: 'Aperto a collaborazioni su videoclip AI, contenuti cinematografici, brand film, ruoli full-time nel digital marketing e progetti di AI direction.',
    email: 'EMAIL',
    email_idrako: 'EMAIL · IDRAKO',
    email_personal: 'EMAIL · PERSONALE',
    phone: 'TELEFONO',
    location: 'LOCATION',
    follow_journey: 'SEGUI IL VIAGGIO',
    listen_now: 'Ascolta ora',
    connect: 'Connettiti',

    footer_quote: '"Dove l\'immaginazione incontra l\'intelligenza artificiale."',
    footer_made: 'Progettato e costruito con AI'
  },
  en: {
    loading: 'SUMMONING THE DRAGON',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_portfolio: 'Portfolio',
    nav_experience: 'Experience',
    nav_contact: 'Contact',
    hero_tag: 'AI DIRECTOR · CINEMATIC STORYTELLER · DIGITAL MARKETER',
    hero_tagline: 'Where imagination meets artificial intelligence.',
    hero_tagline_2: 'I craft impossible worlds.',
    hero_cta_1: 'Watch the Work',
    hero_cta_2: 'Get in Touch',

    sec_about: 'ABOUT',
    meta_name: 'NAME',
    meta_role: 'ROLE',
    meta_loc: 'LOCATION',
    meta_status: 'STATUS',
    about_title: "I don't just make videos.<br><span class=\"text-gradient\">I direct the impossible.</span>",
    about_p1: "I'm a <strong>Digital Marketing student</strong> and <strong>AI Director</strong> with a deep passion for cinematic storytelling and visual creation. I blend creativity with cutting-edge artificial intelligence to produce music videos, brand films, and audiovisual experiences that feel taken from another dimension.",
    about_p2: "<strong>Idrako</strong> — my artist name and AI music project — is where it all begins. From there to commercial work in the luxury automotive sector, I work where art and technology collide. Every project is a chance to push what's possible.",

    decoder_label: 'BEHIND THE NAME',
    meaning_dario: 'my name',
    meaning_drako: 'the dragon · strength & myth',
    meaning_idra: 'water · ice · flow',
    decoder_tagline: "Three words, one name.<br><span class=\"accent\">DARIO</span> meets the <span class=\"accent\">DRAGON</span> through the <span class=\"accent\">IDRA</span>.",

    sec_skills: 'ARSENAL',
    skills_title_1: 'The tools that',
    skills_title_2: 'build the impossible.',
    ai_subtitle: 'Artificial Intelligence tools',
    design_subtitle: 'Graphic Design & Editing tools',
    hf_desc: 'Cinematic video generation · Marketing Studio',
    claude_desc: 'Creative direction · Code · Strategy',
    suno_desc: 'AI music composition for Idrako project',
    seed_desc: 'Reference-driven video generation',
    kling_desc: 'Multi-shot cinematic sequences',
    nano_desc: 'High-fidelity image generation',
    mj_desc: 'Concept art · Visual moodboards',
    gpt_desc: 'Prompt engineering · Content strategy',
    other_desc: 'Specialized tools for every creative need',
    cc_desc: 'Fast-turn social-ready video editing',
    canva_desc: 'Brand assets · Social design · Templates',
    figma_desc: 'UI/UX design · Prototyping',
    ps_desc: 'Photo editing · Compositing · Retouching',
    pr_desc: 'Professional video editing & post-production',
    ai_desc: 'Logo design · Vector illustration',

    lang_title: 'LANGUAGES',
    lang_native: 'Native speaker',
    lang_native2: 'Native speaker',
    lang_good: 'Good · B2',

    soft_title: 'SOFT SKILLS',
    soft_1: 'Problem Solving',
    soft_2: 'Multitasking',
    soft_3: 'Teamworking',
    soft_4: 'Deadline-Driven',
    soft_5: 'Creative Vision',
    soft_6: 'Adaptability',

    sec_portfolio: 'PORTFOLIO',
    port_title_1: 'Works signed',
    port_title_2: 'by Idrako.',
    tab_music: 'Music Videos',
    tab_school: 'School Project',
    tab_commercial: 'Commercial Work',
    latest: 'LATEST RELEASE',
    school_project: 'SCHOOL PROJECT',
    type_music: 'AI Music Video',
    type_school: 'Cinematic Spot · School Project',
    watch_yt: 'Watch on YouTube',
    all_videos: 'All Idrako Videos',
    full_playlist: 'View Full Playlist on YouTube',

    reel_1_title: 'Cinematic Reel · Vol. 01',
    reel_1_desc: 'Showreel of cinematic AI sequences. Coming soon to YouTube as unlisted upload.',
    reel_2_title: 'AI Director Showcase',
    reel_2_desc: 'Selection of personal experimental work — fantasy, sci-fi & abstract worlds.',
    reel_3_title: 'Behind the Magic',
    reel_3_desc: 'Process videos showing how AI worlds are built from prompt to final cut.',
    status_upload: 'PENDING UPLOAD',
    port_note: 'More cinematic work will be uploaded as unlisted YouTube videos and embedded here. Stay tuned.',

    fw_role: 'Graphic Designer',
    fw_desc: 'Communication Agency specialized in events and promotions in the luxury automotive sector. Designed visual assets for high-end automotive events and brand campaigns.',
    rc_role: 'AI & Marketing Specialist',
    rc_desc: 'SaaS platform that helps restaurants automate marketing, management, and communication through artificial intelligence.',
    gj_role: 'Co-Founder · Designer',
    gj_desc: 'High school start-up creating an eco-sustainable product that converts kinetic energy from bicycle movement into electrical energy.',
    id_role: 'Founder · AI Director · Music Producer',
    id_desc: 'My personal AI music & video project. Blends creativity and artificial intelligence to produce original songs and audiovisual content with a fantasy-cinematic aesthetic. Distributed across YouTube, Spotify, Instagram, TikTok, X & Threads.',
    tag_luxury: 'Luxury',
    tag_auto: 'Automotive',
    tag_events: 'Events',
    tag_marketing: 'Marketing',
    tag_horeca: 'HoReCa',
    tag_green: 'Green Tech',
    tag_innovation: 'Innovation',
    tag_aimusic: 'AI Music',
    tag_cinematic: 'Cinematic',
    tag_personal: 'Personal Brand',
    visit_site: 'Visit Website',

    sec_journey: 'JOURNEY',
    education: 'EDUCATION',
    work: 'WORK EXPERIENCE',
    present: 'Present',
    ongoing: 'Ongoing',
    edu_1_title: "Bachelor's in Communication & Multimedia",
    edu_1_desc: 'Integrative Program. Courses: General Semiotics, Community Management, Visual Arts and New Technologies.',
    edu_2_title: 'Digital Marketing for Made in Italy',
    edu_2_desc: 'Graphic Design, Multimedia Communication, UX/UI, Social Media, E-commerce.',
    edu_3_title: 'AI Automation Course',
    edu_3_desc: 'No-code AI automation, workflow design, Make.com mastery.',
    edu_4_title: 'High School Diploma · Applied Sciences',
    edu_4_org: 'Scientific Lyceum',

    founder: 'Founder & AI Director',
    idrako_org: 'Personal AI Music Project',
    idrako_work_desc: 'Founder, music producer, AI director and content strategist for the Idrako brand. From music composition to video direction, full creative ownership.',
    rc_position: 'AI & Marketing Specialist',
    rc_work_desc: 'SaaS platform helping restaurants automate marketing, management and communication through AI.',
    fw_position: 'Graphic Designer',
    fw_work_desc: 'Visual design for the luxury automotive sector — events, brand campaigns, social.',
    waiter_position: 'Waiter',
    waiter_desc: 'Winner of Italian TV show "4 Ristoranti" by Alessandro Borghese. Front-of-house, customer experience.',

    int_1: 'Videogames',
    int_1_desc: 'Visual storytelling inspiration',
    int_2: 'Artificial Intelligence',
    int_2_desc: 'Daily research & experimentation',
    int_3: 'Gym',
    int_3_desc: 'Discipline & focus',
    int_4: 'Piano · Guitar',
    int_4_desc: 'Music as a daily practice',

    sec_contact: 'CONTACT',
    contact_title_1: "Let's build",
    contact_title_2: 'something epic.',
    contact_sub: 'Open to collaborations on AI music videos, cinematic content, brand films, full-time digital marketing roles, and AI direction projects.',
    email: 'EMAIL',
    email_idrako: 'EMAIL · IDRAKO',
    email_personal: 'EMAIL · PERSONAL',
    phone: 'PHONE',
    location: 'LOCATION',
    follow_journey: 'FOLLOW THE JOURNEY',
    listen_now: 'Listen now',
    connect: 'Connect',

    footer_quote: '"Where imagination meets artificial intelligence."',
    footer_made: 'Designed & built with AI'
  }
};

function setLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  try { localStorage.setItem('cv-lang', lang); } catch(e) {}
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

// Initialize language (default IT, persist if available)
let savedLang = 'it';
try { savedLang = localStorage.getItem('cv-lang') || 'it'; } catch(e) {}
setLanguage(savedLang);

// ============================================================
// PORTFOLIO TABS
// ============================================================
document.querySelectorAll('.port-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-tab');
    document.querySelectorAll('.port-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.port-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`.port-content[data-content="${target}"]`).classList.add('active');
  });
});

// ============================================================
// SCROLL REVEAL
// ============================================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      // animate skill bars
      if (entry.target.classList.contains('skill-bar')) {
        entry.target.classList.add('animate');
      }
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

// Apply reveal class to many elements
document.querySelectorAll(
  '.section-label, .section-title, .about-photo, .about-text, .photo-meta, ' +
  '.skill-block, .soft-card, .video-card, .comm-card, ' +
  '.tl-item, .int-card, .contact-row, .social-card, .contact-title, .contact-sub'
).forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Observe skill bars for fill animation
document.querySelectorAll('.skill-bar').forEach(b => observer.observe(b));

// ============================================================
// SMOOTH SCROLL FOR NAV
// ============================================================
document.querySelectorAll('.nav-links a, .hero-cta a').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ============================================================
// IDRAKO DECODER — interactive letter highlighting
// ============================================================
function initIdrakoDecoder() {
  const decoder = document.querySelector('.idrako-decoder');
  if (!decoder) return;

  const letters = decoder.querySelectorAll('.dl');
  const words = decoder.querySelectorAll('.dw');

  function setHighlight(letterIndices) {
    letters.forEach((l, i) => {
      l.classList.remove('glow', 'dim');
      if (letterIndices === null) return;
      if (letterIndices.includes(i)) l.classList.add('glow');
      else l.classList.add('dim');
    });
  }

  words.forEach(word => {
    const indices = word.getAttribute('data-letters').split(',').map(n => parseInt(n, 10));

    word.addEventListener('mouseenter', () => {
      decoder.classList.add('is-hover');
      word.classList.add('active');
      setHighlight(indices);
    });

    word.addEventListener('mouseleave', () => {
      decoder.classList.remove('is-hover');
      word.classList.remove('active');
      setHighlight(null);
    });

    // Touch support: tap to toggle
    word.addEventListener('click', (e) => {
      if (window.matchMedia('(hover: hover)').matches) return;
      e.preventDefault();
      const wasActive = word.classList.contains('active');
      words.forEach(w => w.classList.remove('active'));
      if (wasActive) {
        decoder.classList.remove('is-hover');
        setHighlight(null);
      } else {
        decoder.classList.add('is-hover');
        word.classList.add('active');
        setHighlight(indices);
      }
    });
  });
}

initIdrakoDecoder();

// ============================================================
// HERO VIDEO — graceful fallback if file missing
// ============================================================
const heroVideoEl = document.querySelector('.hero-video');
if (heroVideoEl) {
  heroVideoEl.addEventListener('error', () => {
    heroVideoEl.style.display = 'none';
  });
  // Some browsers fire 'stalled' if no source is reachable
  const sourceEl = heroVideoEl.querySelector('source');
  if (sourceEl) {
    sourceEl.addEventListener('error', () => {
      heroVideoEl.style.display = 'none';
    });
  }
}

// ============================================================
// HERO TITLE — auto-fit so DARIO DIDAJ never gets clipped
// ============================================================
function fitHeroTitle() {
  const title = document.querySelector('.hero-title');
  const heroEl = document.querySelector('.hero');
  if (!title || !heroEl) return;

  const inner = title.querySelector('.title-line') || title;

  // Use hero width minus its horizontal padding for a real "available" width
  const heroStyle = window.getComputedStyle(heroEl);
  const padL = parseFloat(heroStyle.paddingLeft) || 0;
  const padR = parseFloat(heroStyle.paddingRight) || 0;
  // 92% of available width = small safety margin
  const targetWidth = (heroEl.clientWidth - padL - padR) * 0.92;

  // Measure natural width at 100px without text-shadow influence
  const originalShadow = inner.style.textShadow;
  inner.style.textShadow = 'none';
  title.style.fontSize = '100px';
  void title.offsetWidth; // force reflow
  const widthAt100 = inner.scrollWidth || title.scrollWidth;
  inner.style.textShadow = originalShadow;

  if (widthAt100 <= 0) return;

  // Linear scaling: fontSize that fits target
  let size = Math.floor((targetWidth / widthAt100) * 100);
  size = Math.max(32, Math.min(240, size));
  title.style.fontSize = size + 'px';
}

// Run as soon as fonts are ready and on every resize
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(fitHeroTitle);
}
window.addEventListener('load', fitHeroTitle);
window.addEventListener('resize', fitHeroTitle);
// Also retry shortly after to catch font swaps
setTimeout(fitHeroTitle, 600);
setTimeout(fitHeroTitle, 1500);

// ============================================================
// PARALLAX ON HERO VIDEO
// ============================================================
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroVideo.style.transform = `translateY(${y * 0.25}px) scale(${1 + y * 0.0002})`;
    }
  }, { passive: true });
}
