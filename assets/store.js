const grid=document.getElementById('prods'),cards=[...grid.children],q=document.getElementById('q'),sort=document.getElementById('sort'),cat=document.getElementById('cat');
const cnt=document.getElementById('count'),none=document.getElementById('none');
function run(){const t=q.value.trim().toLowerCase();let v=cards.filter(c=>c.dataset.name.includes(t));
const s=sort.value;if(s){v.sort((a,b)=>s=='pa'?a.dataset.price-b.dataset.price:s=='pd'?b.dataset.price-a.dataset.price:s=='na'?a.dataset.name.localeCompare(b.dataset.name):b.dataset.name.localeCompare(a.dataset.name))}else v=cards.filter(c=>v.includes(c));
cards.forEach(c=>c.style.display='none');v.forEach(c=>{c.style.display='';grid.appendChild(c)});
cnt.textContent=v.length+' products';none.style.display=v.length?'none':'block'}
q.oninput=sort.onchange=run;document.getElementById('sf').onsubmit=e=>{e.preventDefault();run()};
cat.onchange=()=>{if(cat.value)location.href=cat.value};run();
