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
  }