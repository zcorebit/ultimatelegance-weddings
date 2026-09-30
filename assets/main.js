const h=document.getElementById('hdr');
const on=()=>h.classList.toggle('solid',scrollY>40);on();addEventListener('scroll',on,{passive:true});
const nav=document.getElementById('nav');
document.getElementById('burger').onclick=()=>nav.classList.toggle('open');
nav.addEventListener('click',e=>{if(e.target.tagName==='A')nav.classList.remove('open')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>{if(location.hash.includes('shot'))el.classList.add('in');else io.observe(el)});
// lightbox
const lb=document.getElementById('lb');
if(lb){const li=lb.querySelector('img');
document.addEventListener('click',e=>{const im=e.target.closest('[data-zoom]');if(im){li.src=im.dataset.zoom||im.src;lb.classList.add('on')}else if(e.target===lb||e.target.tagName==='BUTTON')lb.classList.remove('on')});
addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('on')});}
// tabs
document.querySelectorAll('[data-tabs]').forEach(w=>{const b=w.querySelectorAll('button'),p=w.querySelectorAll('.panel');
b.forEach((x,i)=>x.onclick=()=>{b.forEach(y=>y.classList.toggle('on',y===x));p.forEach((y,j)=>y.hidden=j!==i)})});
