'use strict';
// Menu mobile : libellé selon l'état, fermeture par lien, par Échap ou par clic à l'extérieur.
const menu=document.querySelector('.menu'),nav=document.getElementById('navigation');
if(menu&&nav){
  const setMenu=(open,focusButton)=>{
    menu.setAttribute('aria-expanded',String(open));
    menu.setAttribute('aria-label',open?'Fermer la navigation':'Ouvrir la navigation');
    menu.textContent=open?'✕':'☰';
    nav.classList.toggle('open',open);
    if(!open&&focusButton)menu.focus();
  };
  menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true')setMenu(false,true)});
  document.addEventListener('click',e=>{if(menu.getAttribute('aria-expanded')==='true'&&!nav.contains(e.target)&&!menu.contains(e.target))setMenu(false)});
}
// Apparition douce des blocs au défilement
const io='IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -10% 0px'}):null;
document.querySelectorAll('.world,.programs li,.col,.steps-line li,.product,.stats li').forEach(el=>{if(io){el.classList.add('reveal');io.observe(el)}});
