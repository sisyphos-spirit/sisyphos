// Menú móvil
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('mainNav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.menu-list a').forEach(a=>{
    a.addEventListener('click', ()=>{ nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); });
  });

  // Resaltar sección activa
  const links = document.querySelectorAll('.menu-list a');
  const sections = document.querySelectorAll('main section');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = entry.target.getAttribute('id');
        links.forEach(l=>l.classList.toggle('active', l.getAttribute('href') === '#'+id));
      }
    });
  }, {rootMargin:'-45% 0px -50% 0px', threshold:0});
  sections.forEach(s=>observer.observe(s));

  // Textura de fondo con franjas diagonales sutiles
  const field = document.getElementById('slashfield');
  const stripeColors = ['rgba(37,64,255,.05)','rgba(209,39,63,.04)','rgba(205,164,73,.03)'];
  for(let i=0;i<10;i++){
    const s = document.createElement('span');
    const w = Math.random()*3+1;
    s.style.width = w+'px';
    s.style.height = '160%';
    s.style.left = (Math.random()*100)+'%';
    s.style.top = '-30%';
    s.style.background = stripeColors[i % stripeColors.length];
    s.style.transform = 'rotate(18deg)';
    field.appendChild(s);
  };

// Traducciones
const translations = {
  es: {
    brandTag:"Dev · Games",
    navHome:"Inicio", navAbout:"Sobre mí", navProjects:"Proyectos", navSkills:"Habilidades", navExperience:"Experiencia", navContact:"Contacto",
    heroEyebrow:"Portfolio — 2026",
    heroTitle:"Sisyphos<br><em>Spirit</em>",
    heroLead:"Desarrollador FullStack & Videojuegos.",
    heroBtnProjects:"Ver proyectos ▸",
    heroBtnContact:"Hablemos",
    scrollCue:"SCROLL",
    aboutEyebrow:"01 — Perfil",
    aboutTitle:"Sobre mí",
    hudPseudo:"Pseudónimo:", hudStatus:"Status:", hudClass:"Clase:", hudBuild:"Build:",
    hudStatusVal:"Online", hudClassVal:"Programador FullStack", hudBuildVal:"Game Dev",
    frameTag:"FICHA · DEV",
    aboutRole:"Desarrollador de apps multiplataforma · Game dev",
    aboutBio:"Disfruto convirtiendo ideas en productos utilizables. Me interesan especialmente explorar la relación entre creatividad, eficacia y eficiencia.",
    philosophy:"Filosofía de trabajo:",
    statCreativity:"CREATIVIDAD", statCreativityVal:"Máxima",
    statEfficiency:"EFICIENCIA", statEfficiencyVal:"Máxima",
    statIteration:"ITERACIÓN", statIterationVal:"Elevada",
    statDetail:"DETALLE", statDetailVal:"Alta",
    projectsEyebrow:"02 — Selección", projectsTitle:"Proyectos",
    p1desc:"Aplicación móvil multiplataforma para la gestión y exploración de recetas culinarias.",
    p2desc:"Proyecto de grupo creado en 3 meses. Videojuego multijugador competitivo ambientado en una escuela de magia.",
    p3desc:'Videojuego de ritmo creado en 7 días para "The Very Serious Juniper Dev Game Jam".',
    codeLabel:"Código", itchLabel:"Itch.io",
    skillsEyebrow:"03 — Herramientas", skillsTitle:"Habilidades",
    skillGroup1:"Lenguajes", skillGroup2:"Apps & Frameworks", skillGroup3:"Motores de juego", skillGroup4:"Backend & Datos", skillGroup5:"Herramientas",
    expEyebrow:"04 — Trayectoria", expTitle:"Experiencia",
    exp1title:"Desarrollador Multiplataforma y Game Dev",
    exp1desc:"Me mantengo en constante aprendizaje y sigo trabajando en proyectos que representen mis valores profesionales y visión creativa",
    exp2title:"Máster en desarrollo de videojuegos", exp2org:"FP",
    exp2desc:"Desarrollo de prototipos y juegos completos para proyectos de clase o jams, desde diseño de mecánicas hasta publicación.",
    exp3org:"Prácticas de trabajo",
    exp3desc:'Experiencia de trabajo como Software developer en <a class="text-links" href="https://www.cloudcix.com/">CloudCix</a> (Cork, Irlanda).',
    exp4title:"Desarrollo de aplicaciones multiplataforma", exp4org:"FP",
    exp4desc:"Base técnica en programación, diseño de UI y experiencia de usuario.",
    exp5title:"Formación / Primeros proyectos", exp5org:"Autodidacta",
    exp5desc:"Aprendizaje básico, proyectos simples y primeros pasos en el mundo del software y el desarrollo",
    contactEyebrow:"05 — Conecta", contactTitle:"Contacto",
    labelEmail:"Email", labelGithub:"GitHub", labelLinkedin:"LinkedIn", labelItch:"Itch.io",
    footer:"© 2026 Sisyphos Spirit"
  },
  en: {
    brandTag:"Dev · Games",
    navHome:"Home", navAbout:"About", navProjects:"Projects", navSkills:"Skills", navExperience:"Experience", navContact:"Contact",
    heroEyebrow:"Portfolio — 2026",
    heroTitle:"Sisyphos<br><em>Spirit</em>",
    heroLead:"FullStack Developer & Game Developer.",
    heroBtnProjects:"View projects ▸",
    heroBtnContact:"Let's talk",
    scrollCue:"SCROLL",
    aboutEyebrow:"01 — Profile",
    aboutTitle:"About me",
    hudPseudo:"Alias:", hudStatus:"Status:", hudClass:"Class:", hudBuild:"Build:",
    hudStatusVal:"Online", hudClassVal:"FullStack Programmer", hudBuildVal:"Game Dev",
    frameTag:"CHARACTER · DEV",
    aboutRole:"Multiplatform app developer · Game dev",
    aboutBio:"I enjoy turning ideas into usable products. I'm especially interested in exploring the relationship between creativity, effectiveness, and efficiency.",
    philosophy:"Work philosophy:",
    statCreativity:"CREATIVITY", statCreativityVal:"Maximum",
    statEfficiency:"EFFICIENCY", statEfficiencyVal:"Maximum",
    statIteration:"ITERATION", statIterationVal:"High",
    statDetail:"DETAIL", statDetailVal:"High",
    projectsEyebrow:"02 — Selection", projectsTitle:"Projects",
    p1desc:"Multiplatform mobile app for managing and exploring cooking recipes.",
    p2desc:"Group project built in 3 months. Competitive multiplayer game set in a school of magic.",
    p3desc:'Rhythm game made in 7 days for "The Very Serious Juniper Dev Game Jam".',
    codeLabel:"Code", itchLabel:"Itch.io",
    skillsEyebrow:"03 — Tools", skillsTitle:"Skills",
    skillGroup1:"Languages", skillGroup2:"Apps & Frameworks", skillGroup3:"Game Engines", skillGroup4:"Backend & Data", skillGroup5:"Tools",
    expEyebrow:"04 — Journey", expTitle:"Experience",
    exp1title:"Multiplatform Developer & Game Dev",
    exp1desc:"I keep learning constantly and working on projects that reflect my professional values and creative vision.",
    exp2title:"Master's in Video Game Development", exp2org:"Vocational training",
    exp2desc:"Development of prototypes and full games for class projects or jams, from mechanics design to release.",
    exp3org:"Work placement",
    exp3desc:'Work experience as a Software Developer at <a class="text-links" href="https://www.cloudcix.com/">CloudCix</a> (Cork, Ireland).',
    exp4title:"Multiplatform Application Development", exp4org:"Vocational training",
    exp4desc:"Technical foundation in programming, UI design, and user experience.",
    exp5title:"Training / First projects", exp5org:"Self-taught",
    exp5desc:"Basic learning, simple projects and first steps into the world of software and development.",
    contactEyebrow:"05 — Connect", contactTitle:"Contact",
    labelEmail:"Email", labelGithub:"GitHub", labelLinkedin:"LinkedIn", labelItch:"Itch.io",
    footer:"© 2026 Sisyphos Spirit"
  }
};

function applyLanguage(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const value = translations[lang]?.[key];
    if(value !== undefined) el.innerHTML = value;
  });
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });
  try{ localStorage.setItem('portfolio-lang', lang); }catch(e){}
};

(function initLanguage(){
  let saved = 'es';
  try{ saved = localStorage.getItem('portfolio-lang') || 'es'; }catch(e){}
  applyLanguage(saved);
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click', ()=> applyLanguage(btn.getAttribute('data-lang')));
  });
})();